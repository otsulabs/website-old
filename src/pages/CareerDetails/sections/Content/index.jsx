import Text from '../../../../components/Text';
import Title from '../../../../components/Title';
import style from './Content.module.scss';
import Block from './components/Block';
import Info from './components/Info';
import img from './assets/img/img.jpg';
import Form from '../../../../modules/Form';
import { useMediaQuery } from 'usehooks-ts';

const ContentSection = () => {
  const isTablet = useMediaQuery('(max-width:991.98px)');

  return (
    <section className={style.content}>
      <Block.Base>
        {isTablet && (
          <Block.Col>
            <Info
              img={img}
              title={'Animation'}
              employment={'Full-time'}
              place={'Ho Chi Minh City'}
            />
          </Block.Col>
        )}
        <Block.Col>
          <Text bold upperCase secondary>
            <Title.Row>01</Title.Row>
          </Text>
        </Block.Col>
        <Block.Col>
          <Title.H4>
            <Title.Row>Responsibilities</Title.Row>
          </Title.H4>
          <Text lg className={style.list}>
            <ul>
              <li>
                Lead and support the animation team to ensure that everyone has
                the necessary skills and resources to complete their tasks.
              </li>
              <li>
                Collaborate closely with the director, scriptwriter, and
                production team to establish the project's visual style and
                production plan.
              </li>
              <li>Create storyboards and color scripts</li>
              <li>
                Oversee and manage the entire animation production process, from
                initiation to completion.
              </li>
              <li>
                Ensure high-quality animation by monitoring and meeting all
                project quality requirements within the designated timeline.
              </li>
            </ul>
          </Text>
        </Block.Col>
        {!isTablet && (
          <Block.Col>
            <Info
              img={img}
              title={'Animation'}
              employment={'Full-time'}
              place={'Ho Chi Minh City'}
            />
          </Block.Col>
        )}
      </Block.Base>
      <Block.Base>
        <Block.Col>
          <Text bold upperCase secondary>
            <Title.Row>02</Title.Row>
          </Text>
        </Block.Col>
        <Block.Col>
          <Title.H4>
            <Title.Row>Requirements</Title.Row>
          </Title.H4>
          <Text lg className={style.list}>
            <ul>
              <li>
                At least 5-7 years of experience in the animation industry.
              </li>
              <li>
                Proficiency in animation software such as ClipStudio Paint Ex
                and Toon Boon.
              </li>
              <li>
                Strong leadership skills, with the ability to mentor and develop
                the animation team.
              </li>
              <li>
                Competency in reading and comprehending scripts, graphics, and
                other documents pertaining to animation production.
              </li>
              <li>
                Excellent communication skills, both verbal and written, and the
                ability to effectively convey ideas and concepts to team
                members.
              </li>
              <li>
                Highly responsible and skilled in time management. Willingness
                to learn, adapt, and embrace new ideas and techniques in the
                field.
              </li>
            </ul>
          </Text>
        </Block.Col>
        <Block.Col></Block.Col>
      </Block.Base>
      <Block.Base>
        <Block.Col>
          <Text bold upperCase secondary>
            <Title.Row>03</Title.Row>
          </Text>
        </Block.Col>
        <Block.Col>
          <Title.H4>
            <Title.Row>What we offer</Title.Row>
          </Title.H4>
          <Text lg className={style.list}>
            <ul>
              <li>Competitive compensation.</li>
              <li>
                Beautiful working space located in the heart of the city, that
                includes free facilities, such as gym, swimming pool, library,
                and more.
              </li>
              <li>
                An environment that fosters creativity and personal growth.
              </li>
              <li>Company-provided work equipment.</li>
              <li>Paid holidays.</li>
              <li>Biannual salary reviews.</li>
            </ul>
          </Text>
        </Block.Col>
      </Block.Base>
      <Block.Base>
        <Block.Col>
          <Text bold upperCase secondary>
            <Title.Row>Application form</Title.Row>
          </Text>
        </Block.Col>
        <Block.Col>
          <Title.H4>
            <Title.Row>Fill in the forms and we will contact you</Title.Row>
            <Form className={style.form} />
          </Title.H4>
        </Block.Col>
      </Block.Base>
    </section>
  );
};

export default ContentSection;
