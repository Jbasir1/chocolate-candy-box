
import './App.css';
import Header from './Header.js';
import ChocolateList from './ChocolateList.js';
function App() {
  const headingTitle = "Welcome to the Chocolate Candy Box!";
  return (
    <div className="App">
      <Header headingText={headingTitle}/>
      <ChocolateList />
    </div>
  );
}

export default App;
