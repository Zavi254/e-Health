import React from 'react'
import ButtonHashTag from '../../components/ButtonHashTag'
import ImageGrid from '../../components/ImageGrid'

function Gallery() {
  return (
    <div>
        <div className='gallery'>
      <h3>Gallery</h3>
      <div className='about'>
        <h1>Check out our clinic great gallery</h1>
        <div className="grid-btn">
            <ButtonHashTag word={'Clinic'}/>
            <ButtonHashTag word={'Surgical'}/>
            <ButtonHashTag word={'Truthfulness'}/>
            <ButtonHashTag word={'Trust'}/>
        </div>
      </div>
      <div>
      <a href="#" class="fa fa-telegram"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-whatsapp"></a>
      </div>
    </div>
    <ImageGrid/>
    <div>
        <div className="services">
            <h3>Services</h3>
            <h1>Excelent services of our clinic</h1>

        </div>
        <ul>
            
        </ul>
    </div>
    </div>
  )
}

export default Gallery