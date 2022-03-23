export interface IGameModel {
    name: string;
    category: string;
}

export default class GameModel implements IGameModel {
    name: string;
    category: string;
    constructor(
        name: string,
        category: string
    ) {
        this.name = name;
        this.category = category;
    }
}