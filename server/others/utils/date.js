import moment from "moment";
const addDays = ({ date, amount }) => {
  if (!moment.isDate(date)) throw new Error("addDays() -> need valid date");
  return moment(date).add(amount, "days").toDate();
};

const setTimeZone = ({ date, utc }) => {
  return moment(date).utcOffset(utc).toDate();
};

const getTodayPlusZeroUTC = () => {
  return setTimeZone({ date: new Date(), utc: 0 });
};

const isFirstDateGreaterSecondDate = ({ firstDate, secondDate }) => {
  if (!moment.isDate(firstDate)) throw new Error("isFirstDateGreaterSecondDate() -> `firstDate` need valid date");
  if (!moment.isDate(secondDate)) throw new Error("isFirstDateGreaterSecondDate() -> `secondDate` need valid date");
  if (firstDate > secondDate) return true;
  return false;
};

export { addDays, getTodayPlusZeroUTC, isFirstDateGreaterSecondDate };
