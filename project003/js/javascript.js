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
                                                        console.log(i);
                                                        let ht = $(window).height();

                                                        $('html,body').stop().animate({scrollTop: ht*i},1400);
                                                        $('nav li').removeClass('on')
                                                        $(this).addClass('on')
                                                        });

                            // section위에서 마우스를 올릴 때, 내릴 때 이벤트가 발생한다.
                            $('article').mousewheel(function(event,delta){
                                                                        if(delta>0){
                                                                                    let pre = $(this).prev().offset().top
                                                                                    $('html,body').stop().animate({scrollTop:pre},1000,'swing')
                                                                                    }
                                                                        else if(delta<0){
                                                                                        let next = $(this).next().offset().top
                                                                                        console.log(next)
                                                                                        $('html,body').stop().animate({scrollTop:next},1000,'swing')
                                                                                        }
                                                                        })

                            $('article').mousemove(function(e){
                                                            let x = e.pageX;
                                                            let y = e.pageY;
                                                            console.log(x,y)

                                                            $(this).find('.boxA').css({'bottom': 20+(y/10), 'right': 20+(x/10)})
                                                            })




                            // actor사진 옆으로 움직이기
                            let j = 0;
                            let wd = $('.actor ul li').width()
                            console.log(wd)

                            $('.ri2').click(function(){
                                if(j<7) j++;
                                console.log(j)

                            $('.actor ul').stop().animate({'right': -(wd+20)*j},800)
                            })

                            // daily사진 옆으로 움직이기
                            let d = 0;
                            let ad = $('.daily ul li').width()
                            console.log(ad)

                            $('.ri').click(function(){
                                if(d<7) d++;
                                console.log(d)

                            $('.daily ul').stop().animate({'right': -(ad+20)*d},800)
                            })


                            // singer사진 아래으로 움직이기
                            let k = 0;
                            let ed = $('.singer ul li').width()
                            console.log(ed)

                            $('.do').click(function(){
                                if(k<4) k++;
                                console.log(k)

                            $('.singer ul').stop().animate({'top': -(ed-220)*k},800)
                            })


                            // scroll의 위치값을 확인하고 스크롤의 값이 section의 높이만큼 내려왔을 때부터 nav가 보여라.                       


                            $(window).scroll(function(){
                                                        let sc = $(this).scrollTop()
                                                        let sht = $('section').height;
                                                        console.log(sc);
                                                        console.log(sht);
                                                        
                                

                                                        if(sc>=sht*0 && sc<sht*1){
                                                                                $('.nav2').fadeOut(0);
                                                                                $('.nav2 li').removeClass('on2')
                                                                            
                                                        }
                                                        for(var a = 1; a<4; a++){
                                                            if(sc>=sht*(a+1) && sc<sht*(a+2)){
                                                                                            $('.nav2').fadeIn(969);
                                                                                            $('.nav2 li').removeClass('on2')
                                                                                            $('.nav2 li') .eq(a).addClass('on2')
                                                                                            }
                                                            }
                            })

                            // n2 li를 클릭했을 때, scroll의 위치가 바뀐다.
                            // n2 li를 클릭했을 때, 각 li의 순번을 찾고 그 순번에 맞게 scroll의 위치를 매번 바뀌게 해라.
                            $('.n2 li').click(function(){
                                                        let s = $(this).index();
                                                        let sht = $('section').height();
                                                        $('html,body').stop().animate({scrollTop:(s)*sht},1200)
                                                        $('.n2 li').removeClass('.on2')
                                                        $(this).addClass('.on2')
                                                        });

                                $('.on2').click(function(){
                                    let sht = $('section').height();
                                    $('html,body').stop().animate({scrollTop:sht},1200);
                                    $('.n2').fadeIn(1800);
                                    $('.n2 li').removeClass('.on3')
                                    $('.n2 li').eq(1).addClass('.on3')
                                    })

                
                            // n2 li를 클릭했을 때, span과 li의 색깔이 바뀌어라.



                            }) // 제이쿼리 끝