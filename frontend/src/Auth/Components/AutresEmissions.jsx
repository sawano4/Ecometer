import { Box, Typography, Grid, Button } from '@mui/material';

const Styles = {
    contenuEtape: {
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '24px',
        textAlign: 'left',
        color: '#003049',
    },
    ajouterActiviteButton : {
        width: '150px',
        height: '32px',
        gap: '0px',
        borderRadius: '10px 10px 10px 10px',
        border: '1px solid #003049',
        background: '#FFFFFF',
        color: '#003049',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '16px',
        textAlign: 'center',
    }
};

const deplacementList = [
    "Autres Emissions indirectes"
];

function    AutresEmissions() {
    return (        
        <Grid >
            {deplacementList.map((deplacement, index) => (
                <Box key={index} p={2} bgcolor={'#F0F2F7'} mb={2} borderRadius={4}>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item xs={12} md={9}>
                            <Typography 
                                variant="h6" 
                                gutterBottom 
                                style={Styles.contenuEtape}
                            >
                                {deplacement}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
                            <Button style={Styles.ajouterActiviteButton}>                                                 
                                Votre bouton                                  
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            ))}
        </Grid>
    );
}

export default AutresEmissions;