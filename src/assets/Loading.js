import React from 'react'
import './loading.css';


export const Loading = () => {
    return (
        <div className='spinner-main'>
            <div className='spinner'>

                Loading

                <div className='spinner-selector spinner-selector-1'></div>
                <div className='spinner-selector spinner-selector-2'></div>
                <div className='spinner-selector spinner-selector-3'></div>


            </div>
        </div>
    )
}
