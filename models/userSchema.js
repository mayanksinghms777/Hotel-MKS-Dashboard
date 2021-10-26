const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const autoIncrement = require("mongoose-auto-increment")

const userSchema = new mongoose.Schema({
    email :{
        type :String,
        required : true
    },
    name :{
        type :String,
        required : true
    },
    age :{
        type :String,
        required : true
    },
    gender :{
        type :String,
        required : true
    },
    phone :{
        type :Number,
        required : true
    },
    address :{
        type :String,
        required : true
    },
    salary :{
        type :String,
        required : true
    },
    joining_date :{
        type :String,
        required : true
    },
    password :{
        type :String,
        required : true
    }

})

//hashing password

userSchema.pre('save',async function(next){
    console.log("hii from inside")
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,5)
    }
    next();
})

//collection create

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin,'LOGIN');
userSchema.plugin(autoIncrement.plugin, {
    model: 'LOGIN',
    field: '_id',
    startAt: 0,
    incrementBy:1
});

const Login = new mongoose.model("LOGIN", userSchema);

module.exports = Login;


