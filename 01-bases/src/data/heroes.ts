


//creemos una interface para decir como lucen los heroes
//y no hayan problemas mas adelante

export interface Hero {
    id: number;
    name: string;
    owner: Owner;
}

export type Owner = 'DC' | 'Marvel';

const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];


export const owners = ['DC','Marvel'];

export default heroes;