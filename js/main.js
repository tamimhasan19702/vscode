var menuBtn= document.getElementById("menuBtn");
var sideNav= document.getElementById("sideNav");

sideNav.style.right="-250px";
menuBtn.onclick=function(){
    if(sideNav.style.right =="-250px"){
        sideNav.style.right="0";

    }
    else{
        sideNav.style.right="-250px";
    }
};


$(function(){
    let start=3758500;
    let end =$(".counter-value1").html();
    let speed=1;

    setInterval(function(){
        if(start<end){
            start++;
        }
        $(".counter-value1").html(start);
    },speed);
});

$(function(){
    let start=1279000;
    let end =$(".counter-value2").html();
    let speed=1;

    setInterval(function(){
        if(start<end){
            start++;
        }
        $(".counter-value2").html(start);
    },speed);
});

$(function(){
    let start=262300;
    let end =$(".counter-value3").html();
    let speed=1;

    setInterval(function(){
        if(start<end){
            start++;
        }
        $(".counter-value3").html(start);
    },speed);
});

$(function(){
    let start=2253000;
    let end =$(".counter-value4").html();
    let speed=1;

    setInterval(function(){
        if(start<end){
            start++;
        }
        $(".counter-value4").html(start);
    },speed);
});





$(function(){
    let start=11319;
    let end =$(".counter-value5").html();
    let speed=1;

    setInterval(function(){
        if(start<end){
            start++;
        }
        $(".counter-value5").html(start);
    },speed);
});

$(function(){
    let start=1003;
    let end =$(".counter-value6").html();
    let speed=1;

    setInterval(function(){
        if(start<end){
            start++;
        }
        $(".counter-value6").html(start);
    },speed);
});

$(function(){
    let start=86;
    let end =$(".counter-value7").html();
    let speed=10;

    setInterval(function(){
        if(start<end){
            start++;
        }
        $(".counter-value7").html(start);
    },speed);
});

$(function(){
    let start=9930;
    let end =$(".counter-value8").html();
    let speed=10;

    setInterval(function(){
        if(start<end){
            start++;
        }
        $(".counter-value8").html(start);
    },speed);
});
