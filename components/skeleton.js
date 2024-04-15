import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

export default function SkeletonComponent({ title, subTitle, numberOfRows, numberOfColumns }) {
    return (
        <Box sx={{ marginTop: 10, borderRadius: 5, margin: 5 }}>
            <Typography variant="h5" component="div" sx={{ letterSpacing: '0.1em', textTransform: 'uppercase', color: 'blue' }}>
                {title || <Skeleton />}
            </Typography>
            <Typography variant="subtitle1" component="div" sx={{ color: 'gray', paddingLeft: 2, paddingBottom: 1 }}>
                {subTitle || <Skeleton />}
            </Typography>
            {
                Array.from({ length: numberOfRows }).map((_, rowIndex) => (
                    <Grid container key={rowIndex} sx={{ marginY: 5 }}>


                        <Skeleton animation="wave" variant="rectangular" width="100%" height={75} />



                    </Grid>
                ))
            }
        </Box>
    );
}