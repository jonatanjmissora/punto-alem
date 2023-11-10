import foto11 from '../assets/foto_1_1.jpg'
import foto14 from '../assets/foto_1_4.jpg'
import foto15 from '../assets/foto_1_5.jpg'
import foto16 from '../assets/foto_1_6.jpg'
import foto17 from '../assets/foto_1_7.jpg'

import foto41 from '../assets/foto_4_1.jpg'
import foto42 from '../assets/foto_4_2.jpg'

import foto51 from '../assets/foto_5_1.jpg'
import foto52 from '../assets/foto_5_2.jpg'
import foto53 from '../assets/foto_5_3.jpg'
import foto54 from '../assets/foto_5_4.jpg'

import foto71 from '../assets/foto_7_1.jpg'
import foto72 from '../assets/foto_7_2.jpg'
import foto73 from '../assets/foto_7_3.jpg'

import foto81 from '../assets/foto_8_1.jpg'
import foto82 from '../assets/foto_8_2.jpg'
import foto83 from '../assets/foto_8_3.jpg'

import foto101 from '../assets/foto_10_1.jpg'
import foto102 from '../assets/foto_10_2.jpg'

import styles from '../styles/Carrousel.module.css'
import { ChevronRightSvg } from '../assets/icons/Svg'
import { useState } from 'react'

export const Carrousel = ({ category, width, height }) => {
  const [index, setIndex] = useState(0)

  const images = {
    foto1: [foto11, foto14, foto15, foto16, foto17],
    foto2: [],
    foto3: [],
    foto4: [foto41, foto42],
    foto5: [foto51, foto52, foto53, foto54],
    foto6: [],
    foto7: [foto71, foto72, foto73],
    foto8: [foto81, foto82, foto83],
    foto9: [],
    foto10: [foto102, foto101],
    foto11: [],
    foto12: []
  }

  const handleClick = () => {
    const maxIndex = images[category].length - 1
    const nextIndex = index + 1 > maxIndex ? 0 : index + 1
    setIndex(nextIndex)
  }

  const imageContainerStyles = {
    width: `${width}`,
    height: `${height}`,
    position: 'relative'
  }

  return (
    <div style={imageContainerStyles}>
      <img className={styles.image} src={images[category][index]} alt="imagen del hero" />
      <span className={styles.chevron} onClick={handleClick}><ChevronRightSvg /></span>
    </div>
  )
}
