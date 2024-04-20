// Contact.jsx
import css from "./Contact.module.css";
import avatar from "./png/name.png";
import avatar2 from "./png/phone.png";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const { name, number } = contact;

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
      <button className={css.contactsDelete} onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Contact;
