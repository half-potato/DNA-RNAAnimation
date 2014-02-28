var sense = [
    {
        n: "A"
    },
    {
        n: "T"
    }
];
$(document).ready(function(){
    for (var i = 0; i < sense.length; i++) {
        switch(sense[i].n) {
            case "A":
                $(".sense").append("<div style ='left:"+ 50 * i + "px' id = \"adenine\">A</div>");
                break;
            case "T":
                $(".sense").append("<div style ='left:"+ 50 * i + "px' id = \"thymine\">T</div>");
                break;
            case "G":
                $(".sense").append("<div style ='left:"+ 50 * i + "px' id = \"guanine\">G</div>");
                break;
            case "C":
                $(".sense").append("<div style ='left:"+ 50 * i + "px' id = \"cytosine\">C</div>");
                break;
            case "U":
                $(".sense").append("<div style ='left:"+ 50 * i + "px' id = \"adenine\">A</div>");
                break;
        }
    }
    $("button").click(function(){
        $(".sense").animate({top:'150px'});
    });
});