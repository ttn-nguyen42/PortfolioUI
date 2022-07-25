import { useEffect } from 'react';
import Navigation from '../../components/navbar/Navigation';
import PageTemplate from '../../components/page-template/PageTemplate';

import s from './Projects.module.scss';

export default function Projects() {
  useEffect(() => {
    document.title = 'Projects';
  });
  return <PageTemplate body={<div>Projects</div>} />;
}
