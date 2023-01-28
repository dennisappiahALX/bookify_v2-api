import coursesRouter from "../routers/courses"
import booksRouter from "../routers/books"
import categoriesRouter from "../routers/categories"
import customersRouter from "../routers/customers"
import express from "express"

export const setupRoutes = (app: any) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended : true }));
    app.use('/api/courses', coursesRouter);
    app.use('/api/books', booksRouter);
    app.use('/api/categories/', categoriesRouter);
    app.use('/api/customers/', customersRouter);
}
