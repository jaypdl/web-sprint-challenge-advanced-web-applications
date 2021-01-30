import axiosWithAuth from './axiosWithAuth';

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