//  business logic/ function to be used inside show router

// import the shows model here to make us of the schema
const ShowsModel = require("../models/shows.model")


async function getallShows(req, res, next) {
    // inject shows model here
    try {
        const response = await ShowsModel.find();

        if (response && response.length > 0) {
            console.log(response)
            return res.status(200).json({
                success: true,
                message: " Fetched all shows🔥🔥",
                data: response,
            })

        } else {
            return res.status(200).json({
                success: true,
                message: " NO shows found",
                data: response,
                data: []
            })
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
            message: "something went wrong",
        })

    }

}

async function getAShow(req, res, next) {
    let { showId } = req.params;
    console.log("showId", showId)

    if (showId.length != 24) {
        return res.status(400).json({
            success: false,
            message: "Invalid object ID and less than 24 numbers"
        })
    }

    ShowsModel.findById({ _id: showId }).then((response) => {

        if (response._id) {
            return res.status(200).json({
                message: `fetched a show with matching ID: ${showId} `,
                data: response,
            })
        } else {
            return res.status(200).json({
                message: "No show found",
                data: response,
            })
        }
    }).catch((error) => {

        return res.status(400).json({
            success: false,
            error: error.message,
            message: "something went wrong and this object id doesn't exist",
        })
    })
}

async function createAShow(req, res, next) {
    // create a new data in the collection using the model structure
    const Show = new ShowsModel(req.body);

    //  save in db
    Show.save().then((response) => {
        if (response && response._id) {
            return res.status(200).json({
                success: true,
                message: " created a new show  successful",
                data: {},
            });
        } else {

            return res.status(400).json({
                success: false,
                error: " creating a new show  is unsuccessful",
                data: {},
            });
        }

    }).catch((error) => {

        return res.status(400).json({
            success: false,
            error: error.message,
            message: "something went wrong",
        })
    })
}


module.exports = {
    getallShows,
    getAShow,
    createAShow
}