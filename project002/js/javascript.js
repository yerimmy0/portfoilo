$(document).ready(function(){


    let i = 0;
    let wd = $('.box2 ul li').width()
    console.log(wd)

    $('.left').click(function(){


    if(i<5)  i++;
    console.log(i)

    $('.box2 ul').stop().animate({'left':-wd*i},800)

    })
    
    $('.right').click(function(){

        let wd = $('.box2 ul li').width()
if(i>0)i--;
console.log(i)
$('.box2 ul').stop().animate({'left':-wd*i},800)
        
})

setTimeout(function(){
                        $('.hero_txt').fadeIn();
                        },700)
setTimeout(function(){
                        $('.box1-1').fadeIn();
                        },1600)
setTimeout(function(){
                        $('.box1-3').fadeIn();
                        },2400)
setTimeout(function(){
                        $('.box1-5').fadeIn();
                        },3200)
setTimeout(function(){
                        $('.box1-2').fadeIn();
                        },4000)
setTimeout(function(){
                        $('.box1-4').fadeIn();
                        },4800)

    /*img2를 클릭했을 때 img1을 보여줌*/
    $('.heartBox').click(function(){
        $('.heartBox img').eq(0).css({'opacity': 0})
        $('.heartBox img').eq(1).css({'opacity': 1})
    });

})
