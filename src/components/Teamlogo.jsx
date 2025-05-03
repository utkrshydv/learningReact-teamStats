import Modal from "./Modal"

export default function Teamlogo(props){

  const { logoNumber, teamName, setSelectedTeam, selectedTeam } = props
 

  return(
    <>
    
    <section className="team-logo-container" >
   <img
    src={`/logos/${logoNumber}`}
   
    />
   <h2>{teamName}</h2>

    </section>
    </>
  )
}