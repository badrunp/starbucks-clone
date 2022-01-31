import { ReactNode } from 'react';

const sbContent: ReactNode[] = [
  <p key={1}>
    *Valid at participating stores while supplies last. Cannot be combined with other offers, discounts or
    promotions. Impossible is a trademark of Impossible Foods Inc. Used under license.
  </p>,
  <p key={2}>
    **At participating stores. Some restrictions apply. See{' '}
    <a href='#' className='inline-block underline'>
      http://starbucks.com/rewards
    </a>{' '}
    for details.
  </p>,
  <p key={3}>
    ***Menu limited. Restricted delivery area. Available in participating locations only. Fees subject to
    change. Prices for Starbucks® items purchased through Uber Eats may be higher than posted in stores or as
    marked. See the Uber Eats app for details.
  </p>,
];

export default sbContent;
