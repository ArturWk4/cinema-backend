const moment = require("moment");

const nowSqlDate = () => moment().format("YYYY-MM-DD HH:mm:ss");

const setExpiresSqlDate = expiresMinutesAmount => {
  const now = moment();
  now.add(expiresMinutesAmount, "minutes");
  return now.format("YYYY-MM-DD HH:mm:ss");
};

const isBookExpired = date => {
  const now = nowSqlDate();
  return moment(now).isAfter(date);
};

module.exports = {
  setExpiresSqlDate,
  isBookExpired
};
