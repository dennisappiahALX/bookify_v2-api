export default class Book {
    id: number
    constructor(public title: string) {
        this.id = Date.now()
    }
}