import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ImageSearch( {searchTerm} ) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=021f648cb50a94da25870e1b2d06df15&text=${searchTerm}&per_page=24&format=json&nojsoncallback=1`
        );
        const data = response.data;
        const fetchedImages = data.photos.photo.map((photo) => {
          const imageUrl = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
          return imageUrl;
        });
        setImages(fetchedImages);
      } catch (error) {
        console.error(error);
      }
    };

    if (searchTerm) {
      fetchImages();
    }
  }, [searchTerm]);

  return (
    <div className='grid-container'>
        <ul>
            {images.map((imageUrl) => (  
                <li>
                    <img key={imageUrl} src={imageUrl} alt="Flickr Image" />
                </li> 
            ))}
        </ul>
      
    </div>
  );
}

export default ImageSearch;