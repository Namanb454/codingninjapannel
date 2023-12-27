import { createContext, useContext, useState } from 'react';

// Create a context
const EventDataContext = createContext();

// Create a provider component
const EventDataProvider = ({ children }) => {
    const [eventData, setEventData] = useState(null);

    const setEventDataValue = (data) => {
        setEventData(data);
    };

    return (
        <EventDataContext.Provider value={{ eventData, setEventDataValue }}>
            {children}
        </EventDataContext.Provider>
    );
};

// Create a custom hook to use the context
const useEventData = () => {
    const context = useContext(EventDataContext);
    if (!context) {
        throw new Error('useEventData must be used within a EventDataProvider');
    }
    return context;
};

export { EventDataProvider, useEventData };
