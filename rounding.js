function rounding(first,second){
    if(second > 15){
        second = 15;
    }
    
    result = parseFloat(first.toFixed(second));
    console.log(result)
}
rounding(10.5,3);