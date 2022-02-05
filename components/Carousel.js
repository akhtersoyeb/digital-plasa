import ImageGallery from 'react-image-gallery';



export default function Carousel() {
    
    const images = [
        {
            original: 'https://dummyimage.com/500x500',
            thumbnail: 'https://dummyimage.com/500x500',
        },
        
        {
            original: 'https://dummyimage.com/500x500',
            thumbnail: 'https://dummyimage.com/500x500',
        },
        {
            original: 'https://dummyimage.com/500x500',
            thumbnail: 'https://dummyimage.com/500x500',
        },
        
    ];


    return <ImageGallery 
        items={images} 
        showPlayButton={false}
        showNav={false}
        autoPlay={true}
        showFullscreenButton={false}
    />;
}
