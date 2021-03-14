export class Evenement {
    _id: string | undefined;
    nom: string | undefined;
    dateDebut: Date | undefined;
    heureDebut: Date | undefined;
    createdOn: Date | undefined;
    localisation: string | undefined;
    constat: string | undefined;
    actions: string | undefined;
    dateFin: Date | undefined;
    heureFin: Date | undefined;
    resultat: string | undefined;
    liens: Lien[] | undefined;
}

export class Lien {
    _id: string | undefined;
    url: string | undefined;
    createdOn: Date | undefined;
}

