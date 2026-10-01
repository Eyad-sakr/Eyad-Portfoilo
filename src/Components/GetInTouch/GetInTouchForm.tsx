import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"
import { GetInTouchSehema } from "./GetInTouchSehema"
import { useState } from "react"
import type z from "zod"

function GetInTouchForm() {
  const { t } = useTranslation()
  type FormTypes = z.infer<typeof GetInTouchSehema>

  const [result, setResult] = useState("")
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null)

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormTypes>({
    resolver: zodResolver(GetInTouchSehema),
  })

  const onSubmit = async (data: FormTypes) => {
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("email", data.email)
    formData.append("message", data.message)
    formData.append("access_key", "01fbb442-ec46-47cc-84e8-12c69b4ae832")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const result = await response.json()
    setIsSuccess(result.success)
    setResult(result.success ? t('contact.form.successMessage') : t('contact.form.errorMessage'))
    if (result.success) {
      reset()
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">{t('contact.form.nameLabel')}</label>
          <input
            id="name"
            {...register('name')}
            type="text"
            placeholder={t('contact.form.namePlaceholder')}
            autoComplete="name"
            required
          />
          <p>{errors.name?.message}</p>
        </div>

        <div className="form-group">
          <label htmlFor="email">{t('contact.form.emailLabel')}</label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder={t('contact.form.emailPlaceholder')}
            autoComplete="email"
            required
          />
          <p>{errors.email?.message}</p>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message">{t('contact.form.messageLabel')}</label>
        <textarea
          id="message"
          placeholder={t('contact.form.messagePlaceholder')}
          {...register("message")}
          rows={5}
          required
        />
        <p>{errors.message?.message}</p>
      </div>

      {result && (
        <div className={`Result ${isSuccess ? "succes" : "Failed"}`}>
          {result}
        </div>
      )}

      <button type="submit" className="btn-send">
        <span>{t('contact.form.sendButton')}</span>
        <ArrowRight size={18} strokeWidth={2} className="btn-send-icon" />
      </button>
    </form>
  )
}

export default GetInTouchForm