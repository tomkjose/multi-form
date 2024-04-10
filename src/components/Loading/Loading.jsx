import React from "react";
import styles from "./Loading.module.css";
function LoadingPage() {
  return (
    <div className="w-full h-screen flex  flex-col justify-center items-center">
      <div className={styles.loader}></div>
      <p className="font-bold w-full px-2 mx-auto pt-6 text-lg text-center sm:w-1/2">
        Finding learning path recommendations for you based on your responses
      </p>
    </div>
  );
}

export default LoadingPage;
