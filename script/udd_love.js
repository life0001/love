var LoveActually={
    Switch:(function(){
        var $open=$('.LoveActually_a'),
            $close=$('.close');
        $open.click(function(){
            var $name=$('#name'),
                $registr=$('#Registration'),
                $regf=$('#regForm');

                $registr.css({'height':$('body').height(),top:0});
                $regf.css({'margin-top':($(window).height()-$regf.height())/2});
                if($name.val()==''){
                    $name.focus();
                }
        });
        $close.click(function(){
            var $registr=$('#Registration');
            $registr.css({top:-9999});
        });
    })(),
    Select:(function(){
        var clicked=true,
            date=new Date(),
            $toggleLi=$('.regForm_dateUl li');

        $(document).click(function(){
            var $divhide=$('.regForm_dateUl li div');
            $divhide.css('left',-9999);
        });

        $toggleLi.click(function(e){
            e.stopPropagation();
            $toggleLi.find('div').css('left',-9999);
            $(this).find('div').css('left',-1);
            $toggleLi.eq(2).find('div').html('');
            if($toggleLi.index($(this))!=2){
                $('.txt2').eq(2).text('');
            }
            if($toggleLi.index($(this))==0){
                var year=date.getFullYear();
                for (var i=0; i<5; i++){
                    $(this).find('div').append('<p>'+year+'</p>');
                    year++;
                }
                date=null;
            }
            if($toggleLi.index($(this))==1 && clicked){
                for(var i=1; i<=12; i++){
                    $(this).find('div').append('<p>'+i+'</p>');
                    clicked=false;
                }
            }
            if($toggleLi.index($(this))==2 && $('.txt2').eq(0).text()!=''){
                for(var i=1; i<=LoveActually.GetMonthDays(); i++){
                    $(this).find('div').append('<p>'+i+'</p>');
                }
            }
        });
        $toggleLi.on('click','p',function(e){
            e.stopPropagation();
            $(this).parent().css('left','-9999px').prev().text($(this).text());
        });
    })(),
    add:(function(){
        var timer, Append= 4, $num=$('.num');
        function Addnum(Seconds){
            var $lastchildS=$('.num s:last-child');
            return function(){
                var $allS=$('.num s');
                $lastchildS.text(++Seconds);
                if($lastchildS.text().length==2)
                {
                    $allS.eq(1).text($lastchildS.text().substr(0,1));
                    $lastchildS.text($lastchildS.text().substr($lastchildS.text().length-1,1));
                }
                if($lastchildS.text().length==3)
                {
                    $allS.eq(0).text($lastchildS.text().substr(0,1));
                    $allS.eq(1).text($lastchildS.text().substr(1,1));
                    $lastchildS.text($lastchildS.text().substr($lastchildS.text().length-1,1));
                }

                if($lastchildS.text().length>=3){
                    if(Append==$lastchildS.text().length){
                        $num.prepend('<s>0</s>');
                        Append=$lastchildS.text().length+1;
                    }else{
                        $allS.eq(0).text($lastchildS.text().substr(0,1));
                        $allS.eq(1).text($lastchildS.text().substr(1,1));
                        $allS.eq(2).text($lastchildS.text().substr(2,1));
                        $allS.eq(3).text($lastchildS.text().substr(3,1));
                        $allS.eq(4).text($lastchildS.text().substr(4,1));
                        $allS.eq(5).text($lastchildS.text().substr(5,1));
                        $allS.eq(6).text($lastchildS.text().substr(6,1));
                        $lastchildS.text($lastchildS.text().substr($lastchildS.text().length-1,1));
                    }
                }
            }
        }
        timer=setInterval(Addnum(0),1);
    }),
    GetMonthDays:(function(){
        var $txt2=$('.txt2'),
        year=parseInt($txt2.eq(0).text()),
        month=parseInt($txt2.eq(1).text()),
        days=new Date(year,month,0).getDate();
        return days;
  })
};

