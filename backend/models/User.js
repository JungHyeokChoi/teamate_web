var mongoose = require('mongoose')
var bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },

    password : {
        type : String,
        required : true
    },
    
    username : String,
    createAt : {
        type : Date,
        default : Date.now
    }
})

UserSchema.pre('save', function(next){
    const document = this

    if(this.isNew || this.isModified('password')){
        bcrypt.hash(this.password, 10, function(err, hashedPassword){
            if(err){
                next(err)
            } 
            else {
                document.password = hashedPassword}
                next()
            }
        )
    } else {
        next()
    }
})

UserSchema.methods.isCorrectPassword = function(password, callback) {
    bcrypt.compare(password, this.password, function(err, same){
        if(err) {
            callback(err)
        } else {
            callback(err, same)
        } 
    })
}

module.exports = mongoose.model('User', UserSchema)