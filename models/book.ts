import mongoose from "mongoose";

export default class BookModel {
    constructor(
        public title: string, 
        public category: { name:string, categoryId: mongoose.Types.ObjectId},
        public numberInStock: number, 
        public dailyRentalRate: number ) {
    }
}