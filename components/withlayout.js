import { Box } from '@mui/material';
import Navigation from '@/app/navigation';
import React from 'react';

const withLayout = Page => {
    // eslint-disable-next-line react/display-name
    return () => (
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box sx={{
                flex: '15%',
                marginRight: '5px',
                borderRight: '1px',
                borderRadius: '10px',
                backgroundColor: '#fc0',

            }}>
                <Navigation />
            </Box>
            <Box sx={{
                flex: '85%',
                borderRadius: '10px',
                borderLeft: "2px solid beige",
                backgroundColor: "white",
                textAlign: "center"
            }}>
                <Page />
            </Box>
        </Box>
    );
};

export default withLayout;