const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));

users = [
{'name': 'yoni', 'password': 1234},
{'name': 'dudi', 'password': 4321},
{'name': 'shani', 'password': 4411}]
    
app.post('/login', (req, res) => {
    const nameForm = req.body.name;
    const passwordForm = req.body.password;
    for (let i = 0; i < users.length; i++) {
        console.log(users[i].name);
        console.log(users[i].password);
      if (users[i].name == nameForm && users[i].password == passwordForm) {
        console.log('login success!!!');      
        res.send('OK!')
    }
    else {
        console.log('no sucess!');
    }
}
  });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})


