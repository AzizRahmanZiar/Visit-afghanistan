/* eslint-disable react/prop-types */
function ImgaeCard({ image }) {
  return (
    <img
      className='xsm:w-[17rem] lg:w-[13rem] lg:h-[20rem] border-x-2 bg-cover bg-center border-y-2  xsm:h-[10rem] rounded-lg'
      src={image}
      alt='Card Image'
    />
  );
}

export default ImgaeCard;
