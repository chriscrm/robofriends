import CardList from "./Components/CardList";
import { robots } from "./robots";

function App() {
  return (
    <div>
      <CardList robots={robots} />
    </div>
  );
}

export default App;
