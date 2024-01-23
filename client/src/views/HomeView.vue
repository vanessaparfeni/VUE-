<template>
    <div>
        <h1 v-show="title">Главная</h1>
    </div>
    <input type="button" value="Click" @click="titleFunc">
    <div>
    <h2>Heloo</h2>
    </div>
    <input type="text" v-model="inputValue" :placeholder="txtInput"><br><br>
    <p>{{ inputValue }}</p>

    <p>Двойные фигурные скобки: <span v-html='rawHtml'></span>   </p>
</template>

<script>
export default {
    data() {
        return {
            product: [],
            title: false,
            inputValue: null,
            txtInput:"Введите текст",
         
        };
    },
    methods: {
        titleFunc(){
            this.title = !this.title;   
        }
    },
    async beforeMount() {
    },
}
</script>

<style  scoped>

</style>