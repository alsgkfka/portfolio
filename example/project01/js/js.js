$(document).ready(function(){

    // Menu
    
    let w = $(window).width()
    
    if (w >= 1024){
    $('.gnbL li').mouseenter(function(){
            
            let i = $(this).index()

            $('.sub_menu>div').slideUp()
            $('.sub_menu>div').eq(i).stop().slideDown()
        });
        $('.sub_menu>div').mouseenter(function(){
            $(this).stop()
        $('header').mouseleave(function(){
            $('.sub_menu>div').slideUp()
        });

        })
        
        $('.gnbR li').mouseenter(function(){
        
            let i = $(this).index()

            $('.sub_menu>div').stop().slideUp()
            $('.sub_menu>div').eq(i+2).stop().slideDown()

        });

    }

    // 토글메뉴설정
    $('.menu_toggle_btn').click(function(){
        $('.sub_menu>div').slideToggle()
    })


    // 언어설정탭
    $('.util li').eq(1).click(function(){
        $('.lang').slideToggle()
    })
    $('.lang li').click(function(){
        let l = $(this).index();
        $('.lang span').removeClass('on')
        $('.lang span').eq(l).addClass('on')
    })


    // 테마여행 
    $('.themeL li').click(function(){
        let b = $(this).index();

        $('.themeL li').removeClass('on')
        $('.themeL li').eq(b).addClass('on')
        $('.themeR li img').css({display : 'none'})
        $('.themeR li img').eq(b).css({display : 'block'})
    })


    // 불꽃놀이 이미지 효과
    $(window).scroll(function(){

        let sc= $(this).scrollTop()

        if(sc > 1300){
            $('.fireL').stop().animate({'opacity' : 0.8},800)
            $('.fireR').stop().animate({'opacity' : 0.6},2000)
        }

    })


    // 축제이미지 슬라이드
    let aaa = 0

    $('.right').click(function(){
        if(aaa<4)
        aaa++

        let liWd = $('.imgList li').width()
        $('.imgList ul').css({'left':(-liWd+20)*aaa})

    })

    $('.left').click(function(){
        if(aaa>0)
        aaa--

        let liWd = $('.imgList li').width()
        $('.imgList ul').css({'left':(-liWd+20)*aaa})

    })




    // 체험활동 안내&예약
    let ww = $(window).width()
    
    if(ww >= 660){
    $('.actList li').click(function(){
        let c = $(this).index();

        $('.actList li').removeClass('on')
        $('.actList li').eq(c).addClass('on')

        
        $('.actBox>div').css({display : 'none'})
        $('.actBox>div').eq(c+1).css({display : 'flex'})
        
        $('.actList').css({display : 'block'})
    })
    }
    if(ww < 660){
        $('.actList li').click(function(){
        $('.actInfo1').css({display : 'none'})
        $('.actInfo2').css({display : 'none'})
        $('.actInfo3').css({display : 'none'})
        $('.actInfo4').css({display : 'none'})
        ('.actList').css({display : 'block'})
    })
    }

    // family site btn
    $('.family span').click(function(){
        $('.family li').slideToggle()
    }) 
    
})