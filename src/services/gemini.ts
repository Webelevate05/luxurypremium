import { GoogleGenAI } from "@google/genai";

const getAI = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set");
  }
  return new GoogleGenAI({ apiKey });
};

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function generateDressImage(prompt: string, retries = 3): Promise<string> {
  for (let i = 0; i < retries; i++) {
    try {
      const ai = getAI();
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              text: prompt,
            },
          ],
        },
        config: {
          imageConfig: {
            aspectRatio: "3:4",
          },
        },
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
      throw new Error("No image generated");
    } catch (error: any) {
      const isRateLimit = error?.message?.includes('429') || error?.status === 429;

      if (isRateLimit && i < retries - 1) {
        const delay = Math.pow(2, i) * 2000 + Math.random() * 1000;
        console.warn(`Rate limit hit (429). Retrying in ${Math.round(delay)}ms... (Attempt ${i + 1}/${retries})`);
        await sleep(delay);
        continue;
      }

      console.error("Error generating image:", error);
      // If it's the last attempt or not a rate limit, break and use fallback
      break;
    }
  }

  // Fallback to a placeholder if all attempts fail
  // Fallback to high-quality dress imagery if Gemini fails or is rate limited
  const fallbacks = [
    'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=600&h=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=600&h=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=600&h=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&h=800&auto=format&fit=crop'
  ];
  const index = Math.abs(prompt.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % fallbacks.length;
  return fallbacks[index];
}
