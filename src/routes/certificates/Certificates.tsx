import { useEffect } from 'react';
import PageTemplate from '../../components/page-template/PageTemplate';
import PageTitle from '../../components/page-title/PageTitle';

import s from './Certificates.module.scss';

export default function Certificates() {
  useEffect(() => {
    document.title = 'Certificates';
  });
  return (
    <PageTemplate>
      <PageTitle>Certificates</PageTitle>
    </PageTemplate>
  );
}
