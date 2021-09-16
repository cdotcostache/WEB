import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import image1 from '../assets/images/1.jpg'
import image2 from '../assets/images/2.jpg'
import image3 from '../assets/images/3.jpg'
import { device } from '../constants/deviceSize'

const AuthenticatePage = () => {
  const [signUpMode, setSignUpMode] = useState(false)
  const [carouselImageIndex, setCarouselImageIndex] = useState(1)
  const text = {
    snkrsMarket: 'snkrs.market',
    welcomeBack: 'welcome back',
    notRegisteredYet: 'Not registered yet? ',
    signUp: 'Sign up',
    nameFieldLabel: 'Name',
    passwordFieldLabel: 'Password',
    signInButton: 'Sign in',
    forgottenPassword: 'Forgotten your password or your login details? ',
    getHelpAction: 'Get help',
    getHelpSigningIn: ' signing in.',
    getStarted: 'get started',
    alreadyHaveAnAccount: 'Already have an account? ',
    signIn: 'Sign in',
    emailFieldLabel: 'Email',
    signUpButton: 'Sign up',
    bySigningUpIAgree: 'By signing up, I agree to the ',
    termsOfService: 'Terms of Service',
    and: ' and ',
    privacyPolicy: 'Privacy Policy',
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselImageIndex(
        carouselImageIndex + 1 > 3 ? 1 : carouselImageIndex + 1
      )
    }, 5000)
    return () => clearInterval(interval)
  }, [carouselImageIndex])

  return (
    <Main>
      <Box>
        <InnerBox>
          <FormsWrap signUpMode={signUpMode}>
            <SignInForm autocomplete='off' signUpMode={signUpMode}>
              <Logo>{text.snkrsMarket}</Logo>

              <ActualForm>
                <Heading>
                  <h2>{text.welcomeBack}</h2>
                  <h6>
                    {text.notRegisteredYet}
                    <span onClick={() => setSignUpMode(true)}>
                      {text.signUp}
                    </span>
                  </h6>
                </Heading>

                <InputWrap>
                  <InputField
                    type='text'
                    minLength='4'
                    autocomplete='off'
                    required
                    placeholder=''
                  />
                  <InputLabel>{text.emailFieldLabel}</InputLabel>
                </InputWrap>

                <InputWrap>
                  <InputField
                    type='password'
                    minLength='4'
                    autocomplete='off'
                    placeholder=''
                    required
                  />
                  <InputLabel>{text.passwordFieldLabel}</InputLabel>
                </InputWrap>

                <SignBtn type='submit' value={text.signInButton} />

                <Text>
                  {text.forgottenPassword}
                  <span>{text.getHelpAction}</span>
                  {text.getHelpSigningIn}
                </Text>
              </ActualForm>
            </SignInForm>

            <SignUpForm autocomplete='off' signUpMode={signUpMode}>
              <Logo>{text.snkrsMarket}</Logo>

              <ActualForm>
                <Heading>
                  <h2>{text.getStarted}</h2>
                  <h6>
                    {text.alreadyHaveAnAccount}
                    <span onClick={() => setSignUpMode(false)}>
                      {text.signIn}
                    </span>
                  </h6>
                </Heading>
                <InputWrap>
                  <InputField
                    type='text'
                    minLength='4'
                    autocomplete='off'
                    required
                    placeholder=''
                  />
                  <InputLabel>{text.nameFieldLabel}</InputLabel>
                </InputWrap>

                <InputWrap>
                  <InputField
                    type='email'
                    minLength='4'
                    autocomplete='off'
                    required
                    placeholder=''
                  />
                  <InputLabel>{text.emailFieldLabel}</InputLabel>
                </InputWrap>

                <InputWrap>
                  <InputField
                    type='password'
                    minLength='4'
                    autocomplete='off'
                    placeholder=''
                    required
                  ></InputField>
                  <InputLabel>{text.passwordFieldLabel}</InputLabel>
                </InputWrap>

                <SignBtn type='submit' value={text.signUpButton} />

                <Text>
                  {text.bySigningUpIAgree}
                  <span>{text.termsOfService}</span>
                  {text.and}
                  <span>{text.privacyPolicy}</span>
                </Text>
              </ActualForm>
            </SignUpForm>
          </FormsWrap>

          <Carousel signUpMode={signUpMode}>
            <ImagesWrapper>
              <ImageOne
                src={image1}
                alt='1'
                isActive={carouselImageIndex === 1 ? true : false}
              />
              <ImageTwo
                src={image2}
                alt='2'
                isActive={carouselImageIndex === 2 ? true : false}
              />
              <ImageThree
                src={image3}
                alt='3'
                isActive={carouselImageIndex === 3 ? true : false}
              />
            </ImagesWrapper>
            <TextSlider>
              <TextWrap>
                <TextGroup isActive={carouselImageIndex}>
                  <h2>buy / sell / trade</h2>
                  <h2>legit check / authentication</h2>
                  <h2>show off your collection</h2>
                </TextGroup>
              </TextWrap>

              <Bullets>
                <Bullet
                  isActive={carouselImageIndex === 1 ? true : false}
                  onClick={() => setCarouselImageIndex(1)}
                />
                <Bullet
                  isActive={carouselImageIndex === 2 ? true : false}
                  onClick={() => setCarouselImageIndex(2)}
                />
                <Bullet
                  isActive={carouselImageIndex === 3 ? true : false}
                  onClick={() => setCarouselImageIndex(3)}
                />
              </Bullets>
            </TextSlider>
          </Carousel>
        </InnerBox>
      </Box>
    </Main>
  )
}

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: #151111;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.mobileL} {
    padding: 1rem;
  }
