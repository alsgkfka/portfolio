$(document).ready(function(){

    let ht = $(window).height();

    $('article').height(ht)

    $(window).resize(function(){
        let ht = $(window).height();

    $('article').height(ht)
    })
    
})