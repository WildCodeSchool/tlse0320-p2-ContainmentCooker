import React from 'react';
import './Advert';
import './Banner';
import './CategoriesList';
import './Footer';
import './Header';
import './SearchBar';
import { Header } from './Header';
import { Banner } from './Banner';
import { SearchBar } from './SearchBar';
import { CategoriesList } from './CategoriesList';
import { Advert } from './Advert';


class Home extends React.Component {
    render() {
      return (
    <div> 
        <Header/>
        <Banner/>
        <SearchBar/>
        <CategoriesList/>
        <Advert/>
        <Footer/>
    </div>      
      )
    }
  }




export default Home;