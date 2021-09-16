import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { device } from '../../constants/deviceSize'
import image1 from '../../assets/images/1.jpg'
import image2 from '../../assets/images/2.jpg'
import image3 from '../../assets/images/3.jpg'

const ImageCarousel = ({ signUpMode }) => {
  const [carouselSlider, setCarouselSlider] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselSlider(carouselSlider + 1 > 3 ? 1 : carouselSlider + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [carouselSlider])

  return (
    <Carousel signUpMode={signUpMode}>
      <ImagesWrapper>
        <ImageOne src={image1} alt='1' isActive={carouselSlider === 1} />
        <ImageTwo src={image2} alt='2' isActive={carouselSlider === 2} />
        <ImageThree src={image3} alt='3' isActive={carouselSlider === 3} />
      </ImagesWrapper>
      <TextSlider>
        <TextWrap>
          <TextGroup isActive={carouselSlider}>
            <h2>buy / sell / trade</h2>
            <h2>legit check / authentication</h2>
            <h2>show off your collection</h2>
          </TextGroup>
        </TextWrap>

        <Bullets>
          <Bullet
            isActive={carouselSlider === 1}
            onClick={() => setCarouselSlider(1)}
          />
          <Bullet
            isActive={carouselSlider === 2}
            onClick={() => setCarouselSlider(2)}
          />
          <Bullet
            isActive={carouselSlider === 3}
            onClick={() => setCarouselSlider(3)}
          />
        </Bullets>
      </TextSlider>
    </Carousel>
  )
}

const Carousel = styled.div`
  position: absolute;
  height: 100%;
  width: 55%;
  top: 0;
  border-radius: 2rem;
  transition: 0.8s ease-in-out;
  display: grid;
  grid-template-rows: 88% 1fr;
  overflow: hidden;
  left: ${({ signUpMode }) => (signUpMode ? '0%' : '45%')};

  @media ${device.laptop} {
    position: revert;
    height: auto;
    width: 100%;
    display: flex;
  }

  @media ${device.mobileL} {
    padding: 1.5rem 1rem;
    border-radius: 1.6rem;
  }
`

const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  @media ${device.laptop} {
    display: none;
  }
`

const TextSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-row: 2 / 3;

  @media ${device.laptop} {
    width: 100%;
  }
`

const TextWrap = styled.div`
  max-height: 1.8rem;
  overflow: hidden;
  margin: 1.6rem 0;

  h2 {
    line-height: 1.8rem;
    font-weight: 600;
    font-size: 1.2rem;
  }

  @media ${device.mobileL} {
    /* margin-bottom: 1rem; */
    margin: 0;
  }
`

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  transform: ${({ isActive }) => `translateY(${-(isActive - 1) * 1.8}rem)`};
  transition: 0.5s;
  h2 {
    @media ${device.mobileL} {
      font-size: 1.2rem;
    }
  }
`

const Bullets = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Bullet = styled.span`
  display: block;
  width: ${({ isActive }) => (isActive ? '1.4rem' : '0.8rem')};
  height: 0.8rem;
  background-color: ${(props) =>
    props.isActive ? props.theme.colorPrimary : props.theme.colorTertiary};
  margin: 0 0.25rem;
  border-radius: ${({ isActive }) => (isActive ? '1rem' : '50%')};
  cursor: pointer;
  transition: 0.3s;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  opacity: 0;
  transition: opacity 2s, transform 0.5s;
  object-fit: cover;
  border-radius: 2rem;
`

const ImageOne = styled(Image)`
  opacity: ${({ isActive }) => (isActive ? '1' : '0')};
`

const ImageTwo = styled(Image)`
  opacity: ${({ isActive }) => (isActive ? '1' : '0')};
`

const ImageThree = styled(Image)`
  opacity: ${({ isActive }) => (isActive ? '1' : '0')};
`

export default ImageCarousel
