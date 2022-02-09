const GuestLayoutTop = ({ info = true, label }: { info?: boolean; label: string }) => {
  return (
    <div className='flex flex-col space-y-2 md:space-y-12 mb-6 md:mb-12 w-full'>
      <h1 className='block font-bold text-2xl tracking-wide w-full md:text-center'>{label}</h1>
      {info && (
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
      )}
    </div>
  );
};

export default GuestLayoutTop;
