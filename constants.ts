
export const CONTACT_PHONE = "(11) 97224-7142";
export const WHATSAPP_LINK = "https://wa.me/5511972247142";
export const EMAIL = "contato.agylinformatica@gmail.com";

export interface ServiceCategory {
  title: string;
  items: string[];
  icon: string;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: "SERVIÇOS TÉCNICOS",
    icon: "fa-laptop-medical",
    items: [
      "Limpeza de Pc's e Notebook",
      "Formatação com backup de dados",
      "Instalação de programas",
      "Atualização de Sistema, drives e BIOS"
    ]
  },
  {
    title: "MONTAGEM PERSONALIZADA",
    icon: "fa-microchip",
    items: [
      "Consultoria para escolha de peças",
      "PC's gamer, trabalho, estudo ou uso geral",
      "Montagem de Pc's e testes"
    ]
  },
  {
    title: "ATENDIMENTO E SUPORTE",
    icon: "fa-house-laptop",
    items: [
      "Atendimento a domicílio",
      "Suporte remoto",
      "Agendamento fácil via WhatsApp"
    ]
  }
];
