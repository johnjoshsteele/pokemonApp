export class Pokemon{
    id!: number;
    name!: string;
    height!: number;
    weight!: number; 
    baseXp!: number;
    hp!: number;
    attack!: number;
    specialAttack!: number;
    defense!: number;
    specialDefense!: number;
    speed!: number;
    evasion!: number;
    accuracy!: number;
    generationId!: number;
    evolutionEvolvesToNavigations!: Pokemon[];
    evolutionPokemons!: Pokemon[];
    sprite!: null;
    abilities!: string[];
    moves!: string[];
    types!: string[];

    constructor(name: string) {
        this.name = name;
    }

}