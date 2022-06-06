<template>
  <div class="hello" @click="changeName()">
    {{ counterStore.count }}
    {{errors}}
    <h3>SIGN IN</h3>
  </div>
  <div class="container">
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
          <button type="submit" class="btn btn-primary">Sign In</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useForm } from "vee-validate";
import * as Yup from "yup";
import { useCounterStore } from '../store/counter-store';
const name = ref('Sign In');
const counterStore = useCounterStore();
const changeName = () => {
  name.value = "Sign In Test";
  counterStore.increment();
};
const valSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required().max(10),
});

const {values:signForm,handleSubmit,errors} = useForm({
  initialValues:{
    email:'',
    password:''
  },
  validationSchema:valSchema
});
const signInSubmit = handleSubmit((values)=>{
  console.log(values);
});


</script>
<style scoped lang="scss">
</style>
