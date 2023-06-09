import './index.css';
import Wrapper from "./containers/Wrapper";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";
import ErrorBoundary from "./containers/ErrorBoundary/ErrorBoundary";

export default function App() {
    const [ error, setError ] = useState(false);
    const handleError = () => {
        setError(!error);
    }
  return (
      <ErrorBoundary>
          <BrowserRouter>
              <Wrapper>
                  <Header handleError={handleError}/>
                  {error && {test:1}}
                  <main>
                      <Routes>
                          <Route path='/' element={<Main/>}/>
                          <Route path='/about' element={<About/>}/>
                          <Route path='/contacts' element={<Contacts/>}/>
                      </Routes>
                  </main>
                  <Footer/>
              </Wrapper>
          </BrowserRouter>
      </ErrorBoundary>
  );
}

