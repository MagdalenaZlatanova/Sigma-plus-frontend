import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BreadCrumbsContextProvider from "./store/bread-crumbs-context";
import TopicsContextProvider from "./store/topics-context";
import ProgressContextProvider from "./store/progress-context";
import PracticeContextProvider from "./store/practice-context";
import UserContextProvider from "./store/user-context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <UserContextProvider>
              <TopicsContextProvider>
                  <ProgressContextProvider>
                      <PracticeContextProvider>
                          <BreadCrumbsContextProvider>
                              <App />
                          </BreadCrumbsContextProvider>
                      </PracticeContextProvider>
                  </ProgressContextProvider>
              </TopicsContextProvider>
          </UserContextProvider>
      </BrowserRouter>
  </React.StrictMode>
);