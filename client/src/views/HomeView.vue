<template>
    <div>
        <h1>Главная</h1>
    </div>
    
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            product: [],
        };
    },
    methods: {},
    async beforeMount() {
    },
    components: { RouterLink }
}
</script>

<style  scoped>

</style>