`

const Box = styled.div`
  position: relative;
  width: 100%;
  max-width: 102rem;
  height: 55rem;
  background-color: #fff;
  border-radius: 3.3rem;
  box-shadow: 0 6rem 4rem -3rem rgba(0, 0, 0, 0.2);

  @media ${device.laptop} {
    height: auto;
    max-width: 550px;
    overflow: hidden;
  }

  @media ${device.mobileL} {
    border-radius: 2rem;
  }
`

const InnerBox = styled.div`
  position: absolute;
  width: calc(100% - 4.1rem);
  height: calc(100% - 4.1rem);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${device.laptop} {
    position: static;
    transform: none;
    width: revert;
    height: revert;
    padding: 2rem;
  }

  @media ${device.mobileL} {
    padding: 1rem;
  }
`
const FormsWrap = styled.div`
  position: absolute;
  height: 100%;
  width: 45%;
  top: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  transition: 0.8s ease-in-out;

  left: ${({ signUpMode }) => (signUpMode ? '55%' : '0')};

  @media ${device.laptop} {
    position: revert;
    width: 100%;
    height: auto;
  }
`

const SignInForm = styled.form`
  max-width: 26rem;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  transition: opacity 0.02s 0.4s;

  opacity: ${({ signUpMode }) => (signUpMode ? '0' : '1')};
  pointer-events: ${({ signUpMode }) => (signUpMode ? 'none' : 'all')};

  @media ${device.laptop} {
    max-width: revert;
    padding: 1.5rem 2.5rem 2rem;
    transition: transform 0.8s ease-in-out, opacity 0.45s linear;
    transform: ${({ signUpMode }) =>
      signUpMode ? 'translateX(-100%)' : 'none'};
  }

  @media ${device.mobileL} {
    padding: 1rem 2rem 1.5rem;
  }
`

const SignUpForm = styled.form`
  max-width: 26rem;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  transition: opacity 0.02s 0.4s;

  opacity: ${({ signUpMode }) => (signUpMode ? '1' : '0')};
  pointer-events: ${({ signUpMode }) => (signUpMode ? 'all' : 'none')};

  @media ${device.laptop} {
    max-width: revert;
    padding: 1.5rem 2.5rem 2rem;
    transition: transform 0.8s ease-in-out, opacity 0.45s linear;
    transform: ${({ signUpMode }) =>
      signUpMode ? 'translateX(0%)' : 'translateX(100%)'};
  }

  @media ${device.mobileL} {
    padding: 1rem 2rem 1.5rem;
  }
