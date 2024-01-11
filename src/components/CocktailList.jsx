import React from 'react'
import Wrapper from '../assets/wrappers/CocktailList'
import CocktaildCard from './CocktailCard'

const CocktailList = ({ drinks }) => {
  
  if (!drinks) {
    return <h4 style={{ textAlign: "center" }}>
      No matching cocktails found...
    </h4>
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {id: idDrink, name:strDrink, image: strDrinkThumb, info: strAlcoholic, global:strGlass}
  })

  return (
    <Wrapper>{formattedDrinks.map((item) => {
      return <CocktaildCard key={item.id} {...item} />
    })}</Wrapper>
  )
}

export default CocktailList