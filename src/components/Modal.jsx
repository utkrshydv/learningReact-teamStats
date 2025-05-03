import ReactDom from 'react-dom';

export default function Modal(props) {
  const { onClose, teamName, teamData } = props;
  console.log(teamData); // To ensure you're getting the correct data

  if (!teamData) {
    return null; // In case the teamData is not yet available
  }

  return ReactDom.createPortal(
    <div className="modal-container">
      <div className="modal-underlay" onClick={onClose}></div>

      <div className="modal-content" 
      

      onClick={(e) => e.stopPropagation()}>
      <div className="club-logo-modal"
      >
          <img  src={teamData.strLogo} alt={`${teamName} Logo`} />
      
        </div>
        <div className="club-description">
          <p>Founded: {teamData.intFormedYear || 'TBD'}</p>
          <p>City: {teamData.strLocation || 'TBD'}</p>
          <p>Stadium: {teamData.strStadium || 'TBD'}</p>
          <p>League: {teamData.strLeague || 'TBD'}</p>
        </div>
       
      
      </div>
    </div>,
    document.getElementById('portal')
  );
}
                