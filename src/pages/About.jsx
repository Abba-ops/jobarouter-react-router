import { useState } from "react";
import { Navigate } from "react-router-dom";

const About = () => {
  const [user, setUser] = useState("Jadesola");

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis a
        aliquid provident temporibus, est eos saepe labore consequatur,
        blanditiis perspiciatis molestiae exercitationem ducimus itaque
        laudantium sint voluptates unde dolores excepturi.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod eos autem
        cum earum laborum quam? Earum neque repellendus aliquid! Incidunt unde
        expedita, harum dolorum vel quis rem repellendus! Accusantium, ipsum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis
        velit magnam. Doloribus incidunt laborum fuga autem? Aperiam voluptatem
        aliquam necessitatibus dignissimos illum, cupiditate omnis enim debitis
        laudantium ullam odio.
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
};

export default About;
