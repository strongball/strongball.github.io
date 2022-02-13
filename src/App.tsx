import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from './theme';

import HomePage from './containers/HomePage';
import ProjectPage from './containers/ProjectPage';

interface Props {}
const App: React.FC<Props> = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/project" element={<ProjectPage />} />
            </Routes>
        </ThemeProvider>
    );
};
export default App;
