import React from 'react'
import Navy from '../Navy'
import Grd from './Grd'
import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import '../Exp.css'
import { useNavigate } from 'react-router-dom';
import SideBar from '../SideBar.jsx';

function Chemistry() {
  const navigate = useNavigate();
  function HandleR(e){
    e.preventDefault();
    navigate('/rainbow')
  }
  function HandleA(e){
    e.preventDefault();
    navigate('/rate')
  }
  function HandleE(e){
    e.preventDefault();
    navigate('/equi')
  }
  function HandleH(e){
    e.preventDefault();
    navigate('/hot')
  }
  function HandleI(e){
    e.preventDefault();
    navigate('/ideal')
  }
  function HandleG(e){
    e.preventDefault();
    navigate('/heart')
  }
  function HandleP(e){
    e.preventDefault();
    navigate('/paper')
  }
  return (
    <div>
      <Navy />
      <div className="hero">
      
      <div >
        <SideBar />
      </div>
      <div>
      <h1>Chemistry Lessons</h1>
      <div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card className="card" sx={{ maxWidth: 280 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="170"
              image="http://www.adichemistry.com/physical/kinetics/factors/maxwellcurve.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
              Rate and exchange of reaction
              </Typography>
            </CardContent>
            <a href='http://www.adichemistry.com/physical/kinetics/factors/factors-affecting-rate-reaction.html'>More info</a>
            <CardActions>
              <button className="bttn" onClick={HandleA}>Play</button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className="card" sx={{ maxWidth: 280 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="190"
              image="https://qph.cf2.quoracdn.net/main-qimg-8e401cc998515f74eff96ffbd72391a1-pjlq"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                Chemical equilibrium
              </Typography>
            </CardContent>
            <a href='https://melscience.com/US-en/articles/colored-flame-experiment/'>More info</a>
            <CardActions>
              <button className="bttn" onClick={HandleE}>Play</button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className="card" sx={{ maxWidth: 280 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="170"
              image="https://www.chemistrylearner.com/wp-content/uploads/2022/04/Ideal-gas-law.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                Ideal Gases
              </Typography>
            </CardContent>
            <a href='https://www.britannica.com/science/ideal-gas'>More info</a>
            <CardActions>
              <button className="bttn" onClick={HandleI}>Play</button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className="card" sx={{ maxWidth: 280 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="170"
              image="https://cdn1.byjus.com/wp-content/uploads/2018/07/acid-and-base-700x466.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
              Acids and Bases
              </Typography>
            </CardContent>
            <a href='https://www.sciencelearn.org.nz/resources/3019-acids-and-bases-introduction'>More info</a>
            <CardActions>
              <button className="bttn" onClick={HandleR}>Play</button>
            </CardActions>
          </Card>
        </Grid>
        </Grid>
      </div>
            <div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card className="card" sx={{ maxWidth: 280 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="170"
              image="https://sciencenotes.org/wp-content/uploads/2020/04/flamecolors.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                
              </Typography>
            </CardContent>
            <a href='https://melscience.com/US-en/articles/colored-flame-experiment/'>More info</a>
            <CardActions>
              <button className="bttn" onClick={HandleR}>Play</button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className="card" sx={{ maxWidth: 280 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="170"
              image="https://sciencenotes.org/wp-content/uploads/2020/04/flamecolors.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                Rainbow Flames
              </Typography>
            </CardContent>
            <a href='https://melscience.com/US-en/articles/colored-flame-experiment/'>More info</a>
            <CardActions>
              <button className="bttn" onClick={HandleR}>Play</button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className="card" sx={{ maxWidth: 280 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="170"
              image="https://sciencenotes.org/wp-content/uploads/2020/04/flamecolors.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                Rainbow Flames
              </Typography>
            </CardContent>
            <a href='https://melscience.com/US-en/articles/colored-flame-experiment/'>More info</a>
            <CardActions>
              <button className="bttn" onClick={HandleR}>Play</button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className="card" sx={{ maxWidth: 280 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="170"
              image="https://sciencenotes.org/wp-content/uploads/2020/04/flamecolors.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                Rainbow Flames
              </Typography>
            </CardContent>
            <a href='https://melscience.com/US-en/articles/colored-flame-experiment/'>More info</a>
            <CardActions>
              <button className="bttn" onClick={HandleR}>Play</button>
            </CardActions>
          </Card>
        </Grid>
        </Grid>
      </div>
      <h1>Chemistry Experiments</h1>
      <h2 style={{textAlign: 'center', marginBottom:'25px',textDecoration:'underline' }}> Educational</h2>
      <Grd />
      <h2 style={{textAlign: 'center', marginBottom:'25px',marginTop:'15px' ,textDecoration:'underline' }}> Fun Experiments</h2>
      <div className='contain'>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card className="card" sx={{ maxWidth: 280 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="170"
              image="https://sciencenotes.org/wp-content/uploads/2020/04/flamecolors.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                Rainbow Flames
              </Typography>
            </CardContent>
            <a href='https://melscience.com/US-en/articles/colored-flame-experiment/'>More info</a>
            <CardActions>
              <button className="bttn" onClick={HandleR}>Play</button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className="card" sx={{maxWidth: 280}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="170"
              image="https://thumbs.dreamstime.com/b/ice-cube-eat-hot-chilie-mascot-cartoon-vector-ice-cube-eat-hot-chilie-mascot-cartoon-vector-244090179.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                Hot Ice
              </Typography>
            </CardContent>
            <a href='https://www.playdoughtoplato.com/kids-science-experiment-hot-ice/'>More info</a>
            <CardActions>
              <button className="bttn" onClick={HandleH}>Play</button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className="card" sx={{maxWidth: 280}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="170"
              image="https://www.thoughtco.com/thmb/yGAKA9Fmo1udlErEYxeBQgl4YjQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-960341092-3f20cb64602a4b1da187ba0379d501a8.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                Heart made of gallium
              </Typography>
            </CardContent>
            <a href='https://sciencenotes.org/gallium-beating-heart-experiment/'>More info</a>
            <CardActions>
              <button className="bttn" onClick={HandleG}>Play</button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className="card" sx={{maxWidth: 280}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="170"
              image="https://res.cloudinary.com/mel-science/image/upload/fl_progressive:steep,q_auto:good,w_940/v1/articles/775/image_tytkp9.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                Boil Water in a paper cup
              </Typography>
            </CardContent>
            <a href='https://melscience.com/US-en/articles/boiling-water-paper-cup/'>More info</a>
            <CardActions>
              <button className="bttn" onClick={HandleP}>Play</button>
            </CardActions>
          </Card>
        </Grid>
      </Grid> 
      </div>
      </div>
    </div>
    </div>
  )
}

export default Chemistry