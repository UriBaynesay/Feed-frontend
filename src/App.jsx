import "./assets/styles/main.scss"
import { HomePage } from "./pages/HomePage"
import { AppHeader } from "./cmp/app-header"
import { AppFooter } from "./cmp/app-footer"

function App() {
  return (
    <div className="App main-container">
      <AppHeader />
      <main>
        <HomePage />
      </main>
      <AppFooter />
    </div>
  )
}

export default App
