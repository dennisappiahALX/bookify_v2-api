interface Category {
    name: string
}

export default class Book {
    id: number
    constructor(
        public title: string, 
        public category: Category, 
        public numberInStock: number, 
        public dailyRentalRate: number ) {
        this.id = Date.now()
    }
}