import { useEffect } from 'react';
import Navigation from '../../components/navbar/Navigation';
import PageTemplate from '../../components/page-template/PageTemplate';

import s from './Activities.module.scss';

export default function Activities() {
  useEffect(() => {
    document.title = 'Activities';
  });
  return <PageTemplate body={<div>Activities</div>} />;
}
