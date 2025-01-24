"use client"

import React, { createContext, useState } from 'react';

// Create a context for drag and drop
const DragDropContext = createContext();

const DragDropProvider = ({ children }) => {
  const [dragState, setDragState] = useState({});

  return (
    <DragDropContext.Provider value={{ dragState, setDragState }}>
      {children}
    </DragDropContext.Provider>
  );
};

export { DragDropContext, DragDropProvider };