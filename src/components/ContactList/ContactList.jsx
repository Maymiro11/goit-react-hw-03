import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contactList, deletingContact, setter }) => {
    return (
      <div className={css.list}>
        {contactList.length === 0 ? (
          <p className={css.noContacts}>No contacts available</p>
        ) : (
          <ul className={css.list}>
            {contactList.map(contact => {
              return (
                <li key={contact.id}>
                  <Contact
                    contact={contact}
                    deletingContact={deletingContact}
                    setter={setter}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  };

export default ContactList;