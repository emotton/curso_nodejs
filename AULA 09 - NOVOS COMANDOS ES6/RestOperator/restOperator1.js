function testandoRest(a, b, ...theArgs) {
    console.log(a, b, theArgs); 
}
testandoRest(1, 2, 3, 4, 5);
function testandoRest2(...theArgs) {
    console.log(theArgs); 
}
testandoRest2(1, 2, 3, 4, 5);