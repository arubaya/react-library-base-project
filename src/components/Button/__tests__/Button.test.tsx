import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button';

describe('Button', () => {
  test('renders button with label', () => {
    render(<Button label="Click me" />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('applies primary class when primary prop is true', () => {
    render(<Button primary label="Click me" />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toHaveClass('storybook-button--primary');
  });

  test('applies secondary class when primary prop is false', () => {
    render(<Button label="Click me" />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toHaveClass('storybook-button--secondary');
  });

  test('applies the correct size class', () => {
    render(<Button size="large" label="Click me" />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toHaveClass('storybook-button--large');
  });

  test('applies custom background color', () => {
    const backgroundColor = 'red';
    render(<Button backgroundColor={backgroundColor} label="Click me" />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toHaveStyle(`background-color: ${backgroundColor}`);
  });

  test('calls onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    render(<Button label="Click me" onClick={onClickMock} />);
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
