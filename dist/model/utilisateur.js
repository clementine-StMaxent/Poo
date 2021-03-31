"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utilisateur = void 0;
var Utilisateur = /** @class */ (function () {
    function Utilisateur(nom, prenom, mail, adresse, wallet, telephone, panier) {
        this.nom = nom;
        this.prenom = prenom;
        this.mail = mail;
        this.adresse = adresse;
        this.wallet = wallet;
        this.telephone = telephone;
        this.panier = panier;
    }
    Utilisateur.prototype.getNom = function () {
        return this.nom;
    };
    Utilisateur.prototype.getPrenom = function () {
        return this.prenom;
    };
    Utilisateur.prototype.getMail = function () {
        return this.mail;
    };
    Utilisateur.prototype.getAdresse = function () {
        return this.adresse;
    };
    Utilisateur.prototype.getWallet = function () {
        return this.wallet;
    };
    Utilisateur.prototype.getTelephone = function () {
        return this.telephone;
    };
    Utilisateur.prototype.getPanier = function () {
        return this.panier;
    };
    return Utilisateur;
}());
exports.Utilisateur = Utilisateur;
//# sourceMappingURL=utilisateur.js.map