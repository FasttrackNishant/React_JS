import React from 'react';
import ContactSingle from './ContactSingle';

const ContactsList = (props) => {

    const deleteContacts = (id) => {
        props.getContactId(id)
    }

    const showContactsList = props.contacts.map((contact) => {
        return (
           <ContactSingle contact={ contact } clickHandler={deleteContacts}/>
        )
    })
  return (
     <div className='contactlist-div'>
         {showContactsList}
     </div>
  );
};

export default ContactsList;
