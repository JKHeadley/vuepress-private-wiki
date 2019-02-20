<template>
  <div>
      <input v-model="email"> 
      <input v-model="password"> 
      <button @click = "login">Login</button>
      <button @click = "googleLogin">Google Login</button>
  </div>
</template>

<script>
    import authService from '../services/auth.service.js'
    import store from '../store'
    import config from '../config'

    function parseJwt (token) {
        if (window) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse(window.atob(base64));
        }
    };

    export default {
        data() {
            return { 
                loading: false,
                formstate: {},
                flash: false,
                flashType: null,
                flashMessage: '',
                accountActive: true,
                emailSent: false,
                email: "test@user.com",
                password: "root",
            }
        },
        computed: {
        // The '/auth/{social}' endpoint will first authenticate the user using the third party
        // social authentication, then the appy server will redirect us to the '/login/social/' view
        loginFacebookURI () {
            return config.serverURI + '/auth/facebook'
        },
        loginGoogleURI () {
            return config.serverURI + '/auth/google'
        },
        loginGithubURI () {
            return config.serverURI + '/auth/github'
        }
        },
        methods:{
            login(){
                const { email, password } = this
                authService.login({ email, password })
                .then(result => {
                    console.log("LOGIN:", parseJwt(result.data.accessToken))
                })
            }
        }
    }
</script>
<style scoped>
/* button{
    display: inline-block;
    padding: 20px;
    margin: 10px;
    font-weight: bold;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgb(11, 11, 114);
}
h1{
    text-align: center;
} */
</style>
