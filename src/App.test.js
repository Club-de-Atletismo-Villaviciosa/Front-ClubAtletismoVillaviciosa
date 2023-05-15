import 'matchmedia-polyfill';
import { render, screen,fireEvent,waitFor } from '@testing-library/react';
import App from './App';
import React from 'react/jsx-runtime';
import Footer from './Components/Footer/Footer';
import FormMain from './Components/FormMain/FormMain';
import { MemoryRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import PhotoMainPage from "./Components/PhotoMainPage/PhotoMainPage"
import Navbar from './Components/Navbar/Navbar';
import ButtonToForm from './Components/ButtonToForm/ButtonToForm';
import News from './Components/News/News';
import Carousel from './Components/Carousel/Carousel';
import AthleteText from './Components/Carousel/AthleteText';

describe('Footer', () => {
  it('renders two images', () => {
    render(<Footer/>);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
  });
});

describe('FormMain', () => {
  it('should render a form element', () => {
    render(
      <MemoryRouter>
        <FormMain />
      </MemoryRouter>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

describe('Header', () => {
  test('renders a h1 element with the text "Club de Atletismo de Villaviciosa"', () => {
    render(<Header />);
    const headingElement = screen.getByRole('heading', { name: /club de atletismo de villaviciosa/i });
    expect(headingElement).toBeInTheDocument();
  });
});


test('renders an img tag', () => {
  render(<PhotoMainPage />);
  const imgElement = screen.getByRole('img');
  expect(imgElement).toBeInTheDocument();
});



test('handleDropdownClick toggles mode state', () => {
  render(<Navbar />);
  const dropdownButton = screen.getByText('Info. del club');
  fireEvent.click(dropdownButton);
  expect(screen.getByTestId('navbar-dropdown')).toHaveClass('open');
});



test('handleDropdownClick toggles mode state', () => {
  render(
    <MemoryRouter>
    <ButtonToForm />
  </MemoryRouter>
  );
  const dropdownButton = screen.getByText('Publicar una actividad');
  fireEvent.click(dropdownButton);
  expect(screen.getByTestId('button-dropdown')).toHaveClass('open');
});

test('handleDropdownClick toggles mode state', () => {
  render(
    <MemoryRouter initialEntries={[{ state: { id: 1, url: 'example.jpg', title: 'Example Title', news: 'Example news' } }]}>
      <News />
    </MemoryRouter>
  );
  const dropdownButton = screen.getByTestId('news-pencil');
  fireEvent.click(dropdownButton);
  expect(screen.getByTestId('news-dropdown')).toHaveClass('open');
});

describe('Carousel', () => {
  it('should render a slider with athlete text opinions', () => {
    render(<Carousel />);
    AthleteText.forEach((text) => {
      expect(screen.getAllByText(text.text)[0]).toBeVisible();
    });
  });
});






