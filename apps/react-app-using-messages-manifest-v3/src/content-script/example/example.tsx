import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ExampleProps {}

const StyledExample = styled.div`
  color: pink;
`;

export function Example(props: ExampleProps) {
  return (
    <StyledExample>
      <h1>Welcome to Example!</h1>
    </StyledExample>
  );
}

export default Example;
