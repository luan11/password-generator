import { BsToggleOff, BsToggleOn } from 'react-icons/bs';

import { Label } from './styles';

export function Options() {
  return (
    <div>
      <h2>Options</h2>

      <Label>
        <input type="checkbox" />
        <BsToggleOff />
        <BsToggleOn />
        [a-z]
      </Label>

      <Label>
        <input type="checkbox" />
        <BsToggleOff />
        <BsToggleOn />
        [A-Z]
      </Label>

      <Label>
        <input type="checkbox" />
        <BsToggleOff />
        <BsToggleOn />
        [0-9]
      </Label>

      <Label>
        <input type="checkbox" />
        <BsToggleOff />
        <BsToggleOn />
        Special (?!@#$%...)
      </Label>

      <Label>
        <input type="checkbox" />
        <BsToggleOff />
        <BsToggleOn />
        Custom
        <input type="text" placeholder="Your custom..." />
      </Label>
    </div>
  );
};