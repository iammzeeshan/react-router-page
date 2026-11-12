import workingImage from '../../assets/images/image-working.webp'
import playstoreIcon from '../../assets/images/icons/playstore.webp'

function HomePage() {
    return (
        <main>

            {/* Home Section */}
            <section className='flex justify-around items-center p-20'>

                <img
                    className='w-68'
                    src={workingImage}
                    alt="Working"
                />

                <div className='flex flex-col'>
                    <h1 className='text-4xl font-bold'>
                        Download Now
                    </h1>

                    <h3 className='text-2xl font-bold text-right'>
                        Lorem ipsum.
                    </h3>

                    <br />

                    <button className='bg-orange-700 px-4 py-2 rounded-sm text-white flex items-center gap-1.5 self-end'>
                        <img width={25} src={playstoreIcon} alt="" />
                        Download Now
                    </button>
                </div>


            </section>




        </main>
    )
}

export default HomePage;
