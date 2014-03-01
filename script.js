
var sense = [{n: "A"}, {n: "T"}, {n: "G"}, {n: "C"}];
var antisense = [{n: "A"}, {n: "T"}, {n: "G"}, {n: "C"}];
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
    $("button").click(function() {
        for(var i = 0; i < sense.length; i++){
            $(".sense, #"+i).animate({top:"-150px"}, 500);
        }
        for(var i = 0; i < antisense.length; i++){
            $(".antisense, #"+i).animate({top:"+150px"}, 500);
        }
    });
});