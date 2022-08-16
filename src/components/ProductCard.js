import React from 'react'

export const ProductCard = ({onClickHandle,data}) => {
    const { images, title, price } = data
    return (
        <div onClick={() => onClickHandle(data)} style={{ border: '1px solid lightgray', borderRadius: 5, marginTop: '40px', textAlign: 'center', marginLeft: '7px', marginRight: '7px' }}>
            <img src={images[0]} loading="lazy" width='250px' />
            <h3>{title}</h3>
            <h5>${price}</h5>
        </div>
    )
}
