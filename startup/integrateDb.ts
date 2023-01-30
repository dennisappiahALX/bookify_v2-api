import mongoose from "mongoose"

export const setupDb = ():void => {
    mongoose.connect(`${process.env.DB}`)
       .then(() => console.log('Connected to MongoDb....'))
       .catch(err => console.log("Could not connect to MongoDb.."))
}
