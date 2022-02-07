import Link from 'next/link';
import GuestLayout from '../components/GuestLayout';

const Signup = () => {
  return (
    <GuestLayout title='Sign Up'>
      <div className='w-full min-h-screen overflow-hidden bg-white px-4 relative py-6 md:py-12'>
        <div className='flex flex-col max-w-[548px] lg:max-w-[580px] mx-auto'>
          <div className='flex flex-col space-y-2 md:space-y-12 mb-6 md:mb-12 w-full sm:px-4'>
            <h1 className='block font-bold text-2xl tracking-wide w-full md:text-center'>
              Create an account
            </h1>
            <div className='flex flex-col space-y-4 md:text-center'>
              <h2 className='hidden md:block font-semibold text-sm uppercase tracking-wider'>
                Starbucks Rewards
              </h2>
              <p className='block text-sm tracking-wide'>
                Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to
                mobile ordering, a birthday Reward, and{' '}
                <a href='#' className='inline-block underline'>
                  more
                </a>
                .
              </p>
            </div>
          </div>
          <div className='w-full rounded-xl md:shadow-lg sm:px-4 md:px-10 md:ring-2 md:ring-gray-100'>
            <div className='md:p-14 flex flex-col space-y-10'>
              <div className='flex flex-col space-y-6'>
                <h2 className='block font-semibold text-lg tracking-wide'>Personal Information</h2>
                <input
                  type='text'
                  placeholder='First Name'
                  className='block w-full px-4 py-3 border border-gray-400 tracking-wide rounded-xl ring-2 ring-transparent focus:outline-none focus:border-transparent focus:ring-gray-600'
                />
                <input
                  type='text'
                  placeholder='Last Name'
                  className='block w-full px-4 py-3 border border-gray-400 tracking-wide rounded-xl ring-2 ring-transparent focus:outline-none focus:border-transparent focus:ring-gray-600'
                />
              </div>
              <div className='flex flex-col space-y-6'>
                <h2 className='block font-semibold text-lg tracking-wide'>Account Security</h2>
                <input
                  type='text'
                  placeholder='Email Address'
                  className='block w-full px-4 py-3 border border-gray-400 tracking-wide rounded-xl ring-2 ring-transparent focus:outline-none focus:border-transparent focus:ring-gray-600'
                />
                <input
                  type='text'
                  placeholder='Password'
                  className='block w-full px-4 py-3 border border-gray-400 tracking-wide rounded-xl ring-2 ring-transparent focus:outline-none focus:border-transparent focus:ring-gray-600'
                />
              </div>
              <div className='flex flex-col space-y-6'>
                <h2 className='block font-semibold text-sm uppercase tracking-wider'>
                  Collect More Start & Earn Rewards
                </h2>
                <p className='block text-sm tracking-wide'>
                  Email is a great way to know about offers and what`s new from Starbucks.
                </p>
                <div className='flex items-start space-x-4'>
                  <div className='flex-shrink-0'>
                    <input type='checkbox' />
                  </div>
                  <div className='flex flex-col space-y-4'>
                    <p className='block text-sm tracking-wide'>Yes, I`d like email from Starbucks</p>
                    <p className='block text-sm tracking-wide'>
                      Know about initiatives, announcements and product offers.
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col space-y-6'>
                <h2 className='block font-semibold text-sm uppercase tracking-wider'>Term of Use</h2>
                <div className='flex items-start space-x-4'>
                  <div className='flex-shrink-0'>
                    <input type='checkbox' />
                  </div>
                  <div className='flex flex-col space-y-4'>
                    <p className='block text-sm tracking-wide'>
                      I agree to the{' '}
                      <Link href={'/'}>
                        <a className='inline-block text-green-600 underline font-semibold'>
                          Starbucks® Rewards Terms
                        </a>
                      </Link>{' '}
                      and the{' '}
                      <Link href={'/'}>
                        <a className='inline-block text-green-600 underline font-semibold'>
                          Starbucks Card Terms
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex justify-end'>
                <button className='block py-4 md:py-[18px] px-6 md:px-7 rounded-full bg-green-600 text-white font-semibold tracking-wide shadow-lg'>
                  Create account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default Signup;
