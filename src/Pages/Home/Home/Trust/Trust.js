import React from 'react';
import Marquee from 'react-fast-marquee';
import './Trust.css';

const Trust = () => {
  return (
    <div className='mb-5'>
        <h2 className='text-center mb-5 fw-bold'>Trusted by over 200+ companies</h2>
        <Marquee>
            <div className='image-wrapper'>
                <img src="https://tanushri-das.github.io/Pro-Eschool/images/company/company-1.png" alt="" />
            </div>
            <div className='image-wrapper'>
                <img src="https://tanushri-das.github.io/Pro-Eschool/images/company/company-2.png" alt="" />
            </div>
            <div className='image-wrapper'>
                <img src="https://tanushri-das.github.io/Pro-Eschool/images/company/company-3.png" alt="" />
            </div>
            <div className='image-wrapper'>
                <img src="https://tanushri-das.github.io/Pro-Eschool/images/company/company-4.png" alt="" />
            </div>
            <div className='image-wrapper'>
                <img src="https://tanushri-das.github.io/Pro-Eschool/images/company/company-5.png" alt="" />
            </div>

        </Marquee>
    </div>
  )
}

export default Trust