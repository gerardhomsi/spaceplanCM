import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import footerImage from '../../images/footerImage.png'

const useStyles = makeStyles({
  footer: {
    backgroundColor: 'rgb(214, 216, 224)',
    color: 'rgb(0, 48, 126)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px',
    height: 100,
  },
  footerText: {
    textAlign: 'center',
  },
  footerLogo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: '1 1 0',
  },
  socialIcons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: '1 1 0',
  },
  icon: {
    margin: '0 10px',
    cursor: 'pointer',
  },
  image: {
    width: 200,
    height: 100,
  }
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.footerLogo}>
        <img src={footerImage} alt="Footer Logo" className={classes.image}/>
      </div>
      <Typography variant="body2" className={classes.footerText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <div className={classes.socialIcons}>
        <FontAwesomeIcon
          icon={faFacebookSquare}
          size="2x"
          className={classes.icon}
          onClick={() => window.open('https://www.facebook.com')}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          size="2x"
          className={classes.icon}
          onClick={() => window.open('https://www.instagram.com')}
        />
      </div>
    </footer>
  );
};

export default Footer;
