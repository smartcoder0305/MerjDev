import React from 'react';

export default class EmailComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Check your mail</h1>
                <div>A reset password link has been sent to the email address we have on record </div>
            </div>
        );
    }

}