const LoadingSpinner = () => {
  return (
    <div className="message-bubble ai">
      <div className="message-content">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <span>Typing...</span>
        </div>
        <div className="typing-indicator">
          <div className="typing-dot"></div>
          <div className="typing-dot"></div>
          <div className="typing-dot"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner
