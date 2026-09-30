import { ServiceItem, TeamMember, GalleryItem, TestimonialItem } from '../types';

export const SALON_INFO = {
  name: 'PEDRARA',
  subname: 'SALON',
  fullName: 'PEDRARA Salon',
  headline: 'Beleza em movimento. Precisão em cada detalhe.',
  subheadline: 'Uma experiência de beleza criada para valorizar aquilo que torna você único.',
  quote: 'Precisão que estrutura. Movimento que revela.',
  phone: '',
  phoneDisplay: '',
  whatsappUrl: '',
  instagramHandle: '@pedrarasalon',
  instagramUrl: 'https://www.instagram.com/pedrarasalon/',
  address: {
    street: '',
    neighborhood: '',
    city: '',
    state: '',
    full: '',
  },
  hours: [],
};

export const SERVICES_CATEGORIES = [
  {
    id: 'cabelo',
    title: 'Cabelo',
    subtitle: 'Cortes, tratamentos, escova e finalização',
    description: 'Cuidados capilares, cortes e finalizações pensados para valorizar cada estilo.',
    heroImage: '',
  },
  {
    id: 'cor-mechas',
    title: 'Cor & Mechas',
    subtitle: 'Coloração, iluminação e transformações',
    description: 'Serviços de cor e mechas com avaliação individual antes de cada transformação.',
    heroImage: '',
  },
  {
    id: 'masculino',
    title: 'Masculino & Barba',
    subtitle: 'Cabelo, barba e cuidados masculinos',
    description: 'Cortes e cuidados masculinos com atenção ao acabamento e à rotina de cada cliente.',
    heroImage: '',
  },
  {
    id: 'sobrancelhas-epilacao',
    title: 'Sobrancelhas & Epilação',
    subtitle: 'Detalhes que valorizam expressão e acabamento',
    description: 'Serviços de sobrancelhas e epilação realizados de acordo com a necessidade de cada cliente.',
    heroImage: '',
  },
  {
    id: 'maquiagem',
    title: 'Maquiagem',
    subtitle: 'Produções para diferentes momentos',
    description: 'Maquiagem para ocasiões especiais e produções personalizadas.',
    heroImage: '',
  },
] as const;

