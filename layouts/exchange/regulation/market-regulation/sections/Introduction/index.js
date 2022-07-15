import React from 'react';

const Introduction = () => {
  return (
    <section>
      <h2>Overview</h2>
      <p>
        The Market Rules govern all trading activities on MERJ Exchange. All orders are queued and
        executed on a strict price-time priority basis in the MERJ ATS thus ensuring a fair market for
        all participants regardless of type or size. MERJ Exchange also uses advanced technology and
        algorithms to help detect, prevent and analyze abusive, manipulative and illegal trading
        activity in our markets.
      </p>
      {/* <p>
        MERJ Members must meet initial and ongoing requirements for Members as laid down by MERJ
        pursuant to the Market Rules. Members are regulated by the MERJ Regulation Division for such
        matters as their conduct with clients, trading activities and capital adequacy.{' '}
      </p> */}
    </section>
  );
};

Introduction.propTypes = {};
Introduction.defaultProps = {};

export default Introduction;
