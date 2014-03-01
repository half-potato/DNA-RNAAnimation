
var sense = [{n: "A"}, {n: "G"}, {n: "G"}, {n: "T"}, {n: "C"}, {n: "T"}, {n: "G"}, {n: "A"}, {n: "A"}, {n: "T"}, {n: "C"}];
var animations = {step1: [{id: "#1", x: "+=0px", y: "+=15px"}], step2: [{id: "#2", x: "+=0px", y: "+=30px"}, {id: "#3", x: "+=0px", y: "+=30px"}]};

function arrayAnimate(animations) {
    var step = animations.shift(), short = animations, object, directions;
    if(animations.length == 0) {
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
    }
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
        console.log("hi");
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
            });
        });*/
    });
});