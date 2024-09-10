import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TableItem {
  id: number;
  name: string;
  description: string;
}

interface TableState {
  items: TableItem[];
}

const initialState: TableState = {
  items: [],
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<TableItem>) {
      state.items.push(action.payload);
    },
    updateItem(state, action: PayloadAction<TableItem>) {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem, updateItem, deleteItem } = tableSlice.actions;
export default tableSlice.reducer;
