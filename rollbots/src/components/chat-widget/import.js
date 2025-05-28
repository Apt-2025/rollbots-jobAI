import React from 'react';
import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import './chatwidget.css'; // Custom styles for the chat widget

function App() {
  return (
    <div className="App">
      <Widget />
    </div>
  );
}

export default App;