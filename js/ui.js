$(function(){
    //language
    language();

	//nav
    nav();

	//search
    search();

	//quick
	quickscroll();

	//main
	mainTopVisual();
	$(window).on('resize',function(){
		mainTopVisual();
	});
});

/* ----- selectmenu ----- */
function language() {
	$(".language-btn").click(function() {
		$(".select").slideToggle(200);
	})
}

/* ----- nav ----- */
 function nav(){
    var _gnb = $('#gnb > ul');
    _gnb.find('li div').hide();

    _gnb.find('>li>a').on('mouseenter focus',function(){
        _gnb.find('li.on').removeClass('on').children('div').hide();
        $(this).next().slideDown(0).parent().addClass('on');
        $(".inner-conts").addClass("on");
    });

    _gnb.on('mouseleave',function(){
        $(this).find('>li.on').removeClass('on').children('div').slideUp(0);
        $(".inner-conts").removeClass("on");
    });
}

/* ----- search ----- */
function search() {
	$(".language-wrap .btn-search").click(function() {
		$(".search-wrap").slideDown(200);
	})
	$(".search-wrap .btn-close").click(function() {
		$(".search-wrap").slideUp(200);
	})
	$(".btn-more").click(function() {
		$(".tag-wrap").toggleClass("all");
	})
}

/* ----- quick ----- */
function quickscroll(){
	var currentPosition = parseInt($(".quick-wrap").css("top"));
	$(window).scroll(function() {
		var position = $(window).scrollTop();
		$(".quick-wrap").stop().animate({"top":position+currentPosition+"px"},1000);
	});
	$(".btn-curation").click(function() {
		$(".curation-cont").addClass("block");
	})
	$(".curation-cont .btn-close").click(function() {
		$(".curation-cont").removeClass("block");
	})
	$( '.btn-top' ).click( function() {
		$( 'html, body' ).animate( { scrollTop : 0 }, 200 );
		return false;
	});
 }

/* ----- Main ----- */
function mainTopVisual(){
	var viewSize = $('.visual-wrap').outerWidth(true);
	var visualView = $('.visualView > div');
	var visual = $('.visual > div');
	var boxSize = viewSize / visualView.length;
	var time = 900;
	var timeDelay = 100;
	var leftArry = [];

	visualView.each(function(){
		var idx = $(this).index();

		let leftSize = boxSize * idx;
		leftArry.push(leftSize);

		//이미지 박스 사이즈
		visualView.eq(idx).css({ 'left' : leftSize , 'width' : boxSize });
		visualView.eq(idx).find('.item-wrap-bg').css({ 'width' : viewSize , 'left' : - leftSize })

		//비주얼 클릭
		visual.eq( idx ).off('click.visual').on('click.visual', function(){
			$(this).addClass('show');
			$(this).siblings().removeClass('show');

			//visualView 영역
			var _visualBox = $('.visualView > div').eq( idx );

			_visualBox.addClass('show')
				.stop()
				.delay(timeDelay)
				.animate({ 'width':'100%', 'left': '0' }, time )
				.stop();

			_visualBox.find('.item-wrap-bg')
				.stop()
				.delay(timeDelay)
				.animate({ 'left': '0' }, time)
				.stop();

			//Back 버튼
			_visualBox.find('.btnBack').on('click',function(){
				_visualBox
					.stop()
					.delay(timeDelay)
					.animate({ 'width': boxSize , 'left': leftArry[ idx ]}, time )
					.removeClass('show')
					.stop();

				_visualBox.find('.item-wrap-bg')
					.stop()
					.delay(timeDelay)
					.animate({ 'left': - leftArry[idx] }, time )
					.stop();
			});

		});

	});



}

