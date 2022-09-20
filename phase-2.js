const [addNums, addManyNums] = require("./phase-1.js");

// Runs `addNums` in 10 increasing increments
function addNums10(inc) {
  // Fill this in
  let answer=[];
  
    for(let i=inc; i<=10*inc; i+=inc){
     answer.push(addNums(i));

    }



            


	return answer;
}



// Runs `addManyNums` in 10 increasing increments
function addManyNums10(inc) {
  // Fill this in
  let answer=[];
  
    for(let i=inc; i<=10*inc; i+=inc){
     answer.push(addManyNums(i));

    }



            


	return answer;

}

module.exports = [addNums10, addManyNums10];
