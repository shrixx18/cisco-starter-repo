import './App.css'
import Banner from './components/Banner'
import Card from './components/Card'
function App() {
  

  return (
    <main>
      <Banner/>
      <div>
      <h1>My App</h1>
      <Card heading="Card Title">
        <p>This is the content of the card.</p>
      </Card>
    </div>
    
      
    </main>
  )
}

export default App
