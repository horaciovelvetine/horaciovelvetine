export default function makeObjectCopy(object) {
  //==> takes in an an object and returns a simple copy of the original 
  //==> for future reading: https://lodash.com/
  return Object.fromEntries(Object.entries(object).map(([k, v]) => [k, v]))
}