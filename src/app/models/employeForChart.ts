export class EmployeForChart{
    
    id:number;
    cin:string;
    nom:string;
    nbrTaches:number;

    constructor(cin,nom){
        this.cin = cin;
        this.nbrTaches = 0;
        this.nom = nom;
    }
    setNom(n){
        this.nom = n;
    }
    incNbrTache(){
        this.nbrTaches++;
    }
}