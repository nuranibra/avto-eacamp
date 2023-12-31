import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider , createBrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Error from './pages/error/error';
import SingleAdvert from './components/singleAdvert';
import ElaveEt from './pages/pages/elaveEt';
import About from './pages/pages/about';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Header></Header>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<App></App>
      },
      {
        path:'/pages/about',
        element:<About></About>
      },
      {
        path:'/pages/contact',
        element:<ElaveEt></ElaveEt>
      },
      {
        path:'advert/:id',
        element:<SingleAdvert></SingleAdvert>
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
