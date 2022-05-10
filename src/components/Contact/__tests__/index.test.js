/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '../';

afterEach(cleanup);

describe("Contact component", () => {
    // baseline test
    it("renders", () => {
        render(<Contact />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('matches text', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
    });

    it('matches button text', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('submitButton')).toHaveTextContent('Submit');
    });
});