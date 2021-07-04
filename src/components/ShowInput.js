import React from "react";
export default function ShowInput({ list }) {
  return (
    <section className="ShowInput">
      {React.Children.toArray(
        list.map((element) => {
          return (
            <DataCard name={element.username} feedback={element.userfeedback} />
          );
        })
      )}
    </section>
  );

  function DataCard({ name, feedback }) {
    return (
      <div className="DataCard">
        <kbd>{name}</kbd>
        <p>{feedback}</p>
      </div>
    );
  }
}
