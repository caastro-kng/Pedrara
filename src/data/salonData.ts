import { ServiceItem, TeamMember, GalleryItem, TestimonialItem } from '../types';

export const SALON_INFO = {
  name: 'PEDRARA',
  subname: 'SALON',
  fullName: 'PEDRARA Salon',
  headline: 'Beleza em movimento. Precisão em cada detalhe.',
  subheadline: 'Uma experiência de beleza criada para valorizar aquilo que torna você único.',
  quote: 'Precisão que estrutura. Movimento que revela.',
  phone: '+55 (11) 98765-4321',
  phoneDisplay: '(11) 98765-4321',
  whatsappUrl: 'https://wa.me/5511987654321',
  instagramHandle: '@pedrarasalon',
  instagramUrl: 'https://www.instagram.com/pedrarasalon/',
  address: {
    street: 'Rua Amauri, 314',
    neighborhood: 'Itaim Bibi',
    city: 'São Paulo',
    state: 'SP',
    full: 'Rua Amauri, 314 — Itaim Bibi, São Paulo - SP',
  },
  hours: [
    { days: 'Terça a Sexta', hours: '09h às 20h' },
    { days: 'Sábado', hours: '09h às 19h' },
    { days: 'Domingo e Segunda', hours: 'Fechado para atendimento exclusivo' },
  ],
};

export const SERVICES_CATEGORIES = [
  {
    id: 'cabelo',
    title: 'Cabelo',
    subtitle: 'Cortes, tratamentos, escova e finalização',
    description: 'Técnicas de corte com visagismo contemporâneo e rituais de recuperação capilar de alta performance.',
    heroImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'cor-mechas',
    title: 'Cor & Mechas',
    subtitle: 'Coloração, iluminação e transformações sob medida',
    description: 'Clareamento saudável, morena iluminada, louros com profundidade e tonalização personalizada para cada textura.',
    heroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'masculino',
    title: 'Masculino & Barba',
    subtitle: 'Cabelo, barba e rituais de cuidado masculino',
    description: 'Precisão na tesoura e máquina, toalha quente, alinhamento de barba e tratamentos específicos para couro cabeludo.',
    heroImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'sobrancelhas-epilacao',
    title: 'Sobrancelhas & Epilação',
    subtitle: 'Detalhes que valorizam expressão e acabamento',
    description: 'Design de sobrancelhas com mapeamento facial, brow lamination e epilação suave com acabamento impecável.',
    heroImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'maquiagem',
    title: 'Maquiagem',
    subtitle: 'Produções para diferentes momentos e ocasiões',
    description: 'Pele com viço natural, olhos expressivos e sofisticação duradoura para eventos sociais, editoriais e noivas.',
    heroImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=85',
  },
] as const;

