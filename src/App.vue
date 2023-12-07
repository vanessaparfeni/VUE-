<script setup>
import { RouterView,RouterLink } from 'vue-router';

</script>

<template>
    <header>
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </header>
    <main>
        <RouterView />
    </main>
</template>

<script>

</script>

<style  scoped>

</style>