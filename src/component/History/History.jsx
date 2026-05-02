import React, { useState, useEffect, useContext } from 'react';
import styles from './History.module.css';
import Skeleton from '@mui/material/Skeleton';
import WithAuthHOC from '../../utils/HOC/withAuthHOC';
import { AuthContext } from '../../utils/AuthContext';

const History = () => {

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  const { userInfo } = useContext(AuthContext);

  useEffect(() => {

    // MOCK DATA (frontend only)
    setTimeout(() => {
      setData([
        {
          _id: 1,
          score: 85,
          resume_name: "Frontend_Resume.pdf",
          feedback: "Good match with React skills",
          createdAt: "2026-05-01"
        },
        {
          _id: 2,
          score: 72,
          resume_name: "Backend_Resume.pdf",
          feedback: "Needs stronger API experience",
          createdAt: "2026-04-28"
        }
      ]);

      setLoader(false);
    }, 1200);

  }, []);

  return (
    <div className={styles.History}>

      <div className={styles.header}>
        <h1>Analysis History</h1>
        <p>Your previous resume evaluations</p>
      </div>

      <div className={styles.cardBlock}>

        {loader && (
          <>
            <Skeleton variant="rectangular" width={260} height={180} />
            <Skeleton variant="rectangular" width={260} height={180} />
            <Skeleton variant="rectangular" width={260} height={180} />
          </>
        )}

        {!loader && data.map((item) => (
          <div key={item._id} className={styles.card}>

            <div className={styles.score}>
              {item.score}%
            </div>

            <h3>{item.resume_name}</h3>
            <p>{item.feedback}</p>

            <span>{item.createdAt}</span>

          </div>
        ))}

      </div>

    </div>
  );
};

export default WithAuthHOC(History);