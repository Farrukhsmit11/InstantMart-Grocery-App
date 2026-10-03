import createSlice from "@reduxjs/toolkit"

const initialState = {
    user: {},
    isAuthenticated: false,
    error: null,
    Loginloading: false,
    signUpLoading: false
}

export const authSlice = createSlice({
    initialState,
    extraReducers: (builder) => {
        builder.addCase()
    }
})