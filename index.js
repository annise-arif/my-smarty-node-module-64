const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World get response sending!')
});

const users = [
    {id: 1, name: 'sabana', email: 'sabana@gmail.com', phone: '017654365'},
    {id: 2, name: 'somaya', email: 'somaya@gmail.com', phone: '017644765'},
    {id: 3, name: 'lamiya', email: 'lamiya@gmail.com', phone: '01766t44765'},
    {id: 4, name: 'soniya', email: 'soniya@gmail.com', phone: '0176611765'},
    {id: 5, name: 'sorna', email: 'sorna@gmail.com', phone: '017663765'},
    {id: 6, name: 'sanjida', email: 'sanjida@gmail.com', phone: '0176546765'},
    {id: 7, name: 'sochmita', email: 'sochmita@gmail.com', phone: '0176656365'},
]

app.get('/users', (req, res) => {
  //filter by search query parameter
  if(req.query.name){
    const search = req.query.name.toLowerCase();
    const matched = users.filter(user => user.name.toLowerCase().includes(search));
    res.send(matched);
  }
  else{
    res.send(users);
  }
});

app.get('/users/:id', (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  res.send(user);
});

app.post('/user', (req, res) =>{
  console.log('request', req.body)
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user)
})

app.listen(port, () => {
  console.log('listening to port', port)
});