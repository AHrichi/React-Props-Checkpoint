import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import Profile from './profile/Profile';
const Al = (x) => {
  alert(x)
}

ReactDOM.render(
  <React.StrictMode>
    <Profile
      fullName='Ahmed Hrichi'
      bio="IYour current role or professional tagline
          Your company or personal brand
          Your goals and aspirations
          Your 2-3 most impressive and relevant achievements
          One quirky fact about you (if it’s appropriate to the site)
          What to Include in a Bio at Work
          Writing a bio for your company’s website, HR system, or Slack instance? 
          Be sure to give your coworkers a sense of both your professional expertise—and your personality!"
      profession="Junior web developer"
      handleName={Al} />
  </React.StrictMode>,
  document.getElementById('root')
);

