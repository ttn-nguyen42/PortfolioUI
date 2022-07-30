import { useEffect, useState } from 'react';
import Reveal from '../../components/animate/Reveal';
import PagePoint from '../../components/page-point/PagePoint';
import PageTemplate from '../../components/page-template/PageTemplate';
import PageTitle from '../../components/page-title/PageTitle';
import Point from '../../components/points/Point';
import Subpoint from '../../components/subpoints/Subpoint';
import { IActivity, IActivityDescription } from '../../models/Activity';
import { getActivityData, getInfoData } from '../../network/HttpRepository';

export default function Activities() {
  const [categories, setCategories] = useState<any>({});
  const [profile, setProfile] = useState<any>({});

  const [loading, setLoading] = useState<boolean | null>(true);

  useEffect(() => {
    document.title = 'Activities';
    setLoading(true);
    const effect = async () => {
      try {
        let activities = await getActivityData();
        setProfile(await getInfoData());
        let byCategories: any = {};
        activities.activities.forEach((activity: IActivity) => {
          if (byCategories[activity.type.name] !== undefined) {
            byCategories[activity.type.name] = [
              ...byCategories[activity.type.name],
              activity,
            ];
          } else {
            byCategories[activity.type.name] = [activity];
          }
        });
        console.log(byCategories);
        setCategories(byCategories);
        setLoading(false);
      } catch (e) {
        setLoading(null);
      }
    };
    effect();
  }, []);

  return (
    <PageTemplate info={profile} loading={loading}>
      <PageTitle>Activities</PageTitle>
      {Object.keys(categories).map((key: string) => {
        console.log(key);
        return (
          <Reveal>
            <PagePoint title={key}>
              {categories[key].map((activity: IActivity) => {
                return (
                  <Reveal>
                    <Point
                      title={activity.name}
                      note={activity.time}
                      descriptionTwo={activity.overview}
                      descriptionOne={activity.organizer}
                      links={activity.links}
                    >
                      {activity.descriptions.map(
                        (desc: IActivityDescription) => {
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
