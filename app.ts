import express from "express"
import booksRouter from "./routers/books"

const app = express();

app.use('/books', booksRouter);

app.listen(8000, () => console.log('Server has started'))