import * as moment from 'moment'

const convertDateStringToNotPrettyDate = (dateString) => {
    const date = new Date(dateString);
    const prettyNotDate = moment(date).format("YYYY-MM-DD");
    return prettyNotDate;
  };

  export default convertDateStringToNotPrettyDate; 