export const CONTACT_PHONE = "(11) 97224-7142";
export const WHATSAPP_LINK = "https://wa.me/5511972247142";
export const EMAIL = "contato.agylinformatica@gmail.com";
export const LOCATION_FOCUS = "Embu-Guaçu e região";

export interface ServiceCategory {
  title: string;
  items: string[];
  icon: string;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: "ASSISTÊNCIA TÉCNICA",
    icon: "fa-laptop-medical",
    items: [
      "Limpeza e manutenção de PC e Notebook",
      "Formatação rápida com backup seguro",
      "Instalação de programas e Windows",
      "Resolução de lentidão e travamentos"
    ]
  },
  {
    title: "MONTAGEM DE MÁQUINAS",
    icon: "fa-microchip",
    items: [
      "Consultoria para compra de peças",
      "PC's Gamer de alta performance",
      "Estações de trabalho e estudo",
      "Upgrade de componentes (SSD, RAM)"
    ]
  },
  {
    title: "SUPORTE LOCAL",
    icon: "fa-house-laptop",
    items: [
      "Atendimento em domicílio (Embu-Guaçu)",
      "Suporte remoto para urgências",
      "Soluções para Home Office",
      "Configuração de redes e Wi-Fi"
    ]
  }
];