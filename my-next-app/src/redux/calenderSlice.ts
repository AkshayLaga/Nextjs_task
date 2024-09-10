import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalendarEvent {
  date: string;
  type: 'event' | 'reminder';
  description: string;
}

interface CalendarState {
  events: CalendarEvent[];
}

const initialState: CalendarState = {
  events: [],
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addCalendarEvent(state, action: PayloadAction<CalendarEvent>) {
      state.events.push(action.payload);
    },
  },
});

export const { addCalendarEvent } = calendarSlice.actions;
export default calendarSlice.reducer;
