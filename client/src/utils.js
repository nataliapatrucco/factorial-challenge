export const getTimeStamp = (date) => {
  return Math.floor(new Date(date).getTime() / 1000);
};

export const getFormatedDate = (time) => {
  let numeric = { day: "numeric", month: "numeric" };
  return new Date(time).toLocaleDateString("en-US", numeric);
};

export const getFormatedData = (data) =>
  data
    .sort((a, b) => a.timeStamp - b.timeStamp)
    .map((ele) => {
      return { x: getFormatedDate(ele.timeStamp), y: ele.price };
    });

export const getAverage = (arr) => {
  var sums = {},
    counts = {},
    results = [],
    x;

  for (var i = 0; i < arr.length; i++) {
    x = arr[i].x;
    if (!(x in sums)) {
      sums[x] = 0;
      counts[x] = 0;
    }
    sums[x] += arr[i].y;
    counts[x]++;
  }

  for (x in sums) {
    results.push({ x: x, y: Math.floor(sums[x] / counts[x]) });
  }
  return results;
};

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumSignificantDigits: 2,
});

export const formatCurrency = (value) => {
  return formatter.format(value);
};
