import { Employe } from "./employe";
import { Phase } from "./phase";

export class Tache{
    id:number;
    duree_estimee:number;
    date_commancement:Date;
    priorite:number;
    employe_responsable:Employe;
    phase:Phase;
}