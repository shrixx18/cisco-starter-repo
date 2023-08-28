import './App.css'
import Banner from './components/Banner'
import Card from './components/Card'
import AddressDisplay from './AddressDisplay'
function App() {
  

  return (
    <main>
      <Banner/>
      <div className='body'>
        <Card heading="Public IP Address : ">
          <span>
            <AddressDisplay />
          </span>
        </Card>
      </div>
    
      
    </main>
  )
}

export default App
