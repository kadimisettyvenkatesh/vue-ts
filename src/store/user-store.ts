import { defineStore } from 'pinia';
import http from '../plugins/axios-api';
import userService from '../services/auth-service';
export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    loggedInUser: {}
  }),
  getters: {
    getUsers(state) {
      return state.users;
    }
  },
  actions: {
    increment() {
      this.users.push();
    },
    signIn(payload: any){
      userService.loginUser(payload).then((resp:any) => {
        if (resp) {
          this.loggedInUser = resp.data[0];
          console.log('loginData',resp.data);
        }
      })
    },
    signUp(payload: any) {
      userService.signupUser(payload).then((resp:any) => {
        if (resp) {
          // this.loggedInUser = resp.data;
        }
      })
    }
  },
  persist: {
    enabled: true,
     strategies: [
      {
        key: 'user',
        storage: localStorage,
        paths:['loggedInUser']
      },
    ]
  }

});