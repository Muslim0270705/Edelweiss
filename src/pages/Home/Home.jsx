import React from 'react';
import Advatages from './Advatages';
import Catalog from './Catalog';
import Compilation from './Compilation';
import Games from './Games';
import MainSection from './MainSection';
import Seo from './Seo';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <main>
          <Slider/>
          <MainSection/>
          <Catalog/>
          <Advatages/>
          <Compilation/>
          <Games/>
          <Seo/>
        </main>
    );
};

export default Home;