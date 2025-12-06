import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '20px',
          background: '#1a1a1a',
          color: 'white',
          fontFamily: 'monospace',
          height: '100vh',
          overflow: 'auto'
        }}>
          <h1 style={{ color: '#ff4444' }}>❌ Something went wrong</h1>
          <h2>Error Details:</h2>
          <pre style={{ background: '#2a2a2a', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
            {this.state.error && this.state.error.toString()}
          </pre>
          <h3>Stack Trace:</h3>
          <pre style={{ background: '#2a2a2a', padding: '15px', borderRadius: '5px', overflow: 'auto', fontSize: '0.85em' }}>
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </pre>
          <button 
            onClick={() => window.location.reload()}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              background: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
