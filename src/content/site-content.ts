import type { LucideIcon } from "lucide-react";
import {
  GraduationCap,
  Sprout,
  MapPinned,
  BookOpen,
  Sparkles,
  BarChart3,
  Compass,
  HeartHandshake,
  Users,
  Briefcase,
  Home,
  Wheat,
  Music2,
  Database,
  Wallet,
  UserPlus,
  Search,
  Rocket,
  TrendingUp,
} from "lucide-react";

import hero from "@/assets/hero.jpg";
import sertao from "@/assets/sertao.png";
import oficina from "@/assets/oficina.jpg";
import jovemApp from "@/assets/jovem-app.jpg";
import agricultura from "@/assets/agricultura.jpg";
import cultura from "@/assets/cultura.jpg";
import canyon from "@/assets/canyon.png";
import juventude from "@/assets/juventude.jpg";
import dep1 from "@/assets/dep1.jpg";
import dep2 from "@/assets/dep2.jpg";
import dep3 from "@/assets/dep3.jpg";

export const images = {
  hero,
  sertao,
  oficina,
  jovemApp,
  agricultura,
  cultura,
  canyon,
  juventude,
  dep1,
  dep2,
  dep3,
};

export const nav = [
  { id: "inicio", label: "Início" },
  { id: "projeto", label: "O Projeto" },
  { id: "solucao", label: "Solução" },
  { id: "impacto", label: "Impacto" },
  { id: "galeria", label: "Galeria" },
];

export const ctaLabel = "Baixar o App";

export const hero_ = {
  eyebrow: "Sertão do São Francisco • Juventude quilombola",
  title: "Tecnologia, formação e oportunidades para a juventude do Velho Chico.",
  subtitle:
    "O Jovens do Velho Chico conecta jovens a conhecimentos, ferramentas de gestão e oportunidades de geração de renda, fortalecendo sua permanência produtiva no território.",
  image: hero,
  appScreenImage: jovemApp,
};

export const desafio = {
  title: "Juventude, território e oportunidade",
  paragraph:
    "Jovens de pequenos municípios e comunidades tradicionais enfrentam dificuldades de acesso à formação, trabalho, renda, tecnologia e políticas públicas. Como consequência, muitos deixam seus territórios em busca de oportunidades. O Jovens do Velho Chico transforma tecnologia e conhecimento em caminhos reais para que essa juventude possa aprender, empreender e construir seu futuro em sua própria comunidade.",
  cards: [
    {
      icon: GraduationCap,
      title: "Falta de acesso à formação",
      text: "Distâncias, custos e escassez de oferta local afastam jovens de trilhas de aprendizagem contextualizadas.",
    },
    {
      icon: Briefcase,
      title: "Escassez de oportunidades de renda",
      text: "Poucos caminhos para transformar vocações e saberes locais em atividades produtivas sustentáveis.",
    },
    {
      icon: Home,
      title: "Êxodo e enfraquecimento dos territórios",
      text: "A saída da juventude fragiliza comunidades quilombolas e a economia dos pequenos municípios do Sertão.",
    },
  ] as { icon: LucideIcon; title: string; text: string }[],
  photo: sertao,
  photo2: oficina,
};

export const proposta = {
  title: "Um ecossistema digital para transformar oportunidades em futuro",
  subtitle:
    "Reunir, em um único ambiente digital, formação, gestão produtiva, inteligência territorial e conexão com oportunidades, apoiando jovens na construção de trajetórias profissionais e empreendedoras.",
  cards: [
    {
      icon: BookOpen,
      title: "Formação acessível e contextualizada",
      text: "Trilhas pensadas para a realidade do Sertão e das comunidades quilombolas.",
    },
    {
      icon: Sparkles,
      title: "Conexão personalizada com oportunidades",
      text: "Recomendações inteligentes de editais, mentorias e programas alinhados ao perfil de cada jovem.",
    },
    {
      icon: Wallet,
      title: "Apoio à gestão produtiva e financeira",
      text: "Ferramentas simples para organizar atividades agrícolas, criativas e empreendedoras.",
    },
    {
      icon: HeartHandshake,
      title: "Valorização das vocações e identidades locais",
      text: "Reconhecer saberes, cultura e economia criativa como ativos de desenvolvimento.",
    },
  ] as { icon: LucideIcon; title: string; text: string }[],
};

export const solucao = {
  title: "Tecnologia desenvolvida para a realidade do território",
  subtitle:
    "Um aplicativo pensado com jovens quilombolas do Sertão do São Francisco, combinando aprendizagem, gestão e inteligência territorial.",
  modules: [
    {
      icon: BookOpen,
      title: "Trilhas formativas",
      text: "Conteúdos sobre gestão, economia criativa, empreendedorismo social, agricultura, pecuária e inovação.",
    },
    {
      icon: Sparkles,
      title: "Recomendação inteligente",
      text: "Inteligência artificial que indica cursos, mentorias, editais, programas públicos, cooperativas e oportunidades de renda.",
    },
    {
      icon: Sprout,
      title: "Gestão produtiva e financeira",
      text: "Ferramentas para que jovens agricultores e pecuaristas registrem, acompanhem e organizem suas atividades.",
    },
    {
      icon: MapPinned,
      title: "Geolocalização territorial",
      text: "Mapeamento de iniciativas culturais, atividades produtivas, serviços e oportunidades existentes no território.",
    },
    {
      icon: BarChart3,
      title: "Painel de indicadores",
      text: "Informações para apoiar a gestão municipal e a criação de políticas públicas voltadas à juventude e ao desenvolvimento econômico.",
    },
  ] as { icon: LucideIcon; title: string; text: string }[],
};

