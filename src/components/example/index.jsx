import logo from '@/resources/logo.svg';
import { StyledButton, StyledImg, helloWorld } from './imports';

export function Example() {
  return (
    <div className="App">
      <header className="App-header">
        <StyledButton>{helloWorld()}</StyledButton>
        <StyledImg src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
