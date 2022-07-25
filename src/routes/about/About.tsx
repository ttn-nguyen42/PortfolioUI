import { useEffect } from 'react';
import PageTemplate from '../../components/page-template/PageTemplate';

import s from './About.module.scss';

export default function About() {
  useEffect(() => {
    document.title = 'About';
  });

  return <PageTemplate body={<div>About</div>} />;
}
