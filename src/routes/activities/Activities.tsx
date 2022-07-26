import { useEffect } from 'react';
import PageTemplate from '../../components/page-template/PageTemplate';
import PageTitle from '../../components/page-title/PageTitle';

import s from './Activities.module.scss';

export default function Activities() {
  useEffect(() => {
    document.title = 'Activities';
  });
  return (
    <PageTemplate>
      <PageTitle>Activities</PageTitle>
    </PageTemplate>
  );
}
