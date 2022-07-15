import React from 'react';
import moment from 'moment';
import * as APIHelper from '../../utils/APIHelper';
export default class NonTradingDaysSection extends React.Component{

    constructor(props){
        super(props);

        this.fetchNonTradingDays = this.fetchNonTradingDays.bind(this);
        this.setNonTradingDays = this.setNonTradingDays.bind(this);
        
        this.state = {
            days : null
        };
    }

    componentDidMount(){
        this.fetchNonTradingDays();
    }

    async fetchNonTradingDays(){
        APIHelper.fetchNonTradingDays().then((resolve) => {
            return resolve.json();
        }).then((response) => {

            response = response.sort((a, b) => {
                return new moment(a.Day).format('YYYYMMDD') - new moment(b.Day).format('YYYYMMDD')
            });
            
            this.setNonTradingDays(response);
        });
    }

    setNonTradingDays(nontradingdays){
        this.setState({
            days: nontradingdays
        });
    }

    render(){
        const { days } = this.state;
        const { render} = this.props;
        
        return render(days);
    }

}