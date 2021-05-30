import { usePasswordContext } from './../../contexts/Password';

import { BsToggleOff, BsToggleOn } from 'react-icons/bs';

import { Label } from './styles';

export function Options() {
  const {
    letters,
    uppercase,
    numbers,
    special,
    custom,
    customContent,
    toggleLetters,
    toggleUppercase,
    toggleNumbers,
    toggleSpecial,
    toggleCustom,
    handleCustomContent
  } = usePasswordContext();

  return (
    <div>
      <h2>Options</h2>

      <Label>
        <input
          type="checkbox"
          checked={letters}
          onChange={event => toggleLetters(event.target.checked)}
        />
        <BsToggleOff />
        <BsToggleOn />
        [a-z]
      </Label>

      <Label>
        <input
          type="checkbox"
          checked={uppercase}
          onChange={event => toggleUppercase(event.target.checked)}
        />
        <BsToggleOff />
        <BsToggleOn />
        [A-Z]
      </Label>

      <Label>
        <input
          type="checkbox"
          checked={numbers}
          onChange={event => toggleNumbers(event.target.checked)}
        />
        <BsToggleOff />
        <BsToggleOn />
        [0-9]
      </Label>

      <Label>
        <input
          type="checkbox"
          checked={special}
          onChange={event => toggleSpecial(event.target.checked)}
        />
        <BsToggleOff />
        <BsToggleOn />
        Special (?!@#$%...)
      </Label>

      <Label>
        <input
          type="checkbox"
          checked={custom}
          onChange={event => toggleCustom(event.target.checked)}
        />
        <BsToggleOff />
        <BsToggleOn />
        Custom
        <input
          type="text"
          placeholder="Your custom..."
          value={customContent}
          onInput={event => handleCustomContent(event.currentTarget.value)}
        />
      </Label>
    </div>
  );
};