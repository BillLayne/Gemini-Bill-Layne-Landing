export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  avatarUrl: string;
}

export interface Service {
  // Fix: Changed icon type from React.ReactNode to string to match component implementation and fix missing React namespace error.
  icon: string;
  title: string;
  description: string;
  link: string;
}

export interface GeminiResponse {
  recommendedCoverages: {
    name: string;
    reason: string;
    level: string;
  }[];
  additionalTips: string[];
  nextStep: string;
}
