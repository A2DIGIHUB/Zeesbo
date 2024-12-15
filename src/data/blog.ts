import { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: {
      en: 'The Future of Sustainable Construction',
      ar: 'مستقبل البناء المستدام'
    },
    excerpt: {
      en: 'Exploring innovative eco-friendly building practices and materials',
      ar: 'استكشاف ممارسات ومواد البناء الصديقة للبيئة المبتكرة'
    },
    content: {
      en: `Sustainable construction is revolutionizing the building industry. From solar panels and green roofs to recycled materials and energy-efficient designs, we're seeing a dramatic shift in how buildings are conceived and constructed.

Our latest projects incorporate cutting-edge sustainable technologies:
- Solar-powered HVAC systems
- Rainwater harvesting
- Smart energy management
- Recycled building materials
- Green roof installations

These innovations not only reduce environmental impact but also provide significant cost savings over time. Our commitment to sustainable construction reflects our vision for a greener future.`,
      ar: `يغير البناء المستدام صناعة البناء. من الألواح الشمسية والأسقف الخضراء إلى المواد المعاد تدويرها والتصميمات الموفرة للطاقة، نشهد تحولاً كبيراً في كيفية تصور المباني وبنائها.

تتضمن مشاريعنا الأخيرة تقنيات مستدامة متطورة:
- أنظمة تكييف تعمل بالطاقة الشمسية
- حصاد مياه الأمطار
- إدارة الطاقة الذكية
- مواد بناء معاد تدويرها
- تركيبات الأسقف الخضراء

هذه الابتكارات لا تقلل من الأثر البيئي فحسب، بل توفر أيضاً تكاليف كبيرة على المدى الطويل. يعكس التزامنا بالبناء المستدام رؤيتنا لمستقبل أكثر اخضراراً.`
    },
    image: '/images/blog/sustainable.jpg',
    date: '2023-12-15',
    category: {
      en: 'Sustainability',
      ar: 'الاستدامة'
    },
    author: {
      name: 'Sarah Johnson',
      avatar: '/images/team/sarah.jpg'
    }
  },
  {
    id: 2,
    title: {
      en: 'Smart Buildings: The New Standard',
      ar: 'المباني الذكية: المعيار الجديد'
    },
    excerpt: {
      en: 'How IoT and automation are revolutionizing construction',
      ar: 'كيف تغير إنترنت الأشياء والأتمتة صناعة البناء'
    },
    content: {
      en: `Smart buildings are becoming the new standard in construction. By integrating IoT devices and automated systems, buildings are becoming more efficient, secure, and comfortable than ever before.

Key features of our smart building solutions:
- Automated climate control
- Smart security systems
- Energy usage optimization
- Predictive maintenance
- Integrated building management

These smart features not only enhance user experience but also reduce operational costs and improve building efficiency.`,
      ar: `أصبحت المباني الذكية المعيار الجديد في البناء. من خلال دمج أجهزة إنترنت الأشياء والأنظمة الآلية، أصبحت المباني أكثر كفاءة وأماناً وراحة من أي وقت مضى.

الميزات الرئيسية لحلول المباني الذكية لدينا:
- التحكم الآلي في المناخ
- أنظمة الأمان الذكية
- تحسين استخدام الطاقة
- الصيانة التنبؤية
- إدارة المباني المتكاملة

هذه الميزات الذكية لا تعزز تجربة المستخدم فحسب، بل تقلل أيضاً من تكاليف التشغيل وتحسن كفاءة المبنى.`
    },
    image: '/images/blog/smart-building.jpg',
    date: '2023-12-10',
    category: {
      en: 'Technology',
      ar: 'التكنولوجيا'
    },
    author: {
      name: 'Michael Chen',
      avatar: '/images/team/michael.jpg'
    }
  },
  {
    id: 3,
    title: {
      en: 'Luxury Design Trends 2024',
      ar: 'اتجاهات التصميم الفاخر 2024'
    },
    excerpt: {
      en: 'The latest trends in high-end residential construction',
      ar: 'أحدث اتجاهات البناء السكني الفاخر'
    },
    content: {
      en: `As we enter 2024, luxury residential construction continues to evolve with new design trends that combine elegance with functionality. Our latest projects showcase these emerging trends.

Key luxury design trends:
- Biophilic design integration
- Smart home automation
- Sustainable luxury materials
- Indoor-outdoor living spaces
- Wellness-focused amenities

These trends reflect a growing desire for homes that offer both luxury and sustainability, creating spaces that are both beautiful and environmentally conscious.`,
      ar: `مع دخولنا عام 2024، يواصل البناء السكني الفاخر تطوره مع اتجاهات تصميم جديدة تجمع بين الأناقة والوظائف. تعرض مشاريعنا الأخيرة هذه الاتجاهات الناشئة.

اتجاهات التصميم الفاخر الرئيسية:
- دمج التصميم المحب للطبيعة
- أتمتة المنزل الذكي
- مواد فاخرة مستدامة
- مساحات معيشة داخلية وخارجية
- وسائل الراحة التي تركز على العافية

تعكس هذه الاتجاهات رغبة متزايدة في المنازل التي توفر الفخامة والاستدامة، مما يخلق مساحات جميلة وواعية بيئياً.`
    },
    image: '/images/blog/luxury-trends.jpg',
    date: '2023-12-05',
    category: {
      en: 'Design',
      ar: 'التصميم'
    },
    author: {
      name: 'Emma Thompson',
      avatar: '/images/team/emma.jpg'
    }
  }
];
