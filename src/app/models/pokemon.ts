export class Pokemon{
    name?: string;
    id?: number;
    types?: { slot: ''; type?: { name?: ''; url?: '' } }[];
    weight?: string;
    height?: string;
    base_experience?: string;
    url?: string;

    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
        this.id = Number(url.split('/').filter(Boolean).pop())
    }

}