import React, { useState } from 'react';
import {
  Button,
  Form,
  List,
  ListItem,
  Title,
  Wrapper,
} from './Phonebook.styled';
import { nanoid } from 'nanoid';

const listOfContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function Phonebook() {
  const [state, setState] = useState({
    contacts: listOfContacts,
    name: '',
    number: '',
    filter: '',
  });
  const [wrongPhone, setWrongPhone] = useState(false);
  const [existing, setExisting] = useState(false);

  const isDisabled = !state.name || !state.number || wrongPhone;
  const phonePattern =
    /^\+?\d{1,4}?[-.\s]?(\(?\d{1,3}?\)?[-.\s]?)*\d{1,4}[-.\s]?\d{1,9}$/;
  let visibleItems = state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase())
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (!phonePattern.test(state.number)) {
      setWrongPhone(true);
      return;
    }
    setWrongPhone(false);

    if (
      state.contacts.some(contact => {
        return (
          contact.name.toLowerCase() === state.name.trim() ||
          contact.number === state.number.trim()
        );
      })
    ) {
      setExisting(true);
      return;
    }
    setExisting(false);

    setState(prev => ({
      contacts: [
        ...prev.contacts,
        { name: prev.name.trim(), number: prev.number.trim(), id: nanoid() },
      ],
      name: '',
      number: '',
      filter: '',
    }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  }

  function handleDelete(id) {
    setState(prev => ({
      ...prev,
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  }

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter the name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={state.name || ''}
          onChange={handleChange}
          autoComplete="off"
        />
        <label htmlFor="number">Enter phone number</label>
        <input
          type="tel"
          name="number"
          id="number"
          value={state.number || ''}
          onChange={handleChange}
          autoComplete="off"
        />
        {wrongPhone && (
          <p style={{ color: 'red', fontSize: '12px', textAlign: 'center' }}>
            Please enter a valid phone number! (+380123123123, +38 (123) 123 12
            34, +1 (234) 567-8901, 0501234567)
          </p>
        )}
        {existing && (
          <p style={{ color: 'red', fontSize: '12px', textAlign: 'center' }}>
            Contact is already existing
          </p>
        )}
        <Button type="submit" disabled={isDisabled}>
          Add
        </Button>
      </Form>
      <Form>
        <label htmlFor="filter">Find contact by name</label>
        <input
          type="text"
          name="filter"
          id="filter"
          value={state.filter}
          autoComplete="off"
          onChange={e => {
            setState(prev => ({ ...prev, filter: e.target.value }));
          }}
        />
      </Form>

      {visibleItems.length > 0 ? (
        <List>
          {visibleItems.map(el => (
            <ListItem key={el.id}>
              {`${el.name}: ${el.number}`}
              <Button
                type="button"
                onClick={() => {
                  handleDelete(el.id);
                }}
              >
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
      ) : (
        <p>We didn't find any persons</p>
      )}
    </Wrapper>
  );
}

export default Phonebook;
