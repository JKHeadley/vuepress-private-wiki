import store from './store'
import authService from './services/auth.service'
import authInterceptor from './services/auth-interceptor.service'
import config from './config'
import axios from 'axios'
import qs from 'querystring'
import { sync } from 'vuex-router-sync'
// import atob from 'atob'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    // ...apply enhancements to the app
    axios.defaults.baseURL = config.serverURI

    // Replace default serializer with one that works with Joi validation
    axios.defaults.paramsSerializer = function(params) {
        return qs.stringify(params)
    }
    
    // Add a response interceptor
    axios.interceptors.response.use(function(response) {
        return Promise.resolve(response)
    }, authInterceptor.responseError)
    
    // Initialize auth header
    axios.defaults.headers.common.Authorization =
    'Bearer ' + store.state.auth.accessToken

    // Some middleware to help us ensure the user is authenticated.
    router.beforeEach((to, from, next) => {
        if (to.path !== '/' && (!store.state.auth.accessToken ||
            store.state.auth.accessToken === 'null')) {
        // This route requires auth, check if logged in
        // if not, redirect to login page.
        console.log('Not authenticated')
        next({
            path: '/',
            query: { redirect: to.fullPath }
        })
        } else {
            console.log('authenticated')
        next()
        }
    })

    sync(store, router)

    authService.login({ email: 'test@user.com', password: 'root' })
    .then(result => {
        console.log("LOGIN:", parseJwt(result.data.accessToken))
    })

    function parseJwt (token) {
        // let workingAtob = window ? window.atob : atob;
        // var base64Url = token.split('.')[1];
        // var base64 = base64Url.replace('-', '+').replace('_', '/');
        // return JSON.parse(workingAtob(base64));
    };

    store.setVue(new Vue({
        router
    }))
    console.log("VUE:", new Vue())
    console.log("store:", store)

    
  }