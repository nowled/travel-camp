function average(scores){
    var total = 0;
    
    
    scores.forEach(function(score){
          
          total += score;
        
    });
    
    var avg = total/scores.length;
    
    return Math.round(avg);
    
}
   var scores = [22,33,22,22,22,22,31];

console.log(average(scores));