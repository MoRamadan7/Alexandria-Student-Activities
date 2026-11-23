/**
 * Alexandria University Student Union - Student Activities Database
 * Official Frontend Application Engine (Updated with Supervisors & Modern UX)
 */

// 1. Reference Data: Alexandria University 21 Faculties
const faculties = [
  'الآداب', 'السياحة والفنادق', 'التربية', 'الأعمال', 'الحقوق', 'العلوم',
  'الهندسة', 'زراعة الشاطبي', 'زراعة سابا باشا', 'التربية النوعية',
  'التربية للطفولة المبكرة', 'علوم الرياضة بنين', 'علوم الرياضة بنات',
  'الطب البيطري', 'طب الأسنان', 'الطب البشري', 'التمريض',
  'الحاسبات وعلوم البيانات', 'الدراسات الاقتصادية والعلوم السياسية',
  'الصيدلة', 'الفنون الجميلة'
];

// 2. Common Faculty Aliases & Dialect Mapping
const facultyAliases = {
  'اداب':'الآداب', 'الاداب':'الآداب', 'سياحه':'السياحة والفنادق', 'سياحه وفنادق':'السياحة والفنادق', 'السياحه والفنادق':'السياحة والفنادق',
  'تجاره':'الأعمال', 'التجارة':'الأعمال', 'تجارة':'الأعمال', 'اعمال':'الأعمال', 'كليه الاعمال':'الأعمال', 'الأعمال والتجارة':'الأعمال',
  'هندسه':'الهندسة', 'الهندسه':'الهندسة', 'زراعه الشاطبي':'زراعة الشاطبي', 'زراعه سابا باشا':'زراعة سابا باشا', 'زراعة ساباباشا':'زراعة سابا باشا',
  'طفوله':'التربية للطفولة المبكرة', 'تربيه طفوله':'التربية للطفولة المبكرة', 'تربية طفولة':'التربية للطفولة المبكرة', 'طفولة مبكرة':'التربية للطفولة المبكرة',
  'تربيه نوعيه':'التربية النوعية', 'تربية نوعية':'التربية النوعية', 'نوعية':'التربية النوعية',
  'تربيه رياضيه':'علوم الرياضة بنين', 'تربية رياضية':'علوم الرياضة بنين', 'علوم رياضه':'علوم الرياضة بنين', 'رياضة بنين':'علوم الرياضة بنين', 'رياضة بنات':'علوم الرياضة بنات',
  'بطري':'الطب البيطري', 'طب بطري':'الطب البيطري', 'بيطري':'الطب البيطري', 'البيطري':'الطب البيطري',
  'اسنان':'طب الأسنان', 'الاسنان':'طب الأسنان', 'طب اسنان':'طب الأسنان',
  'طب':'الطب البشري', 'بشري':'الطب البشري', 'الطب':'الطب البشري',
  'حاسبات':'الحاسبات وعلوم البيانات', 'حاسبات ومعلومات':'الحاسبات وعلوم البيانات', 'حاسبات وعلوم البيانات':'الحاسبات وعلوم البيانات', 'حاسبات وذكاء اصطناعي':'الحاسبات وعلوم البيانات',
  'سياسه واقتصاد':'الدراسات الاقتصادية والعلوم السياسية', 'سياسة واقتصاد':'الدراسات الاقتصادية والعلوم السياسية', 'اقتصاد وعلوم سياسيه':'الدراسات الاقتصادية والعلوم السياسية', 'اقتصاد وعلوم سياسية':'الدراسات الاقتصادية والعلوم السياسية',
  'فنون جميله':'الفنون الجميلة', 'فنون جميلة':'الفنون الجميلة', 'الفنون جميله':'الفنون الجميلة',
  'صيدله':'الصيدلة', 'الصيدله':'الصيدلة', 'تمريض':'التمريض', 'التمريض':'التمريض',
  'حقوق':'الحقوق', 'الحقوق':'الحقوق', 'علوم':'العلوم', 'العلوم':'العلوم', 'تربيه':'التربية', 'التربيه':'التربية'
};

// 3. Egyptian Governorates by Code (Digits 8 & 9 in Egyptian National ID)
const GOVERNORATES = {
  '01': 'القاهرة', '02': 'الإسكندرية', '03': 'بورسعيد', '04': 'السويس',
  '11': 'دمياط', '12': 'الدقهلية', '13': 'الشرقية', '14': 'القليوبية',
  '15': 'كفر الشيخ', '16': 'الغربية', '17': 'المنوفية', '18': 'البحيرة',
  '19': 'الإسماعيلية', '21': 'الجيزة', '22': 'بني سويف', '23': 'الفيوم',
  '24': 'المنيا', '25': 'أسيوط', '26': 'سوهاج', '27': 'قنا',
  '28': 'أسوان', '29': 'الأقصر', '31': 'البحر الأحمر', '32': 'الوادي الجديد',
  '33': 'مطروح', '34': 'شمال سيناء', '35': 'جنوب سيناء', '88': 'خارج الجمهورية'
};

// 4. Initial Seed Data: Supervisors Team
const defaultSupervisors = [
  { id: 1, name: 'محمد فوزي', role: 'مشرف عام الاتحاد', phone: '01001234567', faculty: 'الإدارة العامة لرعاية الشباب', status: 'نشط' },
  { id: 2, name: 'شهاب محروس', role: 'مدير إدارة الاتحادات الطلابية', phone: '01112345678', faculty: 'الإدارة العامة لرعاية الشباب', status: 'نشط' },
  { id: 3, name: 'د. نجلاء حسن', role: 'رائد أسرة ومستشار الأنشطة', phone: '01223456789', faculty: 'كلية الأعمال', status: 'نشط' },
  { id: 4, name: 'أحمد صبري', role: 'أخصائي رعاية شباب أول', phone: '01554321987', faculty: 'كلية الهندسة', status: 'نشط' },
  { id: 5, name: 'محمود عبد الحميد', role: 'قائد تدريب الجوالة والخدمة العامة', phone: '01098765432', faculty: 'إدارة الجوالة والخدمة العامة', status: 'نشط' },
  { id: 6, name: 'د. كريم شوقي', role: 'مشرف النشاط الرياضي الجامعي', phone: '01155667788', faculty: 'كلية علوم الرياضة بنين', status: 'نشط' },
  { id: 7, name: 'منى إبراهيم', role: 'مسؤول الاتصال الطلابي والأنشطة', phone: '01288990011', faculty: 'الإدارة العامة لرعاية الشباب', status: 'نشط' },
  { id: 8, name: 'آية سمير', role: 'منسق التدريب والتأهيل الرقمي', phone: '01066778899', faculty: 'كلية الحاسبات وعلوم البيانات', status: 'نشط' },
  { id: 9, name: 'محمود فريد', role: 'أخصائي النشاط الثقافي والفني', phone: '01511223344', faculty: 'الإدارة العامة لرعاية الشباب', status: 'نشط' }
];

// Initial Seed Data: Students
const defaultStudents = [
  { id: 1, name: 'أحمد محمد السيد', faculty: 'الهندسة', year: 'الفرقة الثالثة', phone: '01012344821', national: '30304150201235', entities: ['اتحاد طلاب الكلية', 'الجوالة'], status: 'نشط' },
  { id: 2, name: 'فاطمة محمود علي', faculty: 'الصيدلة', year: 'الفرقة الثانية', phone: '01123459032', national: '30409200204562', entities: ['الأسر الطلابية'], status: 'نشط' },
  { id: 3, name: 'يوسف خالد إبراهيم', faculty: 'الأعمال', year: 'الفرقة الرابعة', phone: '01234561170', national: '30211051807891', entities: ['القادة الاجتماعيون'], status: 'نشط' },
  { id: 4, name: 'مريم هاني مصطفى', faculty: 'الآداب', year: 'الفرقة الأولى', phone: '01545676844', national: '30501180203124', entities: ['اتحاد طلاب الكلية'], status: 'نشط' },
  { id: 5, name: 'عمر وليد حسن', faculty: 'الحاسبات وعلوم البيانات', year: 'الفرقة الثالثة', phone: '01056785103', national: '30308300206531', entities: ['فريق المتطوعين', 'الجوالة'], status: 'نشط' },
  { id: 6, name: 'سارة شريف كامل', faculty: 'السياحة والفنادق', year: 'الفرقة الثانية', phone: '01167892916', national: '30403120208146', entities: ['الأسر الطلابية'], status: 'محظور' },
  { id: 7, name: 'زياد عمرو عبد الله', faculty: 'الحقوق', year: 'الفرقة الرابعة', phone: '01278903588', national: '30206251601453', entities: ['اتحاد طلاب الجامعة'], status: 'نشط' },
  { id: 8, name: 'منة الله سامح', faculty: 'التمريض', year: 'الفرقة الأولى', phone: '01589017504', national: '30512040209822', entities: ['فريق المتطوعين'], status: 'نشط' }
];

// Initial Seed Data: Events
const defaultEvents = [
  { id: 1, title: 'المعسكر التثقيفي لإعداد وتأهيل القيادات الطلابية', date: '17–18 نوفمبر 2026', day: '17', month: 'نوفمبر', place: 'قرية فخر البحار – سيدي كرير', registered: 54, days: 2, supervisorIds: [1, 2], attendeeIds: [1, 2, 3, 4, 5, 7, 8], status: 'مكتملة', organizer: 'اتحاد طلاب الجامعة' },
  { id: 2, title: 'ملتقى الابتكار وريادة الأعمال الطلابي', date: '24 نوفمبر 2026', day: '24', month: 'نوفمبر', place: 'مركز المؤتمرات – سموحة', registered: 210, days: 1, supervisorIds: [3, 4], attendeeIds: [1, 3, 5, 7], status: 'قادمة', organizer: 'الأسر الطلابية' },
  { id: 3, title: 'معسكر الجوالة والخدمة العامة', date: '2–5 ديسمبر 2026', day: '02', month: 'ديسمبر', place: 'المدينة الشبابية – أبو قير', registered: 120, days: 4, supervisorIds: [5], attendeeIds: [1, 5], status: 'قادمة', organizer: 'الجوالة' },
  { id: 4, title: 'المهرجان الرياضي لكليات الجامعة', date: '10 نوفمبر 2026', day: '10', month: 'نوفمبر', place: 'استاد الجامعة', registered: 338, days: 1, supervisorIds: [6, 7], attendeeIds: [1, 2, 3, 5, 7, 8], status: 'مكتملة', organizer: 'اتحاد طلاب الجامعة' },
  { id: 5, title: 'ندوة الوعي الرقمي والأمن السيبراني', date: '5 نوفمبر 2026', day: '05', month: 'نوفمبر', place: 'كلية الحاسبات وعلوم البيانات', registered: 156, days: 1, supervisorIds: [8], attendeeIds: [5, 7], status: 'مكتملة', organizer: 'اتحاد طلاب الكلية' },
  { id: 6, title: 'زيارة مكتبة الإسكندرية', date: '28 أكتوبر 2026', day: '28', month: 'أكتوبر', place: 'مكتبة الإسكندرية', registered: 80, days: 1, supervisorIds: [9], attendeeIds: [2, 4], status: 'مكتملة', organizer: 'النشاط الثقافي' }
];

const defaultEntities = [
  { id: 1, name: 'اتحاد طلاب الجامعة', icon: 'landmark', type: 'اتحاد', status: 'نشط' },
  { id: 2, name: 'اتحادات طلاب الكليات', icon: 'building-2', type: 'اتحاد', status: 'نشط' },
  { id: 3, name: 'الجوالة', icon: 'tent-tree', type: 'فريق', status: 'نشط' },
  { id: 4, name: 'الأسر الطلابية', icon: 'users-round', type: 'أسرة', status: 'نشط' },
  { id: 5, name: 'القادة الاجتماعيون', icon: 'hand-heart', type: 'نشاط', status: 'نشط' },
  { id: 6, name: 'فريق المتطوعين', icon: 'heart-handshake', type: 'فريق', status: 'نشط' },
  { id: 7, name: 'النشاط الثقافي', icon: 'book-open', type: 'نشاط', status: 'نشط' },
  { id: 8, name: 'النشاط الرياضي', icon: 'trophy', type: 'نشاط', status: 'نشط' }
];

const defaultBans = [
  { id: 1, studentId: 6, name: 'سارة شريف كامل', faculty: 'السياحة والفنادق', national: '30403120208146', type: 'مؤقت', reason: 'مخالفة ضوابط المشاركة في الفاعلية', from: '2026-11-10', to: '2027-01-10', by: 'محمد مرسال', active: true },
  { id: 2, studentId: null, name: 'محمود عادل حسين', faculty: 'الحقوق', national: '30105120209871', type: 'نهائي', reason: 'قرار إداري موثق من مجلس التأديب', from: '2026-10-02', to: '—', by: 'شهاب محروس', active: true },
  { id: 3, studentId: null, name: 'نور أحمد لطفي', faculty: 'التربية', national: '30309190204128', type: 'مؤقت', reason: 'تحت المراجعة والتحقيق الإداري', from: '2026-11-15', to: '2026-11-30', by: 'محمد مرسال', active: true }
];

const defaultUsers = [
  { id: 1, name: 'محمد مرسال', email: 'mohamed@example.com', role: 'أدمن عام', last: 'اليوم، 4:20 م', status: 'نشط' },
  { id: 2, name: 'شهاب محروس', email: 'shehab@example.com', role: 'أدمن عام', last: 'أمس، 8:15 م', status: 'نشط' },
  { id: 3, name: 'أحمد صبري', email: 'ahmed@example.com', role: 'مشاهد', last: '17 نوفمبر، 11:02 ص', status: 'نشط' },
  { id: 4, name: 'منى إبراهيم', email: 'mona@example.com', role: 'مشاهد', last: 'لم يسجل الدخول بعد', status: 'دعوة معلقة' }
];

// 5. Persistent Storage Layer
const Storage = {
  get(key, fallback) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : fallback;
    } catch {
      return fallback;
    }
  },
  set(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.warn('Storage set failed', e);
    }
  },
  saveAll() {
    this.set('asa_students', state.students);
    this.set('asa_events', state.events);
    this.set('asa_supervisors', state.supervisors);
    this.set('asa_bans', state.bans);
    this.set('asa_entities', state.entities);
    this.set('asa_users', state.users);
    this.set('asa_supabase', state.supabase);
  },
  reset() {
    localStorage.removeItem('asa_students');
    localStorage.removeItem('asa_events');
    localStorage.removeItem('asa_supervisors');
    localStorage.removeItem('asa_bans');
    localStorage.removeItem('asa_entities');
    localStorage.removeItem('asa_users');
    state.students = JSON.parse(JSON.stringify(defaultStudents));
    state.events = JSON.parse(JSON.stringify(defaultEvents));
    state.supervisors = JSON.parse(JSON.stringify(defaultSupervisors));
    state.bans = JSON.parse(JSON.stringify(defaultBans));
    state.entities = JSON.parse(JSON.stringify(defaultEntities));
    state.users = JSON.parse(JSON.stringify(defaultUsers));
    this.saveAll();
  }
};

// 6. Application State
const state = {
  page: 'dashboard',
  students: Storage.get('asa_students', defaultStudents),
  events: Storage.get('asa_events', defaultEvents),
  supervisors: Storage.get('asa_supervisors', defaultSupervisors),
  bans: Storage.get('asa_bans', defaultBans),
  entities: Storage.get('asa_entities', defaultEntities),
  users: Storage.get('asa_users', defaultUsers),
  supabase: Storage.get('asa_supabase', { url: '', key: '', connected: false }),
  importedRows: [],
  currentRole: 'admin'
};

const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];

