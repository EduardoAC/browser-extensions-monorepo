import styled from 'styled-components';

import NxWelcome from './nx-welcome';
import { useMessage } from './hooks/useMessage';
import { Spinner } from './components/spinner/spinner';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const { status, data, error } = useMessage({
    type: MessageType.FETCH,
    data: 'Hello, can you hear me?',
  });
  return (
    <StyledApp>
      <NxWelcome title="react-app-using-messages-manifest-v3" />
      {status === MessageStatus.SENT && <Spinner />}
      {status === MessageStatus.RECEIVED && <div>{data}</div>}
      {status === MessageStatus.ERROR && <div>{error}</div>}
    </StyledApp>
  );
}

export default App;
