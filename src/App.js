import './App.css';
import Navbar from './components/Navbar';
import Card from "./components/Card"
import cardData from "./data"

function App() {


  const cards = cardData.map(card => {
    return (
      <Card 
        key = { card.id }
        card = { card }
      
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <div className="card--container">
        <div className="cards-list">
          </div>
            {cards}
          </div>
    </div>
  );
}

export default App;
