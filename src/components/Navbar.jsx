import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
// import { useSelector } from 'react-redux';

export default function Navbar() {
    // const searchMovie = useSelector((state) => state.movie.search)
    // const [search, setSearch] = useState(false)
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        })
        return () => {
            window.removeEventListener('scroll', null)
        }
    }, [])

    const Search = styled('div')(({ theme }) => ({
        color: '#fff',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.50),
          transition: 'all 1s'
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('xl')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));

    //   const handleChange = (e) => {
    //       const query = e.target.value
    //       console.log(query);
    //       setSearch(true)
    //   }

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img
                className='nav__logo'
                // src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                src="https://fontmeme.com/permalink/210927/003195ebfb9afbeb6d250e64b16dd2a8.png"
                alt='Netflix Logo' />
            <div className="nav__menu">
            <Link className='menu' to='/'>
                MOVIES
            </Link>
            <Link className='menu' to='/favorite'>
                FAVORITE
            </Link>
                    <Search>
                        <SearchIconWrapper >
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            // onChange={handleChange}
                            placeholder="Search…"
                            // inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
            </div>
        </div>
    )
}


