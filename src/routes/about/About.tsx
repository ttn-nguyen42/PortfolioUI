import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import PagePoint from '../../components/page-point/PagePoint';
import PageTemplate from '../../components/page-template/PageTemplate';
import PageTitle from '../../components/page-title/PageTitle';

import s from './About.module.scss';

export default function About() {
  useEffect(() => {
    document.title = 'About';
  });

  return (
    <PageTemplate>
      <PageTitle>About</PageTitle>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec sem
        libero. Quisque mattis ipsum id consequat hendrerit. Proin eget erat nec
        dolor blandit laoreet in in ex. Etiam vitae dapibus erat, in elementum
        ipsum. Fusce efficitur, velit eget auctor gravida, nulla velit rhoncus
        est, id rutrum lorem erat pulvinar magna. Aenean eget erat turpis.
        Aliquam mollis sit amet urna non pulvinar. In sodales dictum nisl, id
        tincidunt sapien pharetra commodo. Aliquam erat volutpat. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Vestibulum tellus arcu, dictum in varius vitae, aliquam ut
        dolor. Maecenas aliquam pharetra massa. Proin id sapien nisi. Cras
        blandit urna vitae dolor iaculis euismod sed eu enim.
      </p>
      <PagePoint title={'Utilities'}>
        <div className={s['utilities']}>
          <span>Please find all attached documents and contents here:</span>
          <Button variant='dark'>Download CV in PDF</Button>
        </div>
      </PagePoint>
    </PageTemplate>
  );
}
