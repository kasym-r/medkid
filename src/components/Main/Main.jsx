import React from 'react'
import './Main.scss'
import SimpleSlider from '../Slider/Slider'

const Main = () => {
  return (
    <div className='main'>
      <div className='intro'>
        <div className='text_block'>
          <h1>Time is running out,</h1>
          <p>but children need help now!</p>
        </div>
        <div className='qr'>
          <img src="https://i.pinimg.com/736x/60/c1/4a/60c14a43fb4745795b3b358868517e79.jpg" alt="" />
        </div>
      </div>
      <div className='info'>
        <div className='btns'>
          <button>Fund</button>
          <button>I need help</button>
          <button>I want to help</button>
          <button>Become a volunteer</button>
        </div>
        <div className='icns'>
          <div className='icn'>
            <img src="https://i.ibb.co/nLnpdwp/oc.png" alt="" />
            <p>Fund programms</p>
          </div>
          <div className='icn'>
            <img src="https://i.ibb.co/NNrwSGZ/bag.png" alt="" />
            <p>Projects</p>
          </div>
          <div className='icn'>
            <img src="https://i.ibb.co/F7vs5XK/list.png" alt="" />
            <p>Documents</p>
          </div>
          <div className='icn'>
            <img src="https://i.ibb.co/GnJffz7/mes.png" alt="" />
            <p>Connect with us</p>
          </div>
          <div className='icn'>
            <img src="https://i.ibb.co/y5BTJ6n/peop.png" alt="" />
            <p>Fund Team</p>
          </div>
          <div className='icn'>
            <img src="https://i.ibb.co/2y5M9br/fav.png" alt="" />
            <p>Reports</p>
          </div>
        </div>
        <div className='thnks'>
          <p></p>
        </div>
      </div>
      <div className='intro2'>
        <div className='image_block2'>
          <img src="https://www.deti.kg/images/2023/02/20/malchik1.png" alt="" />
        </div>
        <div className='text_block2'>
          <h1>About the Fund</h1>
          <p>
            F.S.C.W. provides assistance to children 
            suffering from oncological, hematological 
            and immunological diseases and their families.
          </p>
          <p>
            Since 2007, together with you, we have been 
            helping to save children's lives, create coziness 
            and comfort in departments, help relieve pain and
            inspire hope and faith in people's hearts!
          </p>
          <p>
            We do not leave aside our doctors. Our task 
            is to try to help in creating the most comfortable
            working conditions.
          </p>
          <p>
            And although we are not doctors, but love and care, 
            kindness and attention, according to our doctors, can work wonders.
          </p>
          <p>
            We do all this thanks to you, our partners, friends and 
            "passers-by"! A low bow to you and words of sincere gratitude 
            for your understanding and assistance!
          </p>
          <p>
            We can say that more than 14 years of assistance has been provided in the amount of 121,502,659 dollars.
          </p>
        </div>
      </div>
      
      <SimpleSlider />
    </div>
  )
}

export default Main
