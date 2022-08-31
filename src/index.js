import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Navigate, useLocation, Outlet} from 'react-router-dom';
import './styles/index-sass';
import FindUser from './domain/finder/find/FindUser';
import FindResult from './domain/finder/result/FindResult';
import reportWebVitals from './config/reportWebVitals';

const StateParamWrapper = () => {
  const {state} = useLocation();
  return state ? <Outlet /> : <Navigate to="/" replace />;
}

const RoutingPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="/find" />} />
        <Route path="/find" element={<FindUser />} />
        <Route path="*" element={<FindUser />} />
        <Route element={<StateParamWrapper />}>
          <Route path="/result" element={<FindResult />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutingPages />
  </React.StrictMode>
)

reportWebVitals();
