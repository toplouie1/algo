// create table dash (
//     resourceFor text[],
// )

// insert into dash (resourceFor)
// values
// ( ARRAY["highschool" , "college" , "continue Learning"])

// inorder to filter the college programs that are for college has a program
// categories and is varified .
let collegeProgram = college.filter((high) => {
	// ["highSchool" , "college" , "Continue Learning "]
	return (
		high.resource_category === "Program" &&
		high.is_verified === true &&
		high.resourceFor.includes(college)
	);
});
