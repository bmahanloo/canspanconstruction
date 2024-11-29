import "./ContactPage.css";

import northvan from "../../assets/NorthVan.jpg";

const ContactPage: React.FC = () => {
  return (
    <div>
      <img src={northvan} className="home-page-image" />
      <form name="contact" method="POST" data-netlify="true">
        <input
          type="hidden"
          name="subject"
          value="Customer Message from Canspan Website"
        />
        <p>
          <label>
            Your Name
            <br /> <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email
            <br /> <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Phone
            <br /> <input type="number" name="number" />
          </label>
        </p>
        <p>
          <label>
            Message
            <br /> <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
};

export default ContactPage;
