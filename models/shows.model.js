const { default: mongoose } = require("mongoose");

// create schema
// schema is bluprint of what our data looks like!!

const ShowSchema = new mongoose.Schema({

    name: {
        type: String,  // this means that the data can be a string
        required: true, //this means that the field must contain something and not null
    },

    description: {
        type: String,
        required: false
    },
    ratings: {
        maxRating: {
            type: Number,
            required: true
        },
        averageRating: {
            type: Number,
            default: 0,

        }
    },
    format: {
        type: String,
        required: true
    },
    genre: {
        type: Array,
        required: true
    },
    certificate: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        require: true
    },
    banners: {
        type :Array ,
        require: true
    },
    languages: {
        type :Array ,
        require: true
    }
},
{
    timestamps: true
}


)


const ShowsModel = mongoose.model("shows", ShowSchema )

module.exports = ShowsModel;
