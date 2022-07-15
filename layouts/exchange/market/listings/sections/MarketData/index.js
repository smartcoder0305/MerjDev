import React from 'react';

const MarketData = () => {
  return (
    <section>
      <h2>Market Data</h2>

      <p>MERJ market data is currently available via the data vendor, Bloomberg.</p>

      <p>
        Current market prices (delayed) of the top 10 listings by market cap in each market are
        available on the homepage.
      </p>

      <p>
        Tick-by-tick market data is available for Members, their DMA clients and direct ATS
        Participants of MERJ Exchange.
      </p>

      <p>
        If you would like to request login details, please <a href="/enquiries/general/contact">contact us</a>.
      </p>
    </section>
  );
};

MarketData.propTypes = {};
MarketData.defaultProps = {};

export default MarketData;
