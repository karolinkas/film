alert("me is hero");

var x = 250;
var y = 250;

function mover() {


    var endpos = document.getElementById("show");

    var directions = document.getElementById("letters").value;
    var d = directions.split("");


    for (var i in d) {


        switch (d[i]) {
            case "f":
                y += 100;
                break;
            case "b":
                y -= 100;
                // alert("backward");
                break;
            case "r":
                x += 100;
                // alert("left");
                break;
            case "l":
                x -= 100;
                // alert("backward");
                break;
            default:
                endpos.innerHTML += "Moving!";


        }
        endpos.innerHTML += "<br /> NEW POSITION: " + x + "," + y + "<br />";
        d3.selectAll("circle")
            .transition()
            .duration(5000)
            .attr("cy", y)
            .attr("cx", x)
            .each("end", function() {
                if (y >= 480) {
                    d3.select(this)
                        .attr("cy", 480)
                    alert("You hit the wall!")
                } else if (y <= 18) {
                    d3.select(this)
                        .attr("cy", 18)
                    alert("You hit the wall!")
                } else if (x >= 480) {
                    d3.select(this)
                        .attr("cx", 480)
                    alert("You hit the wall!")
                } else if (x <= 18) {
                    d3.select(this)
                        .attr("cx", 18)
                    alert("You hit the wall!")
                }
            })
    }
}









/*
var circle = document.getElementById("circle");
var pos = circle.getBoundingClientRect();
alert("Coordinates: " + pos.left + "px, " + pos.top + "px");


var directions = document.getElementById("letters").value
var d = directions.split("");

function mover(d) {
    return true;

    for (var i in d) {

        alert(d[i]);


        switch (d[i]) {
            case "f":
                pos.top += 1;
                alert("forward");
                break;
            case "b":
                pos.top -= 1;
                alert("backward");
                break;
            case "l":
                pos.left -= 1;
                alert("left");
                break;
            case "r":
                pos.left += 1;
                alert("backward");
                break;
            default:
                alert("Stagnation");
        }
    }
}



/* Check if circle selected? 

console.log(document.getElementById("circle")); 

/* $(document).ready(function() {
    $("#circle").fadeOut(1000);
});

/*
var rover={x:0,
           y:0,
           justification: j,
}

var j= Math.floor(Math.random()*justificationArray.length);

var justificationArray = ['N','S','E','W'];



var directions=document.getElementById("letters").value

function mover(directions){
return true;
for (i=0;i<=directions.length;i++){

switch(directions) {
    case "f":
        rover.y+=1;
        console.log("forward");
        break;
    case "b":
        rover.y-=1;
         console.log("backward");
        break;
    case "l":
        rover.x-=1;
        console.log("left");
        break;
    case "right":
        rover.x+=1;
        console.log("backward");
        break;
    default:
        console.log("Stagnation");
}

}


}


/* Vectors for Visualization ? 
var initp=[0,0]
var finalp=[2,2]

var distance=function(initp,finalp){
    distance=finalp-initp;
    alert(distance);
}
*/
