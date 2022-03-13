export default function sortByAttr(attr, coll, ord = 'asc') {
  // coll == collection of objects
  // attr == attribute to sort object by
  // ord == inCase sort by des

  const sortedArray = coll.sort((a, b) => (a[`${attr}`] > b[`${attr}`]) ? 1 : -1)
  return (!ord != 'asc' ? sortedArray : sortedArray.reverse())

}