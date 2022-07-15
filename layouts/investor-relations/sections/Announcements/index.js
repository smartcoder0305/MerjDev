import React from 'react';
import styles from './styles.scss';
import * as APIHelper from '../../../../utils/APIHelper';
import moment from 'moment';

export default class Announcements extends React.Component {
    constructor() {
        super();
        this.state = {
            tableData: []
        }
      }
    
      componentDidMount() {
        APIHelper.getInvestorRelationsAnnouncements().then((res) => {
            return res.json();
        }).then((response) => {
            if(response.statusCode !== 404) {

            this.setState({
                tableData: response
            })
        }
        })
      }


    
    

    render(){
        var sortedTableData = this.state.tableData.sort((a, b) => {
            var dateA = new Date(b.PublicationDate), dateB = new Date(a.PublicationDate);
            return dateA - dateB;
        });

        return (
            <section>
                <h2>Announcements & Publications</h2>

                <div>Click below to read the latest announcements from MERJ Exchange Limited.</div>
                <br/>
                <table className={styles.AnnouncementsTable}>
                    <thead>
                        <tr>
                            <th><strong>Item</strong></th>
                            <th><strong>Publication Date</strong></th>
                            <th><strong>Publication Type</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sortedTableData.length > 0 && sortedTableData.map((row) => {
                                return (
                                    <tr>
                                        <td>{row.Publication ? (<a href={row.Publication.url} target="_blank" download={true}>{row.Name}</a>) : row.Name}</td>
                                        <td>{moment(row.PublicationDate).format("DD MMM YYYY")}</td>
                                        <td>{row.PublicationType}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
        );
    }

};
