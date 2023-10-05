const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const fs = require('fs');

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.use(express.static(__dirname));

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
    // res.send('This is home router');

});

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req,res) => {
    fs.readFile(path.join(__dirname, 'user.json'), 'utf8', (err, data) => { // Read JSON file and get JSON string
        const jsonData = JSON.parse(data); // convert the JSON string into a JavaScript object
        res.json(jsonData);
    // res.send('This is profile router');
    });
});

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.get('/login', (req,res) => {
    const { username, password } = req.query;
    fs.readFile(path.join(__dirname, 'user.json'), 'utf8', (err, data) => { // Read JSON file and get JSON stringa
        if (err) {
            console.error(err);
            res.status(500).json({
                status: false,
                message: 'Internal Server Error'
            });
            return;
        }
        const jsonData = JSON.parse(data);
        console.log(jsonData)
        if (username !== jsonData.username){
            if (password != jsonData.password){
                res.json({
                    status: true,
                    message: "User Is valid"
                })
            }else{
                res.json({
                    status: false,
                    message: "User Name is invalid"
                })
            };
        }else{
            if(password !== jsonData.password){
                res.json({
                    status: false,
                    message: "Password is invalid"
                })
            }else{
                res.json({
                    status: true,
                    message: "Valid User!"
                })
            }
        }

        
    });
  // res.send('This is login router');
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout/:username', (req,res) => {
    const {username} = req.params;
    res.send(`<b>${username} successfully logout.<b>`)
  // res.send('This is logout router');
});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));