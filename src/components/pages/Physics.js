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

  return (
    <div>
      <Navy />
      <div className="hero">
        <div>
          <SideBar />
        </div>
        <div className="contain">
          <h1>Physics Lessons</h1>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "25px",
              textDecoration: "underline",
            }}
          >
            {" "}
            Educational
          </h2>

          <Grid container spacing={2.5}>
            <Grid item xs={3}>
              <Card className="card" sx={{ maxWidth: 280 }}>
                <CardMedia
                  component="img"
                  alt="1st law"
                  height="205"
                  image="https://media.geeksforgeeks.org/wp-content/uploads/20210307125042/Firstlawofmotion.PNG"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Newton's First Law
                  </Typography>
                  <h8>
                    An object at rest will remain at rest, unless a net force
                    acts on it.
                  </h8>
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
            <Grid item xs={3}>
              <Card className="card" sx={{ maxWidth: 280 }}>
                <CardMedia
                  component="img"
                  alt="2nd law"
                  height="197"
                  image="https://labster-image-manager.s3.amazonaws.com/v2/NL2/54160233-dc7b-4be0-83aa-c977ee107370/NL2_FinalConcept.en.x512.png"
                />
                <CardContent>
                  <h5>Newton's Second law</h5>
                  <h9>
                    The acceleration of an object is directly proportional to
                    the net force and inversely proportional to its mass.
                  </h9>
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
            <Grid item xs={3}>
              <Card className="card" sx={{ maxWidth: 280 }}>
                <CardMedia
                  component="img"
                  alt="3rd law"
                  height="177"
                  image="https://stickmanphysics.com/wp-content/uploads/2020/10/Newtons-3rd-wall.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Newton`s Third Law
                  </Typography>
                  <p>
                    Newton's third law simply states that for every action there
                    is an equal and opposite reaction.
                  </p>
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
            <Grid item xs={3}>
              <Card className="card" sx={{ maxWidth: 280 }}>
                <CardMedia
                  component="img"
                  alt="momentum"
                  height="140"
                  image="https://assets.entrepreneur.com/content/3x2/2000/20190326162012-Keep-Up-The-Momentum--4000pxW-X-2670pxH.jpeg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Momentum
                  </Typography>
                  <p>
                    Momentum can be defined as "mass in motion." All objects
                    have mass; so if an object is moving, then it has momentum -
                    it has its mass in motion.
                  </p>
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

          <Grid container spacing={2.5}>
            <Grid item xs={3}>
              <Card className="card" sx={{ maxWidth: 280 }}>
                <CardMedia
                  component="img"
                  alt="1st law"
                  height="215"
                  image="https://www.sciencefacts.net/wp-content/uploads/2020/11/Electrostatic-Force.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
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
            <Grid item xs={3}>
              <Card className="card" sx={{ maxWidth: 280 }}>
                <CardMedia
                  component="img"
                  alt="2nd law"
                  height="205"
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
            <Grid item xs={3}>
              <Card className="card" sx={{ maxWidth: 280 }}>
                <CardMedia
                  component="img"
                  alt="3rd law"
                  height="195"
                  image="https://images.collegedunia.com/public/image/8cc6c98db2a013737f5e2fd3135d8b6b.jpeg?tr=w-400,h-400,c-force"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Electrochemical Reactions
                  </Typography>
                </CardContent>
                <a href="https://www.britannica.com/science/electrochemical-reaction">
                  More info
                </a>
                <CardActions>
                  <button className="bttn" onClick={HandleER}>
                    Play
                  </button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card className="card" sx={{ maxWidth: 280 }}>
                <CardMedia
                  component="img"
                  alt="momentum"
                  height="140"
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
        </div>
      </div>
    </div>
  );
}

export default Physics;
