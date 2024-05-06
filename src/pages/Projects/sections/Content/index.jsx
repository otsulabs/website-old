import { useMediaQuery } from 'usehooks-ts';
import ListTable from '../../../../components/ListTable';
import style from './Content.module.scss';
import VideoCard from './components/VideoCard';
import content from './content';

const ContentSection = ({ isListType }) => {
  const colWidth = [360, 220, 300];
  const isTablet = useMediaQuery('(max-width:991.98px)');

  return (
    <section className={`${style.content} ${isListType && style.list}`}>
      {isListType && (
        <ListTable.Base>
          {isTablet ? (
            <>
              {content.cards.map((item, index) => (
                <ListTable.Mobile
                  key={index}
                  to={item.to}
                  title={item.title}
                  text={item.mobileDescription}
                />
              ))}
            </>
          ) : (
            <>
              <ListTable.Head
                customColWidth={colWidth}
                headings={['Title', 'Type', 'Client', 'Services']}
              />
              {content.cards.map((item, index) => (
                <ListTable.Row
                  to={item.to}
                  key={index}
                  customColWidth={colWidth}
                >
                  <ListTable.Item>{item.title}</ListTable.Item>
                  <ListTable.Item>{item.type}</ListTable.Item>
                  <ListTable.Item>{item.client}</ListTable.Item>
                  <ListTable.Item>{item.services}</ListTable.Item>
                </ListTable.Row>
              ))}
            </>
          )}
        </ListTable.Base>
      )}
      <div className={`__container ${style.con}`}>
        {!isListType && (
          <div className={style.contentBody}>
            {content.cards.map((item, index) => (
              <VideoCard
                key={index}
                video={item.video}
                title={item.title}
                user={item.user}
                userType={item.userType}
                className={style.contentBody__item}
                to={item.to}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContentSection;
