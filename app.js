var express = require('express')
var path = require('path')
var port = process.env.Port || 3000
var app = express()

app.set('views',path.join(__dirname,'./views/pages'))
app.set('view engine','jade')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded())
app.use(express.static(path.join(__dirname, 'bower_components')))
app.listen(port)

console.log('start on ' + port)

app.get('/',function(req,res){
	res.render('index',{
		title:'首页',
		movies:[{
			title:'电影',
			_id:1,
			poster:'/img/pic.jpg'
		},
		{
			title:'电影',
			_id:1,
			poster:'/img/pic.jpg'
		},
		{
			title:'电影',
			_id:1,
			poster:'/img/pic.jpg'
		},
		{
			title:'电影',
			_id:1,
			poster:'/img/pic.jpg'
		}]
	})
})

app.get('/movie/:id',function(req,res){
	res.render('detail',{
		title:'列表页',
		movie:{
			title:'机械战警',
			id:1,
			doctor:'Doctor',
			country:'美国',
			year:2014,
			language:'英语',
			flash:'http://player.youku.com/embed/XNjU1OTk2ODc2'
		}
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