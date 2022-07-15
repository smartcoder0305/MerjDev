import React from 'react';

const QuoteSearch = () => {
  return (
    <section>
      <div className='w-full'>
        <h2>MERJ-S</h2>
        <div className='row'>
          <div className='col-lg-4'>MERJ Exchange Limited</div>
          <div className='col-lg-4 ml-auto'>Ordinary Shares | <span className='text-mute'>Token</span></div>
        </div>
        <div className='col-sm-12'>
          <div className='rounded-1 p-1'>
            <div className='row border-bottom'>
              <div className='small bold'>USD</div>
              <div className='ml-auto small'>Previous Close Price 2.55</div>
            </div>
            <div className='row'>
              <div className='m-auto row'>
                <p className='bolder white'>2.64</p>
                <p>&nbsp;<i className='fa fa-long-arrow-up lightgreen'></i>&nbsp;</p>
                <p className='light white'>0.17<br/>0.44%</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>Description</h3>
          <p className='white'>
            MERJ Exchange is an operator of digital and non digital financial market infrastructure. It is a regulated market for equities, bonds and derivatives. MERJ Group companies include MERJ Exchange Limited(securities exchange), MERJ Clearing and Settlement Limited(securities clearing agency and operator of a securities clearing and settlement system) and MERJ Depository and
          </p>
        </div>
        <div className='border-top border-bottom'>
          <button className='col-sm-1 nav-btn'>Profile</button>
          <button className='col-sm-2 nav-btn'>Price Info</button>
          <button className='col-sm-2 nav-btn'>Security Details</button>
          <button className='col-sm-2 nav-btn'>Financials</button>
          <button className='col-sm-1 nav-btn'>News</button>
          <button className='col-sm-2 nav-btn'>Disclosures</button>
          <button className='col-sm-2 nav-btn'>Research</button>
        </div>
        <div className='col-md-12'>
          <table className='w-100'>
            <tr><td><b>PriceInfo</b></td></tr>
            <tr><td>Previous Change (1Day)</td><td>2.41%</td></tr>
            <tr><td>Best Bid</td><td>2.41%</td></tr>
            <tr><td>Best Ask</td><td>2.53</td></tr>
            <tr><td>Volume</td><td>2.64</td></tr>
            <tr><td>Quote Currency</td><td>300</td></tr>
            <tr><td>Market Cap</td><td>USD</td></tr>
            <tr><td>Issued Securities</td><td>22,952,254</td></tr>
          </table>
        </div>
      </div>
    </section>
  );
};

QuoteSearch.propTypes = {};
QuoteSearch.defaultProps = {};

export default QuoteSearch;
