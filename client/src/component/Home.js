import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Home = () => {
  const [state, setstate] = useState('');
  const [submit, setsubmit] = useState('Get Shorten');
  // http://localhost:5000/api/url/shortner
  const handleclick = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/url/shortner', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        longUrl: state,
      }),
    });
    const data = await res.json();
    if (!data) {
      window.alert('there some error');
    } else {
      // window.alert('get the link ');

      console.log(data);
      setstate(data.shortUrl);
      setsubmit('copy');
    }
  };

  return (
    <div className='home'>
      <div className='container'>
        <center>
          <h1 className='py-5'>URL SHORTNER</h1>
        </center>
        <div className='pt-5 mt-5 input-group mb-3'>
          <div className='input-group input-group-lg'>
            <div className='input-group-prepend'></div>
            <input
              type='text'
              className='form-control'
              aria-label='Large'
              aria-describedby='inputGroup-sizing-sm'
              placeholder=' Paste or Enter your Long url for shorten it'
              value={state}
              onChange={(e) => {
                setstate(e.target.value);
                setsubmit('Get Shorten');
              }}
            />
            <CopyToClipboard text={state}>
              <div className='input-group-append'>
                {submit === 'copy' ? (
                  <button
                    className='btn btn-success'
                    type='button'
                    onClick={handleclick}
                  >
                    {submit}
                  </button>
                ) : (
                  <button
                    className='btn button_submit'
                    type='button'
                    onClick={handleclick}
                  >
                    {submit}
                  </button>
                )}
                {/* {!submit === 'copy' ? alert('copied!') : null} */}
              </div>
            </CopyToClipboard>
          </div>
          <center>
            <h5 className='mt-5 mx-auto'>
              This is a free tool to shorten a URL or reduce a link Use our URL
              Shortener to create a shortened link making it easy to remember
            </h5>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Home;
