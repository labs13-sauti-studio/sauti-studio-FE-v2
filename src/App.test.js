

// test('Fake Test', () => {
//   expect(true).toBeTruthy();
// })

import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { MemoryRouter} from 'react-router-dom';
import 'jest-dom/extend-expect';

import  App from './App';
import Header from './components/Header';

describe('<Header />', () => {
    it('should render', () => {
        const {getByText} = render(<Header />);
        expect(getByText(/SAUTI DESIGN STUDIO/i)).toBeInTheDocument();
    });
  
})

// can't test with Browser Router Links or NavLinks... which makes it worthless...