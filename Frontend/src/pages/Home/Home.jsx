import React, { useContext } from 'react'
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
import { StoreContext } from '../../Context/StoreContext';

const Home = () => {

  const { category, setCategory } = useContext(StoreContext);

  return (
    <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay  category={category}/>
        <AppDownload />
    </div>
  )
}

export default Home;