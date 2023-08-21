import Services from "./Services"
interface Companies{
    Namecompany: string
    NumberofEmployees: number
    YearFounded: number
    typesofservices:string
    expectedprices:number

}
function Companies(props:Companies) {
 
    return (
        <div className="Companies">
        <h3>{props.Namecompany}</h3>
        <h3>{props.NumberofEmployees}</h3>
        <h3>{props.YearFounded}</h3>
        <Services typesofservices={props.typesofservices} expectedprices={props.expectedprices}></Services>



        </div>
    )
  }

export default Companies

