// import express from "express";
const express = require('express')
const exampleModule = require('example-module')


const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/hello', (req, res) => {
  res.send('HOLA MARSHALL' + req.query.myvar)
})

app.get('/hello', (req, res) => {
  res.send('HOLA MARSHALL' + req.query.myvar)
})




app.get('/api/hello', (req, res) => {
  res.json({msg: 'ADIOS MARSHALL'})
})

app.get('/api/encrypt', (req, res) => {
  const encrypted = exampleModule.encrypt(req.query.plaintext ?? '')
  res.json({encrypt: 'Cifrado: ' + encrypted})
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})