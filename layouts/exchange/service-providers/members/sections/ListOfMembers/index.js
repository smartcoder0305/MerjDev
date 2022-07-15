import React from 'react';

import MemberList from '../../../../../../components/MemberList';
import Spinner from '../../../../../../components/Spinner';
import helpers from '../../../../../../static/styles/helpers.scss';
import styles from './styles.scss';

const ListOfMembers = () => {
  const app = JSON.parse(sessionStorage.getItem("configa"));
  return (
    <section>
      <h2>List of Members</h2>

      {
        <MemberList render={(members) => {

          if(members) {
            return (
              <div className={styles.container}>
                {
                  members.map((member) => {
                    const signupUrl = app.VenusUrl + "/" + "signup/" + member.brokerName;

                    return(
                    <React.Fragment>
                      {
                        member.logo ? 
                        <div className={styles.MobileMembersLogo}>
                          <img src={member.logo.url} alt={member.logo.name} />
                          {
                             member.brokerName ?
                          <div style={{textAlign: "center"}}>
                                    <strong style={{fontSize: "12px"}}>Click below to create an account with us</strong>
                                    <div style={{margin: "10px auto", width: "80%"}}>
                                      <button
                                       onClick={() => window.location.replace(signupUrl)}  type="button" className={styles.btn} aria-label="Invest">
                                        CREATE ACCOUNT
                                      </button>
                                    </div>
                                </div> : null

                          }
                        </div>: null
                      }

                      <div>
                      </div>
                    <table className={styles.membersTable}>
                      <tbody>
                        {
                        member.logo ? 
                        <tr>
                          <td rowSpan="7" className={styles.MembersLogo}>
                            <div>
                                <img src={member.logo.url} alt={member.logo.name} />
                                {
                                  member.brokerName ?
                                  <div style={{textAlign: "center"}}>
                                    <strong style={{fontSize: "12px"}}>Click below to create an account with us</strong>
                                    <div style={{marginTop: "10px"}}>
                                      <button 
                                      onClick={() => window.location.replace(signupUrl)}  type="button" className={styles.btn} aria-label="Invest">
                                        CREATE ACCOUNT
                                      </button>
                                    </div>
                                </div> : null
                                }
                            </div>
                          </td>
                          
                         
                        </tr>: <tr>
                          <td rowSpan="7" className={styles.MembersLogo}>
                            <div className={helpers.logoPlaceholder}>
                            </div>
                          </td>
                        </tr> 
                        }
                        
                        <tr>
                            <td className={styles.tdTitle}>
                              <strong>Name:</strong>
                            </td>
                            <td className={styles.tdData}>{member.Name}</td>
                        </tr>
                        <tr >
                            <td className={styles.tdTitle}>
                              <strong>Contact Person:</strong>
                            </td>
                            <td>{member.ContactPerson}</td>
                        </tr>
                        <tr >
                            <td className={styles.tdTitle}>
                              <strong>Address:</strong>
                            </td>
                            <td>{member.Address}</td>
                        </tr>
                        {
                          member.Email ? (
                          <tr >
                            <td className={styles.tdTitle}>
                              <strong>Email:</strong>
                            </td>
                            <td>
                              {member.Email}
                            </td>
                          </tr>
                            ) : null
                        }
                        <tr>
                              <td className={styles.tdTitle}>
                                <strong>Phone Number:</strong>
                              </td>
                              <td>
                                <a href={`tel: ${member.PhoneNumber}`}>{member.PhoneNumber}</a>
                              </td>
                            </tr>
                            {
                              member.Website ? (
                                <tr>
                                  <td className={styles.tdTitle}>
                                    <strong>Website:</strong>
                                  </td>
                                  <td>
                                    <a href={member.Website}>{member.Website}</a>
                                  </td>
                                </tr>
                              ) : null
                            }

                      </tbody>
                    </table>
                    </React.Fragment>

                    )
                  })
                }
                <br />
              </div>
            );
          }
          return (
            <div>
              <Spinner />
            </div>
          )

        }} />
      }
    </section>
  );
};

ListOfMembers.propTypes = {};
ListOfMembers.defaultProps = {};

export default ListOfMembers;
