import React, { Component } from 'react';
import styles from './styles.scss';
export class InvestInMerjTable extends Component {

  constructor() {
    super();
    this.state = {

    };
}

  componentDidMount() {


  }

  render() {

    const {table} = this.props;
    return (
      <div className={styles.investTable}>


        {
          table ?
            <table>
                <thead>
                  {
                    table.dualHeadings && table.dualHeadings.active ?
                    <tr className={styles.tableDualHeading}>
                      {
                        table.firstHeadColEmpty ?
                        <th  width={table.firstColWidth} className={styles.borderless && styles.clearCell}></th> : null

                      }

                      {
                        table.dualHeadings.headings.map((heading, index) => {
                          return (
                            <th width={table.colWidth} className={styles.imageHeader} key={index}>{heading}</th>
                          )
                        })
                      }
                    </tr>
                    : null
                  }
                    <tr>
                      {
                        table.firstHeadColEmpty ?
                        <th className={styles.borderless && styles.clearCell} width={table.firstColWidth}></th> : null
                      }

                      {
                        table.headings.map((heading, index) => {
                          return (
                            <th width={table.colWidth}  key={index}>{heading}</th>
                          )
                        })
                      }

                    </tr>

                </thead>
                <tbody>

                      {
                        table.rows.map((row, index) => {
                          return (
                            <tr key={index}>
                                {row.map((cell, indx) => {
                                  return (
                                    <td  key={indx}> {cell} </td>
                                  )
                                })}
                            </tr>
                          )
                        })
                      }


                </tbody>
            </table> : null
        }

      </div>
    );
  }
}

export default InvestInMerjTable;
