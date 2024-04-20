//Contact.jsx
import css from "./Contact.module.css";
import avatar from "./png/name.png";
import avatar2 from "./png/phone.png";

function Contact({ id, name, number, onDelete }) {
  return (
    <div className={css.contacts}>
      <div className={css.sectionContainer}>
      <div className={css.section}>
        <img src={avatar} alt="Avatar" className={css.avatar} />
        <p className={css.contactInfo}>{name}</p>
      </div>
      <div className={css.section}>
        <img src={avatar2} alt="Avatar" className={css.avatar} />
        <p className={css.contactInfo}>{number}</p>
      </div>
      </div>
      <button className={css.contactsDelete} onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default Contact;
