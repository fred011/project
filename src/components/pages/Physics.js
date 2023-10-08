import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import "../Exp.css";
import Navy from "../Navy";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar.jsx";

function Physics() {
  const navigate = useNavigate();
  function HandleM(e) {
    e.preventDefault();
    navigate("/moment");
  }
  function HandleER(e) {
    e.preventDefault();
    navigate("/electrochem");
  }
  function HandleO(e) {
    e.preventDefault();
    navigate("/optic");
  }
  function HandleE(e) {
    e.preventDefault();
    navigate("/electro");
  }
  function Handlef(e) {
    e.preventDefault();
    navigate("/first");
  }
  function Handles(e) {
    e.preventDefault();
    navigate("/second");
  }
  function Handlet(e) {
    e.preventDefault();
    navigate("/third");
  }
  function HandleW(e) {
    e.preventDefault();
    navigate("/wavefront");
  }
  function HandleGeo(e) {
    e.preventDefault();
    navigate("/geometric");
  }
  function HandleV(e) {
    e.preventDefault();
    navigate("/vertical");
  }
  function HandleWo(e) {
    e.preventDefault();
    navigate("/work");
  }
  function HandleDo(e) {
    e.preventDefault();
    navigate("/doppler");
  }
  function HandleEle(e) {
    e.preventDefault();
    navigate("/circuit");
  }


  return (
    <div>
      <Navy />
      <div className="hero">
        <div className="hello">
          <SideBar />
        
        <section>
        <div className="contain">
          <h1>Physical Sciences Lessons/Experiments</h1>
        
          <Grid className="cards" >
            <Grid  item xs={3} md={2.4}>
              <Card className="card"  sx={{ maxWidth: 280, height: 420 }}>
                <CardMedia
                  component="img"
                  alt="1st law"
                  height="215"
                  image="https://media.geeksforgeeks.org/wp-content/uploads/20210307125042/Firstlawofmotion.PNG"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Newton's First Law
                  </Typography>
                  
                </CardContent>
                <a href="https://www.physicsclassroom.com/class/newtlaws/Lesson-1/Newton-s-First-Law">
                  More info
                </a>
                <CardActions>
                  <button className="bttn" onClick={Handlef}>
                    Play
                  </button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={3} md={2.4}>
              <Card className="card" sx={{ maxWidth: 280, height: 420 }}>
                <CardMedia
                  component="img"
                  alt="2nd law"
                  height="215"
                  image="https://labster-image-manager.s3.amazonaws.com/v2/NL2/54160233-dc7b-4be0-83aa-c977ee107370/NL2_FinalConcept.en.x512.png"
                />
                <CardContent>
                  <h5>Newton's Second law</h5>
                  
                </CardContent>
                <a href="https://www.physicsclassroom.com/class/newtlaws/Lesson-3/Newton-s-Second-Law">
                  More info
                </a>
                <CardActions>
                  <button className="bttn" onClick={Handles}>
                    Play
                  </button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={3} md={2.4}>
              <Card className="card" sx={{ maxWidth: 280, height: 420 }}>
                <CardMedia
                  component="img"
                  alt="3rd law"
                  height="215"
                  image="https://stickmanphysics.com/wp-content/uploads/2020/10/Newtons-3rd-wall.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Newton`s Third Law
                  </Typography>
                  
                </CardContent>
                <a href="https://www.physicsclassroom.com/class/newtlaws/Lesson-4/Newton-s-Third-Law">
                  More info
                </a>
                <CardActions>
                  <button className="bttn" onClick={Handlet}>
                    Play
                  </button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={3} md={2.4}>
              <Card className="card" sx={{ maxWidth: 280, height: 420 }}>
                <CardMedia
                  component="img"
                  alt="momentum"
                  height="215"
                  image="https://assets.entrepreneur.com/content/3x2/2000/20190326162012-Keep-Up-The-Momentum--4000pxW-X-2670pxH.jpeg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Momentum
                  </Typography>
                  
                </CardContent>
                <a href="https://www.physicsclassroom.com/class/momentum">
                  More info
                </a>
                <CardActions>
                  <button className="bttn" onClick={HandleM}>
                    Play
                  </button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>

          <Grid className="cards">
            <Grid item xs={3} md={2.4}>
              <Card className="card" sx={{ maxWidth: 280, height: 420 }}>
                <CardMedia
                  component="img"
                  alt="1st law"
                  height="215"
                  image="https://www.sciencefacts.net/wp-content/uploads/2020/11/Electrostatic-Force.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Electrostatic
                  </Typography>
                </CardContent>
                <a href="https://byjus.com/physics/electrostatics/">
                  More info
                </a>
                <CardActions>
                  <button className="bttn" onClick={HandleE}>
                    Play
                  </button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={3} md={2.4}>
              <Card className="card" sx={{ maxWidth: 280, height: 420 }}>
                <CardMedia
                  component="img"
                  alt="2nd law"
                  height="215"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2N-npFNkn-aupWdt-RxPSV2jkCg9Ew-UUw&usqp=CAU"
                />
                <CardContent>
                  <h5>Optical Phenomena</h5>
                </CardContent>
                <a href="http://learn.mindset.africa/resources/physical-sciences/grade-12/optical-phenomena-and-properties-materials">
                  More info
                </a>
                <CardActions>
                  <button className="bttn" onClick={HandleO}>
                    Play
                  </button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={3} md={2.4}>
              <Card className="card" sx={{ maxWidth: 280, height: 420 }}>
                <CardMedia
                  component="img"
                  alt="3rd law"
                  height="215"
                  image="https://i.stack.imgur.com/DZl6N.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Wavefronts
                  </Typography>
                </CardContent>
                <a href="https://byjus.com/physics/wavefront/">
                  More info
                </a>
                <CardActions>
                  <button className="bttn" onClick={HandleW}>
                    Play
                  </button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={3} md={2.4}>
              <Card className="card" sx={{ maxWidth: 280, height: 420}}>
                <CardMedia
                  component="img"
                  alt="momentum"
                  height="215"
                  image="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2021/02/09052118/Geometric-Optics.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Geometric Optics
                  </Typography>
                </CardContent>
                <a href="https://www.sciencedirect.com/topics/physics-and-astronomy/geometrical-optics">
                  More info
                </a>
                <CardActions>
                  <button className="bttn" onClick={HandleGeo}>
                    Play
                  </button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Grid className="cards">
            <Grid item xs={3} md={2.4}>
              <Card className="card" sx={{ maxWidth: 280, height: 420 }}>
                <CardMedia
                  component="img"
                  alt="1st law"
                  height="215"
                  image="https://cms-media.bartleby.com/wp-content/uploads/sites/2/2021/08/25182602/Scene-02-2.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Vertical Projectile
                  </Typography>
                </CardContent>
                <a href="https://mycourses.co.za/vertical-projectile-motion-notes-for-grade-12/">
                  More info
                </a>
                <CardActions>
                  <button className="bttn" onClick={HandleV}>
                    Play
                  </button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={3} md={2.4}>
              <Card className="card" sx={{ maxWidth: 280, height: 420 }}>
                <CardMedia
                  component="img"
                  alt="2nd law"
                  height="215"
                  image="https://teleskola.mt/wp-content/uploads/elementor/thumbs/work-energy-and-power-3f6abe4e363999a2b0376072a341dfa4-opilh2ppg2n39nsbo685tlmfyzx00v8n7cms7n14hs.png"
                />
                <CardContent>
                  <h5>work energy and power</h5>
                </CardContent>
                <a href="https://byjus.com/physics/work-energy-power/">
                  More info
                </a>
                <CardActions>
                  <button className="bttn" onClick={HandleWo}>
                    Play
                  </button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={3} md={2.4}>
              <Card className="card" sx={{ maxWidth: 280, height: 420 }}>
                <CardMedia
                  component="img"
                  alt="3rd law"
                  height="215"
                  image="https://audiocardio.com/wp-content/uploads/2020/11/The-Doppler-Effect.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Doppler Effect
                  </Typography>
                </CardContent>
                <a href="https://byjus.com/physics/doppler-effect/">
                  More info
                </a>
                <CardActions>
                  <button className="bttn" onClick={HandleDo}>
                    Play
                  </button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={3} md={2.4}>
              <Card className="card" sx={{ maxWidth: 280, height: 420}}>
                <CardMedia
                  component="img"
                  alt="momentum"
                  height="215"
                  image="https://www.wikihow.com/images/thumb/6/67/Make-a-Simple-Electrical-Circuit-Step-6-Version-2.jpg/v4-460px-Make-a-Simple-Electrical-Circuit-Step-6-Version-2.jpg.webp"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Electric Circuits
                  </Typography>
                </CardContent>
                <a href="https://www.britannica.com/technology/electric-circuit">
                  More info
                </a>
                <CardActions>
                  <button className="bttn" onClick={HandleEle}>
                    Play
                  </button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          </div>
          </section>
          </div>
        </div>
      </div>
   
  );
}

export default Physics;
