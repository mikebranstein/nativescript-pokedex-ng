export class Pokemon {
    id: number;
    name: string;
    fileName: string;
    description: string;
    height: string;
    categry: string;
    weight: string;
    hp_stat: number;
    attack_stat: number;
    defense_stat: number;
    special_attack_stat: number;
    special_defense_stat: number;
    speed_stat: number;
    types: Array<string>;
    evolution: Array<string>;
}