import React from 'react';

import { ToastProvider } from './toast';
import { ColorProvider } from './colors';

const AppProvider: React.FC = ({ children }) => (
  <ColorProvider>
    <ToastProvider>{children}</ToastProvider>
  </ColorProvider>
);

export default AppProvider;
