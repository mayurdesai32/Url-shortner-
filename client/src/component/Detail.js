import React from 'react';
import Detail2 from './Detail2';
import iconurl from '../img/icon-url.png';
import iconresponsive from '../img/icon-responsive.png';
import iconlike from '../img/icon-like.png';
const Detail = () => {
  return (
    <div className='Detail' id='about'>
      <div className='container'>
        <Detail2 />
        <div className='row d-flex justify-content-around '>
          {/* first section */}
          <div className='col-md-3 col-lg-3 text-center my-4'>
            <img src={iconlike} alt='iconlike' />
            <h3 className='text-uppercase my-3'>Easy</h3>
            <p className='text-muted'>
              ShortURL is easy and fast, enter the long link to get your
              shortened link.
            </p>
          </div>
          {/* second section */}
          <div className='col-md-3 col-lg-3 text-center my-4'>
            <img src={iconurl} alt='iconurl' />
            <h3 className='text-uppercase my-3'>Shortened</h3>
            <p className='text-muted'>
              Use any link, no matter what size, ShortURL always shortens.
            </p>
          </div>
          {/* third section */}
          <div className='col-md-3 col-lg-3 text-center my-4'>
            <img src={iconresponsive} alt='iconresponsive' />
            <h3 className='text-uppercase my-3'>Devices</h3>
            <p className='text-muted'>
              Compatible with smartphones, tablets and desktop.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
