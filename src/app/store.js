import { configureStore } from '@reduxjs/toolkit';

import casesReducer from "../features/cases/casesSlice";
import chargesReducer from "../features/charges/chargesSlice"
import clientsReducer from "../features/clients/clientsSlice";
import eventsReducer from "../features/events/eventsSlice";
import financesReducer from '../features/finances/financesSlice';
import notesReducer from "../features/notes/notesSlice";
import profileReducer from '../features/profile/profileSlice';
import settingsReducer from "../features/settings/settingsSlice";
import tasksReducer from "../features/tasks/tasksSlice";

export const store = configureStore({
  reducer: {
    cases: casesReducer,
    charges: chargesReducer,
    clients: clientsReducer,
    events: eventsReducer,
    finances: financesReducer,
    notes: notesReducer,
    profile: profileReducer,
    settings: settingsReducer,
    tasks: tasksReducer
  },
});
