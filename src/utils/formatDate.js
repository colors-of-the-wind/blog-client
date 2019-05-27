export const formatEn = millinSeconds => {
  let date = new Date (millinSeconds);
  let monthArr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Spt',
    'Oct',
    'Nov',
    'Dec',
  ];
  let suffix = ['st', 'nd', 'rd', 'th'];

  let year = date.getFullYear (); //年
  let month = monthArr[date.getMonth ()]; //月
  let ddate = date.getDate (); //日

  if (ddate % 10 < 1 || ddate % 10 > 3) {
    ddate = ddate + suffix[3];
  } else if (ddate % 10 === 1) {
    ddate = ddate + suffix[0];
  } else if (ddate % 10 === 2) {
    ddate = ddate + suffix[1];
  } else {
    ddate = ddate + suffix[2];
  }

  return ddate + ' ' + month + ' ' + year;
};
