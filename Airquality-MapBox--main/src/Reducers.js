import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    latlong: [78.9629, 20.5937],
    zoom: 4,
    data: null,
    countryAvgFinal: 0,
    stateAvgFinalList: null,
    avg: false,
    statelist: null,
    isLoading:true,
}
export const costomReducer = createReducer(initialState, {

    latlongReducer: (state, action) => {
        state.latlong = action.payload
    },
    zoomReducer: (state, action) => {
        state.zoom = action.payload
    },
    dataReducer: (state, action) => {
        state.data = action.payload
    },
    countryAvgReducer: (state, action) => {
        state.countryAvgFinal = action.payload
    },
    stateAvgReducer: (state, action) => {
        state.stateAvgFinalList = action.payload
    },
    avgReducer: (state, action) => {
        state.avg = action.payload
    },
    statelistReducer: (state, action) => {
        state.statelist = action.payload
    },
    isLoadingReducer: (state, action) => {
        state.isLoading = action.payload
    }



})