var body = $("body");
body.width = innerWidth;
body.height = innerHeight;
var bw = body.width;
var bh = body.height;
var pad = document.getElementById("c1");
var keys = [];
pad = {
  x: bw / 2,
  y: bh / 2,
  w: pad.width,
  h: pad.height
};

$("#c1").css("left", pad.x);
$("#c1").css("top", pad.y);
pad.width = 100;
pad.height = 50;

var beat = $(".beat"),
 yy=[],
 ww=[];
var num=["0","1","2","3","4","5","6"];
var wxy = setInterval(removeSomeClass,100);

for(let i = 1; i< 7;i++){
    yy[i]=document.getElementById('s'+i);
    ww[i]=$('#a'+i);
}
function removeSomeClass(){
    $(".beat").removeClass("btn-cycle");
}

function theWorks() {
    document.addEventListener("keyup", function (e) {
        keys[e.code] = false;
    });

    document.addEventListener("keydown", function (e) {
        keys[e.code] = true;
        for (let i in ww) {
            if (keys["Numpad" + num[i]]) {
                ww[i].mousedown()
            }
        }
    });

    for (let i = 1; i < 7; i++) {
        $(".beat").removeClass("btn-cycle");
        ww[i].mousedown(function () {
            $(".beat").removeClass("btn-cycle");
            $(this).addClass("btn-cycle");
            yy[i].currentTime = 0;
            yy[i].play();

        })
    }
}
theWorks();