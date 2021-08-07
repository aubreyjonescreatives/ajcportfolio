import React from 'react';
import NavBar2 from '../NavBar/NavBar2';
import Resume from '../../images/aubreyjonesresume.jpg';





function AJResume() {
  return (
  <>
  <NavBar2 />
<figure className="resumeImage"><img src={Resume}/></figure>
  </>
  );
}

export default AJResume;
