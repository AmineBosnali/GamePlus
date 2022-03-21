import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import MockData from "../mock-data.json";
import Game from "../models/Game.model"
const mock = new MockAdapter(axios);


interface GameState {
    data: Game[] | null;
    loading: boolean;
    error: string;
}

mock.onGet("/games").reply(200, MockData);
export const fetchGame = createAsyncThunk("fetchGame", async () => {
    const response = await axios.get<Game[]>("/games")
    return response.data;
})

const initialState: GameState = {
    data: [],
    loading: false,
    error: ""
}

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGame.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(fetchGame.fulfilled, (state, action: PayloadAction<any>) => {
            state.data = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchGame.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error fetching game data";
        })
    }
});
export default gameSlice.reducer;
