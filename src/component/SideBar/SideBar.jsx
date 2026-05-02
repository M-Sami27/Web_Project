import React from 'react';
import styles from './SideBar.module.css';

import ArticleIcon from '@mui/icons-material/Article';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
  const location = useLocation();

  return (
    <div className={styles.sideBar}>

      {/* Header */}
      <div className={styles.sideBarIcon}>
        <ArticleIcon />
        <div>Resume Screening</div>
      </div>

      {/* Menu Options */}
      <Link to="/dashboard" className={styles.link}>
        <div
          className={[
            styles.sideBarOption,
            location.pathname === "/dashboard" ? styles.selectedOption : ""
          ].join(" ")}
        >
          <DashboardIcon sx={{ fontSize: 22 }} />
          <div>Dashboard</div>
        </div>
      </Link>

      <Link to="/history" className={styles.link}>
        <div
          className={[
            styles.sideBarOption,
            location.pathname === "/history" ? styles.selectedOption : ""
          ].join(" ")}
        >
          <ManageSearchIcon sx={{ fontSize: 22 }} />
          <div>History</div>
        </div>
      </Link>

      <Link to="/admin" className={styles.link}>
        <div
          className={[
            styles.sideBarOption,
            location.pathname === "/admin" ? styles.selectedOption : ""
          ].join(" ")}
        >
          <AdminPanelSettingsIcon sx={{ fontSize: 22 }} />
          <div>Admin</div>
        </div>
      </Link>

      {/* Logout (no route usually) */}
      <div
        className={styles.sideBarOption}
        onClick={() => {
          console.log("Logout clicked");
          // add logout logic here
        }}
      >
        <LogoutIcon sx={{ fontSize: 22 }} />
        <div>Logout</div>
      </div>

    </div>
  );
};

export default SideBar;