var express = require('express')
var mongoose = require('mongoose')
var path = require('path')
var app = express()
var port = process.env.Port || 3000

app.set('views',path.join(__dirname,""))
app.set('view engine','html')
app.engine('.html',require('ejs').__express)


