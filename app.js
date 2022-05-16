const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('Hello from the server!'))

app.post('/login', (req, res) => {
  console.log('Received login data!')

  const email = req.body.email
  console.log(email)
  const password = req.body.password
  console.log(password)

  if (email === 'test@test.com' && password === 'test') {
    console.log('We have a member! 😀')
    res.redirect('http://localhost:3000/members')
    return
  } 

  console.log('Not a member 😞')
  res.redirect('http://localhost:3000/login')
})

app.listen(3001, () => console.log('Server ready'))