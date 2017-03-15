var mongoose = require('mongoose')
var db = mongoose.connection('mongodb://localhost/chihuo')
var userScheMa = mongoose.Schema({
	name:String,
	password:String
})
exports.user = db.model('users',userScheMa)
