const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    expense_name : {
        type: String
    },
    vendor_name : {
        type: String
    },
    date : {
        type: Date
    },
    credit : {
        type: Number,
        default: 0
    },
    debit : {
        type: Number,
        default: 0
    },
    description: {
        type: String
    },
    status:{
        type: Number,
        enum: [0, 1, 2],
        default: 1
    }
})

expenseSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.expense_id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});

// we will create new collection
const Expenses = new mongoose.model('Expenses', expenseSchema);

module.exports = Expenses;