import React from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import {AuthProvider} from './src/context/AuthProvider';
import './src/utils/locale';

function App() {
  return (
    <AuthProvider>
      <RootNavigation />
    </AuthProvider>
  );
}

export default App;
