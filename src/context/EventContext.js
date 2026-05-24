import React, { createContext, useState } from 'react';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [registrations, setRegistrations] = useState([]);

  const addFavorite = (event) => {
    setFavorites(prev => [...prev, event]);
  };

  const removeFavorite = (eventId) => {
    setFavorites(prev => prev.filter(e => e.id !== eventId));
  };

  const register = (event) => {
    setRegistrations(prev => [...prev, event]);
  };

  const unregister = (eventId) => {
    setRegistrations(prev => prev.filter(e => e.id !== eventId));
  };

  const updateStock = (eventId, delta) => {
    setEvents(prev =>
      prev.map(e => e.id === eventId ? { ...e, stock: e.stock + delta } : e)
    );
  };

  return (
    <EventContext.Provider value={{
      events, setEvents,
      favorites, addFavorite, removeFavorite,
      registrations, register, unregister,
      updateStock
    }}>
      {children}
    </EventContext.Provider>
  );
};