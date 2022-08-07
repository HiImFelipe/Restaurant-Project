import "./styles.css";

export function HeaderLinks({ options }) {
  return (
    <main className="header-links-container">
      {options?.map((option) => {
        return <h3>{option}</h3>;
      })}
    </main>
  );
}
