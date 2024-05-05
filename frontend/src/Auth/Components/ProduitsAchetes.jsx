import React, { useState , useEffect} from 'react';
import { Box, Typography, Grid, Button, Paper, Dialog, DialogContent, Checkbox, FormControlLabel  ,TextField} from '@mui/material';
import CroixIcon from './CroixIcon';
import axios from 'axios';

const Styles = {
    contenuEtape: {
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '24px',
        textAlign: 'left',
        color: '#003049',
    },
    ajouterActiviteButton: {
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
    },
    customSelect: {
        fontFamily: 'Inter, sans-serif',
        height : '45px',
        width: '100%',
        padding: '10px',
        borderRadius: '15px',
        border: '0px solid #003049',
        backgroundColor: '#EEF5FC',
        outline: 'none',
        appearance: 'none',
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23003049'><path d='M7 10l5 5 5-5z'/></svg>`
        )}")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 10px top 50%',
        backgroundSize: '12px',
        cursor: 'pointer',
        color: '#4D4D4D',
    },
    customTitle: {
        fontFamily: 'Inter, sans-serif',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '24px',
        textAlign: 'left',
        color: '#212121',
    },
    rechercheButton: {
        fontFamily: 'Inter, sans-serif',
        width: '100%',
        height: '48px',
        padding: '14px 32px 14px 32px',
        gap: '10px',
        borderRadius: '15px 15px 15px 15px',
        background: 'linear-gradient(117.07deg, #003049 0%, #2094F3 301.94%)',
        color: 'white',
    },
    annulerButton: {
        fontFamily: 'Inter, sans-serif',
        border: '1px solid #D62828',
        borderRadius: '15px',
        backgroundColor: '#FFFFFF',
        color: '#D62828',
        height: '48px',
    },
    validerButton: {
        fontFamily: 'Inter, sans-serif',
        background: '#003049',
        borderRadius: '15px',
        height: '48px',
    },
    Button_Link_Medium: {
        fontFamily: 'Inter, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '20px',
        textAlign: 'center',
    },
    rechercherText: {
        fontFamily: 'Inter, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '20px',
        textAlign: 'center',
        textTransform: 'none',
      },
      annulerText: {
        fontFamily: 'Inter, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '20px',
        textAlign: 'center',
        color: '#D62828',
        textTransform: 'none',
      },
      validerText: {
        fontFamily: 'Inter, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '20px',
        textAlign: 'center',
        textTransform: 'none',
      },
      ajouterText: {
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '16px',
        textAlign: 'center',
        color: '#003049',
        textTransform: 'none',
      },
};

