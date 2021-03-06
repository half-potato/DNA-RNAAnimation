var sense = [{n: "G"}, {n: "C"}, {n: "T"}, {n: "A"}, {n: "G"}, {n: "T"}, {n: "T"},{n: "A"},{n: "C"},{n: "G"},{n: "A"},{n: "A"},{n: "T"},{n: "G"},{n: "A"},{n: "A"},{n: "C"},{n: "T"},{n: "C"},{n: "G"},{n: "C"},{n: "A"},{n: "G"},{n: "T"}];

var animations = [[[".helicase", "+=50px", "+=0px"],[".audio1", "+=0px", "+=0px", "play"]],
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
                  [["#17", "+=0px", "-=50px"], ["#a17", "+=0px", "+=50px"], [".audio2", "+=0px", "+=0px", "play"]],
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
                  [[".polymerase", "+=50px", "+=0px"], [".audio3", "+=0px", "+=0px", "play"]],
                  [["#r12", "+=0px", "-=400px"]],
                  [[".polymerase", "+=0px", "+=0px", "hide"], [".antisense", "+=0px", "+=0px", "hide"], [".sense", "+=0px", "+=0px", "hide"]],
                  [
                      [".polymerase", "+=0px", "+=0px", "hide"], [".antisense", "+=0px", "+=0px", "hide"], [".sense", "+=0px", "+=0px", "hide"],
                      [".nucleos", "+=0", "+=0", "unhide"]
                  ],
                  [["#nucleicwallbottom", "-=100", "+=0"], ["#nucleicwalltop", "-=100", "+=0"]],
                  [["#nucleicwallbottom", "-=100", "+=0"], ["#nucleicwalltop", "-=100", "+=0"]],
                  [["#nucleicwallbottom", "-=100", "+=0"], ["#nucleicwalltop", "-=100", "+=0"]],
                  [["#nucleicwallbottom", "-=100", "+=0"], ["#nucleicwalltop", "-=100", "+=0"]],
                  [["#nucleicwallbottom", "-=100", "+=0"], ["#nucleicwalltop", "-=100", "+=0"]],
                  [["#nucleicwallbottom", "-=100", "+=0"], ["#nucleicwalltop", "-=100", "+=0"]],
                  [["#nucleicwallbottom", "-=100", "+=0"], ["#nucleicwalltop", "-=100", "+=0"]],
                  [["#nucleicwallbottom", "-=100", "+=0"], ["#nucleicwalltop", "-=100", "+=0"]],
                  [["#nucleicwallbottom", "-=100", "+=0"], ["#nucleicwalltop", "-=100", "+=0"]],
                  [["#nucleicwallbottom", "-=100", "+=0"], ["#nucleicwalltop", "-=100", "+=0"]],
                  [["#nucleicwallbottom", "-=100", "+=0"], ["#nucleicwalltop", "-=100", "+=0"]],
                  [["#nucleicwallbottom", "-=100", "+=0"], ["#nucleicwalltop", "-=100", "+=0"]],
                  [["#nucleicwallbottom", "-=100", "+=0"], ["#nucleicwalltop", "-=100", "+=0"]],
                  [["#r1", "+=0px", "-=10px"], [".audio4", "+=0px","+=0px", "play" ]],
                  [["#r2", "+=0px", "-=10px"], ["#r1", "+=0px", "+=110px"]],
                  [["#r3", "+=0px", "-=10px"], ["#r2", "+=0px", "+=110px"]],
                  [["#r4", "+=0px", "-=10px"], ["#r3", "+=0px", "+=110px"]],
                  [["#r5", "+=0px", "-=10px"], ["#r4", "+=0px", "+=110px"]],
                  [["#r6", "+=0px", "-=10px"], ["#r5", "+=0px", "+=110px"]],
                  [["#r7", "+=0px", "-=10px"], ["#r6", "+=0px", "+=110px"]],
                  [["#r8", "+=0px", "-=10px"], ["#r7", "+=0px", "+=110px"]],
                  [["#r9", "+=0px", "-=10px"], ["#r8", "+=0px", "+=110px"]],
                  [["#r10", "+=0px", "-=10px"], ["#r9", "+=0px", "+=110px"]],
                  [["#r11", "+=0px", "-=10px"], ["#r10", "+=0px", "+=110px"]],
                  [["#r12", "+=0px", "-=10px"], ["#r11", "+=0px", "+=110px"]],
                  [["#r12", "+=0px", "+=110px"], [".audio5", "+=0px", "+=0px", "play"]],
                  [[".ribosome", "+=0", "+=0", "unhide"]],
                  [[".smallsubunit", "+=0px", "+=310px"], [".largesubunit", "+=0px", "+=90px"]],[[".helicase", "+=10", "+=10"]],
                  [[".smallsubunit", "+=125px", "+=0px"], [".largesubunit", "+=125px", "+=0px"]],[[".helicase", "+=10", "+=10"]],
                  [[".smallsubunit", "+=0px", "-=10px"], [".largesubunit", "+=0px", "+=10px"]],[[".helicase", "+=10", "+=10"]],
                  [["#t1", "+300px", "+20px"], ["#t2", "+450px", "+20px"], ["#t3", "+250px", "+20px"], ["#aa1", "+375px", "+20px"], ["#aa2", "+525px", "+20px"], ["#aa3", "+525px", "+20px"], ["#bond1", "+375px", "+135px"], ["#bond2", "+525px", "+135px"]],
                  [["#t1", "+=0px", "+=0px", "unhide"], ["#aa1", "+=0px", "+=0px", "unhide"]],
                  [["#t1", "+=0px", "+=90px"], ["#aa1", "+=0px", "+=90px"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],
                  [["#t2", "+=0px", "+=0px", "unhide"], ["#aa2", "+=0px", "+=0px", "unhide"],[".audio6", "+=0","+=0","play"]],
                  [["#t2", "+=0px", "+=90"], ["#aa2", "+=0px", "+=90px"]],
                  [["#bond1", "+=0px", "+=0px", "unhide"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],[[".helicase", "+=10", "+=10"]],
                  [["#r1", "-=150px", "-=0px"], ["#r2", "-=150px", "-=0px"],[".audio7", "+=0", "+=0", "play"] ["#r3", "-=150px", "-=0px"], ["#r4", "-=150px", "-=0px"], ["#r5", "-=150px", "-=0px"], ["#r6", "-=150px", "-=0px"], ["#r7", "-=150px", "-=0px"], ["#r8", "-=150px", "-=0px"], ["#r9", "-=150px", "-=0px"], ["#r10", "-=150px", "-=0px"], ["#r11", "-=150px", "-=0px"], ["#r12", "-=150px", "-=0px"], ["#t1", "-=150px", "+=0"], ["#t2", "-=150px", "+=0"], ["#aa2", "-=150px", "+=0"], ["#aa1", "-=150px", "+=0"], ["#bond1", "-=150px", "+=0px"]],
                  [["#t1", "+=0px", "+=0px", "hide"]],
                  [["#t3", "+=0px", "+=0px", "unhide"], ["#aa3", "+=0px", "+=0px", "unhide"]],
                  [["#t3", "+=0px", "+=90"], ["#aa3", "+=0px", "+=90px"]],
                  [["#bond2", "+=0px", "+=0px", "unhide"]],
                  [["#r1", "-=150px", "-=0px"], ["#r2", "-=150px", "-=0px"], ["#r3", "-=150px", "-=0px"], ["#r4", "-=150px", "-=0px"], ["#r5", "-=150px", "-=0px"], ["#r6", "-=150px", "-=0px"], ["#r7", "-=150px", "-=0px"], ["#r8", "-=150px", "-=0px"], ["#r9", "-=150px", "-=0px"], ["#r10", "-=150px", "-=0px"], ["#r11", "-=150px", "-=0px"], ["#r12", "-=150px", "-=0px"], ["#t2", "-=150px", "+=0"], ["#t3", "-=150px", "+=0"], ["#bond2", "-=150px", "+=0px"]],
                  [["#t2", "+=0px", "+=0px", "hide"]],
                  [[".largesubunit", "+=0px", "-=500px"], [".smallsubunit", "+=0px", "+=500px"], ["#t3", "+=0px", "+=0px", "hide"], ["#r1", "-=150px", "-=0px"], ["#r2", "-=150px", "-=0px"], ["#r3", "-=150px", "-=0px"], ["#r4", "-=150px", "-=0px"], ["#r5", "-=150px", "-=0px"], ["#r6", "-=150px", "-=0px"], ["#r7", "-=150px", "-=0px"], ["#r8", "-=150px", "-=0px"], ["#r9", "-=150px", "-=0px"], ["#r10", "-=150px", "-=0px"], ["#r11", "-=150px", "-=0px"], ["#r12", "-=150px", "-=0px"]],
                  [["#r1", "-=150px", "-=0px"], ["#r2", "-=150px", "-=0px"], ["#r3", "-=150px", "-=0px"], ["#r4", "-=150px", "-=0px"], ["#r5", "-=150px", "-=0px"], ["#r6", "-=150px", "-=0px"], ["#r7", "-=150px", "-=0px"], ["#r8", "-=150px", "-=0px"], ["#r9", "-=150px", "-=0px"], ["#r10", "-=150px", "-=0px"], ["#r11", "-=150px", "-=0px"], ["#r12", "-=150px", "-=0px"]],
                  [["#r1", "-=150px", "-=0px"], ["#r2", "-=150px", "-=0px"], ["#r3", "-=150px", "-=0px"], ["#r4", "-=150px", "-=0px"], ["#r5", "-=150px", "-=0px"], ["#r6", "-=150px", "-=0px"], ["#r7", "-=150px", "-=0px"], ["#r8", "-=150px", "-=0px"], ["#r9", "-=150px", "-=0px"], ["#r10", "-=150px", "-=0px"], ["#r11", "-=150px", "-=0px"], ["#r12", "-=150px", "-=0px"]],
                  [["#r1", "-=150px", "-=0px"], ["#r2", "-=150px", "-=0px"], ["#r3", "-=150px", "-=0px"], ["#r4", "-=150px", "-=0px"], ["#r5", "-=150px", "-=0px"], ["#r6", "-=150px", "-=0px"], ["#r7", "-=150px", "-=0px"], ["#r8", "-=150px", "-=0px"], ["#r9", "-=150px", "-=0px"], ["#r10", "-=150px", "-=0px"], ["#r11", "-=150px", "-=0px"], ["#r12", "-=150px", "-=0px"]],
                  ];
        

function arrayAnimate(animations) 
{
    var step, short = animations, n;

    if (animations.length !== 0) 
    {
        step = animations.shift();
        console.log(step);
        console.log(step.length);
        for (n = 0; n < step.length; n += 1) 
        {
            if (n === step.length - 1) 
            {
                if (step[n][3] === "hide")
                {
                    $(step[n][0]).hide("fast");
                    arrayAnimate(animations);
                } else if(step[n][3] === "unhide") 
                {
                    $(step[n][0]).show("fast");
                    arrayAnimate(animations);
                } else if(step[n][3] === "play"){
                    $(step[n][0]).trigger("play");
                    arrayAnimate(animations)
                }else {
                    $(step[n][0]).animate( {top: step[n][2], left: step[n][1]}, "fast", function() 
                    {
                        setTimeout(1);
                        arrayAnimate(animations);
                    });
                }
            } else 
            {
                if (step[n][3] === "hide")
                {
                    $(step[n][0]).hide("fast");
                }else if(step[n][3] === "unhide"){
                    $(step[n][0]).show("fast");
                } else if(step[n][3] === "play"){
                    $(step[n][0]).trigger("play");
                } else {
                    $(step[n][0]).animate({top: step[n][2], left: step[n][1]}, "fast");
                }
            }
        }
    }
}

$(document).ready(function () {
    $(".audio1").trigger("load");
    $(".audio2").trigger("load");
    $(".audio3").trigger("load");
    $(".audio4").trigger("load");
    $(".audio5").trigger("load");
    $(".audio6").trigger("load");
    $(".audio7").trigger("load");
    $(".audio8").trigger("load");
    $(".audio9").trigger("load");
    $("#button").click(function () {

        //hide playbutton and title
        $(this).hide();
        $("#header").hide();
    //spawn in all resources
        //spawn in large groups
        $("#container").append("<div class=\"sense\"></div>");
        $("#container").append("<div class=\"antisense\"></div>");
        $("#container").append("<div class = \"helicase\">Helicase</div>");
        $("#container").append("<div class = \"polymerase\">Polymerase</div>");
        $("#container").append("<div class = \"aminoacids\" style=\"top:500px\"></div>");
        $("#container").append("<div class = \"nucleos\"></div>");
        $("#container").append("<div class = \"ribosome\"></div>");
        $(".ribosome").append("<div class = \"largesubunit\"></div>");
        //ribosme structure
        $(".largesubunit").append("<div id = 'Asite'>A</div>");
        $(".largesubunit").append("<div id = 'Psite'>P</div>");
        $(".largesubunit").append("<div id = 'Esite'>E</div>");
        $(".largesubunit").append("<div id = 'padding'></div>");
        $(".ribosome").append("<div class = \"smallsubunit\"></div>");
        //nucliec wall
        $(".nucleos").append("<div id=\"nucleicwalltop\"></div>");
        $(".nucleos").append("<div id=\"nucleicwallbottom\"></div>");
        //tRNA
        $("#container").append("<img id = 't1' class = 'tRNA' src = 'media/t1.png'> </img>");
        $("#container").append("<img id = 't2' class = 'tRNA' src = 'media/t2.png'> </img>");
        $("#container").append("<img id = 't3' class = 'tRNA' src = 'media/t3.png'> </img>");
        $("#container").append("<div id = 'bond1' class = 'bond'></div>");
        $("#container").append("<div id = 'bond2' class = 'bond'></div>");
        $("#bond1").hide();
        $("#bond2").hide();
        $("#container").append("<div id = 'aa1' class = 'aminoacid' style = 'background-color: blue;'></div>");
        $("#container").append("<div id = 'aa2' class = 'aminoacid' style = 'background-color: red;'></div>");
        $("#container").append("<div id = 'aa3' class = 'aminoacid' style = 'background-color: yellow;'></div>");
        $("#t1").hide();
        $("#t2").hide();
        $("#t3").hide();
        $("#aa1").hide();
        $("#aa2").hide();
        $("#aa3").hide();
        $(".nucleos").hide();
        $(".ribosome").hide();
        
        //dynamically create DNA strands
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
        //more of the same
        $(".aminoacids").hide();
        $(this).fadeOut();
        $("#header").fadeOut();
        arrayAnimate(animations);
    });
});
