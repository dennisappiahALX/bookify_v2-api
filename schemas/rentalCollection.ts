import mongoose from "mongoose";
import RentalModel from "../models/rental";
import Joi from "joi"


export const Rental = mongoose.model('Rental', new mongoose.Schema({
    customer : { 
       type : new mongoose.Schema({
        name : { 
            type : String, 
            required : true, 
            minlength : 5 ,
            maxlength : 50},
        isGold : {
            type : Boolean,
            default : false
        },
        phone : { 
            type : String, 
            required : true, 
            minlength : 5 , 
            maxlength : 50}
       }),
       required : true
        },

    book : {
      type : new mongoose.Schema({
        title : { 
            type : String, 
            required : true, 
             minlength : 5 ,
             maxlength : 255,
             trim : true
            },
        dailyRentalRate : {
            type : Number,
            required : true,
            min : 0,
            max : 255
        }    
        }),
      required : true
    },

    dateOut : {
        type : Date,
        required : true,
        default : Date.now()
    },

    dateReturned : {
        type : Date   
    },

    rentalFee : {
        type : Number,
        min : 0   
    }

}));

export const validateRental = (rental: RentalModel ) => {
    const schema = Joi.object({ 
        customer: Joi.object({
            name: Joi.string().min(5).max(50),
            isGold: Joi.boolean(),
            phone: Joi.string().min(5).max(50),
            customerId : Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
        }),
        book : Joi.object({
            title: Joi.string().min(5).max(50),
            dailyRentalRate: Joi.number().min(5).max(50),
            bookId : Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
        }),
        rentalFee: Joi.number().min(5).max(50),
    });
    
    return schema.validate(rental);
};