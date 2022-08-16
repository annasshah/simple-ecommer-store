import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard';
import { ProductDetails } from './ProductDetails';





export const SuspenseTest = () => {
    const [data, setData] = useState([])
    const [viewDetails, setViewDetails] = useState(null)




    useEffect(() => {




        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(json => {
                setData(json)
            })


    }, [])








    return (
        <div style={{position:'relative'}}>
  
                {viewDetails && <ProductDetails data={viewDetails} open={setViewDetails}   />}


            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                {
                    data.map((item, index) => {
                       


                       return <ProductCard onClickHandle={setViewDetails} data={item} key={index} />
                    })
                }

            </div>



        </div>
    )
}




