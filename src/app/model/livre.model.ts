import { Type } from "./Type.model";



export class Livre {
    idLivre?: number;
    titreLivre?: string;
    auteurLivre?: string;
    dateParution?: Date;
    prixLivre?: number;
    type! : Type;
}