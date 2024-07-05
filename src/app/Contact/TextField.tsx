import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

export const TextField = (props: { label: any; }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={props.label}
      control={control}
      defaultValue=""
      rules={{
        required: { value: true, message: 'input required' }
      }}
      render={({ field, formState: { errors } }) => (
        <TextField
          {...field}
          label={props.label}
          fullWidth
          placeholder={props.label}
          error={errors.text ? true : false}
          helperText={errors.text?.message as string}
        />
      )}
    />
  )
}
