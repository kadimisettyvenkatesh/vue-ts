import { defineStore } from 'pinia';

export const useCounterStore = defineStore('user', {
  state:()=>({
      users: []
  }),
  getters:{
      getUsers(state){
        return state.users;
      }
  },
  actions:{
      increment(){
        this.users.push();
      }
  }
  
});