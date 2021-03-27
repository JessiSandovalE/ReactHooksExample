import React, { useState, useReducer, useMemo, useRef, useCallback } from 'react'
import {CharactersStyle} from '../styles/Characters'
import Search from './Search'
import useCharacters from '../hooks/useCharacters'

const initialState = {
  favorites: []
}
const favoriteReducer = (state, action) => {
  switch(action.type){
    case 'ADD_TO_FAVORITE': 
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    default:
      return state
  }
}

const API = 'https://rickandmortyapi.com/api/character/'
const Characters = () => {
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState)
  const [search, setSearch] = useState('')
  const searchInput = useRef(null)

const characters = useCharacters(API);

  const handleClick = favorite => {
    dispatch({type: 'ADD_TO_FAVORITE', payload: favorite})
  }

/*   const handleSearch = () => {
    setSearch(searchInput.current.value)
  } */

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value)
  }, [])

/*   const filteredUsers = characters.filter((user)=> {
    return user.name.toLowerCase().includes(search.toLowerCase())
  }) */

  const filteredUsers = useMemo(()=>
    characters.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase())
    }),
    [characters, search]
  )

  return (
    <div className={CharactersStyle}>
      {favorites.favorites.map(favorite => (
        <h2>{favorite.name}</h2>
      ))}
      <div>
        <Search search={search}  searchInput={searchInput} handleSearch={handleSearch}/>
        <h2>Lista de Personajes</h2>
        <div className="list">
          { filteredUsers.map(character => (
            <div className="card" key={character.id}>
              <img src={ character.image} alt={ character.name } />
              <h2>{character.name}</h2>
              <button type="button" onClick= {()=> handleClick(character)}>Agregar a Favoritos</button>
            </div>
          ))
          }
        </div>
        </div>
    </div>
  )
}

export default Characters
