import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    margin: '0 auto',
    marginTop: 50,
  },
  image: {
    // maxHeight: '100%',
    // maxWidth: '100%',
    width: '100%',
    height: 400,
    objectFit: 'fill',
  },
});

const Slider = () => {
  const classes = useStyles();
  const images = [
    'https://picsum.photos/1920/400',
    'https://picsum.photos/1920/400',
    'https://picsum.photos/1920/400',
  ];

  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={false}
      cycleNavigation={true}
      interval={5000}
      timeout={300}
      navButtonsProps={{
        style: {
          backgroundColor: 'rgb(0, 48, 126)',
          color: 'rgb(214, 216, 224)',
          height: 40,
          width: 40,
        }
      }}
    >
      {images.map((image, index) => (
        <Paper key={index}>
          <img
            className={classes.image}
            src={image}
            alt={`slide${index + 1}`}
          />
        </Paper>
      ))}
    </Carousel>
  );
};

export default Slider;
