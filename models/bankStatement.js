var mongoose = require("mongoose");

const Schema = mongoose.Schema;

let BankStatement = new Schema({
    username:{
        type: String
    },
    password:{
        type: String
    },
    balance: {
        type: integer
    }
});

export default mongoose.model('BankStatement', BankStatement);