import { Categories } from './type';

export class Rayon {

    private produits: null;
    private type: Categories;

    constructor(produits: null, type: Categories) {
        this.produits = produits;
        this.type = type;
    }

    getProduit(): null {
        return this.produits
    }

    getType(): Categories {
        return this.type
    }
}