import { useEffect, useState } from 'react';

function Booking() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="relative bg-[url('/imgs/person.png')] bg-cover bg-center flex flex-col gap-5 h-[33.3rem] text-white items-center justify-center">
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='flex flex-col gap-5 inset-0 text-center text-white'>
          <h2 className='uppercase font-bold z-10 xsm:px-4  tracking-wider text-2xl'>
            Plane your trip with us
          </h2>
        </div>
        <img
          src='./imgs/vslider.png'
          className={`absolute xsm:top-[30rem] transition-opacity xsm:h-10 xsm:w-10 duration-1000 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
          alt=''
        />
      </div>

      <p className=' flex flex-col text-white mt-5 w-full py-4 bg-slate-700 z-10 items-center justify-center text-center lg:text-2xl'>
        To book a tour, please fill out the form below...
      </p>

      <div className='flex justify-between mb-32'>
        <div
          className='h-[80rem] my-5 md:w-[7rem] sm:w-[3rem] lg:w-[10rem] xsm:w-[1rem]'
          style={{ backgroundColor: '#0473A8' }}
        ></div>

        <div className='flex flex-col mt-16'>
          <form action='' className='flex items-center flex-col gap-5'>
            <div className='flex flex-col gap-7 mb-16'>
              <input
                type='text'
                className='border xsm:h-[2rem] lg:h-[3rem] sm:w-[18rem]  xsm:w-[15rem] md:w-[25rem] border-gray-500 rounded-full px-4'
                placeholder='Enter your fullname'
              />
              <input
                type='text'
                placeholder='Enter your whatsapp number or email'
                className='border xsm:h-[2rem] lg:h-[3rem] sm:w-[18rem]  xsm:w-[15rem] md:w-[25rem] border-gray-500 rounded-full px-4'
              />

              <input
                type='text'
                placeholder='Nationality'
                className='border xsm:h-[2rem] lg:h-[3rem] sm:w-[18rem]  xsm:w-[15rem] md:w-[25rem] border-gray-500 rounded-full px-4'
              />

              <input
                type='text'
                placeholder='Number of guest(2 men, 2 wemen, 1 kid)'
                className='border xsm:h-[2rem] lg:h-[3rem] sm:w-[18rem]  xsm:w-[15rem] md:w-[25rem] border-gray-500 rounded-full px-4'
              />

              <input
                type='text'
                placeholder='City you wish to visit(kabul, kandahar)'
                className='border xsm:h-[2rem] lg:h-[3rem] sm:w-[18rem]  xsm:w-[15rem] md:w-[25rem] border-gray-500 rounded-full px-4'
              />

              <input
                type='text'
                placeholder='Intended travel date'
                className='border xsm:h-[2rem] lg:h-[3rem] sm:w-[18rem]  xsm:w-[15rem] md:w-[25rem] border-gray-500 rounded-full px-4'
              />

              <input
                type='text'
                placeholder='Duration of date(8 month)'
                className='border xsm:h-[2rem] lg:h-[3rem] sm:w-[18rem]  xsm:w-[15rem] md:w-[25rem] border-gray-500 rounded-full px-4'
              />
            </div>

            <div className='flex flex-wrap gap-10 justify-center lg:px-10'>
              <div className='w-[15rem]'>
                <h3 className='text-blue-500 font-semibold'>
                  Travel option between cities
                </h3>
                <div>
                  <input type='radio' />
                  <label htmlFor=''>Flight (where applicable)</label>
                </div>

                <div>
                  <input type='radio' />
                  <label htmlFor=''>Private car with driver</label>
                </div>

                <div>
                  <input type='radio' />
                  <label htmlFor=''>Public transport</label>
                </div>

                <div>
                  <input type='radio' />
                  <label htmlFor=''>Mix of flight and car travel</label>
                </div>
              </div>

              <div className='w-[15rem]'>
                <h3 className='text-blue-500 font-semibold'>
                  Accommodataion type
                </h3>
                <div>
                  <input type='radio' />
                  <label htmlFor=''>Standard</label>
                </div>

                <div>
                  <input type='radio' />
                  <label htmlFor=''>Premiume</label>
                </div>

                <div>
                  <input type='radio' />
                  <label htmlFor=''>Luxary</label>
                </div>

                <div>
                  <input type='radio' />
                  <label htmlFor=''>VIP</label>
                </div>
              </div>

              <div className='w-[15rem]'>
                <h3 className='text-blue-500 font-semibold'>
                  Giud for duration of stay
                </h3>
                <div>
                  <input type='radio' />
                  <label htmlFor=''>Required</label>
                </div>

                <div>
                  <input type='radio' />
                  <label htmlFor=''>Not required</label>
                </div>
              </div>

              <div className='w-[15rem]'>
                <h3 className='text-blue-500 font-semibold'>
                  Transporation type
                </h3>
                <div>
                  <input type='radio' />
                  <label htmlFor=''>Standard Vehicle with Driver</label>
                </div>

                <div>
                  <input type='radio' />
                  <label htmlFor=''>Premium Vehicle with driver</label>
                </div>

                <div>
                  <input type='radio' />
                  <label htmlFor=''>
                    Luxury Vehicle with Driver and Bodyguard
                  </label>
                </div>

                <div>
                  <input type='radio' />
                  <label htmlFor=''>Airport Pick-Up and Drop-Off Only</label>
                </div>

                <div>
                  <input type='radio' />
                  <label htmlFor=''>None</label>
                </div>
              </div>

              <div className='w-[15rem]'>
                <h3 className='text-blue-500 font-semibold'>
                  Additional services
                </h3>
                <div>
                  <input type='radio' />
                  <label htmlFor=''>Local Sim-Card</label>
                </div>

                <div>
                  <input type='radio' />
                  <label htmlFor=''>Photographer/videographer</label>
                </div>

                <div>
                  <input type='radio' />
                  <label htmlFor=''>Sites Entry Fees in Afghanistan</label>
                </div>

                <div>
                  <input type='radio' />
                  <label htmlFor=''>Nonr</label>
                </div>
              </div>

              <div className='w-[15rem]'>
                <h3 className='text-blue-500 font-semibold'>Meal plan</h3>
                <div>
                  <input type='radio' />
                  <label htmlFor=''>Breakfast</label>
                </div>

                <div>
                  <input type='radio' />
                  <label htmlFor=''>Lunch</label>
                </div>

                <div>
                  <input type='radio' />
                  <label htmlFor=''>Dinner</label>
                </div>

                <div>
                  <input type='radio' />
                  <label htmlFor=''>
                    Full Board (Unlimited Food and Drinks)
                  </label>
                </div>

                <div>
                  <input type='radio' />
                  <label htmlFor=''>None</label>
                </div>
              </div>

              <div className='w-[15rem]'>
                <h3 className='text-blue-500 font-semibold'>Package level</h3>
                <div>
                  <input type='radio' />
                  <label htmlFor=''>Basic</label>
                </div>

                <div>
                  <input type='radio' />
                  <label htmlFor=''>Standard</label>
                </div>

                <div>
                  <input type='radio' />
                  <label htmlFor=''>Premium</label>
                </div>

                <div>
                  <input type='radio' />
                  <label htmlFor=''>Luxary</label>
                </div>
              </div>
            </div>

            <h3 className='text-center px-10'>
              Share your plans with us, including the purpose of your visit,
              preferred activities, and any special requests
            </h3>
            <input
              type='textarea'
              className='border xsm:h-[15rem] xsm:w-[15rem] sm:w-[18rem]  md:h-[10rem] md:w-[25rem] border-gray-600 rounded-xl px-4'
            />

            <input
              type='submit'
              value='save and send'
              className='text-white h-[3rem] w-[10rem] cursor-pointer rounded-xl'
              style={{ backgroundColor: '#0473A8' }}
            />
          </form>
        </div>
        <div
          className='h-[80rem] my-5 md:w-[7rem] sm:w-[3rem] lg:w-[10rem] xsm:w-[1rem]'
          style={{ backgroundColor: '#0473A8' }}
        ></div>
      </div>
    </>
  );
}

export default Booking;
