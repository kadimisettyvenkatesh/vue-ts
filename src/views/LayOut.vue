<template>
<div>
   <HeaderView/>
    <div class="container-fluid overflow-hidden">
        <div class="row vh-100 overflow-auto">
            <SideNav/>
            <div class="col d-flex flex-column h-sm-100">
                <main class="row overflow-auto">
                    <router-view/>
                </main>
                <!-- <footer class="row bg-light py-4 mt-auto">
                    <div class="col"> Footer content here... </div>
                </footer> -->
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import SideNav from './SideNav.vue';
import HeaderView from './HeaderView.vue';

</script>

<style lang="scss">

</style>
