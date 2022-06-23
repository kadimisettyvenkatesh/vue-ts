<template>
<div class="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-dark d-flex sticky-top">
    <div class="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
        <a href="/" class="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span class="fs-5">B<span class="d-none d-sm-inline">rand</span></span>
        </a>
        <ul class="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
            <li class="nav-item">
                <a class="nav-link px-sm-0 px-2">
                    <i class="fs-5 bi-house"></i><span class="ms-1 d-none d-sm-inline"><router-link to="/dasboard">Home</router-link></span>
                </a>
            </li>
            <li>
                <a data-bs-toggle="collapse" class="nav-link px-sm-0 px-2">
                    <i class="fs-5 bi-speedometer2"></i><span class="ms-1 d-none d-sm-inline"><router-link to="/dasboard">Dashboard</router-link></span> </a>
            </li>
            <li>
                <a class="nav-link px-sm-0 px-2">
                    <i class="fs-5 bi-table"></i><span class="ms-1 d-none d-sm-inline"><router-link to="/login">Login</router-link></span></a>
            </li>
            <li>
                <a class="nav-link px-sm-0 px-2">
                    <i class="fs-5 bi-grid"></i><span class="ms-1 d-none d-sm-inline"><router-link to="/signup">Sign Up</router-link></span></a>
            </li>
            <li>
                <a class="nav-link px-sm-0 px-2">
                    <i class="fs-5 bi-people"></i><span class="ms-1 d-none d-sm-inline"><router-link to="/about">About</router-link></span> </a>
            </li>
        </ul>
    </div>
</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

</style>
