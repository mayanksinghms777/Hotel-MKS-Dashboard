const mongoose = require("mongoose")
const autoIncrement = require("mongoose-auto-increment")

const vehicleSchema = new mongoose.Schema({
    vehicle :{
        type :String,
        required : true
    },
    vehicle_no :{
        type :String,
        required : true
    },
    seating_capicity :{
        type :Number,
        required : true
    },
    type :{
        type :String,
        required : true
    },
    driver_name :{
        type :String,
        required : true
    },
    buying_date :{
        type :String,
        required : true
    }

})


//collection create

autoIncrement.initialize(mongoose.connection);
vehicleSchema.plugin(autoIncrement.plugin,'VECHICLE');
vehicleSchema.plugin(autoIncrement.plugin, {
    model: 'VECHICLE',
    field: '_id',
    startAt: 0,
    incrementBy:1
});

const Vehicle = new mongoose.model("VECHICLE", vehicleSchema);

module.exports = Vehicle;


