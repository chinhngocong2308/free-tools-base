<template>
    <main class="main" id="site-content">
    <div class="main-content">
        <section class="section-thue section-bhxh">
            <div class="section-content">
                <div class="content-left">
                <header class="section-header text-left">
                    <h1 class="thue-title-h1">Công cụ tính bảo hiểm xã hội một lần online miễn phí 2024</h1>
                    <p class="thue-ptext">
                        Nếu nghỉ việc hoặc không đóng bảo hiểm xã hội trong vòng 1 năm, bạn có thể được nhận bảo hiểm xã hội một lần dù chưa đến tuổi về hưu hay nhận lương hưu. Đây là khoản hỗ trợ từ BHXH và Nhà nước dành cho người lao động. Để nhận khoản tiền này, người lao động cần chuẩn bị thủ tục nhận bảo hiểm xã hội một lần. Công cụ tính bảo hiểm xã hội một lần dưới đây của Base.vn sẽ giúp bạn hiểu rõ về loại hình bảo hiểm này cũng như cách tính BHXH một lần mà bạn có thể nhận được để đảm bảo quyền lợi của chính mình.
                    </p>
                </header>
                <div class="tabs-bhxh">
                    <a href="/tinh-bhxh-bat-buoc" class="tabs-bhxh-item active">BHXH
                    bắt buộc</a> 
                    <a href="/tinh-bhxh-tu-nguyen"
                        class="tabs-bhxh-item">BHXH tự nguyện</a> 
                    <a
                        href="/tinh-bhxh-bat-buoc-va-tu-nguyen" class="tabs-bhxh-item">Cả BHXH
                    bắt buộc &amp; BHXH tự nguyện</a>
                </div>
                <div class="head-sst bhxh-bat-buoc">
                    <!-- <span class="fix-tt1">Stt</span>  -->
                    <div class="fix-tt2">Giai đoạn nộp BHXH</div> 
                    <div class="fix-tt4 fdttt">Mức lương đóng BHXH</div>
                </div>
                <div class="thue-content">
                    <div id="6w8xviuqf9">
                        <div class="table-group 881nvuiumu">
                            <span class="button ic iconlvn-c-info icerror" style="display:none"></span>
                            <div class="table-cell fixwcel m-cell1"><span class="p-hide">Giai đoạn</span> <span
                               class="number">01</span></div>
                            <div class="w-8">
                                <!-- <div class="table-cell fixwcel m-cell1">
                                    <span class="p-hide">Giai đoạn</span>
                                </div> -->
                                <div class="table-cell m-cell3">
                                    <select class="select select36 from-month">
                                        <option value="0">Tháng</option>
                                        <option value="1">01</option>
                                        <option value="2">02</option>
                                        <option value="3">03</option>
                                        <option value="4">04</option>
                                        <option value="5">05</option>
                                        <option value="6">06</option>
                                        <option value="7">07</option>
                                        <option value="8">08</option>
                                        <option value="9">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                </div>
                                <div class="table-cell m-cell4">
                                    <select class="select select36 from-year">
                                        <option value="0">Năm</option>
                                        <option v-for="i in rangeYear(fromYear, toYear)" :key="i" :value="i">
                                            {{ i }}
                                        </option>
                                    </select>
                                </div>
                                <div class="table-cell m-cell2 from-text">Đến</div>
                                <div class="table-cell m-cell3">
                                    <select class="select select36 to-month">
                                        <option value="0">Tháng</option>
                                        <option value="1">01</option>
                                        <option value="2">02</option>
                                        <option value="3">03</option>
                                        <option value="4">04</option>
                                        <option value="5">05</option>
                                        <option value="6">06</option>
                                        <option value="7">07</option>
                                        <option value="8">08</option>
                                        <option value="9">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                </div>
                                <div class="table-cell m-cell4">
                                    <select class="select select36 to-year">
                                        <option value="0">Năm</option>
                                        <option v-for="i in rangeYear(fromYear, toYear)" :key="i" :value="i">
                                            {{ i }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="w-4">
                                <div class="table-cell m-cell5"><input class="input select36 fixwcel 1236il9bpn"
                                placeholder="Mức lương đóng BHXH"> <a href="javascript:void(0)" rel="nofollow"
                                title="Xóa giai đoạn nộp BHXH" data-toggle-target="#xoa-giaidoan-target"
                                class="ic icon-binlvn del-row"></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="table-group fixmg"><span class="btn-bhxh 9s56i2p4jd">+ Thêm giai đoạn</span> <span
                        class="btn-bhxh o9l4vf3d11 bgc-vien">+ giai đoạn thai sản</span> 
                    </div>
                    <div class="form-btn">
                        <span class="btn-bhxh bgtinh 764s2cypn5">Tính bảo hiểm xã hội</span>
                    </div>
                    <p class="thue-note">Lưu ý: Vui lòng nhập quá trình đóng BHXH theo thứ tự lần lượt từ khi bắt
                        đầu đóng bảo hiểm đến khi ngừng đóng.
                    </p>
                    <div class="table-group2 pm1p6zqaiw" style="display:none">
                        Tiền BHXH 1 lần được nhận: <span
                            class="color-red">0 đồng</span> 
                    </div>
                </div>
                <div class="thue-content 8gwrvbfe29">
                    <div class="thue-title" style="display:none"><em>Diễn giải cách tính BHXH 1 lần</em></div>
                    <div class="thue-body fix-hight-thue-body" style="display:none"></div>
                    <div class="fix-xemthem lpwjzzzzne" style="display:none"><span class="btnxemthem">Xem
                        thêm</span>
                    </div>
                </div>
                <div class="thue-content">
                    <div class="thue-title2">Bảng hệ số trượt giá năm 2024</div>
                    <div class="thue-body">
                        <div class="m-scroll-x">
                            <table class="table table-bordered text-center fn-14">
                            <tbody>
                                <tr>
                                    <td><strong>Năm</strong></td>
                                    <td><strong>Trước 1995</strong></td>
                                    <td><strong>1995</strong></td>
                                    <td><strong>1996</strong></td>
                                    <td><strong>1997</strong></td>
                                    <td><strong>1998</strong></td>
                                    <td><strong>1999</strong></td>
                                    <td><strong>2000</strong></td>
                                    <td><strong>2001</strong></td>
                                    <td><strong>2002</strong></td>
                                    <td><strong>2003</strong></td>
                                    <td><strong>2004</strong></td>
                                    <td><strong>2005</strong></td>
                                    <td><strong>2006</strong></td>
                                    <td><strong>2007</strong></td>
                                </tr>
                                <tr>
                                    <td><strong>Mức điều chỉnh</strong></td>
                                    <td class="0wm5f0tax8" data-y="0">5,26</td>
                                    <td class="0wm5f0tax8" data-y="1995">4,46</td>
                                    <td class="0wm5f0tax8" data-y="1996">4,22</td>
                                    <td class="0wm5f0tax8" data-y="1997">4,09</td>
                                    <td class="0wm5f0tax8" data-y="1998">3,8</td>
                                    <td class="0wm5f0tax8" data-y="1999">3,64</td>
                                    <td class="0wm5f0tax8" data-y="2000">3,7</td>
                                    <td class="0wm5f0tax8" data-y="2001">3,71</td>
                                    <td class="0wm5f0tax8" data-y="2002">3,57</td>
                                    <td class="0wm5f0tax8" data-y="2003">3,46</td>
                                    <td class="0wm5f0tax8" data-y="2004">3,21</td>
                                    <td class="0wm5f0tax8" data-y="2005">2,96</td>
                                    <td class="0wm5f0tax8" data-y="2006">2,76</td>
                                    <td class="0wm5f0tax8" data-y="2007">2,55</td>
                                </tr>
                                <tr>
                                    <td><strong>Năm</strong></td>
                                    <td><strong>2008</strong></td>
                                    <td><strong>2009</strong></td>
                                    <td><strong>2010</strong></td>
                                    <td><strong>2011</strong></td>
                                    <td><strong>2012</strong></td>
                                    <td><strong>2013</strong></td>
                                    <td><strong>2014</strong></td>
                                    <td><strong>2015</strong></td>
                                    <td><strong>2016</strong></td>
                                    <td><strong>2017</strong></td>
                                    <td><strong>2018</strong></td>
                                    <td><strong>2019</strong></td>
                                    <td><strong>2020</strong></td>
                                    <td><strong>2021</strong></td>
                                </tr>
                                <tr>
                                    <td><strong>Mức điều chỉnh</strong></td>
                                    <td class="0wm5f0tax8" data-y="2008">2,07</td>
                                    <td class="0wm5f0tax8" data-y="2009">1,94</td>
                                    <td class="0wm5f0tax8" data-y="2010">1,77</td>
                                    <td class="0wm5f0tax8" data-y="2011">1,5</td>
                                    <td class="0wm5f0tax8" data-y="2012">1,37</td>
                                    <td class="0wm5f0tax8" data-y="2013">1,28</td>
                                    <td class="0wm5f0tax8" data-y="2014">1,23</td>
                                    <td class="0wm5f0tax8" data-y="2015">1,23</td>
                                    <td class="0wm5f0tax8" data-y="2016">1,19</td>
                                    <td class="0wm5f0tax8" data-y="2017">1,15</td>
                                    <td class="0wm5f0tax8" data-y="2018">1,11</td>
                                    <td class="0wm5f0tax8" data-y="2019">1,08</td>
                                    <td class="0wm5f0tax8" data-y="2020">1,05</td>
                                    <td class="0wm5f0tax8" data-y="2021">1,03</td>
                                </tr>
                                <tr>
                                    <td><strong>Năm</strong></td>
                                    <td><strong>2022</strong></td>
                                    <td><strong>2023</strong></td>
                                    <td><strong>2024</strong></td>
                                </tr>
                                <tr>
                                    <td><strong>Mức điều chỉnh</strong></td>
                                    <td class="0wm5f0tax8" data-y="2022">1</td>
                                    <td class="0wm5f0tax8" data-y="2023">1</td>
                                    <td class="0wm5f0tax8" data-y="2024">1</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <div id="xoa-giaidoan-target" class="popup-bg target-hidden">
            <div class="popup-wrapper popup-340">
                <div class="popup-body">
                <span class="close-popup btn-hidden-popup" data-toggle-target="#xoa-giaidoan-target"><i
                    class="iconlvn-remove"></i></span>
                <div class="popup-content popup-height">
                    <div class="form-control pad16-24">
                        <div class="form-group text-center"><span class="text-20 font-bold">Bạn muốn xóa giai đoạn
                            này?</span>
                        </div>
                        <div class="form-group text-center">
                            <div class="btn-item"><span data-toggle-target="#xoa-giaidoan-target"
                            class="btn btn-hidden-popup">Hủy</span></div>
                            <div class="btn-item"><span data-toggle-target="#xoa-giaidoan-target"
                            class="btn btn-default wmvq3u48nn" data-id=" 03">Xác nhận</span></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </main>
 </template>
 
<script>
import $ from "jquery";
import "../assets/css/baohiemxh.css";

export default {
    name: "TinhBHXHBatBuoc",
    props: {
        msg: String,
    },
    data() {
        return {
            htmlResultlet: '',
            fromYear: 1975,
            toYear: 2024
        };
    },
    watch: {
        $route(to, from) {
            console.log(to, from)
        }
    },
    destroy() {
    },
    mounted: function () {
        $(document).off('click', '[data-toggle-target]').on('click', '[data-toggle-target]', function (e) {
            e.preventDefault();
            let self = $(this), target = self.attr('data-toggle-target') || self.attr('data-content');
            // #xoa-giaidoan-target
            if (typeof target != typeof undefined && target != '#xoa-giaidoan-target') {
                $(target).toggleClass('target-expanded').css('display', 'block');
            }
        });
        function showMessage(options) {
            let defaults = {
                id: '_message',
                buttons: [{
                    Name: 'Đóng',
                    ClassName: 'btn-law',
                    ClickEvent: {}
                }],
                callback: {},
                success: true,
                title: 'Thông báo',
                messages: [],
                autoClose: false,
                timeClose: 2,
                returnUrl: ''
            }
            options = $.extend(defaults, options);
            options.messages = $.isArray(options.messages) ? options.messages : [];
            let popup = `<div id="${options.id}" class="popup-bg target-hidden"> <div class="popup-wrapper popup-340"> <div class="popup-body"> <div class="popup-content"> <div class="form-pad16"> <div class="form-group text-center"> <div class="text-successful color-orange">${options.title}</div> </div> <div class="form-group text-center text-content">`

            if (options.messages.length > 0) {
                popup += '<div class="form-group text-center text-content">';
                for (let i = 0; i < options.messages.length; i++) {
                    popup += '<p>' + options.messages[i] + '</p>';
                }
                popup += `</div>
            <div class="form-group popup-button text-center">`;
                if (options.buttons.length > 0) {
                    for (let i = 0; i < options.buttons.length; i++) {
                        if (options.buttons[i].Name == 'Đóng') {
                            popup += `<span class="btn-law" data-toggle-target="#${options.id}">Đóng</span>`;
                        } else {
                            popup += `<span class="${options.buttons[i].ClassName}">${options.buttons[i].Name}</span>`;
                        }
                    }
                }
                popup += '</div>';
            }


            if (options.success) {
                $(`#${options.id}`).remove();
                $('body').append(popup);
                for (let i = 0; i < options.buttons.length; i++) {
                    let el = options.buttons[i];
                    let event = el.ClickEvent;

                    $(`#${options.id}`).on('click',
                        `.${el.ClassName}`,
                        $.isFunction(event) ? event : $.noop
                    );
                }
            }



            $('#' + options.id).addClass('target-expanded').css('display', '');
        }

        function formatNumber(nStr, decSeperate, groupSeperate) {
            nStr += '';
            let x = nStr.split(decSeperate);
            let x1 = x[0];
            let x2 = x.length > 1 ? '.' + x[1] : '';
            let rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + groupSeperate + '$2');
            }
            return x1 + x2;
        }


        $(document).on('click',
            '.9s56i2p4jd',
            function (e) {
                e.preventDefault();
                let self = $(this), giai_doan_parent = $('#6w8xviuqf9').first();
                if (giai_doan_parent.length > 0) {
                    let currentTime = new Date();
                    let currentYear = currentTime.getFullYear();
                    let bhxhIndex = $('.881nvuiumu:last .number', giai_doan_parent).text();
                    let bhxhtunguyen = self.hasClass('bhxhtunguyen');
                    let bhxhbatbuocvatunguyen = self.hasClass('bhxhbatbuocvatunguyen');
                    let yearIndex = 1975, text_tienluong = 'lương';
                    if (bhxhtunguyen) {
                        yearIndex = 2008;
                        this.fromYear = 2008;
                        text_tienluong = 'thu nhập';
                    }
                    if (isNaN(bhxhIndex))
                        bhxhIndex = 1;
                    else bhxhIndex++;
                    let giaidoanHtml = '<div class="table-group 881nvuiumu">' +
                        '<span class="button ic iconlvn-c-info icerror" style="display:none;"></span>' +
                        '<div class="table-cell fixwcel m-cell1"><span class="p-hide">Giai đoạn </span><span class="number"> ' +
                        (bhxhIndex < 10 ? '0' + bhxhIndex : bhxhIndex) +
                        '</span></div>' +
                        '' +
                        '<div class="table-cell m-cell3">' +
                        '<select class="select select36 from-month">' +
                        '<option value="0">Tháng</option>';
                    for (let i = 1; i <= 12; i++) {
                        giaidoanHtml += '<option value="' + i + '">' + (i < 10 ? '0' + i : i) + '</option>';
                    }
                    giaidoanHtml += '</select>' +
                        '</div>' +
                        '<div class="table-cell m-cell4">' +
                        '<select class="select select36 from-year">' +
                        '<option value="0">Năm</option>';
                    for (let i = currentYear; i >= yearIndex; i--) {
                        giaidoanHtml += '<option value="' + i + '">' + i + '</option>';
                    }
                    giaidoanHtml += '</select>' +
                        '</div>' +
                        '<div class="table-cell m-cell2 from-text">Đến</div>' +
                        '<div class="table-cell m-cell3">' +
                        '<select class="select select36 to-month">' +
                        '<option value="0">Tháng</option>';
                    for (let i = 1; i <= 12; i++) {
                        giaidoanHtml += '<option value="' + i + '">' + (i < 10 ? '0' + i : i) + '</option>';
                    }
                    giaidoanHtml += '</select>' +
                        '</div>' +
                        '<div class="table-cell m-cell4">' +
                        '<select class="select select36 to-year">' +
                        '<option value="0">Năm</option>';
                    for (let i = currentYear; i >= yearIndex; i--) {
                        giaidoanHtml += '<option value="' + i + '">' + i + '</option>';
                    }
                    giaidoanHtml += '</select>' +
                        '</div>' +
                        '<div class="table-cell m-cell5">' +
                        '<input class="input select36 fixwcel 1236il9bpn" placeholder="Mức ' + text_tienluong + ' đóng BHXH">';
                    if (!bhxhtunguyen && !bhxhbatbuocvatunguyen)
                        giaidoanHtml += '<a href="javascript:void(0)" rel="nofollow" title="Xóa giai đoạn nộp BHXH" data-toggle-target="#xoa-giaidoan-target" class="ic icon-binlvn del-row"></a>';
                    giaidoanHtml += '</div>';
                    if (bhxhtunguyen) {
                        giaidoanHtml += '<div class="table-cell m-cell5">' +
                            '<select class="select select36 fixwcel khkipy9982" disabled><option value="1">Hộ nghèo</option><option value="2">Hộ cận nghèo</option> <option value="3">Đối tượng khác</option></select>' +
                            '<a href="javascript:void(0)" rel="nofollow" title="Xóa giai đoạn nộp BHXH" data-toggle-target="#xoa-giaidoan-target" class="ic icon-binlvn del-row fix-m-ps"></a></div>';
                    }
                    else if (bhxhbatbuocvatunguyen) {
                        giaidoanHtml += '<div class="table-cell">' +
                            '<select class="select select36 fixwcel2 mmsrtdr71n"><option value="1">BHXH bắt buộc</option><option value="2">BHXH tự nguyện</option></select>' +
                            '<a href="javascript:void(0)" rel="nofollow" title="Xóa giai đoạn nộp BHXH" data-toggle-target="#xoa-giaidoan-target" class="ic icon-binlvn del-row"></a></div>';
                    }
                    giaidoanHtml += '</div>';
                    giai_doan_parent.append(giaidoanHtml);
                }
            });
        $(document).on('click',
            '.o9l4vf3d11',
            function (e) {
                e.preventDefault();
                let giai_doan_parent = $('#6w8xviuqf9').first();
                if (giai_doan_parent.length > 0) {
                    let currentTime = new Date();
                    let currentYear = currentTime.getFullYear();
                    let el = $('.881nvuiumu:last', giai_doan_parent), bhxhIndex = el.find('.number').first().text();
                    $('.881nvuiumu.huongthaisan', giai_doan_parent).find('.icerror').hide();
                    if (bhxhIndex.length <= 0 || isNaN(bhxhIndex) || $('select.khkipy9982', el).length > 0 || el.hasClass('huongthaisan')) {
                        let errorMsg = $('select.khkipy9982', el).length <= 0 ? 'Quý khách vui lòng thêm giai đoạn nộp BHXH.' : 'Quý khách vui lòng thêm giai đoạn nộp BHXH bắt buộc ngay trước giai đoạn thai sản.';
                        showMessage({ messages: [errorMsg] })
                        $('.881nvuiumu.huongthaisan:last', giai_doan_parent).find('.icerror').attr('title', errorMsg).show();
                        return;
                    }
                    else {
                        bhxhIndex++;
                    }
                    let giaidoanHtml = '<div class="table-group 881nvuiumu huongthaisan">' +
                        '<span class="button ic iconlvn-c-info icerror" style="display:none;"></span>' +
                        '<div class="table-cell fixwcel m-cell1"><span class="p-hide">Giai đoạn </span><span class="number"> ' +
                        (bhxhIndex < 10 ? '0' + bhxhIndex : bhxhIndex) +
                        '</span></div>' +
                        '' +
                        '<div class="table-cell m-cell3">' +
                        '<select class="select select36 from-month">' +
                        '<option value="0">Tháng</option>';
                    for (let i = 1; i <= 12; i++) {
                        giaidoanHtml += '<option value="' + i + '">' + (i < 10 ? '0' + i : i) + '</option>';
                    }
                    giaidoanHtml += '</select>' +
                        '</div>' +
                        '<div class="table-cell m-cell4">' +
                        '<select class="select select36 from-year">' +
                        '<option value="0">Năm</option>';
                    for (let i = currentYear; i >= 1975; i--) {
                        giaidoanHtml += '<option value="' + i + '">' + i + '</option>';
                    }
                    giaidoanHtml += '</select>' +
                        '</div>' +
                        '<div class="table-cell m-cell2 from-text">Đến</div>' +
                        '<div class="table-cell m-cell3">' +
                        '<select class="select select36 to-month">' +
                        '<option value="0">Tháng</option>';
                    for (let i = 1; i <= 12; i++) {
                        giaidoanHtml += '<option value="' + i + '">' + (i < 10 ? '0' + i : i) + '</option>';
                    }
                    giaidoanHtml += '</select>' +
                        '</div>' +
                        '<div class="table-cell m-cell4">' +
                        '<select class="select select36 to-year">' +
                        '<option value="0">Năm</option>';
                    for (let i = 1975; i <= currentYear; i++) {
                        giaidoanHtml += '<option value="' + i + '">' + i + '</option>';
                    }
                    giaidoanHtml += '</select>' +
                        '</div>' +
                        '<div class="table-cell m-cell5">' +
                        '<div class="item-wtext"><em>(Giai đoạn hưởng thai sản)</em></div>' +
                        '<a href="javascript:void(0)" rel="nofollow" title="Xóa giai hưởng thai sản" data-toggle-target="#xoa-giaidoan-target" class="ic icon-binlvn del-row"></a>' +
                        '</div>' +
                        '</div>';
                    giai_doan_parent.append(giaidoanHtml);
                }
            });
        $(document).on('click', '.764s2cypn5',
            function (e) {
                e.preventDefault();
                let dates = [], listDates = [],
                    mucluongbinhquan = 0,
                    sothangdongtruoc2014 = 0,
                    sothangdongtruoc2014_ = 0,
                    sothangdongtu2014 = 0,
                    sothangdongtu2014_ = 0,
                    tongsothang = 0, sothangnghithaisan = 0,
                    sotiennhan = 0, giaidoan_html = '', mucdong = '',
                    mucchuanngheo = 700000, sothanghongheo = 0, sothanghocanngheo = 0, sothangdoituongkhac = 0,
                    mucchuanngheogd2 = 1500000, sothanghongheogd2 = 0, sothanghocanngheogd2 = 0, sothangdoituongkhacgd2 = 0,
                    giaidoanbatbuoc = 0, muchuongbhxh = 0, tongtiendongbhxh = 0,
                    tienbhxhtunguyenduochotro = 0, tienbhxhtunguyenduochotrogd2 = 0, tongtienduochotro = 0, tongtiendongbh = '<p>- Tổng tiền đóng BHXH = ', nhanuochotro_dongbhxhtunguyen = '', text_tienluong = 'Tiền lương';
                if ($(this).hasClass('bhxhtunguyen')) {
                    text_tienluong = 'Thu nhập';
                    tongtiendongbh = '<p> Tổng thu nhập đóng BHXH = ';
                } else if ($(this).hasClass('bhxhbatbuocvatunguyen')) {
                    text_tienluong = 'Tiền lương/thu nhập';
                    tongtiendongbh = '<p> Tổng tiền lương/thu nhập đóng BHXH = ';
                }
                $('.881nvuiumu').each(function (i, item) {
                    let fromMonth = parseInt($('select.from-month option:selected', $(item)).val()),
                        fromYear = parseInt($('select.from-year option:selected', $(item)).val()),
                        toMonth = parseInt($('select.to-month option:selected', $(item)).val()),
                        toYear = parseInt($('select.to-year option:selected', $(item)).val()),
                        dateFrom = new Date(fromYear, fromMonth, 0),
                        dateTo = new Date(toYear, toMonth, 0),
                        doituongthamgia = $('select.khkipy9982', $(item)).length > 0 ? parseInt($('select.khkipy9982 option:selected', $(item)).val()) : 0,
                        obj = {},
                        huongthaisan = $(item).hasClass('huongthaisan');

                    if ($('.1236il9bpn', $(item)).length > 0) {
                        mucdong = $('.1236il9bpn', $(item)).val().replace(/\./g, '');
                    }
                    if (doituongthamgia > 0) {
                        //text_tienluong = 'Thu nhập';
                        if ((fromYear > 0 && fromYear < 2008) || (toYear > 0 && toYear < 2008)) {
                            showMessage({ messages: ['Chính sách BHXH tự nguyện ra đời từ năm 2008, Quý khách vui lòng chọn thời gian từ năm 2008 trở về sau.'] });
                            dates = [];
                            return false;
                        }
                    } else {
                        //text_tienluong = 'Tiền lương';
                        giaidoanbatbuoc++
                    }
                    if (i == 0 && huongthaisan) {
                        showMessage({ messages: ['Quý khách vui lòng thêm giai đoạn nộp BHXH.'] });
                        dates = [];
                        $(item).find('.icerror').attr('title', 'Quý khách vui lòng thêm giai đoạn nộp BHXH.').show();
                        return false;
                    }
                    if (listDates.length > 0) {
                        if (listDates[listDates.length - 1] >= dateFrom) {
                            showMessage({ messages: ['Ngày chọn không hợp lệ!', `Vui lòng chọn thời gian lớn hơn tháng ${(((listDates[listDates.length - 1].getMonth() + 1) < 10 ? '0' : '') + (listDates[listDates.length - 1].getMonth() + 1))} năm ${listDates[listDates.length - 1].getFullYear()}.`] });
                            dates = [];
                            $(item).find('.icerror').attr('title', 'Ngày chọn không hợp lệ! Vui lòng chọn thời gian lớn hơn tháng ' + (((listDates[listDates.length - 1].getMonth() + 1) < 10 ? '0' : '') + (listDates[listDates.length - 1].getMonth() + 1)) + ' năm ' + listDates[listDates.length - 1].getFullYear() + '.').show();
                            return false;
                        }
                    }
                    listDates.push(dateTo);
                    if (i < $('.881nvuiumu').length - 1 || huongthaisan) {
                        if (fromMonth == '0' || fromYear == '0' || toMonth == '0' || toYear == '0') {
                            showMessage({ messages: ['Vui lòng chọn thời gian: tháng/năm.'] });
                            dates = [];
                            $(item).find('.icerror').attr('title', 'Vui lòng chọn thời gian: tháng/năm.').show();
                            return false;
                        }
                        if (dateFrom > dateTo) {
                            showMessage({ messages: ['Ngày chọn không hợp lệ!', `Vui lòng chọn thời gian lớn hơn tháng ${(((dateFrom.getMonth() + 1) < 10 ? '0' : '') + (dateFrom.getMonth() + 1))} năm ${dateFrom.getFullYear()}.`] });
                            dates = [];
                            $(item).find('.icerror').attr('title', 'Ngày chọn không hợp lệ! Vui lòng chọn thời gian lớn hơn tháng ' + (((dateFrom.getMonth() + 1) < 10 ? '0' : '') + (dateFrom.getMonth() + 1)) + ' năm ' + dateFrom.getFullYear() + '.').show();
                            return false;
                        }
                    } else {
                        if ((fromMonth == '0' || fromYear == '0')) {
                            showMessage({ messages: ['Vui lòng chọn thời gian: tháng/năm.'] });
                            dates = [];
                            $(item).find('.icerror').attr('title', 'Vui lòng chọn thời gian: tháng/năm.').show();
                            return false;
                        }
                        if (toMonth == '0' && toYear != '0' || toMonth != '0' && toYear == '0') {
                            showMessage({ messages: ['Vui lòng chọn thời gian: tháng/năm.'] });
                            dates = [];
                            $(item).find('.icerror').attr('title', 'Vui lòng chọn thời gian: tháng/năm.').show();
                            return false;
                        }
                        if (toMonth != '0' && toYear != '0' && toMonth != '0' && toYear != '0') {
                            if (dateFrom > dateTo) {
                                showMessage({ messages: ['Ngày chọn không hợp lệ!', `Vui lòng chọn thời gian lớn hơn tháng ${(((dateFrom.getMonth() + 1) < 10 ? '0' : '') + (dateFrom.getMonth() + 1))} năm ${dateFrom.getFullYear()}.`] });
                                dates = [];
                                $(item).find('.icerror').attr('title', 'Ngày chọn không hợp lệ! Vui lòng chọn thời gian lớn hơn tháng ' + (((dateFrom.getMonth() + 1) < 10 ? '0' : '') + (dateFrom.getMonth() + 1)) + ' năm ' + dateFrom.getFullYear() + '.').show();
                                return false;
                            }
                        }
                    }

                    let inputEmpty = $('.1236il9bpn', $(item)).filter(function () {
                        return !this.value;
                    }).first();
                    $('.1236il9bpn', $(item)).closest('.881nvuiumu').find('.icerror').hide();
                    if ($('.1236il9bpn', $(item)).length > 0 && inputEmpty.length > 0) {
                        showMessage({
                            buttons: [{
                                Name: 'Đóng',
                                ClassName: 'btn-law',
                                ClickEvent: function () {
                                    inputEmpty.focus();
                                }
                            }],
                            messages: [`Vui lòng nhập Mức ${text_tienluong.toLowerCase()} đóng BHXH!`]
                        });
                        dates = [];
                        $(inputEmpty).closest('.881nvuiumu').find('.icerror').attr('title', 'Vui lòng nhập Mức ' + text_tienluong.toLowerCase() + ' đóng BHXH!').show();
                        return false;
                    }

                    let temp = [];
                    if (toMonth <= 0 && toYear <= 0) {
                        toMonth = fromMonth;
                        toYear = fromYear;
                    }

                    let d0 = fromYear, d1 = toYear, d2 = fromMonth, d3 = toMonth;

                    for (let y = d0; y <= d1; y++) {
                        for (let m = d2; m <= 12; m++) {
                            temp.push({ year: parseInt(y), month: parseInt(m), vnd: parseInt(mucdong) });
                            if (y >= d1 && m >= d3) break;
                        }
                        d2 = 1;
                    }
                    if (temp.length > 0) {
                        let t = 0;
                        for (let i = 0; i < temp.length; i++) {
                            if (t != temp[i].year) {
                                obj = {};
                                obj.year = temp[i].year;
                                obj.totalMonths = 1;
                                obj.fromMonth = temp[i].month;
                                obj.giaidoan = fromMonth + '/' + fromYear + '-' + toMonth + '/' + toYear;
                                obj.huongthaisan = huongthaisan;
                                obj.doituongthamgia = doituongthamgia;
                                obj.mucdong = parseInt(temp[i].vnd);
                                t = temp[i].year;
                                dates.push(obj);
                            } else {
                                obj.totalMonths++;
                            }
                        }
                    }
                });
                if (giaidoanbatbuoc <= 0) {
                    //text_tienluong = 'Thu nhập';
                }
                let y = 0, gdts = '', sothangnghitstheogiaidoan = [], o = {};
                if (dates.length > 0) {
                    for (let i = 0; i < dates.length; i++) {
                        tongsothang += dates[i].totalMonths;
                        if (dates[i].huongthaisan) {
                            if (gdts != dates[i].giaidoan) {
                                o = {};
                                sothangnghithaisan = dates[i].totalMonths;
                                gdts = dates[i].giaidoan;
                                o.giaidoan = dates[i].giaidoan;
                                o.sothangnghithaisan = sothangnghithaisan;
                                sothangnghitstheogiaidoan.push(o);
                            } else {
                                sothangnghithaisan += dates[i].totalMonths;
                                o.sothangnghithaisan += dates[i].totalMonths;
                            }
                        }

                        if (dates[i].doituongthamgia > 0 && dates[i].year >= 2018 && dates[i].year <= 2021) { //số tháng nhà nước hỗ trợ đóng BHXH tự nguyện từ 01/01/2018
                            if (dates[i].doituongthamgia == 1) {
                                sothanghongheo += dates[i].totalMonths;
                            } else if (dates[i].doituongthamgia == 2) {
                                sothanghocanngheo += dates[i].totalMonths;
                            } else if (dates[i].doituongthamgia == 3) {
                                sothangdoituongkhac += dates[i].totalMonths;
                            }
                        }

                        if (dates[i].doituongthamgia > 0 && dates[i].year >= 2022 && dates[i].year <= 2025) { //số tháng nhà nước hỗ trợ đóng BHXH tự nguyện từ 01/01/2022
                            if (dates[i].doituongthamgia == 1) {
                                sothanghongheogd2 += dates[i].totalMonths;
                            } else if (dates[i].doituongthamgia == 2) {
                                sothanghocanngheogd2 += dates[i].totalMonths;
                            } else if (dates[i].doituongthamgia == 3) {
                                sothangdoituongkhacgd2 += dates[i].totalMonths;
                            }
                        }

                        if (dates[i].year < 1995) {
                            if (dates[i].doituongthamgia > 0) {
                                y = $('.nili2qffst[data-y="0"]').html();
                            } else {
                                y = $('.0wm5f0tax8[data-y="0"]').html();
                            }
                        } else {
                            if (dates[i].doituongthamgia > 0) {
                                y = $('.nili2qffst[data-y="' + dates[i].year + '"]').html();
                            } else {
                                y = $('.0wm5f0tax8[data-y="' + dates[i].year + '"]').html();
                            }
                        }
                        if (dates[i].year < 2014) {
                            sothangdongtruoc2014 += dates[i].totalMonths;
                            sothangdongtruoc2014_ += dates[i].totalMonths;
                        } else {
                            sothangdongtu2014 += dates[i].totalMonths;
                            sothangdongtu2014_ += dates[i].totalMonths;
                        }

                        let mucdongtheogiaidoan = Math.round(dates[i].totalMonths *
                            dates[i].mucdong *
                            parseFloat(y.replace(',', '.')))
                        mucluongbinhquan += mucdongtheogiaidoan;

                        giaidoan_html += '<p>- Giai đoạn đóng từ T' + dates[i].fromMonth + '/' + dates[i].year + ' đến T' + (dates[i].fromMonth + dates[i].totalMonths - 1) + '/' + dates[i].year;
                        giaidoan_html += ': Thời gian ' + dates[i].totalMonths + ' tháng ';
                        if (dates[i].huongthaisan) {
                            giaidoan_html += ' - Thai sản</p>';
                            giaidoan_html += '<p>(Mức tiền lương đóng BHXH của thời gian nghỉ thai sản là mức tiền lương đóng BHXH của tháng trước khi nghỉ hưởng chế độ)</p>';
                        } else {
                            giaidoan_html += '- Mức ' + text_tienluong.toLowerCase() + ' đóng BHXH: ' + formatNumber(dates[i].mucdong, '.', '.') + ' đồng</p>';
                        }
                        giaidoan_html += '<p style="padding-left: 45px;">' + formatNumber(dates[i].mucdong, '.', '.') + ' x ' + parseFloat(y.replace(',', '.')) + ' x ' + dates[i].totalMonths + ' = ' + formatNumber(mucdongtheogiaidoan, '.', '.') + ' đồng</p>';
                        tongtiendongbh += formatNumber(mucdongtheogiaidoan, '.', '.') + (i < dates.length - 1 ? ' + ' : '');
                    }

                    tongtiendongbh += ' = ' + formatNumber(mucluongbinhquan, '.', '.') + ' đồng</p>';
                    tongtiendongbhxh = mucluongbinhquan;
                    //if (tongsothang < 12) {
                    //    $().lawsDialog({
                    //        dialogClass: 'lawsVnDialogTitle',
                    //        messages: ['Hệ thống chỉ áp dụng cho trường hợp có tổng thời gian đóng BHXH từ 01 năm trở lên.'],
                    //        buttons: [
                    //            {
                    //                text: 'Đóng',
                    //                'class': 'btn-thongbao1',
                    //                click: function () {
                    //                    $(this).dialog('close');
                    //                    //inputEmpty.focus();
                    //                }
                    //            }
                    //        ]
                    //    });
                    //    $('.pm1p6zqaiw > span').text('');
                    //    $('.pm1p6zqaiw').hide();
                    //    $('.cz2sn5rawy').hide();
                    //    $('.8gwrvbfe29 .thue-body').html('').hide();
                    //    $('.8gwrvbfe29 .thue-title').hide();
                    //    $('.8gwrvbfe29 .lpwjzzzzne').hide();
                    //    return false;
                    //}

                    for (let n = 0; n < sothangnghitstheogiaidoan.length; n++) {
                        if (sothangnghitstheogiaidoan[n].sothangnghithaisan > 0 && (sothangnghitstheogiaidoan[n].sothangnghithaisan < 4 || sothangnghitstheogiaidoan[n].sothangnghithaisan > 6)) {
                            let giaidoants_err = $('.881nvuiumu.huongthaisan').filter(function () {
                                let fMonth = parseInt($('select.from-month option:selected', $(this)).val()),
                                    fYear = parseInt($('select.from-year option:selected', $(this)).val()),
                                    tMonth = parseInt($('select.to-month option:selected', $(this)).val()),
                                    tYear = parseInt($('select.to-year option:selected', $(this)).val());
                                return (fMonth + '/' + fYear + '-' + tMonth + '/' + tYear) == sothangnghitstheogiaidoan[n].giaidoan;
                            }).first();

                            if (giaidoants_err.length > 0) {
                                showMessage({
                                    messages: [`Thời gian nghỉ thai sản không ${(sothangnghithaisan < 4 ? 'đủ 4 tháng.' : 'được vượt quá 6 tháng.')}`]
                                });
                                $('.pm1p6zqaiw > span').text('');
                                $('.pm1p6zqaiw').hide();
                                $('.cz2sn5rawy').hide();
                                $('.8gwrvbfe29 .thue-body').html('').hide();
                                $('.8gwrvbfe29 .thue-title').hide();
                                $('.8gwrvbfe29 .lpwjzzzzne').hide();
                                giaidoants_err.find('.icerror').attr('title', 'Thời gian nghỉ thai sản không ' + (sothangnghithaisan < 4 ? 'đủ 4 tháng.' : 'được vượt quá 6 tháng.')).show();
                                return false;
                            }
                        }
                    }

                    if (sothanghongheo > 0 || sothanghocanngheo > 0 || sothangdoituongkhac > 0 || sothanghongheogd2 > 0 || sothanghocanngheogd2 > 0 || sothangdoituongkhacgd2 > 0) {
                        nhanuochotro_dongbhxhtunguyen += (nhanuochotro_dongbhxhtunguyen == '' ? '<p>Số tiền Nhà nước hỗ trợ đóng BHXH:</p><p>(Nhà nước bắt đầu hỗ trợ đóng BHXH tự nguyện từ 01/01/2018)</p>' : '');
                    }

                    if (sothanghongheo > 0 || sothanghocanngheo > 0 || sothangdoituongkhac > 0) {
                        let phantramhotro = 0, tienhotro = 0;
                        //nhanuochotro_dongbhxhtunguyen += (nhanuochotro_dongbhxhtunguyen == '' ? '<p>Số tiền Nhà nước hỗ trợ đóng BHXH:</p><p>(Nhà nước bắt đầu hỗ trợ đóng BHXH tự nguyện từ 01/01/2018)</p>' : '');
                        nhanuochotro_dongbhxhtunguyen += '<p>Số tiền Nhà nước hỗ trợ đóng BHXH tự nguyện từ tháng 01/2018 - hết tháng 12/2021</p>';
                        if (sothanghongheo > 0) {
                            phantramhotro = 30;
                            tienhotro = 0.22 * mucchuanngheo * 0.3 * sothanghongheo;
                            tienbhxhtunguyenduochotro += tienhotro;
                            nhanuochotro_dongbhxhtunguyen += '<p style="padding-left:45px;">0.22 x ' + formatNumber(mucchuanngheo, '.', '.') + ' x ' + phantramhotro + '% x ' + sothanghongheo + ' tháng = ' + formatNumber(tienhotro, '.', '.') + ' đồng</p>';
                            if (sothanghocanngheo > 0 || sothangdoituongkhac > 0)
                                nhanuochotro_dongbhxhtunguyen += '<p style="float:left;padding-left:30px;">+ </p>';
                        }
                        if (sothanghocanngheo > 0) {
                            phantramhotro = 25;
                            tienhotro = 0.22 * mucchuanngheo * 0.25 * sothanghocanngheo;
                            tienbhxhtunguyenduochotro += tienhotro;
                            nhanuochotro_dongbhxhtunguyen += '<p style="padding-left:45px;">0.22 x ' + formatNumber(mucchuanngheo, '.', '.') + ' x ' + phantramhotro + '% x ' + sothanghocanngheo + ' tháng = ' + formatNumber(tienhotro, '.', '.') + ' đồng</p>';
                            if (sothangdoituongkhac > 0)
                                nhanuochotro_dongbhxhtunguyen += '<p style="float:left;padding-left:30px;">+ </p>';
                        }
                        if (sothangdoituongkhac > 0) {
                            phantramhotro = 10;
                            tienhotro = 0.22 * mucchuanngheo * 0.1 * sothangdoituongkhac;
                            tienbhxhtunguyenduochotro += tienhotro;
                            nhanuochotro_dongbhxhtunguyen += '<p style="padding-left:45px;">0.22 x ' + formatNumber(mucchuanngheo, '.', '.') + ' x ' + phantramhotro + '% x ' + sothangdoituongkhac + ' tháng = ' + formatNumber(tienhotro, '.', '.') + ' đồng</p>';
                        }
                        if ((sothanghongheo > 0 && sothanghocanngheo > 0) || (sothanghongheo > 0 && sothangdoituongkhac > 0) || (sothanghocanngheo > 0 && sothangdoituongkhac > 0))
                            nhanuochotro_dongbhxhtunguyen += '<p style="padding-left:30px;"> = &nbsp;' + formatNumber(tienbhxhtunguyenduochotro, '.', '.') + ' đồng</p>';
                        sotiennhan = sotiennhan - tienbhxhtunguyenduochotro;
                    }

                    if (sothanghongheogd2 > 0 || sothanghocanngheogd2 > 0 || sothangdoituongkhacgd2 > 0) {
                        let phantramhotro = 0, tienhotro = 0;
                        nhanuochotro_dongbhxhtunguyen += '<p>Số tiền Nhà nước hỗ trợ đóng BHXH tự nguyện từ tháng 01/2022 - hết tháng 12/2025</p>';
                        if (sothanghongheogd2 > 0) {
                            phantramhotro = 30;
                            tienhotro = 0.22 * mucchuanngheogd2 * 0.3 * sothanghongheogd2;
                            tienbhxhtunguyenduochotrogd2 += tienhotro;
                            nhanuochotro_dongbhxhtunguyen += '<p style="padding-left:45px;">0.22 x ' + formatNumber(mucchuanngheogd2, '.', '.') + ' x ' + phantramhotro + '% x ' + sothanghongheogd2 + ' tháng = ' + formatNumber(tienhotro, '.', '.') + ' đồng</p>';
                            if (sothanghocanngheogd2 > 0 || sothangdoituongkhacgd2 > 0)
                                nhanuochotro_dongbhxhtunguyen += '<p style="float:left;padding-left:30px;">+ </p>';
                        }
                        if (sothanghocanngheogd2 > 0) {
                            phantramhotro = 25;
                            tienhotro = 0.22 * mucchuanngheogd2 * 0.25 * sothanghocanngheogd2;
                            tienbhxhtunguyenduochotrogd2 += tienhotro;
                            nhanuochotro_dongbhxhtunguyen += '<p style="padding-left:45px;">0.22 x ' + formatNumber(mucchuanngheogd2, '.', '.') + ' x ' + phantramhotro + '% x ' + sothanghocanngheogd2 + ' tháng = ' + formatNumber(tienhotro, '.', '.') + ' đồng</p>';
                            if (sothangdoituongkhacgd2 > 0)
                                nhanuochotro_dongbhxhtunguyen += '<p style="float:left;padding-left:30px;">+ </p>';
                        }
                        if (sothangdoituongkhacgd2 > 0) {
                            phantramhotro = 10;
                            tienhotro = 0.22 * mucchuanngheogd2 * 0.1 * sothangdoituongkhacgd2;
                            tienbhxhtunguyenduochotrogd2 += tienhotro;
                            nhanuochotro_dongbhxhtunguyen += '<p style="padding-left:45px;">0.22 x ' + formatNumber(mucchuanngheogd2, '.', '.') + ' x ' + phantramhotro + '% x ' + sothangdoituongkhacgd2 + ' tháng = ' + formatNumber(tienhotro, '.', '.') + ' đồng</p>';
                        }
                        if ((sothanghongheogd2 > 0 && sothanghocanngheogd2 > 0) || (sothanghongheogd2 > 0 && sothangdoituongkhacgd2 > 0) || (sothanghocanngheogd2 > 0 && sothangdoituongkhacgd2 > 0))
                            nhanuochotro_dongbhxhtunguyen += '<p style="padding-left:30px;"> = &nbsp;' + formatNumber(tienbhxhtunguyenduochotrogd2, '.', '.') + ' đồng</p>';
                        sotiennhan = sotiennhan - tienbhxhtunguyenduochotro;
                    }

                    if (tienbhxhtunguyenduochotro > 0 || tienbhxhtunguyenduochotrogd2) {
                        tongtienduochotro = tienbhxhtunguyenduochotro + tienbhxhtunguyenduochotrogd2;
                        if (tienbhxhtunguyenduochotro > 0 && tienbhxhtunguyenduochotrogd2 > 0) {
                            nhanuochotro_dongbhxhtunguyen += '<p>Tổng số tiền nhà nước hỗ trợ đóng BHXH = ' + formatNumber(tienbhxhtunguyenduochotro, '.', '.') + ' + ' + formatNumber(tienbhxhtunguyenduochotrogd2, '.', '.') + ' = ' + formatNumber(tienbhxhtunguyenduochotro + tienbhxhtunguyenduochotrogd2, '.', '.') + ' đồng</p>';
                        }
                        else if (tienbhxhtunguyenduochotro > 0) {
                            nhanuochotro_dongbhxhtunguyen += '<p>Tổng số tiền nhà nước hỗ trợ đóng BHXH = ' + formatNumber(tienbhxhtunguyenduochotro, '.', '.') + ' đồng</p>';
                        }
                        else if (tienbhxhtunguyenduochotrogd2 > 0) {
                            nhanuochotro_dongbhxhtunguyen += '<p>Tổng số tiền nhà nước hỗ trợ đóng BHXH = ' + formatNumber(tienbhxhtunguyenduochotrogd2, '.', '.') + ' đồng</p>';
                        }
                    }

                    mucluongbinhquan = Math.round(mucluongbinhquan / tongsothang);
                    let thangdu = 0;
                    if (sothangdongtruoc2014 > 0) {
                        if (sothangdongtruoc2014 < 12) {
                            thangdu = sothangdongtruoc2014;
                            sothangdongtruoc2014 = 0;
                        } else {
                            thangdu = sothangdongtruoc2014 % 12;
                            sothangdongtruoc2014 = parseInt(sothangdongtruoc2014 / 12);
                        }
                        sothangdongtu2014 += thangdu;
                    }
                    if (sothangdongtu2014 > 0) {
                        let t = (sothangdongtu2014) % 12,
                            r = 0,
                            m = 0;
                        if (t == 0) {
                            r = parseInt((sothangdongtu2014) / 12);
                        } else {
                            m = parseInt((sothangdongtu2014) / 12);
                        }
                        if (t >= 1 && t <= 6) {
                            r = m + 0.5;
                        } else if (t >= 7 && t <= 11) {
                            r = m + 1;
                        }
                        sothangdongtu2014 = r;
                    }
                    let k = 0, z = 0, thoigianthamgiabhxh = function (thang) {
                        let y = Math.floor(thang / 12), m = thang % 12;
                        return (y > 0 ? (y < 10 ? '0' : '') + y + ' năm' : '') + (m > 0 ? ' ' + m + ' tháng' : '');
                    };

                    if (tongsothang < 12) {
                        let loaimuchuongbhxh = 0;
                        this.htmlResultlet = '<p>1. Thời gian tham gia BHXH: ' + thoigianthamgiabhxh(tongsothang) + ' </p>';
                        muchuongbhxh = 0.22 * tongtiendongbhxh;
                        sotiennhan += muchuongbhxh;
                        if (sotiennhan > 2 * mucluongbinhquan) {
                            loaimuchuongbhxh = 1;
                        }
                        this.htmlResultlet += '<p>2. ' + text_tienluong + ' đóng BHXH của các giai đoạn tham gia BHXH như sau:</p>' + giaidoan_html;
                        this.htmlResultlet += tongtiendongbh;
                        this.htmlResultlet += '<p> Mức bình quân ' + text_tienluong.toLowerCase() + ' đóng BHXH = Tổng tiền / tổng số tháng = ' + formatNumber(mucluongbinhquan, '.', '.') + ' đồng</p>';
                        if (!$(this).hasClass('bhxhtunguyen') && !$(this).hasClass('bhxhbatbuocvatunguyen')) {
                            if (loaimuchuongbhxh == 1) {
                                this.htmlResultlet += '<p>3. Mức hưởng BHXH một lần = 22% x Tổng tiền lương đóng BHXH = 22% x ' + formatNumber(tongtiendongbhxh, '.', '.') + ' = ' + formatNumber(muchuongbhxh, '.', '.') + ' đồng</p>';
                            } else {
                                this.htmlResultlet += '<p>3. Mức hưởng BHXH một lần = 22% x Tổng tiền lương đóng BHXH = <b>22% x ' + formatNumber(tongtiendongbhxh, '.', '.') + ' = ' + formatNumber(muchuongbhxh, '.', '.') + ' đồng</b></p>';
                            }
                        }
                        else {
                            this.htmlResultlet += '<p>3. Mức hưởng BHXH một lần:</p>';
                            this.htmlResultlet += '<p>Mức hưởng BHXH 1 lần với toàn thời gian đóng = 22% x Tổng thu nhập đóng BHXH = 22% x ' + formatNumber(tongtiendongbhxh, '.', '.') + ' = ' + formatNumber(muchuongbhxh, '.', '.') + ' đồng</p>';
                        }

                        if (sothangdongtruoc2014 > 0) {
                            k = Math.round(mucluongbinhquan * 1.5 * sothangdongtruoc2014);
                        }
                        if (sothangdongtu2014 > 0) {
                            z = Math.round(mucluongbinhquan * 2 * sothangdongtu2014);
                        }
                        this.htmlResultlet += nhanuochotro_dongbhxhtunguyen;

                        if (sothangdongtruoc2014 > 0 && sothangdongtu2014 > 0) {
                            if ($(this).hasClass('bhxhtunguyen') || $(this).hasClass('bhxhbatbuocvatunguyen')) {
                                if (loaimuchuongbhxh == 1) {
                                    if (tienbhxhtunguyenduochotro > 0) {
                                        this.htmlResultlet += '<p>Tiền BHXH 1 lần = ' +
                                            formatNumber(muchuongbhxh, '.', '.') + (tienbhxhtunguyenduochotro > 0 ? (' - ' + formatNumber(tienbhxhtunguyenduochotro, '.', '.')) : '') +
                                            ' = ' +
                                            formatNumber(sotiennhan, '.', '.') +
                                            ' đồng</strong></p>';
                                    }
                                } else {
                                    this.htmlResultlet += '<p>Tiền BHXH 1 lần được nhận = <strong>' +
                                        formatNumber(muchuongbhxh, '.', '.') + (tienbhxhtunguyenduochotro > 0 ? (' - ' + formatNumber(tienbhxhtunguyenduochotro, '.', '.')) : '') +
                                        ' = ' +
                                        formatNumber(sotiennhan, '.', '.') +
                                        ' đồng</strong></p>';
                                }
                            }

                            if (loaimuchuongbhxh == 1) {
                                sotiennhan = 2 * mucluongbinhquan;
                                this.htmlResultlet += '<p>Do mức hưởng BHXH 1 lần tối đa của người đóng dưới 1 năm bằng 02 tháng mức bình quân tiền lương đóng BHXH nên:</p>';
                                this.htmlResultlet += '<p>Số tiền BHXH 1 lần được nhận = 2 x Mức bình quân tiền lương đóng BHXH = <b>2 x ' + formatNumber(mucluongbinhquan, '.', '.') + ' = ' + formatNumber(sotiennhan, '.', '.') + ' đồng</b></p>';
                            }
                            this.htmlResultlet += '<p><em><strong class="colorred">*Lưu ý:</strong> BHXH 1 lần đã được tính hệ số trượt giá</em></p>';
                        } else if (sotiennhan > 0) {
                            if ($(this).hasClass('bhxhtunguyen') || $(this).hasClass('bhxhbatbuocvatunguyen')) {
                                if (loaimuchuongbhxh == 1) {
                                    if (tongtienduochotro > 0) {
                                        this.htmlResultlet += '<p>Tiền BHXH 1 lần' +
                                            ' = ' +
                                            formatNumber(muchuongbhxh, '.', '.') + (tongtienduochotro > 0 ? (' - ' + formatNumber(tongtienduochotro, '.', '.')) : '') +
                                            (tongtienduochotro > 0 ? ' = ' + formatNumber(sotiennhan, '.', '.') : '') + ' đồng</p>';
                                    }
                                } else {
                                    this.htmlResultlet += '<p>Tiền BHXH 1 lần được nhận' +
                                        ' = <strong>' +
                                        formatNumber(muchuongbhxh, '.', '.') + (tongtienduochotro > 0 ? (' - ' + formatNumber(tongtienduochotro, '.', '.')) : '') +
                                        (tongtienduochotro > 0 ? ' = ' + formatNumber(sotiennhan, '.', '.') : '') + ' đồng</strong></p>';
                                }
                            }

                            if (loaimuchuongbhxh == 1) {
                                sotiennhan = 2 * mucluongbinhquan;
                                this.htmlResultlet += '<p>Do mức hưởng BHXH 1 lần tối đa của người đóng dưới 1 năm bằng 02 tháng mức bình quân tiền lương đóng BHXH nên:</p>';
                                this.htmlResultlet += '<p>Số tiền BHXH 1 lần được nhận = 2 x Mức bình quân tiền lương đóng BHXH = <b>2 x ' + formatNumber(mucluongbinhquan, '.', '.') + ' = ' + formatNumber(sotiennhan, '.', '.') + ' đồng</b></p>';
                            }
                            this.htmlResultlet += '<p><em><strong class="colorred">*Lưu ý:</strong> BHXH 1 lần đã được tính hệ số trượt giá</em></p>';
                        }
                    } else {
                        this.htmlResultlet = '<p>1. Thời gian tham gia BHXH: ' + thoigianthamgiabhxh(tongsothang) + ' </p>';
                        if (sothangdongtruoc2014_ > 0) {
                            this.htmlResultlet += '<p>- Thời gian tham gia BHXH trước năm 2014: ' + thoigianthamgiabhxh(sothangdongtruoc2014_) + '</p>';
                        }
                        if (sothangdongtu2014_ > 0) {
                            this.htmlResultlet += '<p>- Thời gian tham gia BHXH từ năm 2014 trở đi: ' + thoigianthamgiabhxh(sothangdongtu2014_) + '</p>';
                        }
                        this.htmlResultlet += '<p>2. Mức bình quân ' + text_tienluong.toLowerCase() + ' tháng đóng BHXH:</p>' +
                            '<p>2.1. ' + text_tienluong + ' đóng BHXH của các giai đoạn tham gia BHXH như sau:</p>' + giaidoan_html;
                        this.htmlResultlet += tongtiendongbh;
                        this.htmlResultlet += '<p>2.2. Mức bình quân ' + text_tienluong.toLowerCase() + ' đóng BHXH = Tổng tiền / tổng số tháng = ' + formatNumber(mucluongbinhquan, '.', '.') + ' đồng</p>';
                        this.htmlResultlet += '<p>3. Mức hưởng BHXH một lần:</p>';
                        if (sothangdongtruoc2014 > 0) {
                            k = Math.round(mucluongbinhquan * 1.5 * sothangdongtruoc2014);
                            sotiennhan += k;
                            this.htmlResultlet += '<p>Mức hưởng BHXH 1 lần đối với thời gian đóng BHXH trước 2014: </p><p style="padding-left: 45px;">' +
                                formatNumber(mucluongbinhquan, '.', '.') +
                                ' x ' +
                                sothangdongtruoc2014 +
                                ' năm x 1,5 = ' +
                                formatNumber(k, '.', '.') +
                                ' đồng</p>';
                        }
                        if (sothangdongtu2014 > 0) {
                            z = Math.round(mucluongbinhquan * 2 * sothangdongtu2014);
                            sotiennhan += z;
                            this.htmlResultlet +=
                                '<p>Mức hưởng BHXH 1 lần đối với thời gian đóng BHXH từ 2014 trở đi: </p>';
                            if (thangdu > 0) {
                                this.htmlResultlet += '<p><i>(Số tháng lẻ đóng trước năm 2014 được chuyển sang giai đoạn từ năm 2014 trở đi)</i></p>';
                            }
                            this.htmlResultlet += '<p style="padding-left: 45px;">' + formatNumber(mucluongbinhquan, '.', '.') +
                                ' x ' +
                                sothangdongtu2014 +
                                ' năm x 2 = ' +
                                formatNumber(z, '.', '.') +
                                ' đồng</p>';
                        }

                        this.htmlResultlet += nhanuochotro_dongbhxhtunguyen;
                        if (sothangdongtruoc2014 > 0 && sothangdongtu2014 > 0) {
                            this.htmlResultlet += '<p>Tổng tiền BHXH 1 lần được nhận = ' +
                                formatNumber(k, '.', '.') +
                                ' + ' +
                                formatNumber(z, '.', '.') + (tienbhxhtunguyenduochotro > 0 ? (' - ' + formatNumber(tienbhxhtunguyenduochotro, '.', '.')) : '') +
                                ' = <strong>' +
                                formatNumber(sotiennhan, '.', '.') +
                                ' đồng</strong></p><p><em><strong class="colorred">*Lưu ý:</strong> BHXH 1 lần đã được tính hệ số trượt giá</em></p>';
                        } else if (sotiennhan > 0) {
                            this.htmlResultlet += '<p>Tổng tiền BHXH 1 lần được nhận' +
                                ' = <strong>' +
                                formatNumber(z + k, '.', '.') + (tongtienduochotro > 0 ? (' - ' + formatNumber(tongtienduochotro, '.', '.')) : '') +
                                (tongtienduochotro > 0 ? ' = ' + formatNumber(sotiennhan, '.', '.') : '') + ' đồng</strong></p><p><em><strong class="colorred">*Lưu ý:</strong> BHXH 1 lần đã được tính hệ số trượt giá</em></p>';
                        }
                    }

                    if (sotiennhan > 0) {
                        $('.pm1p6zqaiw > span').text(formatNumber(sotiennhan, '.', '.') + ' đồng');
                        $('.pm1p6zqaiw').show();
                        $('.cz2sn5rawy').show();
                        if ($('.8gwrvbfe29 .lpwjzzzzne').length <= 0) {
                            $('.8gwrvbfe29 .thue-body').removeClass('fix-hight-thue-body');
                        }
                        $('.8gwrvbfe29 .thue-body').html(this.htmlResultlet).show();
                        $('.8gwrvbfe29 .thue-title').show();
                        $('.8gwrvbfe29 .lpwjzzzzne').show();
                        $('.icerror').hide();
                        //console.log('Tiền BHXH 1 lần được nhận: ' + formatNumber(sotiennhan, '.', '.'))
                    } else {
                        $('.pm1p6zqaiw > span').text('');
                        $('.pm1p6zqaiw').hide();
                        $('.cz2sn5rawy').hide();
                        $('.8gwrvbfe29 .thue-body').html('').hide();
                        $('.8gwrvbfe29 .thue-title').hide();
                        $('.8gwrvbfe29 .lpwjzzzzne').remove();
                    }
                    //console.log('Thời gian đóng trước 2014: ' + sothangdongtruoc2014 + ' năm')
                    //console.log('Thời gian đóng từ 2014: ' + sothangdongtu2014 + ' năm')
                }
                if ($('.881nvuiumu').length <= 0) {
                    showMessage({ messages: ['Quý khách vui lòng thêm giai đoạn nộp BHXH.'] })
                    $('.pm1p6zqaiw > span').text('');
                    $('.pm1p6zqaiw').hide();
                    $('.cz2sn5rawy').hide();
                    $('.8gwrvbfe29 .thue-body').html('').hide();
                    $('.8gwrvbfe29 .thue-title').hide();
                    $('.8gwrvbfe29 .lpwjzzzzne').remove();
                }
                if ($('.thue-body').length > 0) {
                    $('.hotline-info').show();
                }
            });
        $(document).on('click', '.lpwjzzzzne',
            function (e) {
                e.preventDefault();
                if ($('.8gwrvbfe29 .thue-body').hasClass('fix-hight-thue-body')) {
                    $('.8gwrvbfe29 .thue-body').removeClass('fix-hight-thue-body');
                    $(this).remove();
                }
            });
        $(document).on('keypress keyup blur',
            'input.1236il9bpn',
            function (event) {
                if (event.which != 46 && (event.which < 48 || event.which > 57)) {
                    event.preventDefault();
                }
                let self = $(this), value = self.val().replace(/^0+/g, '').replace(/\./g, '');
                self.val(formatNumber(value, '.', '.'));
            });
        $(document).on('click', '.icon-binlvn.del-row',
            function (e) {
                e.preventDefault();
                let target = $(this).attr('data-toggle-target'),
                    index = $(this).closest('.881nvuiumu').find('.number').html();
                if (isNaN(index)) index = 1;
                if (typeof target !== 'undefined' && !$(this).hasClass('first')) {
                    $(target).addClass('target-hidden');
                    $(target).toggleClass('target-expanded').css('display', '');
                }
                $('.wmvq3u48nn').attr('data-id', index);
            });
        $(document).on('click', '.btn-hidden-popup',
            function (e) {
                e.preventDefault();
                let element = document.getElementById("xoa-giaidoan-target");
                element.classList.remove("target-expanded");
            });

        $(document).on('click', '.wmvq3u48nn',
            function (e) {
                e.preventDefault();
                let element = document.getElementById("xoa-giaidoan-target");
                element.classList.remove("target-expanded");
                let self = $(this), id = self.attr('data-id'), index = self.closest('.881nvuiumu:last').find('.number').html();
                if (isNaN(index)) {
                    index = 1;
                } else index++;
                if (typeof id !== 'undefined') {
                    let itemDelete = $('.881nvuiumu .number').filter(function () {
                        return $(this).text().trim() == id.trim();
                    }).first();
                    if (itemDelete.length > 0) {
                        itemDelete.closest('.881nvuiumu').remove();
                    }
                    if ($('.881nvuiumu').length == 0) {
                        $('.pm1p6zqaiw > span').text('');
                        $('.pm1p6zqaiw').hide();
                        $('.cz2sn5rawy').hide();
                        $('.8gwrvbfe29 .thue-body').html('').hide();
                        $('.8gwrvbfe29 .thue-title').hide();
                        $('.8gwrvbfe29 .lpwjzzzzne').html('').hide();
                        return false;
                    }
                    $('.881nvuiumu').each(function (i, item) {
                        $(item).find('.number').text(index < 10 ? ('0' + index) : index);
                        index++;
                    });
                    if ($('.wmvq3u48nn').length > 0) {
                        $('.wmvq3u48nn').removeAttr('data-id');
                    }

                }
            });
        $(document).on('change', '.from-year, .to-year', function (e) {
            e.preventDefault();
            let self = $(this), parent = self.closest('.881nvuiumu'), y = 0;
            if (self.hasClass('from-year')) {
                y = parseInt($('select.to-year option:selected', parent).val());
            } else if (self.hasClass('to-year')) {
                y = parseInt($('select.from-year option:selected', parent).val());
            }
            if (parseInt(self.val()) >= 2018 || y >= 2018) {
                $('select.khkipy9982', parent).removeAttr('disabled');
            } else $('select.khkipy9982', parent).prop('disabled', true);
        });
    },
    methods: {
        rangeYear(start, end) {
            return Array.from({ length: end - start + 1 }, (_, i) => start + i).sort((a, b) => b - a);
        }
    },
};
</script>