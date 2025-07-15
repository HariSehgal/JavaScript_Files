const student = {
    name : "Hari",
    age : 19,
    marks : 96,
    city : "Delhi",
    language : ["hindi","english"]
};

console.log(student);
console.log(student["name"]);
console.log(student.age);
console.log(student["language"][0][0]);
student["city"] = "Mumbai";
console.log(student);
student["gender"] = "Female";
console.log(student);
student["marks"] = "A";
console.log(student);
delete student.gender;
console.log(student);

//Creating a Post or Thread
const post = {
    username : "@HariSehgal",
    content : "This is my #firstPost",
    likes : 150,
    repost : 5,
    tags : ["@apnaCollege" , "@Delta"]
};

console.log(post);

//Nested objects
const classInfo ={
    hari : {
        grade : "A+",
        city : "Delhi"
    },
    vansh : {
        grade : "A",
        city : "Pune"
    },
    doraksh : {
        grade : "B+",
        city : "Gurugram"
    }
};

console.log(classInfo);

//Array Of objects
const Class = [
    {
        name : "Hari",
        grade : "A+",
        city : "Delhi"
    },
    {
        name : "vansh",
        grade : "A",
        city : "Pune"
    },
    {
        name : "doraksh",
        grade : "B+",
        city : "Gurugram"
    }
];

console.log(Class);
