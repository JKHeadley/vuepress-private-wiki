<template>
  <div class="counter">
      <h1>{{number}}</h1>
      <button @click = "increment">Increment</button>
      <button @click = "decrement">Decrement</button>
      <button @click = "login">Login</button>
      <button @click = "logout">Logout</button>
  </div>
</template>

<script>
    import authService from '../services/auth.service.js'
    import store from '../store'

    function parseJwt (token) {
        if (window) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse(window.atob(base64));
        }
    };

    export default {
        data(){
            return{
                number: 0,
                loginCreds: {
                    email: 'test@user.com',
                    password: 'root'
                }
            }
        },
        methods:{
            increment(){
                if(this.number >= 0){
                    this.number++
                }
            },
            decrement(){
                if(this.number > 0){
                    this.number --
                }
            },
            logout(){
                authService.logout();
            },
            login(){
                authService.login(this.loginCreds)
                .then(result => {
                    console.log("LOGIN:", parseJwt(result.data.accessToken))
                })
            }
        }
    }
</script>
<style scoped>
.counter{
    display: inline-block;
    margin-left: 30%;

}
button{
    display: inline-block;
    padding: 20px;
    margin: 10px;
    font-weight: bold;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgb(11, 11, 114);
}
h1{
    text-align: center;
}
</style>
