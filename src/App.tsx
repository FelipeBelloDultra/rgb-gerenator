import React from 'react';

import Dashboard from './pages/Dashboard';
import GlobalStyles from './styles/GlobalStyles';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <Dashboard />
      </AppProvider>

      <GlobalStyles />
    </>
  );
};

export default App;
