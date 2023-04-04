// -----------> jQuery
(function($) {
    "use strict";

    // -----------------------
    // This will create a sticky js
    // header area here
    // -----------------------
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 300) {
            $(".header").removeClass("sticky");
        } else {
            $(".header").addClass("sticky");
        }
    });


    // -----------------------
    // preloader area here js
    // ------------------------ 
    $(window).on('load', function() {
        $('.preloder').fadeOut('slow', function() { $(this).remove(); });
    });


    // body overlay 'click' function 
    // $('.body_overlay').on('click', function(){
    //     $('.body_overlay').removeClass('active');
    //     $('.voting_rules').removeClass('active');
    // });

    // hero area here 
    // hero button 'click' function
    // $('.hero_button .main_button').on('click', function(){
    //     $('.body_overlay').toggleClass('active');
    //     $('.voting_rules').addClass('active');
    // });

    // voting page area here
    // program container area here 
    // $('.label_content_input').on('click', function(){
    //     // arrow angle up and down icon
    //     $(this).find('.icon i').toggleClass('fa-angle-down');
    //     $(this).find('.icon i').toggleClass('fa-angle-up');
    // });

    // label wrapper area here
    // $('.label_content_input').on('click', function(){
    //     $(this).siblings().toggleClass('show');
    // });
    // $(".label_popup_option li").on('click', function(){
    //     var text = $(this).text();
    //     $(this).closest('.label_content_box').find('.label_content_input .label_popup span').text(text);
    //     $(".label_popup_option").removeClass("show");
        
    //     // arrow angle up and down icon
    //     $(this).closest('.label_content_box').find('.label_content_input span.icon i').removeClass("fa-angle-up");
    //     $(this).closest('.label_content_box').find('.label_content_input span.icon i').addClass("fa-angle-down");
    // });

    // mouseleave 
    // $('.label_content_box').on('mouseleave', function() {
    //     $(".label_popup_option").removeClass("show");
    //     // arrow angle up and down icon
    //     $('.label_content_input span.icon i').removeClass("fa-angle-up");
    //     $('.label_content_input span.icon i').addClass("fa-angle-down");
    // });

    // label wrapper date area here 
    // $('.label_content_date').on('click', function(){
    //     // arrow angle up and down icon
    //     $(this).find('.icon i').toggleClass('fa-angle-down');
    //     $(this).find('.icon i').toggleClass('fa-angle-up');

    // });


    // -----------------------
    // datepicker area here js
    // ------------------------
    // header bottom area here
    // start date & end date 
    // $('[data-toggle="datepicker"]').datepicker(); 






    /*---------------------
    Header area here
    --------------------- */
    // search box area here 
    // $(".headerBar").click(function(){
    //     $(".headerNav").toggleClass("show");
    // });
    // $(".closingBar").click(function(){
    //     $(".headerNav").removeClass("show");
    // });


    // $(".search_box_dropdown ul li").click(function(){
    //     var text = $(this).text();
    //     $(".search_box_option").text(text);
    //     $(".search_box_dropdown ul").removeClass("active");
    // });

    
    // $(".list_head_wrapper").on('click', function(){
    //     $(this).closest('.aabbro_filter_lists2 > li').find('ul.list_item_wrapper').toggleClass("active");
    // });

    // $('.menu_item_section .menu_link').on('click', function(){
    //     $('.sub_menu').toggleClass('active');
    // });


    // $(".header_right .profile").on('click', function(e) {
    //     var container = $(".header_right .profile_list");
    //     if (!$(e.target).closest(container).length) {
    //         container.hide();
    //     }
    // });
    
    // $(".dropdown").click(function(e){
    //     e.stopPropagation();
    // });
    
    // $(document).click(function(){
    //     $(".dropdown").hide();
    // });



    // header bottom work order area here
    // $('.header_bottom_location_box').on('click', function(){
    //     $('.header_bottom_location_box .location_popUP').toggleClass('show');
    // });

    // location box area here 
    // $('.location_popUP_list li').on('click', function(){
    //     $(this).addClass('active');
    //     $(this).siblings().removeClass('active');
    // });
    
    // $('.header_bottom_location_box .location button').on('click', function(){
    //     // arrow angle up and down icon
    //     $(this).find('i').toggleClass('fa-angle-down');
    //     $(this).find('i').toggleClass('fa-angle-up');
    // });

    // $('.location_popUP_list li').on('click', function(){
    //     $(this).addClass('active');
    //     $(this).siblings().removeClass('active');
    // });
    

    // work order filter area here
    // work order filter items area here
    // $('.wOrder_flter .wOrder_filter_item .link').on('click', function(){
    //     $(this).closest('.wOrder_filter_item').find('.content_item').toggleClass("active");
    //     // arrow angle up and down icon
    //     $(this).find('i').toggleClass('fa-angle-down');
    //     $(this).find('i').toggleClass('fa-angle-up');
    // });

    // work order list nav area here 
    // $('.work_order_list_nav li').on('click', function(){
    //     $(this).addClass('active');
    //     $(this).siblings().removeClass('active');
    // });

    // wOrder_filter_content area here
    // $('.wOrder_filter_content_ul > li').on('click', function(){
    //     $(this).addClass('active');
    //     $(this).siblings().removeClass('active');
    // });

    // wOrder_filter_item area here 
    // $('.wOrder_filter_item').on('click', function(){
    //     $(this).toggleClass('active');
    //     $(this).siblings().removeClass('active');
    // });



    // $(".wOrder_filter_items .wOrder_filter_item .link").on('click', function(){
    //     // $(this).siblings().toggleClass('active');
    //     // $('.wOrder_filter_item .content_item').removeClass('active');

    //     // $(this).closest('.wOrder_filter_item').find('.content_item').toggleClass("active");

    //     // $(this).closest('.wOrder_filter_item').find('.content_item').siblings().toggleClass("active");
    // });


    // -----------------------
    //  top up button area js
    // ------------------------ 
    // $(window).scroll(function(){
    //     if($(this).scrollTop() > 80){
    //         $(".topUp-btn").fadeIn(1000);
    //     } else{
    //         $(".topUp-btn").fadeOut(1000);
    //     }
    // });
    // $(".topUp-btn").click(function(){
    //     $(" html,body").animate({scrollTop : 0}, 1000);
    // });

    
    // -----------------------
    // This will create a sticky js
    // -----------------------
    // $(window).on('scroll', function () {
    //     var scroll = $(window).scrollTop();
    //     if (scroll < 300) {
    //         $(".header-area").removeClass("sticky");
    //     } else {
    //         $(".header-area").addClass("sticky");
    //     }
    // });


    // -----------------------
    // This will create a owlCarousel
    // logo carousel area here js
    // -----------------------
    // $('.hero-carousel').owlCarousel({
    //     loop: true,
    //     items: 4,
    //     margin: 48,
    //     nav: false,
    //     dots: false,
    //     autoplay: true,
    //     smartSpeed: 2000,
    //     autoplayTimeout: 4000,
    //     responsive: {
    //         0: {
    //             items: 3,
    //             margin: 40
    //         },
    //         500: {
    //             items: 4,
    //             margin: 20
    //         },
    //         992: {
    //             items: 4,
    //             margin: 48
    //         }
    //     }
    // });



    // -----------------------
    // This will create a counter up js
    // -----------------------
    // $('.totalfunfact span').counterUp({
    //     delay: 10,
    //     time: 1000
    // });


    // -----------------------
    // This will create a slick slider
    // clients slider area here js
    // -----------------------
    // $('.clients-slider').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     prevArrow: '<span class="priv_arrow"><i class="fas fa-chevron-left"></i></span>',
    //     nextArrow: '<span class="next_arrow"><i class="fas fa-chevron-right"></i></i></span>',
    //     responsive: [
    //       {
    //         breakpoint: 900,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 1,
    //         }
    //       },
    //       {
    //         breakpoint: 576,
    //         settings: {
    //           slidesToShow: 1
    //         }
    //       }
    //     ]
    // });


    // -----------------------
    // This will create a slick slider
    // blog slider area here js
    // -----------------------
    // $('.blog-slider').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //     prevArrow: '<span class="priv_arrow"><i class="fas fa-chevron-left"></i></span>',
    //     nextArrow: '<span class="next_arrow"><i class="fas fa-chevron-right"></i></i></span>',
    //     responsive: [
    //       {
    //         breakpoint: 900,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 1,
    //         }
    //       },
    //       {
    //         breakpoint: 576,
    //         settings: {
    //           slidesToShow: 1
    //         }
    //       }
    //     ]
    // });


    
    // -----------------------
    // aos animate js
    // -----------------------
    // AOS.init({
    //   duration: 1000,
    //   once: true
    // });
    


    



}(jQuery));

// -----------> javaScript
// -----------------------
// header mobile menu area here
// ------------------------ 
// const menuBar = document.querySelector(".mobile-menu-bar");
// const sideBarMenu = document.querySelector(".off-canvas-menu");
// const closeMenu = document.querySelector(".close-menu");
// const bodyOverlay = document.querySelector(".body-overlay");
// menuBar.onclick = ()=>{
//     sideBarMenu.classList.add("active");
//     bodyOverlay.classList.add("active");
// };
// closeMenu.onclick = ()=>{
//     sideBarMenu.classList.remove("active");
//     bodyOverlay.classList.remove("active");
// };
// bodyOverlay.onclick = ()=>{
//     sideBarMenu.classList.remove("active");
//     bodyOverlay.classList.remove("active");
// };
// --------------------------
// -JS area ends here
// --------------------------