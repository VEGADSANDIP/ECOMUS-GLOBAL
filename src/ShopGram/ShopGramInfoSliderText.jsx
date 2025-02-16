import React from 'react';

function ShopGramInfoSliderText(props) {

    return (

        <>
            <div className='my-10'>
                <div className='flex justify-center items-center'>
                    <div className='w-14 h-14 text-center'>
                        <img src={props.img} alt="" />
                    </div>
                </div>
                <div className='text-center'>
                    <h3 className='font-semibold my-3 text-lg'>
                        {props.heading}
                    </h3>
                    <p className='text-base'>
                        {props.text}
                    </p>
                </div>
            </div>
        </>
    )
}

export default ShopGramInfoSliderText;