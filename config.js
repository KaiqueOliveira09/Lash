/* ============================================================
   CONFIGURAÇÃO DO CLIENTE
   Para um cliente novo, troque SÓ este arquivo.
   ============================================================ */
const CLIENT_CONFIG = {

  // 1. Dados básicos
  nomeSalao: "Melyssa Moura",
  profissao: "Lash Designer",
  cidade: "Carapicuiba - SP",
  endereco: "",                 // ex: "Rua das Flores, 123 - Centro". Deixe "" para esconder
  linkMaps: "",                 // link do Google Maps (opcional)
  horarioFuncionamento: "Seg a Sáb · 9h às 18h",
  instagram: "studiomelyssamoura_",      // sem o @
  telefoneWhatsapp: "5511993640482",
  senhaAdmin: "1234",           // ATENÇÃO: visível para quem abrir o código do site

  // 2. Banco de dados (Supabase)
  supabaseUrl: "https://xwkvjqqvjbsmqwcurhmx.supabase.co",
  supabaseKey: "sb_publishable_cSyASgQ9glZjsLNDTl5JSA_qzG5NvkB",

  // 3. Cores (identidade visual)
  cores: {
    fundo: "#FAF6F0",           // fundo da página
    destaque: "#E8C5C8",        // tom rosado dos detalhes
    destaqueEscuro: "#8A4F54",  // botões selecionados, links
    texto: "#3A322F",           // texto e botões principais
    dourado: "#C5A059"          // ícones e enfeites
  },

  // 4. Topo do site
  hero: {
    etiqueta: "Studio VIP de Cílios",
    titulo: "Realce a beleza natural do seu olhar",
    texto: "Extensão de cílios personalizada, com técnica de alta retenção e biossegurança garantida.",
    imagem: "https://gmcilios.com.br/wp-content/uploads/2024/09/IMG_9695.jpg", // foto de demonstração — troque pela foto do cliente ao vender
    selos: ["Biossegurança", "Alta retenção", "Fios premium"]
  },

  // 5. Diferenciais (ícones: https://icons8.com/line-awesome)
  diferenciais: [
    { icone: "la-gem",        titulo: "Fios Premium",      texto: "Material leve e ultra macio que não pesa no olhar." },
    { icone: "la-shield-alt", titulo: "Saúde dos Fios",    texto: "Técnica fio a fio, sem danificar os cílios naturais." },
    { icone: "la-clock",      titulo: "Alta Durabilidade", texto: "Retenção impecável para o seu dia a dia." },
    { icone: "la-heart",      titulo: "Atendimento VIP",   texto: "Mapeamento exclusivo para o formato do seu olho." }
  ],

  // 6. Serviços (aparecem na vitrine E no agendamento)
  //    preco e duracao são EXEMPLOS — confirme com a cliente. Deixe "" para esconder.
  //    imagem: fotos de demonstração — ao vender, troque pelas fotos do cliente (ex: "fotos/sirena.jpg")
  servicos: [
    { nome: "Volume Sirena",     descricao: "Efeito alongado e sensual, levemente puxado.", preco: "R$ 180", duracao: "2h",    imagem: "https://gmcilios.com.br/wp-content/uploads/2024/09/IMG_9695.jpg" },
    { nome: "Volume Cleópatra",  descricao: "Olhar marcante com efeito delineado.",         preco: "R$ 190", duracao: "2h",    imagem: "https://gmcilios.com.br/wp-content/uploads/2023/05/VOLUME-EGIPCIO-2.jpg" },
    { nome: "Volume Brasileiro", descricao: "Volume cheio e natural, o queridinho.",        preco: "R$ 160", duracao: "1h30",  imagem: "https://gmcilios.com.br/wp-content/uploads/2023/05/MEGA-VOLUME-BRASILEIRO-rotated-510x521.jpeg" },
    { nome: "Volume Fox Eyes",   descricao: "Efeito gatinho que levanta o olhar.",          preco: "R$ 200", duracao: "2h30",  imagem: "https://gmcilios.com.br/wp-content/uploads/2023/09/FOX-EYES-2.jpeg" },
    { nome: "Volume 5D",         descricao: "Volume intenso e aveludado, olhar poderoso.",  preco: "R$ 220", duracao: "2h30",  imagem: "fotos/volume-5d.jpg" },
    { nome: "Lash Lifting",      descricao: "Curva e realce dos seus próprios cílios.",     preco: "R$ 120", duracao: "1h",    imagem: "fotos/lash-lifting.jpg" }
  ],

  // 7. Depoimentos — use SÓ depoimentos reais. Lista vazia = seção escondida.
  depoimentos: [
    // { nome: "Ana P.", texto: "Amei o resultado, durou muito!" },
  ],

  // 8. Agenda
  horarios: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
  diasFechados: [0],            // 0=domingo, 1=segunda ... 6=sábado
  datasFechadas: [],            // feriados/folgas, ex: ["2026-12-25", "2027-01-01"]
  diasParaAgendar: 21           // quantos dias à frente a cliente pode agendar
};
