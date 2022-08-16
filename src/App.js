import React, { useEffect, useState } from 'react'
import './App.css';
import { getProductsAsync } from './services/productService';
import { useDispatch, useSelector } from 'react-redux';
import { ProductCard } from './components/ProductCard';
import { ProductDetails } from './components/ProductDetails';
import { asyncStatuses } from './utils/asyncStatuses';
import { Loading } from './assets/Loading';
import { Stack } from '@mui/system';


const App = () => {

  const dispatch = useDispatch()
  const { data, status } = useSelector(state => state.product)

  const [viewDetails, setViewDetails] = useState(null)

  useEffect(() => {
    if (status === asyncStatuses.IDLE) {
      dispatch(getProductsAsync())
    }
  }, [])



  if (status === asyncStatuses.LOADING) {
    return <Stack justifyContent='center' alignItems='center' sx={{ height: '100vh', width: '100%' }}>
      <Loading />
    </Stack>
  }



  if (status === asyncStatuses.ERROR) {
    return <div><h3>Something went wrong!</h3></div>
  }





  if (status === asyncStatuses.SUCCEEDED) {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>

        {viewDetails && <ProductDetails data={viewDetails} open={setViewDetails} />}
        {
          data.map((item, index) => {



            return <ProductCard

              onClickHandle={setViewDetails}


              data={item} key={index} />
          })
        }





      </div>
    )
  }
}

export default App