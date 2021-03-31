import { Rayon } from './rayon';

export class Magasin {
    //scop

    //attributs = carac
    private lieu: string;

    //un magasin contient plusieurs rayons => Array<...> ou ...[]
    private rayons: Array<Rayon>;

    //methode qui instencie l'objet
    constructor(lieu: string, rayons: Array<Rayon>) {
        //this => permet de faire réfrénce à l'objet courant (donne accès aux attributs)
        this.lieu = lieu; //operation d'affectation dans les attributs de l'objet
        this.rayons = rayons;
    }


    //encapsulation
    public getLieu(): string {
        return this.lieu;
    }

    public getRayon(): Array<Rayon> {
        return this.rayons;
    }


}