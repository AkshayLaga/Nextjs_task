import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from '../redux/sidebarSlice';
import tableReducer from '../redux/tableSlice';
import calendarReducer from '../redux/calenderSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    table: tableReducer,
    calendar: calendarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
