<template>
    <v-container mb-12>
        <v-row>
            <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
                <h2>Popular Products <v-btn to="store" color="primary" small text>View All</v-btn></h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
                <v-row>
                    <v-col sm="6" md="4" v-for="product in products" :key="product.name">
                        <v-card outlined>
                            <v-img :src="product.image" height="200px" />
                            <v-card-title>{{ product.name }}</v-card-title>
                            <v-card-subtitle>${{ product.price }}</v-card-subtitle>
                            <v-card-actions>
                                <v-btn color="success" outlined><v-icon small left>fa-plus</v-icon> Add to Cart</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
// import VerticalProduct from '@/components/cards/VerticalProduct.vue'

export default {
    // components: {
    //     VerticalProduct
    // },
    data() {
        return {
            products: [
                {
        image: 
        'https://m.media-amazon.com/images/I/61YyzKD24dL._AC_SX450_.jpg',
        name: 'Ryzen 9999',
        price: 299.99
    },
    {
        image: 
        'https://static3.srcdn.com/wordpress/wp-content/uploads/2020/08/Intel-Core-i7-3770-1.jpg',
        name: 'Intel Proc',
        price: 2499.99
    },
    {
        image: 
        'https://cdn.shopify.com/s/files/1/0355/8296/7943/products/71sXzUqI9XL._AC_SL1500_800x.jpg?v=1615884955',
        name: 'Razer Keyboard 9',
        price: 25599.99
    },
    {
        image: 
        'https://m.media-amazon.com/images/I/610V4l4C1aL._AC_SL1000_.jpg',
        name: 'VersionTech 3',
        price: 899.99
    },
    {
        image: 
        'https://i.dell.com/is/image/DellContent//content/dam/images/products/electronics-and-accessories/dell/pointing-devices/aw610m/aw610m-ckb-4050lb-wh.psd?fmt=pjpg&pscan=auto&scl=1&wid=3732&hei=2550&qlt=100,0&resMode=sharp2&size=3732,2550',
        name: 'Alienware AW610M',
        price: 599.99
    },
    {
        image: 
        'https://images.samsung.com/is/image/samsung/ph-odyssey-g9-lc49g95tssexxp-frontwhite-307878031?$650_519_PNG$',
        name: 'Odyssey G9',
        price: 19999.99
    },
            ]
        }
    }  
}
</script>