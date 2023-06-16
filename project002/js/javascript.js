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



})
