import { Room } from "../room";
import * as importedRooms from "../rooms/rooms.json"

export class RoomManager {

    public rooms: Room[] = [];
    public currentRoom?: Room;
    public previousRoom?: Room;

    constructor() {
        this.loadRooms()
    }

    private loadRooms(): void {
        this.rooms = importedRooms;
    }

    public getRandomRoom(): Room {
        const randomIndex = Math.floor(Math.random() * this.rooms.length);
        return this.rooms[randomIndex];
    }

    public getRoomByName(name: string): Room | undefined {
        return this.rooms.find(room => room.name === name);
    }

    public entrance(): void {
        try { 
            this.currentRoom = this.rooms[0];
            this.renderRoom();
        } catch (error) {
            if (error instanceof Error) {
                console.log("No rooms found.");
            }
        }
    }

    public renderRoom(): void {
        if (this.currentRoom) {
            // Room
            console.log(`You enter the ${this.currentRoom.name}. ${this.currentRoom.description}`);

            // Items
            if (this.currentRoom.items.length === 1) {
                console.log(`In the room, you notice a ${this.currentRoom.items[0]}.`);
            } else if (this.currentRoom.items.length > 1) {
                console.log(`In the room, you notice the following items: ${this.currentRoom.items.join(', ')}`);
            }

            // Exits
            const exits = Object.keys(this.currentRoom.exits).map((exit) => exit)
            console.log(`There ${exits.length > 1 ? "are" : "is"} ${exits.length} door${exits.length > 1 ? "s" : ""} to your ${exits.join(', ')}.`);
        }
    }

}