import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Reveal from '../../components/animate/Reveal';
import PagePoint from '../../components/page-point/PagePoint';
import PageTemplate from '../../components/page-template/PageTemplate';
import PageTitle from '../../components/page-title/PageTitle';
import {
  getAboutData,
  getInfoData,
  getResumeFileLink,
} from '../../network/HttpRepository';

export default function About() {
  const [aboutInfo, setInfo] = useState<any>({});
  const [profile, setProfile] = useState<any>({});
  const [loading, setLoading] = useState<boolean | null>(true);

  useEffect(() => {
    document.title = 'About';
    setLoading(true);
    const effect = async () => {
      try {
        let bio = await getAboutData();
        if (bio === null) {
          setLoading(null);
          return;
        }
        setProfile(await getInfoData());
        setInfo(bio);
        setLoading(false);
      } catch (e) {
        setLoading(null);
      }
    };
    effect();
  }, []);

  return (
    <PageTemplate info={profile} loading={loading}>
      <PageTitle>About</PageTitle>
      <Reveal>{aboutInfo.biography}</Reveal>
      <PagePoint title={'Utilities'}>
        <Reveal>
          <Button as='a' href={getResumeFileLink()} download variant='dark'>
            Download CV in PDF
          </Button>
        </Reveal>
      </PagePoint>
    </PageTemplate>
  );
}
