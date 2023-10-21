import './App.css';
import { ConsumerComponent } from './components/ConsumerComponent';

function App() {
  return (
    <div className="App">
      <ConsumerComponent url={'https://jsonplaceholder.typicode.com/users'} />
    </div>
  );
}

export default App;
