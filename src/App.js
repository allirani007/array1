import "./styles.css";

export default function App() {
  const student = [
    {
      name: "bina",
      src:
        "https://cdn.britannica.com/41/172741-138-647B3D53/overview-Bill-Clinton.jpg?w=800&h=450&c=crop"
    },
    {
      name: "james",
      src:
        "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/o98sv9ffcf1r7jqb_1607479314.jpeg"
    }
  ];
  return (
    <div className="App">
      <h1>Hello welcome array method</h1>

      {/* {student.map((nm1) => (
        <Welcome
          name="arvind"
          src="https://cdn.britannica.com/41/172741-138-647B3D53/overview-Bill-Clinton.jpg?w=800&h=450&c=crop"
      />))} */}
      {student.map((nm1) => (
        <Msg name={nm1.name} />
      ))}
      {student.map((nm1) => (
        <Welcome src={nm1.src} name={nm1.name} />
      ))}
    </div>
  );
}
function Msg({ name }) {
  //const name = "arvid";
  return (
    <div className="welcome">
      <h1> hi {name}🕊️💕</h1>
    </div>
  );
}
function Welcome({ name, src }) {
  return (
    <div className="well">
      <h1>
        {" "}
        <span>🐤🐦🦜🦤</span>My Heros : {name}{" "}
      </h1>
      <img className="user-pic" src={src} alt="hero of myself" />
    </div>
  );
}
