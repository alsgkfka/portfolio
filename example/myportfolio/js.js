$(document).ready(function(){

    $('.pf').mouseenter(function(){
        $('.character li').eq(0).css({display : 'none'})
        $('.character li').eq(1).css({display : 'block'})
        
    })
    $('.pf').mouseleave(function(){
        $('.character li').eq(0).css({display : 'block'})
        $('.character li').eq(1).css({display : 'none'})
        
    })

    $('.dc').mouseenter(function(){
        $('.character li').eq(0).css({display : 'none'})
        $('.character li').eq(2).css({display : 'block'})
        
    })
    $('.dc').mouseleave(function(){
        $('.character li').eq(0).css({display : 'block'})
        $('.character li').eq(2).css({display : 'none'})
        
    })

    $('.nt').mouseenter(function(){
        $('.character li').eq(0).css({display : 'none'})
        $('.character li').eq(3).css({display : 'block'})
        
    })
    $('.nt').mouseleave(function(){
        $('.character li').eq(0).css({display : 'block'})
        $('.character li').eq(3).css({display : 'none'})
        
    })

    $('.jn').mouseenter(function(){
        $('.character li').eq(0).css({display : 'none'})
        $('.character li').eq(4).css({display : 'block'})
        
    })
    $('.jn').mouseleave(function(){
        $('.character li').eq(0).css({display : 'block'})
        $('.character li').eq(4).css({display : 'none'})
        
    })
})