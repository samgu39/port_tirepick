window.onload = function(){
    // 페이지가 로딩이 완료된 후 스크립트를 실행
    var portBox = document.querySelector('.portfolio_popup');
    var portBtn = portBox.querySelector('.portfolio_popup_close a');
    
    portBtn.addEventListener("click", portNone);
    
    function portNone(e){
        e.preventDefault();
        
        portBox.style.display = 'none';
    };
    
    // 포트폴리오 팝업창 닫기
    
    var popup = document.querySelector('.popup');
    var closeBtn = popup.querySelector('.popup_close .close');
    var todayBtn = document.querySelector('.popup_close .today');
    var todayLabel = document.querySelector('.popup_close .today_none');
	
    closeBtn.addEventListener("click",popupNone);
    
    function popupNone(e){
        e.preventDefault();
        
        popup.style.display = 'none';
        dim.style.display = 'none';
        html.style.overflowY = "scroll";
    };
    
    // popup창 닫기를 누를 시 dim, popup창 해제 및 oveflow scroll로 바꿈
    
    var html = document.documentElement;
    var dim = document.querySelector('.dim');
    
    if (dim.className = 'dim'){
        html.style.overflowY = "hidden";
    }
    
    // dim 활성화시 body에 overflow hidden 적용
    
    todayBtn.addEventListener("click",today);
    
    function today() {
        var day = false;
        
        if (todayBtn.checked) {
            day = true;
        } else {
            day = false;
        }
        
        //console.log(day);
        
        if (day == true){
            todayLabel.classList.add('checked');
        } else{
            todayLabel.classList.remove('checked');
        };
    };
    
    // 체크박스 클릭시 checked 클래스 추가/삭제 스크립트
		
	if(GetCookie("close") == "yes"){ 
		popup.style.display = 'none';
        dim.style.display = 'none';
        html.style.overflowY = "scroll";
	}else{
        popup.style.display = 'block';
        dim.style.display = 'block';
        html.style.overflowY = "hidden";
	}

	function setCookie(name, value, expiredays){
		var days=expiredays;
		if(days){
			var date=new Date(); 
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires="; expires="+date.toGMTString();
		}else{
			var expires=""; 
		}
		document.cookie=name+"="+value+expires+"; path=/";
	}
		
	function GetCookie(name){
		var value=null, search=name+"=";
		if(document.cookie.length > 0){
			var offset=document.cookie.indexOf(search);
			if(offset != -1){
				offset+=search.length;
				var end=document.cookie.indexOf(";", offset);
				if(end == -1) end=document.cookie.length;
				value=unescape(document.cookie.substring(offset, end));
			}
		} return value;
	}
	
	// 오늘 하루 팝업창 열지 않기 체크시 팝업창 띄워주지 않기
    
    var hd = document.getElementById('head');
    var nav = document.querySelector('.gnb ul');
    var subNavBox = document.querySelector('.submenu_back');
    
    nav.addEventListener('mouseover',navSlide);
    
        function navSlide() {
          hd.style.background = '#fff';
          this.classList.add('on');
          subNavBox.classList.add('on');
        };
        
    nav.addEventListener('mouseleave',navSlideClose);
    
        function navSlideClose() {
          hd.style.background = 'none';
          this.classList.remove('on');
          subNavBox.classList.remove('on');
        };
    
    // 대메뉴 슬라이드 다운/업 스크립트
    
    $('.slide_box').bxSlider({
          controls: false,
          auto: true,
          autoControls: true,
          pager: true,
          autoControlsCombine: true,
      });
    
    // 슬라이드 메뉴 bx 슬라이드
    
    var slideMenu01 = document.querySelector('.slide_menu ul li .car');
    var slideMenu02 = document.querySelector('.slide_menu ul li .size');
    var slideMenu03 = document.querySelector('.slide_menu ul li .brand');
    var slideMenuBox = document.querySelector('.slide_menu_popup');
    var tabMenu01 = document.querySelector('.popup_top ul li .car');
    var tabMenu02 = document.querySelector('.popup_top ul li .size');
    var tabMenu03 = document.querySelector('.popup_top ul li .brand');
    var tabBox01 = document.querySelector('.popup_bottom .popup01');
    var tabBox02 = document.querySelector('.popup_bottom .popup02');
    var tabBox03 = document.querySelector('.popup_bottom .popup03');
    var dim = document.querySelector('.dim');
    var tabCloseBtn = document.querySelector('.slide_menu_popup_close a');
    
    
    slideMenu01.addEventListener("click", subpopup01);
    slideMenu02.addEventListener("click", subpopup02);
    slideMenu03.addEventListener("click", subpopup03);
    tabMenu01.addEventListener("click", subpopup01);
    tabMenu02.addEventListener("click", subpopup02);
    tabMenu03.addEventListener("click", subpopup03);
    tabCloseBtn.addEventListener("click", popupDown);
    
    function subpopup01(e) {
        e.preventDefault();
        
        slideMenuBox.style.display = 'block';
        tabMenu01.classList.add('active');
        tabMenu02.classList.remove('active');
        tabMenu03.classList.remove('active');
        tabBox01.style.display = 'block';
        tabBox02.style.display = 'none';
        tabBox03.style.display = 'none';
        dim.style.display = 'block';
        html.style.overflowY = "hidden";
    };
    
    function subpopup02(e) {
        e.preventDefault();
        
        slideMenuBox.style.display = 'block';
        tabMenu02.classList.add('active');
        tabMenu01.classList.remove('active');
        tabMenu03.classList.remove('active');
        tabBox02.style.display = 'block';
        tabBox01.style.display = 'none';
        tabBox03.style.display = 'none';
        dim.style.display = 'block';
        html.style.overflowY = "hidden";
    };
    
    function subpopup03(e) {
        e.preventDefault();
        
        slideMenuBox.style.display = 'block';
        tabMenu03.classList.add('active');
        tabMenu01.classList.remove('active');
        tabMenu02.classList.remove('active');
        tabBox03.style.display = 'block';
        tabBox01.style.display = 'none';
        tabBox02.style.display = 'none';
        dim.style.display = 'block';
        html.style.overflowY = "hidden";
    };
	
	// 탭메뉴 클릭시 해당 탭메뉴 화면으로 전환
	
	var searchBox = document.querySelector('.popup01 .search form .search_text');
	
	searchBox.addEventListener("focus", searchFocus);
	
	function searchFocus(){
		searchBox.placeholder = '';
	};
	
	// searchbox에 포커스 되었을 경우 placeholder 값 삭제
    
    function popupDown(e){
        e.preventDefault();
        
        slideMenuBox.style.display = 'none';
        dim.style.display = 'none';
        html.style.overflowY = "scroll";
		
		if(todayBtn.checked = true){setCookie("popupclose", "yes", 1)};
    };
    
    
    // 슬라이트 버튼 클릭시 팝업창 띄우기
    
    $('.pick_slide').bxSlider({
          pager: true,
          nextSelector: '.pronext',
          prevSelector: '.proprev',
          prevText: '',   
          nextText: '',
          onSlideAfter: function($slideElement){
              $('.pick').removeClass('on');
              $slideElement.addClass('active').siblings().removeClass('active');
          } //슬라이드 이동에 효과 추가
      });
    
    // 픽 메뉴 bx 슬라이드
    
    $('.store_slide').bxSlider({
          pager: true,
          randomStart: true,
      });
    
    // 장착점 메뉴 bx 슬라이드
    
    $('.review_slide').bxSlider({
          mode: 'fade',
          pager: true,
          pagerType: 'short',
          onSliderLoad: function(currentIndex){
              $('.review_slide > div').eq(currentIndex).addClass('active');
          }, //슬라이드가 로드되었을 때 효과 추가
          onSlideAfter: function($slideElement){
              $slideElement.addClass('active').siblings().removeClass('active');
          } //슬라이드 이동에 효과 추가
      });
    
    // 구매후기 리뷰 슬라이드
    
    var listBtn = document.querySelector('.sns_menu .list');
    var cartBtn = document.querySelector('.sns_menu .cart');
    var snsBox = document.querySelector('.sns_menu_box');
    var snsBoxClose = snsBox.querySelector('.sns_menu_box_close a');
    
    listBtn.addEventListener("click",list);
    cartBtn.addEventListener("click",cart);
    snsBoxClose.addEventListener("click",popupClose);
    
    function list(e) {
        e.preventDefault();
        
        snsBox.classList.add('on');
        snsTabMenuCart.classList.remove('active');
        snsTabMenuList.classList.add('active');
        MenuListBox.style.display = 'block';
        MenuCartBox.style.display = 'none';
    };
    
    function cart(e) {
        e.preventDefault();
        
        snsBox.classList.add('on');
        snsTabMenuList.classList.remove('active');
        snsTabMenuCart.classList.add('active');
        MenuCartBox.style.display = 'block';
        MenuListBox.style.display = 'none';
    };
    
    function popupClose(e) {
        e.preventDefault();
        
        snsBox.classList.remove('on');
    };
    
    // sns 메뉴바 슬라이드 스크립트
    
    var snsTabMenuList = document.querySelector('.tab_menu ul .list a');
    var snsTabMenuCart = document.querySelector('.tab_menu ul .cart a');
    var MenuListBox = document.querySelector('.sns_menu_box_tab_box .sns_menu_box_list');
    var MenuCartBox = document.querySelector('.sns_menu_box_tab_box .sns_menu_box_shopping');
    
    snsTabMenuList.addEventListener("click",tabList);
    snsTabMenuCart.addEventListener("click",tabCart);
    
    function tabList(e) {
        e.preventDefault();
        
        this.classList.add('active');
        snsTabMenuCart.classList.remove('active');
        MenuListBox.style.display = 'block';
        MenuCartBox.style.display = 'none';
    };
    
    function tabCart(e) {
        e.preventDefault();
        
        this.classList.add('active');
        snsTabMenuList.classList.remove('active');
        MenuCartBox.style.display = 'block';
        MenuListBox.style.display = 'none';
    };
        
    // sns 탭 박스 스크립트
	
	mCustomScrollBar();
	
	function mCustomScrollBar() {
		$(".slide_menu_popup .popup_bottom .popup01 .search_box").mCustomScrollbar({
					scrollButtons:{enable:true},
					theme:"light-thick",
					scrollbarPosition:"outside"
				});
	}
	
	// 스크롤바 플러그인
    
    var headTop = document.getElementById('head');
    var sectionBox01 = document.getElementById('skip01').offsetTop;
    var sectionBox02 = document.getElementById('skip02').offsetTop;
    var sectionBox03 = document.getElementById('skip03').offsetTop;
    var sectionBox04 = document.getElementById('skip04').offsetTop;
    var sectionBox05 = document.getElementById('skip05').offsetTop;
    var sectionBox06 = document.getElementById('skip06').offsetTop;
    var topBtn = document.querySelector('.quick_top');
    var footer = document.getElementById('footer').offsetTop - 800;
    
    topBtn.addEventListener("click",topSlide);
    
    function topSlide(e) {
        e.preventDefault();
        
        scrollTopMove();
    };
    
    function scrollTopMove(){
            
        var scrollMove = setInterval(function(){
            var scrollTop = window.pageYOffset;
            
            if(scrollTop != 0){
               window.scrollBy(0,-55);
               }else{
               clearInterval(scrollMove);
               }
        },15);
    };
    // top 버튼 클릭시 상단으로 이동
    
    window.addEventListener("scroll", scrollEvent);
    
    function scrollEvent(){
        var scrollTop = window.pageYOffset;
        
        if (scrollTop > 80) {
            headTop.classList.add('on');
            topBtn.classList.add('on');
        }else {
            headTop.classList.remove('on');
            topBtn.classList.remove('on');
        };
        
        // 상단 메뉴바 on 클래스 추가
        
        if (scrollTop > footer){
            document.querySelector('.quick').classList.add('top');
        }else {
            document.querySelector('.quick').classList.remove('top');
        }
        
        // 하단에 quick메뉴가 닿을 경우 top 클래스 추가
        
        if (scrollTop > sectionBox01 - 300) {
            document.getElementById('skip01').classList.add('on');
        };
        if (scrollTop > sectionBox02 - 300) {
            document.getElementById('skip02').classList.add('on');
        };
        if (scrollTop > sectionBox03 - 300) {
            document.getElementById('skip03').classList.add('on');
        };
        if (scrollTop > sectionBox04 - 300) {
            document.getElementById('skip04').classList.add('on');
        };
        if (scrollTop > sectionBox05 - 300) {
            document.getElementById('skip05').classList.add('on');
        };
        if (scrollTop > sectionBox06 - 300) {
            document.getElementById('skip06').classList.add('on');
        };
        // 스크롤값에 따른 효과 추가
    }
};