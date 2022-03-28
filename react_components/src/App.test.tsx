import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App, {LocationDisplay} from './App';
import PageRouter from './components/router';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom';

const randomString = require('randomstring');

describe("Check app", () => {
  it("simple card", () => {
    render(<App/>);
    expect(screen.getByText(/dance/i)).toBeInTheDocument();
  });
  it("all cards", () => {
    render(<App/>);
    //const cardsImgs = screen.getAllByAltText(/image/i);
    const cardsImgs = screen.getAllByText('Author:');
    expect(cardsImgs.length > 16).toBeTruthy();
  });
  it("search input existence and focus", () => {
    render(<App/>);
    const input = screen.getByPlaceholderText(/search/i);
    expect(input).toBeInTheDocument();
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });
  it("actions with search input", () => {
    render(<App/>);
    localStorage.clear();
    const searchWord = randomString.generate();
    userEvent.type(screen.getByRole('textbox'), searchWord);
    userEvent.click(screen.getByText('About'));
    const localStorageValue = localStorage.getItem('search');
    expect(searchWord).toBe(localStorageValue);
    userEvent.click(screen.getByText('Home'));
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe(searchWord);
  });
});

describe("Check Menu, routing", () => {
  it("click into menu link Home", () => {
    render(<App/>);
    userEvent.click(screen.getByText('Home'));
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });

  it("click into menu link About", () => {
    render(<App/>);
    userEvent.click(screen.getByText('About'));
    expect(screen.getByText(/about page/i)).toBeInTheDocument();
  });

  it('testing page not found', () => {
    const history = createMemoryHistory();
    const route = `/${randomString.generate(6)}`;
    history.push(route);
    render(
      <Router location={history.location} navigator={history}>
        <PageRouter/>
      </Router>
    )
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });

  it('rendering a component that uses useLocation', () => {
    const history = createMemoryHistory();
    const route = `/${randomString.generate(6)}`;
    history.push(route);
    render(
      <Router location={history.location} navigator={history}>
        <LocationDisplay/>
      </Router>
    )
    expect(screen.getByTestId('location-display')).toHaveTextContent(route);
  });
});