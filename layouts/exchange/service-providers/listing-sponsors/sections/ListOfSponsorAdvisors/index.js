import React from 'react';

import SponsorList from '../../../../../../components/SponsorsList';
import Spinner from '../../../../../../components/Spinner';
import helpers from '../../../../../../static/styles/helpers.scss';
import styles from './styles.scss';

const ListOfSponsorAdvisors = () => {
  return (
    <section>
      <h2>List of Sponsor Advisors</h2>
      {
        <SponsorList render={(Sponsor) => {

          if (Sponsor) {
            return (
              <div>
                {
                  Sponsor.sort((a, b) => {
                    var A = a.Name.toUpperCase();
                    var B = b.Name.toUpperCase();
                    return (A < B) ? -1 : (A > B) ? 1 : 0;
                  }).map((item, index) => {
                    return (
                      <table key={index} className={styles.membersTable}>
                        <tbody>
                          {
                            item.logo? 
                            <tr>
                            <td rowSpan="7">
                                <div>
                                    <img src={item.logo.url} alt={item.logo.name} />
                                </div>
                            </td>
                           </tr>: <tr>
                            <td rowSpan="7">
                                <div className={helpers.logoPlaceholder}>
                                </div>
                            </td>
                           </tr>
                          }
                           <tr>
                                <td className={styles.tdTitle}>
                                  <strong>Name:</strong>
                                </td>
                                <td className={styles.tdData}>{item.Name}</td>
                              </tr>
                              <tr>
                                <td className={styles.tdTitle}>
                                  <strong>Contact Person:</strong>
                                </td>
                                <td className={styles.tdData}>{item.ContactPerson}</td>
                              </tr>
                              <tr>
                                <td className={styles.tdTitle}>
                                  <strong>Address:</strong>
                                </td>
                                <td className={styles.tdData}>{item.Address}</td>
                              </tr>
                              {
                                item.Email ? (
                                  <tr>
                                    <td className={styles.tdTitle}>
                                      <strong>Email:</strong>
                                    </td>
                                    <td>
                                      {item.Email}
                                    </td>
                                  </tr>
                                ) : null
                              }
                              <tr>
                                <td className={styles.tdTitle}>
                                  <strong>Phone Number:</strong>
                                </td>
                                <td>
                                  <a href={`tel: ${item.PhoneNumber}`}>{item.PhoneNumber}</a>
                                </td>
                              </tr>
                              {
                                item.Website ? (
                                  <tr>
                                    <td className={styles.tdTitle}>
                                      <strong>Website:</strong>
                                    </td>
                                    <td>
                                      <a href={item.Website}>{item.Website}</a>
                                    </td>
                                  </tr>
                                ) : null
                              }
                        </tbody>
                      </table>
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

ListOfSponsorAdvisors.propTypes = {};
ListOfSponsorAdvisors.defaultProps = {};

export default ListOfSponsorAdvisors;
