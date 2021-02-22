import React from "react";

class RandomCat extends React.Component {
  render() {
    const students = [
      {
        promo: "A",
        name: "Sofía",
        age: 20,
      },
      {
        promo: "B",
        name: "María",
        age: 21,
      },
      {
        promo: "A",
        name: "Lucía",
        age: 22,
      },
    ];
    let promAStudents = students.filter((student) => {
      return student.promo === "A";
    });
    return (
      <div>
        <h1>Pintar listados con React:</h1>
        {promAStudents.map((student) => {
          return (
            <li>
              <h2>Nombre: {student.name}</h2>
              <p>Edad: {student.age}</p>
            </li>
          );
        })}
      </div>
    );
  }
}

export default RandomCat;
