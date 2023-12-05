import { ErrorMessage } from '@hookform/error-message'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button, Title } from '~/components'

import styles from './index.module.scss'

const URL =
  'https://portfolio-back-6xiy-git-main-luvuitton.vercel.app/sendMessage'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputsForm>()

  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const isSuccessHandler = () => {
    setIsSuccess(true)
    setTimeout(() => {
      setIsSuccess(false)
    }, 2500)
  }

  const onSubmit = async (formData) => {
    setIsLoading(true)
    try {
      const response = await fetch(URL, {
        method: 'POST',
        body: formData,
      })

      isSuccessHandler()
      reset()
    } catch (error) {
    } finally {
      setIsLoading(false)
    }

    // const data = await response.json()
  }

  return (
    <>
      <div className={styles.container}>
        <div
          className={
            isSuccess
              ? `${styles.animatedBlock} ${styles.visible}`
              : styles.animatedBlock
          }
        >
          contacts sent successfully
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className={
            isSuccess
              ? `${styles.mainWrapper} ${styles.success}`
              : styles.mainWrapper
          }
        >
          <Title type="small">Contact me</Title>
          <div className={styles.fieldWrapper}>
            <input
              type="text"
              placeholder="Fullname"
              {...register('Fullname', {
                required: 'Please fill out the Fullname',
                maxLength: 200,
              })}
              className={
                errors.Fullname
                  ? `${styles.formInput} ${styles.redBorder}`
                  : styles.formInput
              }
            />
            <div className={styles.error}>
              <ErrorMessage errors={errors} name="Fullname" />
            </div>
          </div>

          <div className={styles.fieldWrapper}>
            <input
              type="email"
              placeholder="Email"
              {...register('email', {
                required: 'Please fill out the email',
                min: 3,
                maxLength: 100,
              })}
              className={
                errors.email
                  ? `${styles.formInput} ${styles.redBorder}`
                  : styles.formInput
              }
            />
            <div className={styles.error}>
              <ErrorMessage errors={errors} name="email" />
            </div>
          </div>
          <div className={styles.fieldWrapper}>
            <textarea
              placeholder="Message"
              {...register('Message', { min: 5, maxLength: 1000 })}
              className={
                errors.Message
                  ? `${styles.formInput} ${styles.redBorder}`
                  : styles.formInput
              }
            />
            <div className={styles.error}>
              <ErrorMessage errors={errors} name="Message" />
            </div>
          </div>

          <div className={styles.fieldWrapper}>
            <input
              type="url"
              placeholder="your website"
              {...register('website', { min: 3, maxLength: 200 })}
              className={
                errors['website']
                  ? `${styles.formInput} ${styles.redBorder}`
                  : styles.formInput
              }
            />
            <div className={styles.error}>
              <ErrorMessage errors={errors} name="website" />
            </div>
          </div>

          <Button type="submit" disabled={isLoading}>
            {isSuccess ? 'success!' : 'send'}
          </Button>
        </div>
      </form>
    </>
  )
}

type InputsForm = {
  email: string
  Fullname: string
  Message: string
  website: string
}
