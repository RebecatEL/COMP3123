var http = require("http");
var url = require("url")
var querystring = require("querystring")

//TODO - Use Employee Module here
const { Employees, employees } = require("./Employee"); 

console.log("Lab 03 -  NodeJs");
const { response } = require("express");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method != 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"

            res.write("<h1> Welcome to Lab Exercise 03</h1>"); 
            
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.write(JSON.stringify(employees)); 
            
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            const fullName = employees.map(employee => (
                `${employee.firstName} ${employee.lastName}`));
            fullName.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
            res.write(JSON.stringify(fullName));
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format
            //e.g. { "total_salary" : 100 }  
            const sum = employees.reduce((accumulator, employee) => accumulator + employee.Salary, 0);
            const totalSalary = { total_salary: sum };
            res.write(JSON.stringify(totalSalary));
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})