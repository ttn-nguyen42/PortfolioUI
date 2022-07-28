import { useEffect } from 'react';
import PagePoint from '../../components/page-point/PagePoint';
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
      <PagePoint title='Competitions'>
        <div></div>
      </PagePoint>
      <PagePoint title='Social Activities'>
        <div></div>
      </PagePoint>
      <PagePoint title='Talkshows'>
        <div></div>
      </PagePoint>
    </PageTemplate>
  );
}
