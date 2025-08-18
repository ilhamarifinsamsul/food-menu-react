import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Warteg Berkah</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Menu</h2>
      <Food />
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 10;
  const jamTutup = 22;

  return (
    <footer>
      @{new Date().getFullYear()} Warteg Berkah | jam buka {jamBuka} - jam tutup{" "}
      {jamTutup} | Status:{" "}
      {hour >= jamBuka && hour < jamTutup ? "Buka" : "Tutup"}
    </footer>
  );
}

function Food() {
  return (
    <div>
      <img
        src="food/nasi-goreng.jpg"
        alt="Nasi Goreng"
        width={150}
        height={75}
      />
      <h2>Nasi Goreng</h2>
      <p>Delicious fried rice with a mix of vegetables and chicken.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
