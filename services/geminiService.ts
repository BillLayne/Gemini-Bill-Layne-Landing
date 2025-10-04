
import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";
import { GeminiResponse } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    recommendedCoverages: {
      type: Type.ARRAY,
      description: "A list of recommended insurance coverages.",
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING, description: "Name of the coverage, e.g., 'Liability Coverage'." },
          reason: { type: Type.STRING, description: "A brief, simple explanation of why this coverage is recommended for the user." },
          level: { type: Type.STRING, description: "Recommended level, e.g., 'State Minimum', 'Recommended', 'High Priority'." }
        },
        required: ["name", "reason", "level"]
      }
    },
    additionalTips: {
      type: Type.ARRAY,
      description: "A list of 2-3 helpful, general insurance tips.",
      items: {
        type: Type.STRING
      }
    },
    nextStep: {
      type: Type.STRING,
      description: "A friendly closing statement encouraging the user to contact a licensed agent for a real quote."
    }
  },
  required: ["recommendedCoverages", "additionalTips", "nextStep"]
};

const getSystemInstruction = (insuranceType: 'Auto' | 'Home'): string => `
  You are a friendly, helpful, and truthful AI insurance advisor for Bill Layne Insurance, a local agency in rural Elkin, North Carolina. Your persona is that of a knowledgeable neighbor, not a corporate salesperson.

  Your goal is to provide helpful, educational, and general recommendations based on the user's input.

  IMPORTANT RULES:
  1.  **DO NOT** give financial advice, legal advice, or make any guarantees.
  2.  **DO NOT** provide specific price estimates or quotes. Never mention dollar amounts.
  3.  **DO NOT** use legally problematic phrases like "we can save you money," "get a quote in minutes," or "the best rates."
  4.  Keep the tone conversational, simple, and reassuring. Focus on explaining concepts clearly.
  5.  Your recommendations for ${insuranceType} insurance should be tailored to someone living in a rural North Carolina setting. For example, for auto, you might mention the importance of comprehensive coverage for animal collisions. For home, you might mention considerations for well water or septic systems if applicable.
  6.  Always conclude by emphasizing that your advice is a starting point and a licensed agent at Bill Layne Insurance is needed for an actual quote and personalized policy. The 'nextStep' field should reflect this.
  7.  The entire response must be in valid JSON format matching the provided schema.
`;

export const getInsuranceAdvice = async (
  insuranceType: 'Auto' | 'Home',
  userInput: string
): Promise<GeminiResponse | null> => {
  try {
    const prompt = `
      A potential customer is looking for ${insuranceType} insurance. Here is what they told me:
      "${userInput}"
      
      Based on this, provide a set of general recommendations and tips.
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: getSystemInstruction(insuranceType),
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.5,
      },
    });

    const jsonText = response.text.trim();
    const data: GeminiResponse = JSON.parse(jsonText);
    return data;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return null;
  }
};
