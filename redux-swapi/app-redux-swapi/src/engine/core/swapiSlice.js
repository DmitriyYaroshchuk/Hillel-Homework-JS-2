import {createSlice} from "@reduxjs/toolkit";

const swapiSlice = createSlice({
    name: 'swapi',
    initialState: {
        data: undefined,
        link: undefined,
        loader: undefined,

    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
            console.log('data :', state.data)
        },
        setLink: (state, action) => {
            state.link = action.payload;
            console.log('link :', state.link, typeof state.link)
        },
        setLoader: (state, action) => {
            state.loader = action.payload;
        }

    }
});
export const swapiReducers = swapiSlice.reducer;
export const swapiActions = swapiSlice.actions;

export const swapiSelectors = {
    data: state => state.swapi.data,
    link: state => state.swapi.link,
    id: state => state.swapi.link ? state.swapi.link.split('/')[5] : undefined,
    content: state => state.swapi.link ? state.swapi.link.split('/')[4] : undefined,
    loader: state => state.swapi.loader
}
console.log(swapiSlice)
console.log('swapiActions: ', swapiActions)
console.log('swapiSelectors: ',swapiSelectors)