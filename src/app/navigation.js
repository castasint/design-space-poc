"use strict";

import { AddBox as AddBoxIcon, Home as HomeIcon, ViewList as ViewListIcon } from '@mui/icons-material';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import Link from 'next/link';
import React from 'react';

export default function Navigation({ children }) {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '15%', height: '100vh', }}>
                <List>
                    <Link href="/home">
                        <ListItem button>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary="Home" primaryTypographyProps={{ fontWeight: 900, fontSize: '1rem', lineHeight: '1.3rem' }} />
                        </ListItem>
                    </Link>
                    <Link href="/template">
                        <ListItem button>
                            <ListItemIcon><AddBoxIcon /></ListItemIcon>
                            <ListItemText primary="Create New Template" primaryTypographyProps={{ fontWeight: 900, fontSize: '1rem' }} />
                        </ListItem>
                    </Link>
                    <Link href="/templatelist">
                        <ListItem button>
                            <ListItemIcon><ViewListIcon /></ListItemIcon>
                            <ListItemText primary="View All Templates" primaryTypographyProps={{ fontWeight: 900, fontSize: '1rem' }} />
                        </ListItem>
                    </Link>
                </List>
            </div>
            <div style={{ width: '85%', padding: '20px' }}>
                {children}
            </div>
        </div>
    );
}