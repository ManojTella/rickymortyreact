import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterList from './components/CharacterList';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/rickymortyreact/" element={<CharacterList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
