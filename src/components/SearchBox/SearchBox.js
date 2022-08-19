import React from 'react'
import { GrSearch } from "react-icons/gr";
const SearchBox = () => {
  return (
    <>
      <div className='search-click'>
        <span className='icon-search'><GrSearch/></span>
        <input type="text" class="form-control" placeholder="جستجو" />
      </div>
    </>
  )
}

export default SearchBox
