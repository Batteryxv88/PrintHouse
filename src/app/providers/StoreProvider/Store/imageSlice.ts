import { createSlice } from "@reduxjs/toolkit";
import blanks from '../../../../shared/assets/pictures/grid2/blanks.png'
import notebooks from '../../../../shared/assets/pictures/grid2/notebooks.png'
import brochures from '../../../../shared/assets/pictures/grid2/brochures.png'
import labels from '../../../../shared/assets/pictures/grid2/labels.png'
import charters from '../../../../shared/assets/pictures/grid2/charters.png'
import flyers from '../../../../shared/assets/pictures/grid2/flyers.png'
import postcards from '../../../../shared/assets/pictures/grid2/postcards.png'
import booklets from '../../../../shared/assets/pictures/grid2/booklets.png'
import presentations from '../../../../shared/assets/pictures/grid2/presentations.png'
import catalogs from '../../../../shared/assets/pictures/grid2/catalogs.png'
import flags from '../../../../shared/assets/pictures/grid2/flags.png'
import sheets from '../../../../shared/assets/pictures/grid2/sheets.png'

const photos = [
    {
        name: "бланки",
        url: blanks,
    },
    {
        name: "блокноты",
        url: notebooks,
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