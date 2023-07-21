$(document).ready(function(){
    let ht = $(window).height();
    $('section').height(ht);
    // console.log(ht);
    $(window).resize(function(){
                                let he = $(window).height();
                                $('section').height(ht)
                                });

    // nav li를 클릭할 때마다 scrollTop의 위치를 바꾸어라.
    $(window).scroll(function(){
                                let sc = $(window).scrollTop()
                                // $('h1').text(sc)
                                let ht = $(window).height();
                            

                            

                                // 반복문을 활용한 축약설정
                                for(var a = 0; a<5; a++){
                                                        if(sc>ht*a && sc<ht*a+1){
                                                                                $('nav li').removeClass('on')
                                                                                $('nav li').eq(a).addClass('on')
                                                                                }
                                                        }
                                })

    $('nav li').click(function(e){
                                e.preventDefault()
                                let i = $(this).index()
                                // console.log(i);
                                let ht = $(window).height();

                                $('html,body').stop().animate({scrollTop: ht*i},1400);
                                $('nav li').removeClass('on')
                                $(this).addClass('on')
                                });



    // scroll의 위치값을 확인하고 스크롤의 값이 section의 높이만큼 내려왔을 때부터 nav가 보여라.                       

    $(window).scroll(function(){
        let sc = $(this).scrollTop()
        let sht = $('article').height();
        // console.log(sc);
        // console.log(sht);

        if(sc>=sht*0 && sc<sht*1){
            $('nav').fadeOut(600);
            $('nav li').removeClass('on') 

        }

        // if(sc>=sht*0 && sc<sht*1){
        //                         $('nav').fadeIn(600);
        //                         $('nav li').removeClass('on')
        // }
        

        for(var a = 0; a<5; a++){
                                if(sc>=sht*(a+1) && sc<sht*(a+2)){
                                                                $('nav').fadeIn(600);
                                                                $('nav li').removeClass('on')
                                                                $('nav li') .eq(a+1).addClass('on')
                                                                }
            }

            if(sc>=sht*3){
                $('.pub').fadeIn(600);
                $('.pub').addClass('on')
            
}
});

$('article').mousewheel(function(event,delta){
    event.preventDefault()
    if(delta>0){
                let pre = $(this).prev().offset().top
                $('html,body').stop().animate({scrollTop:pre},1000,'swing')
                }
    else if(delta<0){
                    let next = $(this).next().offset().top
                    // console.log(next)
                    $('html,body').stop().animate({scrollTop:next},1000,'swing')
                    }
    })

    $('article').mousemove(function(e){
        let x = e.pageX;
        let y = e.pageY;
        // console.log(x,y)

        $(this).find('.boxA').css({'bottom': 20+(y/10), 'right': 20+(x/10)})
        })



        // b3_1을 클릭했을 때 해당 페이지로 이동해라.
        //     document.querySelector("#se").addEventListener("click", (e) => {
        //     document.querySelector("#forest").scrollIntoView({ behavior: "smooth" });
        // });

        // b3_2을 클릭했을 때 해당 페이지로 이동해라.
        // document.querySelector("#se2").addEventListener("click", (e) => {
        //     document.querySelector("#chun").scrollIntoView({ behavior: "smooth" });
        // });

        // b3_3을 클릭했을 때 해당 페이지로 이동해라.
        // document.querySelector("#se3").addEventListener("click", (e) => {
        //     document.querySelector("#rowo").scrollIntoView({ behavior: "smooth" });
        // });

        // b3_1을 클릭했을 때 해당 페이지로 이동해라.
        $('.b3_1').click(function(){
            $('.pop1').fadeIn()
        })
        $('.pop1 span').click(function(){
        $('.back').parent().fadeOut()
        })

        // b3_2을 클릭했을 때 해당 페이지로 이동해라.
        $('.b3_2').click(function(){
        $('.pop2').fadeIn()
        })
        $('.pop2 span').click(function(){
        $('.back2').parent().fadeOut()
        })

        // b3_3을 클릭했을 때 해당 페이지로 이동해라.
        $('.b3_3').click(function(){
        $('.pop3').fadeIn()
        })

$('.pop3 span').click(function(){

$('.back3').parent().fadeOut()
})


}) //자바스크립트 끝