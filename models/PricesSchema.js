const mongoose = require("mongoose")

const PricesSchema = new mongoose.Schema({
    single_AC :{
        type :String,
        required : true
    },
    double_AC :{
        type :String,
        required : true
    },
    triple_AC :{
        type :String,
        required : true
    },
    four_AC :{
        type :String,
        required : true
    },
    single_NONAC :{
        type :String,
        required : true
    },
    double_NONAC :{
        type :String,
        required : true
    },
    triple_NONAC :{
        type :String,
        required : true
    },
    four_NONAC :{
        type :String,
        required : true
    }

})

//collection create
const Prices = new mongoose.model("PRICES", PricesSchema);

module.exports = Prices;


