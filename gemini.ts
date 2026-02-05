
import { GoogleGenAI } from "@google/genai";

export const askAgylAI = async (message: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
      config: {
        systemInstruction: `
          Você é o Agyl-Bot, o assistente inteligente da Agyl Informática.
          A Agyl Informática é especializada em:
          - Suporte Técnico (remoto e presencial)
          - Manutenção de Hardware e Software
          - Montagem de PC Gamer e Profissional
          - Formatação e Limpeza Técnica
          - Redes e Segurança Digital

          Contato principal: (11) 97224-7142
          E-mail: contato.agylinformatica@gmail.com
          Tom de voz: Profissional, prestativo e tecnológico.
          Seja breve e direto. Incentive o usuário a entrar em contato via WhatsApp para orçamentos.
        `,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Erro no Agyl-Bot:", error);
    return "Olá! Tive um pequeno problema técnico, mas você pode falar diretamente com nossos técnicos pelo WhatsApp no número (11) 97224-7142!";
  }
};
