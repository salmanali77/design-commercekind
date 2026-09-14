import Header from './components/layout/Header'
import Footer from './components/layout/footer'
import AppRoutes from './routes'

function App() {
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  )
}

export default App
