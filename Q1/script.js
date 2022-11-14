let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 300,
   };
   function topSalary(salaries) {

    let maxSalary = 0;
    let maxNameSalary = [];
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
      }
    }
    maxNameSalary=Object.entries(salaries).filter(e=>e[1] ==maxSalary);
    // console.log(maxNames);
    let x=Object.fromEntries(maxNameSalary);
    // console.log(x);
    return Object.keys(x);
  }
  let x=topSalary(salaries)

  console.log(x);

 

