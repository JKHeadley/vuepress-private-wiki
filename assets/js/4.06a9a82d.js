(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{395:function(o,n,e){},400:function(o,n,e){"use strict";var t=e(395);e.n(t).a},404:function(o,n,e){"use strict";e.r(n);e(43),e(190),e(191),e(2);var t={data:function(){return{loading:!1,formstate:{},flash:!1,flashType:null,flashMessage:"",accountActive:!0,emailSent:!1,email:"test@user.com",password:"root",googleSignInParams:{client_id:"943863367119-6f7m2f8o7ckvl87akr3ddqjd6bmu1kd7.apps.googleusercontent.com"}}},computed:{loginFacebookURI:function(){},loginGoogleURI:function(){},loginGithubURI:function(){}},methods:{login:function(){this.email,this.password;console.log("PROCESS:","test"),console.log("PROCESS:","test3")},onSignInSuccess:function(o){console.log("PROFILE:",o.getBasicProfile()),console.log("DOMAIN:",o.getHostedDomain())},onSignInError:function(o){console.log("OH NOES",o)}}},i=(e(400),e(0)),s=Object(i.a)(t,function(){var o=this,n=o.$createElement,e=o._self._c||n;return e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:o.email,expression:"email"}],domProps:{value:o.email},on:{input:function(n){n.target.composing||(o.email=n.target.value)}}}),o._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:o.password,expression:"password"}],domProps:{value:o.password},on:{input:function(n){n.target.composing||(o.password=n.target.value)}}}),o._v(" "),e("button",{on:{click:o.login}},[o._v("Login")]),o._v(" "),e("g-signin-button",{attrs:{params:o.googleSignInParams},on:{success:o.onSignInSuccess,error:o.onSignInError}},[o._v("\n      Sign in with Google\n  ")])],1)},[],!1,null,"3b737014",null);n.default=s.exports}}]);