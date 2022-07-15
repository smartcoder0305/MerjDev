import React from 'react';

import * as APIHelper from '../../utils/APIHelper';
export default class SponsorList extends React.Component{

    constructor(props){
        super(props);

        this.fetchSponsorslist = this.fetchSponsorslist.bind(this);
        this.setSponsorsList = this.setSponsorsList.bind(this);

        this.state ={
            sponsor: null
        };
    }

    componentDidMount(){
        this.fetchSponsorslist();
    }

    async fetchSponsorslist(){
        APIHelper.fetchSponsorslist().then((resolve) => {
            return resolve.json();
        }).then((result) => {
            this.setSponsorsList(result);    
        })
    }

    setSponsorsList(sponsors){
        this.setState({
            sponsor: sponsors
        })
    }


    render(){
        const { sponsor} = this.state;
        const { render} = this.props;

        return render(sponsor);
    }
}