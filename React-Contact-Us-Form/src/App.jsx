import './App.css'
import ContactForm from './components/ContactForm/ContactForm';
import ContactHeader from './components/ContactHeader/ContactHeader.jsx';
import Navigation from './components/Navigation/Navigation.jsx';

function App() {

  return (
    <>
      <Navigation />
      <main >
      <ContactHeader />
      <ContactForm />
      </main>
    </>
  )
}

export default App
