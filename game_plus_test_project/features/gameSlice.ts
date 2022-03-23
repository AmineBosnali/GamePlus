import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import MockData from "../mock-data.json";
import Game from "../models/game.model"
const mock = new MockAdapter(axios);


interface GameState {
    data: Game[];
    loading: boolean;
    error: string;
    filterData: Game[];
}

mock.onGet("/games").reply(200, MockData);
export const fetchGames = createAsyncThunk("fetchGame", async () => {
    const response = await axios.get<Game[]>("/games")
    return response.data;
})

const initialState: GameState = {
    data: [],
    loading: false,
    error: "",
    filterData: [],
}

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        search: (state, action) => {
            state.filterData = action.payload.name ? state.filterData.filter((element: Game) => element.name.toLocaleLowerCase().startsWith(action.payload.name.toLocaleLowerCase())) : state.data;
        },
        filterCategories: (state, action) => {
            state.filterData = action.payload.length > 0 ? state.filterData.filter((element: Game) => action.payload.includes(element.category)) : state.data;
        },
        sorting: (state, action) => {
            action.payload.name ?
                action.payload.name == "A-Z" ?
                    state.filterData = state.filterData.sort((a, b) => a.name.localeCompare(b.name))
                    :
                    state.filterData = state.filterData.sort((a, b) => b.name.localeCompare(a.name))
                :
                state.filterData = state.data
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGames.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(fetchGames.fulfilled, (state, action: PayloadAction<any>) => {
            state.data = action.payload;
            state.filterData = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchGames.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error fetching game data";
        })
    }
});
export const { search, filterCategories, sorting } = gameSlice.actions;
export default gameSlice.reducer;
