import { createSlice } from "@reduxjs/toolkit";
import vizitka from '../../../../shared/assets/pictures/grid/1.jpg'
import calendar from '../../../../shared/assets/pictures/grid/16.jpg'
import bloknot from '../../../../shared/assets/pictures/grid/14.jpg'
import listovka from '../../../../shared/assets/pictures/grid/19.jpg'
import flazhok from '../../../../shared/assets/pictures/grid/20.jpg'
import broshura from '../../../../shared/assets/pictures/grid/3.jpg'
import buklet from '../../../../shared/assets/pictures/grid/11.jpg'
import birdekel from '../../../../shared/assets/pictures/grid/5.jpg'

const photos = [
    {
        name: "визитки",
        url: vizitka,
    },
    {
        name: "календари",
        url: calendar,
    },
    {
        name: "блокноты",
        url: bloknot,
    },
    {
        name: "листовки",
        url: listovka,
    },
    {
        name: "флажки",
        url: flazhok,
    },
    {
        name: "брошюры",
        url: broshura,
    },
    {
        name: "буклеты",
        url: buklet,
    },
    {
        name: "бирдекели",
        url: birdekel,
    },
];

const imageSlice = createSlice({
    name: 'imageSlice',
    initialState: {
        photos: photos
    },
    reducers: {
        changePage(state, action) {
            state.photos = action.payload
        }
    }
})

export default imageSlice.reducer
export const {changePage} = imageSlice.actions