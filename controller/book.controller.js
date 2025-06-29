const { Book } = require("../model/book.model");



const handleBookStoreController = async (req, res) => {

    try {

        const body = req.body;


        if (!body.BookName || !body.BookTitle || !body.Author || !body.SellingPrice) {
            return res.status(400).json({ Message: "All data required", Success: false });

        }

        const bookAdd = await Book.insertOne(body);


        if (bookAdd) {
            return res.status(201).json({ Message: "data created successfully", success: true, Id: bookAdd?._id });

        }

    }
    catch (error) {
        return res.status(500).json({ Message: error.message, Success: false });
    }

};

const handleBookListController = async (req, res) => {

    try {
        const bookList = await Book.find({});
        // console.log("bookssss",bookList);

        return res
            .status(200)
            .json({ Message: "All books fetched successfully", Success: true, TotalCount: bookList.length, BookList: bookList });

    } catch (error) {
        return res.status(400).json({ Message: error.message, Success: false });

    }
}

const handleBookDeleteController = async (req, res) => {
    console.log("reached deletecontrollewefkjrhgc");

    const body = req.body
    console.log("uuuuuuuuuuuuuuuuu", body);

    try {
        const deleted = await Book.deleteOne({ _id: body.Id });

        if (deleted.acknowledged) {
            return res
                .json({
                    Message: "Book deleted successfully !",
                    Success: true,
                });


        }

    }
    catch (error) {
        return res.status(400).json({ Message: error.message, Success: false });

    }
};

const handleBookUpdateController = async (req, res) => {
    try {
        console.log("request body",req.body)
        const body = req.body;  


        const updating = await Book.updateOne({ _id: body?.Id }, { $set: body });
        console.log("hhhh",updating)

        if (updating?.acknowledged) {
            return res.json({
                Message: "Book updated successfully",
                Success: true,
            })
        }
    }
    catch (error) {
        return res.status(400).json({ Message: error.message, Success: false });

    }
}


module.exports = {
    handleBookStoreController,
    handleBookListController,
    handleBookDeleteController,
    handleBookUpdateController
};