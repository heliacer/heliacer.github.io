const GalleryImage = ({pathName} : { pathName : string}) => {
  return (
    <img width={400} src={`/images/${pathName}`} draggable='false'/>
  )
}



const Gallery = () => {

  return (
    <>
      <GalleryImage pathName='block.png'/>
      <GalleryImage pathName='block.png'/>
      <GalleryImage pathName='block.png'/>
      <GalleryImage pathName='block.png'/>  
    </>
  );
};

export default Gallery;
