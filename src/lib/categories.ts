export type Category = {
  slug: string;
  labelEn: string;
  labelBn: string;
  weight: number;
};

export const CATEGORIES: Category[] = [
  { slug: "kidney-basic", labelEn: "Kidney Basics", labelBn: "কিডনি বেসিক", weight: 1 },
  { slug: "ckd", labelEn: "Chronic Kidney Disease (CKD)", labelBn: "ক্রনিক কিডনি ডিজিজ", weight: 2 },
  { slug: "aki", labelEn: "Acute Kidney Injury (AKI)", labelBn: "একিউট কিডনি ইনজুরি", weight: 3 },
  { slug: "dialysis", labelEn: "Dialysis", labelBn: "ডায়ালাইসিস", weight: 4 },
  { slug: "renal-transplantation", labelEn: "Renal Transplantation", labelBn: "রেনাল ট্রান্সপ্লান্টেশন", weight: 5 },
  { slug: "urology", labelEn: "Urology", labelBn: "ইউরোলজি", weight: 6 },
  { slug: "paediatric-nephrology", labelEn: "Paediatric Nephrology", labelBn: "শিশু নেফ্রোলজি", weight: 7 },
  { slug: "renal-diet", labelEn: "Renal Diet", labelBn: "রেনাল ডায়েট", weight: 8 },
  { slug: "kidney-disease-and-pregnancy", labelEn: "Kidney Disease & Pregnancy", labelBn: "কিডনি রোগ ও গর্ভাবস্থা", weight: 9 },
  { slug: "diabetes", labelEn: "Diabetes", labelBn: "ডায়াবেটিস", weight: 10 },
  { slug: "others", labelEn: "Others", labelBn: "অন্যান্য", weight: 11 },
];

export const categoryBySlug = (slug: string) => CATEGORIES.find((c) => c.slug === slug);

export type EmergencyCategory = {
  slug: string;
  labelEn: string;
  labelBn: string;
};

export const EMERGENCY_CATEGORIES: EmergencyCategory[] = [
  { slug: "nephrology-doctors", labelEn: "Nephrology Doctors", labelBn: "নেফ্রোলজি ডাক্তার" },
  { slug: "vascular-surgeons", labelEn: "Vascular Surgeons", labelBn: "ভাস্কুলার সার্জন" },
  { slug: "dialysis-centers", labelEn: "Dialysis Centers", labelBn: "ডায়ালাইসিস সেন্টার" },
  { slug: "blood-banks", labelEn: "Blood Banks", labelBn: "ব্লাড ব্যাংক" },
];
