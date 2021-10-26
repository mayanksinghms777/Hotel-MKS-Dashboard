const mongoose = require("mongoose")
const autoIncrement = require("mongoose-auto-increment")

const roomSchema = new mongoose.Schema({
    room_no :{
        type :String,
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
    meal :{
        type :String,
        required : true
    },
    amount :{
        type :String,
        required : true
    }

})


//collection create

autoIncrement.initialize(mongoose.connection);
roomSchema.plugin(autoIncrement.plugin,'ROOM');
roomSchema.plugin(autoIncrement.plugin, {
    model: 'ROOM',
    field: '_id',
    startAt: 0,
    incrementBy:1
});

const Room = new mongoose.model("ROOM", roomSchema);

module.exports = Room;


