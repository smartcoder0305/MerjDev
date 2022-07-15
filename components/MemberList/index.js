import React from 'react';

import * as APIHelper from '../../utils/APIHelper';
export default class MemberList extends React.Component{

    constructor(props){
        super(props);

        this.fetchMembersList = this.fetchMembersList.bind(this);
        this.setMembersList = this.setMembersList.bind(this);

        this.state ={
            members: null
        };
    }

    componentDidMount(){
        this.fetchMembersList();
    }

    async fetchMembersList(){
        APIHelper.fetchMembersList().then((resolve) => {
            return resolve.json();
        }).then((result) => {
            this.setMembersList(result);    
        })

    }
    setMembersList(members){
        this.setState({
            members: members
        });
    }


    render(){
        const { members } = this.state;
        const { render} = this.props;
        
        return render(members);
    }
}