`

const Logo = styled.h4`
  font-size: 1.1rem;
  color: #151111;
`
const Heading = styled.div`
  margin-bottom: 2rem;

  h2 {
    font-size: 2.1rem;
    font-weight: 600;
    color: #151111;
  }

  h6 {
    font-size: 0.75rem;
    font-weight: 400;
    color: #bababa;
    display: inline;

    span {
      cursor: pointer;
      color: #151111;
      font-size: 0.75rem;
      font-weight: 500;
      transition: 0.3s;

      &:hover {
        color: #f4c430;
      }
    }
  }

  @media ${device.laptop} {
    max-width: revert;
    padding: 2rem 0;
  }
`
const ActualForm = styled.div``

const InputWrap = styled.div`
  position: relative;
  height: 3.7rem;
  margin-bottom: 2rem;
`
const InputField = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  outline: none;
  border-bottom: 1px solid #bbb;
  padding: 0;
  font-size: 0.95rem;
  color: #151111;
  transition: 0.3s;

  &:focus {
    border-bottom-color: #151111;
  }
`

const InputLabel = styled.label`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.95rem;
  color: #bbb;
  pointer-events: none;
  transition: 0.3s;

  ${InputField}:not(:placeholder-shown) ~ & {
    font-size: 0.75rem;
    top: -0.2rem;
  }
`
const SignBtn = styled.input`
  display: inline-block;
  width: 100%;
  height: 4.3rem;
  background-color: #151111;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 0.8rem;
  margin-bottom: 2rem;
  transition: 0.3s;

  &:hover {
    border: 1px solid rgba(8, 7, 7, 0.4);
    background-color: #fff;
    color: #151111;
  }
`
const Text = styled.p`
  color: #bbb;
  font-size: 0.7rem;

  span {
    cursor: pointer;
    transition: 0.3s;
    text-decoration: underline;

    &:hover {
      color: #f4c430;
    }
  }
`

const Carousel = styled.div`
  position: absolute;
  height: 100%;
  width: 55%;
  top: 0;

  border-radius: 2rem;
  transition: 0.8s ease-in-out;
  display: grid;
  grid-template-rows: auto 1fr;
  padding-bottom: 2rem;
  overflow: hidden;
  left: ${({ signUpMode }) => (signUpMode ? '0%' : '45%')};

  @media ${device.laptop} {
    position: revert;
    height: auto;
    width: 100%;
    /* padding: 1rem 2rem; */
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
  background-color: ${({ isActive }) => (isActive ? '#151111' : '#bbb')};
  margin: 0 0.25rem;
  border-radius: ${({ isActive }) => (isActive ? '1rem' : '50%')};
  cursor: pointer;
  transition: 0.3s;
`

const Image = styled.img`
  width: 100%;
  height: 65vh;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  opacity: 0;
  transition: opacity 2s, transform 0.5s;
  object-fit: cover;
  border-radius: 2rem;
`

const ImageOne = styled(Image)`
  opacity: ${({ isActive }) => (isActive ? '1' : '0')};
  /* transform: ${({ isActive }) =>
    isActive ? 'none' : 'translate(0, -5rem)'}; */
`

const ImageTwo = styled(Image)`
  opacity: ${({ isActive }) => (isActive ? '1' : '0')};
  /* transform: ${({ isActive }) => (isActive ? 'none' : 'scale(0.4, 0.5)')}; */
`

const ImageThree = styled(Image)`
  opacity: ${({ isActive }) => (isActive ? '1' : '0')};
  /* transform: ${({ isActive }) =>
    isActive ? 'none' : 'scale(0.3) rotate(-20deg)'}; */
`

export default AuthenticatePage
