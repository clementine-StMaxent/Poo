"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rayon = void 0;
var Rayon = /** @class */ (function () {
    function Rayon(produits, type) {
        this.produits = produits;
        this.type = type;
    }
    Rayon.prototype.getProduit = function () {
        return this.produits;
    };
    Rayon.prototype.getType = function () {
        return this.type;
    };
    return Rayon;
}());
exports.Rayon = Rayon;
//# sourceMappingURL=rayon.js.map