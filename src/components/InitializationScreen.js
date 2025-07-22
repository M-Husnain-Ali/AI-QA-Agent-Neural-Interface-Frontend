const InitializationScreen = () => {
  return (
    <div className="initialization-screen">
      <div className="init-container">
        <div className="init-logo">
          <div className="logo-animation">
            <div className="neural-network">
              <div className="node"></div>
              <div className="node"></div>
              <div className="node"></div>
              <div className="node"></div>
              <div className="connection"></div>
              <div className="connection"></div>
              <div className="connection"></div>
            </div>
          </div>
        </div>
        <div className="init-content">
          <h2>Initializing Neural Interface</h2>
          <p>Establishing secure connection to AI systems...</p>
          <div className="init-progress">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <div className="progress-percentage">Loading...</div>
          </div>
          <div className="init-steps">
            <div className="step active">
              <div className="step-icon">
                <div className="check-mark"></div>
              </div>
              <span>Neural network initialized</span>
            </div>
            <div className="step active">
              <div className="step-icon">
                <div className="check-mark"></div>
              </div>
              <span>Memory banks synchronized</span>
            </div>
            <div className="step loading">
              <div className="step-icon">
                <div className="mini-spinner"></div>
              </div>
              <span>Interface calibration in progress</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InitializationScreen
