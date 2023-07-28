$(document).ready(function(){
                            let ht = $(window).height();
                            $('section').height(ht);
                        
                            $(window).resize(function(){
                                                        let he = $(window).height();
                                                        $('section').height(ht)
                                                        });

                            // nav li를 클릭할 때마다 scrollTop의 위치를 바꾸어라.
                            $(window).scroll(function(){
                                                        let sc = $(window).scrollTop()
                                                    
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
                                                        
                                                        let ht = $(window).height();

                                                        $('html,body').stop().animate({scrollTop: ht*i},1400);
                                                        $('nav li').removeClass('on')
                                                        $(this).addClass('on')
                                                        });

                            // section위에서 마우스를 올릴 때, 내릴 때 이벤트가 발생한다.
                            // $('article').mousewheel(function(event,delta){
                            //                                             if(delta>0){
                            //                                                         let pre = $(this).prev().offset().top
                            //                                                         $('html,body').stop().animate({scrollTop:pre},1000,'swing')
                            //                                                         }
                            //                                             else if(delta<0){
                            //                                                             let next = $(this).next().offset().top
                                                                                        
                            //                                                             $('html,body').stop().animate({scrollTop:next},1000,'swing')
                            //                                                             }
                            //                                             })

                            // $('article').mousemove(function(e){
                            //                                 let x = e.pageX;
                            //                                 let y = e.pageY;

                            //                                 $(this).find('.boxA').css({'bottom': 20+(y/10), 'right': 20+(x/10)})
                            //                                 })

                            // main버튼을 눌렀을 때 main화면에 있는 버튼이 main을 가리켜라.
                            // $('.ma').click(function(){
                            //     let mht = $('article').height();
                            //     console.log(mht)
                            //     if(mht<=969){
                            //         // $('.menu li.on').fadeIn(600);
                            //         $('nav li').removeClass('on')
                            //         $('nav li').eq(a).addClass('on')
                            //     }
                            // })




                            // actor사진 옆으로 움직이기
                            let j = 0;
                            let wd = $('.actor ul li').width()
                            // console.log(wd)

                            $('.ri2').click(function(){
                                if(j<7) j++;
                                // console.log(j)

                            $('.actor ul').stop().animate({'right': -(wd+20)*j},800)
                            })

                            // daily사진 옆으로 움직이기
                            let d = 0;
                            let ad = $('.daily ul li').width()
                            // console.log(ad)

                            $('.ri').click(function(){
                                if(d<6) d++;
                                // console.log(d)

                            $('.daily ul').stop().animate({'right': -(ad+20)*d},1000)
                            })


                            // singer사진 아래으로 움직이기
                            let k = 0;
                            let ed = $('.singer ul li').width()
                            // console.log(ed)

                            $('.do').click(function(){
                                if(k<4) k++;
                                // console.log(k)

                            $('.singer ul').stop().animate({'top': -(ed-220)*k},1000)
                            })


                            // scroll의 위치값을 확인하고 스크롤의 값이 section의 높이만큼 내려왔을 때부터 nav가 보여라.                       

                            $(window).scroll(function(){
                                                        let sc = $(this).scrollTop()
                                                        let sht = $('section').height();
                                                        // console.log(sc);
                                                        // console.log(sht);
                                                        
                                

                                                        if(sc>=sht*0 && sc<sht*1){
                                                                                $('.n2').fadeIn(600);
                                                                                $('.n2 li').removeClass('on2')
                                                                            
                                                        }

                                                        for(var a = 0; a<5; a++){
                                                                                if(sc>=sht*(a+1) && sc<sht*(a+2)){
                                                                                                                $('.n2').fadeIn(600);
                                                                                                                $('.n2 li').removeClass('on2')
                                                                                                                $('.n2 li') .eq(a+1).addClass('on2')
                                                                                                                }
                                                            }
                            });
                            
                            // n2 li를 클릭했을 때, scroll의 위치가 바뀐다.
                            // n2 li를 클릭했을 때, 각 li의 순번을 찾고 그 순번에 맞게 scroll의 위치를 매번 바뀌게 해라.
                            $('.n2 li').click(function(){
                                                        let s = $(this).index();
                                                        let sht = $('section').height();
                                                        $('html,body').stop().animate({scrollTop:(s)*sht},1200)
                                                        $('.n2 li').removeClass('on2')
                                                        $(this).addClass('on2')
                                                        });


                            // brand사진 옆으로 이동 시키기
                            $(window).scroll(function(){

                                let sc = $(this).scrollTop();
                                let sNum = Math.floor(sc)
                            
                                let bht = $('.box3').height()
                            
                                let lsc = (sNum-bht);
                                // $('h1').text((sNum-bht)/5);
                            
                            if(sc>=bht){
                            
                            $('.box4').addClass('fix');
                            $('.box4 div').stop().animate({'left':3510-lsc},1300)
                            
                            }else {
                            $('.box4').removeClass('fix')  
                            }
                            
                            })

                            // filmography 클릭시 해당 동영상 나오게 하기
                            $('.fil1 ul li').click(function(){
                                let v = $(this).index()
                                let vd = $('fil1 li').height();
                                // console.log(v)
                                
                                $('.video1 li').css({'z-index':0})
                                $('.video1 li').eq(v).css({'z-index':1})
                                $('.video3 li').css({'z-index':0})
                                $('.video2 li').css({'z-index':0})
                                });

                                $('.fil2 ul li').click(function(){
                                        let p = $(this).index()
                                        let pd = $('fil2 li').height();
                                        // console.log(p)
    
                                        $('.video2 li').css({'z-index':0})
                                        $('.video2 li').eq(p).css({'z-index':1})
                                        $('.video3 li').css({'z-index':0})
                                        });

                                $('.fil3 ul li').click(function(){
                                    let t = $(this).index()
                                    let td = $('fil3 li').height();
                                    // console.log(t)

                                    $('.video3 li').css({'z-index':0})
                                    $('.video3 li').eq(t).css({'z-index':1})
                                    });

                                    // 동영상 순번에 맞게 이름이 바뀌어라
                                    $('.fil1 li').click(function(){
                                        let l = $(this).index();
                                        let lht = $('fil1 li').height();
                                        console.log(l)
                                        $('.fil1 p').css({'font-weight':'bold', 'color':'#C06363'})
                                        $('.fil2 p').css({'font-weight':'normal', 'color':'#fff'})
                                        $('.fil3 p').css({'font-weight':'normal', 'color':'#fff'})
                                        $('.fil1 li').removeClass('on5')
                                        $(this).addClass('on5')

                                        $('.fil3 li').removeClass('on5')
                                        $('.fil2 li').removeClass('on5')
                                        });

                                        $('.fil2 li').click(function(){
                                            let l = $(this).index();
                                            let lht = $('fil2 li').height();
                                            console.log(l)
                                            $('.fil2 p').css({'font-weight':'bold', 'color':'#C06363'})
                                            $('.fil3 p').css({'font-weight':'normal', 'color':'#fff'})
                                            $('.fil1 p').css({'font-weight':'normal', 'color':'#fff'})
                                            $('.fil2 li').removeClass('on5')
                                            $(this).addClass('on5')

                                            $('.fil1 li').removeClass('on5')
                                            $('.fil3 li').removeClass('on5')
                                            });
    
                                            $('.fil3 li').click(function(){
                                                let l = $(this).index();
                                                let lht = $('fil3 li').height();
                                                console.log(l)
                                                $('.fil3 p').css({'font-weight':'bold', 'color':'#C06363'})
                                                $('.fil2 p').css({'font-weight':'normal', 'color':'#fff'})
                                                $('.fil1 p').css({'font-weight':'normal', 'color':'#fff'})
                                                $('.fil3 li').removeClass('on5')
                                                $(this).addClass('on5')

                                                $('.fil1 li').removeClass('on5')
                                                $('.fil2 li').removeClass('on5')
                                                });


                            }) // 제이쿼리 끝