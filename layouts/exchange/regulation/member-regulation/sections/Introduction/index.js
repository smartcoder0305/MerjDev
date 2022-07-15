import React from 'react';

const Introduction = () => {
  return (
    <section>
      <h2>Overview</h2>
      <p>Members of MERJ Exchange must meet one of the following minimum licensing requirements:</p>
      <ul>
        <li>Licensed Securities Dealer pursuant to the Securities Act 2007; or</li>
        <li>
          Licensed equivalent of a Securities Dealer in a "recognized jurisdiction" and a member of
          a securities exchange in a "recognized jurisdiction"
        </li>
      </ul>

      <p>
        MERJ Members must meet initial and ongoing requirements for Members, as laid down by MERJ
        pursuant to the Market Rules. Members are regulated by the MERJ Regulation Division for such
        matters as, their conduct with clients, trading activities and capital adequacy.
      </p>
      {/* <p>
        The Seychelles Securities Act 2007 and subsequent regulations provides a clearly defined
        legal framework in line with international best practices to underpin regulation of MERJ
        Exchange markets. The MERJ EXCHANGE Rules and Listing Requirements build upon this legal
        framework and provide a simplified and clearly defined framework using industry best
        practice principles. MERJ EXCHANGE operates within an orderly and transparent market
        structure designed to instill confidence to our Members, participants and the investment
        community.
      </p>
      <p>
        The MERJ EXCHANGE Regulation Division oversees market activities to monitor and enforce
        adherence to prevailing laws and regulations that govern the behaviour of:
      </p>
      <ul>
        <li>Members</li>
        <li>Direct ATS Participants</li>
        <li>Issuers</li>
        <li>“Affect Persons”</li>
      </ul>
      <p>
        MERJ EXCHANGE uses advanced technology and algorithms to help detect, prevent and analyse
        abusive, manipulative and illegal trading activity in our markets.
      </p> */}
    </section>
  );
};

Introduction.propTypes = {};
Introduction.defaultProps = {};

export default Introduction;