// 7. Normalization & Egyptian Validation Helpers
function normalizeArabic(value = '') {
  return String(value).trim().toLowerCase()
    .replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي')
    .replace(/[\u064B-\u065F\u0670ـ]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function canonicalFaculty(v = '') {
  const n = normalizeArabic(v).replace(/^كليه\s*/, '').replace(/^كلية\s*/, '').replace(/\s+و\s+/g, ' و');
  if (facultyAliases[n]) return facultyAliases[n];
  const direct = faculties.find(f => normalizeArabic(f) === n);
  if (direct) return direct;
  const partial = Object.keys(facultyAliases).find(k => n.includes(k) || k.includes(n));
  return partial ? facultyAliases[partial] : String(v).trim() || 'غير محددة';
}

function digits(v) {
  return String(v ?? '')
    .replace(/\.0$/, '')
    .replace(/[^0-9٠-٩]/g, '')
    .replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
}

function parseEgyptianNationalID(idStr) {
  const id = digits(idStr);
  if (id.length !== 14) {
    return { valid: false, error: 'الرقم القومي يجب أن يتكون من 14 رقماً بالضبط.' };
  }
  const centuryChar = id[0];
  if (centuryChar !== '2' && centuryChar !== '3') {
    return { valid: false, error: 'أول رقم يجب أن يكون 2 (لمواليد 1900-1999) أو 3 (لمواليد 2000-2099).' };
  }
  const century = centuryChar === '2' ? 1900 : 2000;
  const year = century + parseInt(id.substring(1, 3), 10);
  const month = parseInt(id.substring(3, 5), 10);
  const day = parseInt(id.substring(5, 7), 10);
  if (month < 1 || month > 12) {
    return { valid: false, error: 'شهر الميلاد في الرقم القومي غير صحيح.' };
  }
  if (day < 1 || day > 31) {
    return { valid: false, error: 'يوم الميلاد في الرقم القومي غير صحيح.' };
  }
  const dateObj = new Date(year, month - 1, day);
  if (isNaN(dateObj.getTime()) || dateObj.getDate() !== day) {
    return { valid: false, error: 'تاريخ الميلاد في الرقم القومي غير حقيقي وفق التقويم.' };
  }
  const govCode = id.substring(7, 9);
  const governorate = GOVERNORATES[govCode] || 'أخرى / غير محددة';
  const genderDigit = parseInt(id[12], 10);
  const gender = genderDigit % 2 === 1 ? 'ذكر' : 'أنثى';

  const today = new Date();
  let age = today.getFullYear() - year;
  if (today.getMonth() < (month - 1) || (today.getMonth() === (month - 1) && today.getDate() < day)) {
    age--;
  }

  return {
    valid: true,
    id,
    birthDate: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
    birthDateFormatted: `${day}/${month}/${year}`,
    governorate,
    gender,
    age
  };
}

function validateEgyptianPhone(phoneStr) {
  const p = digits(phoneStr);
  const valid = /^01[0125][0-9]{8}$/.test(p);
  return {
    valid,
    phone: p,
    error: valid ? '' : 'رقم الهاتف يجب أن يكون 11 رقماً ويبدأ بـ 010 أو 011 أو 012 أو 015.'
  };
}

function maskNationalID(nat) {
  const s = String(nat || '');
  if (s.length !== 14) return s;
  return `${s.slice(0, 2)}••••••••${s.slice(10)}`;
}

function maskPhone(ph) {
  const s = String(ph || '');
  if (s.length !== 11) return s;
  return `${s.slice(0, 3)}••••${s.slice(7)}`;
}

function yearLabel(v) {
  const d = digits(v);
  if (d === '1') return 'الفرقة الأولى';
  if (d === '2') return 'الفرقة الثانية';
  if (d === '3') return 'الفرقة الثالثة';
  if (d === '4') return 'الفرقة الرابعة';
  if (d === '5') return 'الفرقة الخامسة';
  if (d === '6') return 'الفرقة السادسة';
  return String(v || 'غير محددة');
}

function safe(s) {
  return String(s ?? '').replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
}

function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(x => x[0] || '').join('');
}

function iconRefresh() {
  if (window.lucide) lucide.createIcons();
}

function getStudentEvents(studentId) {
  return state.events.filter(e => (e.attendeeIds || []).includes(studentId));
}

function getSupervisorEvents(supervisorId) {
  return state.events.filter(e => (e.supervisorIds || []).includes(supervisorId));
}

function getEventSupervisors(event) {
  if (event.supervisorIds && event.supervisorIds.length) {
    return state.supervisors.filter(s => event.supervisorIds.includes(s.id));
  }
  return [];
}

function isStudentBanned(studentOrId) {
  const sid = typeof studentOrId === 'object' ? studentOrId.id : studentOrId;
  const snat = typeof studentOrId === 'object' ? studentOrId.national : null;
  return state.bans.find(b => b.active !== false && (b.studentId === sid || (snat && b.national === snat)));
}

// 8. Navigation & Routing
function navigate(id) {
  state.page = id;
  $$('.page').forEach(p => p.classList.toggle('active', p.id === id));
  $$('[data-page]').forEach(b => b.classList.toggle('active', b.dataset.page === id));
  $('.sidebar').classList.remove('open');
  $('#drawerOverlay').classList.remove('show');
  const sheet = $('#moreBottomSheet');
  if (sheet) sheet.classList.remove('show');
  closeDropdowns();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  iconRefresh();
}

function closeDropdowns() {
  const nd = $('#notifyDropdown');
  if (nd) nd.classList.remove('show');
  const pd = $('#profileDropdown');
  if (pd) pd.classList.remove('show');
}

// 9. Real-time Dashboard Metrics & Faculty Bars
function updateDashboardStats() {
  const totalStudents = state.students.length;
  const totalEvents = state.events.length;
  const totalAttendance = state.events.reduce((sum, e) => sum + (e.attendeeIds || []).length, 0);
  const activeBans = state.bans.filter(b => b.active !== false).length;

  if ($('#statTotalStudents')) $('#statTotalStudents').textContent = totalStudents.toLocaleString('ar-EG');
  if ($('#statTotalEvents')) $('#statTotalEvents').textContent = totalEvents.toLocaleString('ar-EG');
  if ($('#statTotalAttendance')) $('#statTotalAttendance').textContent = totalAttendance.toLocaleString('ar-EG');
  if ($('#statTotalBans')) $('#statTotalBans').textContent = activeBans.toLocaleString('ar-EG');

  // Bans summary numbers
  const tempBans = state.bans.filter(b => b.active !== false && b.type === 'مؤقت').length;
  const permBans = state.bans.filter(b => b.active !== false && b.type === 'نهائي').length;
  if ($('#banTotal')) $('#banTotal').textContent = activeBans.toLocaleString('ar-EG');
  if ($('#banTemp')) $('#banTemp').textContent = tempBans.toLocaleString('ar-EG');
  if ($('#banPerm')) $('#banPerm').textContent = permBans.toLocaleString('ar-EG');
  if ($('#banExpMonth')) $('#banExpMonth').textContent = Math.min(tempBans, 3).toLocaleString('ar-EG');

  // Faculty distribution bars from actual students
  const facultyCounts = {};
  state.students.forEach(s => {
    facultyCounts[s.faculty] = (facultyCounts[s.faculty] || 0) + 1;
  });
  const sorted = Object.entries(facultyCounts).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const max = sorted[0] ? sorted[0][1] : 1;
  if ($('#facultyBars')) {
    $('#facultyBars').innerHTML = sorted.length ? sorted.map(([f, c]) => {
      const pct = Math.round((c / max) * 100);
      return `<div class="bar-row">
        <div class="bar-label"><span>${safe(f)}</span><span>${c.toLocaleString('ar-EG')} طالب</span></div>
        <div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>
      </div>`;
    }).join('') : '<p style="padding:15px;color:var(--muted);font-size:12px">لا توجد بيانات كافية</p>';
  }

  // Academic Year Distribution & Percentages
  const yearCounts = {};
  state.students.forEach(s => {
    const yr = s.year || 'غير محدد';
    yearCounts[yr] = (yearCounts[yr] || 0) + 1;
  });

  const preferredYears = [
    'الفرقة الأولى', 'الفرقة الثانية', 'الفرقة الثالثة', 'الفرقة الرابعة', 'الفرقة الخامسة', 'الفرقة السادسة', 'إعدادي', 'دراسات عليا'
  ];

  const sortedYears = Object.keys(yearCounts).sort((a, b) => {
    const idxA = preferredYears.indexOf(a);
    const idxB = preferredYears.indexOf(b);
    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
    if (idxA !== -1) return -1;
    if (idxB !== -1) return 1;
    return yearCounts[b] - yearCounts[a];
  });

  if ($('#totalYearsStudentBadge')) {
    $('#totalYearsStudentBadge').textContent = `${totalStudents.toLocaleString('ar-EG')} طالب`;
  }

  if ($('#academicYearBars')) {
    $('#academicYearBars').innerHTML = sortedYears.length ? sortedYears.map(yr => {
      const c = yearCounts[yr];
      const pct = totalStudents > 0 ? ((c / totalStudents) * 100).toFixed(1) : '0.0';
      return `
        <div class="bar-row" data-filter-year="${safe(yr)}" title="انقر لتصفية طلاب ${safe(yr)}" style="cursor:pointer">
          <div class="bar-label">
            <span style="font-weight:600">${safe(yr)}</span>
            <span style="display:inline-flex;align-items:center;gap:6px">
              <strong style="color:var(--primary)">${c.toLocaleString('ar-EG')} طالب</strong>
              <span class="badge ${c > 0 ? 'active' : 'temp'}" style="font-size:10px;padding:1px 6px">${pct}%</span>
            </span>
          </div>
          <div class="bar-track">
            <div class="bar-fill" style="width:${pct}%;background:linear-gradient(90deg, #0284c7, #2563eb);"></div>
          </div>
        </div>
      `;
    }).join('') : '<p style="padding:15px;color:var(--muted);font-size:12px">لا توجد بيانات كافية</p>';

    // Bind click to filter by that academic year
    $$('#academicYearBars [data-filter-year]').forEach(el => {
      el.onclick = () => {
        const yr = el.dataset.filterYear;
        navigate('students');
        if ($('#studentSearch')) {
          $('#studentSearch').value = yr;
          filterStudents();
        }
      };
    });
  }

  renderNotifications();
}

function renderNotifications() {
  const list = $('#notifyList');
  if (!list) return;
  const items = [];
  state.events.slice(0, 3).forEach(e => {
    items.push({
      icon: 'calendar-check',
      title: `فاعلية: ${safe(e.title)}`,
      time: e.date,
      desc: `حضر ${ (e.attendeeIds || []).length } طالب مسجل`
    });
  });
  state.bans.filter(b => b.active !== false).slice(0, 2).forEach(b => {
    items.push({
      icon: 'shield-alert',
      title: `قرار حظر: ${safe(b.name)}`,
      time: b.from,
      desc: b.reason
    });
  });
  list.innerHTML = items.map(it => `
    <div class="dropdown-item">
      <i data-lucide="${it.icon}"></i>
      <div style="flex:1">
        <strong>${it.title}</strong>
        <div style="font-size:10px;color:var(--muted)">${safe(it.desc)} · ${safe(it.time)}</div>
      </div>
    </div>
  `).join('');
  iconRefresh();
}

// ==========================================================================
// Comprehensive Faculty Participation & Attendance Report Modal
// ==========================================================================

function showFacultyReportModal() {
  function computeFacultyReport() {
    return faculties.map(fac => {
      const regStudents = state.students.filter(s => s.faculty === fac);
      const regCount = regStudents.length;

      let attendedUnique = 0;
      let totalAttendance = 0;
      const attendedEventIds = new Set();

      regStudents.forEach(st => {
        let stCount = 0;
        state.events.forEach(ev => {
          if ((ev.attendeeIds || []).includes(st.id)) {
            stCount++;
            attendedEventIds.add(ev.id);
          }
        });
        if (stCount > 0) attendedUnique++;
        totalAttendance += stCount;
      });

      const rate = regCount > 0 ? parseFloat(((attendedUnique / regCount) * 100).toFixed(1)) : 0.0;

      return {
        faculty: fac,
        registered: regCount,
        attendedUnique,
        totalAttendance,
        eventsCount: attendedEventIds.size,
        rate
      };
    });
  }

  const rawData = computeFacultyReport();
  // Sort by attendedUnique descending, then rate descending
  rawData.sort((a, b) => b.attendedUnique - a.attendedUnique || b.rate - a.rate || b.registered - a.registered);

  const activeFaculties = rawData.filter(d => d.attendedUnique > 0);
  const totalAttendedStudents = new Set(
    state.students.filter(s => state.events.some(e => (e.attendeeIds || []).includes(s.id))).map(s => s.id)
  ).size;
  const topFaculty = activeFaculties[0] || null;
  const avgRate = activeFaculties.length > 0 
    ? (activeFaculties.reduce((sum, f) => sum + f.rate, 0) / activeFaculties.length).toFixed(1)
    : '0.0';

  const modalHtml = `
    <div style="display:flex;flex-direction:column;gap:14px">
      <!-- 1. بطاقات الإحصاءات العامة للكليات -->
      <div class="faculty-metrics-grid">
        <div class="faculty-metric-card">
          <div class="faculty-metric-icon"><i data-lucide="building"></i></div>
          <div class="faculty-metric-info">
            <span>الكليات المشاركة</span>
            <strong>${activeFaculties.length} / ${faculties.length}</strong>
          </div>
        </div>

        <div class="faculty-metric-card">
          <div class="faculty-metric-icon"><i data-lucide="award"></i></div>
          <div class="faculty-metric-info">
            <span>أعلى كلية حضوراً</span>
            <strong>${topFaculty ? topFaculty.faculty : 'لا توجد'}</strong>
          </div>
        </div>

        <div class="faculty-metric-card">
          <div class="faculty-metric-icon"><i data-lucide="users"></i></div>
          <div class="faculty-metric-info">
            <span>إجمالي الطلاب الحاضرين</span>
            <strong>${totalAttendedStudents} طالب</strong>
          </div>
        </div>

        <div class="faculty-metric-card">
          <div class="faculty-metric-icon"><i data-lucide="trending-up"></i></div>
          <div class="faculty-metric-info">
            <span>متوسط نسبة المشاركة</span>
            <strong>${avgRate}%</strong>
          </div>
        </div>
      </div>

      <!-- 2. حقل البحث السريع بالكلية -->
      <div style="display:flex;gap:10px;align-items:center;background:#f8fafc;padding:8px 12px;border-radius:10px;border:1px solid var(--border)">
        <i data-lucide="search" style="color:var(--muted)"></i>
        <input id="facRepSearch" placeholder="ابحث باسم الكلية للتصفية السريعة..." style="border:0;background:transparent;outline:none;width:100%;font-size:12.5px">
      </div>

      <!-- 3. جدول تفاصيل الحضور والمشاركات -->
      <div class="table-wrap" style="max-height:380px;overflow-y:auto;border:1px solid #e2e8f0;border-radius:10px">
        <table style="width:100%;font-size:12px;border-collapse:collapse">
          <thead style="position:sticky;top:0;background:#073b67;color:#fff;z-index:2">
            <tr>
              <th style="padding:8px 6px;text-align:center;width:5%">م</th>
              <th style="padding:8px 8px;text-align:right;width:24%">الكلية</th>
              <th style="padding:8px 6px;text-align:center;width:12%">المقيدون</th>
              <th style="padding:8px 6px;text-align:center;width:13%">حاضرون فعلياً</th>
              <th style="padding:8px 6px;text-align:center;width:13%">إجمالي الحضور</th>
              <th style="padding:8px 6px;text-align:center;width:11%">الفاعليات</th>
              <th style="padding:8px 8px;text-align:center;width:18%">نسبة الحضور</th>
              <th style="padding:8px 6px;text-align:center;width:14%">إجراءات</th>
            </tr>
          </thead>
          <tbody id="facultyReportTableBody">
            ${renderFacultyReportRows(rawData)}
          </tbody>
        </table>
      </div>

      <!-- 4. أزرار التصدير والإغلاق -->
      <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:8px">
        <button type="button" class="btn ghost modal-cancel">إغلاق</button>
        <button type="button" class="btn secondary" id="facRepExportExcelBtn">
          <i data-lucide="download"></i> تصدير التقرير Excel
        </button>
        <button type="button" class="btn primary" id="facRepExportWordBtn">
          <i data-lucide="file-text"></i> تصدير التقرير كشف Word
        </button>
      </div>
    </div>
  `;

  function renderFacultyReportRows(dataList) {
    if (!dataList.length) {
      return '<tr><td colspan="8" style="text-align:center;padding:18px;color:#888">لا توجد نتائج مطابقة لبحثك.</td></tr>';
    }
    return dataList.map((f, idx) => {
      let progressClass = 'low';
      if (f.rate >= 75) progressClass = 'high';
      else if (f.rate >= 40) progressClass = 'med';

      return `
        <tr style="border-bottom:1px solid #edf2f7;background:${idx % 2 === 0 ? '#fff' : '#f8fbfe'}">
          <td style="text-align:center;font-weight:bold;color:#666">${idx + 1}</td>
          <td style="font-weight:bold;color:#073b67">${safe(f.faculty)}</td>
          <td style="text-align:center;font-family:monospace;font-size:12.5px">${f.registered}</td>
          <td style="text-align:center;font-family:monospace;font-size:12.5px;color:#16a34a;font-weight:bold">${f.attendedUnique}</td>
          <td style="text-align:center;font-family:monospace;font-size:12.5px">${f.totalAttendance}</td>
          <td style="text-align:center;font-family:monospace;font-size:12.5px">${f.eventsCount}</td>
          <td style="text-align:center">
            <span class="fac-progress-bar">
              <span class="fac-progress-fill ${progressClass}" style="width:${Math.min(100, f.rate)}%"></span>
            </span>
            <span style="font-size:11px;font-weight:bold;display:inline-block;width:40px;text-align:left;direction:ltr">${f.rate}%</span>
          </td>
          <td style="text-align:center">
            <button type="button" class="btn secondary sm" data-view-faculty="${safe(f.faculty)}" title="عرض طلاب الكلية" style="padding:3px 7px;font-size:10.5px">الطلاب</button>
          </td>
        </tr>
      `;
    }).join('');
  }

  modal('تقرير ونسب حضور ومشاركات الكليات', 'إحصائيات تفصيلية ومقارنة نسب مشاركة كليات جامعة الإسكندرية (21 كلية)', modalHtml);

  // Search filter
  const searchInp = $('#facRepSearch');
  if (searchInp) {
    searchInp.oninput = (e) => {
      const q = normalizeArabic(e.target.value);
      const filtered = rawData.filter(d => !q || normalizeArabic(d.faculty).includes(q));
      const tb = $('#facultyReportTableBody');
      if (tb) {
        tb.innerHTML = renderFacultyReportRows(filtered);
        bindRowActions();
      }
    };
  }

  function bindRowActions() {
    $$('[data-view-faculty]').forEach(btn => {
      btn.onclick = () => {
        const facName = btn.dataset.viewFaculty;
        closeModal();
        navigate('students');
        if ($('#facultyFilter')) {
          $('#facultyFilter').value = facName;
          renderStudents();
        }
      };
    });
  }

  // Export to Excel
  $('#facRepExportExcelBtn').onclick = () => {
    if (!window.XLSX) {
      toast('تعذر العثور على محرك Excel');
      return;
    }
    const exportRows = rawData.map((f, i) => ({
      'م': i + 1,
      'الكلية': f.faculty,
      'الطلاب المقيدون': f.registered,
      'الحاضرون فعلياً': f.attendedUnique,
      'إجمالي الحضور التراكمي': f.totalAttendance,
      'عدد الفاعليات': f.eventsCount,
      'نسبة الحضور (%)': f.rate
    }));
    const ws = XLSX.utils.json_to_sheet(exportRows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'نسب حضور الكليات');
    XLSX.writeFile(wb, 'تقرير-نسب-حضور-كليات-جامعة-الاسكندرية.xlsx');
    toast('تم تصدير تقرير نسب حضور الكليات إلى ملف Excel بنجاح!');
  };

  // Export to Word
  $('#facRepExportWordBtn').onclick = () => {
    closeModal();
    // Use students who have attended
    const attendedStudents = state.students.filter(s => state.events.some(e => (e.attendeeIds || []).includes(s.id)));
    openWordExportModal('custom', {
      students: attendedStudents,
      title: 'كشف الطلاب المشاركين من مختلف كليات جامعة الإسكندرية',
      meta: `تقرير شامل  |  إجمالي الحضور الفعلي: ${attendedStudents.length} طالب  |  العام الجامعي: 2026 / 2027`
    });
  };

  bindRowActions();
  iconRefresh();
}

// 10. Students Rendering & Actions
function studentRow(s) {
  const eventsCount = getStudentEvents(s.id).length;
  const isBanned = isStudentBanned(s);
  const statusLabel = isBanned ? 'محظور' : s.status;
  const badgeClass = isBanned ? 'banned' : 'active';
  return `<tr>
    <td>
      <div class="student-cell">
        <span class="mini-avatar">${initials(s.name)}</span>
        <div>
          <strong>${safe(s.name)}</strong>
          <small title="${safe(s.national)}">${maskNationalID(s.national)}</small>
        </div>
      </div>
    </td>
    <td><strong>${safe(s.faculty)}</strong><br><small>${safe(s.year)}</small></td>
    <td dir="ltr">${maskPhone(s.phone)}</td>
    <td><div class="tags">${(s.entities || []).map(x => `<span class="tag">${safe(x)}</span>`).join('')}</div></td>
    <td><strong>${eventsCount}</strong> فاعليات</td>
    <td><span class="badge ${badgeClass}">${statusLabel}</span></td>
    <td>
      <div style="display:flex;gap:4px">
        <button class="row-menu" data-view-student="${s.id}" title="عرض الملف الكامل"><i data-lucide="eye"></i></button>
        <button class="row-menu" data-edit-student="${s.id}" title="تعديل"><i data-lucide="pencil"></i></button>
        <button class="row-menu" data-delete-student="${s.id}" title="حذف" style="color:var(--red)"><i data-lucide="trash-2"></i></button>
      </div>
    </td>
  </tr>`;
}

function studentCard(s) {
  const eventsCount = getStudentEvents(s.id).length;
  const isBanned = isStudentBanned(s);
  const statusLabel = isBanned ? 'محظور' : s.status;
  const badgeClass = isBanned ? 'banned' : 'active';
  return `<article class="student-card-mobile">
    <header>
      <div class="student-cell">
        <span class="mini-avatar">${initials(s.name)}</span>
        <div>
          <h3>${safe(s.name)}</h3>
          <p>${safe(s.faculty)} · ${safe(s.year)}</p>
        </div>
      </div>
      <span class="badge ${badgeClass}">${statusLabel}</span>
    </header>
    <p>${safe((s.entities || []).join(' · ')) || 'لا توجد كيانات'}</p>
    <footer>
      <span>${eventsCount} فاعليات</span>
      <div style="display:flex;gap:6px">
        <button class="btn ghost" style="min-height:32px;padding:4px 8px;font-size:11px" data-view-student="${s.id}">الملف</button>
        <button class="btn ghost" style="min-height:32px;padding:4px 8px;font-size:11px" data-edit-student="${s.id}">تعديل</button>
      </div>
    </footer>
  </article>`;
}

function renderStudents(list = state.students) {
  $('#studentsTable').innerHTML = list.map(studentRow).join('') || '<tr><td colspan="7" style="text-align:center;padding:30px;color:var(--muted)">لا يوجد طلاب مطابقين للبحث</td></tr>';
  $('#studentCards').innerHTML = list.map(studentCard).join('') || '<p style="text-align:center;padding:20px;color:var(--muted)">لا يوجد طلاب</p>';
  $('#recentStudents').innerHTML = state.students.slice(-5).reverse().map(studentRow).join('');
  $('#studentCount').textContent = `${list.length.toLocaleString('ar-EG')} طالب`;
  bindStudentRowActions();
  updateDashboardStats();
  iconRefresh();
}

function bindStudentRowActions() {
  $$('[data-view-student]').forEach(b => b.onclick = () => showStudent(state.students.find(s => s.id == b.dataset.viewStudent)));
  $$('[data-edit-student]').forEach(b => b.onclick = () => openForm('editStudent', state.students.find(s => s.id == b.dataset.editStudent)));
  $$('[data-delete-student]').forEach(b => b.onclick = () => deleteStudent(b.dataset.deleteStudent));
}

function deleteStudent(id) {
  const s = state.students.find(x => x.id == id);
  if (!s) return;
  if (confirm(`هل أنت متأكد من حذف الطالب: "${s.name}"؟ سيتم حذفه من كافة الفاعليات وقاعدة البيانات.`)) {
    state.students = state.students.filter(x => x.id != id);
    state.events.forEach(e => {
      e.attendeeIds = (e.attendeeIds || []).filter(x => x != id);
    });
    state.bans = state.bans.filter(b => b.studentId != id);
    Storage.saveAll();
    renderStudents();
    renderEvents();
    renderBans();
    toast(`تم حذف الطالب "${s.name}" بنجاح`);
  }
}

// 11. Events Rendering & Dedicated Event Workspace
function renderEvents() {
  const evs = state.events;
  $('#dashboardEvents').innerHTML = evs.slice(0, 4).map(e => {
    const attendeesCount = (e.attendeeIds || []).length;
    const registered = e.registered || attendeesCount || 1;
    const pct = Math.min(100, Math.round((attendeesCount / registered) * 100));
    return `<div class="event-row">
      <div class="date-tile"><strong>${safe(e.day || '01')}</strong><span>${safe(e.month || 'نوفمبر')}</span></div>
      <div>
        <h4>${safe(e.title)}</h4>
        <p><span>📍 ${safe(e.place)}</span><span>👥 ${attendeesCount} طالب</span></p>
      </div>
      <div class="progress-ring" style="--p:${pct}%"><span>${pct}%</span></div>
    </div>`;
  }).join('');

  $('#eventsGrid').innerHTML = evs.map(e => {
    const attendeesCount = (e.attendeeIds || []).length;
    const registered = e.registered || attendeesCount || 1;
    const eventSups = getEventSupervisors(e);
    const supsText = eventSups.length ? eventSups.map(s => `${s.name} (${s.role})`).join(' · ') : (e.supervisors || []).join(' · ') || 'غير محدد';

    return `<article class="event-card">
      <div class="event-card-top"></div>
      <div class="event-card-body">
        <div class="event-status">
          <span class="badge ${e.status === 'قادمة' ? 'temp' : 'active'}">${safe(e.status)}</span>
          <div style="display:flex;gap:4px">
            <button class="row-menu" data-edit-event="${e.id}" title="تعديل"><i data-lucide="pencil"></i></button>
            <button class="row-menu" data-delete-event="${e.id}" title="حذف" style="color:var(--red)"><i data-lucide="trash-2"></i></button>
          </div>
        </div>
        <h3>${safe(e.title)}</h3>
        <div class="event-info">
          <span><i data-lucide="calendar"></i>${safe(e.date)}</span>
          <span><i data-lucide="map-pin"></i>${safe(e.place)}</span>
        </div>
        <div class="event-numbers">
          <div><strong>${attendeesCount}</strong><span>حضر بالفعل</span></div>
          <div><strong>${registered}</strong><span>المستهدف</span></div>
          <div><strong>${e.days || 1}</strong><span>أيام</span></div>
        </div>
        <div class="supervisors">
          <label>هيئة الإشراف والمنظمون</label>
          <p>${safe(supsText)}</p>
        </div>
        <div class="event-actions">
          <button class="btn secondary" data-event-view="${e.id}"><i data-lucide="layout-grid"></i> مساحة التحضير</button>
          <button class="btn primary" data-export-word="${e.id}"><i data-lucide="file-text"></i> كشف Word</button>
        </div>
      </div>
    </article>`;
  }).join('');

  $$('[data-event-view]').forEach(b => b.onclick = () => showEvent(state.events.find(e => e.id == b.dataset.eventView)));
  $$('[data-export-word]').forEach(b => b.onclick = () => exportEventWord(state.events.find(e => e.id == b.dataset.exportWord)));
  $$('[data-edit-event]').forEach(b => b.onclick = () => openForm('editEvent', state.events.find(e => e.id == b.dataset.editEvent)));
  $$('[data-delete-event]').forEach(b => b.onclick = () => deleteEvent(b.dataset.deleteEvent));
  iconRefresh();
}

function deleteEvent(id) {
  const e = state.events.find(x => x.id == id);
  if (!e) return;
  if (confirm(`هل أنت متأكد من حذف فاعلية: "${e.title}"؟`)) {
    state.events = state.events.filter(x => x.id != id);
    Storage.saveAll();
    renderEvents();
    renderStudents();
    renderSupervisors();
    updateDashboardStats();
    toast(`تم حذف فاعلية "${e.title}"`);
  }
}

function showEvent(e) {
  const attendeesCount = (e.attendeeIds || []).length;
  const registered = e.registered || attendeesCount || 1;
  const pct = Math.min(100, Math.round((attendeesCount / registered) * 100));
  const attendees = state.students.filter(s => (e.attendeeIds || []).includes(s.id));
  const eventSups = getEventSupervisors(e);

  const supsBadges = eventSups.length ? eventSups.map(s => `
    <div style="display:inline-flex;align-items:center;gap:8px;background:#fff;border:1px solid var(--line);border-radius:10px;padding:6px 12px;margin:3px">
      <span class="mini-avatar" style="width:28px;height:28px;font-size:11px">${initials(s.name)}</span>
      <div>
        <strong style="font-size:12px;display:block">${safe(s.name)}</strong>
        <small style="color:var(--blue);font-size:10px">${safe(s.role)}</small>
      </div>
      <a href="tel:${s.phone}" style="color:var(--navy);margin-right:6px" title="اتصال: ${s.phone}"><i data-lucide="phone" style="width:14px;height:14px"></i></a>
    </div>
  `).join('') : '<span style="color:var(--muted);font-size:12px">لم يتم تحديد مشرفين بعد</span>';

  const attendeesRows = attendees.map((s, idx) => `
    <tr>
      <td>${idx + 1}</td>
      <td>
        <div class="student-cell">
          <span class="mini-avatar">${initials(s.name)}</span>
          <strong>${safe(s.name)}</strong>
        </div>
      </td>
      <td>${safe(s.faculty)}</td>
      <td>${safe(s.year)}</td>
      <td dir="ltr">${maskNationalID(s.national)}</td>
      <td dir="ltr">${maskPhone(s.phone)}</td>
      <td>
        <button class="text-btn" data-remove-attendee="${s.id}" style="color:var(--red);font-size:11px" title="إزالة من الفاعلية">إزالة</button>
      </td>
    </tr>
  `).join('');

  const modalHtml = `
    <div style="margin-bottom:14px">
      <div class="event-numbers">
        <div><strong>${attendeesCount}</strong><span>حاضر مسجل</span></div>
        <div><strong>${registered}</strong><span>المستهدف</span></div>
        <div><strong>${pct}%</strong><span>نسبة الحضور</span></div>
      </div>
      <div class="privacy-note" style="margin-top:10px">
        <i data-lucide="info"></i>
        <div>
          <strong>المكان والتاريخ</strong>
          <p>📍 ${safe(e.place)} | 📅 ${safe(e.date)}</p>
        </div>
      </div>
      <div style="margin-top:12px">
        <label style="font-size:11px;font-weight:700;color:var(--muted);display:block;margin-bottom:6px">هيئة الإشراف والمسؤولون المباشرون:</label>
        <div>${supsBadges}</div>
      </div>
    </div>

    <!-- Live Fast Check-in Bar -->
    <div class="event-checkin-bar">
      <i data-lucide="user-check" style="color:var(--navy)"></i>
      <input id="fastCheckinInput" placeholder="ابحث باسم الطالب أو الرقم القومي لتسجيل حضوره فورياً..." autocomplete="off">
      <button class="btn primary" id="fastCheckinBtn" style="min-height:40px;padding:6px 14px"><i data-lucide="plus"></i> تسجيل حضور</button>
    </div>
    <div id="checkinSearchResults" class="search-results" style="top:auto;position:relative"></div>

    <div style="display:flex;justify-content:space-between;align-items:center;margin:16px 0 8px">
      <h3 style="font-size:14px;margin:0">كشف الطلاب الحاضرين في هذه الفاعلية (${attendees.length} طالب)</h3>
      <button class="btn primary" id="workspaceExportWord" style="min-height:36px;padding:6px 12px;font-size:11px">
        <i data-lucide="file-text"></i> استخراج كشف Word معتمد
      </button>
    </div>

    <div class="event-attendees-list">
      <table>
        <thead>
          <tr><th>#</th><th>الطالب</th><th>الكلية</th><th>الفرقة</th><th>الرقم القومي</th><th>الهاتف</th><th></th></tr>
        </thead>
        <tbody>
          ${attendeesRows || '<tr><td colspan="7" style="text-align:center;padding:20px;color:var(--muted)">لم يتم تسجيل حضور أي طالب حتى الآن</td></tr>'}
        </tbody>
      </table>
    </div>
  `;

  modal(e.title, `${e.place} · ${e.date}`, modalHtml);

  const exportBtn = $('#workspaceExportWord', $('#modalContent'));
  if (exportBtn) exportBtn.onclick = () => exportEventWord(e);

  $$('[data-remove-attendee]', $('#modalContent')).forEach(b => {
    b.onclick = () => {
      const studentId = parseInt(b.dataset.removeAttendee, 10);
      e.attendeeIds = (e.attendeeIds || []).filter(id => id !== studentId);
      Storage.saveAll();
      renderEvents();
      renderStudents();
      updateDashboardStats();
      showEvent(e);
      toast('تمت إزالة الطالب من كشف الفاعلية');
    };
  });

  const checkinInput = $('#fastCheckinInput', $('#modalContent'));
  const checkinBtn = $('#fastCheckinBtn', $('#modalContent'));
  const checkinResults = $('#checkinSearchResults', $('#modalContent'));

  function doCheckin(student) {
    if (!student) return;
    const isBanned = isStudentBanned(student);
    if (isBanned) {
      alert(`تنبيه أمني: الطالب "${student.name}" مسجل في كشف المحظورين (${isBanned.reason}) ولا يجوز تسجيله!`);
      return;
    }
    if ((e.attendeeIds || []).includes(student.id)) {
      toast(`الطالب "${student.name}" مسجل بالفعل في هذه الفاعلية.`);
      return;
    }
    if (!e.attendeeIds) e.attendeeIds = [];
    e.attendeeIds.push(student.id);
    Storage.saveAll();
    renderEvents();
    renderStudents();
    updateDashboardStats();
    showEvent(e);
    toast(`تم تسجيل حضور الطالب "${student.name}" بنجاح!`);
  }

  checkinInput.oninput = () => {
    const q = normalizeArabic(checkinInput.value);
    if (q.length < 2) { checkinResults.classList.remove('show'); return; }
    const matches = state.students.filter(s =>
      normalizeArabic([s.name, s.national, s.phone, s.faculty].join(' ')).includes(q)
    ).slice(0, 5);

    if (matches.length) {
      checkinResults.innerHTML = matches.map(s => {
        const already = (e.attendeeIds || []).includes(s.id);
        const banned = isStudentBanned(s);
        return `<div class="search-result" data-checkin-id="${s.id}">
          <span class="result-icon"><i data-lucide="user"></i></span>
          <div style="flex:1">
            <strong>${safe(s.name)} ${banned ? '<span class="badge banned">محظور!</span>' : ''}</strong>
            <span>${safe(s.faculty)} · ${safe(s.year)} · ${maskPhone(s.phone)}</span>
          </div>
          ${already ? '<span class="badge active">حاضر</span>' : '<button class="btn primary" style="min-height:30px;padding:3px 8px;font-size:10px">إضافة</button>'}
        </div>`;
      }).join('');
      checkinResults.classList.add('show');
      $$('[data-checkin-id]', checkinResults).forEach(btn => {
        btn.onclick = () => {
          const s = state.students.find(x => x.id == btn.dataset.checkinId);
          doCheckin(s);
        };
      });
      iconRefresh();
    } else {
      checkinResults.innerHTML = '<div class="search-result"><div><strong>لم يتم العثور على الطالب</strong><span>يمكنك إضافته أولاً في شاشة الطلاب</span></div></div>';
      checkinResults.classList.add('show');
    }
  };

  checkinBtn.onclick = () => {
    const q = normalizeArabic(checkinInput.value);
    if (!q) return;
    const match = state.students.find(s => normalizeArabic(s.name).includes(q) || s.national === digits(q));
    if (match) doCheckin(match);
    else toast('لم نتمكن من مطابقة الطالب، يرجى الاختيار من نتائج البحث.');
  };

  iconRefresh();
}

// 12. Supervisors Rendering & Management
function renderSupervisors(list = state.supervisors) {
  const grid = $('#supervisorsGrid');
  if (!grid) return;

  grid.innerHTML = list.map(s => {
    const supervisedEvents = getSupervisorEvents(s.id);
    const cleanPhone = digits(s.phone);
    const whatsappNum = cleanPhone.startsWith('0') ? '2' + cleanPhone : cleanPhone;

    return `<article class="supervisor-card">
      <div class="supervisor-head">
        <div class="supervisor-avatar">${initials(s.name)}</div>
        <div class="supervisor-info">
          <strong>${safe(s.name)}</strong>
          <span class="supervisor-role">${safe(s.role)}</span>
          <span class="supervisor-faculty">🏢 ${safe(s.faculty)}</span>
        </div>
      </div>

      <div class="supervisor-contacts">
        <a class="contact-btn" href="tel:${cleanPhone}" title="اتصال هاتفي">
          <i data-lucide="phone"></i>
          <span>${safe(s.phone)}</span>
        </a>
        <a class="contact-btn whatsapp" href="https://wa.me/${whatsappNum}" target="_blank" rel="noopener noreferrer" title="محادثة واتساب">
          <i data-lucide="message-circle"></i>
          <span>واتساب</span>
        </a>
      </div>

      <div class="supervisor-footer">
        <button class="text-btn supervisor-events-count" data-supervisor-events="${s.id}">
          <i data-lucide="calendar"></i>
          <span>${supervisedEvents.length} فاعليات مُشرف عليها</span>
        </button>
        <div style="display:flex;gap:4px">
          <button class="row-menu" data-edit-supervisor="${s.id}" title="تعديل"><i data-lucide="pencil"></i></button>
          <button class="row-menu" data-delete-supervisor="${s.id}" title="حذف" style="color:var(--red)"><i data-lucide="trash-2"></i></button>
        </div>
      </div>
    </article>`;
  }).join('') || '<p style="grid-column:1/-1;text-align:center;padding:30px;color:var(--muted)">لا يوجد مشرفون مطابقون للبحث</p>';

  // Update role filter options dynamically from actual & saved roles
  const roleFilter = $('#supervisorRoleFilter');
  if (roleFilter) {
    const currentVal = roleFilter.value;
    const roles = [...new Set(state.supervisors.map(s => s.role).filter(Boolean))];
    roleFilter.innerHTML = '<option value="">كل المسميات الوظيفية</option>' + 
      roles.map(r => `<option value="${safe(r)}" ${r === currentVal ? 'selected' : ''}>${safe(r)}</option>`).join('');
  }

  // Bind actions
  $$('[data-edit-supervisor]').forEach(b => b.onclick = () => openForm('editSupervisor', state.supervisors.find(s => s.id == b.dataset.editSupervisor)));
  $$('[data-delete-supervisor]').forEach(b => b.onclick = () => deleteSupervisor(b.dataset.deleteSupervisor));
  $$('[data-supervisor-events]').forEach(b => b.onclick = () => showSupervisorEvents(state.supervisors.find(s => s.id == b.dataset.supervisorEvents)));

  iconRefresh();
}

function showSupervisorEvents(supervisor) {
  if (!supervisor) return;
  const events = getSupervisorEvents(supervisor.id);
  const rows = events.length ? events.map(e => `
    <div class="event-row">
      <div class="date-tile"><strong>${e.day || '15'}</strong><span>${e.month || 'نوفمبر'}</span></div>
      <div>
        <h4>${safe(e.title)}</h4>
        <p><span>📍 ${safe(e.place)}</span><span>👥 ${ (e.attendeeIds || []).length } حاضر</span></p>
      </div>
      <button class="btn ghost" style="min-height:32px;font-size:11px" data-view-from-sup="${e.id}">عرض الفاعلية</button>
    </div>
  `).join('') : '<p style="padding:20px;text-align:center;color:var(--muted)">لم يتم ربط هذا المشرف بأي فاعليات بعد.</p>';

  modal(`الفاعليات المسندة: ${supervisor.name}`, `${supervisor.role} · ${supervisor.faculty}`, `
    <div style="margin-bottom:15px;display:flex;align-items:center;gap:12px;background:#f6f9fc;padding:12px;border-radius:12px">
      <div class="supervisor-avatar" style="width:44px;height:44px;font-size:15px">${initials(supervisor.name)}</div>
      <div>
        <strong>${safe(supervisor.name)}</strong>
        <p style="margin:2px 0 0;font-size:11.5px;color:var(--muted)">📞 ${safe(supervisor.phone)}</p>
      </div>
    </div>
    <div class="panel" style="padding:10px 14px">${rows}</div>
  `);

  $$('[data-view-from-sup]').forEach(btn => {
    btn.onclick = () => {
      closeModal();
      showEvent(state.events.find(e => e.id == btn.dataset.viewFromSup));
    };
  });
  iconRefresh();
}

function deleteSupervisor(id) {
  const s = state.supervisors.find(x => x.id == id);
  if (!s) return;
  if (confirm(`هل أنت متأكد من حذف المشرف: "${s.name}" (${s.role})؟`)) {
    state.supervisors = state.supervisors.filter(x => x.id != id);
    // Remove supervisor from events
    state.events.forEach(e => {
      e.supervisorIds = (e.supervisorIds || []).filter(x => x != id);
    });
    Storage.saveAll();
    renderSupervisors();
    renderEvents();
    toast(`تم حذف المشرف "${s.name}" بنجاح`);
  }
}

function filterSupervisors() {
  const q = normalizeArabic($('#supervisorSearch').value);
  const r = $('#supervisorRoleFilter').value;
  const filtered = state.supervisors.filter(s => {
    const matchesQ = !q || normalizeArabic([s.name, s.role, s.phone, s.faculty].join(' ')).includes(q);
    const matchesR = !r || s.role === r;
    return matchesQ && matchesR;
  });
  renderSupervisors(filtered);
}

// 13. Student 360 Profile Modal
function showStudent(s) {
  const parsedID = parseEgyptianNationalID(s.national);
  const attendedEvents = getStudentEvents(s.id);
  const banInfo = isStudentBanned(s);

  const parsedInfoHtml = parsedID.valid ? `
    <div class="full" style="background:#eaf6fc;border:1px solid #cbe6f7;border-radius:12px;padding:12px;font-size:12px">
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;text-align:center">
        <div><small style="color:var(--muted);display:block">المحافظة</small><strong>${safe(parsedID.governorate)}</strong></div>
        <div><small style="color:var(--muted);display:block">النوع</small><strong>${safe(parsedID.gender)}</strong></div>
        <div><small style="color:var(--muted);display:block">تاريخ الميلاد</small><strong>${safe(parsedID.birthDateFormatted)}</strong></div>
        <div><small style="color:var(--muted);display:block">العمر</small><strong>${parsedID.age} سنة</strong></div>
      </div>
    </div>
  ` : '';

  const banAlertHtml = banInfo ? `
    <div class="full" style="background:#fdebed;border:1px solid #f5c9cd;border-radius:12px;padding:12px;color:#b62f3b">
      <strong>⚠️ تنبيه: الطالب لديه قرار حظر إداري سارٍ (${safe(banInfo.type)})</strong>
      <p style="margin:4px 0 0;font-size:11px">${safe(banInfo.reason)} · من ${safe(banInfo.from)} إلى ${safe(banInfo.to)} (بواسطة: ${safe(banInfo.by)})</p>
    </div>
  ` : '';

  const eventsListHtml = attendedEvents.length ? attendedEvents.map(e => `
    <div class="event-row">
      <div class="date-tile"><strong>${e.day || '10'}</strong><span>${e.month || 'نوفمبر'}</span></div>
      <div>
        <h4>${safe(e.title)}</h4>
        <p><span>📍 ${safe(e.place)}</span><span>📅 ${safe(e.date)}</span></p>
      </div>
      <span class="badge active">حاضر</span>
    </div>
  `).join('') : '<p style="padding:15px;color:var(--muted);font-size:12px">لم يشارك هذا الطالب في أي فاعليات مسجلة بعد.</p>';

  const body = `
    <div class="form-grid">
      <div class="full student-cell" style="padding:16px;background:#f6f9fb;border-radius:16px">
        <span class="mini-avatar" style="width:52px;height:52px;font-size:18px">${initials(s.name)}</span>
        <div>
          <strong style="font-size:16px">${safe(s.name)}</strong>
          <small style="font-size:12px">${safe(s.faculty)} · ${safe(s.year)}</small>
        </div>
        <span class="badge ${banInfo ? 'banned' : 'active'}" style="margin-right:auto;font-size:12px">
          ${banInfo ? 'محظور' : s.status}
        </span>
      </div>

      ${banAlertHtml}
      ${parsedInfoHtml}

      <label>الرقم القومي
        <input value="${safe(s.national)}" readonly dir="ltr" style="font-family:monospace;font-weight:bold">
      </label>
      <label>رقم الواتساب
        <input value="${safe(s.phone)}" readonly dir="ltr" style="font-family:monospace;font-weight:bold">
      </label>
      
      <div class="full">
        <label>الكيانات الطلابية المنضم إليها</label>
        <div class="tags" style="margin-top:6px">
          ${(s.entities || []).map(x => `<span class="tag" style="font-size:12px;padding:6px 10px">${safe(x)}</span>`).join('') || '<span style="color:var(--muted)">لا يوجد</span>'}
        </div>
      </div>

      <div class="full" style="margin-top:10px">
        <h3 style="font-size:14px;margin:0 0 10px">سجل المشاركات والفاعليات (${attendedEvents.length})</h3>
        <div class="panel" style="padding:10px 14px">${eventsListHtml}</div>
      </div>

      <div class="form-actions">
        <button class="btn secondary" data-edit-profile="${s.id}"><i data-lucide="pencil"></i> تعديل البيانات</button>
        ${!banInfo ? `<button class="btn danger" data-ban-profile="${s.id}"><i data-lucide="shield-x"></i> حظر الطالب</button>` : ''}
      </div>
    </div>
  `;

  modal('الملف التعريفي للطالب', 'بيانات السجل الأكاديمي، الرقم القومي، وسجل الحضور', body);

  const editBtn = $(`[data-edit-profile="${s.id}"]`, $('#modalContent'));
  if (editBtn) editBtn.onclick = () => { closeModal(); openForm('editStudent', s); };

  const banBtn = $(`[data-ban-profile="${s.id}"]`, $('#modalContent'));
  if (banBtn) banBtn.onclick = () => { closeModal(); openForm('newBan', { studentId: s.id, name: s.name, faculty: s.faculty, national: s.national }); };

  iconRefresh();
}

// 14. Entities, Bans & Users Rendering
function renderEntities() {
  $('#entitiesGrid').innerHTML = state.entities.map(e => {
    const studentCount = state.students.filter(s => (s.entities || []).includes(e.name)).length;
    return `<article class="entity-card">
      <div class="entity-icon"><i data-lucide="${e.icon || 'landmark'}"></i></div>
      <h3>${safe(e.name)}</h3>
      <p>${safe(e.type || 'كيان')} نشط داخل الجامعة</p>
      <footer>
        <div><strong>${studentCount.toLocaleString('ar-EG')}</strong> <small>طالب مسجل</small></div>
        <span class="badge active">${safe(e.status || 'نشط')}</span>
      </footer>
    </article>`;
  }).join('');
  iconRefresh();
}

function renderBans() {
  $('#bansTable').innerHTML = state.bans.map(b => {
    const isActive = b.active !== false;
    return `<tr>
      <td>
        <div class="student-cell">
          <span class="mini-avatar">${initials(b.name)}</span>
          <div>
            <strong>${safe(b.name)}</strong>
            <small>${safe(b.faculty)}</small>
          </div>
        </div>
      </td>
      <td><span class="badge ${b.type === 'نهائي' ? 'banned' : 'temp'}">${safe(b.type)}</span></td>
      <td>${safe(b.reason)}</td>
      <td>${safe(b.from)}</td>
      <td>${safe(b.to)}</td>
      <td>${safe(b.by)}</td>
      <td>
        ${isActive ? `<button class="btn ghost" data-unban="${b.id}" style="min-height:30px;padding:3px 8px;font-size:11px;color:var(--green)">رفع الحظر</button>` : '<span class="badge" style="background:#eee;color:#888">ملغي</span>'}
      </td>
    </tr>`;
  }).join('') || '<tr><td colspan="7" style="text-align:center;padding:20px;color:var(--muted)">لا يوجد طلاب محظورون حالياً</td></tr>';

  $$('[data-unban]').forEach(b => {
    b.onclick = () => {
      const ban = state.bans.find(x => x.id == b.dataset.unban);
      if (!ban) return;
      if (confirm(`هل أنت متأكد من رفع الحظر عن الطالب "${ban.name}"؟`)) {
        ban.active = false;
        const student = state.students.find(s => s.id === ban.studentId || s.national === ban.national);
        if (student) student.status = 'نشط';
        Storage.saveAll();
        renderBans();
        renderStudents();
        updateDashboardStats();
        toast(`تم رفع الحظر عن الطالب "${ban.name}" بنجاح`);
      }
    };
  });
  iconRefresh();
}

function renderUsers() {
  $('#usersTable').innerHTML = state.users.map(u => `<tr>
    <td>
      <div class="student-cell">
        <span class="mini-avatar">${initials(u.name)}</span>
        <strong>${safe(u.name)}</strong>
      </div>
    </td>
    <td dir="ltr">${safe(u.email)}</td>
    <td><span class="tag" style="font-weight:bold">${safe(u.role)}</span></td>
    <td>${safe(u.last)}</td>
    <td><span class="badge ${u.status === 'نشط' ? 'active' : 'temp'}">${safe(u.status)}</span></td>
    <td>
      <div style="display:flex;gap:4px">
        <button class="btn ghost" data-toggle-role="${u.id}" style="min-height:30px;padding:3px 8px;font-size:11px" title="تبديل الدور">تبديل الدور</button>
        <button class="btn ghost" data-toggle-user="${u.id}" style="min-height:30px;padding:3px 8px;font-size:11px;color:var(--red)" title="حذف">حذف</button>
      </div>
    </td>
  </tr>`).join('');

  $$('[data-toggle-role]').forEach(b => {
    b.onclick = () => {
      const u = state.users.find(x => x.id == b.dataset.toggleRole);
      if (!u) return;
      if (u.role === 'أدمن عام') {
        const admins = state.users.filter(x => x.role === 'أدمن عام');
        if (admins.length <= 1) {
          alert('لا يمكن تغيير دور الأدمن الأخير! يجب أن يبقى أدمن عام واحد على الأقل في المنظومة.');
          return;
        }
        u.role = 'مشاهد';
      } else {
        u.role = 'أدمن عام';
      }
      Storage.saveAll();
      renderUsers();
      toast(`تم تغيير دور "${u.name}" إلى ${u.role}`);
    };
  });

  $$('[data-toggle-user]').forEach(b => {
    b.onclick = () => {
      const u = state.users.find(x => x.id == b.dataset.toggleUser);
      if (!u) return;
      if (u.role === 'أدمن عام' && state.users.filter(x => x.role === 'أدمن عام').length <= 1) {
        alert('لا يمكن حذف الأدمن العام الأخير!');
        return;
      }
      if (confirm(`هل أنت متأكد من حذف المستخدم "${u.name}"؟`)) {
        state.users = state.users.filter(x => x.id != u.id);
        Storage.saveAll();
        renderUsers();
        toast('تم حذف المستخدم بنجاح');
      }
    };
  });
  iconRefresh();
}

// 15. Interactive Dynamic Forms Engine
function facultyOptions(selected = '') {
  return faculties.map(x => `<option value="${x}" ${x === selected ? 'selected' : ''}>${x}</option>`).join('');
}

function modal(title, desc, body, options = {}) {
  const card = $('#formModal .modal-card');
  if (card) {
    card.classList.remove('modal-wide', 'modal-xl');
    if (options.size === 'wide' || options.size === 'lg') card.classList.add('modal-wide');
    if (options.size === 'xl') card.classList.add('modal-xl');
  }
  const badgeHtml = options.badge ? `<div class="modal-header-badge">${options.badge}</div>` : '';
  $('#modalContent').innerHTML = `
    <div class="modal-header-block">
      ${badgeHtml}
      <h2>${title}</h2>
      ${desc ? `<p>${desc}</p>` : ''}
    </div>
    ${body}
  `;
  $('#formModal').classList.add('show');
  $('#formModal').setAttribute('aria-hidden', 'false');
  iconRefresh();
  $$('.modal-cancel').forEach(b => b.onclick = closeModal);
}

function closeModal() {
  $('#formModal').classList.remove('show');
  $('#formModal').setAttribute('aria-hidden', 'true');
  const card = $('#formModal .modal-card');
  if (card) card.classList.remove('modal-wide', 'modal-xl');
}


function getSavedSupervisorRoles() {
  let list = [];
  try {
    list = JSON.parse(localStorage.getItem('alex_custom_supervisor_roles') || '[]');
  } catch (e) {}
  if (typeof state !== 'undefined' && state.supervisors) {
    state.supervisors.forEach(s => {
      if (s.role && !list.includes(s.role)) list.push(s.role);
    });
  }
  return list;
}

function saveCustomSupervisorRole(role) {
  if (!role || !role.trim()) return;
  const clean = role.trim();
  let list = [];
  try {
    list = JSON.parse(localStorage.getItem('alex_custom_supervisor_roles') || '[]');
  } catch (e) {}
  if (!list.includes(clean)) {
    list.push(clean);
    try {
      localStorage.setItem('alex_custom_supervisor_roles', JSON.stringify(list));
    } catch (e) {}
  }
}

function openForm(type, data = null) {
  const actions = `<div class="form-actions">
    <button type="button" class="btn ghost modal-cancel">إلغاء</button>
    <button class="btn primary" type="submit">حفظ البيانات</button>
  </div>`;

  // 1. New / Edit Supervisor Form (Custom Role & Persistent Suggestions)
  if (type === 'newSupervisor' || type === 'editSupervisor') {
    const isEdit = type === 'editSupervisor';
    const s = data || { name: '', role: '', phone: '', faculty: 'الإدارة العامة لرعاية الشباب', status: 'نشط' };
    const savedRoles = getSavedSupervisorRoles();
    const dataListOptions = savedRoles.map(r => `<option value="${safe(r)}"></option>`).join('');

    const formHtml = `
      <form class="form-grid" id="supervisorForm">
        <label class="full">الاسم بالكامل
          <input required id="supName" placeholder="اكتب اسم المشرف ثلاثياً أو رباعياً" value="${safe(s.name)}">
        </label>
        <label class="full">المسمى الوظيفي للمشرف
          <input required id="supRole" list="rolesDataList" placeholder="اكتب المسمى الوظيفي هنا (يُحفظ تلقائياً كاقتراح للمرات القادمة)..." value="${safe(s.role)}" autocomplete="off">
          <datalist id="rolesDataList">
            ${dataListOptions}
          </datalist>
          <small style="color:var(--muted);font-size:11px;margin-top:4px;display:block">💡 اكتب أي مسمى وظيفي للمشرف، وسيتثبت تلقائياً كاقتراح سريع لجميع النماذج القادمة.</small>
        </label>
        <label>رقم التليفون / الواتساب
          <input required id="supPhone" inputmode="tel" placeholder="01xxxxxxxxx" value="${safe(s.phone)}">
        </label>
        <label>الجهة / الكلية التابع لها
          <input required id="supFaculty" placeholder="مثال: الإدارة العامة لرعاية الشباب أو كلية الهندسة" value="${safe(s.faculty)}">
        </label>
        <label class="full">الحالة
          <select id="supStatus">
            <option value="نشط" ${s.status === 'نشط' ? 'selected' : ''}>نشط ومتاح للإشراف</option>
            <option value="غير متاح" ${s.status === 'غير متاح' ? 'selected' : ''}>غير متاح مؤقتاً</option>
          </select>
        </label>
        ${actions}
      </form>
    `;

    modal(isEdit ? 'تعديل بيانات المشرف' : 'إضافة مشرف جديد لهيئة الإشراف', 'سيتم إدراج المشرف في قائمة اختيار هيئة الإشراف وحفظ مسماه الوظيفي تلقائياً.', formHtml);

    $('#supervisorForm').onsubmit = (e) => {
      e.preventDefault();
      const name = $('#supName').value.trim();
      const role = $('#supRole').value.trim();
      const phone = digits($('#supPhone').value);
      const faculty = $('#supFaculty').value.trim();
      const status = $('#supStatus').value;

      if (!role) {
        alert('يرجى كتابة المسمى الوظيفي للمشرف.');
        $('#supRole').focus();
        return;
      }

      const valPhone = validateEgyptianPhone(phone);
      if (!valPhone.valid) {
        alert(valPhone.error);
        return;
      }

      // Save custom role to persistent suggestions:
      saveCustomSupervisorRole(role);

      if (isEdit) {
        s.name = name;
        s.role = role;
        s.phone = phone;
        s.faculty = faculty;
        s.status = status;
      } else {
        const newId = Math.max(0, ...state.supervisors.map(x => x.id)) + 1;
        state.supervisors.push({ id: newId, name, role, phone, faculty, status });
      }

      Storage.saveAll();
      closeModal();
      renderSupervisors();
      renderEvents();
      toast(isEdit ? 'تم تحديث بيانات المشرف وتثبيت مسماه الوظيفي' : 'تمت إضافة المشرف الجديد وتثبيت مسماه الوظيفي كاقتراح دائم');
    };
  }

  // 2. New / Edit Student Form (Upgraded Smart UI & Validation)
  if (type === 'newStudent' || type === 'editStudent') {
    const isEdit = type === 'editStudent';
    const s = data || { name: '', national: '', phone: '', faculty: faculties[0], year: 'الفرقة الأولى', status: 'نشط', entities: [] };
    const entList = [
      'اتحاد طلاب الجامعة',
      'اتحاد طلاب الكلية',
      'عشيرة الجوالة والخدمة العامة',
      'الأسر الطلابية',
      'فريق المتطوعين والمنظمين',
      'القادة الاجتماعيون',
      'النشاط الرياضي',
      'النشاط الفني والثقافي'
    ];

    const activeEntities = new Set(s.entities || []);
    const chipsHtml = entList.map(ent => `
      <button type="button" class="entity-chip-btn ${activeEntities.has(ent) ? 'active' : ''}" data-entity="${ent}">
        <i data-lucide="${activeEntities.has(ent) ? 'check' : 'plus'}"></i>
        <span>${ent}</span>
      </button>
    `).join('');

    const formHtml = `
      <form class="student-form-wrap" id="studentForm" novalidate>
        <!-- 1. الهوية الوطنية والبيانات الشخصية -->
        <div class="student-form-section">
          <div class="section-legend">
            <i data-lucide="id-card"></i>
            <span>البيانات الشخصية وبطاقة الرقم القومي</span>
          </div>
          <div class="form-grid">
            <label class="full">
              الاسم رباعي بالكامل (كما في بطاقة الرقم القومي)
              <input required id="stName" placeholder="اكتب الاسم رباعياً بالكامل" value="${safe(s.name)}" autocomplete="off">
            </label>
            
            <div class="full">
              <label>
                الرقم القومي (14 رقماً مصرياً)
                <input required id="stNational" inputmode="numeric" maxlength="14" placeholder="أدخل 14 رقماً يبدأ بـ 2 أو 3" value="${safe(s.national)}" autocomplete="off">
              </label>
              
              <!-- Smart National ID Live Analysis Card -->
              <div class="smart-id-card" id="stSmartIdCard">
                <div class="smart-id-status" id="stIdStatus"></div>
                <div class="smart-id-grid">
                  <div class="smart-id-pill">
                    <span>🏛️ المحافظة</span>
                    <strong id="stIdGov">—</strong>
                  </div>
                  <div class="smart-id-pill">
                    <span>📅 تاريخ الميلاد</span>
                    <strong id="stIdBirth">—</strong>
                  </div>
                  <div class="smart-id-pill">
                    <span>🎂 العمر التقديري</span>
                    <strong id="stIdAge">—</strong>
                  </div>
                  <div class="smart-id-pill">
                    <span>⚧ النوع</span>
                    <strong id="stIdGender">—</strong>
                  </div>
                </div>
              </div>
            </div>

            <div class="full">
              <label>
                رقم الواتساب / الهاتف المحمول (11 رقماً)
                <div class="phone-field-wrap">
                  <input required id="stPhone" inputmode="tel" maxlength="11" placeholder="مثال: 01012345678" value="${safe(s.phone)}" autocomplete="off">
                  <span class="operator-badge" id="stOperatorBadge"></span>
                </div>
              </label>
            </div>
          </div>
        </div>

        <!-- 2. القيد الجامعي والبيانات الأكاديمية -->
        <div class="student-form-section">
          <div class="section-legend">
            <i data-lucide="graduation-cap"></i>
            <span>الكلية والفرقة الدراسية</span>
          </div>
          <div class="form-grid">
            <label>
              الكلية (جامعة الإسكندرية)
              <select id="stFaculty">${facultyOptions(s.faculty)}</select>
            </label>
            <label>
              الفرقة الدراسية
              <select id="stYear">
                <option ${s.year === 'الفرقة الأولى' ? 'selected' : ''}>الفرقة الأولى</option>
                <option ${s.year === 'الفرقة الثانية' ? 'selected' : ''}>الفرقة الثانية</option>
                <option ${s.year === 'الفرقة الثالثة' ? 'selected' : ''}>الفرقة الثالثة</option>
                <option ${s.year === 'الفرقة الرابعة' ? 'selected' : ''}>الفرقة الرابعة</option>
                <option ${s.year === 'الفرقة الخامسة' ? 'selected' : ''}>الفرقة الخامسة</option>
                <option ${s.year === 'الفرقة السادسة' ? 'selected' : ''}>الفرقة السادسة</option>
                <option ${s.year === 'دراسات عليا' ? 'selected' : ''}>دراسات عليا</option>
              </select>
            </label>
          </div>
        </div>

        <!-- 3. الكيانات والأنشطة الطلابية -->
        <div class="student-form-section">
          <div class="section-legend">
            <i data-lucide="network"></i>
            <span>الكيانات والأنشطة الطلابية المنضم إليها</span>
          </div>
          <p style="font-size:11.5px;color:var(--muted);margin:0 0 8px">اضغط على أي نشاط أو كيان لتحديده (يمكن اختيار أكثر من كيان):</p>
          <div class="entity-chips-grid" id="stEntityChips">
            ${chipsHtml}
          </div>
        </div>

        <!-- 4. الموقف الإداري للطالب -->
        <div class="student-form-section">
          <div class="section-legend">
            <i data-lucide="shield-check"></i>
            <span>الموقف الإداري للطالب في المنظومة</span>
          </div>
          <div class="status-cards-row">
            <label class="status-card-opt ${s.status !== 'محظور' ? 'active-active' : ''}">
              <input type="radio" name="stStatusRadio" value="نشط" ${s.status !== 'محظور' ? 'checked' : ''}>
              <div>
                <strong style="color:#107c41;display:block">طالب نشط ومؤهل</strong>
                <small style="color:var(--muted)">مسموح له بالتسجيل والمشاركة في كافة الفاعليات</small>
              </div>
            </label>
            <label class="status-card-opt ${s.status === 'محظور' ? 'active-banned' : ''}">
              <input type="radio" name="stStatusRadio" value="محظور" ${s.status === 'محظور' ? 'checked' : ''}>
              <div>
                <strong style="color:#d83b01;display:block">محظور إدارياً</strong>
                <small style="color:var(--muted)">تقييد مشاركة وتنبيه تلقائي عند محاولة الإضافة</small>
              </div>
            </label>
          </div>
        </div>

        ${actions}
      </form>
    `;

    modal(
      isEdit ? 'تعديل وتحديث بيانات الطالب' : 'تسجيل طالب جديد في المنظومة',
      'فحص وتدقيق ذكي للرقم القومي (14 رقم) والواتساب والمحافظة وفق ضوابط جامعة الإسكندرية.',
      formHtml,
      { size: 'wide', badge: `<i data-lucide="${isEdit ? 'user-check' : 'user-plus'}"></i> منظومة إدارة الطلاب` }
    );

    // Entity Chips Click Handlers
    const chosenEntities = new Set(s.entities || []);
    $$('#stEntityChips .entity-chip-btn').forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        const entName = btn.dataset.entity;
        if (chosenEntities.has(entName)) {
          chosenEntities.delete(entName);
          btn.classList.remove('active');
        } else {
          chosenEntities.add(entName);
          btn.classList.add('active');
        }
        btn.innerHTML = `<i data-lucide="${chosenEntities.has(entName) ? 'check' : 'plus'}"></i><span>${entName}</span>`;
        iconRefresh();
      };
    });

    // Status Radio Card Click Handlers
    $$('input[name="stStatusRadio"]').forEach(radio => {
      radio.onchange = () => {
        $$('.status-card-opt').forEach(card => card.classList.remove('active-active', 'active-banned'));
        if (radio.value === 'نشط') {
          radio.closest('.status-card-opt').classList.add('active-active');
        } else {
          radio.closest('.status-card-opt').classList.add('active-banned');
        }
      };
    });

    // Real-time Phone Operator Detection
    const phoneInput = $('#stPhone', $('#modalContent'));
    const operatorBadge = $('#stOperatorBadge', $('#modalContent'));
    function updatePhoneOperator() {
      const p = digits(phoneInput.value);
      operatorBadge.className = 'operator-badge';
      if (p.startsWith('010')) {
        operatorBadge.className = 'operator-badge show vodafone';
        operatorBadge.textContent = 'فودافون';
      } else if (p.startsWith('011')) {
        operatorBadge.className = 'operator-badge show etisalat';
        operatorBadge.textContent = 'اتصالات';
      } else if (p.startsWith('012')) {
        operatorBadge.className = 'operator-badge show orange';
        operatorBadge.textContent = 'أورانج';
      } else if (p.startsWith('015')) {
        operatorBadge.className = 'operator-badge show we';
        operatorBadge.textContent = 'وي WE';
      }
    }
    phoneInput.oninput = updatePhoneOperator;
    if (s.phone) updatePhoneOperator();

    // Real-time National ID Intelligence Card
    const natInput = $('#stNational', $('#modalContent'));
    const smartCard = $('#stSmartIdCard', $('#modalContent'));
    const idStatus = $('#stIdStatus', $('#modalContent'));
    const idGov = $('#stIdGov', $('#modalContent'));
    const idBirth = $('#stIdBirth', $('#modalContent'));
    const idAge = $('#stIdAge', $('#modalContent'));
    const idGender = $('#stIdGender', $('#modalContent'));

    function checkNat() {
      const val = digits(natInput.value);
      if (val.length === 14) {
        const res = parseEgyptianNationalID(val);
        const dup = state.students.find(x => x.national === val && (!isEdit || x.id !== s.id));

        smartCard.classList.add('show');
        if (dup) {
          idStatus.className = 'smart-id-status error';
          idStatus.innerHTML = `⚠️ <strong>تنبيه تكرار:</strong> هذا الرقم القومي مسجل بالفعل للطالب: <u>${dup.name}</u> (${dup.faculty})`;
          idGov.textContent = res.governorate || '—';
          idBirth.textContent = res.birthDateFormatted || '—';
          idAge.textContent = res.age ? `${res.age} سنة` : '—';
          idGender.textContent = res.gender || '—';
        } else if (res.valid) {
          idStatus.className = 'smart-id-status valid';
          idStatus.innerHTML = `✅ <strong>رقم قومي رسمي سليم:</strong> مسجل في محافظة ${res.governorate} ومطابق للسجلات`;
          idGov.textContent = res.governorate;
          idBirth.textContent = res.birthDateFormatted;
          idAge.textContent = `${res.age} سنة`;
          idGender.textContent = res.gender === 'ذكر' ? 'ذكر 👨' : 'أنثى 👩';
        } else {
          idStatus.className = 'smart-id-status error';
          idStatus.innerHTML = `❌ <strong>خطأ في الرقم القومي:</strong> ${res.error}`;
          idGov.textContent = '—';
          idBirth.textContent = '—';
          idAge.textContent = '—';
          idGender.textContent = '—';
        }
      } else {
        smartCard.classList.remove('show');
      }
    }
    natInput.oninput = checkNat;
    if (s.national) checkNat();

    $('#studentForm').onsubmit = (e) => {
      e.preventDefault();
      const name = $('#stName').value.trim();
      const national = digits($('#stNational').value);
      const phone = digits($('#stPhone').value);
      const faculty = $('#stFaculty').value;
      const year = $('#stYear').value;
      const statusRadio = $('input[name="stStatusRadio"]:checked');
      const status = statusRadio ? statusRadio.value : 'نشط';
      const chosenList = Array.from(chosenEntities);

      if (name.split(/\s+/).length < 3) {
        alert('يرجى كتابة الاسم ثلاثياً أو رباعياً على الأقل.');
        $('#stName').focus();
        return;
      }

      const valID = parseEgyptianNationalID(national);
      if (!valID.valid) {
        alert(valID.error);
        $('#stNational').focus();
        return;
      }

      const valPhone = validateEgyptianPhone(phone);
      if (!valPhone.valid) {
        alert(valPhone.error);
        $('#stPhone').focus();
        return;
      }

      const dup = state.students.find(x => x.national === national && (!isEdit || x.id !== s.id));
      if (dup) {
        alert(`خطأ: الرقم القومي مسجل بالفعل للطالب: "${dup.name}"!`);
        $('#stNational').focus();
        return;
      }

      if (isEdit) {
        s.name = name;
        s.national = national;
        s.phone = phone;
        s.faculty = faculty;
        s.year = year;
        s.status = status;
        s.entities = chosenList;
      } else {
        const newId = Math.max(0, ...state.students.map(x => x.id)) + 1;
        state.students.push({
          id: newId,
          name,
          national,
          phone,
          faculty,
          year,
          status,
          entities: chosenList
        });
      }

      Storage.saveAll();
      closeModal();
      renderStudents();
      updateDashboardStats();
      toast(isEdit ? 'تم تحديث بيانات الطالب بنجاح' : 'تمت إضافة الطالب الجديد بنجاح');
    };
  }

  // 3. New / Edit Event Form with Interactive Supervisors Picker!
  if (type === 'newEvent' || type === 'editEvent') {
    const isEdit = type === 'editEvent';
    const ev = data || { title: '', date: '25 نوفمبر 2026', day: '25', month: 'نوفمبر', place: '', registered: 100, days: 1, supervisorIds: [1, 2], status: 'قادمة', organizer: 'اتحاد طلاب الجامعة' };

    const currentSups = ev.supervisorIds || [];
    const supervisorCheckboxes = state.supervisors.map(sup => `
      <label class="supervisor-check-item">
        <input type="checkbox" name="eventSupervisors" value="${sup.id}" ${currentSups.includes(sup.id) ? 'checked' : ''}>
        <div>
          <strong style="color:var(--navy);display:block">${safe(sup.name)}</strong>
          <small style="color:var(--muted)">${safe(sup.role)} · ${safe(sup.phone)}</small>
        </div>
      </label>
    `).join('');

    const formHtml = `
      <form class="form-grid" id="eventForm">
        <label class="full">اسم الفاعلية
          <input required id="evTitle" placeholder="مثال: المعسكر التثقيفي للقيادات" value="${safe(ev.title)}">
        </label>
        <label>تاريخ وتوقيت الفاعلية
          <input required id="evDate" placeholder="مثال: 25 نوفمبر 2026" value="${safe(ev.date)}">
        </label>
        <label>المكان
          <input required id="evPlace" placeholder="مثال: مركز المؤتمرات – سموحة" value="${safe(ev.place)}">
        </label>
        <label>الجهة المنظمة
          <select id="evOrganizer">
            <option ${ev.organizer === 'اتحاد طلاب الجامعة' ? 'selected' : ''}>اتحاد طلاب الجامعة</option>
            <option ${ev.organizer === 'إدارة رعاية الشباب' ? 'selected' : ''}>إدارة رعاية الشباب</option>
            <option ${ev.organizer === 'الأسر الطلابية' ? 'selected' : ''}>الأسر الطلابية</option>
            <option ${ev.organizer === 'الجوالة' ? 'selected' : ''}>الجوالة</option>
          </select>
        </label>
        <label>العدد المستهدف للتسجيل
          <input type="number" id="evRegistered" value="${ev.registered || 100}">
        </label>
        <label>مدة الفاعلية (أيام)
          <input type="number" id="evDays" value="${ev.days || 1}">
        </label>
        <label>الحالة
          <select id="evStatus">
            <option ${ev.status === 'قادمة' ? 'selected' : ''}>قادمة</option>
            <option ${ev.status === 'جارية' ? 'selected' : ''}>جارية</option>
            <option ${ev.status === 'مكتملة' ? 'selected' : ''}>مكتملة</option>
          </select>
        </label>
        <div class="full">
          <label style="margin-bottom:4px">اختر هيئة الإشراف على الفاعلية من القائمة المعتمدة</label>
          <div class="supervisor-picker">${supervisorCheckboxes}</div>
        </div>
        ${actions}
      </form>
    `;

    modal(isEdit ? 'تعديل الفاعلية' : 'إنشاء فاعلية جديدة', 'حدد بيانات الفاعلية وهيئة الإشراف لحفظها في المنظومة.', formHtml);

    $('#eventForm').onsubmit = (e) => {
      e.preventDefault();
      const title = $('#evTitle').value.trim();
      const date = $('#evDate').value.trim();
      const place = $('#evPlace').value.trim();
      const organizer = $('#evOrganizer').value;
      const registered = parseInt($('#evRegistered').value, 10) || 100;
      const days = parseInt($('#evDays').value, 10) || 1;
      const status = $('#evStatus').value;
      const chosenSupIds = $$('input[name="eventSupervisors"]:checked', $('#eventForm')).map(cb => parseInt(cb.value, 10));

      if (isEdit) {
        ev.title = title;
        ev.date = date;
        ev.place = place;
        ev.organizer = organizer;
        ev.registered = registered;
        ev.days = days;
        ev.status = status;
        ev.supervisorIds = chosenSupIds;
      } else {
        const newId = Math.max(0, ...state.events.map(x => x.id)) + 1;
        state.events.unshift({
          id: newId,
          title,
          date,
          day: date.match(/\d+/) ? date.match(/\d+/)[0] : '01',
          month: 'نوفمبر',
          place,
          organizer,
          registered,
          days,
          status,
          supervisorIds: chosenSupIds,
          attendeeIds: []
        });
      }

      Storage.saveAll();
      closeModal();
      renderEvents();
      renderSupervisors();
      updateDashboardStats();
      toast(isEdit ? 'تم تحديث الفاعلية' : 'تم إنشاء الفاعلية بنجاح');
    };
  }

  // 4. New Ban Form
  if (type === 'newBan') {
    const preStudent = data;
    const studentOpts = state.students.map(s => `
      <option value="${s.id}" ${preStudent && preStudent.studentId === s.id ? 'selected' : ''}>
        ${safe(s.name)} - ${safe(s.faculty)} (${maskNationalID(s.national)})
      </option>
    `).join('');

    const formHtml = `
      <form class="form-grid" id="banForm">
        <label class="full">الطالب المراد حظره
          <select id="banStudentSelect">${studentOpts}</select>
        </label>
        <label>نوع الحظر
          <select id="banTypeSelect">
            <option value="مؤقت">مؤقت</option>
            <option value="نهائي">نهائي</option>
          </select>
        </label>
        <label>تاريخ البداية
          <input type="date" id="banFrom" required value="${new Date().toISOString().split('T')[0]}">
        </label>
        <label>تاريخ الانتهاء (للمؤقت)
          <input type="date" id="banTo">
        </label>
        <label>المسؤول المعتمد للقرار
          <input id="banBy" value="محمد مرسال">
        </label>
        <label class="full">سبب الحظر والسند الإداري
          <textarea id="banReason" required placeholder="اكتب المخالفة والقرار الإداري الموثق..."></textarea>
        </label>
        ${actions}
      </form>
    `;

    modal('إضافة قرار حظر إداري', 'الحظر يمنع الطالب من تسجيل الحضور في أي فاعلية حتى انتهاء مدته.', formHtml);

    $('#banForm').onsubmit = (e) => {
      e.preventDefault();
      const studentId = parseInt($('#banStudentSelect').value, 10);
      const student = state.students.find(s => s.id === studentId);
      if (!student) return;

      const typeVal = $('#banTypeSelect').value;
      const fromVal = $('#banFrom').value;
      const toVal = typeVal === 'نهائي' ? '—' : ($('#banTo').value || 'غير محدد');
      const byVal = $('#banBy').value || 'إدارة رعاية الشباب';
      const reasonVal = $('#banReason').value.trim();

      const newId = Math.max(0, ...state.bans.map(x => x.id)) + 1;
      state.bans.unshift({
        id: newId,
        studentId: student.id,
        name: student.name,
        faculty: student.faculty,
        national: student.national,
        type: typeVal,
        from: fromVal,
        to: toVal,
        by: byVal,
        reason: reasonVal,
        active: true
      });

      student.status = 'محظور';
      Storage.saveAll();
      closeModal();
      renderBans();
      renderStudents();
      updateDashboardStats();
      toast(`تم تسجيل قرار الحظر للطالب "${student.name}"`);
    };
  }

  // 5. New Entity Form
  if (type === 'newEntity') {
    const formHtml = `
      <form class="form-grid" id="entityForm">
        <label class="full">اسم الكيان الطلابي
          <input required id="enName" placeholder="مثال: نادي الابتكار والذكاء الاصطناعي">
        </label>
        <label>تصنيف الكيان
          <select id="enType">
            <option>اتحاد</option>
            <option>أسرة</option>
            <option>فريق</option>
            <option>نشاط</option>
          </select>
        </label>
        <label>الحالة
          <select id="enStatus">
            <option>نشط</option>
            <option>موقوف مؤقتاً</option>
          </select>
        </label>
        ${actions}
      </form>
    `;
    modal('إضافة كيان طلابي جديد', 'سيظهر الكيان فوراً في خيارات انضمام الطلاب واستيراد الكشوف.', formHtml);

    $('#entityForm').onsubmit = (e) => {
      e.preventDefault();
      const name = $('#enName').value.trim();
      const typeVal = $('#enType').value;
      const statusVal = $('#enStatus').value;
      const newId = Math.max(0, ...state.entities.map(x => x.id)) + 1;
      state.entities.push({ id: newId, name, type: typeVal, icon: 'users-round', status: statusVal });
      Storage.saveAll();
      closeModal();
      renderEntities();
      toast(`تمت إضافة الكيان "${name}" بنجاح`);
    };
  }

  // 6. New User Form
  if (type === 'newUser') {
    const formHtml = `
      <form class="form-grid" id="userForm">
        <label class="full">الاسم بالكامل
          <input required id="usrName" placeholder="اسم المشرف أو الأدمن">
        </label>
        <label class="full">البريد الإلكتروني (Gmail)
          <input required id="usrEmail" type="email" dir="ltr" placeholder="name@gmail.com">
        </label>
        <label>الدور والصلاحيات
          <select id="usrRole">
            <option value="مشاهد">مشاهد (اطلاع فقط)</option>
            <option value="أدمن عام">أدمن عام (صلاحيات كاملة)</option>
          </select>
        </label>
        <label>الحالة
          <select id="usrStatus">
            <option value="نشط">نشط</option>
            <option value="دعوة معلقة">دعوة معلقة</option>
          </select>
        </label>
        <div class="full permission-note">
          <i data-lucide="shield-check"></i>
          <p>المشاهد لا يملك صلاحية التعديل أو الحذف أو الاستيراد أو التصدير.</p>
        </div>
        ${actions}
      </form>
    `;
    modal('إضافة مستخدم جديد للنظام', 'لن يستطيع الدخول إلا بعد تسجيل الدخول بنفس حساب Gmail.', formHtml);

    $('#userForm').onsubmit = (e) => {
      e.preventDefault();
      const name = $('#usrName').value.trim();
      const email = $('#usrEmail').value.trim();
      const role = $('#usrRole').value;
      const status = $('#usrStatus').value;
      const newId = Math.max(0, ...state.users.map(x => x.id)) + 1;
      state.users.push({ id: newId, name, email, role, status, last: 'لم يسجل الدخول بعد' });
      Storage.saveAll();
      closeModal();
      renderUsers();
      toast(`تمت إضافة المستخدم "${name}" بنجاح`);
    };
  }
}

