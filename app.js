var express = require('express')
var path = require('path')
var mongoose = require('mongoose')
var Movie = require('../models/movie')
var port = process.env.Port || 3000
var app = express()
var _ = require('underscores')

mongoose.connect('mongodb://127.0.0.1/imooc')

app.set('views',path.join(__dirname,'./views/pages'))
app.set('view engine','jade')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded())
app.use(express.static(path.join(__dirname, 'bower_components')))
app.listen(port)

console.log('start on ' + port)

app.get('/',function(req,res){
	Movie.fetch(function(err,movies){
		if(err){
			console.log(err)
		}
		res.render('index',{
			title:'首页',
			movies:movies
		})
	})
})

app.get('/movie/:id',function(req,res){
	var id = req.params.id
	Movie.findById(id,function(err,movie){

		res.render('detail',{
			title:'列表页' + movie.title,
			movie: movie
		})
	})

})

app.get('/admin/list',function(req,res){
	res.render('list',{
		title:'列表页'
	}
	)
})

app.get('/admin/movie',function(req,res){
	res.render('admin',{
		title:'后台管理页',
		movie:{
			title:'',
			doctor:'',
			country:'',
			year:'',
			poster:'',
			flash:'',
			summary:'',
			language:''
		}
	})
})