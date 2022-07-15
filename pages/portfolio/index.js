import React, { Component } from 'react';

import helpers from '../../static/styles/helpers.scss';
import { Tabs } from '../../components/Tabs';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import PortfolioSection from '../../layouts/portfolio/portfolioSection';
import PageTabs  from '../../components/PageTabs';
import Jumbotron from '../../components/Jumbotron';

import * as APIHelper from '../../utils/APIHelper';
import { ValidateStatus } from '../../utils/RedirectHelper';

export class Portfolio extends Component {
    constructor(){
        super();
        this.state={}
    }


    render() {
        let sections = [
            {
                title:'Portfolio', 
                id:'portfolio',
                content: <PortfolioSection />,
                documents: [],
                url: '/portfolio'
            },
        ];
        return (
                <main>
                        <div> 
                             <Jumbotron title="Portfolio"/>
                            <div>
                                <PageTabs JumbotronHeight={this.state.jumbotronHeight} sections={sections}/>
                            </div>
                        </div>
                </main>
        );
    }
}


export default Portfolio;