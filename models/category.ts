export default class Category {
    id: number
    constructor(
        public name: string, 
        ) {
        this.id = Date.now()
    }
}