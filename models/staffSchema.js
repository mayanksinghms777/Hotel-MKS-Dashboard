const mongoose = require("mongoose")
const autoIncrement = require("mongoose-auto-increment")

const staffSchema = new mongoose.Schema({
    firstname :{
        type :String,
        required : true
    },
    designation :{
        type :String,
        required : true
    },
    phone_no :{
        type :Number,
        required : true
    },
    email :{
        type :String,
        required : true
    },
    joining_date :{
        type :String,
        required : true
    },
    gender :{
        type :String,
        required : true
    }

})


//collection create

autoIncrement.initialize(mongoose.connection);
staffSchema.plugin(autoIncrement.plugin,'STAFF');
staffSchema.plugin(autoIncrement.plugin, {
    model: 'STAFF',
    field: '_id',
    startAt: 0,
    incrementBy:1
});

const Staff = new mongoose.model("STAFF", staffSchema);

module.exports = Staff;


