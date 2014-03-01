
var     sense = [{n: "A"}, {n: "G"}, {n: "G"}, {n: "T"}, {n: "C"}, {n: "T"}, {n: "G"}, {n: "A"}, {n: "A"}, {n: "T"}, {n: "C"}];
var antisense = [{n: "T"}, {n: "C"}, {n: "C"}, {n: "A"}, {n: "G"}, {n: "A"}, {n: "C"}, {n: "T"}, {n: "T"}, {n: "A"}, {n: "G"}];
var animations = [[["#1", "+=0px", "-=15px"]], [["#2", "+=0px", "-=30px"], ["#3", "+=0px", "-=30px"]]];

function arrayAnimate(animations) {
    var step, short = animations, object, directions, n;

    if (animations.length != 0) {
        step = animations.shift();
        console.log(step);
        for (n = 0; n < step.length; n++) {
        console.log(step[n]);
        if(n == step.length - 1) {
            console.log("Hi");
            $(step[n][0]).animate( {top: step[n][2], left: step[n][1]}, arrayAnimate(animations));
        } else {
            console.log("Hi");
            $(step[n][0]).animate( {top: step[n][2], left: step[n][1]});
        }
    }
    }

    /*for(var i = 0; i < step.length; i++) {
        console.log(step[i][0] + step[i][1] + step[i][2]);
        console.log(i);
        $(step[i][0]).animate(
          {left: step[i][2],
           top: step[i][3]});
    }*/

    /*if(animations.length == 0) {
        for (object in step) {
            console.log(object.id);
            $(object.id).animate(
                {top: object.y, left: object.x});
        }
    } else {
        for (object in step) {
            console.log(object.id);
            $(object.id).animate(
                {top: object.y, left: object.x},
                arrayAnimate(short));
        }
    }*/
}

$(document).ready(function () {
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

    $("button").click(function () {
        arrayAnimate(animations);
        /*$("#1").animate({top:"-=15px"}, function () {
            $("#2").animate({top:"-=30px"}, function () {
                $("#3").animate({top:"-=45px"}, function () {
                    $("#4").animate({top:"-=50px"}, function () {
                        $("#5").animate({top:"-=50px"}, function () {
                            $("#6").animate({top:"-=50px"}, function () {
                                $("#7").animate({top:"-=50px"}, function () {

                                });
                            });
                        });
                    });
                });
            });*/
    });
    for (var i = 0; i < antisense.length; i++){
        switch(antisense[i].n){
            case "A":
                $(".antisense").append("<div id = '" + i + "' style ='left:"+ 50 * i + "px; top: 160px;' class = \"adenine\">A</div>");
                break;
            case "T":
                $(".antisense").append("<div id = '" + i + "' style ='left:"+ 50 * i + "px; top: 160px;' class = \"thymine\">T</div>");
                break;
            case "G":
                $(".antisense").append("<div id = '" + i + "' style ='left:"+ 50 * i + "px; top: 160px;' class = \"guanine\">G</div>");
                break;
            case "C":
                $(".antisense").append("<div id = '" + i + "' style ='left:"+ 50 * i + "px; top: 160px;' class = \"cytosine\">C</div>");
                break;
            case "U":
                $(".antisense").append("<div id = '" + i + "' style ='left:"+ 50 * i + "px; top: 160px;' class = \"adenine\">A</div>");
                break;
        }

    }
    /*$("button").click(function() {
        for(var i = 0; i < sense.length; i++){
            $(".sense, #"+i).animate({top:"-150px"}, 500);
        }
        for(var i = 0; i < antisense.length; i++){
            $(".antisense, #"+i).animate({top:"+150px"}, 500);
        }
    });*/
});
