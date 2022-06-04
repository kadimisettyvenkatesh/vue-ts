<template>
  <div class="hello" @click="changeName()">
    {{name}}
    {{counterStore.count}}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {useCounterStore} from '../store/counter-store';
  const name = ref('Sign In');
  const counterStore = useCounterStore();
  const changeName=()=>{
    name.value = "Sign In Test";
    counterStore.increment();
  };
  
</script>
<style scoped lang="scss">

</style>
