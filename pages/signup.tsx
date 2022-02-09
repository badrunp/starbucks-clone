import GuestLayout from '../components/GuestLayout';
import GuestLayoutForm, { GuestButton, GuestInput } from '../components/GuestLayoutForm';
import GuestLayoutTop from '../components/GuestLayoutTop';
import { LinkItem } from './signin';

const Signup = () => {
  return (
    <GuestLayout title='Sign Up'>
      <GuestLayoutTop label='Create an account' />
      <GuestLayoutForm>
        <div className='flex flex-col space-y-6'>
          <h2 className='block font-semibold text-lg tracking-wide'>Personal Information</h2>
          <GuestInput type='text' placeholder='First Name' />
          <GuestInput type='text' placeholder='Last Name' />
        </div>
        <div className='flex flex-col space-y-6'>
          <h2 className='block font-semibold text-lg tracking-wide'>Account Security</h2>
          <GuestInput type='text' placeholder='Email Address' />
          <GuestInput type='text' placeholder='Password' />
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
                I agree to the <LinkItem title='Starbucks® Rewards Terms' url='#' /> and the{' '}
                <LinkItem title='Starbucks Card Terms' url='#' />
              </p>
            </div>
          </div>
        </div>
        <GuestButton label='Create account' />
      </GuestLayoutForm>
    </GuestLayout>
  );
};

export default Signup;
