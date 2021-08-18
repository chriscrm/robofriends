import Card from "./Components/Card";
import { robots } from "./robots";

function App() {
  return (
    <div>
      <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
      <Card id={robots[5].id} name={robots[5].name} email={robots[5].email} />
      <Card id={robots[3].id} name={robots[3].name} email={robots[3].email} />
    </div>
  );
}

export default App;
