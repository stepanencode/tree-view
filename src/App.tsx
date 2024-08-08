import './App.css';
import { elements } from './data';
import { TreeView } from './TreeView';

function App() {
  return (
    <div>
      <TreeView elements={elements} />
    </div>
  );
}

export default App;
