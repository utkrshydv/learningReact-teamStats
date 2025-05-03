import Teamlogo from "./components/Teamlogo";
import { teamLogos } from "./utils/teamLogos";
import Header from "./components/Header";
import Modal from "./components/Modal";
import { useState, useEffect } from "react";

function App() {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [teamData, setTeamData] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (!selectedTeam) return;
    

    if(selectedTeam =='Robbers FC.png'){
      const customTeamData = {
        strTeam: 'Robbers FC',
        intFormedYear: '1902',
        strLocation: 'Madrid',
        strStadium: 'Estadio Santiago Bernabéu',
        strLeague: 'Spanish La Liga',
        strLogo: 'https://r2.thesportsdb.com/images/media/team/logo/yxxprt1447431088.png', 
      }
      setTeamData(customTeamData)
      return;
    }

    const toApiTeamName = selectedTeam.split(".")[0];
    const encodedTeamName = encodeURIComponent(toApiTeamName);

    const fetchTeamData = async () => {
      try {
        const sportsUrl = `https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${encodedTeamName}`;
        const res = await fetch(sportsUrl);
        const data = await res.json();
        setTeamData(data.teams?.[0] || null);
      } catch (err) {
        console.log(err);
        setTeamData(null);
      }
    };

    fetchTeamData();
  }, [selectedTeam]);

  const filteredTeamLogos = teamLogos.filter((name) =>
    name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className="App">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />

        <div className="team-logo">
          {filteredTeamLogos.map((name) => (
            <div key={name} onClick={() => setSelectedTeam(name)}>
              <Teamlogo
                selectedTeam={selectedTeam}
                setSelectedTeam={setSelectedTeam}
                logoNumber={name}
                teamName={name.split(".")[0]}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedTeam && (
        <Modal
          teamData={teamData}
          teamName={selectedTeam.split(".")[0]}
          onClose={() => {
            setSelectedTeam(null);
            setTeamData(null);
          }}
        />
      )}
    </>
  );
}

export default App;