function ProduitsAchetes({ produitsAchetesList, setProduitsAchetesList }) {

        const [openDialog, setOpenDialog] = useState(false);
        const [selectedOption1, setSelectedOption1] = useState('');
        const [selectedOption2, setSelectedOption2] = useState('');
        const [selectedOption3, setSelectedOption3] = useState('');
        const [searchResult, setSearchResult] = useState([]);
        const [category2Options, setCategory2Options] = useState([]);
        const [category3Options, setCategory3Options] = useState([]);
        const [selectedOptions, setSelectedOptions] = useState([]);
        const [quantity , setQuantity] = useState('');
        const [selectedEmissionIndex, setSelectedEmissionIndex] = useState(null);
        

        const handleClickOpen = async (index) => {

            setSelectedEmissionIndex(index);
            setOpenDialog(true);
        };
        useEffect(() => {
            setSelectedOption3(category3Options[0])
        }, [category3Options]);
        useEffect(() => {
            if (openDialog) {
                // Charger les options de la catégorie 1 à partir de emissionsList
                const selectedEmission = produitsAchetesList[selectedEmissionIndex];
                setSelectedOption1(selectedEmission.dialogueOptions[0].label);
                // Lancer la requête POST pour les options de la catégorie 2
                fetchCategory2Options(selectedEmission.dialogueCategorie);
            }
        }, [openDialog]);
        useEffect(() => {

          //  setSelectedOption2(category2Options[0]);
           // console.log("+++++++++++++++++++++++++++++"+category2Options[0]);
            handleCategory2Change(category2Options[0]);
            
        }, [category2Options]);
    
        const fetchCategory2Options = async (category1Value) => {
            try {
                // Envoyer la requête POST pour les options de la catégorie 2
                const response = await axios.post('http://localhost:3000/api/categories/nextCategories', { 
                    
                        userSelectedCategories : [produitsAchetesList[selectedEmissionIndex].dialogueOptions[0].label ]
                    
                 }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*' // Autorise les requêtes depuis ce domaine
                        // Vous pouvez également ajouter d'autres en-têtes CORS si nécessaire
                    }}
                );
                 const d = response.data.nextCategories;
                 
                setCategory2Options(d);
                console.log(category2Options);
            } catch (error) {
                console.error('Erreur lors de la récupération des options de la catégorie 2 :', error);
            }
        };
    
        // Autres fonctions comme handleClose, handleCheckboxChange, handleValider, SupprimerSelectedOption, etc.
    
        const handleCategory2Change = async (selectedCategory2Option) => {

            
            setSelectedOption2(selectedCategory2Option);
           
            // Lancer la requête POST pour les options de la catégorie 3
            console.log(produitsAchetesList[selectedEmissionIndex].dialogueOptions[0].label);
            console.log(selectedCategory2Option);
            fetchCategory3Options([produitsAchetesList[selectedEmissionIndex].dialogueOptions[0].label , selectedCategory2Option]);
        };


        const handleCategory3Change = async (selectedCategory3Option) => {

            
            setSelectedOption3(selectedCategory3Option);
           
            // Lancer la requête POST pour les options de la catégorie 3
            // fetchCategory3Options([produitsAchetesList[selectedEmissionIndex].dialogueOptions[0].label , selectedCategory2Option]);
        };
    
        const fetchCategory3Options = async ([category1Value , category2Value]) => {
            try {

                console.log("============================="+ [category1Value , category2Value ])
                // Envoyer la requête POST pour les options de la catégorie 3
                const response = await axios.post('http://localhost:3000/api/categories/nextCategories', {
                        
                        userSelectedCategories : [category1Value , category2Value ]
                     
                });

                 
                setCategory3Options(response.data.nextCategories);
                // Mettre à jour les options de la catégorie 3

              
                 setSelectedOption3(category3Options[0]);
                
                 console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   '+category3Options[0]);
                // Mettre à jour les options de la catégorie 3
                // ...
            } catch (error) {
                console.error('Erreur lors de la récupération des options de la catégorie 3 :', error);
            }
        };
    
        const handleRechercher = async () => {
            try {

                console.log("-------------??????-----------------"+[selectedOption1, selectedOption2, selectedOption3]);
                // Envoi de la requête POST avec les valeurs sélectionnées des trois selects
                const response = await axios.post('http://localhost:3000/api/categories/nextCategories', {
                    userSelectedCategories: [selectedOption1, selectedOption2, selectedOption3]
                });
               
                    //console.log(response.data.matchingDocuments);

                   setSearchResult(response.data.matchingDocuments);
            } catch (error) {
                console.error('Erreur lors de la recherche :', error);
            }
        };

    const handleClose = () => {
        setOpenDialog(false);
    };


    const handleCheckboxChange = (event, value) => {
        const { checked } = event.target;
        if (checked) {
            // Ajouter l'option à la liste des options sélectionnées
            setSelectedOptions(prevSelectedOptions => [...prevSelectedOptions, value]);
        } else {
            // Retirer l'option de la liste des options sélectionnées
            setSelectedOptions(prevSelectedOptions => prevSelectedOptions.filter(option => option !== value));
        }
    };
    const handleValider = () => {
        const updatedEmissionsList = [...produitsAchetesList];
        // Récupérer l'index de la catégorie sélectionnée
        const selectedEmission = updatedEmissionsList[selectedEmissionIndex];
        
        // Ajouter les options sélectionnées à la catégorie sélectionnée
        selectedOptions.forEach(option => {
            selectedEmission.selectedOptions.push({ item: option, quantity }); // Ajouter la quantité si nécessaire
        });
    
        // Mettre à jour emissionsList avec la catégorie mise à jour
        updatedEmissionsList[selectedEmissionIndex] = selectedEmission;
    
        // Mettre à jour le state avec la liste mise à jour
        setProduitsAchetesList(updatedEmissionsList);
    
        // Réinitialiser l'état local des options sélectionnées
        setSelectedOptions([]);
    
        // Réinitialiser l'état local de la quantité et fermer le dialogue
        setQuantity('');
        setOpenDialog(false);
    };
    

    const SupprimerSelectedOption = (optionToRemove) => {
        const updatedEmissionsList = [...produitsAchetesList];
        updatedEmissionsList[selectedEmissionIndex].selectedOptions = updatedEmissionsList[selectedEmissionIndex].selectedOptions.filter(option => option.item !== optionToRemove);
        setProduitsAchetesList(updatedEmissionsList);
    };
    return (
        <div>
{produitsAchetesList.map((emission, index) => (
                <Box key={index} p={2} bgcolor={'#F0F2F7'} mb={2} borderRadius={4}>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item xs={12} md={9}>
                            <Typography variant="h6" gutterBottom style={Styles.contenuEtape}>
                                {emission.label}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
                            <Button style={Styles.ajouterActiviteButton} onClick={() => handleClickOpen(index)}>
                                <Typography style={Styles.ajouterText}>Ajouter Activité</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            {emission.selectedOptions && emission.selectedOptions.length > 0 &&
                                <Grid style={{ marginTop: '15px' }}>
                                    {emission.selectedOptions.map((option, optionIndex) => (
                                        <Grid container sx={{ border: '1px solid black', borderRadius: '15px', marginBottom: '15px', padding: '20px', borderColor: '#6F6C8F' }} key={optionIndex}>
                                            <Grid item md={12}>
                                                <Grid container>
                                                    <Grid item xs={12} md={12} sx={{ marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <Typography style={Styles.contenuEtape}>{option.item}</Typography>
                                                        <CroixIcon onClick={() => SupprimerSelectedOption(option.item)} />
                                                    </Grid>
                                                    <Grid item md={1.6} xs={12} container alignItems="center" style={{ marginTop: '-8px' }}>
                                                        <Typography style={Styles.contenuEtape}>Quantité :</Typography>
                                                    </Grid>
                                                    <Grid item xs={12} md={10.4}>
                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            value={option.quantity}
                                                            sx={{
                                                                borderRadius: '15px',
                                                                mt: 1,
                                                                mb: 2,
                                                                '& .MuiOutlinedInput-notchedOutline': {
                                                                    borderColor: '#969696 !important',
                                                                    borderRadius: '15px',
                                                                },
                                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                                    borderColor: '#969696 !important',
                                                                    borderRadius: '15px',
                                                                },
                                                                '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                    borderColor: '#969696 !important',
                                                                    borderRadius: '15px',
                                                                }
                                                            }}
                                                            onChange={(e) => {
                                                                const updatedEmissionsList = [...produitsAchetesList];
                                                                updatedEmissionsList[selectedEmissionIndex].selectedOptions[optionIndex].quantity = e.target.value;
                                                                console.log(updatedEmissionsList[selectedEmissionIndex].selectedOptions[optionIndex].item);
                                                                console.log(updatedEmissionsList[selectedEmissionIndex].selectedOptions[optionIndex].quantity);
                                                                setProduitsAchetesList(updatedEmissionsList);
                                                            }}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    ))}
                                </Grid>
                            }
                        </Grid>
                    </Grid>
                </Box>
            ))}

            <Dialog open={openDialog} onClose={handleClose} fullWidth maxWidth="md" borderRadius={15} sx={{ borderRadius: '15px', fontFamily: 'Inter, sans-serif'}}>
                <DialogContent sx={Styles.dialogContent}>
                    <Grid container spacing={2} sx={{ paddingLeft: '16px', paddingRight: '16px' }}>
                        {selectedEmissionIndex !== null && (
                            <Grid item xs={12} md={12}>
                                <Typography variant="h6" style={Styles.customTitle}>Catégorie 1</Typography>
                                <select style={{ ...Styles.customSelect, width: '100%' }}>
                                    {produitsAchetesList[selectedEmissionIndex].dialogueOptions.map((option, index) => (
                                        <option key={index} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </Grid>
                        )}
                         <Grid item xs={12} md={12}>
                            <Typography variant="h6" style={Styles.customTitle}>Catégorie 2</Typography>
                            <select style={{ ...Styles.customSelect, width: '100%' }} onChange={(e) => handleCategory2Change(e.target.value)}>
                            {category2Options.map((option, index) => (
                                    <option key={index} value={option.value}>{category2Options[index]}</option>
                                ))}
                            </select>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography variant="h6" style={Styles.customTitle}>Catégorie 3</Typography>
                            <select style={{ ...Styles.customSelect, width: '100%' }} onChange={(e) => handleCategory3Change(e.target.value)} >
                            {category3Options.map((option, index) => (
                                    <option key={index} value={option}>{category3Options[index]}</option>
                                ))}
                            </select>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Button style={Styles.rechercheButton} onClick={handleRechercher}><Typography  style={Styles.rechercherText}>Rechercher</Typography></Button>
                        </Grid>
                        <Grid item xs={12} md={12} style={{ overflow: 'auto' }}>
                            <Paper style={{ height: '152px', borderRadius: '15px', padding: '20px', backgroundColor: '#F2F4F8', overflow: 'auto' }}>
                               
                                {searchResult.map((option, index) => (
                                    <p>{searchResult[index].description}</p>
                                ))}
                               
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Grid container spacing={3}>
                                <Grid item xs={6} md={6}>
                                    <Button variant="contained" fullWidth style={{ ...Styles.annulerButton }}>
                                        <Typography  style={Styles.annulerText}>Annuler</Typography>
                                    </Button>
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <Button variant="contained" fullWidth style={{ ...Styles.validerButton }} onClick={handleValider}>
                                        <Typography  style={Styles.validerText}>Valider</Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default ProduitsAchetes;