export const comoFunciona = {
  title: "Como funciona",
  subtitle: "Da primeira tela às primeiras oportunidades, em quatro passos.",
  steps: [
    {
      icon: UserPlus,
      title: "Cria seu perfil",
      text: "O jovem se cadastra e compartilha interesses, vocações e território.",
    },
    {
      icon: Search,
      title: "Descoberta guiada",
      text: "A plataforma identifica interesses, necessidades e potenciais.",
    },
    {
      icon: Compass,
      title: "Recomendações personalizadas",
      text: "O sistema sugere formações, mentorias, editais e oportunidades.",
    },
    {
      icon: TrendingUp,
      title: "Desenvolvimento contínuo",
      text: "Acompanha sua evolução e acessa ferramentas para gerar renda no território.",
    },
  ] as { icon: LucideIcon; title: string; text: string }[],
  ctaLabel: "Começar agora",
};

export const metas = {
  eyebrow: "Metas de impacto",
  title: "O que alcançamos",
  note: "Conquistas alcançadas por meio de inovação, colaboração e impacto social.",
  items: [
    { value: 300, suffix: "", label: "Jovens mobilizados" },
    { value: 150, suffix: "", label: "Jovens cadastrados na plataforma" },
    { value: 6, suffix: "", label: "Trilhas formativas" },
    { value: 30, suffix: "", label: "Videoaulas" },
    { value: 50, suffix: "", label: "Oportunidades e iniciativas mapeadas" },
    { value: 15, suffix: "", label: "Indicadores para gestão pública" },
    { value: 4, suffix: "", label: "Ciclos de validação com jovens e parceiros" },
    { value: 5, suffix: "", label: "Comunidades quilombolas envolvidas" },
  ],
  quote:
    "Uma trajetória construída com inovação, parcerias estratégicas e resultados que transformam jovens e territórios.",
};

export const impactos = {
  title: "Impactos gerados",
  subtitle: "Um projeto orientado a resultados coletivos, culturais e econômicos.",
  items: [
    { icon: Users, text: "Inclusão produtiva da juventude" },
    { icon: Briefcase, text: "Geração de trabalho e renda" },
    { icon: Home, text: "Redução do êxodo juvenil" },
    { icon: HeartHandshake, text: "Fortalecimento das comunidades quilombolas" },
    { icon: Music2, text: "Valorização da cultura e dos saberes locais" },
    { icon: Wheat, text: "Modernização das atividades rurais" },
    { icon: Sparkles, text: "Fortalecimento da economia criativa" },
    { icon: Database, text: "Políticas públicas orientadas por dados" },
  ] as { icon: LucideIcon; text: string }[],
  ods: [
    { code: "ODS 4", title: "Educação de Qualidade" },
    { code: "ODS 8", title: "Trabalho Decente e Crescimento Econômico" },
    { code: "ODS 11", title: "Cidades e Comunidades Sustentáveis" },
  ],
};

export const galeria = {
  title: "Galeria",
  subtitle: "Território, juventude, cultura e tecnologia em movimento.",
  photos: [
    { src: oficina, alt: "Oficina em comunidade quilombola", caption: "Oficina formativa em comunidade quilombola", span: "wide" },
    { src: canyon, alt: "Cânion do Velho Chico visto de cima", caption: "O Cânion do Velho Chico visto de cima", span: "tall" },
    { src: juventude, alt: "Jovens do território reunidos", caption: "Juventude do território", span: "" },
    { src: cultura, alt: "Manifestação cultural quilombola", caption: "Cultura e identidade viva", span: "tall" },
    { src: agricultura, alt: "Jovens em atividade agrícola", caption: "Atividades produtivas no Sertão", span: "wide" },
    { src: sertao, alt: "Paisagem do Sertão do São Francisco", caption: "Paisagem do Sertão", span: "" },
    { src: jovemApp, alt: "Jovem usando o aplicativo", caption: "Tecnologia na palma da mão", span: "" },
    { src: hero, alt: "Jovens em roda perto do rio", caption: "Encontros à beira do Velho Chico", span: "wide" },
  ] as { src: string; alt: string; caption: string; span: "" | "wide" | "tall" }[],
};

export const depoimentos = {
  title: "Vozes do território",
  subtitle: "Depoimentos de jovens, lideranças e parceiros — conteúdo provisório.",
  items: [
    {
      photo: dep1,
      name: "Jovem participante",
      role: "Comunidade quilombola — Sertão do São Francisco",
      text: "Encontrei no aplicativo trilhas que fazem sentido pra minha realidade e me ajudam a organizar minha produção.",
    },
    {
      photo: dep2,
      name: "Jovem empreendedora",
      role: "Economia criativa — Território do Velho Chico",
      text: "A recomendação de editais e oportunidades abriu caminhos que eu nem sabia que existiam pra gente daqui.",
    },
    {
      photo: dep3,
      name: "Liderança comunitária",
      role: "Instituição parceira",
      text: "É uma ferramenta que valoriza nossos saberes e mantém a juventude viva e produtiva no território.",
    },
  ] as { photo: string; name: string; role: string; text: string }[],
};

export const ctaFinal = {
  title: "O futuro da juventude também pode ser construído no território.",
  text:
    "Baixe o aplicativo Jovens do Velho Chico e tenha acesso a formação, ferramentas e oportunidades para transformar ideias em caminhos de desenvolvimento.",
};

export const footer = {
  description:
    "Iniciativa que conecta jovens quilombolas do Sertão do São Francisco a formação, gestão, economia criativa, políticas públicas e oportunidades de renda.",
  contact: "contato@jovensdovelhochico.org.br",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
  legal: [
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
    { label: "Proteção de Dados", href: "#" },
  ],
  parceiros: "Realização e parcerias: instituições comprometidas com a juventude, o território e o desenvolvimento sustentável do Velho Chico.",
};

export const appDownload = { icon: Rocket };
