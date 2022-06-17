<template>
    <Header />
    <Slider />
    <Loithe />
    <GoiHopTac />
    <QuyTrinhHopTac />
    <DoiTacChiaSe />
    <FormDangKy />
    <HinhAnhMoHinh />
    <HinhAnhDaoTao />
    <Footer />
</template>

<script>
import Header from "../components/header.vue";
import Slider from "../components/slider.vue";
import Loithe from "../components/nhuong_quyen/loi_the.vue";
import GoiHopTac from "../components/nhuong_quyen/goi_hop_tac.vue";
import QuyTrinhHopTac from '../components/nhuong_quyen/quy_trinh_hop_tac.vue';
import DoiTacChiaSe from '../components/nhuong_quyen/doi_tac_chia_se.vue';
import FormDangKy from '../components/nhuong_quyen/form_dang_ky.vue';
import HinhAnhMoHinh from '../components/nhuong_quyen/hinh_anh_mo_hinh.vue';
import HinhAnhDaoTao from '../components/nhuong_quyen/hinh_anh_dao_tao.vue';
import Footer from "../components/footer.vue";

export default {
    name: "nhuong-quyen",
    components: {  
        Header,
        Slider,
        Loithe,
        GoiHopTac,
        QuyTrinhHopTac,
        DoiTacChiaSe,
        FormDangKy,
        HinhAnhMoHinh,
        HinhAnhDaoTao,
        Footer,
    }
}
</script>