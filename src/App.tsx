import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  function handleDateMasking(e: React.KeyboardEvent<HTMLInputElement>): void {
    const select_all = e.key === 'a' && e.metaKey;
    const only_number = '1234567890'.split('').includes(e.key);
    const valid_keys = [
        'ArrowLeft',
        'ArrowRight',
        'Backspace',
        'Enter',
        'Tab',
        '/',
    ].includes(e.key);

    if (!valid_keys && !select_all && !only_number) {
        e.preventDefault();

        return;
    }

    if (e.key === 'Enter') {
        e.preventDefault();

        return;
    }

    const element = e.target as HTMLInputElement;
    const len = element.value.length;

    const SLASH_CHAR = 47;
    if (e.keyCode == SLASH_CHAR) {
        e.preventDefault();
    }

    const not_number = isNaN(parseInt(e.key));
    if (not_number) {
        return;
    }

    if (len === 2) {
        element.value += '/';
    }
    if (len === 5) {
        element.value += '/';
    }
}

  return (
    <div>
      <input type="text" onKeyDown={handleDateMasking} />
    </div>
  )
}

export default App
