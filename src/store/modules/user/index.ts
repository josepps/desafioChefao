import {createSlice} from "@reduxjs/toolkit"

interface UserState{
    token?:string;
    email?: string;
    isLogged: boolean;
}

const useReduce = createSlice({
    name: "user",
    initialState:{
        isLogged: false,
    } as UserState,
    reducers:{
        setUser(state, action){
            Object.assign(state,{
                token: action.payload.token,
                email: action.payload.email,

                isLogged: true,
            });
        },

        removeUser(state, action){
            Object.assign(state,{
                token: undefined,
                email: undefined,

                isLogged: false,
            });
        },
    },

});

export const {setUser, removeUser} = useReduce.actions;

export default useReduce.reducer;