<template>
    <div class="products">
        <ProductCard v-for="item in products" :product="item" :key="item.id" />
    </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
export default {
    components:{
        ProductCard: ProductCard
    },
    data () {
        return{
            products: [],
        }
    },
    methods: {

    },
    async beforeMount(){
        const data = await fetch('http://localhost:1337/api/products?populate=*')
        const js = await data.json()
        this.products = js.data
    }
    }

</script>

<style scoped>
.products{
    width: 90%;
    height: max-content;
    margin: 20px auto 20px auto;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    gap:20px;
}
</style>

