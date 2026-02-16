import { useState } from "react";

function SmartCounter() {
  const MIN = 0;
  const MAX = 10;

  const [count, setCount] = useState(5);

  const getStatus = () => {
    if (count === MIN) return "🚫 Minimum limit reached";
    if (count === MAX) return "⚠️ Maximum limit reached";
    return "Counter is active";
  };

  const getBgColor = () => {
    if (count === MIN) return "#ffe6e6";
    if (count === MAX) return "#fff3cd";
    return "#e6fffa";
  };

  return (
    <div style={{ ...styles.container, backgroundColor: getBgColor() }}>
      <h1>Smart Counter</h1>

      <div style={styles.countBox}>{count}</div>

      <p style={styles.status}>{getStatus()}</p>

      <div style={styles.buttonGroup}>
        <button
          onClick={() => setCount(count + 1)}
          disabled={count === MAX}
          style={styles.button}
        >
          ➕ Add
        </button>

        <button
          onClick={() => setCount(count - 1)}
          disabled={count === MIN}
          style={styles.button}
        >
          ➖ Subtract
        </button>

        <button
          onClick={() => setCount(5)}
          style={{ ...styles.button, backgroundColor: "#ff9800" }}
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
}

/* Styles */
const styles = {
  container: {
    textAlign: "center",
    margin: "60px auto",
    width: "320px",
    padding: "25px",
    borderRadius: "12px",
    fontFamily: "Segoe UI",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
  },
  countBox: {
    fontSize: "48px",
    fontWeight: "bold",
    margin: "20px 0"
  },
  status: {
    fontSize: "16px",
    marginBottom: "15px"
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between"
  },
  button: {
    padding: "10px 14px",
    fontSize: "15px",
    borderRadius: "6px",
    cursor: "pointer",
    border: "none",
    backgroundColor: "#2196f3",
    color: "white"
  }
};

export default SmartCounter;
