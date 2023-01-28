import mongoose from "mongoose"

export const setupDb = ():void => {
    mongoose.connect('mongodb://localhost/bookify')
       .then(() => console.log('Connected to MongoDb....'))
       .catch(err => console.log("Could not connect to MongoDb.."))
}
