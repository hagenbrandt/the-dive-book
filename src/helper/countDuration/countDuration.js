const countDuration = (timeDateOne, timeDateTwo) => {
  const firstTime = new Date(timeDateOne)
  const secondTime = new Date(timeDateTwo)
  const diff = new Date(secondTime.getTime() - firstTime.getTime())

  return diff.getUTCMinutes()
}

export default countDuration