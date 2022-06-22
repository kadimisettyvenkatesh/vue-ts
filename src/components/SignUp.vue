<template>
  <div class="hello" @click="changeName()">
  <h1>SIGN UP</h1>
    <!-- <h1>{{ name }}</h1> -->
    <!-- {{ counterStore.count }} -->
  </div>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <Form @submit="onSubmit" v-slot="{ errors }">
          <div class="form-row row">
            <div class="form-group col-2">
              <label>Title</label>
              <Field name="title" as="select" class="form-control" :class="{ 'is-invalid': errors.title }">
                <option value=""></option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Ms">Ms</option>
              </Field>
              <div class="invalid-feedback">{{ errors.title }}</div>
            </div>
            <div class="form-group col-5">
              <label>First Name</label>
              <Field name="firstName" type="text" class="form-control" :class="{ 'is-invalid': errors.firstName }" />
              <div class="invalid-feedback">{{ errors.firstName }}</div>
            </div>
            <div class="form-group col-5">
              <label>Last Name</label>
              <Field name="lastName" type="text" class="form-control" :class="{ 'is-invalid': errors.lastName }" />
              <div class="invalid-feedback">{{ errors.lastName }}</div>
            </div>
          </div>
          <div class="form-row row">
            <div class="form-group col">
              <label>Date of Birth</label>
              <Field name="dob" type="date" class="form-control" :class="{ 'is-invalid': errors.dob }" />
              <div class="invalid-feedback">{{ errors.dob }}</div>
            </div>
            <div class="form-group col">
              <label>Email</label>
              <Field name="email" type="text" class="form-control" :class="{ 'is-invalid': errors.email }" />
              <div class="invalid-feedback">{{ errors.email }}</div>
            </div>
          </div>
          <div class="form-row row">
            <div class="form-group col">
              <label>Password</label>
              <Field name="password" type="password" class="form-control" :class="{ 'is-invalid': errors.password }" />
              <div class="invalid-feedback">{{ errors.password }}</div>
            </div>
            <div class="form-group col">
              <label>Confirm Password</label>
              <Field name="confirmPassword" type="password" class="form-control"
                :class="{ 'is-invalid': errors.confirmPassword }" />
              <div class="invalid-feedback">{{ errors.confirmPassword }}</div>
            </div>
          </div>
          <div class="form-group form-check">
            <Field name="acceptTerms" type="checkbox" id="acceptTerms" value="true" class="form-check-input"
              :class="{ 'is-invalid': errors.acceptTerms }" />
            <label for="acceptTerms" class="form-check-label">Accept Terms & Conditions</label>
            <div class="invalid-feedback">{{ errors.acceptTerms }}</div>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary mr-1">Register</button>
            <button type="reset" class="btn btn-secondary">Reset</button>
          </div>
        </Form>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Form, Field, useForm } from "vee-validate";
import router from '../router'
import { useCounterStore } from '../store/counter-store';
import { useUserStore } from '../store/user-store';

const name = ref('SignUp');
const counterStore = useCounterStore();
const userStore = useUserStore();
const changeName = () => {
  name.value = "Test";
  counterStore.increment();
  counterStore.count++;
  counterStore.$patch({ count: counterStore.count++ });
};
const onSubmit = (data: any) => {
  userStore.$onAction(({
    name, // name of the action
    after, // hook after the action returns or resolves
  })=>{
    if(name == 'signUp'){
      after((data)=>{
        console.log(data);
        router.push('/login')
      })
    } 
    // console.log(action)
  })
  userStore.signUp(data);
  console.log(data);
}
</script>
<style scoped lang="scss">
</style>
