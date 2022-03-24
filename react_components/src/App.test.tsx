import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import App from './App';

describe("App", () => {
  it("simple card", () => {
    render(<App/>);
    expect(screen.getByText(/dance/i)).toBeInTheDocument();
  });
  it("search input existence and focus", () => {
    render(<App/>);
    const input = screen.getByPlaceholderText(/search/i);
    expect(input).toBeInTheDocument();
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });
});

describe("Menu, routing", () => {
  it("About Page", () => {
    render(<App/>);
    fireEvent.click(screen.getByText('About'));
    expect(screen.getByText(/about page/i)).toBeInTheDocument();
  });
  it("Home Page", () => {
    render(<App/>);
    fireEvent.click(screen.getByText('Home'));
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });
  it("404 page", () => {
    render(<App/>);
    fireEvent.click(screen.getByText('Not found'));
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
});

describe('events', () => {
  it('input focus', () => {
    const {getByTestId} = render(
      <input
        id="search"
        type="text"
        placeholder="Search..."
        name="search"
        data-testid="search-input"/>
    );
    const input = getByTestId("search-input");
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });
});
