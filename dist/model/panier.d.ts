import { Produit } from './produit';
export declare class Panier {
    private produits;
    private total;
    constructor(produit: Array<Produit>, total: number);
    getProduit(): Produit[];
    getTotal(): number;
    addProduit(produit: Produit): void;
}
