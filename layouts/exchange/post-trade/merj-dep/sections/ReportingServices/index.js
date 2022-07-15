import React from 'react';
import app from '../../../../../../config/app'
import Link from 'next/link';

const ReportingServices = () => {
  return (
    <section>
      <h3>Reporting Services</h3>
      <p>
      MERJ Dep can generate a variety of reports that allows the Issuer to get a snapshot or a full register of the securities held electronically in a number of formats, such as a list of top registered security holders or a summary of security holders by country.
      Furthermore, MERJ Dep can provide a Comparison of Movement report that shows the change in shareholdings on a daily, weekly or monthly basis
      </p>

      <p>
        For more information, please contact <a href={`mailto:${app.contact.email.support}`}> {app.contact.email.support} </a>
        page.
      </p>
    </section>
  );
};

ReportingServices.propTypes = {};
ReportingServices.defaultProps = {};

export default ReportingServices;
