<script setup>
import { RouterView,RouterLink } from 'vue-router';


</script>

<template>
    <header>
      <ul>
        <li><RouterLink to="/">Главная</RouterLink></li>
        <li><RouterLink to="/about">О нас</RouterLink></li>
        <li><RouterLink to="/blog">Блог </RouterLink></li>
      </ul>
    </header>
    <main>
        <RouterView />
    </main>
    <footer>
      <ul>
        <li><RouterLink to="/">Главная</RouterLink></li>
        <li><RouterLink to="/about">О нас</RouterLink></li>
        <li><RouterLink to="/blog">Блог </RouterLink></li>
      </ul>
    </footer>
</template>

<script>

</script>

<style  scoped>

</style>