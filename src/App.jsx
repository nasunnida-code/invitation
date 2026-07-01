import Hero from './components/Hero'
import InfoBlock from './components/InfoBlock'
import Greeting from './components/Greeting'
import Calendar from './components/Calendar'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Account from './components/Account'
import RSVP from './components/RSVP'
import Share from './components/Share'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="page">
      <Hero />
      <InfoBlock />
      <Greeting />
      <Calendar />
      <Gallery />
      <Location />
      <Account />
      <RSVP />
      <Share />
      <Footer />
    </div>
  )
}
