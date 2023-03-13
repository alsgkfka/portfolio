$(document).ready(function(){
    
    // toggle menu set
    $('#hamburger').click(function(){
        $('.menu').slideToggle()
        $(this).toggleClass("is-active");
    })


    // product slide
    let a = 0

    $('.right').click(function(){
        if(a<3)
        a++;

        let liWd = $('.product li').width()
        $('.product ul').css({'left':(-liWd+10)*a})

    })

    $('.left').click(function(){
        if(a>0)
        a--;

        let liWd = $('.product li').width()
        $('.product ul').css({'left':(-liWd+10)*a})

    })

    
    // banner slide

    
    // let b = 0;
    // setInterval(function(){

    //     if(b<3)
    //     b++;
    //     if(b==3)
    //     b=0;

    //     let wd = $('.banner li').width()

    //     $('.banner ul').css({ left : -wd*b })

    // },3800)

    // cart
    let i = 1;

        $('.cart').click(function(){
        
            
            $('.util p').text(i++)

        })

        $('.util li').click(function(){

            alert('로그인 후 사용하세요.')
        })

        
        $('.num li').eq(0).click(function(){
            $('.num li').eq(1).text(i--)
        })

        $('.num li').eq(2).click(function(){
            $('.num li').eq(1).text(i++)
        })


        $('.buyBtn').click(function(){
        
            
            $('.util p').text(i-1)

        })


        $('.small li').click(function(){
            $('.small li').removeClass('on')
            $(this).addClass('on')
        })



        $('#qna i').click(function(){

            alert('내용을 입력하세요!')
        })

        
        // let b = 0;
        // b++
        //     $('.small li').eq(b).click(function(){
        //         $('.big li').css({opacity : 0})
        //         $('.big li').css({'z-index' : -1})
        //         $('.big li').eq(b).css({opacity : 1})
        //         $('.big li').eq(b).css({'z-index' : 1})
        //     })
        
        
        $('.small li').eq(0).click(function(){
            $('.big li').eq(0).css({opacity : 1})
            $('.big li').eq(0).css({'z-index' : 1})
            $('.big li').eq(1).css({opacity : 0})
            $('.big li').eq(1).css({'z-index' : -1})
            $('.big li').eq(2).css({opacity : 0})
            $('.big li').eq(2).css({'z-index' : -1})
            $('.big li').eq(3).css({opacity : 0})
            $('.big li').eq(3).css({'z-index' : -1})
            $('.big li').eq(4).css({opacity : 0})
            $('.big li').eq(4).css({'z-index' : -1})
        })

        $('.small li').eq(1).click(function(){
            $('.big li').eq(1).css({opacity : 1})
            $('.big li').eq(1).css({'z-index' : 1})
            $('.big li').eq(0).css({opacity : 0})
            $('.big li').eq(0).css({'z-index' : -1})
            $('.big li').eq(2).css({opacity : 0})
            $('.big li').eq(2).css({'z-index' : -1})
            $('.big li').eq(3).css({opacity : 0})
            $('.big li').eq(3).css({'z-index' : -1})
            $('.big li').eq(4).css({opacity : 0})
            $('.big li').eq(4).css({'z-index' : -1})
        })

        $('.small li').eq(2).click(function(){
            $('.big li').eq(2).css({opacity : 1})
            $('.big li').eq(2).css({'z-index' : 1})
            $('.big li').eq(1).css({opacity : 0})
            $('.big li').eq(1).css({'z-index' : -1})
            $('.big li').eq(0).css({opacity : 0})
            $('.big li').eq(0).css({'z-index' : -1})
            $('.big li').eq(3).css({opacity : 0})
            $('.big li').eq(3).css({'z-index' : -1})
            $('.big li').eq(4).css({opacity : 0})
            $('.big li').eq(4).css({'z-index' : -1})
        })

        $('.small li').eq(3).click(function(){
            $('.big li').eq(3).css({opacity : 1})
            $('.big li').eq(3).css({'z-index' : 1})
            $('.big li').eq(1).css({opacity : 0})
            $('.big li').eq(1).css({'z-index' : -1})
            $('.big li').eq(2).css({opacity : 0})
            $('.big li').eq(2).css({'z-index' : -1})
            $('.big li').eq(0).css({opacity : 0})
            $('.big li').eq(0).css({'z-index' : -1})
            $('.big li').eq(4).css({opacity : 0})
            $('.big li').eq(4).css({'z-index' : -1})
        })

        $('.small li').eq(4).click(function(){
            $('.big li').eq(4).css({opacity : 1})
            $('.big li').eq(4).css({'z-index' : 1})
            $('.big li').eq(1).css({opacity : 0})
            $('.big li').eq(1).css({'z-index' : -1})
            $('.big li').eq(2).css({opacity : 0})
            $('.big li').eq(2).css({'z-index' : -1})
            $('.big li').eq(3).css({opacity : 0})
            $('.big li').eq(3).css({'z-index' : -1})
            $('.big li').eq(0).css({opacity : 0})
            $('.big li').eq(0).css({'z-index' : -1})
        })



})