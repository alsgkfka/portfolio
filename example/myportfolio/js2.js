$(document).ready(function(){
    

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
        $('#profile').css({'z-index' : '10'})
    })

    $('.btn2').click(function(){
        $('#main').css({opacity : '0'})
        $('#main').css({'z-index' : '-1'})
        $('#daecheon').css({opacity : '1'})
        $('#daecheon').css({'z-index' : '10'})
    })

    $('.btn3').click(function(){
        $('#main').css({opacity : '0'})
        $('#main').css({'z-index' : '-1'})
        $('#knotted').css({opacity : '1'})
        $('#knotted').css({'z-index' : '10'})
    })

    $('.btn4').click(function(){
        $('#main').css({opacity : '0'})
        $('#main').css({'z-index' : '-1'})
        $('#jennie').css({opacity : '1'})
        $('#jennie').css({'z-index' : '10'})
    })

    $('.home').click(function(){
        $('#main').css({opacity : '1'})
        $('#main').css({'z-index' : '10'})
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
    })

    $('.exit').click(function(){
        $('.popup').css({display  : 'none'})
    })

})