const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
	//res.send('hello world')
	res.json({'nama':'adi setiawan'})
})

app.listen(port, ()=> {
	console.log('listening on port 3000')
})
