var sense = [{n: "G"}, {n: "C"}, {n: "T"}, {n: "A"}, {n: "G"}, {n: "T"}, {n: "T"},{n: "A"},{n: "C"},{n: "G"},{n: "A"},{n: "A"},{n: "T"},{n: "G"},{n: "A"},{n: "A"},{n: "C"},{n: "T"},{n: "C"},{n: "G"},{n: "C"},{n: "A"},{n: "G"},{n: "T"}];

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
                  [["#7", "+=0px", "-=50px"], ["#a7", "+=0px", "+=50px"]],
                  [[".helicase", "+=50px", "+=0px"]],
                  [["#8", "+=0px", "-=50px"], ["#a8", "+=0px", "+=50px"]],
                  [[".helicase", "+=50px", "+=0px"]],
                  [["#9", "+=0px", "-=50px"], ["#a9", "+=0px", "+=50px"]],
                  [[".helicase", "+=50px", "+=0px"]],
                  [["#10", "+=0px", "-=50px"], ["#a10", "+=0px", "+=50px"]],
                  [[".helicase", "+=50px", "+=0px"]],
                  [["#11", "+=0px", "-=50px"], ["#a11", "+=0px", "+=50px"]],
                  [[".helicase", "+=50px", "+=0px"]],
                  [["#12", "+=0px", "-=50px"], ["#a12", "+=0px", "+=50px"]],
                  [[".helicase", "+=50px", "+=0px"]],
                  [["#13", "+=0px", "-=50px"], ["#a13", "+=0px", "+=50px"]],
                  [[".helicase", "+=50px", "+=0px"]],
                  [["#14", "+=0px", "-=50px"], ["#a14", "+=0px", "+=50px"]],
                  [[".helicase", "+=50px", "+=0px"]],
                  [["#15", "+=0px", "-=50px"], ["#a15", "+=0px", "+=50px"]],
                  [[".helicase", "+=50px", "+=0px"]],
                  [["#16", "+=0px", "-=50px"], ["#a16", "+=0px", "+=50px"]],
                  [[".helicase", "+=50px", "+=0px"]],
                  [["#17", "+=0px", "-=50px"], ["#a17", "+=0px", "+=50px"]],
                  [[".helicase", "+=50px", "+=0px"]],
                  [["#18", "+=0px", "-=50px"], ["#a18", "+=0px", "+=50px"]],
                  [[".helicase", "+=50px", "+=0px"]],
                  [["#19", "+=0px", "-=50px"], ["#a19", "+=0px", "+=50px"]],
                  [[".helicase", "+=50px", "+=0px"]],
                  [["#20", "+=0px", "-=45px"], ["#a20", "+=0px", "+=45px"]],
                  [[".helicase", "+=50px", "+=0px"]],
                  [["#21", "+=0px", "-=30px"], ["#a21", "+=0px", "+=30px"]],
                  [[".helicase", "+=50px", "+=0px"]],
                  [["#22", "+=0px", "-=15px"], ["#a22", "+=0px", "+=15px"]],
                  [[".helicase", "+=50px", "+=0px"]],
                  [["#23", "+=0px", "-=0px"], ["#a23", "+=0px", "+=0px"]],
                  [[".helicase", "+=0", "+=0", "hide"], [".polymerase", "+=315px", "+=0px"]], 
                  [[".polymerase", "+=0", "+=0", "unhide"], [".aminoacids", "+=0", "+=0", "unhide"]],
                  [[".polymerase", "+=50px", "+=0px"]],
                  [["#r1", "+=0px", "-=400px"]],
                  [[".polymerase", "+=50px", "+=0px"]],
                  [["#r2", "+=0px", "-=400px"]],
                  [[".polymerase", "+=50px", "+=0px"]],
                  [["#r3", "+=0px", "-=400px"]],
                  [[".polymerase", "+=50px", "+=0px"]],
                  [["#r4", "+=0px", "-=400px"]],
                  [[".polymerase", "+=50px", "+=0px"]],
                  [["#r5", "+=0px", "-=400px"]],
                  [[".polymerase", "+=50px", "+=0px"]],
                  [["#r6", "+=0px", "-=400px"]],
                  [[".polymerase", "+=50px", "+=0px"]],
                  [["#r7", "+=0px", "-=400px"]],
                  [[".polymerase", "+=50px", "+=0px"]],
                  [["#r8", "+=0px", "-=400px"]],
                  [[".polymerase", "+=50px", "+=0px"]],
                  [["#r9", "+=0px", "-=400px"]],
                  [[".polymerase", "+=50px", "+=0px"]],
                  [["#r10", "+=0px", "-=400px"]],
                  [[".polymerase", "+=50px", "+=0px"]],
                  [["#r11", "+=0px", "-=400px"]],
                  [[".polymerase", "+=50px", "+=0px"]],
                  [["#r12", "+=0px", "-=400px"]],
                  [[".polymerase", "+=0px", "+=0px", "hide"], [".antisense", "+=0px", "+=0px", "hide"], [".sense", "+=0px", "+=0px", "hide"]],
                  [[".polymerase", "+=0px", "+=0px", "hide"], [".antisense", "+=0px", "+=0px", "hide"], [".sense", "+=0px", "+=0px", "hide"], [".nucleos", "+=0", "+=0", "unhide"]],
                  [["#r1","+=1500px", "+=0px"], ["#r2","+=1500px", "+=0px"], ["#r3","+=1500px", "+=0px"], ["#r4","+=1000px", "+=0px"], ["#r5","+=1000px", "+=0px"], ["#r6","+=1000px", "+=0px"], ["#r7","+=1000px", "+=0px"], ["#r8","+=1000px", "+=0px"], ["#r9","+=1000px", "+=0px"], ["#r10","+=1000px", "+=0px"], ["#r11","+=1000px", "+=0px"], ["#r12","+=1000px", "+=0px"]],
                  [[".nucleos", "+=0", "+=0", "hide"], [".aminoacids", "+=0", "+=0", "hide"]],
                  [["#r1","-=1700px", "+=0px"], ["#r2","-=1700px", "+=0px"], ["#r3","-=1700px", "+=0px"], ["#r4","-=1700px", "+=0px"], ["#r5","-=1000px", "+=0px"], ["#r6","-=1200px", "+=0px"], ["#r7","-=1200px", "+=0px"], ["#r8","-=1200px", "+=0px"], ["#r9","-=1200px", "+=0px"], ["#r10","-=1000px", "+=0px"], ["#r11","-=1200px", "+=0px"], ["#r12","-=1200px", "+=0px"]],
                  [[".aminoacids", "+=0", "+=0", "unhide"]],
                  [[".largesubunit", "+=0", "+=0", "unhide"], [".smallsubunit", "+=0", "+=0", "unhide"]]];
        

