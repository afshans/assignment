const getTimeAgo = pastDate => {
  const pastDateTimeStamp = Date.parse(pastDate);
  const currentTime = new Date().getTime();
  let difference = currentTime - pastDateTimeStamp;
  const years = Math.floor(difference / 1000 / 60 / 60 / 24 / 30 / 12);
  difference -= years * 1000 * 60 * 60 * 24 * 30 * 12;
  const month = Math.floor(difference / 1000 / 60 / 60 / 24 / 30);
  difference -= month * 1000 * 60 * 60 * 24 * 30;
  const day = Math.floor(difference / 1000 / 60 / 60 / 24);
  difference -= day * 1000 * 60 * 60 * 24;
  const hh = Math.floor(difference / 1000 / 60 / 60);
  difference -= hh * 1000 * 60 * 60;
  const mm = Math.floor(difference / 1000 / 60);
  difference -= mm * 1000 * 60;
  const ss = Math.floor(difference / 1000);
  difference -= ss * 1000;
  if (years > 0) {
    return `${years} year(s) ago`;
  }
  if (years === 0 && month > 0) {
    return `${month} month(s) ago`;
  }
  if (month === 0 && day > 0) {
    return `${day} day(s) ago`;
  }
  if (month === 0 && day === 0 && hh > 0) {
    return `${hh} hour(s) ago`;
  }
  if (month === 0 && day === 0 && hh === 0 && mm > 0) {
    return `${mm} min(s) ago`;
  }
  if (month === 0 && day === 0 && hh === 0 && mm === 0 && ss > 0) {
    return 'few sec(s) ago';
  }
  return '';
};
export default getTimeAgo;
