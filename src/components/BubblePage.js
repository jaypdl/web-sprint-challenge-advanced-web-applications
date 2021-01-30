import React, { useEffect, useState } from "react";
import axiosWithAuth from '../helpers/axiosWithAuth';
import getColorData from '../helpers/getColorData';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  // const getData = () => {
  //   axiosWithAuth()
  //     .get('/colors')
  //     .then(res => {
  //       // console.log(res.data)
  //       setColorList(res.data);
  //     })
  //     .catch(err => {
  //       console.log('failed to retrieve colors: ', err);
  //     })
  // }
  
  useEffect(() => {
    getColorData()
      .then(res => {
        setColorList(res);
      })
  },[])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
