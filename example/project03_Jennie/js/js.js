$(document).ready(function(){

    $(window).resize(function(){
    
        let ht = $(window).height();
        $('section').height(ht);
    })

    $(window).scroll(function(){
        let sc = $(window).scrollTop();

            if(sc>=0 && sc<1000){
                $('nav li').removeClass('on')
                $('nav li').eq(0).addClass('on');
            }

            if(sc>=1000 && sc<2000){
                $('nav li').removeClass('on')
                $('nav li').eq(1).addClass('on');
            }

            if(sc>=1800){
                $('.brandList li').eq(0).stop().animate({opacity : 1} , 900)
                $('.brandList li').eq(1).stop().animate({opacity : 1} , 600)
                $('.brandList li').eq(2).stop().animate({opacity : 1} , 300)
                $('.brandList li').eq(3).stop().animate({opacity : 1} , 600)
                $('.brandList li').eq(4).stop().animate({opacity : 1} , 900)
            }

            if(sc>=2000 && sc<3000){
                $('nav li').removeClass('on')
                $('nav li').eq(2).addClass('on');
            }

            if(sc>=3000 && sc<4100){
                $('nav li').removeClass('on')
                $('nav li').eq(3).addClass('on');
            }

            if(sc>=4100 && sc<6000){
                $('nav li').removeClass('on')
                $('nav li').eq(4).addClass('on');
            }
        
    })

    $('.photoList li').click(function(){

        $('.photoList li').removeClass('on')
        $(this).addClass('on')

        })
    
    $('.photoList li').eq(0).click(function(){

        $('#chanel').css({display : 'block'})
        $('#calvin').css({display : 'none'})
        $('#gentle').css({display : 'none'})

    })

    $('.photoList li').eq(1).click(function(){

        $('#chanel').css({display : 'none'})
        $('#calvin').css({display : 'block'})
        $('#gentle').css({display : 'none'})

    })

    $('.photoList li').eq(2).click(function(){

        $('#chanel').css({display : 'none'})
        $('#calvin').css({display : 'none'})
        $('#gentle').css({display : 'block'})

    })

    $(window).scroll(function(){
        let st = $(window).scrollTop();
        // $('h1').text(st)

        if(st >= 2600){
            $('.fir img').stop().animate({opacity : 1}, 600)
        }

        if(st >= 3800){
            $('.sec img').eq(0).stop().animate({left : '8%'} , 1200)
            $('.sec img').eq(1).stop().animate({right : 0} , 1200)
            $('.sec').eq(0).stop().animate({opacity : 1} , 1000)
        }

        if(st >= 4400){
            $('.thd img').eq(0).stop().animate({bottom : 0} , 1200)
            $('.thd img').eq(2).stop().animate({bottom : 0} , 1200)
            $('.thd').eq(0).stop().animate({opacity : 1} , 1200)
        }

        if(st<2500){
            $('.fir img').stop().animate({opacity : 0}, 600)
            $('.sec img').eq(0).stop().animate({left : '-30%'} , 1000)
            $('.sec img').eq(1).stop().animate({right : '-40%'} , 1000)
            $('.sec').eq(0).stop().animate({opacity : 0} , 1000)
            $('.thd img').eq(0).stop().animate({bottom : '-10%'} , 1000)
            $('.thd img').eq(2).stop().animate({bottom : '-10%'} , 1000)
            $('.thd').eq(0).stop().animate({opacity : 0} , 600)

        }
    })

    let a = 0;
    $('.next').click(function(){

        
        if(a<2)
        a++;

        let wd = $('.calTrail li').width()
        $('.calTrail ul').css({'left':(-wd)*a});

    })

    $('.prev').click(function(){

        
        $('.calTrail ul').css({'left': 0 });

    })

    
})