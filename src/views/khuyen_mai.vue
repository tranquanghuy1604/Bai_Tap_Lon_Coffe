<template>
    <Header />
    <Slider />
    <section>
        <div class="max-w-[1080px] mx-auto text-center pt-10 pb-16">
            <h3 class="uppercase font-bold text-xl mb-4 border-2 inline-block" style="border-color: rgba(0,0,0,0.1);">
                <span class="py-1.5 px-4">
                    <i class="fa-solid fa-gift"></i>
                    Sản phẩm khuyến mãi
                </span>
            </h3>
        </div>
    </section>
    <Footer />
</template>

<script>
import Header from "../components/header.vue";
import Slider from "../components/slider.vue";
import Footer from "../components/footer.vue";
export default {
    name: "khuyen-mai",
    components: {
        Header,
        Slider,
        Footer,
    }
}
</script>