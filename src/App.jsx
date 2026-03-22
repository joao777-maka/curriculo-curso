import Sidebar from './components/Sidebar'
import Main from './components/Main'

function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'DM Sans, sans-serif' }}>
      <Sidebar />
      <Main />
    </div>
  )
}

export default App