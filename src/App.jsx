
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

import dataStore from './dataStore'

import './App.css'

const App = () => {
  const dataElements = dataStore.map(ds => {
    return <Card
      key={ds.id}
      data={ds}
    />
  })

  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <div className='card--list'>
        {dataElements}
      </div>
    </div>
  )
}

export default App
