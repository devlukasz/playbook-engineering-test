import React, { useState } from 'react';
import { Modal } from '../../Modal';
import { Input } from '../../Input';
import { EditConversionRate } from './ConversionChange.styled';
import { useStore } from '../../../hooks/useStore';

export const ConversionChange = () => {
  const { expensesStore } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newConversionRate, setNewConversionRate] = useState<string>('');

  const handleModalAccept = () => {
    const parsedRate = parseFloat(newConversionRate);

    if (!newConversionRate || parsedRate === 0) return

    if (!isNaN(parsedRate)) {
      expensesStore.changeConversionRate(parsedRate);
    }

    setNewConversionRate('');
    setIsModalOpen(false);
  };

  const handleModalCancel = () => {
    setNewConversionRate('');
    setIsModalOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const maxThreeDecimals = /^\d+(\.\d{0,3})?$/;

    if (value === '' || maxThreeDecimals.test(value)) {
      setNewConversionRate(value);
    }
  };

  return (
    <>
      {isModalOpen && (
        <Modal onAccept={handleModalAccept} onCancel={handleModalCancel}>
          <Input
            value={newConversionRate}
            name="newConversionRate"
            label="Enter new conversion rate"
            type="text"
            handleChange={handleChange}
          />
        </Modal>
      )}

      <EditConversionRate onClick={() => setIsModalOpen(true)}>
        Change conversion rate?
      </EditConversionRate>
    </>
  );
};
