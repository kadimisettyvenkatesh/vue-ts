import { defineStore } from 'pinia';
import userService from '../services/auth-service';
export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    loggedInUser: {}
  }),
  getters: {
    getUsers(state) {
      return state.users;
    },
    getLoggedInUser():any{
      return this.loggedInUser;
    }
  },
  actions: {
    increment() {
      this.users.push();
    },
    signIn(payload: any){
      userService.loginUser(payload).then((resp:any) => {
        if (resp) {
          this.signInSuccess(resp.data[0]);
          return resp.data[0];
        }
      },(error)=>{
        this.signInFailure(error);
      })
    },
    signInSuccess(userdata:any){
      this.loggedInUser = userdata;
      return userdata;
    },
    signInFailure(error:any){
      this.loggedInUser = {};
      return error;
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