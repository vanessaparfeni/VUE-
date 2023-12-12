<template>
    <div class="product">
        <h1>Blog</h1>
    </div>
    <ProductCard />
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
    }
}
</script>

<style scoped>


.product{
    width: 90%;
    height: max-content;
    margin: 20px auto 20px auto;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}

</style>

