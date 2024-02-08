import { createAsyncThunk } from '@reduxjs/toolkit';

export const registerUser = createAsyncThunk(
  'userInfo/register',
  //async
  async () => {
    try {
      const data = localStorage.length;
      console.log(data);

      //await
      const response = await fetch('/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Нет ответа сети');
      }
      //await
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  },
);
