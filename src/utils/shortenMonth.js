const monthAbbreviations = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sep",
  October: "Oct",
  November: "Nov",
  December: "Dec",
}

const shortenMonth = month => monthAbbreviations[month]

export const formatDate = date => {
  const dateSplit = date.split(" ")
  const shortenedMonth = shortenMonth(dateSplit[0])

  return `${shortenedMonth} ${dateSplit[1]} ${dateSplit[2]}`
}
