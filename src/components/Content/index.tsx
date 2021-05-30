import { Options } from './../Options';
import { Generate } from './../Generate';

import { Container } from './styles'

export function Content() {
  return (
    <Container>
      <Options />
      <Generate />
    </Container>
  );
};