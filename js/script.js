$(document).ready(function(){
    
    setTimeout(function(){
        
        $('html, body').animate({ scrollTop : 0 },500);
        contents.eq(0).addClass('active');
        
    }, 300);
    
    // 새로 고침시 자동으로 상단으로 올라가는 스크립트
    
    var skip = $('#skip');
    var skipNav = $('#skip ul li')
    
    skip.focusin(function(){
        $(this).addClass('on');
    });
    
    skipNav.focusin(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });
    skipNav.focusout(function(){
        $(this).removeClass('on');
    });
    
    // tab 버튼 클릭 시 skip 메뉴 활성화
    
    var popupPortClose = $('.portfolio_popup .portfolio_popup_close a');
    var popupPort = $('.portfolio_popup');
    
    popupPortClose.click(function(e){
        e.preventDefault();
        
        popupPort.hide(800);
    });
    
    // 포트폴리오 홈페이지 명시 팝업창 닫기 스크립트
    
    var nav = $('#container #header .nav ul li');
    var navBox = $('#container #header .nav .bar');
    var contents = $('#container #contents > section');
    
    nav.mouseover(function(){
        var navck = $(this);
        
        navBox.css({ left : $(this).position().left, width : $(this).width() });
        navck.addClass('active').siblings().removeClass('active');
        
    });
    
    // 네비 박스 따라다니는 스크립트
    
    nav.click(function(e){
        e.preventDefault();
        
        var navClick = $(this);
        var navIdx = navClick.index();
        //console.log(navidx);
        var section = contents.eq(navIdx);
        var offset = section.offset().top;
        //console.log(offset);
        
        $('html, body').animate({ scrollTop : offset },500);
    });
    
    // 메뉴 클릭 시 해당 div 위치로 이동하는 스크립트
    
    $(window).scroll(function(){
        var winScroll = $(this).scrollTop();
        var ftNav = $('#container #footer .box ul li');
        
        /*
        if(winScroll >= contents.eq(0).offset().top){
            contents.removeClass('active');
            contents.eq(0).addClass('active');
            ftNav.removeClass('active');
            ftNav.eq(0).addClass('active');
            nav.removeClass('active');
            nav.eq(0).addClass('active');
            navBox.css({ left : nav.eq(0).position().left, width : nav.eq(0).width() });
            n = 0;
        };
        if(winScroll >= contents.eq(1).offset().top - 300){
            contents.eq(1).addClass('active');
            ftNav.removeClass('active');
            ftNav.eq(1).addClass('active');
            nav.removeClass('active');
            nav.eq(1).addClass('active');
            navBox.css({ left : nav.eq(1).position().left, width : nav.eq(1).width() });
            n = 1;
        };
        if(winScroll >= contents.eq(2).offset().top - 300){
            contents.eq(2).addClass('active');
            ftNav.removeClass('active');
            ftNav.eq(2).addClass('active');
            nav.removeClass('active');
            nav.eq(2).addClass('active');
            navBox.css({ left : nav.eq(2).position().left, width : nav.eq(2).width() });
            n = 2;
        };
        if(winScroll >= contents.eq(3).offset().top - 300){
            contents.eq(3).addClass('active');
            ftNav.removeClass('active');
            ftNav.eq(3).addClass('active');
            nav.removeClass('active');
            nav.eq(3).addClass('active');
            navBox.css({ left : nav.eq(3).position().left, width : nav.eq(3).width() });
            n = 3;
        };
        if(winScroll >= contents.eq(4).offset().top - 300){
            contents.eq(4).addClass('active');
            ftNav.removeClass('active');
            ftNav.eq(4).addClass('active');
            nav.removeClass('active');
            nav.eq(4).addClass('active');
            navBox.css({ left : nav.eq(4).position().left, width : nav.eq(4).width() });
            n = 4;
        };
        if(winScroll >= contents.eq(5).offset().top - 300){
            contents.eq(5).addClass('active');
            ftNav.removeClass('active');
            ftNav.eq(5).addClass('active');
            nav.removeClass('active');
            nav.eq(5).addClass('active');
            navBox.css({ left : nav.eq(5).position().left, width : nav.eq(5).width() });
            n = 5;
        };
        if(winScroll >= contents.eq(6).offset().top - 300){
            contents.eq(6).addClass('active');
            ftNav.removeClass('active');
            ftNav.eq(6).addClass('active');
            nav.removeClass('active');
            nav.eq(6).addClass('active');
            navBox.css({ left : nav.eq(6).position().left, width : nav.eq(6).width() });
            n = 6;
        };
        */
        
        for(var i = 0; i < contents.length; i++){
          if(winScroll >= contents.eq(i).offset().top){
              contents.removeClass('active');
              contents.eq(i).addClass('active');
              ftNav.removeClass('active');
              ftNav.eq(i).addClass('active');
              nav.removeClass('active');
              nav.eq(i).addClass('active');
              navBox.css({ left : nav.eq(i).position().left, width : nav.eq(i).width() });
              n = i;
          }
            
        };
        
    });
    
    // div가 화면에 닿으면 active 클래스 추가, 상단 및 우측 메뉴 변동
    
    var n = 0;
    var h;
    var box = 0;
    
    $(window).mousewheel(function(e, delta){
        var h = $(window).height();
        
        if ($('html, body').is(":animated")){
            return;
        }
        
        if(delta > 0){
            if(n > 0){
              n--;
            }
        }else{
            if(n < 6){
              n++;  
            }
        }
        //console.log(n);
        box= n * h;
        
        $('html, body').animate({ scrollTop : box },800);
    });
    
    // 마우스 휠 패럴랙스 효과 스크립트
    
    if($(window).width() > 768 ){
        $(window).resize(function(){
        var h = $(window).height();
        
        //console.log(winHeight);
        $('#container #contents > section').css({ height : h });
        
        });

        $(window).trigger('resize');
    }else if($(window).width() < 768){
        $('#contents > section').css("height","100%");
    }
    
    // 화면의 사이즈가 변경되었을 경우 height 값을 맞춰주는 스크립트
    
    $(window).scroll(function(){
        var winScroll = $(this).scrollTop();
        
        if(winScroll > 80) {
            $('#container #header').addClass('on');
        }else{
            $('#container #header').removeClass('on');
        };
    });
    
    // 모니터 스크롤이 80을 지날 경우 메뉴에 on 클래스 추가
    
    $('.m_nav').click(function(){
        $(this).toggleClass('on')
        $('.nav').slideToggle();
    });
    
    // 모바일 버전에서 메뉴버튼을 클릭시 nav가 내려오는 스크립트
    
    var swiper1 = new Swiper('.swiper-container01', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
    
    // swiper 슬라이드 코드 01
    
    var swiper2 = new Swiper('.swiper-container02', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
    // swiper 슬라이드 코드 02
    
    $('.cont04_left').mouseover(function(){
        $('.cont04_left img').attr("src","./img/box04_img01_2.png");
    });
    
    $('.cont04_left').mouseleave(function(){
        $('.cont04_left img').attr("src","./img/box04_img01_1.png");
    });
    
    // 이미지에 마우스가 닿을 경우 이미지 경로 변경
    
    var cont06 = $('#cont06 .cont06_topmenu div > div');
    
    cont06.click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    // 감성캠핑샵 / 키친라이프샵 중 하나를 선택할 경우 해당 div에 active 클래스 추가
    
    var ftNav = $('#container #footer .box ul li');
    
    ftNav.click(function(e){
        e.preventDefault();
        
        var navClick = $(this);
        var navIdx = navClick.index();
        //console.log(navidx);
        var section = contents.eq(navIdx);
        var offset = section.offset().top;
        //console.log(offset);
        
        $('html, body').animate({ scrollTop : offset },500);
        navClick.addClass('active').siblings().removeClass('active');
    });
    
    // 우측 메뉴 이동 스크립트
    
});