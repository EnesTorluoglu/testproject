const mongoose = require('mongoose');

const connectDataBase = async () => {
    try{
        await mongoose.connect('mongodb+srv://enestorluoglu:XA8TJ6KjyR7Envcx@democluster.kqywdg8.mongodb.net/userDatabase?retryWrites=true&w=majority&appName=DemoCluster');
        console.log("Connected to MongoDB");
    }catch(e){
        console.error(e);
    }
}

module.exports = connectDataBase;