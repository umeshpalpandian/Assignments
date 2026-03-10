let num1: number = 10;
let num2: number = 3.14;
console.log(num1);
console.log(num2);


let empName: string = 'Umesh';
let place: string = "Hyde'r'abad"; // replace place to location showing error 
let company: string = `Valuelabs`;
console.log(empName);
console.log(place);
console.log(company);


let empAddress: String | number | boolean ="123 main road";
console.log(empAddress);

empAddress = 12345;
console.log(empAddress);

empAddress = true;
console.log(empAddress);



interface personinfo {
    name: string,
    empID: number,
    visastatus: boolean,
    address: {
        city: string,
        state: string,
        zip: number,


    }

}



let person : personinfo{
    name:"umesh",
    empID:1234,
    visastatus:true,
    address
     {
        city: Hyderabad,
        state : TS,
        zip: 500085

    }
}


console.log(person);
