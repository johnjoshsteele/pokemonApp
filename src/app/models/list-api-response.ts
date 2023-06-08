import { Pokemon } from "./pokemon";

export interface ListAPIResponse {
    count: number;
    next: string; 
    previous?: string;
    results: Pokemon[];
}