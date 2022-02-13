import React from 'react';

import MainLayout from '../layouts/MainLayout';
import HeadSection from '../components/HeadSection';
import SkillSection from '../components/SkillSection';
import JobSection from '../components/JobSection';

interface Props {}
const HomePage: React.FC<Props> = (props) => {
    return (
        <MainLayout>
            <HeadSection offset={0} />
            <SkillSection offset={1} />
            <JobSection />
        </MainLayout>
    );
};
export default HomePage;
