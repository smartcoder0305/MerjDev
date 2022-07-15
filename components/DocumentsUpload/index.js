import React from 'react';
import * as APIHelper from '../../utils/APIHelper';
import ClientStatus from './ClientStatus';
import DocumentComponent from './documents';

export default class Documents extends React.Component{

    constructor(){
        super();
        
        this.state = {
            Client: null, 
            ClientType: '',
            dataAvailable: false,
            status: {}
        }
    }

    componentDidMount(){
        APIHelper.GetClientDetails().then((response)=>{
            let client = response.Data;
            let clientType = '';
            let status = null;
            if(client.IsIndividual) clientType = "Individual";
            if(client.IsGroup) clientType = "Company";

            if(clientType == ""){
                console.log("error with sweetalert");
                return; 
            }
            APIHelper.GetClientStatus().then((res)=>{
                status = res.Data;
                this.setState({
                    Client: client,
                    ClientType: clientType,
                    dataAvailable: true,
                    status: status
                })

            })
        }).catch(err =>{
            console.log(err.message);
        })
    }

    render(){
        if(!this.state.dataAvailable) return null;
        
        const ClientType = this.state.ClientType;
        const showUpload = this.state.status !== ClientStatus.Completed;
        return(
            <DocumentComponent ClientType={ClientType} showUpload={showUpload} status={this.state.status}/>
        )  
    }
}