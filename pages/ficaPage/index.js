import React from 'react';
import {Wizard} from '../../components/Wizard';
import Header from '../../components/Header';
import helpers from '../../static/styles/helpers.scss';
import { ValidateStatus } from '../../utils/RedirectHelper';
import * as APIHelper from '../../utils/APIHelper';


export default class Fica extends React.Component{
    constructor() {
        super() 
        this.state = {
            applicationComplete: false
        }
    }

    componentDidMount() {
        
        APIHelper.GetClientStatus().then((response) => {
            if(response) {
                var status = response.Data.State;
                ValidateStatus('AwaitingKycState', status)
                if(status && status === 'ApplicationCompletedState' ) {
                    this.setState({applicationComplete: true});
                }
            }
          })
    
      }

    render(){
        return(
                <main>
                    {
                        this.state.applicationComplete ?  null :  <Wizard title='KYC verification' subText="" activeStep='5'/>
                    }
                    <div className={helpers.paddedInner}>
                        <div>
                            Your documents are being reviewed. Please allow 72hours to for Processing.
                        </div>
                    </div>
                </main>
        );
    }
}
