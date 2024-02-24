<template>
    <div class="elementor elementor-374 elementor-location-single post-1754 post type-post status-publish format-standard has-post-thumbnail hentry">
        <div class="elementor-element elementor-element-1ece82a e-flex e-con-boxed e-con e-parent">
            <div class="e-con-inner">
                <div class="elementor-element elementor-element-a658434 e-con-full e-flex e-con e-child">
                    <div class="elementor-element elementor-element-63f16a8 elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading">
                        <div class="elementor-widget-container">
                            <h1 class="elementor-heading-title elementor-size-default desktop">Công cụ Tính <br><p style="color: #1E88E5;">Thuế thu nhập Cá nhân</p></h1>
                            <h1 class="elementor-heading-title elementor-size-default mobile">Công cụ Tính <span style="color: #1E88E5;">Thuế thu nhập Cá nhân</span></h1>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-684a21c elementor-mobile-align-left elementor-widget__width-inherit elementor-widget elementor-widget-post-info">
                        <p class="elementor-widget-container desktop">
                            Với công cụ miễn phí này, việc tính thuế thu nhập cá nhân trở lên tiện lợi, chính xác và nhanh chóng hơn! Dễ dàng sử dụng và có thể tùy chỉnh linh hoạt theo sát thực tế.
                        </p>
                        <p class="elementor-widget-container mobile">
                            Các công cụ hoàn toàn miễn phí của chúng tôi - tất cả đều được thiết kế để giúp bạn làm việc & quản trị tốt hơn mỗi ngày
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="personal-income-tax">
        <!-- <div class="modal-backdrop fade"></div> -->
        <div class="container">
            <div class="col-md-12">
                <div class="box-white">
                    <div class="box--description d-flex">
                        <span class="description--icon"><i style="color: #1e88e5" class="fa fa-circle-info"></i></span>
                        <span class="description">
                            Áp dụng mức giảm trừ gia cảnh mới nhất 11 triệu đồng/tháng (132 triệu
                            đồng/năm) với người nộp thuế và 4,4 triệu đồng/ tháng với mỗi người phụ
                            thuộc (Theo Nghị Quyết số 954/2020/UBTVQH14)
                        </span>
                    </div>
                    <div class="d-flex info-rule">
                        <div class="box-gray w-50" style="margin-right: 18px;">
                            <p class="title-block">Giảm trừ gia cảnh bản thân</p>
                            <span class="number-yellow"> 11,000,000đ </span>
                        </div>
                        <div class="box-gray w-50">
                            <p class="title-block">Người phụ thuộc</p>
                            <span class="number-yellow"> 4,400,000đ </span>
                        </div>
                    </div>
                    <div class="d-flex form-input-salary">
                        <div class="w-100">
                            <form action="" id="form-salary" class="form-salary">
                                <div class="input-salary mb-12px d-grid">
                                    <div class="field-set mb-12">
                                        <label for="" class="label-text mb-12px other">Thu Nhập (Gross)</label>
                                        <div class="form-w-100">
                                            <div class="input-data">
                                                <span class="icon"><i class="fa-solid fa-money-bill-base"></i></span>
                                                <input type="text" v-model="luong" name="luong" value=""
                                                    placeholder="10,000,000" class="border-hover 1236il9bpn" />
                                                <span class="caption">VND</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="input-salary salary-options mb-12px d-grid">
                                    <div class="field-set mb-12 d-flex">
                                        <label for="" style="display: flex" class="label-text mb-12px other">Mức lương đóng bảo hiểm</label>
                                        <div class="salary-input-block">
                                            <label class="radio-inline mb-0 radio-salary"><input v-model="dongBaoHiem" type="radio" name="dongBaoHiem" value="trenChinhThuc" checked="checked"> <span>Trên lương chính thức</span> <span class="icon-radio"></span></label> <label class="radio-inline other radio-salary">
                                                <input type="radio" v-model="dongBaoHiem" name="dongBaoHiem" value="khac"> <span class="icon-radio"></span> <span>Khác</span></label> 
                                            <div class="input-data salary-input"><span class="icon text-muted"><i class="fa-solid fa-money-bill-base"></i></span> <input type="text"  v-model="luongDongBaoHiem" name="luongDongBaoHiem" disabled="disabled" class="border-hover 1236il9bpn"> <span class="caption">VND</span></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="input-salary mb-12px d-grid">
                                    <div class="field-set mb-12 d-flex">
                                        <p class="mb-12px mr-2 d-inline" style="float: left;">
                                            <strong>Vùng </strong>
                                            <span @click="openModal('modal-salary-detail')" class="small" style="color: #1E88E5; cursor: pointer;">(Giải thích)</span>
                                        </p>
                                        <div class="label-input">
                                            <label class="radio-inline"><input type="radio" v-model="vung" name="vung" value="1"
                                                    checked="checked" /> I
                                                <span class="icon-radio"></span></label>
                                            <label class="radio-inline"><input type="radio" v-model="vung" name="vung"
                                                    value="2" /> II
                                                <span class="icon-radio"></span></label>
                                            <label class="radio-inline"><input type="radio" v-model="vung" name="vung"
                                                    value="3" /> III
                                                <span class="icon-radio"></span></label>
                                            <label class="radio-inline"><input type="radio" v-model="vung" name="vung"
                                                    value="4" /> IV
                                                <span class="icon-radio"></span></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="input-salary mb-12px d-grid">
                                    <div class="field-set mb-12">
                                        <label for="" class="label-text mb-12px other">Số người phụ thuộc</label>
                                        <div class="form-w-100">
                                            <div class="input-data">
                                                <span class="icon"><i class="fa-solid fa-user-group-base"></i></span>
                                                <input v-model="nguoiPhuThuoc" type="text" name="nguoiPhuThuoc" value=""
                                                    placeholder="0" class="border-hover" />
                                                <span class="caption">Người</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div class="input-salary mb-12px w-100">
                                <div class="d-flex mb-8">
                                    <a href="#" id="btn-submit-tax" data-type="submitPersonalIncomeTax" class="btn btn-success-custom"
                                        @click="personalIncomeTax()">
                                        Tính thuế TNCN
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="showResult">
            <div class="text-center" v-if="showResult">
                <p class="text-result">
                    <b style="color: #1e88e5">Xin chào bạn!</b>
                    <br> Cảm ơn bạn đã dùng công cụ này của Base.vn!<br>
                    Với Dữ liệu đã cung cấp thì Số tiền Thuế TNCN là: {{ numberFormat(tax) }} đ</p>
            </div>

            <div class="container" v-if="showResult">
                <div class="col-md-12">
                    <div class="box-white box-result">
                        <div>
                            <div class="text-center">
                                <table class="gross-net-table table" >
                                    <tbody>
                                        <tr class="rownote">
                                            <th>Lương Gross</th>
                                            <td>{{ numberFormat(luong) }}</td>
                                        </tr>
                                        <tr class="rownotes">
                                            <th>Bảo hiểm xã hội (8%)</th>
                                            <td>{{ (numberFormat(bhxh_salary * 0.08)) }}</td>
                                        </tr>
                                        <tr class="rownotes">
                                            <th>Bảo hiểm y tế (1.5%)</th>
                                            <td>{{ (numberFormat(bhxh_salary * 0.015)) }}</td>
                                        </tr>
                                        <tr class="rownotes">
                                            <th>Bảo hiểm thất nghiệp (1%)</th>
                                            <td>{{ numberFormat(bhtn_salary * 0.01) }}</td>
                                        </tr>
                                        <tr class="rownote">
                                            <th>Thu nhập trước thuế</th>
                                            <td>{{ numberFormat(thu_nhap_truoc_thue) }}</td>
                                        </tr>
                                        <tr class="rownotes">
                                            <th>Giảm trừ gia cảnh bản thân</th>
                                            <td>11,000,000</td>
                                        </tr>
                                        <tr class="rownotes">
                                            <th>Giảm trừ gia cảnh người phụ thuộc</th>
                                            <td>{{ numberFormat(children_subtract) }}</td>
                                        </tr>
                                        <tr class="rownote" v-if="tntt > 0">
                                            <th>Thu nhập chịu thuế</th>
                                            <td>{{ numberFormat(tntt) }}</td>
                                        </tr>
                                        <tr class="rownote" v-if="tntt <= 0">
                                            <th>Thu nhập chịu thuế</th>
                                            <td>0</td>
                                        </tr>
                                        <tr class="rownotes" v-if="tntt > 0">
                                            <th>Thuế thu nhập cá nhân(*)</th>
                                            <td>{{ numberFormat(thuePhaiNopTheoBac[1]) }}</td>
                                        </tr>
                                        <tr class="rownotes" v-if="tntt <= 0">
                                            <th>Thuế thu nhập cá nhân(*)</th>
                                            <td>0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center" v-if="showResult">
                <p class="text-result text-detail">
                (*) Chi tiết thuế thu nhập cá nhân (VNĐ)</p>
            </div>

            <div class="container" v-if="showResult">
                <div class="col-md-12">
                    <div class="box-white box-result">
                        <div>
                            <div class="text-center result-detail">
                                <table class="gross-net-table table" >
                                    <tbody>
                                        <tr v-for="(row, index) in thuePhaiNopTheoBac[0]" :key="index" :class="index === 0 || index % 2 == 0 ? `rownotes` : 'rownote'">
                                            <th style="width:40%;text-align: center;padding-bottom: 0" v-if="index === 0">{{ (row.dinhmuc) }}</th>
                                            <td style="width:40%;text-align: center;padding-bottom: 0" v-else>{{ (row.dinhmuc) }}</td>

                                            <th style="width:30%;text-align: center;padding-bottom: 0" v-if="index === 0">{{ (row.thuesuat) }}</th>
                                            <td style="width:30%;text-align: center;padding-bottom: 0" v-else>{{ (row.thuesuat) }} %</td>

                                            <th style="width:30%;text-align: center;padding-bottom: 0" v-if="index === 0">{{ (row.tiennop) }}</th>
                                            <td style="width:30%;text-align: center;padding-bottom: 0" v-else>{{ numberFormat(row.tiennop) }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center" v-if="showResult">
            <div class="box-email">
                <div class="text-center">
                    <p class="text-center text-highlight bold text-email" style="text-align: center;">Nhận Kết quả qua địa chỉ e-mail</p>
                    <form>
                        <input id="useremail"  type="email" placeholder="Nhập địa chỉ Email" class="input-subscribe" v-model="emailCustomer"
                                    @keyup.enter="sendEmailCustomer" required/> 
                        <input id="submit" type="button" onclick="" @click="sendEmailCustomer" value="Nhận ngay">
                        <span class="submit"></span>
                    </form>

                </div>
            </div>
        </div>

        <div tabindex="-1" role="dialog" id="modal-salary-detail" class="modal fade" style="display: none;" aria-hidden="true">
            <div role="document" class="modal-dialog modal-lg">
                <div class="modal-content" style="text-align: left;">
                    <div class="modal-header">
                        <button type="button" data-dismiss="modal" aria-label="Close" class="close"><span aria-hidden="true" @click="hideModal('modal-salary-detail')">×</span></button> 
                        <h4 class="modal-title text-primary"><strong style="color: #0a8ed2;">Mức lương tối thiểu vùng</strong></h4>
                        <p class="custom-font-italic" style="margin-bottom: 0px;">Áp dụng mức lương tối thiểu vùng mới nhất có hiệu lực từ ngày 01/07/2022</p>
                    </div>
                    <div class="modal-body">
                        <ul style="margin-top: 0px;">
                        <li>Vùng I: 4,680,000 đồng/tháng</li>
                        <li>Vùng II: 4,160,000 đồng/tháng</li>
                        <li>Vùng III: 3,640,000 đồng/tháng</li>
                        <li>Vùng IV: 3,250,000 đồng/tháng</li>
                        </ul>
                        <p class="text-primary"><strong>1. Vùng I, gồm các địa bàn:</strong></p>
                        <ul>
                        <li>Các quận và các huyện Gia Lâm, Đông Anh, Sóc Sơn, Thanh Trì, Thường Tín, Hoài Đức, Thạch Thất, Quốc Oai, Thanh
                            Oai,
                            Mê Linh, Chương Mỹ và thị xã Sơn Tây thuộc thành phố Hà Nội;
                        </li>
                        <li>Các quận và các huyện Thủy Nguyên, An Dương, An Lão, Vĩnh Bảo thuộc thành phố Hải Phòng;</li>
                        <li>Các quận và các huyện Củ Chi, Hóc Môn, Bình Chánh, Nhà Bè thuộc thành phố Hồ Chí Minh;</li>
                        <li>Thành phố Biên Hòa, thị xã Long Khánh và các huyện Nhơn Trạch, Long Thành, Vĩnh Cửu, Trảng Bom thuộc tỉnh Đồng
                            Nai;
                        </li>
                        <li>Thành phố Thủ Dầu Một, các thị xã Thuận An, Dĩ An, Bến Cát, Tân Uyên và các huyện Bàu Bàng, Bắc Tân Uyên thuộc
                            tỉnh Bình Dương;
                        </li>
                        <li>Thành phố Vũng Tàu, huyện Tân Thành thuộc tỉnh Bà Rịa</li>
                        <li>Vũng Tàu.</li>
                        </ul>
                        <p class="text-primary"><strong>2. Vùng II, gồm các địa bàn:</strong></p>
                        <ul>
                        <li>Các huyện còn lại thuộc thành phố Hà Nội; </li>
                        <li>Các huyện còn lại thuộc thành phố Hải Phòng;</li>
                        <li>Thành phố Hải Dương thuộc tỉnh Hải Dương;</li>
                        <li>Thành phố Hưng Yên và các huyện Mỹ Hào, Văn Lâm, Văn Giang, Yên Mỹ thuộc tỉnh Hưng Yên;</li>
                        <li>Thành phố Vĩnh Yên, thị xã Phúc Yên và các huyện Bình Xuyên, Yên Lạc thuộc tỉnh Vĩnh Phúc;</li>
                        <li>Thành phố Bắc Ninh, thị xã Từ Sơn và các huyện Quế Võ, Tiên Du, Yên Phong, Thuận Thành thuộc tỉnh Bắc Ninh;</li>
                        <li>Các thành phố Hạ Long, Cẩm Phả, Uông Bí, Móng Cái thuộc tỉnh Quảng Ninh;</li>
                        <li>Các thành phố Thái Nguyên, Sông Công và thị xã Phổ Yên thuộc tỉnh Thái Nguyên</li>
                        <li>Thành phố Việt Trì thuộc tỉnh Phú Thọ</li>
                        <li>Thành phố Lào Cai thuộc tỉnh Lào Cai</li>
                        <li>Thành phố Nam Định và huyện Mỹ Lộc thuộc tỉnh Nam Định</li>
                        <li>Thành phố Ninh Bình thuộc tỉnh Ninh Bình</li>
                        <li>Thành phố Huế thuộc tỉnh Thừa Thiên Huế</li>
                        <li>Các Thành phố Hội An, Tam kỳ thuộc tỉnh Quảng Nam</li>
                        <li>Các quận, huyện thuộc thành phố Đà Nẵng</li>
                        <li>Các thành phố Nha Trang, Cam Ranh thuộc tỉnh Khánh Hòa</li>
                        <li>Các thành phố Đà Lạt, Bảo Lộc thuộc tỉnh Lâm Đồng</li>
                        <li>Thành phố Phan Thiết thuộc tỉnh Bình Thuận</li>
                        <li>Huyện Cần Giờ thuộc thành phố Hồ Chí Minh</li>
                        <li>Thành phố Tây Ninh và các huyện Trảng Bàng, Gò Dầu thuộc tỉnh Tây Ninh</li>
                        <li>Các huyện Định Quán, Xuân Lộc, Thống Nhất thuộc tỉnh Đồng Nai</li>
                        <li>Các huyện còn lại thuộc tỉnh Bình Dương</li>
                        <li>Thị xã Đồng Xoài và huyện Chơn Thành thuộc tỉnh Bình Phước</li>
                        <li>Thành phố Bà Rịa thuộc tỉnh Bà Rịa - Vũng Tàu</li>
                        <li>Thành phố Tân An và các huyện Đức Hòa, Bến Lức, Thủ Thừa, Cần Đước, Cần Giuộc thuộc tỉnh Long An</li>
                        <li>Thành phố Mỹ Tho thuộc tỉnh Tiền Giang</li>
                        <li>Các quận thuộc thành phố Cần Thơ</li>
                        <li>Thành phố Rạch Giá, thị xã Hà Tiên và huyện Phú Quốc thuộc tỉnh Kiên Giang</li>
                        <li>Các thành phố Long Xuyên, Châu Đốc thuộc tỉnh An Giang</li>
                        <li>Thành phố Trà Vinh thuộc tỉnh Trà Vinh</li>
                        <li>
                            Thành phố Cà Mau thuộc tỉnh Cà Mau.
                            <p></p>
                        </li>
                        </ul>
                        <p></p>
                        <p class="text-primary"><strong>3. Vùng III, gồm các địa bàn:</strong></p>
                        <ul>
                        <li>Các thành phố trực thuộc tỉnh còn lại (trừ các thành phố trực thuộc tỉnh nêu tại vùng I, vùng II)</li>
                        <li>Thị xã Chí Linh và các huyện Cẩm Giàng, Nam Sách, Kim Thành, Kinh Môn, Gia Lộc, Bình Giang, Tứ Kỳ thuộc tỉnh Hải
                            Dương
                        </li>
                        <li>Các huyện Vĩnh Tường, Tam Đảo, Tam Dương, Lập Thạch, Sông Lô thuộc tỉnh Vĩnh Phúc</li>
                        <li>Thị xã Phú Thọ và các huyện Phù Ninh, Lâm Thao, Thanh Ba, Tam Nông thuộc tỉnh Phú Thọ</li>
                        <li>Các huyện Gia Bình, Lương Tài thuộc tỉnh Bắc Ninh</li>
                        <li>Các huyện Việt Yên, Yên Dũng, Hiệp Hòa, Tân Yên, Lạng Giang thuộc tỉnh Bắc Giang</li>
                        <li>Các thị xã Quảng Yên, Đông Triều và huyện Hoành Bồ thuộc tỉnh Quảng Ninh</li>
                        <li>Các huyện Bảo Thắng, Sa Pa thuộc tỉnh Lào Cai</li>
                        <li>Các huyện còn lại thuộc tỉnh Hưng Yên</li>
                        <li>Các huyện Phú Bình, Phú Lương, Đồng Hỷ, Đại Từ thuộc tỉnh Thái Nguyên</li>
                        <li>Các huyện còn lại thuộc tỉnh Nam Định</li>
                        <li>Các huyện Duy Tiên, Kim Bảng thuộc tỉnh Hà Nam</li>
                        <li>Các huyện Gia Viễn, Yên Khánh, Hoa Lư thuộc tỉnh Ninh Bình</li>
                        <li>Huyện Lương Sơn thuộc tỉnh Hòa Bình</li>
                        <li>Thị xã Bỉm Sơn và huyện Tĩnh Gia thuộc tỉnh Thanh Hóa</li>
                        <li>Thị xã Kỳ Anh thuộc tỉnh Hà Tĩnh</li>
                        <li>Các thị xã Hương Thủy, Hương Trà và các huyện Phú Lộc, Phong Điền, Quảng Điền, Phú Vang thuộc tỉnh Thừa Thiên
                            Huế
                        </li>
                        <li>Thị xã Điện Bàn và các huyện Đại Lộc, Duy Xuyên, Núi Thành, Quế Sơn, Thăng Bình thuộc tỉnh Quảng Nam</li>
                        <li>Các huyện Bình Sơn, Sơn Tịnh thuộc tỉnh Quảng Ngãi</li>
                        <li>Thị xã Sông Cầu và huyện Đông Hòa thuộc tỉnh Phú Yên</li>
                        <li>Các huyện Ninh Hải, Thuận Bắc thuộc tỉnh Ninh Thuận</li>
                        <li>Thị xã Ninh Hòa và các huyện Cam Lâm, Diên Khánh, Vạn Ninh thuộc tỉnh Khánh Hòa</li>
                        <li>Huyện Đăk Hà thuộc tỉnh Kon Tum</li>
                        <li>Các huyện Đức Trọng, Di Linh thuộc tỉnh Lâm Đồng</li>
                        <li>Thị xã La Gi và các huyện Hàm Thuận Bắc, Hàm Thuận Nam thuộc tỉnh Bình Thuận</li>
                        <li>Các thị xã Phước Long, Bình Long và các huyện Đồng Phú, Hớn Quản thuộc tỉnh Bình Phước</li>
                        <li>Các huyện còn lại thuộc tỉnh Tây Ninh</li>
                        <li>Các huyện còn lại thuộc tỉnh Đồng Nai</li>
                        <li>Các huyện Long Điền, Đất Đỏ, Xuyên Mộc, Châu Đức, Côn Đảo thuộc tỉnh Bà Rịa</li>
                        <li>Vũng Tàu</li>
                        <li>Thị xã Kiến Tường và các huyện Đức Huệ, Châu Thành, Tân Trụ, Thạnh Hóa thuộc tỉnh Long An</li>
                        <li>Các thị xã Gò Công, Cai Lậy và các huyện Châu Thành, Chợ Gạo thuộc tỉnh Tiền Giang</li>
                        <li>Huyện Châu Thành thuộc tỉnh Bến Tre</li>
                        <li>Thị xã Bình Minh và huyện Long Hồ thuộc tỉnh Vĩnh Long</li>
                        <li>Các huyện thuộc thành phố Cần Thơ</li>
                        <li>Các huyện Kiên Lương, Kiên Hải, Châu Thành thuộc tỉnh Kiên Giang</li>
                        <li>Thị xã Tân Châu và các huyện Châu Phú, Châu Thành, Thoại Sơn thuộc tỉnh An Giang</li>
                        <li>Thị xã Ngã Bảy và các huyện Châu Thành, Châu Thành A thuộc tỉnh Hậu Giang</li>
                        <li>Thị xã Duyên Hải thuộc tỉnh Trà Vinh</li>
                        <li>Thị xã Giá Rai thuộc tỉnh Bạc Liêu</li>
                        <li>Các thị xã Vĩnh Châu, Ngã Năm thuộc tỉnh Sóc Trăng</li>
                        <li>Các huyện Năm Căn, Cái Nước, U Minh, Trần Văn Thời thuộc tỉnh Cà Mau.</li>
                        </ul>
                        <p class="text-primary"><strong>4. Vùng IV, gồm các địa bàn còn lại</strong></p>
                    </div>
                    <div class="modal-footer"><button type="button" data-dismiss="modal" class="btn btn-sm btn-default btn-out-line-success-custom" @click="hideModal('modal-salary-detail')">Đóng lại</button></div>
                </div>
            </div>
        </div>

        <div tabindex="-1" role="dialog" id="modal-success-mail" class="modal fade" style="display: none;" aria-hidden="true">
            <div role="document" class="modal-dialog modal-lg">
                <div class="modal-content" style="display: inline-block;">
                    <div class="modal-header">
                        <button type="button" data-dismiss="modal" aria-label="Close" class="close"><span aria-hidden="true" @click="hideModal('modal-success-mail')">×</span></button> 
                        <p class="custom-font-italic" style="margin-bottom: 0px;">Kết quả đã được gửi thành công.<br> Bạn vui lòng kiểm tra hòm thư nhé!</p>
                        <div class="icon-success">
                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.9999 42.1654C33.5416 42.1654 42.1666 33.5404 42.1666 22.9987C42.1666 12.457 33.5416 3.83203 22.9999 3.83203C12.4583 3.83203 3.83325 12.457 3.83325 22.9987C3.83325 33.5404 12.4583 42.1654 22.9999 42.1654Z" stroke="#5BE178" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.8542 22.9984L20.2784 28.4226L31.1459 17.5742" stroke="#5BE178" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div tabindex="-1" role="dialog" id="modal-loading" class="modal fade" style="display: none;" aria-hidden="true">
            <div role="document" class="modal-dialog modal-lg">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <g transform="rotate(0 50 50)">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#1e88e5">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
                    </rect>
                    </g><g transform="rotate(30 50 50)">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#1e88e5">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
                    </rect>
                    </g><g transform="rotate(60 50 50)">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#1e88e5">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
                    </rect>
                    </g><g transform="rotate(90 50 50)">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#1e88e5">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
                    </rect>
                    </g><g transform="rotate(120 50 50)">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#1e88e5">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
                    </rect>
                    </g><g transform="rotate(150 50 50)">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#1e88e5">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
                    </rect>
                    </g><g transform="rotate(180 50 50)">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#1e88e5">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
                    </rect>
                    </g><g transform="rotate(210 50 50)">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#1e88e5">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
                    </rect>
                    </g><g transform="rotate(240 50 50)">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#1e88e5">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
                    </rect>
                    </g><g transform="rotate(270 50 50)">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#1e88e5">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
                    </rect>
                    </g><g transform="rotate(300 50 50)">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#1e88e5">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
                    </rect>
                    </g><g transform="rotate(330 50 50)">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#1e88e5">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
                    </rect>
                    </g>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
import "../assets/css/thue-tncn.css";
import "../assets/css/frontend-lite.min.css";
import axios from 'axios';

export default {
    name: "TinhThueTNCN",
    props: {
        msg: String,
    },
    data() {
        return {
            showResult: false,
            salary: "",
            tax_level_name: "",
            tax: null,
            contract_salary: '',
            bhxh_salary: '',
            insurance: '',
            children_subtract: '',
            tntt: '',
            bhtn_salary: '',
            emailCustomer: null,
            thu_nhap_truoc_thue: null,
            thuePhaiNopTheoBac: null
        };
    },
    watch: {

    },
    mounted: function () {
        this.nguoiPhuThuoc = 0;
        function formatNumber(nStr, decSeperate, groupSeperate) {
            nStr += '';
            var x = nStr.split(decSeperate);
            var x1 = x[0];
            var x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + groupSeperate + '$2');
            }
            return x1 + x2;
        }
        $(document).on('keypress keyup blur',
            'input.1236il9bpn',
            function (event) {
                if (event.which != 46 && (event.which < 48 || event.which > 57)) {
                    event.preventDefault();
                }

                let self = $(this);
                //eslint-disable-next-line
                let value = self.val().replace(/^0+/g, '').replace(/\,/g, '');
                self.val(formatNumber(value, ',', ','));
            });

        $("input[name=dongBaoHiem]").change(function () {
            if ($(this).val() == "khac") {
                $("input[name=luongDongBaoHiem]").prop("disabled", false);
                const inputOther = document.querySelector(
                    "input[name=luongDongBaoHiem]"
                );
                if (inputOther) {
                    inputOther.focus();
                }
            } else {
                $("input[name=luongDongBaoHiem]").prop("disabled", true);
            }
        });
    },
    methods: {
        hideModal(element) {
            $('body').removeClass("modal-open");
            $('#' + element).css({ 'display': 'none' }).removeClass("in")
            $('.modal-backdrop.fade.in').remove();
        },
        openModal(element) {
            $('body').addClass("modal-open");
            $('body').append('<div class="modal-backdrop fade in"></div>');
            $('#' + element).css({'display':'block'}).addClass("in")
        },
        async sendEmailCustomer() {
            try {
                let email = this.emailCustomer
            if (!email) {
                alert('Bạn chưa nhập địa chỉ e-mail !');
                return true
            }
            let contentMail = $('.showResult').html();
            this.openModal('modal-loading')

            let result = await axios.post(
                'https://nodeserver-5t9n.onrender.com/mail',
                {
                    email: email,
                    content: JSON.stringify(contentMail),
                    subject: 'Công cụ tính Thuế thu nhập cá nhân chuẩn 2024 Base.vn'
                },
                );
                this.hideModal('modal-loading')

                this.openModal('modal-success-mail');
                return result;
            } catch (error) {
                alert('Có lỗi khi gửi email');
            }

        },
        get_tax_level(tntt) {
            if (tntt <= 0) {
                return { name: '0%', value: 0 };
            } else if (tntt <= 5000000) {
                return { name: '5%', value: tntt * 5 / 100 };
            } else if (tntt <= 10000000) {
                return { name: '10% - 250,000', value: tntt * 10 / 100 - 250000 };
            } else if (tntt <= 18000000) {
                return { name: '15% - 750,000', value: tntt * 15 / 100 - 750000 };
            } else if (tntt <= 32000000) {
                return { name: '20% - 1,650,000', value: tntt * 20 / 100 - 1650000 };
            } else if (tntt <= 52000000) {
                return { name: '25% - 3,250,000', value: tntt * 25 / 100 - 3250000 };
            } else if (tntt <= 80000000) {
                return { name: '30% - 5,850,000', value: tntt * 30 / 100 - 5850000 };
            } else {
                return { name: '35% - 9,850,000', value: tntt * 35 / 100 - 9850000 };
            }
        },
        luongtoithieuvung() {
            let MucLuongCoSoDoanhNghiep_V1 = 93600000;
            let MucLuongCoSoDoanhNghiep_V2 = 83200000;
            let MucLuongCoSoDoanhNghiep_V3 = 72800000;
            let MucLuongCoSoDoanhNghiep_V4 = 65000000;
            if (this.vung == '1') {
                return MucLuongCoSoDoanhNghiep_V1;
            }
            else if (this.vung == '2') {
                return MucLuongCoSoDoanhNghiep_V2;
            }
            else if (this.vung == '3') {
                return MucLuongCoSoDoanhNghiep_V3;
            }
            else if (this.vung == '4') {
                return MucLuongCoSoDoanhNghiep_V4;
            }
            else {
                return MucLuongCoSoDoanhNghiep_V1;
            }
        },
        tinhThuePhaiNopTheoBac(tax){
            // let bacthuephainop = '', thuephainopdiengiai = '',
            let bac = [], arr = [] , thuephainop = 0,
            thuesuat = [5, 10, 15, 20, 25, 30, 35],
            dinhmuc = [
                'Đến 5 triệu VNĐ', 'Trên 5 triệu VNĐ đến 10 triệu VNĐ', 'Trên 10 triệu VNĐ đến 18 triệu VNĐ',
                'Trên 18 triệu VNĐ đến 32 triệu VNĐ', 'Trên 32 triệu VNĐ đến 52 triệu VNĐ',
                'Trên 52 triệu VNĐ đến 80 triệu VNĐ', 'Trên 80 triệu VNĐ'
            ];
            if (tax <= 5000000) {
                bac.push(tax * 5 / 100);
                arr.push(this.formatNumber(Math.round(tax), '.', '.'));
            } else if (tax > 5000000 && tax <= 10000000) {
                bac.push(5000000 * 5 / 100);
                bac.push((tax - 5000000) * 10 / 100);
                arr.push('5.000.000');
                arr.push('(' + this.formatNumber(Math.round(tax), '.', '.') + ' - 5.000.000)');
            } else if (tax > 10000000 && tax <= 18000000) {
                bac.push(5000000 * 5 / 100);
                bac.push((10000000 - 5000000) * 10 / 100);
                bac.push((tax - 10000000) * 15 / 100);
                arr.push('5.000.000');
                arr.push('(10.000.000 - 5.000.000)');
                arr.push('(' + this.formatNumber(Math.round(tax), '.', '.') + ' - 10.000.000)');
            } else if (tax > 18000000 && tax <= 32000000) {
                bac.push(5000000 * 5 / 100);
                bac.push((10000000 - 5000000) * 10 / 100);
                bac.push((18000000 - 10000000) * 15 / 100);
                bac.push((tax - 18000000) * 20 / 100);
                arr.push('5.000.000');
                arr.push('(10.000.000 - 5.000.000)');
                arr.push('(18.000.000 - 10.000.000)');
                arr.push('(' + this.formatNumber(Math.round(tax), '.', '.') + ' - 18.000.000)');
            } else if (tax > 32000000 && tax <= 52000000) {
                bac.push(5000000 * 5 / 100);
                bac.push((10000000 - 5000000) * 10 / 100);
                bac.push((18000000 - 10000000) * 15 / 100);
                bac.push((32000000 - 18000000) * 20 / 100);
                bac.push((tax - 32000000) * 25 / 100);
                arr.push('5.000.000');
                arr.push('(10.000.000 - 5.000.000)');
                arr.push('(18.000.000 - 10.000.000)');
                arr.push('(32.000.000 - 18.000.000)');
                arr.push('(' + this.formatNumber(Math.round(tax), '.', '.') + ' - 32.000.000)');
            } else if (tax > 52000000 && tax <= 80000000) {
                bac.push(5000000 * 5 / 100);
                bac.push((10000000 - 5000000) * 10 / 100);
                bac.push((18000000 - 10000000) * 15 / 100);
                bac.push((32000000 - 18000000) * 20 / 100);
                bac.push((52000000 - 32000000) * 25 / 100);
                bac.push((tax - 52000000) * 30 / 100);
                arr.push('5.000.000');
                arr.push('(10.000.000 - 5.000.000)');
                arr.push('(18.000.000 - 10.000.000)');
                arr.push('(32.000.000 - 18.000.000)');
                arr.push('(52.000.000 - 32.000.000)');
                arr.push('(' + this.formatNumber(Math.round(tax), '.', '.') + ' - 52.000.000)');
            } else if (tax > 80000000) {
                bac.push(5000000 * 5 / 100);
                bac.push((10000000 - 5000000) * 10 / 100);
                bac.push((18000000 - 10000000) * 15 / 100);
                bac.push((32000000 - 18000000) * 20 / 100);
                bac.push((52000000 - 32000000) * 25 / 100);
                bac.push((80000000 - 52000000) * 30 / 100);
                bac.push((tax - 80000000) * 35 / 100);
                arr.push('5.000.000');
                arr.push('(10.000.000 - 5.000.000)');
                arr.push('(18.000.000 - 10.000.000)');
                arr.push('(32.000.000 - 18.000.000)');
                arr.push('(52.000.000 - 32.000.000)');
                arr.push('(80.000.000 - 52.000.000)');
                arr.push('(' + this.formatNumber(Math.round(tax), '.', '.') + ' - 80.000.000)');
            }
            let arrBacThue = [{
                dinhmuc: 'Mức chịu thuế',
                thuesuat: 'Thuế suất',
                tiennop: 'Tiền nộp (đ)'
            }];

            for (let i = 0; i < bac.length; i++) {
                if (bac[i] < 0) {
                    bac[i] = 0;
                }
                let bacThue = {};
                // bacthuephainop += '<p><strong>+ Bậc ' + (i + 1) + '</strong>: Thu nhập tính thuế ' + dinhmuc[i] + ', thuế suất ' + thuesuat[i] + '%:</p>' +
                //     '<p>' + arr[i] + ' × ' + thuesuat[i] + '% = ' + this.formatNumber(Math.round(bac[i]), '.', '.') + '</p>';
                thuephainop += bac[i];
                // thuephainopdiengiai += this.formatNumber(Math.round(bac[i]), '.', '.') + (i < bac.length - 1 ? ' + ' : '');
                arrBacThue.push(Object.assign(bacThue, {
                    dinhmuc: dinhmuc[i],
                    thuesuat: thuesuat[i],
                    tiennop: bac[i],
                })) 

            }
            return [arrBacThue, thuephainop];
        },
        personalIncomeTax() {
            let data = $('#form-salary').serialize();
            let gross = 0;
            let giamTruGiaCanhBanThan = 11000000;
            let giamTruNguoiPhuThuoc = 4400000;
            let children = parseFloat(this.nguoiPhuThuoc);

            data = data.split("&");
            //eslint-disable-next-line
            this.luong = this.luong?.replace(/\,/g, "")
            this.luong = this.luong?.replace(/\./g, "")
            if (isNaN(parseFloat(this.luong))) {
                alert('Xin Vui lòng nhập Thu Nhập (Gross) của bạn!');
                this.luong = '';
                return
            }
            if (this.luong) {
                gross = this.luong;
            }
            if (data.includes('dongBaoHiem=trenChinhThuc')) {
                this.luongDongBaoHiem = this.luong;
            } else {
                //eslint-disable-next-line
                this.luongDongBaoHiem = this.luongDongBaoHiem?.replace(/\,/g, "");
            }

            //eslint-disable-next-line
            this.contract_salary = parseFloat(this.luongDongBaoHiem.replace(/\,/g, ""));

            this.bhxh_salary = this.contract_salary > 36000000 ? 36000000 : this.contract_salary;
            //bhtn_salary = contract_salary > 85172000 ? 85172000 : contract_salary;
            this.bhtn_salary = this.contract_salary > this.luongtoithieuvung() ? this.luongtoithieuvung() : this.contract_salary;
            this.insurance = this.bhxh_salary * 9.5 / 100 + this.bhtn_salary * 1 / 100;
            this.thu_nhap_truoc_thue = this.luong - this.insurance;
            this.children_subtract = children * giamTruNguoiPhuThuoc;
            //tntt - thu nhap tinh thue
            this.tntt = gross - this.insurance - giamTruGiaCanhBanThan - this.children_subtract;
            var tax_level = this.get_tax_level(this.tntt);
            this.tax_level_name = tax_level.name;
            this.tax = tax_level.value;
            this.thuePhaiNopTheoBac = this.tinhThuePhaiNopTheoBac(this.tntt)?.length > 0 ? this.tinhThuePhaiNopTheoBac(this.tntt) : [];
            this.luong = this.formatNumber(this.luong, ',', ',');
            this.luongDongBaoHiem = this.formatNumber(this.luongDongBaoHiem, ',', ',');

            if(this.tntt) {
                this.showResult = true;
            } else {
                alert('Vui lòng nhập số người phụ thuộc.')
                return
            }
        },
        formatNumber(nStr, decSeperate, groupSeperate) {
            nStr += '';
            var x = nStr.split(decSeperate);
            var x1 = x[0];
            var x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + groupSeperate + '$2');
            }
            return x1 + x2;
        },
        numberFormat(x) {
            if(x === 0) {
                return x
            } else {
                //eslint-disable-next-line
                x = x.toString().replace(/^0+/g, '').replace(/\,/g, '');
                x = Math.trunc(parseFloat(x))
                return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : null;
            }
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
