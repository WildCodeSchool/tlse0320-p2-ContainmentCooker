import React from 'react';

import Footer from './Footer';



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