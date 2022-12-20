import React, { FormEvent } from 'react';

interface AddressFormProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ handleSubmit }) => {

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label htmlFor="stret">
        Street:
      </label>
      <input
          type="text"
          name="street"
        />
      <label htmlFor='city'>
        City:
      </label>
      <input
          type="text"
          name="city"
        />
      <label htmlFor='state'>
        State:
      </label>
      <input
          type="text"
          name="state"
        />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddressForm;