// 16. Official Word Document Studio & Multi-Template Manager (V3)
const WORD_COLUMNS = {
  num: { defaultLabel: 'م', width: '4%' },
  name: { defaultLabel: 'الاسم رباعي', width: '22%' },
  faculty: { defaultLabel: 'الكلية', width: '15%' },
  year: { defaultLabel: 'الفرقة الدراسية', width: '12%' },
  national: { defaultLabel: 'الرقم القومي (14 رقم)', width: '17%' },
  phone: { defaultLabel: 'رقم الهاتف / الواتساب', width: '14%' },
  gov: { defaultLabel: 'المحافظة', width: '10%' },
  gender: { defaultLabel: 'النوع', width: '8%' },
  entities: { defaultLabel: 'الكيانات الطلابية', width: '14%' },
  signature: { defaultLabel: 'توقيع الطالب', width: '16%' },
  notes: { defaultLabel: 'ملاحظات', width: '10%' }
};

const DEFAULT_TEMPLATES_COLLECTION = [
  {
    id: 'tpl_1',
    num: 1,
    name: 'كشف توقيعات رسمي (أفقي)',
    title: 'كشف بأسماء الطلاب المشاركين',
    titleFontSize: '16pt',
    meta: 'المكان: جامعة الإسكندرية  |  العام الجامعي: 2026 / 2027',
    headerCenterLine1: 'جامعة الإسكندرية',
    headerCenterLine2: 'الإدارة العامة لرعاية الشباب',
    headerCenterLine3: 'إدارة الاتحادات الطلابية والأنشطة',
    showUniLogo: true,
    uniLogoSize: 80,
    showUnionLogo: true,
    unionLogoSize: 80,
    showFooterLogo: true,
    footerLogoSize: 26,
    footerText: '',
    showFooterText: true,
    showDocCode: true,
    docCodeText: 'كود الاعتماد: ALEX-STU-2026 / صادر رسمياً',
    orientation: 'landscape',
    density: 'compact',
    tableAlignment: 'center',
    tableFontSize: '9.5pt',
    themeColor: '#073b67',
    columns: ['num', 'name', 'faculty', 'year', 'national', 'signature'],
    customLabels: {
      num: 'م',
      name: 'الاسم رباعي',
      faculty: 'الكلية',
      year: 'الفرقة الدراسية',
      national: 'الرقم القومي (14 رقم)',
      signature: 'توقيع الطالب'
    },
    signatures: [
      { role: 'مشرف عام الاتحاد', name: 'أ/ محمد فوزى' },
      { role: 'مدير الادارة', name: 'أ/ شهاب محروس' }
    ]
  },
  {
    id: 'tpl_2',
    num: 2,
    name: 'كشف إداري شامل للبيانات والهواتف',
    title: 'بيان إداري تفصيلي بأسماء الطلاب',
    titleFontSize: '16pt',
    meta: 'الإدارة العامة لرعاية الشباب  |  جامعة الإسكندرية',
    headerCenterLine1: 'جامعة الإسكندرية',
    headerCenterLine2: 'الإدارة العامة لرعاية الشباب',
    headerCenterLine3: 'إدارة الاتحادات الطلابية والأنشطة',
    showUniLogo: true,
    uniLogoSize: 80,
    showUnionLogo: true,
    unionLogoSize: 80,
    showFooterLogo: true,
    footerLogoSize: 26,
    footerText: '',
    showFooterText: true,
    showDocCode: true,
    docCodeText: 'كود الاعتماد: ALEX-STU-ADMIN',
    orientation: 'landscape',
    density: 'compact',
    tableAlignment: 'center',
    tableFontSize: '9.5pt',
    themeColor: '#073b67',
    columns: ['num', 'name', 'faculty', 'year', 'national', 'phone', 'gov', 'gender', 'entities', 'notes'],
    customLabels: {},
    signatures: [
      { role: 'مشرف عام الاتحاد', name: 'أ/ محمد فوزى' },
      { role: 'مدير الادارة', name: 'أ/ شهاب محروس' }
    ]
  },
  {
    id: 'tpl_3',
    num: 3,
    name: 'كشف معسكرات مختصر (رأسي)',
    title: 'كشف تسجيل حضور الطلاب',
    titleFontSize: '16pt',
    meta: 'جامعة الإسكندرية  |  رعاية الشباب',
    headerCenterLine1: 'جامعة الإسكندرية',
    headerCenterLine2: 'الإدارة العامة لرعاية الشباب',
    headerCenterLine3: 'إدارة الاتحادات الطلابية والأنشطة',
    showUniLogo: true,
    uniLogoSize: 75,
    showUnionLogo: true,
    unionLogoSize: 75,
    showFooterLogo: false,
    footerLogoSize: 24,
    footerText: '',
    showFooterText: false,
    showDocCode: false,
    docCodeText: '',
    orientation: 'portrait',
    density: 'normal',
    themeColor: '#073b67',
    columns: ['num', 'name', 'faculty', 'year', 'signature'],
    customLabels: {},
    signatures: [
      { role: 'مشرف عام الاتحاد', name: 'أ/ محمد فوزى' },
      { role: 'مدير الادارة', name: 'أ/ شهاب محروس' }
    ]
  }
];

