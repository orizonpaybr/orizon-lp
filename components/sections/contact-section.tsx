'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { Container } from '../ui/container'
import { Section } from '../ui/section'
import { Input } from '../ui/input'
import { Select } from '../ui/select'
import { IMaskInput } from 'react-imask'
import { Textarea } from '../ui/textarea'
import { Checkbox } from '../ui/checkbox'
import { Button } from '../ui/button'
import { contactFormSchema, ContactFormValues } from '@/lib/validations'
import { submitContactForm } from '@/app/actions/contact'

const volumeOptions = [
  { value: '', label: 'Selecione' },
  { value: 'up-to-10k', label: 'Até R$10.0000 Por mês' },
  { value: '10k-50k', label: 'R$10.000 - R$50.000 Por mês' },
  { value: '50k-100k', label: 'R$50.000 - R$100.000 Por mês' },
  { value: '100k-500k', label: 'R$100.000 - R$500.000 Por mês' },
  { value: 'above-500k', label: 'Acima de R$500.000 Por mês' },
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    trigger,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)

    try {
      const result = await submitContactForm(data)

      if (result.success) {
        console.log('Email enviado com sucesso:', result)
        toast.success(
          'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        )
        reset()
      } else {
        toast.error(result.error || 'Erro ao enviar mensagem. Tente novamente.')
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      toast.error('Erro ao enviar mensagem. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section
      id="contato"
      className="py-10 md:py-20 bg-background relative overflow-hidden"
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start min-h-[500px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center p-8 max-w-md ml-8 md:ml-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pronto para vender mais e receber mais rápido?
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Fale com um especialista agora e revolucione seus pagamentos!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-surface border border-border rounded-2xl shadow-xl p-6 h-fit"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-muted-foreground mb-2"
                  >
                    Nome <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="firstName"
                    {...register('firstName')}
                    placeholder="Nome"
                    error={errors.firstName?.message}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-muted-foreground mb-2"
                  >
                    Sobrenome <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="lastName"
                    {...register('lastName')}
                    placeholder="Sobrenome"
                    error={errors.lastName?.message}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  {...register('email')}
                  type="email"
                  placeholder="Email"
                  error={errors.email?.message}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  DDD + Telefone <span className="text-red-500">*</span>
                </label>
                <div className="w-full">
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <IMaskInput
                        mask="(00) 00000-0000"
                        unmask={false}
                        {...field}
                        id="phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        autoComplete="tel"
                        onAccept={(value) => {
                          field.onChange(value)
                          // Trigger validação após atualizar o valor (captura autocomplete também)
                          setTimeout(() => {
                            trigger('phone')
                          }, 0)
                        }}
                        onBlur={(e) => {
                          field.onBlur()
                          // Força validação ao perder o foco (importante para autocomplete do navegador)
                          setTimeout(() => {
                            trigger('phone')
                          }, 100)
                        }}
                        className={`
                          w-full px-4 py-3 border rounded-md bg-surface text-foreground placeholder:text-muted
                          focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                          transition-all duration-200
                          ${errors.phone ? 'border-red-500' : 'border-border'}
                        `}
                      />
                    )}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Empresa <span className="text-red-500">*</span>
                </label>
                <Input
                  id="company"
                  {...register('company')}
                  placeholder="Empresa"
                  error={errors.company?.message}
                />
              </div>

              <div>
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Site da Empresa <span className="text-red-500">*</span>
                </label>
                <Input
                  id="website"
                  {...register('website')}
                  type="url"
                  placeholder="Site da Empresa"
                  error={errors.website?.message}
                />
              </div>

              <div>
                <label
                  htmlFor="volume"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Quantidade de Processamento (Volumetria de transações){' '}
                  <span className="text-red-500">*</span>
                </label>
                <Select
                  id="volume"
                  {...register('volume')}
                  options={volumeOptions}
                  error={errors.volume?.message}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Como Podemos Ajudar? <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  {...register('message')}
                  rows={4}
                  placeholder="Como Podemos Ajudar?"
                  error={errors.message?.message}
                />
              </div>

              <Checkbox
                id="acceptTerms"
                {...register('acceptTerms')}
                label={
                  <span>
                    Li e Aceito os Termos de Uso e Política de Privacidade
                  </span>
                }
                error={errors.acceptTerms?.message}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'ENVIANDO...' : 'ENVIAR'}
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
