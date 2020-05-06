import React, { useState, useEffect } from 'react';
import RecipesList from './RecipesList';
import Header from './Header';
import Footer from './Footer';
import './Css/ListPage.css';
import axios from 'axios';
import _ from 'lodash';
import AdvancedSearch from './AdvancedSearch';

export default function ListPage() {
  return (
    <div className="listPage">
      <Header />
      <AdvancedSearch />
      <RecipesList />
      <Footer />
    </div>
  );
}
