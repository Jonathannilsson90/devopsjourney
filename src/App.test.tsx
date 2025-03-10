import {fireEvent, render, screen} from '@testing-library/react'
import App from './App'
import { expect, it } from 'vitest';

it('Should render h1 with Vite + React', () => {
  render(<App/>);
  const headingElement = screen.getByText('Vite + React');
  expect(headingElement).toBeVisible();
})

it('Should press the button and increment count', () => {
render(<App/>)
const buttonElement = screen.getByRole('button', {name: /count is/i})
  expect(buttonElement).toBeVisible();

  expect(buttonElement).toHaveTextContent('count is 0');

  fireEvent.click(buttonElement)

  expect(buttonElement).toHaveTextContent('count is 1')
})