export const SERVICES_LIST: ServiceItem[] = [
  // Cabelo
  {
    id: 'corte-feminino-visagismo',
    category: 'cabelo',
    name: 'Corte Feminino com Visagismo',
    tagline: 'Diagnóstico de linhas faciais, lavagem terapêutica e finalização com movimento',
    description: 'Estudo das proporções faciais, tipo de fio e rotina individual. Inclui lavagem com massagem craniana relaxante e styling com textura leve.',
    duration: '1h 15min',
    audience: 'Feminino',
  },
  {
    id: 'corte-masculino-personalizado',
    category: 'masculino',
    name: 'Corte Masculino Contemporâneo',
    tagline: 'Tesoura e máquina com transições limpas e acabamento sob medida',
    description: 'Corte adaptado à textura e caimento do fio, respeitando a rotina e o estilo pessoal. Inclui lavagem refrescante e estilização.',
    duration: '50min',
    audience: 'Masculino',
  },
  {
    id: 'corte-infantil',
    category: 'cabelo',
    name: 'Corte Infantil com Cuidado Gentil',
    tagline: 'Ambiente calmo, paciência e acabamento leve para crianças',
    description: 'Atendimento respeitoso ao ritmo da criança, criando uma memória positiva e corte moderno e prático.',
    duration: '40min',
    audience: 'Infantil',
  },
  {
    id: 'ritual-reconstrucao-profunda',
    category: 'cabelo',
    name: 'Ritual de Reconstrução Lipídica',
    tagline: 'Recuperação intensiva da fibra e devolução de elasticidade',
    description: 'Tratamento de alto padrão com aminoácidos biomiméticos, lipídios e selagem térmica suave para cabelos danificados ou sensibilizados.',
    duration: '1h 20min',
    audience: 'Unissex',
  },
  {
    id: 'escova-modelada-movimento',
    category: 'cabelo',
    name: 'Escova Editorial & Modelagem',
    tagline: 'Volume natural, brilho espelhado e leveza sem rigidez',
    description: 'Finalização que valoriza o corte, conferindo balanço natural e proteção térmica avançada para longa durabilidade.',
    duration: '50min',
    audience: 'Feminino',
  },

  // Cor & Mechas
  {
    id: 'mechas-morena-iluminada',
    category: 'cor-mechas',
    name: 'Morena Iluminada & Contorno Suave',
    tagline: 'Pontos de luz estratégicos com tons quentes de avelã, mel e canela',
    description: 'Técnica de clareamento sem marcas marcadas, preservando a saúde do fio e proporcionando luminosidade dimensional orgânica.',
    duration: '3h 30min',
    audience: 'Feminino',
  },
  {
    id: 'balayage-editorial-blond',
    category: 'cor-mechas',
    name: 'Balayage Editorial & Blonde Design',
    tagline: 'Loiras personalizadas com esfumado de raiz e transição fluida',
    description: 'Pintura à mão livre e micropapéis para luminosidade limpa e moderna. Inclui cronograma pré e pós-descoloração com Plex.',
    duration: '4h 00min',
    audience: 'Feminino',
  },
  {
    id: 'coloracao-global-brilho',
    category: 'cor-mechas',
    name: 'Coloração Global & Banho de Brilho',
    tagline: 'Cobertura impecável, neutralização e reflexos multidimensionais',
    description: 'Fórmulas com óleos nutritivos sem amônia agressiva, garantindo uniformidade, toque sedoso e reflexos vibrantes.',
    duration: '2h 00min',
    audience: 'Unissex',
  },

  // Masculino
  {
    id: 'barboterapia-ritual',
    category: 'masculino',
    name: 'Barboterapia com Toalha Quente',
    tagline: 'Alinhamento com navalhete, hidratação profunda e óleos botânicos',
    description: 'Experiência sensorial com vaporização de ozônio, esfoliação suave, toalha aromatizada e massagem facial anti-irritação.',
    duration: '45min',
    audience: 'Masculino',
  },
  {
    id: 'combo-corte-barba-pedrara',
    category: 'masculino',
    name: 'Combo PEDRARA Man: Corte & Barba',
    tagline: 'Alinhamento completo de visual com cuidado integrado',
    description: 'A união perfeita do corte de precisão com a barboterapia clássica contemporânea.',
    duration: '1h 30min',
    audience: 'Masculino',
  },

  // Sobrancelhas & Epilação
  {
    id: 'design-sobrancelhas-visagismo',
    category: 'sobrancelhas-epilacao',
    name: 'Design de Sobrancelhas Personalizado',
    tagline: 'Mapeamento das linhas faciais e valorização do olhar natural',
    description: 'Sem padronizações mecânicas: desenho harmônico que respeita a espessura original e a simetria única do seu rosto.',
    duration: '45min',
    audience: 'Unissex',
  },
  {
    id: 'brow-lamination-nutricao',
    category: 'sobrancelhas-epilacao',
    name: 'Brow Lamination & Nutrição Queratina',
    tagline: 'Fios alinhados, encorpados e com textura editorial elegante',
    description: 'Procedimento que alinha e fixa os fios naturais na direção desejada, corrigindo falhas ópticas com efeito encorpado.',
    duration: '1h 00min',
    audience: 'Unissex',
  },
  {
    id: 'epilacao-facial-delicada',
    category: 'sobrancelhas-epilacao',
    name: 'Epilação Facial Delicada',
    tagline: 'Linha egípcia ou cera calmante para buço, queixo e contornos',
    description: 'Técnica gentil com ativos calmantes de camomila e aloe vera para evitar vermelhidão.',
    duration: '30min',
    audience: 'Unissex',
  },

  // Maquiagem
  {
    id: 'maquiagem-social-editorial',
    category: 'maquiagem',
    name: 'Maquiagem Social & Eventos',
    tagline: 'Pele acetinada, iluminação sofisticada e durabilidade extrema',
    description: 'Técnica de pele blindada com acabamento natural, valorizando o olhar e os contornos com sutileza editorial.',
    duration: '1h 15min',
    audience: 'Feminino',
  },
  {
    id: 'producao-noiva-consultoria',
    category: 'maquiagem',
    name: 'Consultoria & Produção Especial Noiva',
    tagline: 'Planejamento personalizado, teste de harmonia e suporte exclusivo',
    description: 'Atendimento imersivo com prova de make e penteado para que o dia do casamento seja vivido com tranquilidade e sofisticação.',
    duration: 'Personalizado',
    audience: 'Feminino',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'membro-1',
    name: 'Helena Dornelles',
    role: 'Diretora Criativa & Master Stylist',
    specialty: 'Visagismo e Cortes Editoriais',
    bio: 'Mais de 14 anos de formação internacional entre Londres e Paris. Especialista em cortes que ganham vida com o movimento natural do cabelo.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=85',
    experienceYears: 14,
  },
  {
    id: 'membro-2',
    name: 'Lucas Valente',
    role: 'Head Colorist & Hair Architect',
    specialty: 'Morena Iluminada e Balayage Blond',
    bio: 'Focado em clareamento com preservação absoluta da integridade da fibra capilar. Desenvolve paletas de tons exclusivas para cada fototipo.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85',
    experienceYears: 11,
  },
  {
    id: 'membro-3',
    name: 'Carolina Meirelles',
    role: 'Make-up Artist & Visagista Facial',
    specialty: 'Pele Acetinada e Olhar Contemporâneo',
    bio: 'Experiência em editoriais de moda e produções sociais de alto padrão. Prioriza luminosidade orgânica sem excesso de camadas.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85',
    experienceYears: 9,
  },
  {
    id: 'membro-4',
    name: 'Gabriel Siqueira',
    role: 'Especialista em Grooming & Barba',
    specialty: 'Cortes Masculinos e Rituais Clássicos',
    bio: 'Mestre no uso de tesoura e navalhete tradicional. Conduz cada atendimento masculino como um momento de pausa, higiene e bem-estar.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85',
    experienceYears: 10,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Movimento em Camadas Orgânicas',
    category: 'Corte & Styling',
    image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait',
    caption: 'Corte de precisão com texturização sutil nas pontas para balanço livre.',
  },
  {
    id: 'gal-2',
    title: 'Morena Iluminada em Avelã Quente',
    category: 'Mechas & Cor',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=85',
    aspect: 'landscape',
    caption: 'Transição suave sem demarcações, ressaltando o brilho natural dos fios castanhos.',
  },
  {
    id: 'gal-3',
    title: 'Design de Barba & Contorno Limpo',
    category: 'Grooming Masculino',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait',
    caption: 'Alinhamento simétrico respeitando os ângulos da mandíbula e nutrição com bálsamo botânico.',
  },
  {
    id: 'gal-4',
    title: 'Atmosfera e Arquitetura PEDRARA',
    category: 'Espaço & Atmosfera',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=85',
    aspect: 'landscape',
    caption: 'Ambiente planejado com luz natural, pedras neutras e acústica serena para desconectar da rotina.',
  },
  {
    id: 'gal-5',
    title: 'Make Editorial com Viço Acetinado',
    category: 'Maquiagem & Festa',
    image: 'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&w=1200&q=85',
    aspect: 'square',
    caption: 'Realce dos pontos de luz naturais, lábios hidratados e sobrancelhas suavemente laminadas.',
  },
  {
    id: 'gal-6',
    title: 'Corte Texturizado Masculino',
    category: 'Grooming Masculino',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait',
    caption: 'Caimento anatômico com finalização fosca natural para praticidade diária.',
  },
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: 'dep-1',
    quote: 'O que mais me impressionou na PEDRARA foi o tempo de escuta antes de qualquer tesourada. Eles não impõem uma fórmula pronta; olharam meu rosto e criaram um corte que continuo conseguindo arrumar sozinha todos os dias.',
    author: 'Mariana Brandão',
    service: 'Corte com Visagismo & Iluminação',
    tag: 'Experiência verificada',
  },
  {
    id: 'dep-2',
    quote: 'Ambiente impecável, sem o barulho e a pressa típicos de grandes salões. O ritual da toalha quente e o corte na tesoura têm uma precisão que raramente encontrei. Virou meu refúgio quinzenal.',
    author: 'Eduardo Guimarães',
    service: 'Grooming Masculino & Barboterapia',
    tag: 'Experiência verificada',
  },
  {
    id: 'dep-3',
    quote: 'Minha primeira experiência de descoloração sem nenhum dano perceptível. O cabelo continuou encorpado e com movimento. O cuidado técnico da equipe é surreal.',
    author: 'Camila Peixoto',
    service: 'Balayage Blond & Ritual Lipídico',
    tag: 'Experiência verificada',
  },
];

export const INSTAGRAM_POSTS = [
  {
    id: 'post-1',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80',
    caption: 'Precisão nos ângulos. Texturas que acompanham seu ritmo.',
    likes: '482',
  },
  {
    id: 'post-2',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=600&q=80',
    caption: 'Luz natural invadindo a estação de corte esta manhã.',
    likes: '620',
  },
  {
    id: 'post-3',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80',
    caption: 'Detalhes que definem a expressão. Sobrancelhas por PEDRARA.',
    likes: '394',
  },
  {
    id: 'post-4',
    image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=600&q=80',
    caption: 'Morena iluminada em degradê sutil para o outono.',
    likes: '811',
  },
];
