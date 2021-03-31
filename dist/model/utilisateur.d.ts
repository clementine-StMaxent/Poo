import { Panier } from './panier';
export declare class Utilisateur {
    private nom;
    private prenom;
    private mail;
    private adresse;
    private wallet;
    private telephone;
    private panier;
    constructor(nom: string, prenom: string, mail: string, adresse: string, wallet: number, telephone: number, panier: Panier);
    getNom(): string;
    getPrenom(): string;
    getMail(): string;
    getAdresse(): string;
    getWallet(): number;
    getTelephone(): number;
    getPanier(): Panier;
}
