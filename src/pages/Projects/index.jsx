import { useState } from 'react';
import ContentSection from './sections/Content';
import MainSection from './sections/Main';

const ProjectsPage = () => {
  const [isListType, setIsListType] = useState(false);

  const handleListType = (type) => {
    setIsListType(type);
  };

  return (
    <>
      <MainSection isListType={isListType} handleListType={handleListType} />
      <ContentSection isListType={isListType} />
    </>
  );
};
export default ProjectsPage;
