import React from 'react';
import user from "../images/user.png";

export default function ContactList(props) {
    const renderContactList = props.contact?.map((contact) => {
        return (
            <div className="item" key={contact.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img className="ui avatar image" src={user} alt="user" style={{ marginRight: '10px' }} />
                    <div className="content">
                        <div className="header">{contact.name}</div>
                        <div>{contact.email}</div>
                    </div>
                </div>
                <i
                    className="trash alternate outline icon"
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => props.deleteContactHandler(contact.id)}></i>
            </div>
        );
    });

    return <div className="ui celled list">{renderContactList}</div>;
}