function getSavedWordTemplates() {
  try {
    const list = JSON.parse(localStorage.getItem('alex_word_saved_templates') || '[]');
    if (list && list.length > 0) return list;
  } catch (e) {}
  return JSON.parse(JSON.stringify(DEFAULT_TEMPLATES_COLLECTION));
}

function saveWordTemplates(list) {
  try {
    localStorage.setItem('alex_word_saved_templates', JSON.stringify(list));
  } catch (e) {}
}

function buildWordDocHTML(cfg) {
  const isLandscape = cfg.orientation === 'landscape';
  const sizeStyle = isLandscape
    ? 'size: 841.9pt 595.3pt; mso-page-orientation: landscape; margin: 12mm 10mm 12mm 10mm;'
    : 'size: 595.3pt 841.9pt; margin: 12mm 10mm 12mm 10mm;';

  const align = cfg.tableAlignment || 'center';
  const fontSize = cfg.tableFontSize || '9.5pt';
  let pad = '2.5px 3.5px';
  let msoPad = '1.5pt 2.5pt 1.5pt 2.5pt';
  let lineHeight = '1.1';

  if (cfg.density === 'ultra-compact') {
    pad = '1.5px 2.5px';
    msoPad = '1.0pt 2.0pt 1.0pt 2.0pt';
    lineHeight = '1.02';
  } else if (cfg.density === 'normal') {
    pad = '5px 5px';
    msoPad = '3.5pt 4.5pt 3.5pt 4.5pt';
    lineHeight = '1.25';
  }

  const uniLogo = (typeof window !== 'undefined' && window.APP_ASSETS && window.APP_ASSETS.uniLogo) || 'assets/alexandria-university.png';
  const unionLogo = (typeof window !== 'undefined' && window.APP_ASSETS && window.APP_ASSETS.unionLogo) || 'assets/student-union.png';

  const activeCols = (cfg.columns || []).filter(c => WORD_COLUMNS[c]);
  const labels = cfg.customLabels || {};

  const theadHtml = activeCols.map(c => `
    <th style="width:${WORD_COLUMNS[c].width};background:${cfg.themeColor || '#073b67'};color:#ffffff;border:1px solid #1e3a5f;padding:${cfg.density === 'compact' ? '6px 4px' : '9px 6px'};font-size:${cfg.density === 'compact' ? '10.5pt' : '11pt'};font-weight:bold;text-align:center;">
      ${labels[c] || WORD_COLUMNS[c].defaultLabel}
    </th>
  `).join('');

  const rowsHtml = (cfg.students && cfg.students.length) ? cfg.students.map((s, idx) => {
    const p = (typeof parseEgyptianNationalID === 'function') ? parseEgyptianNationalID(s.national) : {};
    return `<tr style="background:${idx % 2 === 0 ? '#ffffff' : '#f7faff'}">` + activeCols.map(c => {
      let content = '';
      let style = `border:1px solid #666;padding:${pad};mso-padding-alt:${msoPad};font-size:${fontSize};text-align:${align};vertical-align:middle;mso-line-height-rule:exactly;line-height:${lineHeight};margin:0;mso-margin-top-alt:0pt;mso-margin-bottom-alt:0pt;`;

      if (c === 'num') content = idx + 1;
      else if (c === 'name') { content = s.name || ''; style += `font-weight:bold;text-align:${align};`; }
      else if (c === 'faculty') content = s.faculty || '';
      else if (c === 'year') content = s.year || '';
      else if (c === 'national') { content = s.national || ''; style += 'font-family:Arial;direction:ltr;'; }
      else if (c === 'phone') { content = s.phone || ''; style += 'font-family:Arial;direction:ltr;'; }
      else if (c === 'gov') content = p.governorate || 'الإسكندرية';
      else if (c === 'gender') content = p.gender || 'طالب';
      else if (c === 'entities') content = (s.entities || []).join('، ');
      else if (c === 'signature') content = '';
      else if (c === 'notes') content = '';

      return `<td style="${style}">${content}</td>`;
    }).join('') + '</tr>';
  }).join('') : `<tr><td colspan="${activeCols.length}" style="border:1px solid #777;padding:18px;text-align:center;color:#666">لم يتم تسجيل أي طلاب في هذا الكشف بعد</td></tr>`;

  // Signatures with clean blank space (no dots!)
  const sigs = cfg.signatures || [];
  const sigColWidth = (100 / Math.max(1, sigs.length)).toFixed(1) + '%';
  const sigsHtml = `
    <table style="width:100%;border:0;margin-top:35px;page-break-inside:avoid;">
      <tr>
        ${sigs.map(sig => `
          <td style="border:0;width:${sigColWidth};text-align:center;vertical-align:top;padding:10px 15px;">
            <strong style="color:${cfg.themeColor || '#073b67'};font-size:12.5pt;display:block;margin-bottom:8px">${sig.role}</strong>
            <div style="height:65px;"></div>
            <span style="font-size:12pt;font-weight:bold;color:#111;display:block">${sig.name}</span>
          </td>
        `).join('')}
      </tr>
    </table>
  `;

  // Explicit dimensions for MS Word compatibility:
  const uSize = cfg.uniLogoSize || 80;
  const unSize = cfg.unionLogoSize || 80;
  const fSize = cfg.footerLogoSize || 26;

  // Footer bar only if showFooterText or showDocCode is true
  const hasFooter = cfg.showFooterText || cfg.showDocCode;
  const footerBarHtml = hasFooter ? `
    <div class="footer-bar">
      <table style="width:100%;border:0;">
        <tr>
          <td style="border:0;font-size:9pt;color:#666;text-align:right">
            ${(cfg.showFooterLogo && cfg.footerText) ? `<img src="${unionLogo}" height="${fSize}" style="height:${fSize}px;width:auto;vertical-align:middle;margin-left:8px" alt="لوجو"> ` : ''}
            <span>${cfg.footerText || ''}</span>
          </td>
          <td style="border:0;font-size:9pt;color:#888;text-align:left">
            ${cfg.showDocCode ? `<span>${cfg.docCodeText || ''}</span>` : ''}
          </td>
        </tr>
      </table>
    </div>
  ` : '';

  const doc = `<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:w="urn:schemas-microsoft-com:office:word"
      xmlns="http://www.w3.org/TR/REC-html40" dir="rtl" lang="ar">
<head>
  <meta charset="utf-8">
  <title>${cfg.title}</title>
  <!--[if gte mso 9]>
  <xml>
    <w:WordDocument>
      <w:View>Print</w:View>
      <w:Zoom>100</w:Zoom>
      <w:DoNotOptimizeForBrowser/>
    </w:WordDocument>
  </xml>
  <![endif]-->
  <style>
    @page Section1 {
      ${sizeStyle}
      mso-header-margin: 36.0pt;
      mso-footer-margin: 36.0pt;
    }
    div.Section1 { page: Section1; }
    body {
      font-family: 'Arial', 'Traditional Arabic', sans-serif;
      direction: rtl;
      text-align: right;
      color: #111;
      margin: 0;
      padding: 0;
    }
    table.data-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 8px;
      margin-bottom: 10px;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      mso-table-anchor-vertical: paragraph;
    }
    table.data-table th, table.data-table td {
      border: 1px solid #555555;
      padding: ${pad};
      mso-padding-alt: ${msoPad};
      font-size: ${fontSize};
      text-align: ${align};
      vertical-align: middle;
      mso-line-height-rule: exactly;
      line-height: ${lineHeight};
      margin: 0;
      mso-margin-top-alt: 0pt;
      mso-margin-bottom-alt: 0pt;
    }
    p, div, span {
      margin: 0;
      padding: 0;
      mso-margin-top-alt: 0pt;
      mso-margin-bottom-alt: 0pt;
      line-height: ${lineHeight};
      mso-line-height-rule: exactly;
    }
    .head-table {
      width: 100%;
      border: 0;
      border-bottom: 2.5px solid ${cfg.themeColor || '#073b67'};
      padding-bottom: 10px;
      margin-bottom: 12px;
    }
    .head-table td {
      border: 0;
      vertical-align: middle;
    }
    .footer-bar {
      margin-top: 25px;
      border-top: 1px solid #ccc;
      padding-top: 8px;
      font-size: 9pt;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="Section1">
    <table class="head-table">
      <tr>
        <td style="width:25%;text-align:right">
          ${cfg.showUniLogo ? `<img src="${uniLogo}" height="${uSize}" style="height:${uSize}px;width:auto;" alt="جامعة الإسكندرية">` : ''}
        </td>
        <td style="width:50%;text-align:center;line-height:1.45">
          ${cfg.headerCenterLine1 ? `<strong style="font-size:14.5pt;color:${cfg.themeColor || '#073b67'}">${cfg.headerCenterLine1}</strong><br>` : ''}
          ${cfg.headerCenterLine2 ? `<span style="font-size:12.5pt;font-weight:600">${cfg.headerCenterLine2}</span><br>` : ''}
          ${cfg.headerCenterLine3 ? `<span style="font-size:11.5pt;color:#333">${cfg.headerCenterLine3}</span>` : ''}
        </td>
        <td style="width:25%;text-align:left">
          ${cfg.showUnionLogo ? `<img src="${unionLogo}" height="${unSize}" style="height:${unSize}px;width:auto;" alt="اتحاد الطلاب">` : ''}
        </td>
      </tr>
    </table>

    <div style="text-align:center;margin:14px 0 8px">
      <h1 style="font-size:${cfg.titleFontSize || '16pt'};color:${cfg.themeColor || '#073b67'};margin:0 0 6px;line-height:1.4">${cfg.title}</h1>
      ${cfg.meta ? `<p style="font-size:10.5pt;color:#444;margin:0 0 8px">${cfg.meta}</p>` : ''}
    </div>

    <table class="data-table">
      <thead><tr>${theadHtml}</tr></thead>
      <tbody>${rowsHtml}</tbody>
    </table>

    ${sigsHtml}
    ${footerBarHtml}
  </div>
</body>
</html>`;
  return doc;
}

