<template>
    <section id="tabs" class="pb-10">
        <div class="max-w-[1080px] mx-auto text-center">
            <h2 class="uppercase font-bold text-2xl mb-10 border-2 inline-block" style="border-color: rgba(0,0,0,0.1);">
                <span class="py-1.5 px-4">
                    <i class="fa-solid fa-gift opacity-60"></i>
                    Gói hợp tác
                </span>
            </h2>
            <ul class="flex justify-center mb-10 nhuongQuyen-tablinks">
                <li class="mr-1.5 inline-block tablink-hoptac active" v-on:click="activetab='1'" v-bind:class="[ activetab === '1' ? 'active' : '' ]">
                    <a class="text-gray-500 text-sm font-semibold cursor-pointer py-2.5 hover:text-black" >
                        Gói thịnh vượng
                    </a>
                </li>
                <li class="mr-2 inline-block mx-1.5 tablink-hoptac" v-on:click="activetab='2'" v-bind:class="[ activetab === '1' ? 'active' : '' ]">
                    <a class="text-gray-500 text-sm font-semibold cursor-pointer py-2.5 hover:text-black" >
                        Gói khởi nghiệp
                    </a>
                </li>
                <li class="ml-1.5 inline-block tablink-hoptac" v-on:click="activetab='3'" v-bind:class="[ activetab === '1' ? 'active' : '' ]">
                    <a class="text-gray-500 text-sm font-semibold cursor-pointer py-2.5 hover:text-black">
                        Gói kết nối
                    </a>
                </li>
            </ul>
            <div id="tab_goi-Thinh-Vuong" v-if="activetab ==='1'" class="nhuongQuyen-tab tab-hoptac active">
                <div class="md:flex sm:block">
                    <div class="md:w-1/2 sm:w-full text-center">
                        <p class="px-3.5 pb-8">
                            <span class="text-3xl font-bold mb-2">Giá trị gói</span> <br>
                            <span class="text-2xl font-bold mb-2" style="line-height: 3rem;">Từ 175 triệu</span> <br>
                            <span class="text-lg">Thời gian hoàn thiện cửa hàng dự kiến: từ 20 – 30 ngày</span>
                        </p>
                    </div>
                    
                    <div class="md:w-1/2 sm:w-full text-center">
                        <p class="px-3.5 pb-8">
                            <span class="text-3xl font-bold mb-2" style="line-height: 3.25rem;">Đối Tượng Tham Gia</span> <br>
                            <span class="text-lg">Dành cho đối tượng Khách hàng có nhu cầu cung ứng toàn bộ gói đầu tư mở quán Trung Nguyên E-Coffee.</span>
                        </p>
                    </div>
                </div>

                <div class="md:flex sm:block">
                    <div class="md:w-1/2 sm:w-full sm:px-4">
                        <table class="table-auto text-left">
                            <tbody>
                                <tr class="leading-8 border-b">
                                    <td>STT</td>
                                    <td>Danh Mục Đầu Tư</td>
                                </tr>
                              <tr class="leading-8 border-b">
                                <td style="width: 12.4266%;">1</td>
                                <td style="width: 87.5734%;">Phí hợp tác và Quản lý (0 đồng)</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>2</td>
                                <td>Phần mềm quản lý (miễn phí 1 năm đầu)</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>3</td>
                                <td>Hỗ trợ khai trương (tài trợ 150 cuốn sách và 100 ly cà phê)</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>4</td>
                                <td>Nhận diện, bảng hiệu các loại</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>5</td>
                                <td>Đồng phục</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>6</td>
                                <td>Máy pha, máy xay cà phê</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>7</td>
                                <td>Nguyên phụ liệu bao bì& Cà Phê Năng Lượng E-Coffee (tương đương 500 ly cà phê)</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>8</td>
                                <td>Quầy pha chế 3.2m</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>9</td>
                                <td>Bộ công cụ – Dụng cụ bán hàng</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>10</td>
                                <td>Đào tạo menu cà phê, nghiệp vụ vận hành</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>11</td>
                                <td>Hỗ trợ setup, khai trương</td>
                              </tr>
                            </tbody>
                          </table>
                    </div>
                    <div class="md:w-1/2 sm:w-full sm:pt-8">
                        <img src="https://trungnguyenecoffee.com/wp-content/uploads/2020/08/G%C3%B3i-Th%E1%BB%8Bnh-V%C6%B0%E1%BB%A3ng-893x800.jpg" alt="Gói Thịnh Vượng" class="px-3.5 pb-8">
                    </div>
                </div>
            </div>
            
            <div id="tab_goi-Khoi-Nghiep" v-if="activetab ==='2'"  class="nhuongQuyen-tab tab-hoptac active">
                <div class="md:flex sm:block">
                    <div class="md:w-1/2 sm:w-full text-center">
                        <p class="px-3.5 pb-8">
                            <span class="text-3xl font-bold mb-2" >Giá trị gói</span> <br>
                            <span class="text-2xl font-bold mb-2" style="line-height: 3rem;">Từ 120 triệu</span> <br>
                            <span class="text-lg">Thời gian hoàn thiện cửa hàng dự kiến: từ 20 – 30 ngày</span>
                        </p>
                    </div>
                    
                    <div class="md:w-1/2 sm:w-full text-center">
                        <p class="px-3.5 pb-8">
                            <span class="text-3xl font-bold mb-2" style="line-height: 3.25rem;">Đối Tượng Tham Gia</span> <br>
                            <span class="text-lg">Dành cho Khách hàng có nhu cầu hợp tác mở quán Trung Nguyên E-Coffee mới (yêu cầu cơ bản/ diện tích nhỏ)</span>
                        </p>
                    </div>
                </div>

                <div class="md:flex sm:block">
                    <div class="md:w-1/2 sm:w-full sm:px-4">
                        <table class="table-auto text-left">
                            <tbody>
                                <tr class="leading-8 border-b">
                                    <td>STT</td>
                                    <td>Danh Mục Đầu Tư</td>
                                </tr>
                              <tr class="leading-8 border-b">
                                <td style="width: 12.4266%;">1</td>
                                <td style="width: 87.5734%;">Phí hợp tác và Quản lý (0 đồng)</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>2</td>
                                <td>Phần mềm quản lý (miễn phí 1 năm đầu)</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>3</td>
                                <td>Hỗ trợ khai trương (tài trợ 150 cuốn sách và 100 ly cà phê)</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>4</td>
                                <td>Nhận diện, bảng hiệu các loại</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>5</td>
                                <td>Đồng phục</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>6</td>
                                <td>Máy pha, máy xay cà phê</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>7</td>
                                <td>Nguyên phụ liệu bao bì& Cà Phê Năng Lượng E-Coffee (tương đương 500 ly cà phê)</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>8</td>
                                <td>Quầy pha chế 2.5m</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>9</td>
                                <td>Đào tạo menu cà phê, nghiệp vụ vận hành</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>10</td>
                                <td>Hỗ trợ setup, khai trương</td>
                              </tr>
                            </tbody>
                          </table>
                    </div>
                    <div class="md:w-1/2 sm:w-full sm:pt-8">
                        <img src="https://trungnguyenecoffee.com/wp-content/uploads/2020/10/C2-1-%C4%91%C6%B0%E1%BB%9Dng-Ch%C3%A2u-V%C4%83n-Li%C3%AAm-KDC-H%C3%B9ng-V%C6%B0%C6%A1ng-2-P.Ph%C3%BA-Th%E1%BB%A7y-Tp.Phan-Thi%E1%BA%BFt-BT.jpg" alt="Gói Thịnh Vượng" class="px-3.5 pb-8">
                    </div>
                </div>

            </div>

            <div id="tab_goi-Ket-Noi" v-if="activetab ==='3'"  class="nhuongQuyen-tab tab-hoptac active">
                <div class="md:flex sm:block">
                    <div class="md:w-1/2 sm:w-full text-center">
                        <p class="px-3.5 pb-8">
                            <span class="text-3xl font-bold mb-2" >Giá trị gói</span> <br>
                            <span class="text-2xl font-bold mb-2" style="line-height: 3rem;">Từ 65 triệu</span> <br>
                            <span class="text-lg">Thời gian hoàn thiện cửa hàng dự kiến: từ 10 – 25 ngày</span>
                        </p>
                    </div>
                    
                    <div class="md:w-1/2 sm:w-full text-center">
                        <p class="px-3.5 pb-8">
                            <span class="text-3xl font-bold mb-2" style="line-height: 3.25rem;">Đối Tượng Tham Gia</span> <br>
                            <span class="text-lg">Dành cho Khách hàng tối ưu diện tích đang kinh doanh hoặc chuyển đổi hoạt động kinh doanh sang thương hiệu Trung Nguyên E-Coffee.</span>
                        </p>
                    </div>
                </div>

                <div class="md:flex sm:block">
                    <div class="md:w-1/2 sm:w-full sm:px-4">
                        <table class="table-auto text-left">
                            <tbody>
                                <tr class="leading-8 border-b">
                                    <td>STT</td>
                                    <td>Danh Mục Đầu Tư</td>
                                </tr>
                              <tr class="leading-8 border-b">
                                <td style="width: 12.4266%;">1</td>
                                <td style="width: 87.5734%;">Phí hợp tác và Quản lý (0 đồng)</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>2</td>
                                <td>Phần mềm quản lý (miễn phí 1 năm đầu)</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>3</td>
                                <td>Hỗ trợ khai trương (tài trợ 150 cuốn sách và 100 ly cà phê)</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>4</td>
                                <td>Nhận diện, bảng hiệu các loại</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>5</td>
                                <td>Đồng phục</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>6</td>
                                <td>Máy pha, máy xay cà phê</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>7</td>
                                <td>Nguyên phụ liệu bao bì& Cà Phê Năng Lượng E-Coffee (tương đương 500 ly cà phê)</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>8</td>
                                <td>Đào tạo menu cà phê, nghiệp vụ vận hành</td>
                              </tr>
                              <tr class="leading-8 border-b">
                                <td>9</td>
                                <td>Hỗ trợ setup, khai trương</td>
                              </tr>
                            </tbody>
                          </table>
                    </div>
                    <div class="md:w-1/2 sm:w-full sm:pt-8">
                        <img src="https://trungnguyenecoffee.com/wp-content/uploads/2020/09/1ec6d7c9fb45041b5d54.jpg" alt="Gói Thịnh Vượng" class="px-3.5 pb-8">
                    </div>
                </div>
            </div>
        </div>
    </section> -->
</template>

<script>
export default {    
    name: 'goihoptac',
    el: '#tabs',
    data() {
        return {
            activetab: '1' 
        } 
    },
};
</script>
