import { IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import React from 'react';

const Gallery = () => {
    const itemData = [
        {
            img: 'http://www.hungrybakers.com.au/wp-content/uploads/2021/07/dessert3-950x950.jpg',
            title: 'Cakes',
            author: '@bkristastucchio',
            caption: 'Desserts',
        },
        {
            img: 'http://www.hungrybakers.com.au/wp-content/uploads/2021/05/blog-2.jpg',
            title: 'Fish soup',
            author: '@rollelflex_graphy726',
            caption: 'Dishes',
        },
        {
            img: "http://www.hungrybakers.com.au/wp-content/uploads/2021/04/gallery-i-5-950x693.jpg",
            title: 'Cola',
            author: '@helloimnik',
            caption: 'Drinks',
        },
        {
            img: 'http://www.hungrybakers.com.au/wp-content/uploads/2021/05/blog-5.jpg',
            title: 'Cake',
            author: '@nolanissac',
            caption: 'Desserts',
        },


        {
            img: 'http://www.hungrybakers.com.au/wp-content/uploads/2021/04/gallery-i-5-950x693.jpg',
            title: 'Bear',
            author: '@nolanissac',
            caption: 'Drinks',
        },
        {
            img: 'http://www.hungrybakers.com.au/wp-content/uploads/2021/04/gallery-i-3-950x634.jpg',
            title: 'Pizza',
            author: '@nolanissac',
            caption: 'Dishes',
        },
        {
            img: 'http://www.hungrybakers.com.au/wp-content/uploads/2021/04/gallery-i-2-950x634.jpg',
            title: 'Burger',
            author: '@nolanissac',
            caption: 'Dishes',
        },
        {
            img: 'http://www.hungrybakers.com.au/wp-content/uploads/2021/04/gallery-i-6-950x588.jpg',
            title: 'Casserole',
            author: '@nolanissac',
            caption: 'Dishes',
        },
        {
            img: 'http://www.hungrybakers.com.au/wp-content/uploads/2021/07/dessert3-950x950.jpg',
            title: 'Cakes',
            author: '@nolanissac',
            caption: 'Dishes',
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
