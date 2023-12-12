<script setup>
import { RouterView,RouterLink } from 'vue-router';


</script>

<template>
    <header>
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/blog">Blog </RouterLink>
    </header>
    <main>
        <RouterView />
    </main>
</template>

<script>

</script>

<style  scoped>

</style>