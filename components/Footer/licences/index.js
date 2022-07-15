import React, { Component } from 'react'

import styles from "./styles.scss"

export default class Licences extends Component {
  render() {
    return (
      <>
            <section className={styles.licenceSection}>
                <h2 className={styles.sectionHeader}>Licences</h2>
                <div>
                    <li className={styles.licences}>MERJ Exchange Limited: Licensed securities exchange operator (License No. SE001)</li>
                    <li className={styles.licences}>MERJ Clearing and Settlement Limited: Licensed clearing agency (License No. CA001)</li>
                    <li className={styles.licences}>MERJ Depository and Registry Limited: Licensed securities facility (License No. SF001)</li>
                </div>
            </section>
      </>
    )
  }
}
