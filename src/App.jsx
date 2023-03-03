import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
function App() {
  return (
      <div className="App">
        <Canvas dpr={[1, 2]}>
          <color attach="background" args={["#213547"]} />
          <fog attach="fog" args={["#213547", 10, 20]} />
          <Experience />
        </Canvas>
      </div>
  );
}

export default App;
