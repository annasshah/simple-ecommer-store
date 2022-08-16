import React, { useEffect, useState } from 'react'
import { Loading } from '../assets/Loading';
const { innerWidth: width, innerHeight: height } = window;



// const product = {
//     id: 1,
//     title: "Unbranded Wooden Chair",
//     price: 513,
//     description: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
//     category: {
//         id: 4,
//         name: "Shoes",
//         image: "https://api.lorem.space/image/shoes?w=640&h=480&r=5587"
//     },
//     images: [
//         "https://api.lorem.space/image/shoes?w=640&h=480&r=4050",
//         "https://api.lorem.space/image/shoes?w=640&h=480&r=1957",
//         "https://api.lorem.space/image/shoes?w=640&h=480&r=1957",
//         "https://api.lorem.space/image/shoes?w=640&h=480&r=4992"
//     ]
// }

export const ProductDetails = ({ data, open }) => {
    const [product, setProduct] = useState(null)







    const closeHandle = () => {

        open(null)
        setProduct(null)
    }


    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/${data.id}`)
            .then(res => res.json())
            .then(json => {
                let arr = []
                arr.push(json)
                setProduct([...arr])
            })
    }, [])






    return (
        <div style={{ backgroundColor: '#00000057', position: 'absolute', height: '100%', width: '100%' }} >

            <div  style={{ height: height, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <div style={{ backgroundColor: '#fff', position: 'fixed', height: '700px', width: '100%', maxWidth: '1000px', borderRadius: 10 }}>


                    {
                        product ? <div style={{ padding: '0 20px' }}>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h1>
                                    Product Details
                                </h1>


                                <button onClick={closeHandle} style={{ cursor: 'pointer', fontSize: 25, borderStyle: 'none', backgroundColor: 'transparent' }}>x</button>


                            </div>

                            <hr />


                            {product.map((e, index) => {

                                const { title, images, category, description, price, id } = e


                                return (<div key={index} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', height: '100%', flex: 1 }
                                }>
                                    <div style={{ height: 590, overflowY: images?.length > 2 ? 'scroll' : 'hidden', flex: 1 }}>
                                        {images?.map((image, ind) => <div key={ind}>
                                            <img src={image} loading="lazy" width='280px' />
                                        </div>)}



                                    </div>
                                    <div style={{ marginLeft: 30, flex: 2 }}>
                                        <div style={{ marginBottom: 30 }}>
                                            <h3 style={{ marginTop: 0, marginBottom: 5 }} >Product Title
                                            </h3>
                                            <span style={{ fontSize: 25, color: 'gray' }}>{title}</span>
                                        </div>


                                        <div style={{ marginBottom: 30 }}>
                                            <h3 style={{ marginTop: 0, marginBottom: 5 }} >Description
                                            </h3>
                                            <span style={{ fontSize: 17, color: 'gray' }}>{description}</span>
                                        </div>


                                        <div style={{ marginBottom: 30 }}>
                                            <h3 style={{ marginTop: 0, marginBottom: 5 }} >Price
                                            </h3>
                                            <span style={{ fontSize: 20, color: 'gray' }}>${price}</span>
                                        </div>


                                        <div style={{ marginBottom: 30 }}>
                                            <h3 style={{ marginTop: 0, marginBottom: 10 }} >Category
                                            </h3>

                                            <div style={{ display: 'flex' }}>
                                                <div style={{ width: '25px', height: '25px', borderRadius: '50%', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
                                                    <img src={category.image} width='100%' />
                                                </div>
                                                <span style={{ fontSize: 20, color: 'gray', marginLeft: 10 }}>{category.name}</span>
                                            </div>
                                        </div>




                                        <div style={{ marginTop: 40 }}>

                                            <button style={{
                                                cursor: 'pointer', fontSize: 20, border: '1px solid #f6ae66', backgroundColor: 'orange', color: 'white', padding: '15px 40px', borderRadius: '10px'



                                            }}>Buy Now</button>


                                            <button style={{
                                                cursor: 'pointer', fontSize: 20, backgroundColor: 'black', color: 'white', borderStyle: 'none', padding: '15px 40px', borderRadius: '10px', marginLeft: 30



                                            }}>Add to Cart</button>

                                        </div>


                                    </div>
                                </div>)
                            })}









                        </div> : <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '700px',zIndex:1001}}><Loading/></div>
                    }







                </div>


            </div>

        </div >
    )
}
