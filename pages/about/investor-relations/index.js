import React, { Component } from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

// import * as APIHelper from '../../utils/APIHelper';
import Jumbotron from '../../../components/Jumbotron';
import moment from 'moment';
import PageTabs  from '../../../components/PageTabs';
import Calendar from '../../../layouts/investor-relations/sections/Calendar';
import Announcements from '../../../layouts/investor-relations/sections/Announcements';
import Background from '../../../layouts/investor-relations/sections/Background';

export class InvestorRelations extends Component {

  constructor() {
    super();
    this.state = {
      jumbotronHeight: 0
    }
    this.jumbotronRef = React.createRef();
  }

  componentDidMount() {
   


  }

  returnClientHeight = (height) => {
    this.setState({jumbotronHeight: height});
  }

  render() {

    let sections = [
      {
        title: 'Background',
        id: 'Background',
        content: <Background/>,
        documents: [],
      },
      {
        title: 'Announcements',
        id: 'Announcements',
        content: <Announcements/>,
        documents: [],
      },
      {
        title: 'Calendar',
        id: 'Calendar',
        content: <Calendar/>,
        documents: [],
      },
    
    ];
    return (
        <main>
          <Jumbotron title="Investor Relations" subtitle="" returnClientHeight={this.returnClientHeight}/>

          <PageTabs JumbotronHeight={this.state.jumbotronHeight} pageTitle={""} sections={sections}/>

        </main>
    );
  }
}

export default InvestorRelations;
