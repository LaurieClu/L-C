import "antd/dist/antd";
import { Menu } from "antd";
import { WrapperMenu, Logo, LogoTitle } from "./components/WrapperMenu.tsx";

function App() {
  return (
    <div className="App">
      <WrapperMenu>
            <Logo>
              <LogoTitle> Licornes & Clémentines</LogoTitle>
            </Logo>
            <Menu 
            style={{ backgroundColor:"#C9156B", color:"white", fontSize:"18px"}}
            colorItemHoverBg={"rgba(66,135,245,0)"}
            items={[
              { label: "Soirée", key: "soirée"},
              { label: "Membre", key: "membre"},
              { label: "Calendrier", key: "calendrier"},
              { label: "Inventaire", key: "inventaire"},
              { label: "Courses", key: "courses"},
              { label: "Modèles Messages", key: "modele-message"},
              { label: "Budget", key: "budget"},
              { label: "Utiles", key: "utiles"}
            ]}
            />
        </WrapperMenu>
    </div>
  );
}

export default App;
