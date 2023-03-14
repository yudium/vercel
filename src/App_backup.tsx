// react component
import React, { useState } from 'react';
import {
  DayPickerRangeController,
  DayPickerSingleDateController,
  FocusedInputShape,
} from 'react-dates';
import moment from 'moment';

type TDate = Date | null;
type TMoment = moment.Moment | null;

export default function App() {
  const [calendar_visible_date, setCalendarVisibleDate] = useState<
    moment.Moment
  >(moment());

  const [from, setFrom] = useState<TMoment>(dateToMomentJs(new Date()));
  const [to, setTo] = useState<TMoment>(dateToMomentJs(new Date()));

  const [focused_input, setFocusedInput] = useState<FocusedInputShape | null>(
    'startDate'
  );

  function onFocusChange(new_focused_input: FocusedInputShape | null): void {
    setFocusedInput(!new_focused_input ? 'startDate' : new_focused_input);
  }


  return (
    <DayPickerRangeController
      startDate={from}
      endDate={to}
      onDatesChange={({ startDate, endDate }): void => {
        console.log('from', startDate, 'to', endDate);
        setFrom(startDate);
        setTo(endDate);
      }}
      onFocusChange={onFocusChange}
      focusedInput={focused_input}
      noBorder
      hideKeyboardShortcutsPanel
      keepOpenOnDateSelect
      orientation='horizontal'
      numberOfMonths={2}
      renderCalendarInfo={() => <div></div>}
      initialVisibleMonth={(): moment.Moment =>
        calendar_visible_date
      }
    />
  )
};


/**
 * Convert date object to moment
 * @param {TDate} date
 * @returns {TMoment}
 */
function dateToMomentJs(date: TDate): TMoment {
  return date === null ? null : moment(date);
}

/**
 * Convert moment object to date object
 * @param {TMoment} momentDate
 * @returns {TDate}
 */
function momentJsToDate(momentDate: TMoment): TDate {
  return momentDate === null ? null : momentDate.toDate();
}
