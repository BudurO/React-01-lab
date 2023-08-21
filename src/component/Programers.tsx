
interface IProgramers{
    name:string
    programmingLanguages:string
    YearsofExperience:number
    company:string
}
function Programers(props:IProgramers) {
  return (
   <div className="Programers">
    <h3>{props.name}</h3>
    <h3>{props.programmingLanguages}</h3>
    <h3>{props.YearsofExperience}</h3>
    <h3>{props.company}</h3>
   </div>
  )
}

export default Programers