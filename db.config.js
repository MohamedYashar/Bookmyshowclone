const { default: mongoose } = require("mongoose");
// mongodb+srv://<username>:<password>@cluster0.iffbd.mongodb.net/
// console.log(process.env.Node_Environment)
// ycyb0uN145eOmUJo

async function init (){

    let URL = `${process.env.MongoDB_url}/${process.env.DB_name}`
    if(process.env.Node_Environment ==="production"){
        URL= `mongodb+srv://${process.env.MongoDB_username}:${ process.env.MongoDB_password}@cluster0.iffbd.mongodb.net/${process.env.DB_name}`
    }
    try {
        await mongoose.connect(`${process.env.MongoDB_url}/${process.env.DB_name}`);
        console.log( "MONGO_DB IS CONNECTED TO HTTP-SERVER  ")
     } catch (error) {
         console.log( "Error", error)
     }
}

module.exports = {
    init,
}