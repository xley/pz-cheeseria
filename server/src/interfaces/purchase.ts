import ICheese from "./cheese";

export default interface IPurchase {
    id: string
    userId: string
    totalPrice: number
    totalItems: number
    dateTime: string
    cheeses: ICheese[]
}