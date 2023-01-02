import {configureStore} from "@reduxjs/toolkit";
import notesReducer from "../features/notes/noteSlice";

export const store = configureStore({
    reducer: {
        notes: notesReducer
    }
})