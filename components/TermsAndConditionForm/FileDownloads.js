import React from 'react';
import styles from './styles.scss';

export default class FileDownloads extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { files } = this.props;
        return(
            <div>
                <div className = {styles.downloadsIcon}> 
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="3785 -21840 24.306 25"> 
                        <g id="Group_57" data-name="Group 57" transform="translate(3785 -21840)">
                            <path className={styles.iconColor} id="Path_78" data-name="Path 78"  d="M28.889,49.167h.694a2.083,2.083,0,1,0,0-4.167H27.5v5.556h1.389Zm0-2.778h.694a.694.694,0,1,1,0,1.389h-.694Z" transform="translate(-19.861 -32.5)"/>
                            <path className={styles.iconColor} id="Path_79" data-name="Path 79"  d="M63.889,49.167h2.083V47.778H63.889V46.389h2.778V45H62.5v5.556h1.389Z" transform="translate(-45.139 -32.5)"/>
                            <path className={styles.iconColor} id="Path_80" data-name="Path 80"  d="M49.167,48.472V47.083A2.1,2.1,0,0,0,47.083,45H45v5.556h2.083A2.1,2.1,0,0,0,49.167,48.472Zm-2.778-2.083h.694a.688.688,0,0,1,.694.694v1.389a.688.688,0,0,1-.694.694h-.694Z" transform="translate(-32.5 -32.5)"/>
                            <path className={styles.iconColor} id="Path_81" data-name="Path 81"  d="M19.444,6.944,12.5,0H2.778A2.786,2.786,0,0,0,0,2.778V22.222A2.786,2.786,0,0,0,2.778,25H16.667a2.786,2.786,0,0,0,2.778-2.778V20.833h4.861V9.722H19.444ZM11.806,2.25l5.389,5.389H11.806Zm11.111,8.861v8.333H6.25V11.111Z"/>
                        </g>
                    </svg>
                </div>
                <div className={styles.downloadsItemsContainer}>
                    {
                        files.map( download =>{
                            return(
                                <div className={styles.downloadsItem}>
                                    <a href={`${download.link}`} download={true} target="_blank"> {download.description} </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}