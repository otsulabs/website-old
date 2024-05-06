import { useMediaQuery } from 'usehooks-ts';
import ListTable from '../../../../components/ListTable';
import style from './List.module.scss';
import content from './content';

const ListSection = () => {
  const colWidth = [460, 470];
  const isMobile = useMediaQuery('(max-width:991.98px)');

  return (
    <section className={style.list}>
      <ListTable.Base className={style.list__content}>
        {isMobile ? (
          <>
            {content.map((item, index) => (
              <ListTable.Mobile
                key={index}
                to={'/careers/details'}
                title={item.title}
                text={item.text}
              />
            ))}
          </>
        ) : (
          <>
            <ListTable.Head
              customColWidth={colWidth}
              headings={['Title', 'Team', 'Location']}
            />
            {content.map((item, index) => (
              <ListTable.Row
                key={index}
                to={'/careers/details'}
                customColWidth={colWidth}
              >
                <ListTable.Item>{item.title}</ListTable.Item>
                <ListTable.Item>{item.team}</ListTable.Item>
                <ListTable.Item>{item.location}</ListTable.Item>
              </ListTable.Row>
            ))}
          </>
        )}
      </ListTable.Base>
    </section>
  );
};

export default ListSection;
