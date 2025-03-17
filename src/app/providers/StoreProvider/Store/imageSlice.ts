import { createSlice } from "@reduxjs/toolkit";


import blanks from '../../../../shared/assets/pictures/grid3/blank1.svg?url'
import notebooks from '../../../../shared/assets/pictures/grid3/bloknot2.svg?url'
import brochures from '../../../../shared/assets/pictures/grid3/broshura.svg?url'
import labels from '../../../../shared/assets/pictures/grid3/stiker.svg?url'
import charters from '../../../../shared/assets/pictures/grid3/gramota2.svg?url'
import flyers from '../../../../shared/assets/pictures/grid3/listovka2.svg?url'
import postcards from '../../../../shared/assets/pictures/grid3/otkrytka1.svg?url'
import booklets from '../../../../shared/assets/pictures/grid3/buklet.svg?url'
import presentations from '../../../../shared/assets/pictures/grid3/present1.svg?url'
import catalogs from '../../../../shared/assets/pictures/grid3/katalog.svg?url'
import flags from '../../../../shared/assets/pictures/grid3/flag.svg?url'
import sheets from '../../../../shared/assets/pictures/grid3/listovka1.svg?url'
import vizitka from '../../../../shared/assets/pictures/grid3/vizitka4.svg?url'
import plakat from '../../../../shared/assets/pictures/grid3/plakat.svg?url'
import instruct from '../../../../shared/assets/pictures/grid3/instruct.svg?url'

const photos = [
    {
        id: 1,
        name: "бланки",
        url: blanks,
    },
    {
        id: 2,
        name: "плакаты",
        url: plakat,
    },
    {
        id: 3,
        name: "брошюры",
        url: brochures,
    },
    {
        id: 4,
        name: "наклейки",
        url: labels,
    },
    {
        id: 5,
        name: "дипломы",
        url: charters,
    },
    {
        id: 6,
        name: "листовки",
        url: flyers,
    },
    {
        id: 7,
        name: "открытки",
        url: postcards,
    },
    {
        id: 8,
        name: "буклеты",
        url: booklets,
    },
    {
        id: 9,
        name: "презентации",
        url: presentations,
    },
    {
        id: 10,
        name: "каталоги",
        url: catalogs,
    },
    {
        id: 11,
        name: "флажки",
        url: flags,
    },
    {
        id: 12,
        name: "листовая печать",
        url: sheets,
    },
    {
        id: 13,
        name: "визитки",
        url: vizitka,
    },
    {
        id: 14,
        name: "блокноты",
        url: notebooks,
    },
    {
        id: 15,
        name: "инструкции",
        url: instruct,
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