import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import './helpers/mock-localstorage';

describe("App", () => {
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
    const searchWord = 'lalala';
    userEvent.type(screen.getByRole('textbox'), searchWord);
    // сделать переключение на др. страницу
    fireEvent.click(screen.getByText('About'));
    localStorage.getItem('search');
    const localStorageValue = localStorage.getItem('search');
    console.log(localStorageValue);
    expect(searchWord).toBe(localStorageValue);
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

