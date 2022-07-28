import { useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import Reveal from '../../components/animate/Reveal';
import PageTemplate from '../../components/page-template/PageTemplate';
import PageTitle from '../../components/page-title/PageTitle';

export default function Posts() {
  useEffect(() => {
    document.title = 'Posts';
  });
  return (
    <PageTemplate>
      <PageTitle>Posts</PageTitle>
      <Reveal>
        <Alert variant='warning'>Coming soon!</Alert>
      </Reveal>
    </PageTemplate>
  );
}
