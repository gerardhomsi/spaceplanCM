import { useState } from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Modal,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Close as CloseIcon } from "@material-ui/icons";
import Navbar from "../components/Navbar/Navbar";

const useStyles = makeStyles((theme) => ({
  gridList: {
    width: "100%",
    margin: 0,
    padding: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2),
    },
  },
  gridListTile: {
    cursor: "pointer",
  },
  iconButton: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    maxWidth: "100%",
    maxHeight: "100%",
    margin: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    outline: "none",
    overflow: "hidden",
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(4),
    },
  },
  image: {
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto",
  },
}));

const Gallery = ({ photos }) => {
  photos = [
    {
      id: "1",
      url: "https://source.unsplash.com/random/900x500/?img=1",
      title: "one",
    },
    {
      id: "2",
      url: "https://source.unsplash.com/random/900x500/?img=2",
      title: "two",
    },
    {
      id: "3",
      url: "https://source.unsplash.com/random/900x500/?img=3",
      title: "three",
    },
    {
      id: "4",
      url: "https://source.unsplash.com/random/900x500/?img=4",
      title: "four",
    },
    {
      id: "5",
      url: "https://source.unsplash.com/random/900x500/?img=5",
      title: "five",
    },
  ];

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleOpenModal = (photo) => {
    setSelectedPhoto(photo);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
    setOpen(false);
  };

  const getGridListCols = () => {
    if (window.innerWidth >= 960) {
      return 3;
    }
    if (window.innerWidth >= 600) {
      return 2;
    }
    return 1;
  };

  const handleResize = () => {
    setCols(getGridListCols());
  };

  const [cols, setCols] = useState(getGridListCols);

  window.addEventListener("resize", handleResize);

  return (
    <>
      <Navbar />
      <ImageList className={classes.gridList} cols={cols} rowHeight={200}>
        {photos.map((photo) => (
          <ImageListItem
            key={photo.id}
            className={classes.gridListTile}
            onClick={() => handleOpenModal(photo)}
          >
            <img src={photo.url} alt={photo.title} />
            <ImageListItemBar title={photo.title} />
          </ImageListItem>
        ))}
      </ImageList>
      <Modal open={open} onClose={handleCloseModal} className={classes.modal}>
        <div className={classes.modalContent}>
          <IconButton className={classes.iconButton} onClick={handleCloseModal}>
            <CloseIcon />
          </IconButton>
          <img
            src={selectedPhoto?.url}
            alt={selectedPhoto?.title}
            className={classes.image}
          />
        </div>
      </Modal>
    </>
  );
};

export default Gallery;
