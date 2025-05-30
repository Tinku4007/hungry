import { IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import React from 'react';
import cake_img from "../../assets/images/cake.jpg"
import fishSoup_img from "../../assets/images/fish_souo.jpg"
import cola_drink_img from "../../assets/images/cola_drink.jpg"
import cake_drink_img from "../../assets/images/cake_drink.jpg"
import pizza_img from "../../assets/images/pizza.jpg"
import burger_img from "../../assets/images/burger.jpg"
import casserole_img from "../../assets/images/casserole.jpg"

const Gallery = () => {
    const itemData = [
        {
            img: cake_img,
            title: 'Cakes',
            author: '@bkristastucchio',
            caption: 'Desserts',
        },
        {
            img: fishSoup_img,
            title: 'Fish soup',
            author: '@rollelflex_graphy726',
            caption: 'Dishes',
        },
        {
            img: cola_drink_img,
            title: 'Cola',
            author: '@helloimnik',
            caption: 'Drinks',
        },
        {
            img: cake_drink_img,
            title: 'Cake',
            author: '@nolanissac',
            caption: 'Desserts',
        },
        {
            img: pizza_img,
            title: 'Pizza',
            author: '@nolanissac',
            caption: 'Dishes',
        },
        {
            img: burger_img,
            title: 'Burger',
            author: '@nolanissac',
            caption: 'Dishes',
        },
        {
            img: casserole_img,
            title: 'Casserole',
            author: '@nolanissac',
            caption: 'Dishes',
        },
        {
            img: burger_img,
            title: 'Burger',
            author: '@nolanissac',
            caption: 'Dishes',
        },
        {
            img: cake_img,
            title: 'Cakes',
            author: '@bkristastucchio',
            caption: 'Desserts',
        },
        // Add more items if needed
    ];

    return (
        <div className="gallery-container">
            <ImageList cols={3} gap={16}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img} className="gallery-item">
                        <img
                            src={`${item.img}?w=600&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                            className="gallery-image"
                        />
                        <ImageListItemBar
                            className="image-overlay"
                            title={item.title}
                            subtitle={item.caption}
                            actionIcon={
                                <IconButton sx={{ color: 'white' }} aria-label={`info about ${item.title}`}>
                                    {/* Optional icon */}
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
};

export default Gallery;
