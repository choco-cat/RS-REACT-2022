import React from 'react';
import Header from '../components/header';
import Search from '../components/search';

export default function Home() {
  return (
    <>
      <header className="App-header">
        <Header />
        <div>Home</div>
      </header>
      <main>
        <Search />
      </main>
    </>
  );
}
