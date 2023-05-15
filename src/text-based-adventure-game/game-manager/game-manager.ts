import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { Game } from "../game/game";
import { RoomManager } from '../room-manager/room-manager';

export class GameManager extends Game {

    private roomManager: RoomManager = new RoomManager();

    constructor() {
        super();
    }

    public start(): void {
        super.start();
        this.gameLoop();
    }

    public async gameLoop(): Promise<void> {
        while (this.isRunning) {
            
            // First move
            if (this.moveCount === 0) {
                this.welcomeMessage();
                this.roomManager.entrance();
            }

            // Get input from the player
            const playerInput = await this.getPlayerInput();
                
            // Update the game state based on the player input
            this.updateGameState(playerInput);

            // Render the game state to the player
            this.renderGameState();

            // Increment the move count
            this.nextMove();
        }
    }
    nextMove() {
        this.moveCount++;
    }

    welcomeMessage() {
        console.log("Welcome to a Roomy Adventure!");
    }

    async getPlayerInput(): Promise<string> {
        const answer = await this.getRawPlayerInput();
        console.log(`Thank you for your answer: ${answer}`);

        return answer;
    }

    renderGameState() {
        console.log("renderGameState: Method not implemented.");
    }

    updateGameState(playerInput: string) {
        console.log({ updatedStateFrom: playerInput} )
    }

    async getRawPlayerInput(): Promise<string> {
        try {
            const rl = readline.createInterface({ input, output });
            const answer =  await rl.question('What is your move?');
            rl.close();
            return answer;
        } catch (error) {
            console.log("Error getting player input.");
            throw error;
        }
    }
}