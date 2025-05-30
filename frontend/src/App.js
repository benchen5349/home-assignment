import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import FundList from './components/FundList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          
          {/* fixed task 4: to include funds route */}
          <Route path="/funds" element={<FundList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
