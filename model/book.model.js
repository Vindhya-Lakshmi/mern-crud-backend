const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    BookName:{
        type:String,
        reqired:true
    },
    BookTitle:{
        type:String,
        require:true
    },
    Author:{
        type:String,
        required:true
    },
    SellingPrice:{
        type:String,
        required:true,
    },
    PublishDate:{
        type:String,
    },
},
{timestamps: true}
);


const Book = mongoose.model("book", bookSchema);

module.exports = {Book};