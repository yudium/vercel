import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
// need to import below to remove error when running unit test
// @see https://github.com/airbnb/react-with-styles/issues/137
import 'react-dates/initialize';
import App from './App';

describe('when user click on clear button', () => {
    it.only('test', () => {
        render(
            <App />
        );

        selectDateAndApply();
    });
});

function selectDateAndApply(): void {
    const FIRST_MONTH_DISPLAYED = 0;

    // console.log(screen.getAllByText('12')[FIRST_MONTH_DISPLAYED]);
    // console.log(screen.getAllByText('15')[FIRST_MONTH_DISPLAYED]);
    // screen.debug(screen.getByLabelText('January 12, 2023', { exact: false }));
    // console.log(screen.getByLabelText('January 15, 2023 ', { exact: false }));

    // fireEvent.click(
    //     screen.getByLabelText('January 12, 2023', { exact: false })
    // );
    // fireEvent.click(
    //     screen.getByLabelText('January 15, 2023 ', { exact: false })
    // );

    // fireEvent.click(
    //     screen.getAllByText('12', { exact: false })[FIRST_MONTH_DISPLAYED]
    // );
    // fireEvent.click(
    //     screen.getAllByText('15', { exact: false })[FIRST_MONTH_DISPLAYED]
    // );
}
