import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import servicesBG from "../images/servicesBG.jpg";
import Navbar from "../components/Navbar/Navbar";

const useStyles = makeStyles({
  section: {
    color: "rgb(8, 27, 56)",
    display: "flex",
    flexDirection: "column",
    paddingRight: 15,
    paddingLeft: 15,
    position: "relative",
    "&::before": {
      content: '""',
      backgroundImage: `url(${servicesBG})`,
      opacity: 0.5,
      position: "absolute",
      backgroundSize: "cover",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1,
    },
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
    fontSize: "3rem",
    display: "flex",
    justifyContent: "center",
    color: "rgb(3, 41, 102)",
  },
  subtitle: {
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    fontSize: "2rem",
    marginLeft: -20,
  },
  list: {
    paddingLeft: 30,
    fontSize: "1rem",
    paddingTop: 10,
    fontWeight: "500",
    paddingBottom: 10,
  },
  typo: {
    fontSize: "1.2rem",
  },
  gridcs: {
    display: "Grid",
  },
});

const Services = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <section className={classes.section}>
        <Typography variant="h4" className={classes.title}>
          Pre-Construction Services
        </Typography>
        <Typography className={classes.typo}>
          <b>SpacePlan</b> Construction and Management LLC provides
          pre-construction services as a complimentary service to clients that
          intend to utilize our services for their construction projects. The
          intent is to help them in developing their budgets and getting a
          better understanding for their projects. A small list of the many
          pre-construction services we provide are:
        </Typography>
        <Typography component="ul" className={classes.list}>
          <li>Preliminary Design</li>
          <li>Cost Estimates</li>
          <li>Project Scheduling</li>
        </Typography>

        <Typography variant="h4" className={classes.title}>
          Design/Build Services
        </Typography>
        <Typography className={classes.typo}>
          <b>SpacePlan</b> Construction and Management LLC in cooperation with
          reputable design and engineering firms, provides you with all the
          design requirement for your project. Once we get a feel for the type
          of space you are looking for, we will help you design the project
          within budget and save you time and money. A small list of the many
          design / build services we provide are:
        </Typography>
        <Typography component="ul" className={classes.list}>
          <li>Space Planning</li>
          <li>Budgeting</li>
          <li>Value Engineering</li>
          <li>Construction Documents</li>
          <li>Building Permits</li>
        </Typography>

        <Typography variant="h4" className={classes.title}>
          Construction Services
        </Typography>
        <Typography className={classes.typo}>
          <b>SpacePlan</b> Construction and Management LLC provides turn-key
          projects. We will manage your project and coordinate all trades and
          help you with your finishing selections. Our construction services
          includes but are not limited to:
        </Typography>
        <div className={classes.gridcs}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography component="ul" className={classes.list}>
                <Typography variant="subtitle1" className={classes.subtitle}>
                  Concrete Work:
                </Typography>
                <li>Footings</li>
                <li>Slabs on grade</li>
                <li>Retaining walls</li>
                <li>Structural slabs</li>
                <li>Tilt walls</li>
                <li>Concrete paving</li>
                <li>Curb and gutters</li>
                <li>Concrete stairs</li>
                <li>Special finishes</li>

                <Typography variant="subtitle1" className={classes.subtitle}>
                  Painting and Wallcovering:
                </Typography>
                <li>Interior painting</li>
                <li>Exterior painting</li>
                <li>Special coatings</li>
                <li>Wall covering installation</li>
              </Typography>
            </Grid>
          </Grid>

          <Typography component="ul" className={classes.list}>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Flooring:
            </Typography>
            <li>Tile and stone</li>
            <li>Carpet</li>
            <li>Resilient flooring</li>
            <li>Wood flooring</li>
            <li>Special finishes</li>

            <Typography variant="subtitle1" className={classes.subtitle}>
              Electrical:
            </Typography>
            <li>Power distribution</li>
            <li>Lighting</li>
            <li>Low voltage systems</li>
            <li>Fire alarm systems</li>
            <li>Security systems</li>

            <Typography variant="subtitle1" className={classes.subtitle}>
              Plumbing:
            </Typography>
            <li>Domestic water</li>
            <li>Sanitary waste and vent</li>
            <li>Storm drainage</li>
            <li>Natural gas</li>
            <li>Medical gas</li>

            <Typography variant="subtitle1" className={classes.subtitle}>
              Mechanical:
            </Typography>
            <li>Heating, ventilation, and air conditioning (HVAC)</li>
            <li>Building automation systems</li>
            <li>Medical gas</li>
          </Typography>
        </div>
      </section>
    </>
  );
};

export default Services;
