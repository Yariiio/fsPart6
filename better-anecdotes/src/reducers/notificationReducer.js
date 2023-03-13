import { createSlice } from "@reduxjs/toolkit";

let initialState = null

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        addMessage(state, action) {
            return action.payload
        },
        removeMessage() {
            return initialState
        }
    }
})

export const {addMessage, removeMessage} = notificationSlice.actions
export default notificationSlice.reducer
