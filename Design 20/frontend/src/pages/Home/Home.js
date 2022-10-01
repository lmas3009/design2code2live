import React from 'react';
import Image from '../../components/Image/Image';
import Navbar from '../../components/Navbar/Navbar';
import SearchBox from '../../components/SearchBox/SearchBox';

const Home = () => {
  return (
    <div>
        <Navbar />
        <SearchBox />
        <Image />
    </div>
  )
}

export default Home