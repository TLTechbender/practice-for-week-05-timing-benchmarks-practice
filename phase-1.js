// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in
   let answer=0
	for(let i=1; i<=n ; i++){
    answer+=i;

}
return answer;
}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
 let answer=0;

	for(let i=0; i<=n; i++){
         answer+= addNums(i);

	}
return answer;
}

const startTime = Date.now();
    addNums(10000000);
    const endTime = Date.now();
 console.log(`${endTime} - ${startTime}`);




const StartTime = Date.now();
addManyNums(100);
const EndTime = Date.now();
console.log(`${EndTime} - ${StartTime}`);



module.exports = [addNums, addManyNums];