function arrayAnimate(animations) {
    var step, short = animations, n;

    if (animations.length !== 0) {
        step = animations.shift();
        for (n = 0; n < step.length; n += 1) {
                if (n === step.length - 1) {
                    if (step[n][3] === "hide"){
                        $(step[n][0]).hide("fast");
                        arrayAnimate(animations);
                    } else if(step[n][3] === "unhide") {
                        $(step[n][0]).show("fast");
                        arrayAnimate(animations);
                    } else {
                        $(step[n][0]).animate( {top: step[n][2], left: step[n][1]}, "fast", function() {
                            setTimeout(1);
                            arrayAnimate(animations);
                        });
                    }
                } else {
                    if (step[n][3] === "hide"){
                        $(step[n][0]).hide("fast");
                    } else if(step[n][3] === "unhide") {
                        $(step[n][0]).show("fast");
                    } else {
                        $(step[n][0]).animate( {top: step[n][2], left: step[n][1]}, "fast", function() {
                            setTimeout(1);
                            arrayAnimate(animations);
                        });
                    }
                }
          }
     }
}

$(document).ready(function () {
    $(".audio1").trigger("load");
    $("#button").click(function () {
        $("#container").append("<div class=\"sense\"></div>");
        $("#container").append("<div class=\"antisense\"></div>");
        $("#container").append("<div class = \"helicase\">Helicase</div>");
        $("#container").append("<div class = \"polymerase\">Polymerase</div>");
        $("#container").append("<div class = \"aminoacids\" style=\"top:500px\"></div>");
        $("#container").append("<div class = \"nucleos\"></div>");
        $("#container").append("<div class = \"ribosome\"></div>");
        $(".ribosome").append("<div class = \"largesubunit\"></div>");
        $(".largesubunit").append("<div class = \"Asite\"></div>");
        $(".largesubunit").append("<div class = \"Psite\"></div>");
        $(".largesubunit").append("<div class = \"Esite\"></div>");
        $(".ribosome").append("<div class = \"smallsubunit\"></div>");
        $(".nucleos").append("<div id=\"nucleicwalltop\"></div>");
        $(".nucleos").append("<div id=\"nucleicwallbottom\"></div>");
        $(".nucleos").hide();
        $(".ribosome").hide();
        
        
        for (var i = 0; i < sense.length; i++) {
            switch(sense[i].n) {
                case "A":
                    $(".sense").append("<div id = '" + i + "' style ='left:"+ 50 * i + "px; top: 50px;' class = \"adenine\">A</div>");
                    break;
                case "T":
                    $(".sense").append("<div id = '" + i + "' style ='left:"+ 50 * i + "px; top: 50px;' class = \"thymine\">T</div>");
                    break;
                case "G":
                    $(".sense").append("<div id = '" + i + "' style ='left:"+ 50 * i + "px; top: 50px;' class = \"guanine\">G</div>");
                    break;
                case "C":
                    $(".sense").append("<div id = '" + i + "' style ='left:"+ 50 * i + "px; top: 50px;' class = \"cytosine\">C</div>");
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
        
        for (var i = 6; i < sense.length - 6; i++){
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
        $(this).fadeOut();
        $("#header").fadeOut();
        arrayAnimate(animations);
        $(".audio1").trigger('play');
    });
});
