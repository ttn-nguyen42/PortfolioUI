import { useEffect } from 'react';
import Navigation from '../../components/navbar/Navigation';
import PageTemplate from '../../components/page-template/PageTemplate';

import s from './Posts.module.scss';

export default function Posts() {
  useEffect(() => {
    document.title = 'Posts';
  });
  return <PageTemplate body={<div>Posts</div>} />;
}
