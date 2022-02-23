import ImageGallery from 'react-image-gallery';


export default function Hero() {

  const images = [
    {
      original: 'https://dummyimage.com/1080x720',
      thumbnail: 'https://dummyimage.com/1080x720',
    },

    {
      original: 'https://dummyimage.com/1080x720',
      thumbnail: 'https://dummyimage.com/1080x720',
    },
    {
      original: 'https://dummyimage.com/1080x720',
      thumbnail: 'https://dummyimage.com/1080x720',
    },

  ];


  return (
    <div className="container mx-auto px-2 py-4">
      <ImageGallery
        items={images}
        showPlayButton={false}
        showNav={false}
        autoPlay={true}
        showFullscreenButton={false}
      />
    </div>
  )
}
