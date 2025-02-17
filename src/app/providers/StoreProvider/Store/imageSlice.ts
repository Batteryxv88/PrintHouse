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
        name: "бланки",
        url: blanks,
    },
    {
        name: "плакаты",
        url: plakat,
    },
    {
        name: "брошюры",
        url: brochures,
    },
    {
        name: "наклейки",
        url: labels,
    },
    {
        name: "дипломы",
        url: charters,
    },
    {
        name: "листовки",
        url: flyers,
    },
    {
        name: "открытки",
        url: postcards,
    },
    {
        name: "буклеты",
        url: booklets,
    },
    {
        name: "презентации",
        url: presentations,
    },
    {
        name: "каталоги",
        url: catalogs,
    },
    {
        name: "флажки",
        url: flags,
    },
    {
        name: "листовая печать",
        url: sheets,
    },
    {
        name: "визитки",
        url: vizitka,
    },
    {
        name: "блокноты",
        url: notebooks,
    },
    {
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