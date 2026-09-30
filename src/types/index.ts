export interface ServiceItem {
  id: string;
  category: 'cabelo' | 'cor-mechas' | 'masculino' | 'sobrancelhas-epilacao' | 'maquiagem';
  name: string;
  tagline: string;
  description: string;
  duration: string;
  priceEstimate?: string;
  audience?: 'Feminino' | 'Masculino' | 'Unissex' | 'Infantil';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
  experienceYears: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Corte & Styling' | 'Mechas & Cor' | 'Grooming Masculino' | 'Maquiagem & Festa' | 'Espaço & Atmosfera';
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
  caption: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  service: string;
  tag: string;
}

export interface BookingState {
  serviceId?: string;
  serviceName?: string;
  professionalId?: string;
  date?: string;
  time?: string;
  clientName?: string;
  clientPhone?: string;
  notes?: string;
}
