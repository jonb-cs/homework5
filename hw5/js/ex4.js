//Declare studentList Array
const studentList = [
  {
   firstName: "Allan",
   lastName: "Able",
   scores: [95,85,92,98]
   },
   {
   firstName:"Amy",
   lastName:"Alexander",
   scores:[80,88,100]
   },
   {
   firstName:"Betty",
   lastName:"Barns",
   scores:[70,80,90,100]
   },
   {
   firstName:"Bob",
   lastName:"Bones",
   scores:[75,85,95,85]
   },
   {
   firstName:"Cindy",
   lastName:"Chase",
   scores:[95,90,92,98]
   },
   {
   firstName:"Charles",
   lastName:"Chips",
   scores:[88,99,90]
   },
   ];
 
   cLastNameResults = studentList.filter(students => students.lastName.toLocaleLowerCase().startsWith("c")).map(student => {
     return {
       firstName: student.firstName,
       lastName: student.lastName,
       minScore: Math.min(...student.scores),
       maxScore: Math.max(...student.scores),
       avgScore: student.scores.reduce(function (sum, value) {
         return sum + value;
       }, 0) / student.scores.length
     }
   })
   //Output
  //  console.log(cLastNameResults);
  
  // Ex 4 Tasks:
  //*********/ a. updated all scores with 5 extra credit bonus points /******/
  // use an outer loop to iterate accross the studentList array then use an inner loop to iterate scores array

  // Method 1 - compare against hardcode values 
  // studentList.forEach((student, index) => {
  //   student.scores.forEach((score, exam) => {
  //     student.scores[exam] = score + 5;
  //   })
  // });

  // Method 2 traditional nest for-loops - Compare to hardcore values 
  for (let i =0; i < studentList.length; i++) {
    for (j = 0; j < studentList[i].scores.length; j++) {
      studentList[i].scores[j] = studentList[i].scores[j] + 5;
    }
  }

  /****** b. Missing Exam Score ************/
  // calculate an average exam score and then add that score to score array 

  // iterate over each student on the list, push an average of thier scores to the scores array
  studentList.forEach((student, index) => {
    student.scores.push(student.scores.reduce( function (sum, value) {
      return sum + value;
    },0 ) / student.scores.length)
  })
// console.log(studentList[0].scores);

/**** C. Now dispay the update scores */
studentList.forEach((student, index) => {
  console.log(`Full name: ${student.firstName}, ${student.lastName}`);
  console.log(`Updated scores are: ${student.scores}`)
})