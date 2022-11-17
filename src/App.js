import React, { useContext } from "react"
import Navigation from "./components/navigation/Navigation"
import Container from "./components/pages/Container"
import { ThemeContext } from "./theme/ThemeContext"

function App() {
  const { darkMode } = useContext(ThemeContext)
  console.log(`darkMode`, darkMode)

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"/>
      <Navigation />
      <Container />
    </>
  );
}

export default App;
