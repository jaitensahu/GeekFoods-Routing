import Header from './Header'
import Hero from './Hero'
import Section2 from './Section2/Section'
import Footer from './Footer/Footer'
import TeamMembers from './Team/TeamMembers'
import Datastore from '../DataStore/Datastore'
let Home = (Props) => {
  console.log(Datastore);
  return (
    // <Datastore>
      <div className="App">
        <Header />
        <Hero />
        <Section2 />
        <TeamMembers />
        <Footer />
      </div>
    //  </Datastore>
  );
}

export default Home;
