export type Code = {
    id: number;
    code_group_id: number;
    code_group_name: string;
    name: string;
    name_en: string;
    parent_id: number;
    slug: string;
};

// 업종 (Industry)
export const industryCodes: Code[] = [
    { id: 1, code_group_id: 1, code_group_name: "biz", name: "광고,방송,언론", name_en: "Advertising & Media", parent_id: 0, slug: "advertising-media" },
    { id: 2, code_group_id: 1, code_group_name: "biz", name: "광업", name_en: "The mining industry", parent_id: 0, slug: "the-mining-industry" },
    { id: 3, code_group_id: 1, code_group_name: "biz", name: "건설,토목", name_en: "Construction", parent_id: 0, slug: "construction" },
    { id: 4, code_group_id: 1, code_group_name: "biz", name: "고무,플라스틱", name_en: "Plastic", parent_id: 0, slug: "plastic" },
    { id: 5, code_group_id: 1, code_group_name: "biz", name: "공공", name_en: "Public", parent_id: 0, slug: "public" },
];

// 직종 (Job Category)
export const jobCategoryCodes: Code[] = [
    { id: 44, code_group_id: 2, code_group_name: "work", name: "사무관리직", name_en: "Office Work", parent_id: 0, slug: "office-work" },
    { id: 45, code_group_id: 2, code_group_name: "work", name: "일반사무직", name_en: "General office work", parent_id: 44, slug: "general-office-work" },
    { id: 46, code_group_id: 2, code_group_name: "work", name: "기획직", name_en: "Planning", parent_id: 44, slug: "planning" },
    { id: 47, code_group_id: 2, code_group_name: "work", name: "마케팅,시장조사", name_en: "Marketing", parent_id: 44, slug: "marketing" },
    { id: 48, code_group_id: 2, code_group_name: "work", name: "광고,홍보", name_en: "Advertising & PR", parent_id: 44, slug: "advertising-pr" },
    { id: 49, code_group_id: 2, code_group_name: "work", name: "비서", name_en: "Secretary", parent_id: 44, slug: "secretary" },
    { id: 50, code_group_id: 2, code_group_name: "work", name: "인사,인재개발", name_en: "Human resources", parent_id: 44, slug: "human-resources" },
    { id: 55, code_group_id: 2, code_group_name: "work", name: "영업직", name_en: "Sales", parent_id: 0, slug: "sales" },
    { id: 56, code_group_id: 2, code_group_name: "work", name: "해외영업", name_en: "Oversea sales", parent_id: 55, slug: "oversea-sales" },
    { id: 57, code_group_id: 2, code_group_name: "work", name: "기술영업", name_en: "Technology sales", parent_id: 55, slug: "technology-sales" },
    { id: 58, code_group_id: 2, code_group_name: "work", name: "영업관리", name_en: "Sales Executive", parent_id: 55, slug: "sales-executive" },
    { id: 59, code_group_id: 2, code_group_name: "work", name: "국내영업, 판매세일즈", name_en: "Domestic Sales", parent_id: 55, slug: "domestic-sales" },
];
