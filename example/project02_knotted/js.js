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

    
    let b = 0;
    setInterval(function(){

        if(b<3)
        b++;
        if(b==3)
        b=0;

        let wd = $('.banner li').width()

        $('.banner ul').css({'left' : -wd*b})

    },3500)



})