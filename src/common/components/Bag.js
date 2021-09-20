import React, { useState, useRef } from 'react'
import styled from 'styled-components/macro'

//SVG
import { ReactComponent as BagIcon } from '../../assets/images/bag.svg'
import { ReactComponent as FavoritesIcon } from '../../assets/images/favorites.svg'
import { ReactComponent as OrdersIcon } from '../../assets/images/orders.svg'
import { ReactComponent as AccountIcon } from '../../assets/images/account.svg'
import { ReactComponent as SignInIcon } from '../../assets/images/signIn.svg'

const Bag = () => {
  const [bagMenuItems, setBagMenuItems] = useState([
    { name: 'Bag', img: <BagIcon /> },
    { name: 'Favourites', img: <FavoritesIcon /> },
    { name: 'Orders', img: <OrdersIcon /> },
    { name: 'Account', img: <AccountIcon /> },
    { name: 'Sign in', img: <SignInIcon /> },
  ])
  return (
    <BagWrapper>
      <BagContent>Your Bag is empty.</BagContent>
      <Line />
      {bagMenuItems.map((menuItem) => (
        <Item>
          {menuItem.img}
          <StyledLabel>{menuItem.name}</StyledLabel>
        </Item>
      ))}
    </BagWrapper>
  )
}

const BagWrapper = styled.div`
  position: absolute;
  top: 5rem;
  right: -18px;
  width: 20rem;
  height: 25rem;
  background: var(--color-white-light);
  border-radius: 2rem;
  border: 1px solid #d2d2d7;
  padding: 2rem 2rem;

  &::before {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    top: -8px;
    right: 15px;
    border-left: 10.5px solid transparent;
    border-right: 11.5px solid transparent;
    border-bottom: 15px solid var(--color-white-light);
  }
`

const BagContent = styled.p`
  font-size: 1.4rem;
  text-align: center;
  padding-bottom: 2rem;
`

const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--color-gray-medium);
  margin-bottom: 2rem;
`

const Item = styled.div`
  list-style-type: none;
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  cursor: pointer;

  svg {
    width: 2.3rem;
    height: 2.3rem;
  }
`

const StyledLabel = styled.label`
  font-size: 1.4rem;
  color: var(--color-blue);
`

export default Bag
