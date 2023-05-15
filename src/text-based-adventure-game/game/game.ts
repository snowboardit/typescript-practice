import { State } from "../state";

export class Game extends State {

    constructor() {
        super();
    }

    public start(): void {
        this.isRunning = true;
    }

    public stop(): void {
        this.isRunning = false;
    }

}