import Style from "./OurStory.module.scss";
import story from "../../Assets/Img/story.jpg";
const OurStory = () => {
  return (
    <div className="container">
      <div className={Style.wrap}>
        <img src={story} alt="" />
        <h1>Our Story</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum saepe
          vel deserunt nulla nisi veritatis illo, soluta mollitia! Nesciunt
          minus dolore doloremque atque incidunt quasi et eos, alias expedita
          quidem! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Harum saepe vel deserunt nulla nisi veritatis illo, soluta mollitia!
          Nesciunt minus dolore doloremque atque incidunt quasi et eos, alias
          expedita quidem! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Harum saepe vel deserunt nulla nisi veritatis illo, soluta
          mollitia! Nesciunt minus dolore doloremque atque incidunt quasi et
          eos, alias expedita quidem! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Harum saepe vel deserunt nulla nisi veritatis illo,
          soluta mollitia! Nesciunt minus dolore doloremque atque incidunt quasi
          et eos, alias expedita quidem! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Harum saepe vel deserunt nulla nisi veritatis illo,
          soluta mollitia! Nesciunt minus dolore doloremque atque incidunt quasi
          et eos, alias expedita quidem! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Harum saepe vel deserunt nulla nisi veritatis illo,
          soluta mollitia! Nesciunt minus dolore doloremque atque incidunt quasi
          et eos, alias expedita quidem! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Harum saepe vel deserunt nulla nisi veritatis illo,
          soluta mollitia! Nesciunt minus dolore doloremque atque incidunt quasi
          et eos, alias expedita quidem! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Harum saepe vel deserunt nulla nisi veritatis illo,
          soluta mollitia! Nesciunt minus dolore doloremque atque incidunt quasi
          et eos, alias expedita quidem! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Harum saepe vel deserunt nulla nisi veritatis illo,
          soluta mollitia! Nesciunt minus dolore doloremque atque incidunt quasi
          et eos, alias expedita quidem!
        </p>
        <div className={Style.about}>
          <h5>24a, 28 may street, Baku, Azerbaijan </h5>
          <a href="mailto: abc@example.com">abc@example.com</a>
          <a href="tel:555-666-7777">555-666-7777</a>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
