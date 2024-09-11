import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const API_BASE_URL = 'localhost:3001/dashboard';
import {RootState} from "../store/Store"
interface Users {
    name: string;
    age: number;
    role:string;
    date: Date;
  }

  interface UsersState {
    users: Users[];
  }
  const initialState: UsersState = {
    users: [],
  };
const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
      addUsers: (state, {payload}) => payload,
        updateUsers: (state, action: PayloadAction<Users>) => {
            const index = state.users.findIndex((d: { name: string; }) => d.name === action.payload.name);
            if (index !== -1) {
                state.users[index] = action.payload;
            }
        },
        
    },
});
export const { addUsers,updateUsers } = userSlice.actions;
export const userTodo = (state:RootState) => state.users.users;
export default userSlice.reducer;