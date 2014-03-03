var     sense = [{n: "A"}, {n: "G"}, {n: "G"}, {n: "T"}, {n: "C"}, {n: "T"}, {n: "G"}, {n: "A"}, {n: "A"}, {n: "T"}, {n: "C"}];
var antisense = [{n: "T"}, {n: "C"}, {n: "C"}, {n: "A"}, {n: "G"}, {n: "A"}, {n: "C"}, {n: "T"}, {n: "T"}, {n: "A"}, {n: "G"}];
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
var animations = [[["#1", "+=0px", "-=15px"]],
                  [["#2", "+=0px", "-=30px"]],
                  [["#3", "+=0px", "-=45px"]],
                  [["#4", "+=0px", "-=50px"]],
                  [["#5", "+=0px", "-=50px"]],
                  [["#6", "+=0px", "-=50px"]],
                  [["#7", "+=0px", "-=45px"]],
                  [["#8", "+=0px", "-=30px"]],
                  [["#9", "+=0px", "-=15px"]],
                  [[".helicase", "+=500px", "+=0px"]],
                  [[".sense", "+=0", "+=0", "hide"]],
                  [[".helicase", "+=0", "+=0", "hide"]]];
        

function arrayAnimate(animations) {
    var step, short = animations, n;

    if (animations.length !== 0) {
        step = animations.shift();
        for (n = 0; n < step.length; n += 1) {
            if (n === step.length - 1) {
                if (step[n][3] ==="hide"){
                    $(step[n][0]).hide(2500);
                }
                else{
                $(step[n][0]).animate({top: step[n][2], left: step[n][1]},1000, arrayAnimate(animations));
                }
            } else {
                $(step[n][0]).animate({top: step[n][2], left: step[n][1]},1000);
            }
        }
    }
}

$(document).ready(function () {
    $("#button").click(function () {
        $("#container").append("<div class=\"sense\"></div>");
        $("#container").append("<div class=\"antisense\"></div>");
        $("#container").append("<div class = \"helicase\">Helicase</div>");
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
            case "U":
                $(".sense").append("<div id = '" + i + "' style ='left:"+ 50 * i + "px' class = \"adenine\">A</div>");
                break;
        }
    }

    for (var i = 0; i < antisense.length; i++){
        switch(antisense[i].n){
            case "A":
                $(".antisense").append("<div id = a'" + i + "' style ='left:"+ 50 * i + "px; top: 160px;' class = \"adenine\">A</div>");
                break;
            case "T":
                $(".antisense").append("<div id = a'" + i + "' style ='left:"+ 50 * i + "px; top: 160px;' class = \"thymine\">T</div>");
                break;
            case "G":
                $(".antisense").append("<div id = a'" + i + "' style ='left:"+ 50 * i + "px; top: 160px;' class = \"guanine\">G</div>");
                break;
            case "C":
                $(".antisense").append("<div id = a'" + i + "' style ='left:"+ 50 * i + "px; top: 160px;' class = \"cytosine\">C</div>");
                break;
            case "U":
                $(".antisense").append("<div id = a'" + i + "' style ='left:"+ 50 * i + "px; top: 160px;' class = \"adenine\">A</div>");
                break;
        }

    }
        $(this).hide();
        $("#header").hide();
        arrayAnimate(animations);
        $(".sense").animate({top:"+=500px"}, 100);
    });
});