function openWordExportModal(sourceType = 'event', sourceData = null) {
  let initialStudents = [];
  let defaultTitle = '';
  let defaultMeta = '';

  const uniLogo = (window.APP_ASSETS && window.APP_ASSETS.uniLogo) || 'assets/alexandria-university.png';
  const unionLogo = (window.APP_ASSETS && window.APP_ASSETS.unionLogo) || 'assets/student-union.png';

  const savedTemplates = getSavedWordTemplates();
  let activeTemplate = savedTemplates[0];

  if (sourceType === 'event' && sourceData) {
    const e = sourceData;
    initialStudents = state.students.filter(s => (e.attendeeIds || []).includes(s.id));
    defaultTitle = `كشف بأسماء الطلاب المشاركين في «${e.title}»`;
    defaultMeta = `المكان: ${e.place || 'جامعة الإسكندرية'}  |  التاريخ: ${e.date || ''}  |  الجهة المنظمة: ${e.organizer || 'اتحاد طلاب الجامعة'}  |  إجمالي المقيدين: ${initialStudents.length} طالب`;
  } else {
    const facFilter = $('#facultyFilter') ? $('#facultyFilter').value : '';
    initialStudents = facFilter ? state.students.filter(s => s.faculty === facFilter) : state.students;
    defaultTitle = 'كشف قاعدة بيانات طلاب أنشطة اتحاد طلاب جامعة الإسكندرية';
    defaultMeta = `العام الجامعي: 2026 / 2027  |  الإدارة العامة لرعاية الشباب  |  ${facFilter || 'جميع كليات الجامعة'}  |  إجمالي المقيدين: ${initialStudents.length} طالب`;
  }

  // Active working config
  let currentCfg = JSON.parse(JSON.stringify(activeTemplate));
  currentCfg.title = defaultTitle;
  currentCfg.meta = defaultMeta;
  currentCfg.students = initialStudents;

  function buildColGridHtml() {
    return Object.keys(WORD_COLUMNS).map(colKey => {
      const isChecked = currentCfg.columns.includes(colKey);
      const labelVal = (currentCfg.customLabels && currentCfg.customLabels[colKey]) || WORD_COLUMNS[colKey].defaultLabel;
      return `
        <div class="col-config-item">
          <label class="col-config-head">
            <span style="display:inline-flex;align-items:center;gap:6px">
              <input type="checkbox" name="wordCol" value="${colKey}" ${isChecked ? 'checked' : ''}>
              <strong>${WORD_COLUMNS[colKey].defaultLabel}</strong>
            </span>
            <small style="color:var(--muted)">عرض: ${WORD_COLUMNS[colKey].width}</small>
          </label>
          <input class="col-rename-input" data-col-key="${colKey}" value="${safe(labelVal)}" placeholder="اسم العمود في الكشف" title="تعديل اسم العمود المطبوع في الوورد">
        </div>
      `;
    }).join('');
  }

  const studioHtml = `
    <div class="word-studio-wrap">
      <!-- 1. لوحة التحكم والتخصيص الشاملة -->
      <div class="studio-config">
        
        <!-- 0. شريط التيمبليتات المحفوظة متعدد القوالب -->
        <div class="studio-section" style="background:#f4f9fd;border-color:#b8dbf5">
          <h4>
            <span><i data-lucide="bookmarks"></i> القوالب المحفوظة لكشوف Word (اختر بضغطة زر)</span>
            <button type="button" class="btn secondary sm" id="btnSaveAsNewTemplate">
              <i data-lucide="plus-circle"></i> حفظ كقالب جديد برقم
            </button>
          </h4>
          <p style="font-size:11px;color:var(--muted);margin:0 0 10px">اختر أي قالب جاهز للاعتماد الفوري، أو احفظ إعداداتك الحالية في قالب مرقم جديد:</p>
          <div class="saved-templates-bar" id="wordSavedTemplatesBar">
            <!-- Rendered dynamically -->
          </div>
        </div>

        <!-- 1. الترويسة العليا واللوجوهات -->
        <div class="studio-section">
          <h4><span><i data-lucide="heading"></i> نصوص الترويسة العليا ومقاس اللوجوهات الصريح</span></h4>
          <div class="form-grid">
            <label>السطر 1 في الترويسة
              <input id="wordHeaderCenter1" value="${safe(currentCfg.headerCenterLine1)}">
            </label>
            <label>السطر 2 في الترويسة
              <input id="wordHeaderCenter2" value="${safe(currentCfg.headerCenterLine2)}">
            </label>
            <label class="full">السطر 3 في الترويسة
              <input id="wordHeaderCenter3" value="${safe(currentCfg.headerCenterLine3)}">
            </label>

            <!-- مقاسات اللوجوهات بالسلايدر الصريح -->
            <div class="slider-control-group">
              <div class="slider-label-row">
                <span><input type="checkbox" id="wordShowUniLogo" ${currentCfg.showUniLogo ? 'checked' : ''}> شعار الجامعة (يمين)</span>
                <span class="slider-val-badge" id="wordUniLogoSizeBadge">${currentCfg.uniLogoSize || 80}px</span>
              </div>
              <input type="range" class="range-slider" id="wordUniLogoSize" min="40" max="140" step="5" value="${currentCfg.uniLogoSize || 80}">
            </div>

            <div class="slider-control-group">
              <div class="slider-label-row">
                <span><input type="checkbox" id="wordShowUnionLogo" ${currentCfg.showUnionLogo ? 'checked' : ''}> شعار الاتحاد (يسار)</span>
                <span class="slider-val-badge" id="wordUnionLogoSizeBadge">${currentCfg.unionLogoSize || 80}px</span>
              </div>
              <input type="range" class="range-slider" id="wordUnionLogoSize" min="40" max="140" step="5" value="${currentCfg.unionLogoSize || 80}">
            </div>
          </div>
        </div>

        <!-- 2. عنوان الكشف والسطر التعريفي -->
        <div class="studio-section">
          <h4><span><i data-lucide="type"></i> عنوان الكشف والسطر التعريفي</span></h4>
          <div class="form-grid">
            <label class="full">عنوان الكشف الرئيسي
              <input id="wordDocTitle" value="${safe(currentCfg.title)}" placeholder="اكتب عنوان الكشف هنا">
            </label>
            <label>حجم خط العنوان
              <select id="wordDocTitleSize">
                <option value="14pt" ${currentCfg.titleFontSize === '14pt' ? 'selected' : ''}>14pt (متوسط)</option>
                <option value="16pt" ${currentCfg.titleFontSize === '16pt' ? 'selected' : ''}>16pt (افتراضي معتمد)</option>
                <option value="18pt" ${currentCfg.titleFontSize === '18pt' ? 'selected' : ''}>18pt (كبير بارز)</option>
                <option value="20pt" ${currentCfg.titleFontSize === '20pt' ? 'selected' : ''}>20pt (ضخم)</option>
              </select>
            </label>
            <label class="full">السطر التعريفي (المكان / التاريخ / الجهة)
              <input id="wordDocMeta" value="${safe(currentCfg.meta)}" placeholder="المكان والتاريخ وبيانات الفاعلية">
            </label>
          </div>
        </div>

        <!-- 3. أعمدة الجدول وتعديل المسميات ومقاس الصفحة -->
        <div class="studio-section">
          <h4>
            <span><i data-lucide="table"></i> أعمدة الجدول وتعديل المسميات</span>
            <small style="color:var(--muted);font-weight:normal" id="wordColCountBadge">${currentCfg.columns.length} أعمدة مختارة</small>
          </h4>
          <div class="columns-picker-grid" id="wordColGrid">
            ${buildColGridHtml()}
          </div>

          <div class="form-grid" style="margin-top:12px;padding-top:10px;border-top:1px solid #e1ecf5">
            <div>
              <label style="margin-bottom:6px">اتجاه ورقة Word</label>
              <div class="layout-options-row">
                <label class="layout-card-opt ${currentCfg.orientation === 'landscape' ? 'selected' : ''}">
                  <input type="radio" name="wordOrientation" value="landscape" ${currentCfg.orientation === 'landscape' ? 'checked' : ''} hidden>
                  <i data-lucide="file-text" style="transform:rotate(90deg)"></i>
                  <span>أفقي Landscape (عريض)</span>
                </label>
                <label class="layout-card-opt ${currentCfg.orientation === 'portrait' ? 'selected' : ''}">
                  <input type="radio" name="wordOrientation" value="portrait" ${currentCfg.orientation === 'portrait' ? 'checked' : ''} hidden>
                  <i data-lucide="file-text"></i>
                  <span>رأسي Portrait (طولي)</span>
                </label>
              </div>
            </div>
            <div>
              <label style="margin-bottom:6px">محاذاة نصوص وبيانات الجدول</label>
              <div class="layout-options-row">
                <label class="layout-card-opt ${(currentCfg.tableAlignment || 'center') === 'center' ? 'selected' : ''}">
                  <input type="radio" name="wordTableAlignment" value="center" ${(currentCfg.tableAlignment || 'center') === 'center' ? 'checked' : ''} hidden>
                  <span>🎯 توسيط كامل في النص (افتراضي)</span>
                </label>
                <label class="layout-card-opt ${currentCfg.tableAlignment === 'right' ? 'selected' : ''}">
                  <input type="radio" name="wordTableAlignment" value="right" ${currentCfg.tableAlignment === 'right' ? 'checked' : ''} hidden>
                  <span>➡️ محاذاة لليمين</span>
                </label>
              </div>
            </div>

            <div>
              <label style="margin-bottom:6px">مقاس خط بيانات الجدول (الطباعة والـ Word)</label>
              <div class="layout-options-row font-sizes-row">
                ${['8.5pt', '9pt', '9.5pt', '10pt', '10.5pt', '11pt'].map(sz => `
                  <label class="layout-card-opt font-size-opt ${(currentCfg.tableFontSize || '9.5pt') === sz ? 'selected' : ''}" style="flex:1;text-align:center;padding:7px 4px">
                    <input type="radio" name="wordTableFontSize" value="${sz}" ${(currentCfg.tableFontSize || '9.5pt') === sz ? 'checked' : ''} hidden>
                    <span style="font-weight:bold;font-size:11px">${sz}</span>
                  </label>
                `).join('')}
              </div>
            </div>

            <div>
              <label style="margin-bottom:6px">تباعد الأسطر وضغط الصفحات (لمنع زيادة الصفحات)</label>
              <div class="layout-options-row">
                <label class="layout-card-opt ${currentCfg.density === 'ultra-compact' ? 'selected' : ''}">
                  <input type="radio" name="wordDensity" value="ultra-compact" ${currentCfg.density === 'ultra-compact' ? 'checked' : ''} hidden>
                  <span>⚡ مضغوط جداً (لتوفير أكبر قدر من الصفحات)</span>
                </label>
                <label class="layout-card-opt ${(currentCfg.density || 'compact') === 'compact' ? 'selected' : ''}">
                  <input type="radio" name="wordDensity" value="compact" ${(currentCfg.density || 'compact') === 'compact' ? 'checked' : ''} hidden>
                  <span>📄 مضغوط رسمي (معتمد)</span>
                </label>
                <label class="layout-card-opt ${currentCfg.density === 'normal' ? 'selected' : ''}">
                  <input type="radio" name="wordDensity" value="normal" ${currentCfg.density === 'normal' ? 'checked' : ''} hidden>
                  <span>عادي مريح</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- 4. تذييل الصفحة والفوتر (بدون أي نصوص إجبارية!) -->
        <div class="studio-section">
          <h4><span><i data-lucide="panel-bottom"></i> تذييل الصفحة والفوتر (اختياري بالكامل وبدون جمل تلقائية)</span></h4>
          <div class="form-grid">
            <label class="full">
              <span style="font-size:12px;display:block;margin-bottom:4px">
                <input type="checkbox" id="wordShowFooterText" ${currentCfg.showFooterText ? 'checked' : ''}>
                تفعيل نص الفوتر (اتركه فارغاً إذا أردت فوتر أبيض بدون نصوص)
              </span>
              <input id="wordFooterText" value="${safe(currentCfg.footerText || '')}" placeholder="اكتب نص الفوتر هنا، أو اتركه فارغاً">
            </label>
            <div class="slider-control-group">
              <div class="slider-label-row">
                <span><input type="checkbox" id="wordShowFooterLogo" ${currentCfg.showFooterLogo ? 'checked' : ''}> لوجو الفوتر المصغر</span>
                <span class="slider-val-badge" id="wordFooterLogoSizeBadge">${currentCfg.footerLogoSize || 26}px</span>
              </div>
              <input type="range" class="range-slider" id="wordFooterLogoSize" min="16" max="60" step="2" value="${currentCfg.footerLogoSize || 26}">
            </div>
            <label>
              <span style="font-size:12px;margin-bottom:4px;display:block">
                <input type="checkbox" id="wordShowDocCode" ${currentCfg.showDocCode ? 'checked' : ''}> إظهار كود التوثيق
              </span>
              <input id="wordDocCodeText" value="${safe(currentCfg.docCodeText || '')}" placeholder="كود الاعتماد أو اتركه فارغاً">
            </label>
          </div>
        </div>

        <!-- 5. الإمضاءات والاعتماد (توقيعين افتراضياً مع مسافة بيضاء بدون نقط) -->
        <div class="studio-section">
          <h4>
            <span><i data-lucide="pen-tool"></i> الإمضاءات المعتمدة (توقيعات رسمية)</span>
            <button type="button" class="btn-add-sig" id="wordAddSigBtn"><i data-lucide="plus"></i> إضافة موقع جديد</button>
          </h4>
          <p style="font-size:11px;color:var(--muted);margin:0 0 10px">يتم ترك مسافة بيضاء نظيفة ومريحة للإمضاء اليدوي بالقلم بين المنصب والاسم (بدون نقط «....» نهائياً):</p>
          <div class="signatures-editor" id="wordSigsEditor"></div>
        </div>
      </div>

      <!-- 2. المعاينة الحية الفورية (Live Paper 1:1 Mirror) -->
      <div class="studio-preview-box">
        <div style="color:#fff;font-size:12px;font-weight:700;margin-bottom:12px;display:flex;align-items:center;justify-content:space-between">
          <span style="display:flex;align-items:center;gap:6px"><i data-lucide="eye"></i> معاينة ورقية مطابقة تماماً للمنتج النهائي 1:1</span>
          <span style="font-size:11px;background:rgba(255,255,255,0.15);padding:3px 8px;border-radius:6px" id="previewPageIndicator">A4 أفقي</span>
        </div>
        <div class="preview-paper ${currentCfg.orientation === 'landscape' ? 'landscape' : 'portrait'}" id="wordLivePreviewPaper">
          <!-- Injected dynamically -->
        </div>
      </div>
    </div>

    <!-- أزرار الإجراءات وحفظ التيمبليتات -->
    <div class="form-actions" style="margin-top:16px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px">
      <div style="display:flex;gap:8px;align-items:center">
        <button type="button" class="btn secondary" id="wordUpdateCurrentTplBtn" title="تحديث القالب الحالي المختار بالإعدادات الحالية">
          <i data-lucide="save"></i> حفظ التعديل على هذا القالب
        </button>
      </div>
      <div style="display:flex;gap:8px">
        <button type="button" class="btn ghost modal-cancel">إلغاء</button>
        <button type="button" class="btn primary" id="wordDownloadBtn">
          <i data-lucide="file-down"></i> تحميل كشف Word المعتمد (.doc)
        </button>
      </div>
    </div>
  `;

  modal(
    'استوديو تخصيص وتصدير كشف Word المعتمد (V3)',
    'تحكم كامل في مقاسات اللوجوهات، نصوص الترويسة، أعمدة الجدول، وإدارة القوالب المتعددة مع معاينة حية 1:1.',
    studioHtml,
    { size: 'xl', badge: '<i data-lucide="file-text"></i> استوديو كشوف Word المطور' }
  );

  // Render Saved Templates Bar
  function renderSavedTemplatesBar() {
    const bar = $('#wordSavedTemplatesBar');
    if (!bar) return;
    const templates = getSavedWordTemplates();
    bar.innerHTML = templates.map((tpl, idx) => {
      const isActive = activeTemplate && activeTemplate.id === tpl.id;
      return `
        <div class="template-pill-group ${isActive ? 'active' : ''}">
          <button type="button" class="btn-select-template" data-load-tpl="${tpl.id}">
            <span class="template-pill-number">قالب ${tpl.num || (idx + 1)}</span>
            <span>${safe(tpl.name)}</span>
          </button>
          ${templates.length > 1 ? `<button type="button" class="btn-del-template" data-del-tpl="${tpl.id}" title="حذف هذا القالب">✕</button>` : ''}
        </div>
      `;
    }).join('');

    // Bind load actions
    $$('[data-load-tpl]', bar).forEach(btn => {
      btn.onclick = () => {
        const id = btn.dataset.loadTpl;
        const found = templates.find(t => t.id === id);
        if (found) {
          activeTemplate = found;
          // Apply template values to currentCfg
          currentCfg.titleFontSize = found.titleFontSize || '16pt';
          currentCfg.headerCenterLine1 = found.headerCenterLine1 || '';
          currentCfg.headerCenterLine2 = found.headerCenterLine2 || '';
          currentCfg.headerCenterLine3 = found.headerCenterLine3 || '';
          currentCfg.showUniLogo = found.showUniLogo !== undefined ? found.showUniLogo : true;
          currentCfg.uniLogoSize = found.uniLogoSize || 80;
          currentCfg.showUnionLogo = found.showUnionLogo !== undefined ? found.showUnionLogo : true;
          currentCfg.unionLogoSize = found.unionLogoSize || 80;
          currentCfg.showFooterLogo = found.showFooterLogo !== undefined ? found.showFooterLogo : false;
          currentCfg.footerLogoSize = found.footerLogoSize || 26;
          currentCfg.footerText = found.footerText !== undefined ? found.footerText : '';
          currentCfg.showFooterText = found.showFooterText !== undefined ? found.showFooterText : true;
          currentCfg.showDocCode = found.showDocCode !== undefined ? found.showDocCode : true;
          currentCfg.docCodeText = found.docCodeText !== undefined ? found.docCodeText : '';
          currentCfg.orientation = found.orientation || 'landscape';
          currentCfg.density = found.density || 'compact';
          currentCfg.tableAlignment = found.tableAlignment || 'center';
          currentCfg.tableFontSize = found.tableFontSize || '9.5pt';
          currentCfg.themeColor = found.themeColor || '#073b67';
          currentCfg.columns = [...(found.columns || ['num', 'name', 'faculty', 'year', 'national', 'signature'])];
          currentCfg.customLabels = Object.assign({}, found.customLabels || {});
          currentCfg.signatures = JSON.parse(JSON.stringify(found.signatures || [
            { role: 'مشرف عام الاتحاد', name: 'أ/ محمد فوزى' },
            { role: 'مدير الادارة', name: 'أ/ شهاب محروس' }
          ]));

          syncAllControlsFromConfig();
          renderSavedTemplatesBar();
          updatePreview();
          toast(`تم تطبيق "${found.name}" بنجاح`);
        }
      };
    });

    // Bind delete actions
    $$('[data-del-tpl]', bar).forEach(btn => {
      btn.onclick = () => {
        const id = btn.dataset.delTpl;
        if (confirm('هل أنت متأكد من حذف هذا القالب نهائياً؟')) {
          let updated = templates.filter(t => t.id !== id);
          if (!updated.length) updated = JSON.parse(JSON.stringify(DEFAULT_TEMPLATES_COLLECTION));
          saveWordTemplates(updated);
          activeTemplate = updated[0];
          renderSavedTemplatesBar();
          toast('تم حذف القالب بنجاح');
        }
      };
    });
    iconRefresh();
  }

  // Synchronize all form inputs with currentCfg
  function syncAllControlsFromConfig() {
    if ($('#wordHeaderCenter1')) $('#wordHeaderCenter1').value = currentCfg.headerCenterLine1 || '';
    if ($('#wordHeaderCenter2')) $('#wordHeaderCenter2').value = currentCfg.headerCenterLine2 || '';
    if ($('#wordHeaderCenter3')) $('#wordHeaderCenter3').value = currentCfg.headerCenterLine3 || '';
    if ($('#wordDocTitleSize')) $('#wordDocTitleSize').value = currentCfg.titleFontSize || '16pt';
    if ($('#wordFooterText')) $('#wordFooterText').value = currentCfg.footerText || '';
    if ($('#wordDocCodeText')) $('#wordDocCodeText').value = currentCfg.docCodeText || '';

    if ($('#wordUniLogoSize')) $('#wordUniLogoSize').value = currentCfg.uniLogoSize || 80;
    if ($('#wordUniLogoSizeBadge')) $('#wordUniLogoSizeBadge').textContent = (currentCfg.uniLogoSize || 80) + 'px';
    if ($('#wordUnionLogoSize')) $('#wordUnionLogoSize').value = currentCfg.unionLogoSize || 80;
    if ($('#wordUnionLogoSizeBadge')) $('#wordUnionLogoSizeBadge').textContent = (currentCfg.unionLogoSize || 80) + 'px';
    if ($('#wordFooterLogoSize')) $('#wordFooterLogoSize').value = currentCfg.footerLogoSize || 26;
    if ($('#wordFooterLogoSizeBadge')) $('#wordFooterLogoSizeBadge').textContent = (currentCfg.footerLogoSize || 26) + 'px';

    if ($('#wordShowUniLogo')) $('#wordShowUniLogo').checked = !!currentCfg.showUniLogo;
    if ($('#wordShowUnionLogo')) $('#wordShowUnionLogo').checked = !!currentCfg.showUnionLogo;
    if ($('#wordShowFooterLogo')) $('#wordShowFooterLogo').checked = !!currentCfg.showFooterLogo;
    if ($('#wordShowFooterText')) $('#wordShowFooterText').checked = !!currentCfg.showFooterText;
    if ($('#wordShowDocCode')) $('#wordShowDocCode').checked = !!currentCfg.showDocCode;

    $$('input[name="wordCol"]').forEach(cb => {
      cb.checked = currentCfg.columns.includes(cb.value);
    });
    if ($('#wordColCountBadge')) $('#wordColCountBadge').textContent = `${currentCfg.columns.length} أعمدة مختارة`;

    $$('.col-rename-input').forEach(inp => {
      const colKey = inp.dataset.colKey;
      inp.value = (currentCfg.customLabels && currentCfg.customLabels[colKey]) || WORD_COLUMNS[colKey].defaultLabel;
    });

    $$('input[name="wordOrientation"]').forEach(radio => {
      radio.checked = radio.value === currentCfg.orientation;
      radio.closest('.layout-card-opt').classList.toggle('selected', radio.checked);
    });

    $$('input[name="wordTableAlignment"]').forEach(radio => {
      radio.checked = radio.value === (currentCfg.tableAlignment || 'center');
      radio.closest('.layout-card-opt').classList.toggle('selected', radio.checked);
    });

    $$('input[name="wordTableFontSize"]').forEach(radio => {
      radio.checked = radio.value === (currentCfg.tableFontSize || '9.5pt');
      radio.closest('.layout-card-opt').classList.toggle('selected', radio.checked);
    });

    $$('input[name="wordDensity"]').forEach(radio => {
      radio.checked = radio.value === (currentCfg.density || 'compact');
      radio.closest('.layout-card-opt').classList.toggle('selected', radio.checked);
    });

    renderSigsEditor();
  }

  // Render Signatures dynamic rows
  function renderSigsEditor() {
    const editor = $('#wordSigsEditor');
    if (!editor) return;

    editor.innerHTML = currentCfg.signatures.map((sig, idx) => `
      <div class="signature-card-item" data-sig-idx="${idx}">
        <input class="sig-role-input" placeholder="المسمى الوظيفي (مثال: مشرف عام الاتحاد)" value="${safe(sig.role)}" title="المسمى الوظيفي">
        <input class="sig-name-input" placeholder="الاسم (مثال: أ/ محمد فوزى)" value="${safe(sig.name)}" title="اسم المسؤول">
        ${currentCfg.signatures.length > 1 ? `<button type="button" class="btn-remove-sig" data-remove-sig="${idx}" title="حذف هذا التوقيع">✕</button>` : '<span></span>'}
      </div>
    `).join('');

    $$('.sig-role-input', editor).forEach((inp, idx) => {
      inp.oninput = () => {
        currentCfg.signatures[idx].role = inp.value;
        updatePreview();
      };
    });
    $$('.sig-name-input', editor).forEach((inp, idx) => {
      inp.oninput = () => {
        currentCfg.signatures[idx].name = inp.value;
        updatePreview();
      };
    });
    $$('.btn-remove-sig', editor).forEach(btn => {
      btn.onclick = () => {
        const removeIdx = parseInt(btn.dataset.removeSig, 10);
        currentCfg.signatures.splice(removeIdx, 1);
        renderSigsEditor();
        updatePreview();
      };
    });
    iconRefresh();
  }

  // Update Live Preview Paper (Exact 1:1 Mirror)
  function updatePreview() {
    const paper = $('#wordLivePreviewPaper');
    const indicator = $('#previewPageIndicator');
    if (!paper) return;

    if (currentCfg.orientation === 'landscape') {
      paper.className = 'preview-paper landscape';
      if (indicator) indicator.textContent = 'A4 أفقي (عريض 297×210 مم)';
    } else {
      paper.className = 'preview-paper portrait';
      if (indicator) indicator.textContent = 'A4 رأسي (طولي 210×297 مم)';
    }

    const activeCols = (currentCfg.columns || []).filter(c => WORD_COLUMNS[c]);
    const labels = currentCfg.customLabels || {};

    const align = currentCfg.tableAlignment || 'center';
    const fontSize = currentCfg.tableFontSize || '9.5pt';
    let pad = '3px 4px';
    if (currentCfg.density === 'ultra-compact') pad = '2px 2px';
    else if (currentCfg.density === 'normal') pad = '6px 5px';

    const thead = activeCols.map(c => `
      <th style="background:${currentCfg.themeColor || '#073b67'};color:#fff;font-weight:bold;padding:${pad};font-size:${fontSize};text-align:center;">
        ${safe(labels[c] || WORD_COLUMNS[c].defaultLabel)}
      </th>
    `).join('');

    const previewStudents = (currentCfg.students && currentCfg.students.length) ? currentCfg.students.slice(0, 5) : [
      { name: 'أحمد محمود علي إبراهيم', faculty: 'كلية الهندسة', year: 'الفرقة الثالثة', national: '30310150201234', phone: '01012345678' },
      { name: 'مريم عادل سعيد حسن', faculty: 'كلية الصيدلة', year: 'الفرقة الثانية', national: '30405200204321', phone: '01123456789' }
    ];

    const rows = previewStudents.map((s, i) => {
      return '<tr>' + activeCols.map(c => {
        let txt = '';
        if (c === 'num') txt = i + 1;
        else if (c === 'name') txt = `<b>${safe(s.name)}</b>`;
        else if (c === 'faculty') txt = safe(s.faculty);
        else if (c === 'year') txt = safe(s.year);
        else if (c === 'national') txt = safe(s.national);
        else if (c === 'phone') txt = safe(s.phone);
        else if (c === 'gov') txt = 'الإسكندرية';
        else if (c === 'gender') txt = 'طالب';
        else if (c === 'entities') txt = 'اتحاد الطلاب';
        else if (c === 'signature') txt = '';
        else if (c === 'notes') txt = '';
        return `<td style="text-align:${align};font-size:${fontSize};padding:${pad};vertical-align:middle;">${txt}</td>`;
      }).join('') + '</tr>';
    }).join('');

    // Signatures with clean blank space
    const sigColWidth = (100 / Math.max(1, currentCfg.signatures.length)).toFixed(1) + '%';
    const sigsHtml = `
      <table class="preview-signatures-row">
        <tr>
          ${currentCfg.signatures.map(s => `
            <td style="width:${sigColWidth}">
              <strong style="color:${currentCfg.themeColor || '#073b67'};font-size:11px;display:block">${safe(s.role)}</strong>
              <div class="preview-sig-space"></div>
              <span style="font-weight:bold;font-size:10.5px;color:#111;display:block">${safe(s.name)}</span>
            </td>
          `).join('')}
        </tr>
      </table>
    `;

    const uSize = currentCfg.uniLogoSize || 80;
    const unSize = currentCfg.unionLogoSize || 80;
    const fSize = currentCfg.footerLogoSize || 26;

    paper.innerHTML = `
      <table class="preview-head-table" style="border-bottom-color:${currentCfg.themeColor || '#073b67'}">
        <tr>
          <td style="width:25%;text-align:right">
            ${currentCfg.showUniLogo ? `<img src="${uniLogo}" style="height:${uSize}px;width:auto;max-height:none" alt="جامعة الإسكندرية">` : ''}
          </td>
          <td style="width:50%;text-align:center;line-height:1.35">
            ${currentCfg.headerCenterLine1 ? `<strong style="font-size:12px;color:${currentCfg.themeColor || '#073b67'}">${safe(currentCfg.headerCenterLine1)}</strong><br>` : ''}
            ${currentCfg.headerCenterLine2 ? `<span style="font-size:10.5px;font-weight:600">${safe(currentCfg.headerCenterLine2)}</span><br>` : ''}
            ${currentCfg.headerCenterLine3 ? `<span style="font-size:9.5px;color:#444">${safe(currentCfg.headerCenterLine3)}</span>` : ''}
          </td>
          <td style="width:25%;text-align:left">
            ${currentCfg.showUnionLogo ? `<img src="${unionLogo}" style="height:${unSize}px;width:auto;max-height:none" alt="اتحاد الطلاب">` : ''}
          </td>
        </tr>
      </table>

      <div class="preview-title-block">
        <h3 style="font-size:${currentCfg.titleFontSize || '16pt'};color:${currentCfg.themeColor || '#073b67'}">${safe(currentCfg.title)}</h3>
        ${currentCfg.meta ? `<p>${safe(currentCfg.meta)}</p>` : ''}
      </div>

      <table class="preview-table">
        <thead><tr>${thead}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
      ${(currentCfg.students && currentCfg.students.length > 5) ? `<div style="text-align:center;font-size:8px;color:#777;margin:4px 0">... مع باقي عدد ${currentCfg.students.length} طالباً بالكامل في كشف Word ...</div>` : ''}

      ${sigsHtml}

      ${(currentCfg.showFooterText || currentCfg.showDocCode) ? `
        <div class="preview-footer-line">
          <span>
            ${(currentCfg.showFooterLogo && currentCfg.footerText) ? `<img src="${unionLogo}" style="height:${fSize}px;width:auto;vertical-align:middle;margin-left:5px"> ` : ''}
            ${safe(currentCfg.footerText || '')}
          </span>
          ${currentCfg.showDocCode ? `<span>${safe(currentCfg.docCodeText || '')}</span>` : ''}
        </div>
      ` : ''}
    `;
  }

  renderSavedTemplatesBar();
  renderSigsEditor();
  updatePreview();

  // Header and Title text listeners
  $('#wordHeaderCenter1').oninput = (e) => { currentCfg.headerCenterLine1 = e.target.value; updatePreview(); };
  $('#wordHeaderCenter2').oninput = (e) => { currentCfg.headerCenterLine2 = e.target.value; updatePreview(); };
  $('#wordHeaderCenter3').oninput = (e) => { currentCfg.headerCenterLine3 = e.target.value; updatePreview(); };
  $('#wordDocTitle').oninput = (e) => { currentCfg.title = e.target.value; updatePreview(); };
  $('#wordDocTitleSize').onchange = (e) => { currentCfg.titleFontSize = e.target.value; updatePreview(); };
  $('#wordDocMeta').oninput = (e) => { currentCfg.meta = e.target.value; updatePreview(); };
  $('#wordFooterText').oninput = (e) => { currentCfg.footerText = e.target.value; updatePreview(); };
  $('#wordDocCodeText').oninput = (e) => { currentCfg.docCodeText = e.target.value; updatePreview(); };

  // Logo Sliders & Badges (Updates Preview Instantly with Explicit Height)
  const uniSlider = $('#wordUniLogoSize');
  const uniBadge = $('#wordUniLogoSizeBadge');
  uniSlider.oninput = (e) => {
    currentCfg.uniLogoSize = parseInt(e.target.value, 10);
    uniBadge.textContent = currentCfg.uniLogoSize + 'px';
    updatePreview();
  };

  const unionSlider = $('#wordUnionLogoSize');
  const unionBadge = $('#wordUnionLogoSizeBadge');
  unionSlider.oninput = (e) => {
    currentCfg.unionLogoSize = parseInt(e.target.value, 10);
    unionBadge.textContent = currentCfg.unionLogoSize + 'px';
    updatePreview();
  };

  const footerSlider = $('#wordFooterLogoSize');
  const footerBadge = $('#wordFooterLogoSizeBadge');
  footerSlider.oninput = (e) => {
    currentCfg.footerLogoSize = parseInt(e.target.value, 10);
    footerBadge.textContent = currentCfg.footerLogoSize + 'px';
    updatePreview();
  };

  // Checkboxes for Logos & Codes
  $('#wordShowUniLogo').onchange = (e) => { currentCfg.showUniLogo = e.target.checked; updatePreview(); };
  $('#wordShowUnionLogo').onchange = (e) => { currentCfg.showUnionLogo = e.target.checked; updatePreview(); };
  $('#wordShowFooterLogo').onchange = (e) => { currentCfg.showFooterLogo = e.target.checked; updatePreview(); };
  $('#wordShowFooterText').onchange = (e) => { currentCfg.showFooterText = e.target.checked; updatePreview(); };
  $('#wordShowDocCode').onchange = (e) => { currentCfg.showDocCode = e.target.checked; updatePreview(); };

  // Column Checkboxes and Custom Labels
  $$('input[name="wordCol"]').forEach(cb => {
    cb.onchange = () => {
      const selected = $$('input[name="wordCol"]:checked').map(x => x.value);
      if (selected.length === 0) {
        alert('يجب الإبقاء على عمود واحد على الأقل في الكشف.');
        cb.checked = true;
        return;
      }
      currentCfg.columns = selected;
      $('#wordColCountBadge').textContent = `${selected.length} أعمدة مختارة`;
      updatePreview();
    };
  });

  $$('.col-rename-input').forEach(inp => {
    inp.oninput = () => {
      const colKey = inp.dataset.colKey;
      if (!currentCfg.customLabels) currentCfg.customLabels = {};
      currentCfg.customLabels[colKey] = inp.value.trim() || WORD_COLUMNS[colKey].defaultLabel;
      updatePreview();
    };
  });

  // Orientation Radios
  $$('input[name="wordOrientation"]').forEach(radio => {
    radio.onchange = () => {
      $$('input[name="wordOrientation"]').forEach(r => r.closest('.layout-card-opt').classList.toggle('selected', r.checked));
      currentCfg.orientation = radio.value;
      updatePreview();
    };
  });

  // Density Radios
  $$('input[name="wordDensity"]').forEach(radio => {
    radio.onchange = () => {
      $$('input[name="wordDensity"]').forEach(r => r.closest('.layout-card-opt').classList.toggle('selected', r.checked));
      currentCfg.density = radio.value;
      updatePreview();
    };
  });

  // Add New Signature Button
  $('#wordAddSigBtn').onclick = () => {
    currentCfg.signatures.push({ role: 'المسمى الوظيفي', name: 'الاسم' });
    renderSigsEditor();
    updatePreview();
    toast('تمت إضافة موقع جديد للإمضاءات');
  };

  // Button: Save as New Template (Numbered & Named)
  $('#btnSaveAsNewTemplate').onclick = () => {
    const templates = getSavedWordTemplates();
    const nextNum = templates.length + 1;
    const defaultName = `كشف مخصص رقم ${nextNum}`;
    const tplName = prompt(`اكتب اسماً لهذا التيمبليت الجديد (سيتم إدراجه كـ "قالب ${nextNum}"):`, defaultName);
    if (tplName && tplName.trim()) {
      const newTpl = {
        id: 'tpl_' + Date.now(),
        num: nextNum,
        name: tplName.trim(),
        titleFontSize: currentCfg.titleFontSize,
        headerCenterLine1: currentCfg.headerCenterLine1,
        headerCenterLine2: currentCfg.headerCenterLine2,
        headerCenterLine3: currentCfg.headerCenterLine3,
        showUniLogo: currentCfg.showUniLogo,
        uniLogoSize: currentCfg.uniLogoSize,
        showUnionLogo: currentCfg.showUnionLogo,
        unionLogoSize: currentCfg.unionLogoSize,
        showFooterLogo: currentCfg.showFooterLogo,
        footerLogoSize: currentCfg.footerLogoSize,
        footerText: currentCfg.footerText,
        showFooterText: currentCfg.showFooterText,
        showDocCode: currentCfg.showDocCode,
        docCodeText: currentCfg.docCodeText,
        orientation: currentCfg.orientation,
        density: currentCfg.density,
        tableAlignment: currentCfg.tableAlignment || 'center',
        tableFontSize: currentCfg.tableFontSize || '9.5pt',
        themeColor: currentCfg.themeColor,
        columns: [...currentCfg.columns],
        customLabels: Object.assign({}, currentCfg.customLabels || {}),
        signatures: JSON.parse(JSON.stringify(currentCfg.signatures || []))
      };
      templates.push(newTpl);
      saveWordTemplates(templates);
      activeTemplate = newTpl;
      renderSavedTemplatesBar();
      toast(`تم حفظ "${newTpl.name}" بنجاح في قائمة التيمبليتات كقالب رقم ${nextNum}!`);
    }
  };

  // Button: Update Current Template
  $('#wordUpdateCurrentTplBtn').onclick = () => {
    if (!activeTemplate) return;
    const templates = getSavedWordTemplates();
    const idx = templates.findIndex(t => t.id === activeTemplate.id);
    if (idx !== -1) {
      templates[idx].titleFontSize = currentCfg.titleFontSize;
      templates[idx].headerCenterLine1 = currentCfg.headerCenterLine1;
      templates[idx].headerCenterLine2 = currentCfg.headerCenterLine2;
      templates[idx].headerCenterLine3 = currentCfg.headerCenterLine3;
      templates[idx].showUniLogo = currentCfg.showUniLogo;
      templates[idx].uniLogoSize = currentCfg.uniLogoSize;
      templates[idx].showUnionLogo = currentCfg.showUnionLogo;
      templates[idx].unionLogoSize = currentCfg.unionLogoSize;
      templates[idx].showFooterLogo = currentCfg.showFooterLogo;
      templates[idx].footerLogoSize = currentCfg.footerLogoSize;
      templates[idx].footerText = currentCfg.footerText;
      templates[idx].showFooterText = currentCfg.showFooterText;
      templates[idx].showDocCode = currentCfg.showDocCode;
      templates[idx].docCodeText = currentCfg.docCodeText;
      templates[idx].orientation = currentCfg.orientation;
      templates[idx].density = currentCfg.density;
      templates[idx].themeColor = currentCfg.themeColor;
      templates[idx].columns = [...currentCfg.columns];
      templates[idx].customLabels = Object.assign({}, currentCfg.customLabels || {});
      templates[idx].signatures = JSON.parse(JSON.stringify(currentCfg.signatures || []));

      saveWordTemplates(templates);
      activeTemplate = templates[idx];
      renderSavedTemplatesBar();
      toast(`تم تحديث وحفظ كافة تعديلات "${activeTemplate.name}" بنجاح!`);
    }
  };

  // Download Word Button
  $('#wordDownloadBtn').onclick = () => {
    toast('جاري إنشاء وتحميل كشف Word المعتمد المخصص باللوجوهات...');
    const wordHtml = buildWordDocHTML(currentCfg);
    const cleanTitle = (currentCfg.title || 'كشف رسمي').replace(/[\\/:*?"<>|]/g, '-');
    downloadBlob(new Blob(['\ufeff', wordHtml], { type: 'application/msword' }), `${cleanTitle}.doc`);
    closeModal();
    toast('تم استخراج ملف Word بنجاح مع كافة الإعدادات واللوجوهات والامضاءات');
  };
}

function exportEventWord(e) {
  openWordExportModal('event', e);
}

function downloadBlob(blob, name) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1500);
}

