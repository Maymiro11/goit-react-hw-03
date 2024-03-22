import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

const Contact = ({
  contact: { id, name, phone },
  deletingContact,
  setter,
}) => {
  return (
    <div className={css.contact}>
        <div>
        <div className={css.contactInfo}>
            <FaUser className={css.contactIcon} />
            <h2 className={css.name}>{name}</h2>
        </div>
    
        <div className={css.contactInfo}>
            <FaPhone className={css.contactIcon} />
            <p className={css.phone}>{phone}</p>
        </div>
        </div>
        
        <button
        className={css.button}
        type="button"
        onClick={() => {
          deletingContact(id);
          setter('');
        }}
      >
        <MdDeleteForever className={css.icon} />
      </button>
    </div>
  );
};

export default Contact;
