import { Produto } from "./Produto"

export interface ItemCarrinho {
    produto: Produto,
    quantidade: number
    _id: string
} 

export interface CarrinhoProdutos {
    _id: string,
    usuario: string
    produtos: ItemCarrinho[]
}