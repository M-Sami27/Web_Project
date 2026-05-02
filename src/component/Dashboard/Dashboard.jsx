import React, { useState, useContext } from "react";
import styles from "./Dashboard.module.css";
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import Skeleton from '@mui/material/Skeleton';
import WithAuthHOC from '../../utils/HOC/withAuthHOC';
import { AuthContext } from '../../utils/AuthContext';

const Dashboard = () => {

    const [fileName, setFileName] = useState("Upload resume");
    const [loading, setLoading] = useState(false);
    const [jobDesc, setJobDesc] = useState("");
    const [result, setResult] = useState(null);

    const { userInfo } = useContext(AuthContext);

    const handleFile = (e) => {
        const file = e.target.files[0];
        setFileName(file?.name || "Upload resume");
    };

    const handleAnalyze = () => {
        setLoading(true);

        setTimeout(() => {
            setResult({
                score: "85%",
                message: "Good Match",
            });
            setLoading(false);
        }, 1200);
    };

    return (
        <div className={styles.Dashboard}>

            {/* LEFT */}
            <div className={styles.Left}>

                <div className={styles.header}>
                    <h1>Smart Resume Screening</h1>
                    <p>Upload resume and compare with job description using AI</p>
                </div>

                <div className={styles.card}>
                    <input type="file" onChange={handleFile} />
                    <span className={styles.file}>{fileName}</span>
                </div>

                <div className={styles.card}>
                    <textarea
                        value={jobDesc}
                        onChange={(e) => setJobDesc(e.target.value)}
                        placeholder="Paste job description..."
                        className={styles.textarea}
                    />

                    <button onClick={handleAnalyze} className={styles.btn}>
                        <CreditScoreIcon />
                        Analyze
                    </button>
                </div>

            </div>

            {/* RIGHT */}
            <div className={styles.Right}>

                <div className={styles.profile}>
                    <img src={userInfo?.photoUrl} />
                    <h3>{userInfo?.name || "User"}</h3>
                    <p>AI Resume Analyzer</p>
                </div>

                {loading && (
                    <Skeleton variant="rectangular" width={260} height={180} />
                )}

                {result && !loading && (
                    <div className={styles.result}>
                        <h2>{result.score}</h2>
                        <p>{result.message}</p>
                    </div>
                )}

                {!result && !loading && (
                    <div className={styles.empty}>
                        <p>Run analysis to see result</p>
                    </div>
                )}

            </div>

        </div>
    );
};

export default WithAuthHOC(Dashboard);