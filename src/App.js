import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Shop from './pages/Shop';

import Hero from './components/Hero';
import NewArrival from './components/NewArrival';
import TopSelling from './components/TopSelling';
import DressStyle from './components/DressStyle';
import CustomerTestimonials from './components/Reviews';
import Cart from './pages/Cart';
import DetailsPage from './pages/DetailPage';
import ScrollToTop from './components/ScrollOnTop';


function App() {
  return (
    <Router>
        <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <NewArrival />
              <TopSelling />
              <DressStyle />
              <CustomerTestimonials />
             
            </Layout>
          }
        />
        <Route
          path="/shop"
          element={
            <Layout>
              <Shop />
            </Layout>
          }
        />
         <Route
          path="/cart"
          element={
            <Layout>
              <Cart />
            </Layout>
          }
        />
         <Route path="/productDetails/:id" element={<Layout><DetailsPage /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
