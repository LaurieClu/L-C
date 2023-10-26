import "antd/dist/antd";
import { Menu } from "antd";
import { WrapperMenu, Logo } from "./components/WrapperMenu.tsx";

function App() {
  return (
    <div className="App">
      <WrapperMenu>
            <Logo />
            <Menu 
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
