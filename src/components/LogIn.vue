<template>
  <div class="hello" @click="changeName()">
    {{name}}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
  const name = ref('Sign In');
  const changeName=()=>{
    name.value = "Sign In Test";
  };
</script>
<style scoped lang="scss">

</style>
