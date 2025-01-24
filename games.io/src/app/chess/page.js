import React from 'react';
import { DragDropProvider } from '@/app/context/DragDropContext';

const MyApp = ({ Component, pageProps }) => {
  return (
    <DragDropProvider>
      <Component {...pageProps} />
    </DragDropProvider>
  );
};

export default MyApp;