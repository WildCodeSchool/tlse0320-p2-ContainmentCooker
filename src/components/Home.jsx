import React from 'react';
/*import './Advert';
import './Banner';
import './CategoriesList';
import './Footer';
import './Header';
import './SearchBar';
import { Header } from './Header';
import { Banner } from './Banner';
import { SearchBar } from './SearchBar';
import { Advert } from './Advert';
*/
import { CategoriesList } from './CategoriesList';

class Home extends React.Component {
  render() {
    return (
      <div>
        {/*
        <Header/>
        <Banner/>
        <SearchBar/>
        <Advert/>
        <Footer/>
        */}

        <CategoriesList />
      </div>
    );
  }
}

export default Home;
