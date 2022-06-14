import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserListWrapper } from './pages/UserList/UserListWrapper';
import { UserAlbumsWrapper } from './pages/UserAlbums/UserAlbumsWrapper';
import { AlbumPhotos } from './pages/AlbumPhotos/AlbumPhotos';
import './components/table.css';

function App() {
  return (
	  <Routes>
          <Route path="/" element={ <UserListWrapper />} />
		  <Route path="/user/:userId/albums" element={ <UserAlbumsWrapper />}/>
          <Route path="/user/:userId/albums/:albumId" element={ <AlbumPhotos />}/>
	  </Routes>
  );
}

export default App;
