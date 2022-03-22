export interface IGameCategoryModel {
    name: string;
}

export default class GameCategoryModel implements IGameCategoryModel {
    name: string;
    constructor(
        name: string
    ) {
        this.name = name;
    }
}