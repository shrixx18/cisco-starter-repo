import './App.css'
import Banner from './components/Banner'
import Card from './components/Card'
import AddressDisplay from './AddressDisplay'
import PylonConnector from './components/PylonConnector'
function App() {
  

  return (
    <main>
      <Banner/>
      <div className='body'>
        <Card heading="Public IP Address : ">
          <span>
            <AddressDisplay url='https://api64.ipify.org?format=json'/>
          </span>
          <hr />
          <h4>Packet Latency : </h4>
          <span className='connector'>
            <PylonConnector/>
          </span>
        </Card>
      </div>
    
      
    </main>
  )
}

export default App
