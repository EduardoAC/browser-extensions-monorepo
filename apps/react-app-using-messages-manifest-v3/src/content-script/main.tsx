import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app';

const extensionRoot = document.createElement('extension-ui');
extensionRoot.classList.add('extension-ui-styles');

// Insert extension root UI within tab page parent
document.head.insertAdjacentElement('afterend', extensionRoot);

// Setup shadow root so styles won't affect parent page
const shadowRoot = extensionRoot.attachShadow({ mode: 'open' });
const root = ReactDOM.createRoot(shadowRoot);

// Render UI
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
