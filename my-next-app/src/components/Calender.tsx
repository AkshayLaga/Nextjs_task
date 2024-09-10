import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useDispatch, useSelector } from 'react-redux';
import { addCalendarEvent } from '../redux/calenderSlice';
import { RootState } from '../store/Store';

const CalendarComponent: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [eventType, setEventType] = useState<'event' | 'reminder' | null>(null);
  const [description, setDescription] = useState('');
  const events = useSelector((state: RootState) => state.calendar.events);
  const dispatch = useDispatch();

  const handleDateClick = (value: Date) => {
    setSelectedDate(value);
  };

  const handleAddEvent = () => {
    if (selectedDate && eventType) {
      dispatch(addCalendarEvent({ date: selectedDate.toDateString(), type: eventType, description }));
      setDescription('');
    }
  };

  return (
    <div>
      <Calendar onClickDay={handleDateClick} />
      {selectedDate && (
        <div>
          <h3>{`Selected Date: ${selectedDate.toDateString()}`}</h3>
          <button onClick={() => setEventType('event')}>Add Event</button>
          <button onClick={() => setEventType('reminder')}>Add Reminder</button>
          {eventType && (
            <>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
              <button onClick={handleAddEvent}>Save</button>
            </>
          )}
        </div>
      )}

      <ul>
        {events.map((event, idx) => (
          <li key={idx} style={{ color: event.type === 'event' ? 'blue' : 'green' }}>
            {event.date}: {event.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarComponent;
