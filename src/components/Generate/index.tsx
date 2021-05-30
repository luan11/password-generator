import { useEffect, useRef } from 'react';

import { usePasswordContext } from './../../contexts/Password';

import Slider from 'react-input-slider';

import { FaRegCopy } from 'react-icons/fa';
import { FiRotateCw } from 'react-icons/fi';

import { H4, Group, Input, Button } from './styles';

export function Generate() {
  const {
    length,
    generated,
    handleLength,
    hasGenerated,
    isAbleToGenerate,
    generate
  } = usePasswordContext();

  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const buttonGenerateRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonGenerateRef.current;

    if (button) {
      button.click();
    }
  }, []);

  function copy() {
    const password = inputPasswordRef.current;

    if (password) {
      password.select();
      password.setSelectionRange(0, 99999);

      document.execCommand('copy');
    }
  }

  return (
    <div>
      <h2>Generate</h2>

      <H4>Length <span>{length}</span></H4>
      <Slider
        axis="x"
        styles={{
          track: {
            backgroundColor: 'var(--body)',
          },
          active: {
            backgroundColor: 'var(--light-green)',
          }
        }}
        xstep={2}
        xmin={4}
        xmax={128}
        x={length}
        onChange={({ x }) => handleLength(x)}
      />

      <Group>
        <Input
          ref={inputPasswordRef}
          type="text"
          readOnly={true}
          placeholder="Your generated password..."
          value={generated}
        />
        <Button
          type="button"
          disabled={!hasGenerated()}
          onClick={copy}
        >
          <FaRegCopy />
        </Button>
      </Group>

      <Button
        ref={buttonGenerateRef}
        type="button"
        disabled={!isAbleToGenerate()}
        style={{
          width: '100%',
        }}
        onClick={() => generate()}
      >
        <FiRotateCw />
        <span>Generate</span>
      </Button>
    </div>
  );
};
