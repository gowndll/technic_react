import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color";
import SelectColors from "./components/selectColors";

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
