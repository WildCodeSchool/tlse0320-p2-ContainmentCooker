import React from 'react';
import ContactForm from './ContactForm';
import Header from '../Main/Header';
import Footer from '../Main/Footer';

function Home() {
  return (
    <div className="global">
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
