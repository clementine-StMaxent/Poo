import { Rayon } from './rayon';
export declare class Magasin {
    private lieu;
    private rayons;
    constructor(lieu: string, rayons: Array<Rayon>);
    getLieu(): string;
    getRayon(): Array<Rayon>;
}
