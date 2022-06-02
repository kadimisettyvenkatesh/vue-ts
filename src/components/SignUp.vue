<template>
  <div class="hello" @click="changeName()">
    {{name}}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
  const name = ref('SignUp');
  const changeName=()=>{
    name.value = "Test";
  };
</script>
<style scoped lang="scss">

</style>
