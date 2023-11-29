export interface DataType {
    key: string;
    name: string;
    statut:  string[];
    paiement: string[];
    annulation: boolean;
}

export const data: DataType[] = [
    {
        key: '1',
        name: 'Grégoire',
        statut: ['Habitué.e'],
        paiement: ['A payé'],
        annulation: false,
    },
    {
        key: '2',
        name: 'Yasser',
        statut:['Inactif'],
        paiement: ['En attente'],
        annulation: false,
    },
    {
        key: '3',
        name: 'Julie',
        statut: ['Habitué.e'],
        paiement: ['A payé'],
        annulation: false,
    },
    {
        key: '4',
        name: 'Harold',
        statut: ['Habitué.e'],
        paiement: ['En attente'],
        annulation: false,
    },
    {
        key: '5',
        name: 'Clémence',
        statut: ['Nouveau'],
        paiement: ['Payé'],
        annulation: false,
    },
    {
        key: '6',
        name: 'Nina',
        statut: ['Habitué.e'],
        paiement: ['En attente'],
        annulation: false,
    },
    {
        key: '7',
        name: 'Alex',
        statut: ['Habitué.e'],
        paiement: ['Payé'],
        annulation: false,
    },
    {
        key: '8',
        name: 'Rémi',
        statut: ['Nouveau'],
        paiement: ['Payé'],
        annulation: false,
    },
    {
        key: '9',
        name: 'Iris',
        statut: ['Nouveau'],
        paiement: ['En attente'],
        annulation: false,
    },
    {
        key: '10',
        name: 'Violaine',
        statut: ['Nouveau'],
        paiement: ['En attente'],
        annulation: false,
    },
];