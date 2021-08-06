import React from 'react';
import NavBar from '../NavBar/NavBar';
import Resume from '../../images/aubreyjonesresume.jpg';





function AJResume() {
  return (
  <>
  <NavBar />
<figure className="resumeImage"><img src={Resume}/></figure>
  </>
  );
}

export default AJResume;
