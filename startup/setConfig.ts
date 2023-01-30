import dotenv from 'dotenv'
dotenv.config()

export const setupConfig = ():void => {
   
    console.log(`Application Name: ${process.env.NAME}`);
}