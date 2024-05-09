import Text from '../../../../../components/Text';
import Title from '../../../../../components/Title';
import style from './Header.module.scss';

const PageHeader = ({ title, client, brief, scope }) => {
  return (
    <div className={style.header}>
      <div className={style.headerCol}>
        <Title.H2 className={style.header__title}>{title}</Title.H2>
        <div className={style.header__client}>
          <Text secondary>Client</Text>
          <Text lg bold>
            <Title.Row>{client}</Title.Row>
          </Text>
        </div>
      </div>
      <div className={style.headerCol}>
        <Title.H3 className={style.headerCol__title}>
          <Title.Row>about project</Title.Row>
        </Title.H3>
        <div className={style.headerCol__row}>
          <Text lg bold className={style.headerCol__rowTitle}>
            <Title.Row>Brief</Title.Row>
          </Text>
          <Text secondary className={style.headerCol__rowText}>
            {brief}
          </Text>
        </div>
        <div className={style.headerCol__row}>
          <Text lg bold className={style.headerCol__rowTitle}>
            <Title.Row>Scope</Title.Row>
          </Text>
          <Text secondary className={style.headerCol__rowText}>
            {scope}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
