import React from 'react';
import Marquee from 'react-fast-marquee';
import './Trust.css';
import { useContext } from 'react';
import { ThemeContext } from '../../../../Context/Theme';

const Trust = () => {
    const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (
    <div className='my-5'>
        <h3 className='text-center mb-5'>Trusted by over 200+ companies</h3>
        <Marquee>
            <div className='image-wrapper' style={{ color: isDark ? "black" : "black" }}>
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