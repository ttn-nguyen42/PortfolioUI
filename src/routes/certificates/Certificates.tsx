import { useEffect, useState } from 'react';
import Reveal from '../../components/animate/Reveal';
import PagePoint from '../../components/page-point/PagePoint';
import PageTemplate from '../../components/page-template/PageTemplate';
import PageTitle from '../../components/page-title/PageTitle';
import Point from '../../components/points/Point';
import Subpoint from '../../components/subpoints/Subpoint';
import {
  ICertificate,
  ICertificateDescription,
} from '../../models/Certificate';
import { getCertificateData, getInfoData } from '../../network/HttpRepository';

export default function Certificates() {
  const [info, setInfo] = useState<any>({});
  const [profile, setProfile] = useState<any>({});
  const [loading, setLoading] = useState<boolean | null>(true);

  useEffect(() => {
    document.title = 'Certificates';
    setLoading(true);
    const effect = async () => {
      try {
        let certificates = await getCertificateData();
        if (certificates === null) {
          setLoading(null);
          return;
        }
        setProfile(await getInfoData());
        let classify: any = {};
        certificates.certificates.forEach((cert: ICertificate) => {
          if (classify[cert.type.name] === undefined) {
            classify[cert.type.name] = [cert];
          } else {
            classify[cert.type.name] = [...classify[cert.type.name], cert];
          }
        });
        setInfo(classify);
        setLoading(false);
      } catch (e) {
        setLoading(null);
      }
    };
    effect();
  }, []);

  return (
    <PageTemplate info={profile} loading={loading}>
      <PageTitle>Certificates</PageTitle>
      {Object.keys(info).map((key: string) => {
        return (
          <Reveal>
            <PagePoint title={key}>
              {info[key].map((cert: ICertificate) => {
                return (
                  <Reveal>
                    <Point
                      title={cert.name}
                      note={cert.time}
                      descriptionOne={cert.issuer}
                      descriptionTwo={cert.instructor}
                      links={cert.links}
                    >
                      {cert.descriptions.map(
                        (desc: ICertificateDescription) => {
                          return (
                            <Reveal>
                              <Subpoint>
                                <span>{desc.description}</span>
                              </Subpoint>
                            </Reveal>
                          );
                        }
                      )}
                    </Point>
                  </Reveal>
                );
              })}
            </PagePoint>
          </Reveal>
        );
      })}
    </PageTemplate>
  );
}
