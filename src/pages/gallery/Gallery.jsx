import React, { useState } from 'react';
import {
    IconButton,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    useMediaQuery,
    useTheme,
    Dialog,
    DialogContent,
    DialogTitle,
    Typography,
} from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

import cake_img from "../../assets/images/cake.jpg";
import fishSoup_img from "../../assets/images/fish_souo.jpg";
import cola_drink_img from "../../assets/images/cola_drink.jpg";
import cake_drink_img from "../../assets/images/cake_drink.jpg";
import pizza_img from "../../assets/images/pizza.jpg";
import burger_img from "../../assets/images/burger.jpg";
import casserole_img from "../../assets/images/casserole.jpg";

const Gallery = () => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));

    const cols = isXs ? 1 : isSm ? 2 : isMd ? 3 : 4;

    const itemData = [
        { img: cake_img, title: 'Cakes', caption: 'Desserts' },
        { img: fishSoup_img, title: 'Fish soup', caption: 'Dishes' },
        { img: cola_drink_img, title: 'Cola', caption: 'Drinks' },
        { img: cake_drink_img, title: 'Cake', caption: 'Desserts' },
        { img: pizza_img, title: 'Pizza', caption: 'Dishes' },
        { img: burger_img, title: 'Burger', caption: 'Dishes' },
        { img: casserole_img, title: 'Casserole', caption: 'Dishes' },
        { img: burger_img, title: 'Burger', caption: 'Dishes' },
        { img: cake_img, title: 'Cakes', caption: 'Desserts' },
    ];

    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOpen = (item) => {
        setSelectedImage(item);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className="gallery-container px-4 py-6">
            <ImageList cols={cols} gap={20}>
                {itemData.map((item, index) => (
                    <ImageListItem
                        className='gallery-item'
                        key={index}
                        onClick={() => handleOpen(item)}
                        sx={{
                            height: '250px',
                            overflow: 'hidden',
                            borderRadius: 2,
                            boxShadow: 3,
                            transition: 'transform 0.3s',
                            cursor: 'pointer',
                            '&:hover': {
                                transform: 'scale(1.02)',
                            },
                        }}
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                            style={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover',
                            }}
                        />
                        <ImageListItemBar
                            className='image-overlay'
                            title={item.title}
                            subtitle={item.caption}
                            sx={{
                                background: 'rgba(0, 0, 0, 0.6)',
                                borderBottomLeftRadius: 8,
                                borderBottomRightRadius: 8,
                            }}
                            actionIcon={
                                <IconButton sx={{ color: 'white' }}>
                                    <ZoomInIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            {/* Modal Dialog for Image Preview */}
            <Dialog open={open} onClose={handleClose} maxWidth="md">
                <DialogTitle>
                    {selectedImage?.title}
                </DialogTitle>
                <DialogContent>
                    <img
                        src={selectedImage?.img}
                        alt={selectedImage?.title}
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: 10,
                            maxHeight: '80vh',
                            objectFit: 'contain',
                        }}
                    />
                    <Typography variant="subtitle1" sx={{ mt: 2 }}>
                        {selectedImage?.caption}
                    </Typography>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Gallery;
