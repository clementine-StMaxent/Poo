import { Categories } from './type';
import { Nutriscore } from './nutriscore';
export declare class Produit {
    private name;
    private prix;
    private qte;
    private poids;
    private conditionnement;
    private type;
    private ingredient;
    private nutriscore;
    private DLC;
    constructor(name: string, prix: number, qte: number, poids: number, conditionnement: string, type: Categories, ingredient: string, nutriscore: Nutriscore, DLC: Date);
    getName(): string;
    getPrix(): number;
    getQte(): number;
    getPoids(): number;
    getConditionnement(): string;
    getType(): Categories;
    getIngredient(): string;
    getNutriscore(): Nutriscore;
    getDLC(): Date;
}
