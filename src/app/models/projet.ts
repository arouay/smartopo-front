import { TypeProjet } from "./typeprojet";
import { Client } from "./client";

export class Projet {
    id:number;
    titre_foncier:string;
    intitule:string;
    duree_realisation_estimee:string;
    date_commencement:Date;
    montant_estime:number;
    typeProjet:TypeProjet;
    client:Client;
}