import { createSlice, current } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: "item",
    initialState: { show: false, button: "submit", items: [] },
    reducers: {
        visible(state) {
            state.show = true;
        },
        buttonChange(state) {
            state.button = "edit";
        },
        addItems(state, action) {
            const inputData = action.payload;
            state.items.push({
                id: new Date().getTime().toString(),
                data: inputData,
            });
        },
        editItems(state, action) {
            const idData = action.payload;
            const findItem = state.items.find((item) => item.id === idData);
            console.log(current(findItem));
        },
    },
});

export const itemActions = itemSlice.actions;
export default itemSlice.reducer;
