export const timeConverter = (UNIX_timestamp: number) => {
  let a = new Date(UNIX_timestamp * 1000);
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[a.getMonth()];
  let date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes();

  let time: string = hour + ":" + min;

  let times: Array<string> = time.split(":");
  let meridiemTime =
    (parseInt(times[0]) >= 12 &&
      (parseInt(times[0]) - 12 || 12) + ":" + times[1] + "pm") ||
    (Number(times[0]) || 12) + ":" + times[1] + "am";

  let timeDate = meridiemTime + ", " + month + " " + date;
  return timeDate;
};

export const sunTimeConverter = (UNIX_timestamp: number) => {
  let a = new Date(UNIX_timestamp * 1000);

  let hour = a.getHours();
  let min = a.getMinutes();

  let time: string = hour + ":" + min;

  let times: Array<string> = time.split(":");
  let meridiemTime =
    (parseInt(times[0]) >= 12 &&
      (parseInt(times[0]) - 12 || 12) + ":" + parseInt(times[1]) + "pm") ||
    (Number(times[0]) || 12) + ":" + times[1] + "am";

  return meridiemTime;
};
