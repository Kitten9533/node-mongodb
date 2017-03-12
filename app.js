var express = require('express')
var port = process.env.Port || 3000
var app = express()

app.set('views','./views')
app.set('view engine','jade')
app.listen(port)

console.log('start on ' + port)

app.get('/',function(req,res){
	res.render('index',{
		title:'首页'
	})
})

app.get('/movie/:id',function(req,res){
	res.render('detail',{
		title:'详情页'
	})
})

app.get('/admin/list',function(req,res){
	res.render('list',{
		title:'列表页'
	})
})

app.get('/admin/movie',function(req,res){
	res.render('admin',{
		title:'后台管理页'
	})
})