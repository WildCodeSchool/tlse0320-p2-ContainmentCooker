import React from 'react';
import Header from './Header';
import ContactForm from './ContactForm';
import Footer from './Footer';

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
