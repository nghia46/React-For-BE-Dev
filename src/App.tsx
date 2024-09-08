import Card from "./assets/components/Card";
import NavBar from "./assets/components/NavBar";
function App() {
  return (
    <>
        <NavBar />
        <Card title="Jonh Doe" description="This is a paragraph" imageSrc="https://placehold.co/600x400.png" />
        <Card title="Mary Doe" description="This is a paragraph" imageSrc="https://placehold.co/600x400.png" />
    </>
  );
}

export default App;
