import React from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeedPage from './pages/FeedPage';
import SharedPage from './pages/SharedPage';
import Header from './components/Header';

const GlobalStyle = createGlobalStyle`
  html, body {
    position: relative;
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    color: #000;
  }
  #root {
    height: 100%;
  }
`;

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route path="/" element={<FeedPage />} />
      <Route path="/video/:fileName" element={<SharedPage />} />
    </Routes>
  </BrowserRouter>
);

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
