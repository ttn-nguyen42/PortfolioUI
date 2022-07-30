import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Reveal from '../../components/animate/Reveal';
import PagePoint from '../../components/page-point/PagePoint';
import PageTemplate from '../../components/page-template/PageTemplate';
import PageTitle from '../../components/page-title/PageTitle';
import { getAboutData, getInfoData } from '../../network/HttpRepository';

export default function About() {
  const [aboutInfo, setInfo] = useState<any>({});
  const [profile, setProfile] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'About';
    setLoading(true);
    const effect = async () => {
      let bio = await getAboutData();
      setProfile(await getInfoData());
      setInfo(bio);
      setLoading(false);
    };
    effect();
  }, []);

  return (
    <PageTemplate info={profile} loading={loading}>
      <PageTitle>About</PageTitle>
      <Reveal>{aboutInfo.biography}</Reveal>
      <PagePoint title={'Utilities'}>
        <Reveal>
          <Button variant='dark'>Download CV in PDF</Button>
        </Reveal>
      </PagePoint>
    </PageTemplate>
  );
}