// 17. Excel Export & Template Generator
// ==========================================================================
// Custom Student Export Modal & Targeted Group Generator (Word & Excel)
// ==========================================================================

function exportStudentsToExcel(studentsList = [], customTitle = 'كشف الطلاب المعتمد') {
  if (!window.XLSX) {
    toast('تعذر العثور على محرك تصدير Excel، تأكد من الاتصال بالإنترنت.');
    return;
  }
  const rows = studentsList.map((s, idx) => {
    const p = (typeof parseEgyptianNationalID === 'function') ? parseEgyptianNationalID(s.national) : {};
    return {
      'م': idx + 1,
      'الاسم رباعي': s.name || '',
      'الكلية': s.faculty || '',
      'الفرقة الدراسية': s.year || '',
      'الرقم القومي (14 رقم)': s.national || '',
      'رقم الهاتف / الواتساب': s.phone || '',
      'المحافظة': p.governorate || 'الإسكندرية',
      'النوع': p.gender || 'طالب',
      'الكيانات الطلابية': (s.entities || []).join('، '),
      'الحالة': s.status || 'نشط'
    };
  });

  const ws = XLSX.utils.json_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'كشف الطلاب');

  const safeFilename = customTitle.replace(/[/\\?%*:|"<>]/g, '-').slice(0, 50);
  XLSX.writeFile(wb, `${safeFilename}.xlsx`);
  toast(`تم تصدير ملف Excel بنجاح: «${customTitle}» (${studentsList.length} طالب)`);
}

function openCustomStudentExportModal(defaultFormat = 'word') {
  let selectedCategory = 'all';
  let categorySubValue = '';
  let selectedLimit = 'all';
  let customLimitNum = 25;
  let selectedSort = 'name';

  function getMatchingStudents() {
    let list = [...state.students];

    // Filter
    if (selectedCategory === 'faculty' && categorySubValue) {
      list = list.filter(s => s.faculty === categorySubValue);
    } else if (selectedCategory === 'year' && categorySubValue) {
      list = list.filter(s => s.year === categorySubValue);
    } else if (selectedCategory === 'entity' && categorySubValue) {
      list = list.filter(s => (s.entities || []).includes(categorySubValue));
    } else if (selectedCategory === 'event' && categorySubValue) {
      const ev = state.events.find(e => e.id === parseInt(categorySubValue, 10));
      list = ev ? list.filter(s => (ev.attendeeIds || []).includes(s.id)) : [];
    } else if (selectedCategory === 'attended_any') {
      const attendedIds = new Set();
      state.events.forEach(e => (e.attendeeIds || []).forEach(id => attendedIds.add(id)));
      list = list.filter(s => attendedIds.has(s.id));
    } else if (selectedCategory === 'male') {
      list = list.filter(s => {
        const p = (typeof parseEgyptianNationalID === 'function') ? parseEgyptianNationalID(s.national) : {};
        return p.gender === 'ذكر';
      });
    } else if (selectedCategory === 'female') {
      list = list.filter(s => {
        const p = (typeof parseEgyptianNationalID === 'function') ? parseEgyptianNationalID(s.national) : {};
        return p.gender === 'أنثى';
      });
    } else if (selectedCategory === 'status_active') {
      list = list.filter(s => s.status !== 'محظور');
    } else if (selectedCategory === 'status_banned') {
      list = list.filter(s => s.status === 'محظور');
    }

    // Sort
    if (selectedSort === 'name') {
      list.sort((a, b) => (a.name || '').localeCompare(b.name || '', 'ar'));
    } else if (selectedSort === 'attendance') {
      const countAtt = id => state.events.filter(e => (e.attendeeIds || []).includes(id)).length;
      list.sort((a, b) => countAtt(b.id) - countAtt(a.id));
    } else if (selectedSort === 'newest') {
      list.sort((a, b) => b.id - a.id);
    }

    const totalMatching = list.length;
    let finalCount = totalMatching;

    // Limit
    if (selectedLimit !== 'all') {
      const num = selectedLimit === 'custom' ? customLimitNum : parseInt(selectedLimit, 10);
      if (!isNaN(num) && num > 0) {
        list = list.slice(0, num);
        finalCount = list.length;
      }
    }

    return { list, totalMatching, finalCount };
  }

  function getDynamicTitle() {
    let base = 'كشف طلاب جامعة الإسكندرية';
    if (selectedCategory === 'faculty' && categorySubValue) base = `كشف طلاب ${categorySubValue}`;
    else if (selectedCategory === 'year' && categorySubValue) base = `كشف طلاب ${categorySubValue}`;
    else if (selectedCategory === 'entity' && categorySubValue) base = `كشف أعضاء نشاط ${categorySubValue}`;
    else if (selectedCategory === 'event' && categorySubValue) {
      const ev = state.events.find(e => e.id === parseInt(categorySubValue, 10));
      base = ev ? `كشف المشاركين في «${ev.title}»` : 'كشف طلاب الفاعلية';
    } else if (selectedCategory === 'attended_any') {
      base = 'كشف الطلاب المشاركين في الأنشطة الطلابية';
    } else if (selectedCategory === 'male') {
      base = 'كشف الطلاب (بنين)';
    } else if (selectedCategory === 'female') {
      base = 'كشف الطالبات (بنات)';
    } else if (selectedCategory === 'status_banned') {
      base = 'كشف الطلاب المحظورين إدارياً';
    }
    return base;
  }

  const modalHtml = `
    <div class="custom-export-wrap">
      <!-- 1. الفئة المستهدفة -->
      <div>
        <label style="font-weight:bold;margin-bottom:6px;display:block">1. اختيار الفئة المستهدفة من الطلاب</label>
        <select id="custExpCatSelect" class="studio-select" style="width:100%;padding:10px;border-radius:10px;border:1px solid var(--border)">
          <option value="all">جميع الطلاب المقيدين في قاعدة البيانات</option>
          <option value="faculty">كلية معينة (من كليات الجامعة الـ 21)</option>
          <option value="year">فرقة دراسية معينة</option>
          <option value="entity">كيان أو نشاط طلابي محدد</option>
          <option value="event">المشاركون في فاعلية معينة</option>
          <option value="attended_any">الطلاب الذين شاركوا في فاعليات (الأكثر حضوراً)</option>
          <option value="male">الطلاب البنين (ذكور)</option>
          <option value="female">الطالبات البنات (إناث)</option>
          <option value="status_active">الطلاب النشطون المؤهلون فقط</option>
          <option value="status_banned">الطلاب الصادر بحقهم قرارات إدارية (محظورون)</option>
        </select>
      </div>

      <!-- اختيار فرعي ديناميكي -->
      <div id="custExpSubWrap" style="display:none">
        <label id="custExpSubLabel" style="font-weight:600;font-size:12px;margin-bottom:6px;display:block">تحديد القيمة</label>
        <div id="custExpSubContainer"></div>
      </div>

      <!-- 2. تحديد عدد الطلاب -->
      <div>
        <label style="font-weight:bold;margin-bottom:6px;display:block">2. تحديد عدد الطلاب المراد استخراجهم في الكشف</label>
        <div class="export-limit-chips">
          <button type="button" class="export-chip-btn active" data-limit-val="all">جميع الطلاب المطابقين</button>
          <button type="button" class="export-chip-btn" data-limit-val="10">أول 10 طلاب</button>
          <button type="button" class="export-chip-btn" data-limit-val="25">أول 25 طالب</button>
          <button type="button" class="export-chip-btn" data-limit-val="50">أول 50 طالب</button>
          <button type="button" class="export-chip-btn" data-limit-val="100">أول 100 طالب</button>
          <button type="button" class="export-chip-btn" data-limit-val="custom">تحديد رقم مخصص...</button>
        </div>
        <div id="custExpCustomLimitBox" style="display:none;margin-top:8px">
          <input type="number" id="custExpCustomLimitNum" min="1" max="5000" value="30" placeholder="اكتب العدد المطلوب (مثال: 30)" style="width:200px;padding:8px;border-radius:8px;border:1px solid var(--border)">
        </div>
      </div>

      <!-- 3. ترتيب الكشف -->
      <div>
        <label style="font-weight:bold;margin-bottom:6px;display:block">3. ترتيب الطلاب في الكشف</label>
        <div class="layout-options-row">
          <label class="layout-card-opt selected">
            <input type="radio" name="custExpSort" value="name" checked hidden>
            <span>أبجدياً بالاسم (أ - ي)</span>
          </label>
          <label class="layout-card-opt">
            <input type="radio" name="custExpSort" value="attendance" hidden>
            <span>الأكثر مشاركة في الفاعليات</span>
          </label>
          <label class="layout-card-opt">
            <input type="radio" name="custExpSort" value="newest" hidden>
            <span>الأحدث تسجيلاً</span>
          </label>
        </div>
      </div>

      <!-- شريط الإحصائية الحية -->
      <div class="custom-export-banner">
        <span><i data-lucide="info"></i> إجمالي الطلاب المطابقين للفئة المختارة: <strong id="custExpTotalMatch">0</strong> طالب</span>
        <span class="custom-export-badge">سيتم إخراج: <strong id="custExpFinalCount">0</strong> طالب</span>
      </div>

      <!-- أزرار الإخراج -->
      <div style="display:flex;gap:12px;margin-top:10px;justify-content:flex-end">
        <button type="button" class="btn ghost modal-cancel">إلغاء</button>
        <button type="button" class="btn secondary" id="custExpExcelBtn" style="min-height:42px;font-weight:700">
          <i data-lucide="download"></i> تصدير شيت Excel معتمد
        </button>
        <button type="button" class="btn primary" id="custExpWordBtn" style="min-height:42px;font-weight:700">
          <i data-lucide="file-text"></i> فتح وتخصيص كشف Word رسمي
        </button>
      </div>
    </div>
  `;

  modal('إصدار كشف طلاب مخصص', 'تحديد فئات معينة والتحكم الدقيق في عدد الطلاب المخرجين', modalHtml);

  function updateSubControls() {
    const subWrap = $('#custExpSubWrap');
    const subCont = $('#custExpSubContainer');
    const subLbl = $('#custExpSubLabel');
    if (!subWrap || !subCont) return;

    if (selectedCategory === 'faculty') {
      subWrap.style.display = 'block';
      subLbl.textContent = 'اختر الكلية:';
      subCont.innerHTML = `
        <select id="custExpSubVal" class="studio-select" style="width:100%;padding:10px;border-radius:10px;border:1px solid var(--border)">
          ${faculties.map(f => `<option value="${f}" ${categorySubValue === f ? 'selected' : ''}>${f}</option>`).join('')}
        </select>
      `;
      categorySubValue = $('#custExpSubVal').value;
      $('#custExpSubVal').onchange = (e) => { categorySubValue = e.target.value; refreshLiveCounters(); };
    } else if (selectedCategory === 'year') {
      const years = ['الفرقة الأولى', 'الفرقة الثانية', 'الفرقة الثالثة', 'الفرقة الرابعة', 'الفرقة الخامسة', 'إعدادي', 'دراسات عليا'];
      subWrap.style.display = 'block';
      subLbl.textContent = 'اختر الفرقة الدراسية:';
      subCont.innerHTML = `
        <select id="custExpSubVal" class="studio-select" style="width:100%;padding:10px;border-radius:10px;border:1px solid var(--border)">
          ${years.map(y => `<option value="${y}" ${categorySubValue === y ? 'selected' : ''}>${y}</option>`).join('')}
        </select>
      `;
      categorySubValue = $('#custExpSubVal').value;
      $('#custExpSubVal').onchange = (e) => { categorySubValue = e.target.value; refreshLiveCounters(); };
    } else if (selectedCategory === 'entity') {
      const entList = (state.entities && state.entities.length) ? state.entities.map(x => x.name || x) : ['اتحاد طلاب الكلية', 'الأسر الطلابية', 'الجوالة', 'النادي الرياضي', 'النشاط الثقافي'];
      subWrap.style.display = 'block';
      subLbl.textContent = 'اختر الكيان الطلابي:';
      subCont.innerHTML = `
        <select id="custExpSubVal" class="studio-select" style="width:100%;padding:10px;border-radius:10px;border:1px solid var(--border)">
          ${entList.map(ent => `<option value="${ent}" ${categorySubValue === ent ? 'selected' : ''}>${ent}</option>`).join('')}
        </select>
      `;
      categorySubValue = $('#custExpSubVal').value;
      $('#custExpSubVal').onchange = (e) => { categorySubValue = e.target.value; refreshLiveCounters(); };
    } else if (selectedCategory === 'event') {
      subWrap.style.display = 'block';
      subLbl.textContent = 'اختر الفاعلية:';
      subCont.innerHTML = `
        <select id="custExpSubVal" class="studio-select" style="width:100%;padding:10px;border-radius:10px;border:1px solid var(--border)">
          ${state.events.map(ev => `<option value="${ev.id}" ${categorySubValue === String(ev.id) ? 'selected' : ''}>${ev.title} (${(ev.attendeeIds || []).length} حاضر)</option>`).join('')}
        </select>
      `;
      categorySubValue = $('#custExpSubVal').value;
      $('#custExpSubVal').onchange = (e) => { categorySubValue = e.target.value; refreshLiveCounters(); };
    } else {
      subWrap.style.display = 'none';
      categorySubValue = '';
    }
    refreshLiveCounters();
  }

  function refreshLiveCounters() {
    const { list, totalMatching, finalCount } = getMatchingStudents();
    const tBadge = $('#custExpTotalMatch');
    const fBadge = $('#custExpFinalCount');
    if (tBadge) tBadge.textContent = totalMatching;
    if (fBadge) fBadge.textContent = finalCount;
  }

  // Category select change
  $('#custExpCatSelect').onchange = (e) => {
    selectedCategory = e.target.value;
    updateSubControls();
  };

  // Limit chips
  $$('[data-limit-val]').forEach(btn => {
    btn.onclick = () => {
      $$('[data-limit-val]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedLimit = btn.dataset.limitVal;
      const customBox = $('#custExpCustomLimitBox');
      if (selectedLimit === 'custom') {
        customBox.style.display = 'block';
        customLimitNum = parseInt($('#custExpCustomLimitNum').value, 10) || 25;
      } else {
        customBox.style.display = 'none';
      }
      refreshLiveCounters();
    };
  });

  $('#custExpCustomLimitNum').oninput = (e) => {
    customLimitNum = parseInt(e.target.value, 10) || 1;
    refreshLiveCounters();
  };

  // Sort radios
  $$('input[name="custExpSort"]').forEach(radio => {
    radio.onchange = () => {
      selectedSort = radio.value;
      $$('input[name="custExpSort"]').forEach(r => r.closest('.layout-card-opt').classList.toggle('selected', r.checked));
      refreshLiveCounters();
    };
  });

  // Export Excel Button
  $('#custExpExcelBtn').onclick = () => {
    const { list } = getMatchingStudents();
    if (!list.length) {
      toast('لا توجد بيانات طلاب مطابقة للفئة المحددة لتصديرها.');
      return;
    }
    const title = getDynamicTitle();
    closeModal();
    exportStudentsToExcel(list, title);
  };

  // Export Word Button
  $('#custExpWordBtn').onclick = () => {
    const { list } = getMatchingStudents();
    if (!list.length) {
      toast('لا توجد بيانات طلاب مطابقة للفئة المحددة لتصديرها.');
      return;
    }
    const title = getDynamicTitle();
    const meta = `جامعة الإسكندرية  |  العام الجامعي: 2026 / 2027  |  العدد المعتمد في الكشف: ${list.length} طالب`;
    closeModal();
    openWordExportModal('custom', { students: list, title, meta });
  };

  updateSubControls();
  refreshLiveCounters();
  iconRefresh();
}

function exportStudents() {
  if (!window.XLSX) {
    toast('تعذر تحميل قارئ Excel، يرجى التحقق من الاتصال بالإنترنت.');
    return;
  }
  const rows = state.students.map((s, i) => {
    const p = parseEgyptianNationalID(s.national);
    return {
      'م': i + 1,
      'الاسم رباعي': s.name,
      'الكلية': s.faculty,
      'الفرقة': s.year,
      'الرقم القومي': s.national,
      'رقم الهاتف': s.phone,
      'المحافظة': p.governorate || 'غير محددة',
      'النوع': p.gender || 'غير محدد',
      'تاريخ الميلاد': p.birthDateFormatted || 'غير محدد',
      'الكيانات': (s.entities || []).join('، '),
      'عدد الفاعليات المشارك بها': getStudentEvents(s.id).length,
      'الحالة': isStudentBanned(s) ? 'محظور' : s.status
    };
  });
  const ws = XLSX.utils.json_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'قاعدة بيانات الطلاب');
  XLSX.writeFile(wb, 'كشف الطلاب - اتحاد طلاب جامعة الإسكندرية.xlsx');
  toast('تم تصدير كشف الطلاب كاملاً بصيغة Excel');
}

function downloadTemplate(e) {
  e.preventDefault();
  if (!window.XLSX) {
    toast('تعذر تحميل قارئ Excel');
    return;
  }
  const sample = [
    { 'م': 1, 'الاسم رباعي': 'أحمد إبراهيم محمد حسن', 'الكلية': 'الهندسة', 'الفرقة': '3', 'الرقم القومي': '30304150201235', 'رقم الهاتف': '01012344821' },
    { 'م': 2, 'الاسم رباعي': 'مريم علي مصطفى', 'الكلية': 'الآداب', 'الفرقة': '1', 'الرقم القومي': '30501180203124', 'رقم الهاتف': '01545676844' }
  ];
  const ws = XLSX.utils.json_to_sheet(sample);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'قالب كشف فاعلية');
  XLSX.writeFile(wb, 'قالب كشف فاعلية معتمد.xlsx');
}

// 18. Robust In-Browser Excel Import & Validation (with Auto-Zero, Conflict Resolver & Mandatory Event Binding)
function rowObject(row) {
  const o = {};
  Object.entries(row).forEach(([k, v]) => o[normalizeArabic(k)] = v);
  return o;
}

function pick(o, keys) {
  for (const k of keys) {
    const n = normalizeArabic(k);
    if (o[n] !== undefined) return o[n];
  }
  return '';
}

function sanitizeExcelPhone(raw) {
  let p = digits(raw);
  if (!p) return '';
  // Egypt code 2010... (12 digits) or 002010...
  if (p.startsWith('201') && p.length === 12) {
    p = '0' + p.slice(2);
  }
  // Excel dropped leading zero: 10 digits starting with 10, 11, 12, 15
  else if (p.length === 10 && (p.startsWith('10') || p.startsWith('11') || p.startsWith('12') || p.startsWith('15'))) {
    p = '0' + p;
  }
  return p;
}

