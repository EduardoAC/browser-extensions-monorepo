import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ExampleProps {}

const StyledSpinner = styled.div`
  .lds-spinner {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-spinner div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: #fff;
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  .lds-spinner div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  .lds-spinner div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  .lds-spinner div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }
  @keyframes lds-spinner {
    0% {
      top: 8px;
      height: 64px;
    }
    50%,
    100% {
      top: 24px;
      height: 32px;
    }
  }
`;

export function Spinner(props: ExampleProps) {
  return (
    <StyledSpinner>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h1>Welcome to Example!</h1>
    </StyledSpinner>
  );
}
