import "./App.css";
import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/Plusicon";

function App() {

  return (
    <>
      <Button size="small" icon={<PlusIcon size="2xl"/>} variant="primary" text="Button" />
      <Button size="medium" variant="secondary" text="Button" />
      <Button size="large" variant="success" text="Button" />
    </>
  );
}

export default App;
