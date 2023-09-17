import React from 'react'
import Map from './Map'
import NavBar from './NavBar'
import Empty from '../Empty'
import Loading from './Loading'
import { useSelector } from "react-redux";

const HomePage = () => {

    const isLoading=useSelector(state=>state.custom.isLoading)

    return (
      <div className="wrapper">
        <Empty />
        <NavBar />
        {isLoading ? <Loading /> : <Map />}
      </div>
    );
}

export default HomePage