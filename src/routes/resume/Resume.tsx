import { useEffect } from 'react';
import Navigation from '../../components/navbar/Navigation';
import PageTemplate from '../../components/page-template/PageTemplate';
import PageTitle from '../../components/page-title/PageTitle';

import s from './Resume.module.scss';

export default function Resume() {
  useEffect(() => {
    document.title = 'Resume';
  });
  return (
    <PageTemplate>
      <PageTitle>Resume</PageTitle>
    </PageTemplate>
  );
}
