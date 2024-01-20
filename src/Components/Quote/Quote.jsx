import React from 'react'
import Header from '../Home/Header'
import quoteData from "./Data.json";
import Footer from "./Footer/Footer";
import QuoteCard from "./QuoteCard";

const Quote = () => {
  window.scroll(0,0)
  return (
    <>
      <Header />
      <div className="App">
        <Header />
        {quoteData.map((dt) => {
          return <QuoteCard {...dt} />;
        })}
        <Footer />
      </div>
    </>
  );
}

export default Quote
