import Entry from './components/Entry';
import Header from './components/Header';
import travelData from './data';

export default function App() {
  const travelDetails = travelData.map((data) => {
    return <Entry 
      key={data.id}
      {...data}
    />
  })
  return (
    <>
      <Header />
      <main className="container">
        {travelDetails}
      </main>
    </>
  )
}

