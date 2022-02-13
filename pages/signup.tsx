import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import GuestLayout from '../components/GuestLayout';
import GuestLayoutForm, { GuestButton, GuestInput } from '../components/GuestLayoutForm';
import GuestLayoutTop from '../components/GuestLayoutTop';
import regexMail from '../data/regexmail';
import { validateSignup } from '../data/validate';
import { LinkItem } from './signin';

const Signup: NextPage = () => {
  const [dataInput, setDataInput] = useState<
    | {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
      }
    | any
  >({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [inputError, setInputError] = useState<any>();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setDataInput({
      ...dataInput,
      [name]: name === 'email' ? value.toLowerCase() : value,
    });
  };

  const setError = (error: object) => {
    setInputError({ ...error });
  };
  const handleClick = () => {
    const objError: any = {};

    validateSignup.map((item) => {
      if (item.required) {
        if (dataInput[item.label] === '') {
          objError[item.label] = item.label + ' is required';
        } else if (item.min && item.min > 0) {
          if (dataInput[item.label].length < item.min) {
            objError[item.label] = item.label + ' min ' + item.min + ' character';
          } else {
            delete objError[item.label];
          }
        } else if (item.email) {
          if (!dataInput[item.label].toLowerCase().match(regexMail)) {
            objError[item.label] = item.label + ' is invalid!';
          } else {
            delete objError[item.label];
          }
        } else {
          delete objError[item.label];
        }
      }
    });

    setError(objError);
  };

  return (
    <GuestLayout title='Sign Up'>
      <GuestLayoutTop label='Create an account' />
      <GuestLayoutForm>
        <div className='flex flex-col space-y-6'>
          <h2 className='block font-semibold text-lg tracking-wide'>Personal Information</h2>
          <GuestInput
            type='text'
            name='firstName'
            placeholder='First Name'
            handleChange={handleChangeInput}
            errors={inputError}
          />
          <GuestInput
            type='text'
            name='lastName'
            placeholder='Last Name'
            handleChange={handleChangeInput}
            errors={inputError}
          />
        </div>
        <div className='flex flex-col space-y-6'>
          <h2 className='block font-semibold text-lg tracking-wide'>Account Security</h2>
          <GuestInput
            type='text'
            name='email'
            placeholder='Email Address'
            handleChange={handleChangeInput}
            errors={inputError}
          />
          <GuestInput
            type='text'
            name='password'
            placeholder='Password'
            handleChange={handleChangeInput}
            errors={inputError}
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
              <input type='checkbox' defaultChecked readOnly disabled className='cursor-pointer' />
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
              <input type='checkbox' defaultChecked readOnly disabled className='cursor-pointer' />
            </div>
            <div className='flex flex-col space-y-4'>
              <p className='block text-sm tracking-wide'>
                I agree to the <LinkItem title='Starbucks® Rewards Terms' url='#' /> and the{' '}
                <LinkItem title='Starbucks Card Terms' url='#' />
              </p>
            </div>
          </div>
        </div>
        <GuestButton label='Create account' handleClick={handleClick} />
      </GuestLayoutForm>
    </GuestLayout>
  );
};

export default Signup;
