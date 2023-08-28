import './App.css'
import Banner from './components/Banner'
import Card from './components/Card'
import IpAddressComponent from './components/IpAddressComponent'
function App() {
  

  return (
    <main>
      <Banner/>
      <div className='body'>
        <Card heading="Public IP Adress">
          <span>
           <div>
           <IpAddressComponent ipv6={true} />
           </div>
           <div>
           <IpAddressComponent ipv6={false} />
           </div> 
          </span>
        </Card>
      </div>
    
      
    </main>
  )
}

export default App
