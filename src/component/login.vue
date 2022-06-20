<template>
  <Header />
  <div class="container mt-[45px]" id="myDIV">
    <button class="close-button"></button>
    <div class="wrapper" id="myDIV">
      <div class="signin-wrapper item">
        <h2 class="text-bold title">ĐĂNG NHẬP</h2>
        <form>
          <p class="form-row">
            <label for="username" class="text-bold"
              >Tên tài khoản hoặc địa chỉ email&nbsp; <span>*</span></label
            >
            <input type="text" class="ip" name="username" />
          </p>
          <p>
            <label class="text-bold" for="password"
              >Mật khẩu&nbsp;<span>*</span></label
            >
            <input
              class="ip"
              type="password"
              name="password"
              id="password"
              autocomplete="current-password"
            />
          </p>

          <p class="row-rmb">
            <label class="w">
              <input class="cb-input" name="rememberme" type="checkbox" />
              <span class="text-bold cb">Ghi nhớ mật khẩu</span>
            </label>
          </p>
          <button
            type="submit"
            class="btn text-bold"
            name="login"
            value="Đăng nhập"
          >
            Đăng nhập
          </button>
          <p class="">
            <a href="" class="fgt-link">Quên mật khẩu?</a>
          </p>
        </form>
      </div>
      <div class="signup-wrapper item">
        <h2 class="text-bold title">ĐĂNG KÝ</h2>
        <form class="w">
          <p class="">
            <label for="reg_email" class="text-bold"
              >Địa chỉ email&nbsp;<span class="required">*</span></label
            >
            <input type="email" class="ip" name="email" id="reg_email" />
          </p>
          <p>Một mật khẩu sẽ được gửi đến địa chỉ email của bạn.</p>
          <div>
            <p class="desc">
              Dữ liệu cá nhân của bạn sẽ được sử dụng để hỗ trợ trải nghiệm của
              bạn trên toàn bộ trang web này, để quản lý quyền truy cập vào tài
              khoản của bạn và cho các mục đích khác được mô tả trong
              <a href="">chính sách riêng tư</a>.
            </p>
          </div>
          <p class="wo">
            <button type="submit" class="text-bold btn">Đăng ký</button>
          </p>
        </form>
      </div>
    </div>
  </div>
  <Footer />
</template>
<style scoped>
.container {
  width: 100vw;
  min-height: 100vh;
  position: relative;
}
.close-button {
  position: fixed;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  font-size: 2.5rem;
  line-height: 25.6px;
  top: 0px;
  right: 0px;
}
#overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.6);
  pointer-events: none;
}

#overlay.active {
  opacity: 1;
  pointer-events: all;
}
.wrapper {
  position: absolute;
  width: 875px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: white;
  padding: 40px 20px;
  box-shadow: 0 1px 3px #ccc;
  margin-left: 14%;
}

.item {
  flex: 1;
  padding: 0px 30px;
  overflow: hidden;
}

.signin-wrapper {
  border-right: 1px solid grey;
  height: 100%;
}

.text-bold {
  font-weight: bold;
}

.ip {
  border: 1px solid lightgray;
  outline: none;
  padding: 7px 10px;
  width: 95%;
  margin-top: 8px;
  margin-bottom: 20px;
  transition: all 0.5s ease-in-out;
}
.ip:focus {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
.ip:hover {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
.title {
  margin-bottom: 10px;
  font-size: 25px;
}

.row-rmb {
  display: flex;
  align-items: center;
}

.cb-input {
  width: 20px;
  margin-right: 5px;
}

.btn {
  border: none;
  background-color: black;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  margin: 10px 0px;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: black;
  transition: all 0.1s ease-in-out;
}

a:hover {
  color: rgb(232, 205, 53);
}

.desc {
  font-size: 14px;
  margin: 20px 0px;
}

.desc a {
  font-size: 14px;
}
@media only screen and (max-width: 850px) {
  .container {
    height: 150vh;
  }
  .wrapper {
    flex-direction: column;
    top: 50;
    left: 50;
  }

  .signin-wrapper {
    border-right: 0px;
    margin-bottom: 30px;
  }
}
</style>
<script>
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
