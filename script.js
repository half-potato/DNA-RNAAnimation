var nucleo = [
    {
        x: 200px;
        y: 200px;
        n: "A";
    },
    {
        x: 250px;
        y: 200px;
        n: "T";
    }
];
$(document).ready(function(){
    
    $("button").click(function(){
        $("#push1").animate({left:'250px'});
        $("#push2").animate({left:'250px'});
    });
});