<template>
  <div class="hello" @click="changeName()">
    <!-- {{ counterStore.count }} -->
    <!-- {{errors ? errors : null}} -->
  </div>
  <div class="sign-blk">
     <div class="container sign-cont">
    <h3>SIGN IN</h3>
    <div class="row">
      <div class="col">
        <form @submit.prevent="signInSubmit()" novalidate>
          <div class="form-group" :class="{ 'is-invalid': errors.email }">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="Enter email" v-model="signForm.email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            <small class="invalid-feedback">{{errors.email}} test</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="signForm.password">
            <small class="invalid-feedback">{{errors.email}}</small>
          </div>
          <button type="submit" class="btn btn-primary mt-3">Sign In</button>
        </form>
      </div>
    </div>
  </div>
  </div>
 
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useForm } from "vee-validate";
import * as Yup from "yup";
import { useCounterStore } from '@/store/counter-store';
import { useUserStore } from '@/store/user-store';
import router from '../router'
const name = ref('Sign In');
const counterStore = useCounterStore();
const changeName = () => {
  name.value = "Sign In Test";
  counterStore.increment();
};
const valSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(3).required().max(10),
});

const {values:signForm,handleSubmit,errors} = useForm({
  initialValues:{
    email:'venky@applines.com',
    password:'123'
  },
  validationSchema:valSchema
});
const userStore= useUserStore();
const signInSubmit = handleSubmit((values)=>{
  userStore.$onAction(({
    name, // name of the action
    after, // hook after the action returns or resolves
  })=>{
    if(name == 'signIn'){
      after((data)=>{
        console.log(data);
         router.push('/dashboard');
      })
    } 
    // console.log(action)
  })
 userStore.signIn(values);
});


</script>
<style scoped lang="scss">
.sign-blk {
  display: flex;
  height: 100%;
  // width: 100%;
  align-items: center;
  .sign-cont{
    width: 500px;
    padding: 3rem;
    border-radius: 1rem;
    background:aquamarine;
  }
}
</style>
