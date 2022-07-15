import React from 'react';
import Link from 'next/link';

const Q12019 = () => {
  return (
    <section>
      <h2>Q1 2019</h2>

      <p>
        <strong>
          MERJ DEP plans to roll out the following registry services for “tokenized’ securities in
          Q1 2019.
        </strong>
      </p>

      <p>
        MERJ DEP plans to provide registry services for Ethereum ERC20 based security tokens issued
        by Seychelles companies and any other companies whereby the respective company law allows
        the shares to be maintained outside of the jurisdiction by a depository/registrar. Our
        registry solution will interact with the Ethereum blockchain through a piece of middleware
        allowing it to be updated automatically by changes to the blockchain in real time. Each
        shareholder will be associated with a hash address. In order to meet prevailing company law
        requirements, a share register will be able to be produced by pulling the current balances
        maintained on the blockchain and marrying with the identity information for each shareholder
        as required to be presented in a share register.{' '}
      </p>

      <p>
        By maintaining the register in this way (off chain), it will meet standard company law
        requirements for maintaining a share register.
      </p>

      {/* <h4>Highlights</h4>
      <ul>
        <li>
          registry services for Ethereum ERC20 based security tokens including standardized
          protocols such as ST20, R Token and DS Protocol and others in the future
        </li>
        <li>securities token creation and issuance</li>
        <li>
          pre-transfer controls through whitelisting of blockchain addresses to support better
          compliance with prevailing AML laws, private shares restrictions and to ensure the company
          is able to identify and contact all of its shareholders as required by applicable law
          (i.e. whitelisted addresses can include MERJ Depository, brokers, custodians, other
          depositories, KYC’d investors, etc.)
        </li>
        <li>
          support for direct “on chain” transfers between whitelisted blockchain addresses providing
          for better efficiency and lower costs than standard manual processes
        </li>
        <li>
          precise control over trading windows (i.e. ability to block “on chain” transfers during a
          closed period)
        </li>
        <li>
          publicly verifiable positions of shareholders and on chain transfers between parties
        </li>
        <li>
          immutable history of transactions on a public, permission-less blockchain platform to
          support more accurate and transparent cap table management
        </li>
        <li>
          protection against security problems and fraudulent transfers with ability to arbitrate
          transactions and remedy mistaken transactions
        </li>
        <li>
          “future proof” from changes in security token protocols, technical problems with a
          particular blockchain platform or potential advances with a more desirable blockchain
          platform in the future
        </li>
      </ul> */}

      <p>
        For non-Seychelles issuers, MERJ may license its registry solution on a SaaS basis directly
        to the issuer or to third party registrars in those countries. For more information please
        contact us on the{' '}
        <Link href="/enquiries/general/enquiries">
          <a>Enquiries</a>
        </Link>{' '}
        page.
      </p>
    </section>
  );
};

Q12019.propTypes = {};
Q12019.defaultProps = {};

export default Q12019;
