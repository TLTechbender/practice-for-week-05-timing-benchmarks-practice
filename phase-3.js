const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(inc) {
  // Copy your `addNums10` code here
  // Then, add timing code

  // Your code here
	//
	//Because my functions were calling so many things at the same time, I needed help to use console.time for this.
let answer=[];
  
    for(let i=inc; i<=10*inc; i+=inc){
        console.time(`Timer for increment ${i}`);
	    let startTime=Date.now();
	    let result = addNums(i);
               let endTime= Date.now();

	    console.timeEnd(`Timer for increment ${i}`);
	    console.log(`Runtime; ${endTime - startTime}ms`);
	    answer.push(result);
    }



            


	return answer;

}


function addManyNums10Timing(inc) {
// Copy your `addManyNums10` code here
// Then, add timing code

  // Your code here
   let answer=[];
  
    for(let i=inc; i<=10*inc; i+=inc){
   	
     console.time(`Timer for increment ${i}`)


	    let startTime= Date.now();
	    let result = addManyNums(i);
          let endTime= Date.now();
          console.timeEnd(`Timer for increment ${i}`);
	    console.log(`Runtime; ${endTime - startTime}ms`)
           answer.push(result);
    }



            


	return answer;
}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
