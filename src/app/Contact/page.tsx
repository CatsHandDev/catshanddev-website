'use client'
import React, { ChangeEvent, useState } from 'react'
import globalStyles from '../page.module.css'
import styles from './contact.module.scss';
import { TextField, Button, Box, Typography } from '@mui/material';
import { Controller, FormProvider, useForm, UseFormWatch } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const Page = () => {
  const methods = useForm<FormValues>({});
  const { register, handleSubmit, formState: { errors }, reset, watch } = methods;
  const [isConfirm, setIsConfirm] = useState(false);
  const watchAllFields = watch();

  type FormValues = {
    name: string;
    email: string;
    message: string;
  };

  const onSubmit = async (data: FormValues) => {
    if (isConfirm) {
      try {
        const response = await fetch('/api/sendMail', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        reset();
        setIsConfirm(false);
      } catch (error) {
        console.error('メールの送信に失敗しました:', error);
      }
    } else {
      setIsConfirm(true);
    }
  };

  return (
    <div className={globalStyles.main}>
      <h1 className={globalStyles.h1}>Contact</h1>
      <div className={styles.inputContainer}>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            {!isConfirm ? (
              <div className={styles.textFieldContainer}>
                <TextField
                  className={styles.textfield}
                  label='name'
                  variant='standard'
                  {...register('name', { required: 'name is require' })}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
                <TextField
                  className={styles.textfield}
                  label='email'
                  variant='standard'
                  {...register('email', {
                    required: 'email address is require',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address',
                    },
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
                <TextField
                  className={styles.textfield}
                  label='message'
                  variant='standard'
                  multiline
                  rows={6}
                  {...register('message', { required: 'message is require' })}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                />
                <Button
                  className={styles.button}
                  type='submit'
                  variant='contained'
                  color='primary'
                >
                  Confirm
                </Button>
              </div>
            ) : (
              <div className={styles.textFieldContainer}>
                <Typography
                  className={styles.confirmTitle}
                  variant='h6'
                >Confirm input contents
                </Typography>
                <Box>
                  <Typography className={styles.textfield}>
                    <label className={styles.label}>Name :</label>
                    <br />
                    <label className={styles.text}>{watchAllFields.name}</label>
                  </Typography>
                  <br />
                  <Typography className={styles.textfield}>
                    <label className={styles.label}>Email Address :</label>
                    <br />
                    <label className={styles.text}>{watchAllFields.email}</label>
                  </Typography>
                  <br />
                  <Typography className={styles.textfield}>
                    <label className={styles.label}>Message :</label>
                    <br />
                    <label className={styles.text}>{watchAllFields.message}</label>
                  </Typography>
                </Box>
                <Button
                  className={styles.button}
                  type='submit'
                  variant='contained'
                  color='primary'
                >
                  Submit
                </Button>
              </div>
            )}
          </form>
        </Box>
      </div>
    </div>
  )
}

export default Page