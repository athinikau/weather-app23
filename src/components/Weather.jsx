import React from 'react'

const weather = ({weatherData}) => {
    console.log(weatherData);
  return (
    <div>
        {weatherData.weather}(
            <div className='w-[500px] h-[250px] bg-grey-300
            shadow-lg round-x1 m-auto realative px-6 top-[10%]
            '>
                <div className='flex justify-between w-full'>
                    <div className='w-1/2 my-4 mx-auto flx justify-between
                     items-center'>
                        <div className='flex flex-col items-start justify-between h-full
                        ' >
                            <div>
                                <p className='text-x1'>
                                    {weatherData.name},
                                    {weatherData.sys.country}
                                </p>
                                <p className='text-sm'>
                                    {weatherData.weather[0].
                                    description}
                                </p>
                            </div>
                            <div >
                                <h1 className='text-6x1'>
                                {weatherData.main.temp.toFixed()}  °C
                                </h1>
                                
                            </div>
                            <div className='w-1/2 flex flex-col justify-between items-md'>
                                <div className='relative'>
                                    <img src={' https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png'} alt=''/>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>

        ):null

    </div>
  )
}

export default weather
