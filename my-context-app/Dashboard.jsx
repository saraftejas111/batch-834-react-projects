import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

const Dashboard = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <h2>Dashboard - {theme} mode</h2>
    </div>
  );
}

export default Dashboard;