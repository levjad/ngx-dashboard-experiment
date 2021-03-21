export interface PokemonListResult {
    name: string;
    url: string;
}

export interface PokemonList {
    count: number;
    next: string;
    previous?: any;
    results: PokemonListResult[];
}

export interface PokemonCard {
    id: string;
    name: string;
    image: string;
    types: string[];
}


export interface Ability2 {
    name: string;
    url: string;
}

export interface Ability {
    ability: Ability2;
    is_hidden: boolean;
    slot: number;
}

export interface Form {
    name: string;
    url: string;
}

export interface Version {
    name: string;
    url: string;
}

export interface GameIndice {
    game_index: number;
    version: Version;
}

export interface Move2 {
    name: string;
    url: string;
}

export interface MoveLearnMethod {
    name: string;
    url: string;
}

export interface VersionGroup {
    name: string;
    url: string;
}

export interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: MoveLearnMethod;
    version_group: VersionGroup;
}

export interface Move {
    move: Move2;
    version_group_details: VersionGroupDetail[];
}

export interface Species {
    name: string;
    url: string;
}

export interface Stat2 {
    name: string;
    url: string;
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: Stat2;
}

export interface Type2 {
    name: string;
    url: string;
}

export interface Type {
    slot: number;
    type: Type2;
}

export interface PokemonDetails {
    abilities: Ability[];
    base_experience: number;
    forms: Form[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    past_types: any[];
    species: Species;
    stats: Stat[];
    types: Type[];
    weight: number;
}
