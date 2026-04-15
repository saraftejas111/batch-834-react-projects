import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

const Profile = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <h2>Profile - {theme} mode</h2>
    </div>
  );
}

export default Profile;