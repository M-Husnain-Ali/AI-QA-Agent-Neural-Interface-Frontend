"use client"

import { useState, useEffect, useRef } from "react"
import MessageBubble from "./MessageBubble"
import LoadingSpinner from "./LoadingSpinner"
import { sendQuery, getConversationHistory, clearHistory } from "../services/api"

const ChatInterface = ({ sessionId }) => {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isInitializing, setIsInitializing] = useState(true)
  const [error, setError] = useState(null)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    loadConversationHistory()
  }, [sessionId])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const loadConversationHistory = async () => {
    setIsInitializing(true)
    try {
      const history = await getConversationHistory(sessionId)
      setMessages(history)
    } catch (err) {
      console.error("Failed to load conversation history:", err)
    } finally {
      setIsInitializing(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!inputValue.trim() || isLoading) return

    const userQuery = inputValue.trim()
    setInputValue("")
    setIsLoading(true)
    setError(null)

    // Add user message immediately
    const userMessage = {
      query: userQuery,
      response: "",
      isUser: true,
      timestamp: new Date().toISOString(),
    }
    setMessages((prev) => [...prev, userMessage])

    try {
      const response = await sendQuery(userQuery, sessionId)

      // Add AI response
      const aiMessage = {
        query: userQuery,
        response: response.response,
        isUser: false,
        timestamp: new Date().toISOString(),
      }
      setMessages((prev) => [...prev.slice(0, -1), userMessage, aiMessage])
    } catch (err) {
      setError("Neural network connection failed. Attempting to reconnect...")
      console.error("API Error:", err)
      // Remove the user message if there was an error
      setMessages((prev) => prev.slice(0, -1))
    } finally {
      setIsLoading(false)
    }
  }

  const handleClearHistory = async () => {
    try {
      await clearHistory(sessionId)
      setMessages([])
      setError(null)
    } catch (err) {
      setError("Failed to purge conversation data.")
    }
  }

  if (isInitializing) {
    return (
      <div className="chat-interface">
        <div className="chat-header">
          <div className="chat-title">
            <div className="title-icon"></div>
            Loading Neural Interface
          </div>
        </div>
        <div className="messages-container">
          <div className="welcome-message">
            <h3>Synchronizing conversation data...</h3>
            <div className="loading-spinner">
              <div className="spinner"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="chat-interface">
      <div className="chat-header">
        <div className="chat-title">
          <div className="title-icon"></div>
          Neural Interface
        </div>
        <button onClick={handleClearHistory} className="clear-button" disabled={isLoading || messages.length === 0}>
          Clear Conversation History
        </button>
      </div>

      <div className="messages-container">
        {messages.length === 0 && (
          <div className="welcome-message">
            <h3>Neural Interface Ready</h3>
            <p>Initialize conversation by submitting your query to the AI system</p>
            <div className="welcome-features">
              <div className="feature">Advanced Natural Language Processing</div>
              <div className="feature">Real-time Response Generation</div>
              <div className="feature">Contextual Memory Retention</div>
            </div>
          </div>
        )}

        {messages.map((message, index) => (
          <MessageBubble
            key={index}
            message={message.isUser ? message.query : message.response}
            isUser={message.isUser}
            timestamp={message.timestamp}
          />
        ))}

        {isLoading && <LoadingSpinner />}
        {error && <div className="error-message">{error}</div>}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="input-form">
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your query..."
            disabled={isLoading}
            className="message-input"
          />
          <button type="submit" disabled={isLoading || !inputValue.trim()} className="send-button">
            {isLoading ? "Processing" : "Send"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ChatInterface
