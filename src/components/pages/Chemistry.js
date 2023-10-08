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
  function HandleEn(e){
    e.preventDefault();
    navigate('/endo')
  }
  function HandleTi(e){
    e.preventDefault();
    navigate('/titration')
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
  function HandleOx(e){
    e.preventDefault();
    navigate('/oxidation')
  }
  function HandleG(e){
    e.preventDefault();
    navigate('/heart')
  }
  function HandleP(e){
    e.preventDefault();
    navigate('/paper')
  }
  function HandleIn(e){
    e.preventDefault();
    navigate('/chem')
  }
  function HandleAc(e){
    e.preventDefault();
    navigate('/acids')
  }
  function HandleAt(e){
    e.preventDefault();
    navigate('/atomic')
  }


  return (
    <div>
      <Navy />
      <div className="hero">
      
      <div className="hello">
        <SideBar />
      <section>
      <div className='contain'>
      <h1>Chemistry Lessons/Experiments</h1>
      
      <Grid className='cards'>
        <Grid item xs={3} md={2.4}>
          <Card className="card" sx={{ maxWidth: 280, height: 420 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="215"
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
        <Grid item xs={3} md={2.4}>
          <Card className="card" sx={{ maxWidth: 280, height: 420  }}>
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
            <a href='https://www.britannica.com/science/chemical-equilibrium'>More info</a>
            <CardActions>
              <button className="bttn" onClick={HandleE}>Play</button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4}>
          <Card className="card" sx={{ maxWidth: 280, height: 420  }}>
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
        <Grid item xs={3} md={2.4}>
          <Card className="card" sx={{ maxWidth: 280, height: 420  }}>
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
              <button className="bttn" onClick={HandleAc}>Play</button>
            </CardActions>
          </Card>
        </Grid>
        </Grid>
      
            
      <Grid className='cards'>
        <Grid item xs={3} md={2.4}>
          <Card className="card" sx={{ maxWidth: 280, height: 420  }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="170"
              image="https://www.yaaka.cc/wp-content/uploads/2019/03/INTRODUCTION-TO-ORGANIC-CHEMISTRY.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
              Introduction to Organic Chemistry
              </Typography>
            </CardContent>
            <a href='https://courses.lumenlearning.com/suny-potsdam-organicchemistry/chapter/1-1-introduction-to-organic-chemistry/'>More info</a>
            <CardActions>
              <button className="bttn" onClick={HandleIn}>Play</button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4}>
          <Card className="card" sx={{ maxWidth: 280, height: 420  }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="170"
              image="https://knowledge.carolina.com/wp-content/uploads/2022/04/shutterstock_1421398136-e1680005890118-1170x780.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                Titration
              </Typography>
            </CardContent>
            <a href='https://www.britannica.com/science/titration'>More info</a>
            <CardActions>
              <button className="bttn" onClick={HandleTi}>Play</button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4}>
          <Card className="card" sx={{ maxWidth: 280, height: 420  }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="170"
              image="https://www.the-mad-scientist.net/uploads/1/2/2/1/12216247/7567026_orig.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                Oxidation and Reduction
              </Typography>
            </CardContent>
            <a href='https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_(Analytical_Chemistry)/Electrochemistry/Redox_Chemistry/Definitions_of_Oxidation_and_Reduction'>More info</a>
            <CardActions>
              <button className="bttn" onClick={HandleOx}>Play</button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3} md={2.4}>
          <Card className="card" sx={{ maxWidth: 280, height: 420  }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="170"
              image="https://watv.org/wp-content/uploads/2022/01/atomic-combination-3-1.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                Atomic Combinations
              </Typography>
            </CardContent>
            <a href='https://www.siyavula.com/read/za/physical-sciences/grade-11/atomic-combinations/03-atomic-combinations-05'>More info</a>
            <CardActions>
              <button className="bttn" onClick={HandleAt}>Play</button>
            </CardActions>
          </Card>
        </Grid>
        </Grid>
      

        <Grid className="cards">
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
            <a href='https://byjus.com/chemistry/endothermic-exothermic-reactions-difference/'>More info</a>
            <CardActions>
              <button className="bttn" onClick={HandleEn}>Play</button>
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
            <a href='https://byjus.com/question-answer/explain-thermite-reaction-give-example-mention-its-uses/'>More info</a>
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
            <a href='https://ehs.stanford.edu/reference/information-alkali-metals'>More info</a>
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
            <a href='http://www.teachingwithoutchairs.com/2019/06/chemistry-class-covalent-bonds.html'>More info</a>
            <CardActions>
              <button className="bttn" onClick={HandleB}>Play</button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      
      
      <Grid className='cards'>
        <Grid item xs={3} md={2.4}>
          <Card className="card" sx={{ maxWidth: 280 , height: 420 }}>
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
        <Grid item xs={3} md={2.4}>
          <Card className="card" sx={{maxWidth: 280, height: 420 }}>
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
        <Grid item xs={3} md={2.4}>
        <Card className="card" sx={{maxWidth: 280, height: 420 }}>
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
        <Grid item xs={3} md={2.4}>
        <Card className="card" sx={{maxWidth: 280, height: 420 }}>
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
      </section>
    </div>
    </div>
    </div>
  )
}

export default Chemistry