export const SERVICES_LIST: ServiceItem[] = [
  { id:'corte-feminino', category:'cabelo', name:'Corte Feminino', tagline:'Corte e finalização personalizados', description:'Serviço de corte feminino com avaliação prévia.', duration:'Sob consulta', audience:'Feminino' },
  { id:'corte-infantil', category:'cabelo', name:'Corte Infantil', tagline:'Atendimento pensado para crianças', description:'Corte infantil com atendimento cuidadoso.', duration:'Sob consulta', audience:'Infantil' },
  { id:'tratamentos', category:'cabelo', name:'Tratamentos Capilares', tagline:'Cuidados de acordo com a necessidade dos fios', description:'Protocolos definidos após avaliação.', duration:'Sob consulta', audience:'Unissex' },
  { id:'escova-finalizacao', category:'cabelo', name:'Escova & Finalização', tagline:'Finalização para diferentes estilos e ocasiões', description:'Escova e finalização personalizadas.', duration:'Sob consulta', audience:'Unissex' },

  { id:'coloracao', category:'cor-mechas', name:'Coloração', tagline:'Cor personalizada após avaliação', description:'Coloração com diagnóstico prévio.', duration:'Sob consulta', audience:'Unissex' },
  { id:'mechas', category:'cor-mechas', name:'Mechas & Iluminação', tagline:'Técnicas de iluminação sob medida', description:'Mechas e iluminação mediante avaliação.', duration:'Sob consulta', audience:'Feminino' },

  { id:'corte-masculino', category:'masculino', name:'Corte Masculino', tagline:'Corte e acabamento personalizados', description:'Corte masculino adaptado ao estilo do cliente.', duration:'Sob consulta', audience:'Masculino' },
  { id:'barba', category:'masculino', name:'Barba', tagline:'Desenho, alinhamento e acabamento', description:'Serviço de barba com acabamento cuidadoso.', duration:'Sob consulta', audience:'Masculino' },

  { id:'sobrancelhas', category:'sobrancelhas-epilacao', name:'Sobrancelhas', tagline:'Design e cuidado do olhar', description:'Serviço realizado conforme avaliação.', duration:'Sob consulta', audience:'Unissex' },
  { id:'epilacao', category:'sobrancelhas-epilacao', name:'Epilação', tagline:'Cuidado e acabamento', description:'Serviço de epilação conforme área e necessidade.', duration:'Sob consulta', audience:'Unissex' },

  { id:'maquiagem-social', category:'maquiagem', name:'Maquiagem', tagline:'Produção personalizada para cada ocasião', description:'Maquiagem conforme estilo e evento.', duration:'Sob consulta', audience:'Feminino' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { id:'membro-1', name:'Profissional PEDRARA', role:'Perfil em atualização', specialty:'Especialidade a inserir', bio:'Informações profissionais serão adicionadas após validação com a equipe.', image:'', experienceYears:0 },
  { id:'membro-2', name:'Profissional PEDRARA', role:'Perfil em atualização', specialty:'Especialidade a inserir', bio:'Informações profissionais serão adicionadas após validação com a equipe.', image:'', experienceYears:0 },
  { id:'membro-3', name:'Profissional PEDRARA', role:'Perfil em atualização', specialty:'Especialidade a inserir', bio:'Informações profissionais serão adicionadas após validação com a equipe.', image:'', experienceYears:0 },
  { id:'membro-4', name:'Profissional PEDRARA', role:'Perfil em atualização', specialty:'Especialidade a inserir', bio:'Informações profissionais serão adicionadas após validação com a equipe.', image:'', experienceYears:0 },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id:'gal-1', title:'Trabalho PEDRARA', category:'Corte & Styling', image:'', aspect:'portrait', caption:'Fotografia real será adicionada aqui.' },
  { id:'gal-2', title:'Trabalho PEDRARA', category:'Mechas & Cor', image:'', aspect:'landscape', caption:'Fotografia real será adicionada aqui.' },
  { id:'gal-3', title:'Trabalho PEDRARA', category:'Grooming Masculino', image:'', aspect:'portrait', caption:'Fotografia real será adicionada aqui.' },
  { id:'gal-4', title:'Espaço PEDRARA', category:'Espaço & Atmosfera', image:'', aspect:'landscape', caption:'Fotografia real será adicionada aqui.' },
  { id:'gal-5', title:'Trabalho PEDRARA', category:'Maquiagem & Festa', image:'', aspect:'square', caption:'Fotografia real será adicionada aqui.' },
  { id:'gal-6', title:'Trabalho PEDRARA', category:'Corte & Styling', image:'', aspect:'portrait', caption:'Fotografia real será adicionada aqui.' },
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  { id:'dep-1', quote:'Depoimento real de cliente será inserido aqui.', author:'Cliente PEDRARA', service:'Experiência PEDRARA', tag:'Conteúdo em atualização' },
  { id:'dep-2', quote:'Depoimento real de cliente será inserido aqui.', author:'Cliente PEDRARA', service:'Experiência PEDRARA', tag:'Conteúdo em atualização' },
  { id:'dep-3', quote:'Depoimento real de cliente será inserido aqui.', author:'Cliente PEDRARA', service:'Experiência PEDRARA', tag:'Conteúdo em atualização' },
];

export const INSTAGRAM_POSTS = [
  { id:'post-1', image:'', caption:'Conteúdo real do Instagram será exibido aqui.', likes:'' },
  { id:'post-2', image:'', caption:'Conteúdo real do Instagram será exibido aqui.', likes:'' },
  { id:'post-3', image:'', caption:'Conteúdo real do Instagram será exibido aqui.', likes:'' },
  { id:'post-4', image:'', caption:'Conteúdo real do Instagram será exibido aqui.', likes:'' },
];