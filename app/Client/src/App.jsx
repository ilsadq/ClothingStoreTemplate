import { useEffect, useState } from "react"
import MarketList from "./components/MarketList";
import Header from './components/Header'

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5035/weatherforecast').then(response => {
      response.json().then(data => setData(data));
    })
  }, [])

  return (
    <div className="flex flex-col">
      <Header />
      <div className="container">
        {data === null ? <h4>Data is empty</h4> : <MarketList data={data} />}
      </div>
    </div>
  )
}

export default App
