# Create a small text-based adventure game.

## **Overview:**
The game will consist of a series of "rooms" that a player can navigate, and each room will contain different actions the player can take. For example, the player may be able to look around the room to find items, or they might encounter an enemy they need to defeat.

---

## **Details:**

**Rooms:** Each room is an object with properties like description (what the player sees when they enter), items (things the player can pick up or interact with), and exits (other rooms the player can go to from this one).

**Player:** Create a Player class with properties like inventory (items the player has picked up) and location (the room the player is currently in). The Player class should have methods for actions the player can take, like move(direction: string), lookAround(), and pickUp(item: string).

**Items and Interactions:** Some rooms may contain items that a player can pick up or interact with. For instance, you might have a key item that can unlock a door to another room.

**Enemies and Combat:** For an additional challenge, add some simple combat mechanics. Some rooms might contain enemies that the player has to defeat in order to proceed.

**Game Loop:** Finally, you'll need a game loop where you repeatedly ask the player what they want to do next, carry out that action, and update the game state accordingly.

---

Make sure to use TypeScript features appropriately, including types, interfaces, classes, and access modifiers.

Remember, the goal of this project is to practice your TypeScript skills, so focus on using TypeScript effectively rather than making the game complex. Start with a simple game and then gradually add more features as you get comfortable.

Good luck and have fun!