

//function runs on click and outputs test cases you create to page

function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += nextOne(true, false);
//test third method, etc



    function firstLast6(a){
        var last =a.length-1;
        if(a[0]==6){
            return true;
        }
        if(a[last]==6){
            return true;
        }
        return false;
    }

    function has23(x){
        if(x[0]==2 || x[0]==3){
            return true;
        }
        if(x[1]==2 || x[1]==3){
            return true;
        }
        return false;
    }


    function fix23(x){
        if(x[0]==2 && x[1]==3){
            x[1]=0;
            return x;
        }
        if(x[1]==2 && x[2]==3){
            x[2]=0;
        return x;
    }
}


function countYZ(x)
{
    var count=0;
    x.split(" ");
    for(i=0; i<2; i++){

        if(x[i].endsWith("y")){
            count = count+1;
        }
    }
    return count;
}

function countYZ(str)
{
    var count=0;

    var x = str.toLowerCase();
    x = x.split(" ");

    for(i=0; i<x.length; i++){

        if( (x[i].endsWith("y")) ||
            (x[i].endsWith("z")))
        {
            count = count+1;
        }
    }

    return count;
}


function endOther(x, y){
    x=x.toLowerCase();
    y=y.toLowerCase();

    if(y.endsWith(x) || x.endsWith(y) ) {
        return true;
    }

    return false;
}


function starOut(x){
    var newString = ""
    for(var i =0; i<x.length; i++){
        if((x[i-1] !='*') && (x[i+1]!='*') && (x[i]!='*')){
            newString = newString + x[i];
        }
    }
    return newString;
}




function getSandwich(x){
    var y = ""
    var firstIndex= x.indexOf("bread")
    var lastIndex = x.lastIndexOf("bread")

    if(firstIndex == lastIndex){
        return y;
    }

    y = x.substring(firstIndex + 5, lastIndex);

    return(y);
}


function canBalance(x){
    var sum1 = 0;
    var sum2 = 0;
    for(var i =0; i<=x.length; i++){
        sum1 = x[i];
        for(var k = i+1; i<=x.length; i++){
            sum2 = x[k];
        }
        if(sum1 == sum2){
            return true;
        }
    }
    return false;
}




function countClumps(x){


    var clumps = 0;

    var last = x[0];
    var inClump = false;

    for(var i=1;i<x.length;++i){

        if (last == x[i]) {
            inClump = true;
        } else {
            if(inClump==true){
                clumps++;
            }

        }

        last = x[i];
    }

    if(inClump==true){
        ++clumps;
    }

    return clumps;
}

function evenlySpaced(a,b,c){

    var x = [a,b,c];

    x = x.sort(function(a, b){return b-a});

    if( (x[1]-x[0]) == (x[2]-x[1])){

        return true;
    }
    return false;
}

}

