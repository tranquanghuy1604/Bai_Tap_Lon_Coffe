<template>
    <Header />
    <Slider />
    <SanPhamSachQuy />
    <CaPheDongGoi />
    <Footer />
</template>


<script>
    import Header from "../components/header.vue";
    import CaPheDongGoi from "../components/products_page/ca_phe_dong_goi.vue";
    import SanPhamSachQuy from "../components/products_page/tu_sach.vue";
    import Slider from "../components/slider.vue";
    import Footer from "../components/footer.vue";
export default {
    components: {
        Header,
        Slider,
        CaPheDongGoi,
        SanPhamSachQuy,
        Footer
    },
}


</script>