import './App.css';
import AppRouter from './components/routers/AppRouter';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App" data-testid="app-test">
      <Header/>
      <AppRouter/>
    </div>
  );
}

export default App;