function parseWorkbook(file) {
  if (!window.XLSX) {
    toast('تعذر تحميل محرك Excel، تأكد من الاتصال بالإنترنت.');
    return;
  }
  const r = new FileReader();
  r.onload = e => {
    try {
      const wb = XLSX.read(e.target.result, { type: 'array' });
      let all = [];
      wb.SheetNames.forEach(n => {
        const a = XLSX.utils.sheet_to_json(wb.Sheets[n], { defval: '', raw: false });
        all = all.concat(a);
      });
      preparePreview(file.name, all);
    } catch (err) {
      toast('لم نتمكن من قراءة ملف Excel، تأكد من سلامة الملف.');
    }
  };
  r.readAsArrayBuffer(file);
}

let currentImportFilter = 'all'; // 'all', 'errors', 'valid', 'existing'

function preparePreview(name, rows) {
  currentImportFilter = 'all';

  const seenNationalsInFile = new Set();

  state.importedRows = rows.map((r, i) => {
    const o = rowObject(r);
    const national = digits(pick(o, ['الرقم القومي', 'رقم القومي', 'الرقم القومى', 'قومي', 'national id']));
    // Auto-fix Excel dropped leading zero:
    const phone = sanitizeExcelPhone(pick(o, ['رقم الهاتف', 'رقم الواتساب', 'الهاتف', 'الواتساب', 'موبايل', 'phone']));
    const rawFaculty = pick(o, ['الكلية', 'الكليه', 'كلية', 'faculty']);
    const nameVal = String(pick(o, ['الاسم رباعي', 'الاسم الرباعي', 'الاسم', 'اسم الطالب', 'name'])).trim();
    const faculty = canonicalFaculty(rawFaculty);
    const yearVal = yearLabel(pick(o, ['الفرقة', 'الفرقه', 'السنة', 'year']));

    const parsedNat = parseEgyptianNationalID(national);
    const parsedPhone = validateEgyptianPhone(phone);
    const isBanned = state.bans.find(b => b.active !== false && b.national === national);

    // Intra-file duplicate check:
    const isDuplicateInFile = national && parsedNat.valid && seenNationalsInFile.has(national);
    if (national && parsedNat.valid) {
      seenNationalsInFile.add(national);
    }

    // Existing student check in system database:
    const existingStudent = state.students.find(s => s.national === national);
    const isExisting = !!existingStudent;
    let hasDiff = false;
    let diffs = [];

    if (existingStudent) {
      if (nameVal && existingStudent.name !== nameVal) diffs.push(`الاسم: ${existingStudent.name} ⬅ ${nameVal}`);
      if (faculty && existingStudent.faculty !== faculty) diffs.push(`الكلية: ${existingStudent.faculty} ⬅ ${faculty}`);
      if (yearVal && existingStudent.year !== yearVal) diffs.push(`الفرقة: ${existingStudent.year} ⬅ ${yearVal}`);
      if (phone && existingStudent.phone !== phone) diffs.push(`الهاتف: ${existingStudent.phone} ⬅ ${phone}`);
      hasDiff = diffs.length > 0;
    }

    const valid = !isDuplicateInFile && nameVal.length >= 3 && parsedNat.valid && parsedPhone.valid && !isBanned;
    const changed = normalizeArabic(rawFaculty) !== normalizeArabic(faculty);

    let resultMsg = 'جديد وسليم ✅';
    if (isDuplicateInFile) resultMsg = 'رقم قومي مكرر داخل الشيت ⚠️';
    else if (isBanned) resultMsg = 'محظور إدارياً 🚫';
    else if (!parsedNat.valid) resultMsg = 'قومي خطأ ❌';
    else if (!parsedPhone.valid) resultMsg = 'هاتف خطأ ❌';
    else if (nameVal.length < 3) resultMsg = 'الاسم ناقص ❌';
    else if (isExisting) resultMsg = hasDiff ? 'مسجل مسبقاً (تحديث بيانات 🔄)' : 'مسجل مسبقاً (متطابق) ✅';

    return {
      i: i + 1,
      name: nameVal,
      faculty,
      rawFaculty,
      year: yearVal,
      national,
      phone,
      valid,
      changed,
      resultMsg,
      isDuplicateInFile,
      isExisting,
      existingStudent,
      hasDiff,
      diffs,
      conflictAction: hasDiff ? 'update_all' : 'keep_existing', // 'update_all', 'keep_existing', 'phone_only'
      isEditing: false,
      forcedValid: false,
      corrected: false
    };
  });

  const fn = $('#fileName') || $('#previewFilename');
  if (fn) fn.textContent = name;
  const pc = $('#previewSummary') || $('#previewCount');
  if (pc) pc.textContent = `${state.importedRows.length} صف مسحوب من الكشف`;

  updateImportFilterBadges();

  // Populate events selector
  const evSelect = $('#importEventSelect');
  if (evSelect) {
    evSelect.innerHTML = `
      <option value="">-- اضغط هنا لاختيار الفاعلية المراد ربط الطلاب بها (إجباري) --</option>
      <option value="__NEW__">➕ إنشاء فاعلية جديدة الآن وربط الطلاب بها مباشرة...</option>
      ${state.events.map(e => `<option value="${e.id}">${safe(e.title)} (${safe(e.date)}) - المسجلون حالياً: ${(e.attendeeIds || []).length} طالب</option>`).join('')}
    `;

    evSelect.onchange = () => {
      const isNew = evSelect.value === '__NEW__';
      const newBox = $('#newImportEventBox');
      if (newBox) newBox.style.display = isNew ? 'block' : 'none';
    };
  }

  // Hook up filter tabs
  const tabAll = $('#tabImportAll');
  const tabErrors = $('#tabImportErrors');
  const tabValid = $('#tabImportValid');
  const tabExisting = $('#tabImportExisting');

  if (tabAll) tabAll.onclick = () => { setImportFilter('all'); };
  if (tabErrors) tabErrors.onclick = () => { setImportFilter('errors'); };
  if (tabValid) tabValid.onclick = () => { setImportFilter('valid'); };
  if (tabExisting) tabExisting.onclick = () => { setImportFilter('existing'); };

  renderImportRowsTable();
  const dropLayout = $('.import-layout') || $('#importDrop');
  if (dropLayout) dropLayout.style.display = 'none';
  const previewPanel = $('#importPreview');
  if (previewPanel) {
    previewPanel.classList.remove('hidden');
    previewPanel.style.display = 'block';
  }
  iconRefresh();
}

function setImportFilter(f) {
  currentImportFilter = f;
  $$('.import-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.importTab === f);
  });
  renderImportRowsTable();
}

function updateImportFilterBadges() {
  const total = state.importedRows.length;
  const errors = state.importedRows.filter(r => !r.valid).length;
  const valid = state.importedRows.filter(r => r.valid && !r.isExisting).length;
  const existing = state.importedRows.filter(r => r.isExisting).length;

  if ($('#badgeImportAll')) $('#badgeImportAll').textContent = total;
  if ($('#badgeImportErrors')) $('#badgeImportErrors').textContent = errors;
  if ($('#badgeImportValid')) $('#badgeImportValid').textContent = valid;
  if ($('#badgeImportExisting')) $('#badgeImportExisting').textContent = existing;
}

