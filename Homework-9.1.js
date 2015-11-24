
console.assert (add(1,1)==2,"add function1 false"); 
console.assert (add(1,3)==4,"add function2 false");

function add(x,y) {
 var result = x + y;
    return result;

}

 
console.assert(sub(3,2)==1,"sub function1 false");
console.assert(sub(4,2)==2,"sub function2 false");

function sub(x,y){
    var result = x - y;
    return result;
}

console.assert(mult(2,4)==8,"mult function1 false");
console.assert(mult(2,3)==6,"mult function2 false");
console.assert(mult(9,0)==0,"mult function3 false");

function mult(x,y){
    var result = x * y;
    return result;
}


console.assert(div(4,2)==2,"div function1 false");
console.assert(div(4,4)==1,"div function2 false");
console.assert(div(0,4)==0,"div function3 false");

function div(x,y){
     var result = x / y;
     return result;
 }

// Michael, John, Gabriel
