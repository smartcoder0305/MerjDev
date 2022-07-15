const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const convertDateStringToPrettyDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth();
  const monthString = months[month];
  const year = date.getFullYear();
  const prettyDate = `${day} ${monthString} ${year}`;

  return prettyDate;
};



export default convertDateStringToPrettyDate; 

