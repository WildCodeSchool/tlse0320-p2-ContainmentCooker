import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Home.css';
import RecipeClick from './RecipeClick';
import Header from './Header';
import Footer from './Footer';

function RecipePage() {
  return (
    <div className="RandomPage">
      <Header />
      <RecipeClick />
      <Footer />
    </div>
  );
}

export default RecipePage;
