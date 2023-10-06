const { default: mongoose } = require("mongoose");
// mongodb+srv://<username>:<password>@cluster0.iffbd.mongodb.net/
// console.log(process.env.Node_Environment)
// ycyb0uN145eOmUJo

async function init (){

    let URI = `${process.env.MongoDB_url}/${process.env.DB_name}`;
    if(process.env.Node_Environment === "production"){
        URI= `mongodb+srv://${process.env.MongoDB_username}:${ process.env.MongoDB_password}@cluster0.iffbd.mongodb.net/${process.env.DB_name}`
    }
    try {
        await mongoose.connect(URI);
        console.log( "MONGO_DB IS CONNECTED TO HTTP-SERVER  ")
     } catch (error) {
         console.log( "Error", error)
     }
}

module.exports = {
    init,
}