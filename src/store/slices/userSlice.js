import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    email: localStorage.getItem('email'),
    token: localStorage.getItem('token'),
    id: localStorage.getItem('id'),
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            const {email, token, id} = action.payload;
            localStorage.setItem('email', email);
            localStorage.setItem('token', token);
            localStorage.setItem('id', id);
            state.email = email;
            state.token = token;
            state.id = id;
        },
        removeUser(state) {
            localStorage.removeItem('email');
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            state.email = null;
            state.token = null;
            state.id = null;
        }
    }
})

export const {setUser, removeUser} = userSlice.actions
export default userSlice.reducer
