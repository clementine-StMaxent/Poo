import { Panier } from './panier';

export class Utilisateur {

    private nom: string;
    private prenom: string;
    private mail: string;
    private adresse: string;
    private wallet: number;
    private telephone: number;
    private panier: Panier;

    constructor(nom: string, prenom: string, mail: string, adresse: string, wallet: number, telephone: number, panier: Panier) {
        this.nom = nom;
        this.prenom = prenom;
        this.mail = mail;
        this.adresse = adresse;
        this.wallet = wallet;
        this.telephone = telephone;
        this.panier = panier;
    }

    getNom() {
        return this.nom
    }
    getPrenom() {
        return this.prenom
    }
    getMail() {
        return this.mail
    }
    getAdresse() {
        return this.adresse
    }
    getWallet() {
        return this.wallet
    }
    getTelephone() {
        return this.telephone
    }
    getPanier() {
        return this.panier
    }

}