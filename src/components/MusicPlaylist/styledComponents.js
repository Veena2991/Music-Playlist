import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
  font-family: 'Roboto';
`

export const ArtistBg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 450px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 100px;
`

export const ArtistName = styled.h1`
  font-size: 42px;
  color: #ffffff;
`

export const ArtistInfo = styled.p`
  font-size: 32px;
  color: #ffffff;
`

export const PlaylistContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  padding-top: 10px;
`

export const PlaylistHeading = styled.h1`
  font-size: 25px;
  color: #ffffff;
  font-weight: 400;
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #ffffff;
  background-color: transparent;
  padding: 5px;

  cursor: pointer;
`

export const SearchInput = styled.input`
  color: #cbd5e1;
  background-color: transparent;
  outline: none;
  border: none;
`
export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const NoSongsText = styled.p`
  font-size: 45px;
  color: #ffffff;
  font-weight: 500;
`
export const MusicList = styled.ul`
  margin: 0px;
  padding-left: 50px;
  padding-right: 50px;
  list-style-type: none;
`
