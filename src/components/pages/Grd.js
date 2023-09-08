import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from 'react-router-dom';
import '../Exp.css'

const Grd = () => {
  const navigate = useNavigate();
  function HandleE(e){
    e.preventDefault();
    navigate('/endo')
  }
  function HandleT(e){
    e.preventDefault();
    navigate('/thermite')
  }
  function HandleW(e){
    e.preventDefault();
    navigate('/water')
  }
  function HandleB(e){
    e.preventDefault();
    navigate('/bonds')
  }



  return (
    <div className="contain">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card className="card" sx={{ maxWidth: 280 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="170"
              image="https://online-learning-college.com/wp-content/uploads/2022/06/Exothermic-and-endothermic-reactions.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                Endo/Exothermic Reactions
              </Typography>
            </CardContent>
            <CardActions>
              <button className="bttn" onClick={HandleE}>Play</button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className="card" sx={{maxWidth: 280}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="170"
              image="https://www.chemistrylearner.com/wp-content/uploads/2022/05/Thermite-Reaction.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                Thermite Reactions
              </Typography>
            </CardContent>
            <CardActions>
              <button className="bttn" onClick={HandleT}>play</button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className="card" sx={{maxWidth: 280}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="170"
              image="https://images.nagwa.com/figures/explainers/687137938294/3.svg"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                Water and Alkali Metals
              </Typography>
            </CardContent>
            <CardActions>
              <button className="bttn" onClick={HandleW}>Play</button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className="card" sx={{maxWidth: 280}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="170"
              image="https://study.com/cimages/videopreview/videopreview-small/chemical-bonds-ionic-vs-covalent1_170242.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                Break apart covalent bonds
              </Typography>
            </CardContent>
            <CardActions>
              <button className="bttn" onClick={HandleB}>Play</button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Grd;
