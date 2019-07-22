// HEADS UP !!!!!
// React Test Renderer CAN NOT, repeat CAN NOT, 'currently'  work
// with eslint higher than 5.16.0, and jest 24.7.1
// so leave them alone if you like tests running

// test('Fake Test', () => {
//   expect(true).toBeTruthy();
// })

import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import 'jest-dom/extend-expect';

import App from './App';
import Navbar from './components/Navbar';

describe('<Navbar />', () => {
  it('should render', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(getByText(/SAUTI DESIGN STUDIO/i)).toBeInTheDocument();
  });

})

