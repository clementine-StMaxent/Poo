"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produit = void 0;
var Produit = /** @class */ (function () {
    function Produit(name, prix, qte, poids, conditionnement, type, ingredient, nutriscore, DLC) {
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
    Produit.prototype.getName = function () {
        return this.name;
    };
    Produit.prototype.getPrix = function () {
        return this.prix;
    };
    Produit.prototype.getQte = function () {
        return this.qte;
    };
    Produit.prototype.getPoids = function () {
        return this.poids;
    };
    Produit.prototype.getConditionnement = function () {
        return this.conditionnement;
    };
    Produit.prototype.getType = function () {
        return this.type;
    };
    Produit.prototype.getIngredient = function () {
        return this.ingredient;
    };
    Produit.prototype.getNutriscore = function () {
        return this.nutriscore;
    };
    Produit.prototype.getDLC = function () {
        return this.DLC;
    };
    return Produit;
}());
exports.Produit = Produit;
//# sourceMappingURL=produit.js.map