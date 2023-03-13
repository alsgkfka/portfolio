$(document).ready(function(){

        new TypeIt("#hello",
        {
            strings: "안녕하세요 ! 민하람의 포트폴리오입니다.",
            speed: 80,
            waitUntilVisible: true,
        }).go();

        
    // let wd = $(window).width();
    // if(wd<1025){
    //     $('.btn1').click(function(){
    //         $('#main').css({opacity : '0'})
    //         $('#main').css({'z-index' : '-1'})
    //         $('#profile').css({opacity : '1'})
    //         $('#profile').css({'z-index' : '1'})
    //         $('.gage li').eq(0).stop().animate({height : '80px'} , 2600)
    //         $('.gage li').eq(1).stop().animate({height : '90px'} , 2600)
    //         $('.gage li').eq(2).stop().animate({height : '90px'} , 2600)
    //         $('.gage li').eq(3).stop().animate({height : '80px'} , 2600)
    //         $('.gage li').eq(4).stop().animate({height : '70px'} , 2600)
    //         $('.gage li').eq(5).stop().animate({height : '80px'} , 2600)
    //     })
    // }
    $('.btn1').mouseenter(function(){
        $('.mainrab').css({opacity : '0'})
        $('.rab1').css({opacity : '1'})
    })
    $('.btn1').mouseleave(function(){
        $('.mainrab').css({opacity : '1'})
        $('.rab1').css({opacity : '0'})
    })

    $('.btn2').mouseenter(function(){
        $('.mainrab').css({opacity : '0'})
        $('.rab2').css({opacity : '1'})
    })
    $('.btn2').mouseleave(function(){
        $('.mainrab').css({opacity : '1'})
        $('.rab2').css({opacity : '0'})
    })

    $('.btn3').mouseenter(function(){
        $('.mainrab').css({opacity : '0'})
        $('.rab3').css({opacity : '1'})
    })
    $('.btn3').mouseleave(function(){
        $('.mainrab').css({opacity : '1'})
        $('.rab3').css({opacity : '0'})
    })

    $('.btn4').mouseenter(function(){
        $('.mainrab').css({opacity : '0'})
        $('.rab4').css({opacity : '1'})
    })
    $('.btn4').mouseleave(function(){
        $('.mainrab').css({opacity : '1'})
        $('.rab4').css({opacity : '0'})
    })


    $('.btn1').click(function(){
        $('#main').css({opacity : '0'})
        $('#main').css({'z-index' : '-1'})
        $('#profile').css({opacity : '1'})
        $('#profile').css({'z-index' : '1'})
        $('.gage li').eq(0).stop().animate({height : '180px'} , 2600)
        $('.gage li').eq(1).stop().animate({height : '200px'} , 2600)
        $('.gage li').eq(2).stop().animate({height : '190px'} , 2600)
        $('.gage li').eq(3).stop().animate({height : '160px'} , 2600)
        $('.gage li').eq(4).stop().animate({height : '140px'} , 2600)
        $('.gage li').eq(5).stop().animate({height : '180px'} , 2600)
    })

    $('.btn2').click(function(){
        $('#main').css({opacity : '0'})
        $('#main').css({'z-index' : '-1'})
        $('#daecheon').css({opacity : '1'})
        $('#daecheon').css({'z-index' : '1'})
    })

    $('.btn3').click(function(){
        $('#main').css({opacity : '0'})
        $('#main').css({'z-index' : '-1'})
        $('#knotted').css({opacity : '1'})
        $('#knotted').css({'z-index' : '1'})
    })

    $('.btn4').click(function(){
        $('#main').css({opacity : '0'})
        $('#main').css({'z-index' : '-1'})
        $('#jennie').css({opacity : '1'})
        $('#jennie').css({'z-index' : '1'})
    })

    $('.home').click(function(){
        $('#main').css({opacity : '1'})
        $('#main').css({'z-index' : '1'})
        $('#profile').css({opacity : '0'})
        $('#profile').css({'z-index' : '-1'})
        $('#daecheon').css({opacity : '0'})
        $('#daecheon').css({'z-index' : '-1'})
        $('#knotted').css({opacity : '0'})
        $('#knotted').css({'z-index' : '-1'})
        $('#jennie').css({opacity : '0'})
        $('#jennie').css({'z-index' : '-1'})
    })


    $('.con').click(function(){
        $('.popup').css({display  : 'block'})
        $('.shade').css({display : 'block'})
    })

    $('.exit').click(function(){
        $('.popup').css({display  : 'none'})
        $('.shade').css({display : 'none'})
    })

    $('.shade').click(function(){
        $('.popup').css({display  : 'none'})
        $('.shade').css({display : 'none'})
    })
})