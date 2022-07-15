import React from 'react';
import 'isomorphic-unfetch';

import HEADERS from './headers';
import styles from './styles.scss';
import helpers from '../../../../../static/styles/helpers.scss';
import * as APIHelper from '../../../../../utils/APIHelper';

import ExchangeTable from './ExchangeTable';

export default class ExchangeSection extends React.Component {
  constructor(props) {
    super(props);

    this.fetchListings = this.fetchListings.bind(this);
    this.setListings = this.setListings.bind(this);
    this.getTableData = this.getTableData.bind(this);
    this.toCommas = this.toCommas.bind(this);
    this.state = {
      listings: null,
    };
  }

  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    this.fetchListings();
  }

  async fetchListings() {
    APIHelper.fetchListings().then((resolve) => {
      return resolve.json()
    }).then((response) => {
      this.setListings(response);
    })
  }

  toCommas(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  setListings(listings) {
    this.setState({ listings });
  }

  getTableData() {
    const { listings } = this.state;
    const boardData = {
      headers: HEADERS,
      data: [],
    };

    if (listings) {
      boardData.data = listings.map((listing) => {
        const row = HEADERS.map((header) => {
          const { name, id, href } = header;
          const item = {};
          let value = listing[id];
          
          if(id === 'securityToken'){
            const { SecurityToken } = listing;
            if(SecurityToken !== undefined && SecurityToken){
              value = SecurityToken? "true": "false";
            }else{
              value = ' ';
            }
          }

          if (id === 'instrumentType') {
            const { board } = listing;
            if(value === 'Select' ){
              value = ' ';
            }else{
              value = `${value} - ${board}`;
            }
          }

          if (typeof value === 'number') {
            if (id === 'change') {
              // Round to nearest integer
              const rounded = Math.round(value);
              const string = `${rounded}%`;
              value = string;
            } else {
              const amount = Math.round(Number(value));
              // Append the currency symbol
              value = `${listing.currencySymbol} ${this.toCommas(value.toFixed(2))}`;
              // if (id === 'price') {
              //   // Assign a value based on change
              //   item.changeDirection =
              //     listing.change < 0 ? 'negative' : listing.change > 0 ? 'positive' : 'neutral';
              // }
            }
          }

          if (href) {
            // Add the href
            item.href = href;
          }

          item.name = name;
          item.value = value;
          item.id = id;
          item.isTokenSecurity = listing.SecurityToken;

          return item;
        });
        
        return row;
      });
    }

    return boardData;
  }

  render() {
    const tableData = this.getTableData();

    return (
      <div className={styles.exchangeTablesWrapper}>
        <div className={helpers.paddedInner}>
          <ExchangeTable
            title="MERJ Exchange Listings"
            headers={tableData.headers}
            data={tableData.data}
          />
        </div>
      </div>
    );
  }
}
