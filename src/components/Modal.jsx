import ReactDom from 'react-dom';
import { useState } from "react"

export default function Modal(props) {
  const { onClose, teamName, teamData } = props;
  
  const [logoLoaded, setLogoLoaded] = useState(false);

  if (!teamData) {
    return null; 
  }

  return ReactDom.createPortal(
    <div className="modal-container">
      <div className="modal-underlay" onClick={onClose}></div>

      <div className="modal-content" 
      onClick={(e) => e.stopPropagation()}>
      <div className="club-logo-modal">
      {!logoLoaded && <div className="logo-placeholder">Loading logo...</div>}

          <img
            src={teamData.strLogo}
            alt={`${teamName} Logo`}
            style={{ display: logoLoaded ? 'block' : 'none' }}
            onLoad={() => setLogoLoaded(true)}
            onError={() => setLogoLoaded(true)} // in case image fails
          />
      
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
                
