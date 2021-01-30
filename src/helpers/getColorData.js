import axiosWithAuth from './axiosWithAuth';


//Had to move the actual request out of BubblePage.js since I kept getting testing errors about '.get' not being a function when trying to do a mock, causing all my tests to fail.

const getColorData = () => {
  return axiosWithAuth()
    .get('/colors')
    .then(res => {
      // console.log(res.data)
      return (res.data);
    })
    .catch(err => {
      console.log('failed to retrieve colors: ', err);
    })
}

export default getColorData;