"use client"

import { useState, useEffect } from "react"
import ChatInterface from "./components/ChatInterface"
import InitializationScreen from "./components/InitializationScreen"
import "./App.css"

function App() {
  const [sessionId] = useState(() => {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  })

  const [isInitializing, setIsInitializing] = useState(true)

  useEffect(() => {
    // Simulate initialization process
    const initTimer = setTimeout(() => {
      setIsInitializing(false)
    }, 2000)

    return () => clearTimeout(initTimer)
  }, [])

  if (isInitializing) {
    return <InitializationScreen />
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo-icon">
              <div className="logo-geometric">
                <div className="logo-shape"></div>
                <div className="logo-shape"></div>
                <div className="logo-shape"></div>
              </div>
            </div>
            <div className="header-text">
              <h1>AI Q&A Agent</h1>
              <p>Advanced Intelligence • Instant Responses • Elite Experience</p>
            </div>
          </div>
          <div className="session-info">
            <div className="session-indicator"></div>
            <span className="session-badge">Session Active</span>
          </div>
        </div>
      </header>
      <main className="App-main">
        <ChatInterface sessionId={sessionId} />
      </main>
    </div>
  )
}

export default App
