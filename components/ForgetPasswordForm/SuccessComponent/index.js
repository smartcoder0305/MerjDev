import React from 'react';
import Button from '../../Button'
import Router from 'next/router';
export default class EmailComponent extends React.Component{

    constructor(props){
        super(props);
    }

    goToLogin = () => {
        window.location.assign('/login');
    }

    render(){
        return(
            <div>
                <h1>Success</h1>
                <div>Your password has been changed successfully</div>
                <br />
                <Button handleClick={this.goToLogin}> Login </Button>
            </div>
        );
    }
}