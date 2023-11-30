import {ref, reactive} from "vue";

const authStore = reactive({
    isAuthinticated: false,

    authenticate(){
        authStore.isAuthinticated = true
    },

    logOut(){
        authStore.isAuthinticated = false
    }
})

export {authStore}