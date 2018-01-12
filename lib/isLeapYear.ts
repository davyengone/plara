// on every year that is evenly divisible by 4
  // except every year that is evenly divisible by 100
    // unless the year is also evenly divisible by 400
export const isLeapYear = (year: number): Boolean =>
    [year].filter(year => (!(year % 4) && year % 100 !== 0) || (!(year % 4) && !(year % 400))).length > 0;
