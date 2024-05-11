// CroixIcon.jsx
import { IconButton } from '@mui/material';
import React from 'react';

const CroixIcon = ({ onClick }) => {
    return (
        <IconButton onClick={() => onClick()}>
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.75 13L13.25 1M1.75 1L13.25 13" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </IconButton>
    );
};

export default CroixIcon;
