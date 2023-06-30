import React, { useState } from 'react';

import { Modal } from '../../Modal'
import { Input } from '../../Input'
import { EditConversionRate } from './ConversionChange.styled';

export const ConversionChange = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalAccept = () => {
    setIsModalOpen(false);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen &&
        <Modal onAccept={handleModalAccept} onCancel={handleModalCancel}>
          <Input
            value=""
            name="newConversionRate"
            label="Enter new conversion rate"
            type="number"
            handleChange={(e) => console.log(e.target.value)}
          />
        </Modal>
      }
      <EditConversionRate onClick={() => setIsModalOpen(true)}>
        Change conversion rate?
      </EditConversionRate>
    </>
  )
}
