import './App.css'
import Footer from './components/Footer/footer';
import Header from './components/Header/header'
import { useState } from 'react';
import MainPage from './pages/MainPage/mainpage';
import AboutMe from './pages/AboutMe/aboutme';
import SignUp from './pages/SignUp/signup';

function App() {

  const [activePage, setActivePage] = useState(1);

  const updatePage = (newPage) => {
    setActivePage(newPage)
  }

  const handlePageSelect = (activePage) => {
    switch (activePage) {
      case 1:
        return <MainPage/>

      case 2:
        return <AboutMe/>

      case 3:
        return <SignUp/>

    }
  }

  return (
    <>
      <Header activePage={updatePage} />
      {handlePageSelect(activePage)}
      <Footer />
    </>
  )
}

export default App
