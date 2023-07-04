$(document).ready(function(){
    // 마우스가 움직이는 값을 찾아라
    $(window).mousemove(function(e){
        let x = e.pageX;
        let y = e.pageY;

        $('.cursor').css({'left':x, 'top':y})
    })

    // cursor가 em안에 들어갔을 때 cursor의 border색이 바뀌어라
    $('.main p em').mouseenter(function(){
        $('cursor').addClass('style1')
    })
})
