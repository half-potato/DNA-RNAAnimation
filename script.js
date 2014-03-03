var     sense = [{n: "t"},{n: "a"},{n: "c"},{n: "g"},{n: "a"},{n: "a"},{n: "t"},{n: "g"},{n: "t"},{n: "t"},{n: "t"},{n: "a"},{n: "c"},{n: "c"},{n: "c"},{n: "a"},{n: "c"},{n: "c"},{n: "a"},{n: "c"},{n: "t"}];
/*var animations = [[["#1", "+=0px", "-=15px"], ["#helicase", "+=50px", "+=0px"]],
                  [["#2", "+=0px", "-=30px"], ["#helicase", "+=50px", "+=0px"]],
                  [["#3", "+=0px", "-=45px"], ["#helicase", "+=50px", "+=0px"]],
                  [["#4", "+=0px", "-=50px"], ["#helicase", "+=50px", "+=0px"]],
                  [["#5", "+=0px", "-=50px"], ["#helicase", "+=50px", "+=0px"]],
                  [["#6", "+=0px", "-=50px"], ["#helicase", "+=50px", "+=0px"]],
                  [["#7", "+=0px", "-=45px"], ["#helicase", "+=50px", "+=0px"]],
                  [["#8", "+=0px", "-=30px"], ["#helicase", "+=50px", "+=0px"]],
                  [["#9", "+=0px", "-=15px"], ["#helicase", "+=50px", "+=0px"]]];*/
                //<id/class> <x>     <y>
var animations = [[[".helicase", "+=50px", "+=0px"]],
                  [["#1", "+=0px", "-=15px"], ["#a1", "+=0px", "+=15px"]],
                  [[".helicase", "+=50px", "+=0px"]],
                  [["#2", "+=0px", "-=30px"], ["#a2", "+=0px", "+=30px"]],
                  [[".helicase", "+=50px", "+=0px"]],
                  [["#3", "+=0px", "-=45px"], ["#a3", "+=0px", "+=45px"]],
                  [[".helicase", "+=50px", "+=0px"]],
                  [["#4", "+=0px", "-=50px"], ["#a4", "+=0px", "+=50px"]],
                  [[".helicase", "+=50px", "+=0px"]],
                  [["#5", "+=0px", "-=50px"], ["#a5", "+=0px", "+=50px"]],
                  [[".helicase", "+=50px", "+=0px"]],
                  [["#6", "+=0px", "-=50px"], ["#a6", "+=0px", "+=50px"]],
                  [[".helicase", "+=50px", "+=0px"]],
                  [["#7", "+=0px", "-=45px"], ["#a7", "+=0px", "+=45px"]],
                  [[".helicase", "+=50px", "+=0px"]],
                  [["#8", "+=0px", "-=30px"], ["#a8", "+=0px", "+=30px"]],
                  [[".helicase", "+=50px", "+=0px"]],
                  [["#9", "+=0px", "-=15px"], ["#a9", "+=0px", "+=15px"]],
                  [[".helicase", "+=50px", "+=0px"]],
                  [[".helicase", "+=0", "+=0", "hide"], [".polymerase", "+=315px", "+=0px"]], 
                  [[".polymerase", "+=0", "+=0", "unhide"], [".aminoacids", "+=0", "+=0", "unhide"]],
                  [["#r1", "+=0px", "15px"]],
                  [[".polymerase", "+=50px", "+=0px"]],
                  //[[".polymerase", "+=50px", "+=0px"]],
                  //[[".polymerase", "+=50px", "+=0px"]],
                  ];
        

function arrayAnimate(animations) {
    var step, short = animations, n;

    if (animations.length !== 0) {
        step = animations.shift();
        for (n = 0; n < step.length; n += 1) {
            if (n === step.length - 1) {
                if (step[n][3] === "hide"){
                    $(step[n][0]).hide(.1);
                    arrayAnimate(animations);
                } else if(step[n][3] === "unhide") {
                    $(step[n][0]).show(.1);
                    arrayAnimate(animations);
                } else {
                    $(step[n][0]).animate( {top: step[n][2], left: step[n][1]}, 250, function() {
                        setTimeout(1);
                        arrayAnimate(animations);
                    });
                }
            } else {
                if (step[n][3] === "hide"){
                    $(step[n][0]).hide(2500);
                } else if(step[n][3] === "unhide") {
                    $(step[n][0]).show(2500);
                } else {
                    $(step[n][0]).animate({top: step[n][2], left: step[n][1]}, 250);
                }
            }
        }
    }
}

$(document).ready(function () {
    $("#button").click(function () {
        $("#container").append("<div class=\"sense\"></div>");
        $("#container").append("<div class=\"antisense\"></div>");
        $("#container").append("<div class = \"helicase\">Helicase</div>");
        $("#container").append("<div class = \"polymerase\">Polymerase</div>");
        $("#container").append("<div class = \"aminoacids\"></div>");
        
        for (var i = 0; i < sense.length; i++) {
            switch(sense[i].n) {
                case "A":
                    $(".sense").append("<div id = '" + i + "' style ='left:"+ 50 * i + "px' class = \"adenine\">A</div>");
                    break;
                case "T":
                    $(".sense").append("<div id = '" + i + "' style ='left:"+ 50 * i + "px' class = \"thymine\">T</div>");
                    break;
                case "G":
                    $(".sense").append("<div id = '" + i + "' style ='left:"+ 50 * i + "px' class = \"guanine\">G</div>");
                    break;
                case "C":
                    $(".sense").append("<div id = '" + i + "' style ='left:"+ 50 * i + "px' class = \"cytosine\">C</div>");
                    break;
            }
        }   

        for (var i = 0; i < sense.length; i++){
            switch(sense[i].n){
                case "T":
                    $(".antisense").append("<div id = 'a" + i + "' style ='left:"+ 50 * i + "px; top: 160px;' class = \"adenine\">A</div>");
                    break;
                case "A":
                    $(".antisense").append("<div id = 'a" + i + "' style ='left:"+ 50 * i + "px; top: 160px;' class = \"thymine\">T</div>");
                    break;
                case "C":
                    $(".antisense").append("<div id = 'a" + i + "' style ='left:"+ 50 * i + "px; top: 160px;' class = \"guanine\">G</div>");
                    break;
                case "G":
                    $(".antisense").append("<div id = 'a" + i + "' style ='left:"+ 50 * i + "px; top: 160px;' class = \"cytosine\">C</div>");
                    break;
            }
        }
        
        for (var i = 5; i < sense.length; i++){
            n = i - 5;
            switch(sense[i].n){
                case "T":
                    $(".aminoacids").append("<div id = 'r" + n + "' style ='left:"+ 50 * i + "px; top: 500px;' class = \"adenine\">A</div>");
                    break;
                case "A":
                    $(".aminoacids").append("<div id = 'r" + n + "' style ='left:"+ 50 * i + "px; top: 500px;' class = \"uracil\">U</div>");
                    break;
                case "C":
                    $(".aminoacids").append("<div id = 'r" + n + "' style ='left:"+ 50 * i + "px; top: 500px;' class = \"guanine\">G</div>");
                    break;
                case "G":
                    $(".aminoacids").append("<div id = 'r" + n + "' style ='left:"+ 50 * i + "px; top: 500px;' class = \"cytosine\">C</div>");
                    break;
            }
        }
        
        $(".aminoacids").hide();
        
        $(this).hide(.1);
        $("#header").hide(.1);
        arrayAnimate(animations);
        $(".antisense").animate({top:"-=5000px"}, 1000);
    });
});
