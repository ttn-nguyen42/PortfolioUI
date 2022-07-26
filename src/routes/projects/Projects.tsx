import { useEffect } from 'react';
import Navigation from '../../components/navbar/Navigation';
import PageTemplate from '../../components/page-template/PageTemplate';
import PageTitle from '../../components/page-title/PageTitle';

import s from './Projects.module.scss';

export default function Projects() {
  useEffect(() => {
    document.title = 'Projects';
  });
  return (
    <PageTemplate>
      <PageTitle>Projects</PageTitle>
    </PageTemplate>
  );
}
