import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Typography, Box, Divider } from "@mui/material";

const FirstCard = () => {
  const styles = {
    button: {
      height: "56px",
      gap: "16px",
      borderRadius: "15px",
      border: "1px solid #0F172A",
      fontFamily: "Inter",
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "24px",
      textAlign: "center",
      textTransform: "none",
      color: "#0F172A",
      padding: "0px",
      "&:hover": {
        backgroundColor: "inherit",
        color: "#0F172A",
        border: "1px solid #0F172A",
      },
      "&:active": {
        backgroundColor: "inherit",
        color: "#0F172A",
        border: "1px solid #0F172A",
      },
    },
    circle: {
      width: "124px",
      height: "124px",
      borderRadius: "50%",
      backgroundColor: "#E9B9B9",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    circleContainer: {
      height: "124px",
      marginRight: 2.5,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontFamily: "Eudoxus Sans, sans-serif",
      fontSize: "30px",
      fontWeight: 700,
      lineHeight: "30px",
      textAlign: "center",
      marginTop: "10px",
      textTransform: "none",
    },
    bodyText: {
      fontFamily: "Inter",
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "28px",
      textAlign: "center",
      color: "#F77F00",
      textTransform: "none",
    },
    detailsText: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "28px",
      textAlign: "center",
      color: "#0F172A",
      textTransform: "none",
    },
  };
  const user = JSON.parse(localStorage.getItem("client"));
  return (
    <Grid container justifyContent="center" alignItems="center" height="auto">
      <Grid item xs={12} md={10.94}>
        <Grid container height="auto" sx={{ marginTop: { md: "40px" } }}>
          <Grid
            item
            xs={12}
            md={12}
            sx={{ height: "auto", marginBottom: "16px" }}
          >
            <Grid container height="auto">
              <Grid item xs={12} md={2} sx={styles.circleContainer}>
                <Box
                  component="img"
                  style={styles.circle}
                  alt={user.profilePicture.public_id}
                  src={user.profilePicture.url}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={4.31}
                sx={{ height: "124px", justifyContent: "center" }}
              >
                <Grid
                  container
                  spacing={1}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={12}>
                    <Typography variant="h2" sx={styles.text}>
                      {" "}
                      {user.name}
                    </Typography>
                  </Grid>
                  {/*************************/}
                  <Grid item xs={12}>
                    <Typography variant="body1" sx={styles.bodyText}>
                      {user.structure || "Structure"}
                      {", "}
                      {user.industry || "Industry"}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "100px", // Adjust height as needed
                  marginRight: 4,
                }}
              >
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    height: "110%",
                    borderRightWidth: 3, // Adjust thickness
                  }}
                />
              </Box>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  height: "100%",
                  marginTop: 2.5,
                }}
              >
                <Grid item xs={12}>
                  <Typography variant="body1" sx={styles.detailsText}>
                    Nombre de locaux:
                    <span className="text-[#F77F00]">
                      {" " + user.numberOfLocations || "N/A"}
                    </span>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" sx={styles.detailsText}>
                    Nombre d&apos;employés:
                    <span className="text-[#F77F00]">
                      {" " + user.numberOfEmployees || "N/A"}
                    </span>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" sx={styles.detailsText}>
                    Adresse:
                    <span className="text-[#F77F00]">
                      {" " + user.address || "N/A"}
                    </span>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} sx={{ marginBottom: { md: "25px" } }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={9} md={4}>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ ...styles.button }}
                  fullWidth
                >
                  Commencer le bilan de Carbone
                </Button>
              </Grid>
              <Grid item xs={9} md={4}>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ ...styles.button }}
                  fullWidth
                >
                  Consulter les Bilans précédents
                </Button>
              </Grid>
              <Grid item xs={9} md={4}>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ ...styles.button, marginBottom: { xs: "10px" } }}
                  fullWidth
                >
                  Etalblissement Et Suivi D&apos;objectifs
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FirstCard;
