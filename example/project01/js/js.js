$(document).ready(function(){

    $('.gnbL li').mouseenter(function(){
        
        let i = $(this).index()
        console.log(i)
        $('.sub_menu>div').slideUp()
        $('.sub'+(i+1)).slideDown()

    });
    $('header').mouseleave(function(){
        $('.sub_menu>div').slideUp()

    });

    $('.gnbR li').mouseenter(function(){
        
        let i = $(this).index()
        console.log(i)
        $('.sub_menu>div').slideUp()
        $('.sub'+(i+3)).slideDown()

    });
    $('header').mouseleave(function(){
        $('.sub_menu>div').slideUp()

    });

})