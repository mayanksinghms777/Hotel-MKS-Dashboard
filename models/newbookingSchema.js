const mongoose = require("mongoose")
const autoIncrement = require("mongoose-auto-increment")

const newbookingSchema = new mongoose.Schema({
    firstname :{
        type :String,
        required : true
    },
    lastname :{
        type :String,
        required : true
    },
    phone :{
        type :Number,
        required : true
    },
    email :{
        type :String,
        required : true,
    },
    address :{
        type :String,
        required : true
    },
    city :{
        type :String,
        required : true
    },
    state :{
        type :String,
        required : true
    },
    zip :{
        type :Number,
        required : true
    },
    type :{
        type :String,
        required : true
    },
    roomtype :{
        type :String,
        required : true
    },
    roomnumber :{
        type :Number,
        required : true
    },
    num_guest :{
        type :Number,
        required : true
    },
    arrivaldate :{
        type :String,
        required : true
    },
    arrivaltime :{
        type :String,
        required : true
    },
    paymentmode :{
        type :String,
        required : true
    },
    totalpayment :{
        type :Number,
        required : true
    },

})


//collection create

autoIncrement.initialize(mongoose.connection);
newbookingSchema.plugin(autoIncrement.plugin,'NEWBOOKING');
newbookingSchema.plugin(autoIncrement.plugin, {
    model: 'NEWBOOKING',
    field: '_id',
    startAt: 0,
    incrementBy:1
});

const Newbooking = new mongoose.model("NEWBOOKING", newbookingSchema);

module.exports = Newbooking;


