import { Injectable } from '@angular/core';

import { Pokemon } from "../models/pokemon";
import * as fs from "tns-core-modules/file-system";

@Injectable()
export class PokemonService {

    private imageNumber: number;
    private prevImageNumber: number;
    private nextImageNumber: number;
    private lowerBound: number;

    private pokedex: Array<Pokemon>;

    constructor() { 
        this.imageNumber = 0;
        this.prevImageNumber = 719;
        this.nextImageNumber = 1;
        this.lowerBound = 0;

        let appFolder = fs.knownFolders.currentApp();
        let file = appFolder.getFile("pokedex.json");

        file.readText("ASCII")
            .then((content) => {
                this.pokedex = JSON.parse(content);
            });
    }

    getPokemon(): Array<Pokemon> {
        return this.pokedex;
    }
}