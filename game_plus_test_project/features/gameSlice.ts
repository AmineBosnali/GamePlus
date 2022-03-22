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
    searchData: Game[];
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
    searchData: [],
}

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        search: (state, action) => {
            state.searchData = action.payload.name ? state.data.filter((element: Game) => element.name.toLocaleLowerCase().startsWith(action.payload.name.toLocaleLowerCase())) : state.data;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGames.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(fetchGames.fulfilled, (state, action: PayloadAction<any>) => {
            state.data = action.payload;
            state.searchData = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchGames.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error fetching game data";
        })
    }
});
export const { search } = gameSlice.actions;
export default gameSlice.reducer;
