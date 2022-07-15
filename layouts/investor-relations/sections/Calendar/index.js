import React from 'react';
import styles from './styles.scss';
import * as APIHelper from '../../../../utils/APIHelper';
import moment from 'moment';
export default class Calendar extends React.Component {
    constructor() {
        super();
        this.state = {
            tableData: []
        }
      }
    
      componentDidMount() {
        APIHelper.getInvestorRelationsCalendar().then((res) => {
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
            var dateA = new Date(b.Date), dateB = new Date(a.Date);
            return dateA - dateB;
        });
    

        return (
            <section>
                <h2>Calendar</h2>
                <table className={styles.CalendarTable}>
                    <thead>
                        <tr>
                            <th><strong>Date</strong></th>
                            <th><strong>Agenda</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sortedTableData.length > 0 && sortedTableData.map((row) => {
                                return (
                                    <tr>
                                        <td>{moment(row.Date).format("DD MMM YYYY")}</td>
                                        <td>{row.File ? (<a href={row.File.url} target="_blank" download={true}>{row.Agenda}</a>) : row.Agenda}</td>
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
