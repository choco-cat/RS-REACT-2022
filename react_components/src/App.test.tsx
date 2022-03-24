import React from "react";
import {render, screen, fireEvent} from '@testing-library/react';
import App from './App';

describe("App", () => {
  it("simple card", () => {
    render(<App/>);
    expect(screen.getByText(/dance/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  })
});

describe('events', () => {
  it('input focus', () => {
    const {getByTestId} = render(
      <input type="text" data-testid="search-input"/>
    );
    const input = getByTestId("search-input");
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });
});
