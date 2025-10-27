'use client';

import { useState, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { IMaskInput } from 'react-imask';
import Link from "next/link";
import { HiArrowLeft, HiPaperClip, HiCheck, HiX, HiDocumentText } from "react-icons/hi";

const ouvidoriaSchema = z.object({
  nomeCompleto: z.string().min(2, 'Nome completo deve ter pelo menos 2 caracteres'),
  cpf: z.string().min(14, 'CPF deve ter o formato 000.000.000-00'),
  email: z.string().email('Email inválido'),
  telefone: z.string().min(14, 'Telefone deve ter o formato (11) 99999-9999'),
  tipoManifestacao: z.string().min(1, 'Selecione o tipo de manifestação'),
  mensagem: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
  dataOcorrido: z.string().optional(),
  aceitarLGPD: z.boolean().refine(val => val === true, {
    message: 'Você deve aceitar o uso dos dados conforme LGPD'
  })
});

type OuvidoriaFormValues = z.infer<typeof ouvidoriaSchema>;

const tipoManifestacaoOptions = [
  { value: '', label: 'Selecione o tipo de manifestação' },
  { value: 'reclamacao', label: 'Reclamação' },
  { value: 'sugestao', label: 'Sugestão' },
  { value: 'elogio', label: 'Elogio' },
  { value: 'solicitacao', label: 'Solicitação' },
  { value: 'denuncia', label: 'Denúncia' }
];

export default function OuvidoriaPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<OuvidoriaFormValues>({
    resolver: zodResolver(ouvidoriaSchema),
  });

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter(file => {
      const maxSize = 5 * 1024 * 1024; // 5MB
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'text/plain'];
      
      if (file.size > maxSize) {
        toast.error(`Arquivo ${file.name} é muito grande. Máximo 5MB.`);
        return false;
      }
      
      if (!allowedTypes.includes(file.type)) {
        toast.error(`Tipo de arquivo ${file.name} não é suportado.`);
        return false;
      }
      
      return true;
    });
    
    setSelectedFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: OuvidoriaFormValues) => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      
      // Adicionar dados do formulário
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value.toString());
      });
      
      // Adicionar arquivos
      selectedFiles.forEach((file, index) => {
        formData.append(`anexo_${index}`, file);
      });

      const response = await fetch('/api/send-ouvidoria', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erro ao enviar manifestação');
      }

      console.log('Manifestação enviada com sucesso:', result);
      toast.success('Manifestação enviada com sucesso! Você receberá um número de protocolo em breve.');
      reset();
      setSelectedFiles([]);
    } catch (error) {
      console.error('Erro ao enviar manifestação:', error);
      toast.error('Erro ao enviar manifestação. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <Section className="bg-gray-light py-16 md:py-24">
        <Container>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors mb-8"
          >
            <HiArrowLeft size={20} />
            Voltar para o início
          </Link>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h1 className="text-3xl font-bold text-dark mb-4 text-center">
                Atendimento
              </h1>
              
              <p className="text-gray-700 mb-8 text-center">
                Por favor, preencha os campos abaixo antes de iniciar:
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Nome Completo */}
                <div>
                  <label htmlFor="nomeCompleto" className="block text-sm font-medium text-dark mb-2">
                    Nome Completo <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="nomeCompleto"
                    {...register('nomeCompleto')}
                    placeholder="Nome Completo"
                    error={errors.nomeCompleto?.message}
                  />
                </div>

                {/* CPF */}
                <div>
                  <label htmlFor="cpf" className="block text-sm font-medium text-dark mb-2">
                    CPF <span className="text-red-500">*</span>
                  </label>
                  <div className="w-full">
                    <Controller
                      name="cpf"
                      control={control}
                      render={({ field }) => (
                        <IMaskInput
                          mask="000.000.000-00"
                          unmask={false}
                          placeholder="000.000.000-00"
                          className={`
                            w-full px-4 py-3 border rounded-md bg-white
                            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                            transition-all duration-200
                            ${errors.cpf ? 'border-red-500' : 'border-gray-300'}
                          `}
                          {...field}
                        />
                      )}
                    />
                    {errors.cpf && (
                      <p className="mt-1 text-sm text-red-500">{errors.cpf.message}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
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

                {/* Telefone */}
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-dark mb-2">
                    DDD + Telefone <span className="text-red-500">*</span>
                  </label>
                  <div className="w-full">
                    <Controller
                      name="telefone"
                      control={control}
                      render={({ field }) => (
                        <IMaskInput
                          mask="(00) 00000-0000"
                          unmask={false}
                          placeholder="(11) 99999-9999"
                          className={`
                            w-full px-4 py-3 border rounded-md bg-white
                            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                            transition-all duration-200
                            ${errors.telefone ? 'border-red-500' : 'border-gray-300'}
                          `}
                          {...field}
                        />
                      )}
                    />
                    {errors.telefone && (
                      <p className="mt-1 text-sm text-red-500">{errors.telefone.message}</p>
                    )}
                  </div>
                </div>

                {/* Tipo de Manifestação */}
                <div>
                  <label htmlFor="tipoManifestacao" className="block text-sm font-medium text-dark mb-2">
                    Tipo de Manifestação <span className="text-red-500">*</span>
                  </label>
                  <Select
                    id="tipoManifestacao"
                    {...register('tipoManifestacao')}
                    options={tipoManifestacaoOptions}
                    error={errors.tipoManifestacao?.message}
                  />
                </div>

                {/* Mensagem */}
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-dark mb-2">
                    Mensagem <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="mensagem"
                    {...register('mensagem')}
                    rows={6}
                    placeholder="Digite sua mensagem. Explique de forma objetiva e clara o ocorrido."
                    error={errors.mensagem?.message}
                  />
                </div>

                {/* Data do Ocorrido */}
                <div>
                  <label htmlFor="dataOcorrido" className="block text-sm font-medium text-dark mb-2">
                    Data do Ocorrido
                  </label>
                  <Input
                    id="dataOcorrido"
                    {...register('dataOcorrido')}
                    type="date"
                    error={errors.dataOcorrido?.message}
                    style={{ colorScheme: 'light' }}
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.currentTarget.showPicker?.();
                    }}
                  />
                </div>

                {/* Anexos */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex items-center gap-2 border-green-600 text-green-600 hover:bg-green-50"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <HiPaperClip size={20} />
                      Anexos
                    </Button>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">
                        Para que possamos analisar sua transferência com mais agilidade, pedimos que anexe o comprovante original da transação.
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Formatos aceitos: JPG, PNG, GIF, PDF, TXT. Máximo 5MB por arquivo.
                      </p>
                    </div>
                  </div>
                  
                  {/* Input de arquivo oculto */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".jpg,.jpeg,.png,.gif,.pdf,.txt"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  
                  {/* Lista de arquivos selecionados */}
                  {selectedFiles.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Arquivos selecionados:</p>
                      {selectedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <HiDocumentText className="text-gray-500" size={20} />
                            <div>
                              <p className="text-sm font-medium text-gray-900">{file.name}</p>
                              <p className="text-xs text-gray-500">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700 p-1"
                          >
                            <HiX size={20} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* LGPD */}
                <Checkbox
                  {...register('aceitarLGPD')}
                  label={
                    <span>
                      *** Autorizo o uso dos meus dados conforme a LGPD.
                    </span>
                  }
                  error={errors.aceitarLGPD?.message}
                />

                {/* Campos obrigatórios */}
                <p className="text-sm text-gray-600">
                  (*) Campos obrigatórios
                </p>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  <HiCheck size={20} />
                  {isSubmitting ? 'ENVIANDO...' : 'ENVIAR'}
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}


