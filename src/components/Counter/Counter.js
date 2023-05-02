import { useState, useEffect } from 'react';
import styles from './Counter.module.css';

export default function Counter2() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA(state => state + 1); //state = prevState
  };

  const handleCounterBIncrement = () => {
    setCounterB(state => state + 1);
  };

  useEffect(() => {
    const totalClicks = counterA + counterB;
    document.title = `Total clicks is ${totalClicks} times`;
  }, [counterA, counterB]);

  return (
    <>
      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterAIncrement}
      >
        Click on counter A {counterA} times
      </button>
      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterBIncrement}
      >
        Click on counter B {counterB} times
      </button>
    </>
  );
}
