export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
] as const;

export const coreValues = [
  {
    index: "01",
    title: "Evidence-based Analysis",
    description:
      "정성·정량 데이터를 교차 검증하여 논리적 근거 위에 결론을 세웁니다.",
  },
  {
    index: "02",
    title: "Actionable Strategy",
    description:
      "실행 가능한 수준까지 구체화된 전략만이 조직을 실제로 움직입니다.",
  },
  {
    index: "03",
    title: "Measurable Impact",
    description:
      "성과는 지표로 증명됩니다. 실행 이후의 변화를 함께 추적합니다.",
  },
] as const;

export const expertiseAreas = [
  {
    index: "01",
    title: "Corporate Strategy",
    description:
      "기업의 지속가능한 성장을 위한 방향을 설계하고 실행 로드맵을 제시합니다.",
    items: ["중장기 전략", "신사업 전략", "시장 진입 전략"],
  },
  {
    index: "02",
    title: "Public Sector Consulting",
    description:
      "공공기관과 지방자치단체의 정책 수립과 발전계획 수립을 지원합니다.",
    items: ["정책 연구", "중장기 발전계획", "성과평가"],
  },
  {
    index: "03",
    title: "Organization & Performance",
    description:
      "조직 구조를 진단하고 성과가 측정 가능한 관리 체계를 구축합니다.",
    items: ["조직진단", "KPI 설계", "성과관리 체계"],
  },
  {
    index: "04",
    title: "Market & Industry Research",
    description:
      "산업의 흐름과 경쟁 구도를 분석하여 의사결정의 근거를 마련합니다.",
    items: ["산업 동향 분석", "시장조사", "경쟁환경 분석"],
  },
] as const;

export const projects = [
  {
    index: "01",
    project: "중견 제조기업 중장기 성장전략 수립",
    clientType: "중견 제조기업",
    service: "Corporate Strategy",
    year: "2025",
  },
  {
    index: "02",
    project: "광역지자체 지역산업 발전전략 연구",
    clientType: "광역지방자치단체",
    service: "Public Sector Consulting",
    year: "2024",
  },
  {
    index: "03",
    project: "콘텐츠 기업 신규사업 타당성 분석",
    clientType: "콘텐츠 기업",
    service: "Market & Industry Research",
    year: "2024",
  },
  {
    index: "04",
    project: "공공기관 성과관리체계 고도화",
    clientType: "공공기관",
    service: "Organization & Performance",
    year: "2023",
  },
] as const;

export const impactStats = [
  { value: "35+", label: "Strategic Projects" },
  { value: "18", label: "Industries Covered" },
  { value: "92%", label: "Client Re-engagement" },
  { value: "7 Years", label: "Combined Expertise" },
] as const;

export const approachSteps = [
  {
    index: "01",
    title: "Define",
    description: "문제를 명확히 정의합니다.",
  },
  {
    index: "02",
    title: "Analyze",
    description: "데이터와 현장을 기반으로 분석합니다.",
  },
  {
    index: "03",
    title: "Design",
    description: "실행 가능한 전략과 체계를 설계합니다.",
  },
  {
    index: "04",
    title: "Deliver",
    description: "조직이 실제로 실행할 수 있는 결과물로 연결합니다.",
  },
] as const;

export const insights = [
  {
    category: "Corporate Strategy",
    date: "2026.01",
    title: "2026 산업전략에서 기업이 주목해야 할 5가지 변화",
  },
  {
    category: "Public Sector",
    date: "2025.11",
    title: "공공기관 성과관리체계가 실패하는 이유",
  },
  {
    category: "Research & Methodology",
    date: "2025.09",
    title: "데이터 기반 전략수립을 위한 실무 프레임워크",
  },
] as const;

export const contactInfo = {
  email: "hello@nexus-strategy.com",
  phone: "02-0000-0000",
  address: "서울특별시 중구 세종대로 00",
} as const;
