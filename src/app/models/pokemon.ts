export class Pokemon{
    name?: string;
    id!: number;
    types?: { slot: ''; type?: { name?: ''; url?: '' } }[];
    weight!: number;
    height!: number;
    base_experience?: string;
    url?: string;
    abilities?: { slot: ''; ability?: {name?: ''; url?: '' } }[];

    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
        this.id = Number(url.split('/').filter(Boolean).pop())
    }

}