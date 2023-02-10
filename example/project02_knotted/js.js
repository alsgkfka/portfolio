$(document).ready(function(){

    // toggle menu set
    $('.menu_toggle_btn').click(function(){
        $('.menu').slideToggle()
    })


    // product slide
    let a = 0

    $('.right').click(function(){
        if(a<3)
        a++;

        let liWd = $('.product li').width()
        $('.product ul').css({'left':(-liWd+20)*a})

    })

    $('.left').click(function(){
        if(a>0)
        a--;

        let liWd = $('.product li').width()
        $('.product ul').css({'left':(-liWd+20)*a})

    })

    // banner slide

    function timer(){
        $('.banner')
    }
    let slide = setInterval(timer,2500);

})