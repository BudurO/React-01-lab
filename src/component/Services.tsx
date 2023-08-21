interface Services {
    typesofservices: string
    expectedprices: number
}
function Services(props:Services) {
  return (
    <>
    <h3>{props.typesofservices}</h3>
    <h3>{props.expectedprices}</h3>
    </>
  )
}

export default Services