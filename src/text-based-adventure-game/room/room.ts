import { Direction } from "./direction";

export type TRoom = {
    name: string;
    description: string;
    items: string[];
    exits: {[key in Direction]? : string};
}

export class Room implements TRoom {
    public name: string = '';
    public description: string = '';
    public items: string[] = [];
    public exits: {[key in Direction]? : string};

    constructor(name: string, description: string, items: string[], exits: TRoom["exits"]) {
        this.name = name;
        this.description = description;
        this.items = items;
        this.exits = exits;
    }
}