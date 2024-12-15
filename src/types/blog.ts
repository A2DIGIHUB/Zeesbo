export interface BlogPost {
  id: number;
  title: {
    en: string;
    ar: string;
  };
  excerpt: {
    en: string;
    ar: string;
  };
  content: {
    en: string;
    ar: string;
  };
  image: string;
  date: string;
  category: {
    en: string;
    ar: string;
  };
  author: {
    name: string;
    avatar: string;
  };
}
