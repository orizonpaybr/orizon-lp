export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  volume: string;
  message: string;
  acceptTerms: boolean;
}

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export interface MediaLogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}


