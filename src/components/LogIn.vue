<template>
  <div class="hello" @click="changeName()">
    <!-- {{ counterStore.count }} -->
    <!-- {{errors ? errors : null}} -->
    {{ t('hello') }}
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
              <small class="invalid-feedback">{{ errors.email }} test</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                v-model="signForm.password">
              <small class="invalid-feedback">{{ errors.email }}</small>
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
import { useI18n } from 'vue-i18n';
import router from '../router'


const name = ref('Sign In');
const {t}= useI18n();
const {locale } = useI18n({ useScope: 'global' })
const counterStore = useCounterStore();

const changeName = () => {
  name.value = "Sign In Test";
  counterStore.increment();
  locale. value= 'de';
};

const valSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(3).required().max(10),
});

const { values: signForm, handleSubmit, errors } = useForm({
  initialValues: {
    email: 'venky@applines.com',
    password: '123'
  },
  validationSchema: valSchema
});


const userStore = useUserStore();
const signInSubmit = handleSubmit(async (values) => {
  const unsubscribeAction = userStore.$onAction(({ name,  after,args,store  }) => {
    if (name == 'signInSuccess') {
      after((data) => {
        router.push('/dashboard');
        unsubscribeAction();
      })
    } else if(name == 'signInFailure'){
      after((data) => {
        alert(data.message);
        unsubscribeAction();
      })
    }
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

  .sign-cont {
    width: 500px;
    padding: 3rem;
    border-radius: 1rem;
    background: aquamarine;
  }
}
</style>