function renderImportRowsTable() {
  const tbody = $('#previewRows');
  if (!tbody) return;

  const rowsToDisplay = state.importedRows.filter(r => {
    if (currentImportFilter === 'errors') return !r.valid;
    if (currentImportFilter === 'valid') return r.valid && !r.isExisting;
    if (currentImportFilter === 'existing') return r.isExisting;
    return true;
  });

  const existingWithDiff = state.importedRows.filter(r => r.isExisting && r.hasDiff);
  const existingToolbarHtml = (existingWithDiff.length > 0 && (currentImportFilter === 'all' || currentImportFilter === 'existing')) ? `
    <tr style="background:#edf8fc">
      <td colspan="8" style="padding:10px 14px;border:1px solid #b9d9f2">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
          <span style="font-size:12px;color:#0369a1;font-weight:bold">
            <i data-lucide="refresh-cw"></i> رصد ${existingWithDiff.length} طالب مسجل مسبقاً طرأ تعديل على بياناتهم:
          </span>
          <div style="display:flex;gap:8px">
            <button type="button" class="btn secondary sm" id="btnBatchUpdateAll" style="font-size:11px;padding:4px 10px">
              ⚡ تحديث بيانات الكل بالجديدة
            </button>
            <button type="button" class="btn ghost sm" id="btnBatchKeepAll" style="font-size:11px;padding:4px 10px;border-color:#b9d9f2">
              🛡️ الإبقاء على بياناتهم القديمة
            </button>
          </div>
        </div>
      </td>
    </tr>
  ` : '';

  if (rowsToDisplay.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="padding:22px;text-align:center;color:var(--muted);font-size:13px">لا توجد صفوف لعرضها في هذا التبويب</td></tr>`;
    return;
  }

  tbody.innerHTML = existingToolbarHtml + rowsToDisplay.slice(0, 150).map(x => {
    if (x.isEditing) {
      return `
        <tr class="import-row-error" data-row-idx="${x.i}">
          <td>${x.i}</td>
          <td><input class="import-cell-input st-edit-name" value="${safe(x.name)}" placeholder="الاسم رباعي"></td>
          <td>
            <select class="import-cell-input st-edit-faculty">
              ${faculties.map(f => `<option value="${f}" ${f === x.faculty ? 'selected' : ''}>${f}</option>`).join('')}
            </select>
          </td>
          <td>
            <select class="import-cell-input st-edit-year">
              <option ${x.year === 'الفرقة الأولى' ? 'selected' : ''}>الفرقة الأولى</option>
              <option ${x.year === 'الفرقة الثانية' ? 'selected' : ''}>الفرقة الثانية</option>
              <option ${x.year === 'الفرقة الثالثة' ? 'selected' : ''}>الفرقة الثالثة</option>
              <option ${x.year === 'الفرقة الرابعة' ? 'selected' : ''}>الفرقة الرابعة</option>
              <option ${x.year === 'الفرقة الخامسة' ? 'selected' : ''}>الفرقة الخامسة</option>
              <option ${x.year === 'الفرقة السادسة' ? 'selected' : ''}>الفرقة السادسة</option>
              <option ${x.year === 'دراسات عليا' ? 'selected' : ''}>دراسات عليا</option>
            </select>
          </td>
          <td><input class="import-cell-input st-edit-national" maxlength="14" value="${safe(x.national)}" placeholder="14 رقم قومي"></td>
          <td><input class="import-cell-input st-edit-phone" maxlength="11" value="${safe(x.phone)}" placeholder="01xxxxxxxxx"></td>
          <td><span class="badge orange">تعديل جاري</span></td>
          <td class="import-actions-cell">
            <button type="button" class="btn-inline-action save" data-save-row="${x.i}" title="حفظ وتدقيق الصف">حفظ وتدقيق ✓</button>
            <button type="button" class="btn-inline-action edit" data-cancel-row="${x.i}" title="إلغاء التعديل">إلغاء</button>
          </td>
        </tr>
      `;
    }

    let rowClass = '';
    if (x.isExisting && x.hasDiff) rowClass = 'import-row-diff';
    else if (x.isExisting) rowClass = 'import-row-existing';
    else if (x.forcedValid) rowClass = 'import-row-forced';
    else if (x.corrected) rowClass = 'import-row-corrected';
    else if (!x.valid) rowClass = 'import-row-error';

    let badgeClass = 'active';
    if (x.forcedValid) badgeClass = 'warn';
    else if (!x.valid) badgeClass = 'banned';
    else if (x.isExisting && x.hasDiff) badgeClass = 'warn';

    return `
      <tr class="${rowClass}" data-row-idx="${x.i}">
        <td>${x.i}</td>
        <td><strong>${safe(x.name || '—')}</strong></td>
        <td><strong>${safe(x.faculty)}</strong>${x.changed ? `<br><small style="color:var(--muted)">من: ${safe(x.rawFaculty)}</small>` : ''}</td>
        <td>${safe(x.year)}</td>
        <td dir="ltr" style="font-family:monospace">${safe(x.national || '—')}</td>
        <td dir="ltr" style="font-family:monospace">${safe(x.phone || '—')}</td>
        <td>
          <span class="badge ${badgeClass}">${x.resultMsg}</span>
          ${x.isExisting && x.hasDiff ? `
            <div style="margin-top:4px">
              <select class="conflict-action-select" data-conflict-row="${x.i}" title="اختر إجراء تحديث بيانات الطالب">
                <option value="update_all" ${x.conflictAction === 'update_all' ? 'selected' : ''}>تحديث كافة البيانات</option>
                <option value="keep_existing" ${x.conflictAction === 'keep_existing' ? 'selected' : ''}>الإبقاء على القديمة</option>
                <option value="phone_only" ${x.conflictAction === 'phone_only' ? 'selected' : ''}>تحديث الهاتف فقط</option>
              </select>
              <small style="display:block;color:#b45309;font-size:10px;margin-top:2px">${x.diffs.join(' | ')}</small>
            </div>
          ` : ''}
        </td>
        <td class="import-actions-cell">
          <button type="button" class="btn-inline-action edit" data-edit-row="${x.i}" title="تعديل وتصحيح الصف فوراً">✏️ تعديل</button>
          ${!x.valid ? `<button type="button" class="btn-inline-action force" data-force-row="${x.i}" title="اعتماد واستيراد الصف كما هو">⚡ اعتماد كما هو</button>` : ''}
          <button type="button" class="btn-inline-action delete" data-delete-row="${x.i}" title="استبعاد الصف من الاستيراد">✕</button>
        </td>
      </tr>
    `;
  }).join('');

  attachImportRowActionListeners();
  iconRefresh();
}

function attachImportRowActionListeners() {
  // Batch updates for existing students
  const btnBatchUpdate = $('#btnBatchUpdateAll');
  if (btnBatchUpdate) {
    btnBatchUpdate.onclick = () => {
      state.importedRows.forEach(r => {
        if (r.isExisting && r.hasDiff) r.conflictAction = 'update_all';
      });
      renderImportRowsTable();
      toast('تم تعيين الإجراء لجميع المسجلين مسبقاً: تحديث كافة البيانات.');
    };
  }

  const btnBatchKeep = $('#btnBatchKeepAll');
  if (btnBatchKeep) {
    btnBatchKeep.onclick = () => {
      state.importedRows.forEach(r => {
        if (r.isExisting && r.hasDiff) r.conflictAction = 'keep_existing';
      });
      renderImportRowsTable();
      toast('تم تعيين الإجراء لجميع المسجلين مسبقاً: الإبقاء على بياناتهم القديمة.');
    };
  }

  // Conflict action selector change
  $$('[data-conflict-row]').forEach(sel => {
    sel.onchange = (e) => {
      const idx = parseInt(sel.dataset.conflictRow, 10);
      const row = state.importedRows.find(r => r.i === idx);
      if (row) {
        row.conflictAction = e.target.value;
      }
    };
  });

  $$('[data-edit-row]').forEach(btn => {
    btn.onclick = () => {
      const id = parseInt(btn.dataset.editRow, 10);
      const row = state.importedRows.find(r => r.i === id);
      if (row) {
        row.isEditing = true;
        renderImportRowsTable();
      }
    };
  });

  $$('[data-cancel-row]').forEach(btn => {
    btn.onclick = () => {
      const id = parseInt(btn.dataset.cancelRow, 10);
      const row = state.importedRows.find(r => r.i === id);
      if (row) {
        row.isEditing = false;
        renderImportRowsTable();
      }
    };
  });

  $$('[data-save-row]').forEach(btn => {
    btn.onclick = () => {
      const id = parseInt(btn.dataset.saveRow, 10);
      const row = state.importedRows.find(r => r.i === id);
      if (!row) return;

      const tr = $(`tr[data-row-idx="${id}"]`);
      if (!tr) return;

      const newName = tr.querySelector('.st-edit-name').value.trim();
      const newFaculty = tr.querySelector('.st-edit-faculty').value;
      const newYear = tr.querySelector('.st-edit-year').value;
      const newNational = digits(tr.querySelector('.st-edit-national').value);
      const newPhone = sanitizeExcelPhone(tr.querySelector('.st-edit-phone').value);

      row.name = newName;
      row.faculty = newFaculty;
      row.year = newYear;
      row.national = newNational;
      row.phone = newPhone;
      row.isEditing = false;

      // Re-validate
      const parsedNat = parseEgyptianNationalID(newNational);
      const parsedPhone = validateEgyptianPhone(newPhone);
      const isBanned = state.bans.find(b => b.active !== false && b.national === newNational);

      row.valid = newName.length >= 3 && parsedNat.valid && parsedPhone.valid && !isBanned;
      row.corrected = row.valid;
      row.forcedValid = false;

      if (isBanned) row.resultMsg = 'محظور إدارياً ⚠️';
      else if (!parsedNat.valid) row.resultMsg = 'قومي خطأ ❌';
      else if (!parsedPhone.valid) row.resultMsg = 'هاتف خطأ ❌';
      else if (newName.length < 3) row.resultMsg = 'الاسم ناقص ❌';
      else row.resultMsg = 'تم تصحيحه واعتماده ✓';

      updateImportFilterBadges();
      renderImportRowsTable();
      toast(`تم حفظ وتدقيق الصف رقم ${id} بنجاح.`);
    };
  });

  $$('[data-force-row]').forEach(btn => {
    btn.onclick = () => {
      const id = parseInt(btn.dataset.forceRow, 10);
      const row = state.importedRows.find(r => r.i === id);
      if (row) {
        row.forcedValid = true;
        row.valid = true;
        row.resultMsg = 'معتمد يدوياً ⚠️';
        updateImportFilterBadges();
        renderImportRowsTable();
        toast(`تم اعتماد الصف رقم ${id} استثنائياً.`);
      }
    };
  });

  $$('[data-delete-row]').forEach(btn => {
    btn.onclick = () => {
      const id = parseInt(btn.dataset.deleteRow, 10);
      state.importedRows = state.importedRows.filter(r => r.i !== id);
      updateImportFilterBadges();
      renderImportRowsTable();
      toast('تم استبعاد الصف من الاستيراد.');
    };
  });
}

function resetImport() {
  const dropLayout = $('.import-layout') || $('#importDrop');
  if (dropLayout) dropLayout.style.display = '';
  const previewPanel = $('#importPreview');
  if (previewPanel) {
    previewPanel.classList.add('hidden');
    previewPanel.style.display = 'none';
  }
  const fileInp = $('#excelInput') || $('#excelFileInput');
  if (fileInp) fileInp.value = '';
  state.importedRows = [];
  currentImportFilter = 'all';
}

function confirmImport() {
  const validRows = state.importedRows.filter(x => x.valid);
  if (!validRows.length) {
    alert('لا توجد صفوف صالحة أو معتمدة للاستيراد. يرجى مراجعة وتصحيح الأخطاء أولاً.');
    return;
  }

  // Mandatory event binding validation
  const selectedEventVal = $('#importEventSelect').value;
  if (!selectedEventVal) {
    alert('تنبيه إداري إجباري: يجب ربط الكشف بفاعلية معينة لتسجيل الحضور، يرجى اختيار فاعلية من القائمة أو اختيار إنشاء فاعلية جديدة مباشرة.');
    $('#importEventSelect').focus();
    return;
  }

  let chosenEvent = null;
  if (selectedEventVal === '__NEW__') {
    const newTitle = $('#importNewEventTitle').value.trim();
    if (!newTitle) {
      alert('يرجى كتابة اسم الفاعلية الجديدة المستهدفة لربط الكشف بها.');
      $('#importNewEventTitle').focus();
      return;
    }
    const newDate = $('#importNewEventDate').value.trim() || '26 نوفمبر 2026';
    const newPlace = $('#importNewEventPlace').value.trim() || 'جامعة الإسكندرية';
    const newOrg = $('#importNewEventOrg').value.trim() || 'اتحاد طلاب جامعة الإسكندرية';

    const newEventId = Math.max(0, ...state.events.map(e => e.id)) + 1;
    chosenEvent = {
      id: newEventId,
      title: newTitle,
      date: newDate,
      day: '26',
      month: 'نوفمبر',
      place: newPlace,
      registered: validRows.length,
      days: 1,
      attendeeIds: [],
      supervisors: ['مشرف عام الاتحاد'],
      supervisorIds: [1],
      status: 'قادمة',
      organizer: newOrg
    };
    state.events.push(chosenEvent);
  } else {
    chosenEvent = state.events.find(e => e.id == selectedEventVal);
    if (!chosenEvent) {
      alert('تعذر العثور على الفاعلية المحددة.');
      return;
    }
  }

  const entityVal = $('#importEntity').value;
  let addedCount = 0;
  let updatedCount = 0;
  let keptCount = 0;

  validRows.forEach(row => {
    let student = state.students.find(s => s.national === row.national);
    if (student) {
      // Smart conflict resolution
      if (row.conflictAction === 'update_all') {
        student.name = row.name;
        student.faculty = row.faculty;
        student.year = row.year;
        student.phone = row.phone;
        updatedCount++;
      } else if (row.conflictAction === 'phone_only') {
        student.phone = row.phone;
        updatedCount++;
      } else {
        keptCount++;
      }
      if (!student.entities.includes(entityVal)) student.entities.push(entityVal);
    } else {
      const newId = Math.max(0, ...state.students.map(x => x.id)) + 1;
      student = {
        id: newId,
        name: row.name,
        faculty: row.faculty,
        year: row.year,
        national: row.national,
        phone: row.phone,
        entities: [entityVal],
        status: 'نشط'
      };
      state.students.push(student);
      addedCount++;
    }

    if (!chosenEvent.attendeeIds) chosenEvent.attendeeIds = [];
    if (!chosenEvent.attendeeIds.includes(student.id)) chosenEvent.attendeeIds.push(student.id);
  });

  Storage.saveAll();
  updateDashboardStats();
  renderStudents();
  renderEvents();
  resetImport();

  toast(`تم اعتماد واستيراد ${validRows.length} طالباً بنجاح وربطهم فورياً بفاعلية «${chosenEvent.title}» (${addedCount} طالب جديد، و${updatedCount} تم تحديث بياناتهم، و${keptCount} تم الإبقاء على بياناتهم المعتمدة).`);
}

// 19. Supabase Modal & PostgreSQL Schema SQL Generator
function showSupabaseModal() {
  const cfg = state.supabase || {};
  const sqlSchema = `-- ====================================================================
-- Alexandria University Student Activities - Supabase PostgreSQL Schema
-- ====================================================================

CREATE TABLE IF NOT EXISTS public.supervisors (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(150) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    faculty VARCHAR(150),
    status VARCHAR(20) DEFAULT 'نشط',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.students (
    id BIGSERIAL PRIMARY KEY,
    national_id VARCHAR(14) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    faculty VARCHAR(150) NOT NULL,
    academic_year VARCHAR(50),
    phone VARCHAR(20) NOT NULL,
    status VARCHAR(20) DEFAULT 'نشط',
    entities TEXT[] DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.events (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    date_str VARCHAR(100),
    place VARCHAR(255),
    registered_target INT DEFAULT 0,
    days_count INT DEFAULT 1,
    supervisor_ids BIGINT[] DEFAULT '{}',
    organizer VARCHAR(150),
    status VARCHAR(50) DEFAULT 'قادمة',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.event_attendance (
    id BIGSERIAL PRIMARY KEY,
    event_id BIGINT REFERENCES public.events(id) ON DELETE CASCADE,
    student_id BIGINT REFERENCES public.students(id) ON DELETE CASCADE,
    attendance_status VARCHAR(20) DEFAULT 'حاضر',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(event_id, student_id)
);

CREATE TABLE IF NOT EXISTS public.bans (
    id BIGSERIAL PRIMARY KEY,
    student_id BIGINT REFERENCES public.students(id) ON DELETE SET NULL,
    student_name VARCHAR(255) NOT NULL,
    faculty VARCHAR(150),
    national_id VARCHAR(14),
    ban_type VARCHAR(20) NOT NULL,
    reason TEXT NOT NULL,
    from_date DATE NOT NULL,
    to_date VARCHAR(50),
    issued_by VARCHAR(150),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.supervisors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bans ENABLE ROW LEVEL SECURITY;
`;

  const body = `
    <div class="form-grid">
      <div class="full" style="background:#edf8fc;border:1px solid #cbe6f7;border-radius:12px;padding:12px">
        <div style="display:flex;align-items:center;justify-content:space-between">
          <strong>حالة الربط الحالية:</strong>
          <span class="badge ${cfg.connected ? 'active' : 'temp'}">
            ${cfg.connected ? 'متصل بالسحابة ✅' : 'وضع التخزين المحلي النشط (Local Storage)'}
          </span>
        </div>
        <p style="margin:6px 0 0;font-size:11px;color:var(--muted)">
          النظام مصمم للعمل الميداني بدون إنترنت، أو الربط السحابي المباشر والمستقر مع Supabase PostgreSQL.
        </p>
      </div>

      <label class="full">Supabase Project URL
        <input id="sbUrl" dir="ltr" placeholder="https://xxxxxxxxxxxx.supabase.co" value="${safe(cfg.url || '')}">
      </label>
      <label class="full">Supabase Anon Key (المفتاح العام)
        <input id="sbKey" dir="ltr" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." value="${safe(cfg.key || '')}">
      </label>

      <!-- زر اختبار الاتصال اللحظي -->
      <div class="full" style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
        <button type="button" class="btn secondary" id="sbTestBtn" style="font-size:11.5px">
          <i data-lucide="zap"></i> اختبار الاتصال بـ Supabase الآن
        </button>
        <span id="sbTestSpinner" style="display:none;font-size:11px;color:var(--primary)"><i data-lucide="loader-2" class="spin"></i> جاري فحص الاتصال بالخادم...</span>
      </div>
      <div class="full" id="sbTestResultBox"></div>

      <!-- تهيئة الاستخدام الرسمي -->
      <div class="full" style="background:#fffbeb;border:1px solid #fef3c7;border-radius:12px;padding:12px;margin-top:6px">
        <div style="display:flex;align-items:center;justify-content:space-between">
          <strong style="color:#b45309;display:flex;align-items:center;gap:6px">
            <i data-lucide="shield-check"></i> جاهزية الاستخدام الميداني الرسمي
          </strong>
          <button type="button" class="btn ghost sm" id="sbCleanSlateBtn" style="color:#b45309;border-color:#fde68a;font-weight:700">
            تفريغ بيانات الاختبار والبدء بقاعدة فارغة
          </button>
        </div>
        <p style="font-size:11px;color:#92400e;margin:5px 0 0">
          يمكّنك هذا الخيار من مسح البيانات التجريبية والبدء فورياً بقاعدة بيانات رسمية معتمدة للجامعة مع بقاء كافة القوالب والإعدادات وهيكل النظام 100%. (ويمكن استعادة البيانات التجريبية في أي وقت).
        </p>
      </div>

      <!-- كود SQL -->
      <div class="full">
        <label>كود SQL لإنشاء الجداول وسياسات الأمان في Supabase SQL Editor</label>
        <div class="sql-box" id="sqlBox">${safe(sqlSchema)}</div>
        <button type="button" class="btn secondary" id="copySqlBtn" style="margin-top:6px;min-height:36px;font-size:11px">
          <i data-lucide="copy"></i> نسخ كود SQL للجداول
        </button>
      </div>

      <div class="form-actions">
        <button type="button" class="btn ghost modal-cancel">إغلاق</button>
        <button type="button" class="btn primary" id="saveSupabaseBtn">حفظ إعدادات الربط</button>
      </div>
    </div>
  `;

  modal('إعدادات قاعدة بيانات Supabase والسحابة', 'الربط السحابي، فحص الاتصال، ومخطط الجداول الرسمية', body);

  $('#copySqlBtn').onclick = () => {
    navigator.clipboard.writeText(sqlSchema).then(() => {
      toast('تم نسخ كود SQL لإنشاء الجداول إلى الحافظة بنجاح!');
    }).catch(() => {
      toast('تم نسخ الكود');
    });
  };

  // Test Connection
  $('#sbTestBtn').onclick = async () => {
    const url = ($('#sbUrl').value || '').trim().replace(/\/+$/, '');
    const key = ($('#sbKey').value || '').trim();
    const resultBox = $('#sbTestResultBox');
    const spinner = $('#sbTestSpinner');

    if (!url || !key) {
      resultBox.innerHTML = `<div class="sb-test-banner warning"><i data-lucide="alert-triangle"></i> يرجى إدخال كلٍ من Project URL و Anon Key لإجراء فحص الاتصال.</div>`;
      iconRefresh();
      return;
    }

    spinner.style.display = 'inline-flex';
    resultBox.innerHTML = '';

    try {
      const res = await fetch(`${url}/rest/v1/students?select=count`, {
        method: 'GET',
        headers: {
          'apikey': key,
          'Authorization': `Bearer ${key}`,
          'Range': '0-0'
        }
      });

      spinner.style.display = 'none';

      if (res.status === 200 || res.status === 206 || res.status === 204) {
        resultBox.innerHTML = `<div class="sb-test-banner success"><i data-lucide="check-circle"></i> تم الاتصال بنجاح بـ Supabase! الخادم مستجيب والجداول جاهزة للاستخدام الرسمي.</div>`;
      } else if (res.status === 401 || res.status === 403) {
        resultBox.innerHTML = `<div class="sb-test-banner error"><i data-lucide="alert-circle"></i> خطأ في المصادقة (كود ${res.status}): مفتاح Anon Key غير صحيح أو تنقصه صلاحية الوصول.</div>`;
      } else if (res.status === 404) {
        resultBox.innerHTML = `<div class="sb-test-banner warning"><i data-lucide="alert-triangle"></i> تم الوصول لمشروعك بـ Supabase بنجاح، لكن جدول students لم يُنشأ بعد. يرجى نسخ كود SQL أدناه وتنفيذه في Supabase SQL Editor.</div>`;
      } else {
        resultBox.innerHTML = `<div class="sb-test-banner warning"><i data-lucide="alert-triangle"></i> استجابة الخادم: كود ${res.status} (${res.statusText}).</div>`;
      }
    } catch (err) {
      spinner.style.display = 'none';
      resultBox.innerHTML = `<div class="sb-test-banner error"><i data-lucide="wifi-off"></i> تعذر الاتصال بـ Supabase: تأكد من اتصالك بالإنترنت وصحة رابط المشروع (URL).</div>`;
    }
    iconRefresh();
  };

  // Clean Slate for Official Production
  $('#sbCleanSlateBtn').onclick = () => {
    if (confirm('تأكيد بدء قاعدة بيانات رسمية فارغة؟\n\nسيتم مسح بيانات الطلاب والفاعليات التجريبية الحالية لبدء إدخال بيانات الجامعة الرسمية، مع الحفاظ الكامل على كافة القوالب والإعدادات وهيكل النظام.')) {
      state.students = [];
      state.events = [];
      state.bans = [];
      Storage.saveAll();
      updateDashboardStats();
      renderStudents();
      renderEvents();
      closeModal();
      toast('تم تفريغ بيانات الاختبار بنجاح، والمنظومة جاهزة تماماً للعمل الميداني الرسمي!');
    }
  };

  $('#saveSupabaseBtn').onclick = () => {
    const url = $('#sbUrl').value.trim();
    const key = $('#sbKey').value.trim();
    state.supabase = { url, key, connected: !!(url && key) };
    Storage.saveAll();
    closeModal();
    toast(state.supabase.connected ? 'تم حفظ إعدادات Supabase وتفعيل الربط السحابي بنجاح' : 'تم تفعيل وضع التخزين المحلي النشط');
  };

  iconRefresh();
}

// 20. Global Search & Filtering Engine
// ==========================================================================
// Custom Advanced Multi-Level Sorting System (Pattern 1, 2, 3, 4, 5, 6)
// ==========================================================================

function getStudentGenderFromNat(national) {
  if (!national || national.length < 13) return 'ذكر';
  const digit = parseInt(national.charAt(12), 10);
  return (digit % 2 === 1) ? 'ذكر' : 'أنثى';
}

function getFacultyRankIndex(fac) {
  const idx = faculties.indexOf(fac);
  return idx === -1 ? 999 : idx;
}

function sortStudentsCustom(studentsList, pattern, options = {}) {
  const list = [...studentsList];

  if (pattern === 'females_then_males_by_faculty' || pattern === 'females_first') {
    // 1. البنات أولاً ثم البنين، مع ترتيب الكليات داخل كل نوع
    list.sort((a, b) => {
      const gA = getStudentGenderFromNat(a.national);
      const gB = getStudentGenderFromNat(b.national);
      if (gA !== gB) return gA === 'أنثى' ? -1 : 1;
      const fA = getFacultyRankIndex(a.faculty);
      const fB = getFacultyRankIndex(b.faculty);
      if (fA !== fB) return fA - fB;
      return (a.name || '').localeCompare(b.name || '', 'ar');
    });
  } else if (pattern === 'faculty_then_females_first' || pattern === 'faculty_females_first') {
    // 2. تجميع حسب الكلية، وداخل كل كلية: البنات فوق والولاد تحت
    list.sort((a, b) => {
      const fA = getFacultyRankIndex(a.faculty);
      const fB = getFacultyRankIndex(b.faculty);
      if (fA !== fB) return fA - fB;
      const gA = getStudentGenderFromNat(a.national);
      const gB = getStudentGenderFromNat(b.national);
      if (gA !== gB) return gA === 'أنثى' ? -1 : 1;
      return (a.name || '').localeCompare(b.name || '', 'ar');
    });
  } else if (pattern === 'alphabetical_by_name' || pattern === 'alphabetical') {
    // 3. أبجدياً بالاسم مجمعاً حسب الكليات
    list.sort((a, b) => {
      const fA = getFacultyRankIndex(a.faculty);
      const fB = getFacultyRankIndex(b.faculty);
      if (fA !== fB) return fA - fB;
      return (a.name || '').localeCompare(b.name || '', 'ar');
    });
  } else if (pattern === 'year_then_gender' || pattern === 'year_gender') {
    // 4. حسب الفرق الدراسية ثم النوع
    const preferredYears = ['الفرقة الأولى', 'الفرقة الثانية', 'الفرقة الثالثة', 'الفرقة الرابعة', 'الفرقة الخامسة', 'إعدادي', 'دراسات عليا'];
    list.sort((a, b) => {
      const yA = preferredYears.indexOf(a.year);
      const yB = preferredYears.indexOf(b.year);
      if (yA !== yB) return (yA === -1 ? 99 : yA) - (yB === -1 ? 99 : yB);
      const gA = getStudentGenderFromNat(a.national);
      const gB = getStudentGenderFromNat(b.national);
      if (gA !== gB) return gA === 'أنثى' ? -1 : 1;
      return (a.name || '').localeCompare(b.name || '', 'ar');
    });
  } else if (pattern === 'attendance_rank') {
    // 5. الأكثر مشاركة في الفاعليات أولاً
    const getAttCount = id => state.events.filter(e => (e.attendeeIds || []).includes(id)).length;
    list.sort((a, b) => getAttCount(b.id) - getAttCount(a.id) || (a.name || '').localeCompare(b.name || '', 'ar'));
  } else if (pattern === 'multi_level') {
    // 6. محرك متعدد المستويات
    const { level1 = 'gender', level2 = 'faculty', level3 = 'name' } = options;
    const compareField = (field, a, b) => {
      if (field === 'faculty') return getFacultyRankIndex(a.faculty) - getFacultyRankIndex(b.faculty);
      if (field === 'gender') {
        const gA = getStudentGenderFromNat(a.national);
        const gB = getStudentGenderFromNat(b.national);
        return gA === gB ? 0 : (gA === 'أنثى' ? -1 : 1);
      }
      if (field === 'year') return (a.year || '').localeCompare(b.year || '', 'ar');
      if (field === 'name') return (a.name || '').localeCompare(b.name || '', 'ar');
      if (field === 'attendance') {
        const cA = state.events.filter(e => (e.attendeeIds || []).includes(a.id)).length;
        const cB = state.events.filter(e => (e.attendeeIds || []).includes(b.id)).length;
        return cB - cA;
      }
      return 0;
    };

    list.sort((a, b) => {
      const c1 = compareField(level1, a, b);
      if (c1 !== 0) return c1;
      const c2 = compareField(level2, a, b);
      if (c2 !== 0) return c2;
      return compareField(level3, a, b);
    });
  }

  return list;
}

function openCustomSortModal() {
  let selectedPattern = state.activeStudentSort || 'females_then_males_by_faculty';
  let multiL1 = (state.activeSortOptions && state.activeSortOptions.level1) || 'gender';
  let multiL2 = (state.activeSortOptions && state.activeSortOptions.level2) || 'faculty';
  let multiL3 = (state.activeSortOptions && state.activeSortOptions.level3) || 'name';

  const modalHtml = `
    <div class="custom-sort-wrap">
      <p style="margin:0 0 10px;font-size:12.5px;color:var(--muted)">
        اختر نمط الترتيب المطلوب لتطبيقه فورياً على كشف الطلاب في الموقع، أو استخراجه في كشف Word رسمي أو شيت Excel:
      </p>

      <div style="display:flex;flex-direction:column;gap:8px" id="sortPresetsContainer">
        <label class="sort-preset-card ${selectedPattern === 'females_then_males_by_faculty' ? 'selected' : ''}">
          <input type="radio" name="sortPatternRadio" value="females_then_males_by_faculty" ${selectedPattern === 'females_then_males_by_faculty' ? 'checked' : ''} hidden>
          <div class="sort-preset-icon"><i data-lucide="users"></i></div>
          <div style="flex:1">
            <strong>👩‍🎓 الطالبات أولاً ثم الطلاب البنين (مع ترتيب الكليات داخل كل نوع)</strong>
            <small style="color:var(--muted);display:block;margin-top:2px">تظهر جميع الطالبات أولاً مفرزات حسب ترتيب الكليات ثم الاسم، ويليهن جميع الطلاب البنين بنفس ترتيب الكليات.</small>
          </div>
        </label>

        <label class="sort-preset-card ${selectedPattern === 'faculty_then_females_first' ? 'selected' : ''}">
          <input type="radio" name="sortPatternRadio" value="faculty_then_females_first" ${selectedPattern === 'faculty_then_females_first' ? 'checked' : ''} hidden>
          <div class="sort-preset-icon"><i data-lucide="building-2"></i></div>
          <div style="flex:1">
            <strong>🏛️ تجميع حسب الكليات (ولكل كلية: البنات في الأعلى والولاد في الأسفل)</strong>
            <small style="color:var(--muted);display:block;margin-top:2px">يتم تجميع الطلاب حسب كل كلية، وداخل كل كلية تظهر الطالبات في الأعلى ويليهن الطلاب البنين في الأسفل.</small>
          </div>
        </label>

        <label class="sort-preset-card ${selectedPattern === 'alphabetical_by_name' ? 'selected' : ''}">
          <input type="radio" name="sortPatternRadio" value="alphabetical_by_name" ${selectedPattern === 'alphabetical_by_name' ? 'checked' : ''} hidden>
          <div class="sort-preset-icon"><i data-lucide="sort-asc"></i></div>
          <div style="flex:1">
            <strong>🔤 أبجدياً بالاسم مجمعاً حسب الكليات</strong>
            <small style="color:var(--muted);display:block;margin-top:2px">ترتيب الكليات أولاً ثم فرز أسماء الطلاب أبجدياً من الألف إلى الياء.</small>
          </div>
        </label>

        <label class="sort-preset-card ${selectedPattern === 'year_then_gender' ? 'selected' : ''}">
          <input type="radio" name="sortPatternRadio" value="year_then_gender" ${selectedPattern === 'year_then_gender' ? 'checked' : ''} hidden>
          <div class="sort-preset-icon"><i data-lucide="graduation-cap"></i></div>
          <div style="flex:1">
            <strong>🎓 حسب الفرق الدراسية (أولى ⬅ ثانية ⬅ ثالثة ...) ثم النوع</strong>
            <small style="color:var(--muted);display:block;margin-top:2px">ترتيب تصاعدي بحسب الفرقة الدراسية، ثم الطالبات أولاً داخل كل فرقة.</small>
          </div>
        </label>

        <label class="sort-preset-card ${selectedPattern === 'attendance_rank' ? 'selected' : ''}">
          <input type="radio" name="sortPatternRadio" value="attendance_rank" ${selectedPattern === 'attendance_rank' ? 'checked' : ''} hidden>
          <div class="sort-preset-icon"><i data-lucide="zap"></i></div>
          <div style="flex:1">
            <strong>⚡ الأكثر مشاركة وحضوراً في الفاعليات أولاً</strong>
            <small style="color:var(--muted);display:block;margin-top:2px">ترتيب تنازلي بحسب عدد الفاعليات التي حضرها الطالب فعلياً.</small>
          </div>
        </label>

        <label class="sort-preset-card ${selectedPattern === 'multi_level' ? 'selected' : ''}">
          <input type="radio" name="sortPatternRadio" value="multi_level" ${selectedPattern === 'multi_level' ? 'checked' : ''} hidden>
          <div class="sort-preset-icon"><i data-lucide="sliders"></i></div>
          <div style="flex:1">
            <strong>⚙️ محرك الترتيب المتعدد المستويات (تخصيص يدوي للمستويات)</strong>
            <small style="color:var(--muted);display:block;margin-top:2px">تحديد معيار الفرز في المستوى الأول والمستوى الثاني والمستوى الثالث يدوياً.</small>
          </div>
        </label>
      </div>

      <div id="multiLevelBuilderBox" style="display:${selectedPattern === 'multi_level' ? 'grid' : 'none'};grid-template-columns:1fr 1fr 1fr;gap:10px;background:#f8fafc;padding:12px;border-radius:10px;border:1px solid var(--border)">
        <div>
          <label style="font-size:11px;font-weight:bold;margin-bottom:4px;display:block">المستوى الأول (أساسي)</label>
          <select id="sortL1" class="studio-select" style="width:100%;padding:6px;border-radius:8px">
            <option value="gender" ${multiL1 === 'gender' ? 'selected' : ''}>النوع (إناث أولاً)</option>
            <option value="faculty" ${multiL1 === 'faculty' ? 'selected' : ''}>الكلية</option>
            <option value="year" ${multiL1 === 'year' ? 'selected' : ''}>الفرقة الدراسية</option>
            <option value="name" ${multiL1 === 'name' ? 'selected' : ''}>الاسم أبجدياً</option>
            <option value="attendance" ${multiL1 === 'attendance' ? 'selected' : ''}>حضور الفاعليات</option>
          </select>
        </div>
        <div>
          <label style="font-size:11px;font-weight:bold;margin-bottom:4px;display:block">المستوى الثاني (فرعي)</label>
          <select id="sortL2" class="studio-select" style="width:100%;padding:6px;border-radius:8px">
            <option value="faculty" ${multiL2 === 'faculty' ? 'selected' : ''}>الكلية</option>
            <option value="gender" ${multiL2 === 'gender' ? 'selected' : ''}>النوع</option>
            <option value="year" ${multiL2 === 'year' ? 'selected' : ''}>الفرقة الدراسية</option>
            <option value="name" ${multiL2 === 'name' ? 'selected' : ''}>الاسم أبجدياً</option>
          </select>
        </div>
        <div>
          <label style="font-size:11px;font-weight:bold;margin-bottom:4px;display:block">المستوى الثالث (تكميلي)</label>
          <select id="sortL3" class="studio-select" style="width:100%;padding:6px;border-radius:8px">
            <option value="name" ${multiL3 === 'name' ? 'selected' : ''}>الاسم أبجدياً</option>
            <option value="year" ${multiL3 === 'year' ? 'selected' : ''}>الفرقة الدراسية</option>
            <option value="newest" ${multiL3 === 'newest' ? 'selected' : ''}>الأحدث تسجيلاً</option>
          </select>
        </div>
      </div>

      <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:10px;flex-wrap:wrap">
        <button type="button" class="btn ghost modal-cancel">إلغاء</button>
        <button type="button" class="btn secondary" id="btnSortExportExcel">
          <i data-lucide="download"></i> تصدير شيت Excel بالترتيب
        </button>
        <button type="button" class="btn secondary" id="btnSortExportWord">
          <i data-lucide="file-text"></i> كشف Word رسمي بالترتيب
        </button>
        <button type="button" class="btn primary" id="btnApplySortLive">
          <i data-lucide="check"></i> تطبيق الترتيب على الجدول الحالي
        </button>
      </div>
    </div>
  `;

  modal('نظام الترتيب المخصص للطلاب', 'ترتيب متعدد المستويات (بنات أولاً، حسب الكليات، أبجدي، أو مخصص)', modalHtml);

  // Radio clicks
  $$('input[name="sortPatternRadio"]').forEach(radio => {
    radio.onchange = () => {
      selectedPattern = radio.value;
      $$('.sort-preset-card').forEach(c => c.classList.remove('selected'));
      radio.closest('.sort-preset-card').classList.add('selected');
      const box = $('#multiLevelBuilderBox');
      if (box) box.style.display = selectedPattern === 'multi_level' ? 'grid' : 'none';
    };
  });

  function getSortedCurrentStudents() {
    const opts = {
      level1: $('#sortL1') ? $('#sortL1').value : multiL1,
      level2: $('#sortL2') ? $('#sortL2').value : multiL2,
      level3: $('#sortL3') ? $('#sortL3').value : multiL3
    };
    return sortStudentsCustom(state.students, selectedPattern, opts);
  }

  $('#btnApplySortLive').onclick = () => {
    state.activeStudentSort = selectedPattern;
    state.activeSortOptions = {
      level1: $('#sortL1') ? $('#sortL1').value : multiL1,
      level2: $('#sortL2') ? $('#sortL2').value : multiL2,
      level3: $('#sortL3') ? $('#sortL3').value : multiL3
    };
    filterStudents();
    closeModal();
    toast('تم تطبيق نمط الترتيب المختار على جدول الطلاب بنجاح!');
  };

  $('#btnSortExportExcel').onclick = () => {
    const sorted = getSortedCurrentStudents();
    closeModal();
    exportStudentsToExcel(sorted, 'كشف-الطلاب-بالترتيب-المخصص');
  };

  $('#btnSortExportWord').onclick = () => {
    const sorted = getSortedCurrentStudents();
    closeModal();
    openWordExportModal('custom', {
      students: sorted,
      title: 'كشف طلاب جامعة الإسكندرية (مرتب مخصصاً)',
      meta: `العام الجامعي: 2026 / 2027  |  العدد المعتمد: ${sorted.length} طالب`
    });
  };

  iconRefresh();
}

function filterStudents() {
  const q = normalizeArabic($('#studentSearch').value);
  const f = $('#facultyFilter').value;
  const s = $('#statusFilter').value;
  let filtered = state.students.filter(x => {
    const matchesQ = !q || normalizeArabic([x.name, x.national, x.phone, x.faculty, ...(x.entities || [])].join(' ')).includes(q);
    const matchesF = !f || x.faculty === f;
    const isBanned = isStudentBanned(x);
    const effectiveStatus = isBanned ? 'محظور' : x.status;
    const matchesS = !s || effectiveStatus === s;
    return matchesQ && matchesF && matchesS;
  });

  if (state.activeStudentSort) {
    filtered = sortStudentsCustom(filtered, state.activeStudentSort, state.activeSortOptions || {});
  }
  renderStudents(filtered);
}

function globalSearch(q) {
  const box = $('#searchResults');
  q = normalizeArabic(q);
  if (q.length < 2) {
    box.classList.remove('show');
    return;
  }
  const sr = state.students.filter(s => normalizeArabic([s.name, s.faculty, s.phone, s.national, ...(s.entities || [])].join(' ')).includes(q)).slice(0, 4);
  const er = state.events.filter(e => normalizeArabic([e.title, e.place].join(' ')).includes(q)).slice(0, 3);
  const supR = state.supervisors.filter(sup => normalizeArabic([sup.name, sup.role, sup.faculty, sup.phone].join(' ')).includes(q)).slice(0, 3);

  box.innerHTML = [
    ...sr.map(s => `<div class="search-result" data-result-student="${s.id}">
      <span class="result-icon"><i data-lucide="user"></i></span>
      <div><strong>${safe(s.name)}</strong><span>${safe(s.faculty)} · ${safe(s.year)}</span></div>
    </div>`),
    ...er.map(e => `<div class="search-result" data-result-event="${e.id}">
      <span class="result-icon"><i data-lucide="calendar-days"></i></span>
      <div><strong>${safe(e.title)}</strong><span>${safe(e.date)} · ${safe(e.place)}</span></div>
    </div>`),
    ...supR.map(sup => `<div class="search-result" data-result-supervisor="${sup.id}">
      <span class="result-icon" style="background:#eaf8f3;color:var(--green)"><i data-lucide="user-check"></i></span>
      <div><strong>${safe(sup.name)}</strong><span>${safe(sup.role)} · ${safe(sup.faculty)}</span></div>
    </div>`)
  ].join('') || '<div class="search-result"><div><strong>لا توجد نتائج مطابقة</strong><span>جرّب البحث باسم الكلية، الرقم القومي، المشرف، أو الفاعلية</span></div></div>';

  box.classList.add('show');
  $$('[data-result-student]', box).forEach(b => {
    b.onclick = () => {
      box.classList.remove('show');
      showStudent(state.students.find(s => s.id == b.dataset.resultStudent));
    };
  });
  $$('[data-result-event]', box).forEach(b => {
    b.onclick = () => {
      box.classList.remove('show');
      showEvent(state.events.find(e => e.id == b.dataset.resultEvent));
    };
  });
  $$('[data-result-supervisor]', box).forEach(b => {
    b.onclick = () => {
      box.classList.remove('show');
      navigate('supervisors');
      showSupervisorEvents(state.supervisors.find(s => s.id == b.dataset.resultSupervisor));
    };
  });
  iconRefresh();
}

function toast(msg) {
  const t = $('#toast');
  if (!t) return;
  const s = $('span', t);
  if (s) s.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => t.classList.remove('show'), 3500);
}

// 21. Application Bootstrap
function init() {
  $('#facultyFilter').innerHTML += facultyOptions();
  renderStudents();
  renderEvents();
  renderSupervisors();
  renderEntities();
  renderBans();
  renderUsers();
  updateDashboardStats();

  // Navigation handlers
  $$('[data-page]').forEach(b => b.onclick = () => navigate(b.dataset.page));
  $$('[data-go]').forEach(b => b.onclick = () => navigate(b.dataset.go));
  $$('[data-open]').forEach(b => b.onclick = () => openForm(b.dataset.open));

  // Sidebar and mobile navigation
  $('#menuToggle').onclick = () => {
    $('.sidebar').classList.toggle('open');
    $('#drawerOverlay').classList.toggle('show');
  };
  $('#drawerOverlay').onclick = () => {
    $('.sidebar').classList.remove('open');
    $('#drawerOverlay').classList.remove('show');
    const sheet = $('#moreBottomSheet');
    if (sheet) sheet.classList.remove('show');
    closeDropdowns();
  };

  // Mobile Bottom Sheet
  const moreBtn = $('#mobileMoreBtn');
  if (moreBtn) {
    moreBtn.onclick = () => {
      $('#moreBottomSheet').classList.toggle('show');
      $('#drawerOverlay').classList.toggle('show');
    };
  }
  const closeSheetBtn = $('#closeBottomSheet');
  if (closeSheetBtn) {
    closeSheetBtn.onclick = () => {
      $('#moreBottomSheet').classList.remove('show');
      $('#drawerOverlay').classList.remove('show');
    };
  }
  const mobileSupabaseBtn = $('#mobileSupabaseBtn');
  if (mobileSupabaseBtn) {
    mobileSupabaseBtn.onclick = () => {
      $('#moreBottomSheet').classList.remove('show');
      $('#drawerOverlay').classList.remove('show');
      showSupabaseModal();
    };
  }

  // Topbar Dropdowns
  const notifyBtn = $('#notifyBtn');
  if (notifyBtn) {
    notifyBtn.onclick = (e) => {
      e.stopPropagation();
      $('#notifyDropdown').classList.toggle('show');
      $('#profileDropdown').classList.remove('show');
    };
  }
  const profileBtn = $('#profileBtn');
  if (profileBtn) {
    profileBtn.onclick = (e) => {
      e.stopPropagation();
      $('#profileDropdown').classList.toggle('show');
    };
  }
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown-wrap')) closeDropdowns();
  });

  // Supabase & Reset Actions
  const menuSupabase = $('#menuSupabase');
  if (menuSupabase) menuSupabase.onclick = () => { closeDropdowns(); showSupabaseModal(); };

  const menuResetData = $('#menuResetData');
  if (menuResetData) {
    menuResetData.onclick = () => {
      closeDropdowns();
      if (confirm('هل ترغب في استعادة البيانات التجريبية الافتراضية؟ سيتم إلغاء التغييرات المحلية.')) {
        Storage.reset();
        renderStudents();
        renderEvents();
        renderSupervisors();
        renderBans();
        renderEntities();
        renderUsers();
        updateDashboardStats();
        toast('تمت استعادة البيانات الافتراضية بنجاح.');
      }
    };
  }

  // Logout Buttons
  const doLogout = () => {
    closeDropdowns();
    if (confirm('هل ترغب في تسجيل الخروج من المنظومة؟')) {
      toast('تم تسجيل الخروج بنجاح.');
    }
  };
  const sideLogout = $('#sideLogoutBtn');
  if (sideLogout) sideLogout.onclick = doLogout;
  const topLogout = $('#topLogoutBtn');
  if (topLogout) topLogout.onclick = doLogout;

  // Modal Closures
  $('.modal-close').onclick = closeModal;
  $('#formModal').onclick = e => { if (e.target.id === 'formModal') closeModal(); };

  // Student Filters
  $('#studentSearch').oninput = filterStudents;
  $('#facultyFilter').onchange = filterStudents;
  $('#statusFilter').onchange = filterStudents;
  $('#clearStudentFilters').onclick = () => {
    $('#studentSearch').value = '';
    $('#facultyFilter').value = '';
    $('#statusFilter').value = '';
    filterStudents();
  };

  // Supervisor Filters
  const supSearch = $('#supervisorSearch');
  if (supSearch) supSearch.oninput = filterSupervisors;
  const supRoleF = $('#supervisorRoleFilter');
  if (supRoleF) supRoleF.onchange = filterSupervisors;
  const supClear = $('#clearSupervisorFilters');
  if (supClear) {
    supClear.onclick = () => {
      supSearch.value = '';
      supRoleF.value = '';
      filterSupervisors();
    };
  }

  // Global Search & Keyboard Shortcuts
  $('#globalSearch').oninput = e => globalSearch(e.target.value);
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      $('#globalSearch').focus();
    }
    if (e.key === 'Escape') {
      closeModal();
      $('#searchResults').classList.remove('show');
      closeDropdowns();
    }
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.global-search')) $('#searchResults').classList.remove('show');
  });

  // Excel Drag and Drop
  const dz = $('#dropzone');
  const input = $('#excelInput');
  input.onchange = () => input.files[0] && parseWorkbook(input.files[0]);
  ['dragenter', 'dragover'].forEach(n => dz.addEventListener(n, e => { e.preventDefault(); dz.classList.add('drag'); }));
  ['dragleave', 'drop'].forEach(n => dz.addEventListener(n, e => { e.preventDefault(); dz.classList.remove('drag'); }));
  dz.ondrop = e => {
    const f = e.dataTransfer.files[0];
    if (f && /\.xlsx?$/i.test(f.name)) parseWorkbook(f);
    else toast('مسموح بملفات Excel بصيغة xlsx أو xls فقط');
  };

  $('#cancelImport').onclick = resetImport;
  $('#backToFile').onclick = resetImport;
  $('#confirmImport').onclick = confirmImport;

  // Exports
  if ($('#exportWordStudents')) $('#exportWordStudents').onclick = () => openWordExportModal('students');
  $('#exportStudents').onclick = exportStudents;
  if ($('#btnCustomStudentExport')) $('#btnCustomStudentExport').onclick = () => openCustomStudentExportModal('word');
  if ($('#btnCustomSortStudents')) $('#btnCustomSortStudents').onclick = () => openCustomSortModal();
  if ($('#btnFacultyReport')) $('#btnFacultyReport').onclick = () => showFacultyReportModal();
  $('#downloadTemplate').onclick = downloadTemplate;

  iconRefresh();
}

document.addEventListener('DOMContentLoaded', init);
