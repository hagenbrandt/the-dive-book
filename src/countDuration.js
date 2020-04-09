export default function countDuration(timeDateOne, timeDateTwo) {
  const firstTime = +timeDateOne.split(':').join('')
  const secondTime = +timeDateTwo.split(':').join('')

  return secondTime - firstTime
}
