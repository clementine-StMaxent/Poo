"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magasin = void 0;
var Magasin = /** @class */ (function () {
    //methode qui instencie l'objet
    function Magasin(lieu, rayons) {
        //this => permet de faire réfrénce à l'objet courant (donne accès aux attributs)
        this.lieu = lieu; //operation d'affectation dans les attributs de l'objet
        this.rayons = rayons;
    }
    //encapsulation
    Magasin.prototype.getLieu = function () {
        return this.lieu;
    };
    Magasin.prototype.getRayon = function () {
        return this.rayons;
    };
    return Magasin;
}());
exports.Magasin = Magasin;
//# sourceMappingURL=magasin.js.map