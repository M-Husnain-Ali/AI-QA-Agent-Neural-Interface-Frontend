# AI Q&A Agent Neural Interface

A sophisticated AI-powered question-answering interface with real-time neural processing capabilities and a modern, responsive design.

## Features

- **Advanced Natural Language Processing**: Seamless communication with AI through natural language
- **Real-time Response Generation**: Instant, context-aware responses
- **Contextual Memory Retention**: Maintains conversation history for coherent interactions
- **Neural Interface**: Beautiful, modern UI with neural network visualization
- **Session Management**: Persistent sessions with unique identifiers
- **Mobile Responsive**: Fully responsive design for all devices
- **Modern Design**: Sleek dark theme with geometric neural network motifs
- **Visual Feedback**: Interactive loading states and typing indicators

## Tech Stack

- React 19.1.0
- Modern JavaScript/ES6+
- RESTful API Integration
- WebSocket Support
- CSS3 Animations and Transitions
- SVG Graphics
- Mobile-First Responsive Design

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## API Integration

The application connects to a backend API at `http://127.0.0.1:8000/api`. Ensure the backend server is running before starting the frontend.

### API Endpoints

- `POST /api/chat/`: Send user queries and receive AI responses
- `GET /api/conversation/`: Retrieve conversation history
- `DELETE /api/conversation/`: Clear conversation history

## Project Structure

```
frontend/
├── public/
│   ├── favicon.svg        # Custom geometric neural network icon
│   ├── index.html         # HTML entry point
│   ├── manifest.json      # PWA manifest
│   └── robots.txt         # Search engine configuration
├── src/
│   ├── components/        # React components
│   │   ├── ChatInterface.js          # Main chat interface
│   │   ├── InitializationScreen.js   # Loading screen
│   │   ├── LoadingSpinner.js         # Loading animation
│   │   └── MessageBubble.js          # Chat message component
│   ├── services/          # API services
│   │   └── api.js        # API integration
│   ├── App.js            # Main application component
│   └── App.css           # Global styles and animations
└── package.json          # Dependencies and scripts
```

## Design Features

- **Neural Network Theme**: Custom geometric shapes and gradients
- **Responsive Layout**: Adapts to all screen sizes
- **Interactive Elements**: Loading states, typing indicators
- **Color Scheme**: Modern dark theme with accent gradients
- **Custom Icons**: SVG-based geometric neural network motifs
- **Smooth Animations**: CSS transitions and keyframe animations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
