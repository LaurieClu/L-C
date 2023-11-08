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
        name: 'John Brown',
        statut: ['Habitué.e'],
        paiement: ['A payé'],
        annulation: false,
    },
    {
        key: '2',
        name: 'Jim Green',
        statut:['Inactif'],
        paiement: ['En attente'],
        annulation: false,
    },
    {
        key: '3',
        name: 'Joe Black',
        statut: ['Nouveau'],
        paiement: ['En attente'],
        annulation: false,
    },
    {
        key: '4',
        name: 'Maya',
        statut: ['Nouveau'],
        paiement: ['En attente'],
        annulation: false,
    },
    {
        key: '5',
        name: 'Julie',
        statut: ['Nouveau'],
        paiement: ['En attente'],
        annulation: false,
    },
    {
        key: '6',
        name: 'Nina',
        statut: ['Nouveau'],
        paiement: ['En attente'],
        annulation: false,
    },
    {
        key: '7',
        name: 'Louis',
        statut: ['Nouveau'],
        paiement: ['En attente'],
        annulation: false,
    },
];