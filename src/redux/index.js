import {configureStore} from "@reduxjs/toolkit";
import comp from "./reducers/comp"

export const store = configureStore({
    reducer: {
        comp
    }
}) 