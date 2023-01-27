import {Router} from "express"
import Book from "../models/books";
import createBookDto from './../dtos/create-book';

const router = Router();
const books: Book[] = []

router.get('/', (req, res) => {
    res.send('List of books')
});


router.post('/', (req, res) => {
    const {title} = req.body as createBookDto
    const book = new Book(title);
    books.push(book);
    res.status(201).json(book);
})

export default router