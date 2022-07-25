import { useEffect } from 'react';
import Navigation from '../../components/navbar/Navigation';
import PageTemplate from '../../components/page-template/PageTemplate';

import s from './Resume.module.scss';

export default function Resume() {
  useEffect(() => {
    document.title = 'Resume';
  });
  return <PageTemplate body={<div>Resume</div>} />;
}
