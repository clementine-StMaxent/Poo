"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Panier = void 0;
var Panier = /** @class */ (function () {
    function Panier(produit, total) {
        this.produits = produit;
        this.total = total;
    }
    Panier.prototype.getProduit = function () {
        return this.produits;
    };
    Panier.prototype.getTotal = function () {
        return this.total;
    };
    Panier.prototype.addProduit = function (produit) {
        this.produits.push(produit);
    };
    return Panier;
}());
exports.Panier = Panier;
//# sourceMappingURL=panier.js.map