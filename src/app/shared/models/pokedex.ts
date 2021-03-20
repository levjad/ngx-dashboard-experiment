export interface Result {
    name: string;
    url: string;
}

export interface PokemonList {
    count: number;
    next: string;
    previous?: any;
    results: Result[];
}