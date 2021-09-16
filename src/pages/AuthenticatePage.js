import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { device } from '../constants/deviceSize'

// components import
import SubmitButton from '../common/components/SubmitButton'
import InputField from '../common/components/InputField'
import ImageCarousel from '../common/components/ImageCarousel'

const AuthenticatePage = () => {
  const [signUpMode, setSignUpMode] = useState(false)
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

                <InputField label={text.emailFieldLabel} />
                <InputField type='password' label={text.passwordFieldLabel} />

                <SubmitButton value={text.signInButton} />

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

                <InputField label={text.nameFieldLabel} />
                <InputField type='email' label={text.emailFieldLabel} />
                <InputField type='password' label={text.passwordFieldLabel} />

                <SubmitButton value={text.signUpButton} />

                <Text>
                  {text.bySigningUpIAgree}
                  <span>{text.termsOfService}</span>
                  {text.and}
                  <span>{text.privacyPolicy}</span>
                </Text>
              </ActualForm>
            </SignUpForm>
          </FormsWrap>

          <ImageCarousel signUpMode={signUpMode} />
        </InnerBox>
      </Box>
    </Main>
  )
}

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: ${(props) => props.theme.colorPrimary};
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
  background-color: ${(props) => props.theme.colorWhite};
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
  color: ${(props) => props.theme.colorPrimary};
`
const Heading = styled.div`
  margin-bottom: 2rem;

  h2 {
    font-size: 2.1rem;
    font-weight: 600;
    color: ${(props) => props.theme.colorPrimary};
  }

  h6 {
    font-size: 0.75rem;
    font-weight: 400;
    color: ${(props) => props.theme.colorTertiary};
    display: inline;

    span {
      cursor: pointer;
      color: ${(props) => props.theme.colorPrimary};
      font-size: 0.75rem;
      font-weight: 500;
      transition: 0.3s;

      &:hover {
        color: ${(props) => props.theme.colorSecondary};
      }
    }
  }

  @media ${device.laptop} {
    max-width: revert;
    padding: 2rem 0;
  }
`
const ActualForm = styled.div``

const Text = styled.p`
  color: ${(props) => props.theme.colorTertiary};
  font-size: 0.7rem;

  span {
    cursor: pointer;
    transition: 0.3s;
    text-decoration: underline;

    &:hover {
      color: ${(props) => props.theme.colorSecondary};
    }
  }
`

export default AuthenticatePage
