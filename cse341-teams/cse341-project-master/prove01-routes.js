const fs = require('fs');
const { restart } = require('nodemon');
const router = require('./routes/ta01');

const users = ['User 1','User2'];

const requestHandler = (req,res) =>{
    const url = req.url;
    const method = req.method;

    if (url == '/'){
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<head><title>Prove wk 1</title></head>');
        res.write('<body><h1>Welocome new user</h1></body>');
        res.write(('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'))
        res.write('</html>');
        return res.end()
      }
  
      if (url == '/users'){
          res.setHeader('Content-type','text/html');
          res.write('<html>');
          res.write('<head><title>Users</title></head>');
          res.write('<body>');
          res.write('<ul>');
          for(const user of users){
              res.write(`<li>${user}</li>`);
          }
          res.write('</ul>');
          res.write('</body>');
          res.write('</html>');
          return res.end();
      }
  
      if (url === '/create-user'){
          const body =[];
          req.on('data',(chunk) =>{
              body.push(chunk);
          });
          req.on('end',() =>{
              const parsedBody = Buffer.concat(body).toString();
              const newUser = parsedBody.split('=')[1];
              console.log(newUser);
              users.push(newUser);
          });
          res.statusCode = 302;
          res.setHeader('Location','/');
          res.end();
  
      }
};
module.exports = requestHandler;