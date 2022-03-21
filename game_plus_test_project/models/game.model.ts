export interface IGameModel {
    name: string;
}

export default class GameModel implements IGameModel {
    name: string;
    constructor(
        name: string
    ) {
        this.name = name;
    }
}