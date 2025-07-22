const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const sendQuery = async (query, sessionId) => {
  const response = await fetch(`${API_BASE_URL}/chat/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      session_id: sessionId,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};

export const getConversationHistory = async (sessionId) => {
  const response = await fetch(`${API_BASE_URL}/history/?session_id=${sessionId}`);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.conversation_history || [];
};

export const clearHistory = async (sessionId) => {
  const response = await fetch(`${API_BASE_URL}/clear/?session_id=${sessionId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};