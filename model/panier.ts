import { Produit } from './produit';

export class Panier {

    private produits: Array<Produit>;
    private total: number;

    constructor(produit: Array<Produit>, total: number) {
        this.produits = produit;
        this.total = total;
    }

    getProduit() {
        return this.produits;
    }

    getTotal() {
        return this.total;
    }

    addProduit(produit: Produit) {
        this.produits.push(produit);
    }
}