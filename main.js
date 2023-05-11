
class Student {
	rollNo
	studentName
	
	phoneNo
	address
	bloodGroup
	constructor(studentObject) {
		this.studentName = studentObject.studentName;
		this.rollNo = studentObject.rollNo;
		this.phoneNo = studentObject.phoneNo;
		this.address = studentObject.address;
		this.bloodGroup = studentObject.bloodGroup;
	}
	get generateRow(){
		let rowEle= document.createElement("tr"),
		rollnoEle= document.createElement("td"),
		nameEle= document.createElement("td"),
		actionEle= document.createElement("td"), 
		button=document.createElement("button");

		rollnoEle.innerText=this.rollNo;
		nameEle.innerText=this.studentName;
		button.innerText="Update";

		actionEle.append(button);
		rowEle.append(rollnoEle);
		rowEle.append(nameEle);
		rowEle.append(actionEle);

		return rowEle;
	}
	getStudentDetails(){
		let studentDetails ={
			"studentName" : this.studentName,
			"rollNo" : this.rollNo,
			"phoneNo" :this.phoneNo

		};
		return studentDetails
		
	}
}

let students = [];

function studentRecords(e) 
{

	e.preventDefault();

	let formElement = this;
	let formData = collectFormData(formElement);

	let studentObj = new Student(formData); 
	let studentRow =studentObj.generateRow;
	let updateBtn=studentRow.getElementsByTagName("button")[0];
	// console.log(updateBtn);
	rollNo=formData.rollNo;
	insertData(studentRow);
	students.push(new Student(studentObj));


	updateBtn.addEventListener("click",function(){
		let studentDetails= studentObj.getStudentDetails();
		console.log(studentDetails);
	})
	document.getElementsByName("rollNo")[0].value = students.length + 1;

	console.log(students);

}

function collectFormData(formElement) {

	var newFormElement = new FormData(formElement);

	let formDataObj = {};
	
	newFormElement.forEach(function (value, prop) {
		formDataObj[prop] = value;

	});
	return formDataObj;
}

function insertData(row){
	tableElement.append(row);

}
var signupElement = document.getElementById("signup");
var tableElement = document.getElementById("student-table");
signupElement.addEventListener("submit", studentRecords);