"use client";

import { Container, Divider, Grid, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';

import SkeletonComponent from '../../components/skeleton';
import withLayout from "../../components/withlayout"

const Template = () => {
    const [templateName, setTemplateName] = useState("");
    const [templateTitle, setTemplateTitle] = useState("");
    const [templateSubtitle, setTemplateSubtitle] = useState("");
    const [templateRows, setTemplateRows] = useState(2);
    const [templateColumns, setTemplateColumns] = useState(2);

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField label="Template Name" value={templateName} onChange={e => setTemplateName(e.target.value)} fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Template Title" value={templateTitle} onChange={e => setTemplateTitle(e.target.value)} fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Template Subtitle" value={templateSubtitle} onChange={e => setTemplateSubtitle(e.target.value)} fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextField type="number" label="Number of Rows" value={templateRows} onChange={e => setTemplateRows(e.target.value)} fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextField type="number" label="Number of Columns" value={templateColumns} onChange={e => setTemplateColumns(e.target.value)} fullWidth />
                </Grid>
            </Grid>


            <SkeletonComponent
                title={templateTitle}
                subTitle={templateSubtitle}
                numberOfRows={templateRows}
                numberOfColumnsPerRow={templateColumns}
            />
        </Container>
    );
};

export default withLayout(Template);