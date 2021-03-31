import { Categories } from './type';
import { Nutriscore } from './nutriscore';

export class Produit {

    private name: string;
    private prix: number;
    private qte: number;
    private poids: number;
    private conditionnement: string;
    private type: Categories;
    private ingredient: string;
    private nutriscore: Nutriscore;
    private DLC: Date;

    constructor(name: string, prix: number, qte: number, poids: number, conditionnement: string, type: Categories, ingredient: string, nutriscore: Nutriscore, DLC: Date) {

        this.name = name;
        this.prix = prix;
        this.qte = qte;
        this.poids = poids;
        this.conditionnement = conditionnement;
        this.type = type;
        this.ingredient = ingredient;
        this.nutriscore = nutriscore;
        this.DLC = DLC;
    }

    getName() {
        return this.name;
    }
    getPrix() {
        return this.prix;
    }
    getQte(){
        return this.qte;
    }
    getPoids(){
        return this.poids;
    }
    getConditionnement(){
        return this.conditionnement;
    }
    getType(){
        return this.type;
    }
    getIngredient(){
        return this.ingredient;
    }
    getNutriscore(){
        return this.nutriscore
    }
    getDLC(){
        return this.DLC
    }
}