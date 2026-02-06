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
          A Agyl Informática é focada no atendimento em Embu-Guaçu e região próxima.
          
          Nossa especialidade é:
          - Suporte Técnico honesto e sem enrolação.
          - Manutenção de Hardware e Software (PC e Notebook).
          - Montagem de PC Gamer e Trabalho.
          - Formatação, Limpeza e Upgrades.
          
          Localização: Embu-Guaçu - SP (atendemos a domicílio na região).
          Contato: (11) 97224-7142
          
          Diretrizes de Resposta:
          1. Seja direto, amigável e focado em resolver.
          2. Sempre mencione que o atendimento é local em Embu-Guaçu.
          3. Incentive fortemente o usuário a clicar no botão de WhatsApp para falar com um técnico humano.
          4. Não use termos técnicos complexos demais; foque na solução do problema.
        `,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Erro no Agyl-Bot:", error);
    return "Olá! Sou o técnico da Agyl. Para uma resposta imediata sobre o seu problema em Embu-Guaçu, me chama agora no WhatsApp: (11) 97224-7142!";
  }
};