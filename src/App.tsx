import ControlsComponent from "./components/ControlsComponent"
import PanelkaComponent from "./components/Panelka"

import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="panelka-holder">
        <PanelkaComponent />
      </div>
      <ControlsComponent />
    </div>
  )
}

export default App
