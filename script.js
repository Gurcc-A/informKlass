/* Дані сайту */
const SITE = {
  name: 'Олександра Гурц',
  school: '№2',
  email: 'gurrcc@gmail.com',
  consult: 'Консультації: вівторок і четвер, 14:30–15:30, кабінет інформатики.'
};

/* Оголошення. Поля: tag (мітка), title, text; необов’язково: date ('2026-10-20'), pin: true (закріпити), icon (емодзі) */
const NEWS = [
  { tag: '5–11 класи', icon: '📅', wide: true, tone: 't-sage', title: 'Консультації перед контрольними роботами', text: 'За тиждень до контрольної проводжу додаткове заняття, де ми разом розбираємо складні теми.' },
  { tag: '7–9 класи', icon: '🐍', tone: 't-mint', title: 'Починаємо вивчати Python', text: 'Принесіть на урок зошит. Перші програми пишемо в кабінеті, тож вдома нічого встановлювати не потрібно.' },
  { tag: 'Усім', icon: '🛡️', tone: 't-butter', title: 'Безпечний інтернет', text: 'У розділі «Батькам» зібрано поради щодо налаштування приватності. Перегляньте їх разом із дітьми.' },
  { tag: 'Усім', icon: '📚', tone: 't-mint', title: 'Нові матеріали на сайті', text: 'У розділі «Навчальні матеріали» з’явилися календарно-тематичне планування, модельні програми та презентації. Користуйтеся фільтрами за класом і видом.' },
  { tag: '5–11 класи', icon: '⌨️', tone: 't-butter', title: 'Тренуємо друк наосліп', text: 'Достатньо 10 хвилин щодня на клавіатурному тренажері, і робота на комп’ютері піде значно швидше. Посилання є в розділі «Учням».' },
  { tag: '7–9 класи', icon: '🧩', tone: 't-mint', title: 'Задачі для цікавих', text: 'Для тих, хто хоче більшого: добірка задач підвищеної складності з Python та алгоритмів. Звертайтеся після уроків.' },
  { tag: 'Усім', icon: '🎓', wide: true, tone: 't-sage', title: 'Тиждень інформатики в школі', text: 'Готуємо вікторини, міні-змагання з програмування та виставку учнівських проєктів. Розклад і правила участі з’являться на цій дошці, тож слідкуйте за оголошеннями.' }
];

const PLAN = {
  '5': [
    'Цифрове середовище та безпека: інформація, дані, комп’ютер і його складові, операційна система, безпечна робота й екранний час',
    'Мережі й інтернет: локальна та глобальна мережа, браузер, пошук інформації, надійні паролі, авторське право',
    'Текстовий редактор: введення, форматування, списки, таблиці, схеми, підготовка до друку',
    'Об’єкти й моделі: властивості об’єктів, зв’язки між ними, карти знань',
    'Комп’ютерна графіка: растровий редактор, шари, робота з фрагментами та фото',
    'Алгоритми й програми: виконавці, лінійні, циклічні та розгалужені алгоритми, змінні',
    'Інтегрований проєкт: від ідеї до презентації'
  ],
  '6': [
    'Інформаційні процеси та системи, апаратна й програмна частини, ліцензії на програми, інформаційна гігієна',
    'Електронна пошта, хмарні сервіси, спільна робота над документами, цифровий слід і репутація',
    'Презентації: створення, анімація, виступ перед аудиторією',
    'Блог і відео: публікація контенту, простий відеофільм',
    'Дані й моделі: кодування, електронні таблиці, формули, діаграми, інфографіка, комп’ютерний експеримент',
    'Векторна графіка: об’єкти, групування, текст як графічний об’єкт',
    'Програмування: події, вкладені структури, поділ задачі на підзадачі, тестування й налагодження',
    'Інтегрований проєкт: командна робота та захист'
  ],
  '7': [
    'Персональний цифровий простір: домашня мережа, налаштування безпеки облікового запису, перевірка достовірності інформації',
    'Цифрове середовище для навчання та співпраці: операційні системи, браузери, хмарні сервіси, спільні документи, етикет спілкування',
    'Візуальний контент: кодування графіки, створення зображень і постерів, ліцензії, простий сайт-портфоліо',
    'Тексти та публікації: стилі, зміст, колонтитули, злиття, шаблони документів',
    'Графічне програмування: змінні, розгалуження, цикли, анімації, налагодження',
    'Медіа-дизайн: аудіо й відео, відеоподкаст, монтаж, перевірка маніпуляцій у медіа'
  ],
  '8': [
    'Продуктивність та безпека цифрового середовища: будова комп’ютера, операційна система, резервні копії, архіви, антивіруси',
    'Збір і опрацювання даних: опитування, очищення даних, функції в електронних таблицях, візуалізація, звіт про дослідження',
    'Алгоритми та їх коди: змінні, типи даних, умови, цикли, коментарі, пошук і виправлення помилок',
    'Проєктування графічного інтерфейсу: UI/UX, векторний редактор, прототип, відгуки користувачів',
    'Сайт та його верстка: HTML і CSS, форми, структура сайту, контроль версій, командна робота',
    'Стиль цифрового образу: бренд, фірмовий стиль, дизайн-мислення, контент-план'
  ],
  '9': [
    'Життя з розумними пристроями: інтернет речей, мікроконтролери, датчики, безпека й етика',
    'Впорядкування даних: бази даних, форми введення, сортування й фільтрація, прості запити SQL',
    'Тривимірне моделювання: моделі, 3D-сцени, матеріали й освітлення, підготовка до 3D-друку',
    'Програмні проєкти: масиви й списки, пошук і сортування, рядки, бібліотеки, тестування, хакатон',
    'Безпека цифрових систем: захист даних, шифрування, блокчейн, штучний інтелект, електронне урядування'
  ],
  '10': ['Алгоритми пошуку й сортування', 'Структури даних', 'Бази даних і запити', 'Комп’ютерні мережі', 'Командний проєкт'],
  '11': ['Кібербезпека й захист даних', 'Штучний інтелект: можливості та ризики', 'Веб-додатки', 'Підсумковий проєкт і захист']
};

const MATS = [
  { a: ['Учні', 'Викладачі'], c: '5–6', g: '5', t: 'Підручник', title: 'Інформатика, 5 клас', d: 'Підручник для 5 класу. Читайте прямо на сторінці.', pdf: 'pidrychnuku/pidrychnsk_5.pdf' },
  { a: ['Учні', 'Викладачі'], c: '5–6', g: '6', t: 'Підручник', title: 'Інформатика, 6 клас', d: 'Підручник для 6 класу. Читайте прямо на сторінці.', pdf: 'pidrychnuku/pidrychnik_6.pdf' },
  { a: ['Учні', 'Викладачі'], c: '7–9', g: '7', t: 'Підручник', title: 'Інформатика, 7 клас', d: 'Підручник для 7 класу. Читайте прямо на сторінці.', pdf: 'pidrychnuku/pidrychnik_7.pdf' },
  { a: ['Учні', 'Викладачі'], c: '7–9', g: '8', t: 'Підручник', title: 'Інформатика, 8 клас', d: 'Підручник для 8 класу. Читайте прямо на сторінці.', pdf: 'pidrychnuku/pidrychnik_8.pdf' },
  { a: ['Учні', 'Викладачі'], c: '7–9', g: '9', t: 'Підручник', title: 'Інформатика, 9 клас', d: 'Підручник для 9 класу. Читайте прямо на сторінці.', pdf: 'pidrychnuku/pidrychnik_9.pdf' },
  { a: ['Учні', 'Викладачі'], c: '10–11', g: '10–11', t: 'Підручник', title: 'Інформатика, 10–11 клас', d: 'Підручник для 10–11 класу. Читайте прямо на сторінці.', pdf: 'pidrychnuku/pidrychnik_10-11.pdf' },
  { a: ['Викладачі'], c: '5–6', t: 'КТП', title: 'Календарно-тематичне планування, 5–6 класи', d: 'Календарно-тематичне планування з інформатики для 5–6 класів.', pdf: 'KTP/calendar_5-6.pdf' },
  { a: ['Викладачі'], c: '7–9', t: 'КТП', title: 'Календарно-тематичне планування, 7–9 класи', d: 'Календарно-тематичне планування з інформатики для 7–9 класів.', pdf: 'KTP/calendar_7-9.pdf' },
  { a: ['Викладачі'], c: '5–6', t: 'Модельна програма', title: 'Модельна навчальна програма, 5–6 класи', d: 'Модельна навчальна програма з інформатики для 5–6 класів (Козак).', pdf: 'model/Inform.5-6.kl.Kozak.17.12.pdf' },
  { a: ['Викладачі'], c: '7–9', t: 'Модельна програма', title: 'Модельна навчальна програма, 7–9 класи', d: 'Модельна навчальна програма з інформатики для 7–9 класів (Пасічник та ін.).', pdf: 'model/Informatyka.7-9.kl.Pasichnyk.ta.in..pdf' },
  { a: ['Учні', 'Викладачі'], c: '5–6', t: 'Практична робота', title: 'Безпечна робота за комп’ютером', d: 'Правила в кабінеті, організація робочого місця, гімнастика для очей.', pdf: 'praktuchni/Безпечна робота за комп’ютером 5-6.pdf' },
  { a: ['Учні'], c: '5–6', t: 'Інтерактив', title: 'Перші алгоритми в Scratch', d: 'Рухаємо спрайт, вчимося повторювати дії й перевіряти умови.', url: 'https://scratch.mit.edu/' },
  { a: ['Учні'], c: '5–6', t: 'Презентація', title: 'Інформація та її властивості', d: 'Що таке інформація, як вона передається й зберігається.', ppt: 'present/Інформація та її властивості 5-6.pptx' },
  { a: ['Учні', 'Викладачі'], c: '7–9', t: 'Практична робота', title: 'Електронні таблиці: формули й діаграми', d: 'Рахуємо витрати класу та будуємо діаграму за результатами.', pdf: 'praktuchni/Електронні таблиці формули й діаграми 7-9.pdf' },
 { a: ['Учні'], c: '7–9', t: 'Тест', title: 'Комп’ютерні мережі й Інтернет', d: 'Десять запитань про IP-адреси, браузери та пошукові системи.', url: 'https://docs.google.com/forms/d/e/1FAIpQLScnWXo4nZZIXXmj2PXjKGmpp4DBjW3ssAGhbtiqCdH2fMv0EQ/viewform?usp=dialog' },
  { a: ['Учні'], c: '7–9', t: 'Інтерактив', title: 'Python для початківців', d: 'Змінні, умови й цикли. Офіційний посібник для самостійного читання.', url: 'https://docs.python.org/3/tutorial/' },
  { a: ['Учні'], c: '7–9', t: 'Презентація', title: 'Кібербезпека: паролі та фішинг', d: 'Як створити надійний пароль і розпізнати підозрілий лист.', ppt: 'present/Кібербезпека паролі та фішинг 7-9.pptx' },
  { a: ['Учні'], c: '7–9', t: 'Інтерактив', title: 'Година коду', d: 'Короткі ігрові завдання з програмування на вибір.', url: 'https://hourofcode.com/' },
  { a: ['Учні', 'Викладачі'], c: '10–11', t: 'Практична робота', title: 'Бази даних: таблиці й запити', d: 'Проєктуємо просту базу й складаємо перші запити.', pdf: 'praktuchni/Бази даних таблиці й запити 10-11.pdf' },
  { a: ['Учні'], c: '10–11', t: 'Презентація', title: 'Алгоритми пошуку й сортування', d: 'Лінійний і двійковий пошук, сортування обміном.', ppt: 'present/Алгоритми пошуку й сортування 10-11.pptx' },
  { a: ['Учні'], c: '10–11', t: 'Тест', title: 'Штучний інтелект: можливості й ризики', d: 'Як працюють сучасні моделі та як перевіряти їхні відповіді.', url: 'https://docs.google.com/forms/d/e/1FAIpQLScQVnXiSHn-PFZJ3s-qWRipnpop8hz_e9lX2ywrrqmBIsQR-w/viewform?usp=publish-editor' }
];

const FACTS = [
  { q: 'Скільки бітів в одному байті?', o: ['4', '8', '16'], a: 1, w: 'У байті 8 бітів, тому один байт може мати 256 різних значень.' },
  { q: 'Яка мова програмування названа на честь комедійного шоу?', o: ['Python', 'Java', 'Scratch'], a: 0, w: 'Створювач Python любив шоу «Літаючий цирк Монті Пайтона».' },
  { q: 'Що означає абревіатура CPU?', o: ['Пам’ять', 'Процесор', 'Відеокарта'], a: 1, w: 'CPU (Central Processing Unit) — центральний процесор, «мозок» комп’ютера.' },
  { q: 'Що таке IP-адреса?', o: ['Пароль для входу в мережу', 'Унікальний числовий ідентифікатор пристрою в мережі', 'Назва веб-сайту'], a: 1, w: 'IP-адреса — це унікальний числовий ідентифікатор пристрою в мережі, за яким інші пристрої можуть його знайти й обмінюватися з ним даними. Наприклад: 192.168.0.1 (IPv4).' }
];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)]; const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));  /* Підстановка даних сайту */ $$('[data-fill]').forEach(el => { el.textContent = SITE[el.dataset.fill] || ''; });
if ($('#year')) $('#year').textContent = new Date().getFullYear();
if ($('#initials')) $('#initials').textContent = SITE.name.split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();

/* Оголошення на головній: дошка з фільтром за міткою */
if ($('#news')) {
  const MON = ['січ.', 'лют.', 'бер.', 'квіт.', 'трав.', 'черв.', 'лип.', 'серп.', 'вер.', 'жовт.', 'лист.', 'груд.'];
  const TONES = ['t-sage', 't-mint', 't-butter'];
  const tags = ['Усі', ...new Set(NEWS.map(n => n.tag))];
  let curTag = 'Усі';
  function renderNews() {
    const tagsEl = $('#newsTags');
    if (tagsEl) tagsEl.innerHTML = tags.map(t => `<button class="chip" type="button" data-tag="${esc(t)}" aria-pressed="${curTag === t}">${esc(t)}</button>`).join('');
    const list = NEWS.filter(n => curTag === 'Усі' || n.tag === curTag).sort((x, y) => (y.pin ? 1 : 0) - (x.pin ? 1 : 0));
    $('#news').innerHTML = list.length ? list.map((n, i) => {
      let when = '', isNew = false;
      if (n.date) {
        const d = new Date(n.date + 'T00:00:00');
        if (!isNaN(d)) {
          when = `<time class="note-date" datetime="${esc(n.date)}">${d.getDate()} ${MON[d.getMonth()]} ${d.getFullYear()}</time>`;
          const age = (Date.now() - d.getTime()) / 86400000;
          isNew = age >= 0 && age <= 7;
        }
      }
      return `<article class="note ${n.tone || TONES[i % TONES.length]}${n.pin ? ' pin' : ''}${n.wide ? ' wide' : ''}">
        <div class="note-top"><span class="note-ico" aria-hidden="true">${esc(n.icon || '📣')}</span><span class="tag">${esc(n.tag)}</span>${n.pin ? '<span class="badge">📌 Важливо</span>' : ''}${isNew ? '<span class="badge">Нове</span>' : ''}</div>
        <h4>${esc(n.title)}</h4><p>${esc(n.text)}</p>${when}
      </article>`;
    }).join('') : '<div class="empty">За цією міткою оголошень поки немає.</div>';
  }
  const tagsHost = $('#newsTags');
  if (tagsHost) tagsHost.addEventListener('click', e => {
    const b = e.target.closest('[data-tag]');
    if (!b) return;
    curTag = b.dataset.tag;
    renderNews();
  });
  renderNews();
}

/* Перемикання світлої/темної теми */
const root = document.documentElement;
const themeBtn = $('#theme');
function isDark() {
  const t = root.dataset.theme;
  return t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
}
const ICON_SUN = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
const ICON_MOON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
function themeLabel() {
  if (!themeBtn) return;
  const dark = isDark();
  themeBtn.innerHTML = dark ? ICON_SUN : ICON_MOON;
  themeBtn.setAttribute('aria-label', dark ? 'Увімкнути світлу тему' : 'Увімкнути темну тему');
  themeBtn.title = dark ? 'Світла тема' : 'Темна тема';
}
try { const saved = localStorage.getItem('theme'); if (saved) root.dataset.theme = saved; } catch (e) {}
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    themeLabel();
  });
  themeLabel();
}

/* Учням: плани за класами */
const gradesEl = $('#grades');
if (gradesEl) {
  let grade = '5';
  function renderGrades() {
    gradesEl.innerHTML = Object.keys(PLAN).map(g => `<button class="chip" type="button" data-g="${g}" aria-pressed="${g === grade}">${g} клас</button>`).join('');
    if ($('#topics')) $('#topics').innerHTML = PLAN[grade].map(t => `<li>${esc(t)}</li>`).join('');
  }
  gradesEl.addEventListener('click', e => {
    const b = e.target.closest('[data-g]');
    if (!b) return;
    grade = b.dataset.g;
    renderGrades();
  });
  renderGrades();
}

/* Матеріали: фільтри */
if ($('.filters')) {
  const classes = ['Усі', '5–6', '7–9', '10–11'];
  const types = ['Усі', ...new Set(MATS.map(m => m.t))];
  const auds = ['Усі', 'Учні', 'Викладачі'];
  const filt = { c: 'Усі', t: 'Усі', a: 'Усі' };
  function renderMats() {
    $('#fClass').innerHTML = classes.map(c => `<button class="chip" type="button" data-k="c" data-v="${esc(c)}" aria-pressed="${filt.c === c}">${esc(c)}</button>`).join('');
    $('#fType').innerHTML = types.map(t => `<button class="chip" type="button" data-k="t" data-v="${esc(t)}" aria-pressed="${filt.t === t}">${esc(t)}</button>`).join('');
    $('#fAud').innerHTML = auds.map(a => `<button class="chip" type="button" data-k="a" data-v="${esc(a)}" aria-pressed="${filt.a === a}">${esc(a)}</button>`).join('');
    const list = MATS.filter(m => (filt.c === 'Усі' || m.c === filt.c) && (filt.t === 'Усі' || m.t === filt.t) && (filt.a === 'Усі' || m.a.includes(filt.a)));
    $('#count').textContent = `Знайдено матеріалів: ${list.length}`;
    $('#mats').innerHTML = list.length ? list.map(m => `
      <article class="card mat">
        <div class="meta"><span class="pill">${esc(m.g || m.c)} кл.</span><span class="pill alt">${esc(m.t)}</span></div>
        <h4>${esc(m.title)}</h4>
        <p>${esc(m.d)}</p>
        <div class="act">${m.pdf ? `<button class="btn fill" type="button" data-pdf="${esc(m.pdf)}" data-title="${esc(m.title)}">Читати</button>` : m.ppt ? `<button class="btn fill" type="button" data-ppt="${esc(m.ppt)}" data-title="${esc(m.title)}">Дивитись</button> <a class="btn line" href="${esc(encodeURI(m.ppt))}" download>Завантажити</a>` : m.url ? `<a class="btn fill" href="${esc(m.url)}" target="_blank" rel="noopener">Відкрити</a>` : `<span class="soon">Матеріал додається</span>`}</div>
      </article>`).join('') : `<div class="empty">За цими фільтрами матеріалів поки немає. Спробуйте змінити клас, вид або аудиторію.</div>`;
  }
  $('.filters').addEventListener('click', e => {
    const b = e.target.closest('[data-k]');
    if (!b) return;
    filt[b.dataset.k] = b.dataset.v;
    renderMats();
  });
  renderMats();

  /* Перегляд підручників (PDF) на сторінці */
  const pv = document.createElement('dialog');
  pv.className = 'pdfv';
  pv.setAttribute('aria-label', 'Перегляд матеріалу');
  pv.innerHTML =
    '<div class="pdfv-in"><div class="pdfv-bar"><h3 class="pdfv-t"></h3>' +
    '<a class="btn line pdfv-open" target="_blank" rel="noopener">Відкрити окремо</a>' +
    '<button type="button" class="pdfv-x" aria-label="Закрити"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>' +
    '<iframe class="pdfv-frame" title="Матеріал"></iframe></div>';
  document.body.append(pv);
  const pvFrame = $('.pdfv-frame', pv);
  $('#mats').addEventListener('click', e => {
    const b = e.target.closest('[data-pdf],[data-ppt]');
    if (!b) return;
    $('.pdfv-t', pv).textContent = b.dataset.title;
    if (b.dataset.ppt) {
      /* Презентації PowerPoint показуємо через онлайн-переглядач Microsoft */
      const abs = encodeURIComponent(new URL(b.dataset.ppt, location.href).href);
      $('.pdfv-open', pv).href = 'https://view.officeapps.live.com/op/view.aspx?src=' + abs;
      pvFrame.src = 'https://view.officeapps.live.com/op/embed.aspx?src=' + abs;
    } else {
      $('.pdfv-open', pv).href = encodeURI(b.dataset.pdf);
      pvFrame.src = encodeURI(b.dataset.pdf);
    }
    document.documentElement.style.overflow = 'hidden';
    pv.showModal();
  });
  pv.addEventListener('close', () => { pvFrame.src = 'about:blank'; document.documentElement.style.overflow = ''; });
  $('.pdfv-x', pv).addEventListener('click', () => pv.close());
  pv.addEventListener('click', e => { if (e.target === pv) pv.close(); });
}

/* Допомога: копіювання пошти */
if ($('#copy')) {
  $('#copy').addEventListener('click', async () => {
    const note = $('#copied');
    try {
      await navigator.clipboard.writeText(SITE.email);
      note.textContent = 'Адресу скопійовано.';
    } catch (e) {
      const r = document.createRange();
      r.selectNodeContents($('#mail'));
      const s = getSelection();
      s.removeAllRanges();
      s.addRange(r);
      note.textContent = 'Адресу виділено, скопіюйте її вручну.';
    }
  });
}

/* Цікавинки: двійковий перекладач */
if ($('#num') && $('#txt')) {
  function numToBin() {
    const raw = $('#num').value.trim();
    const out = $('#numOut');
    if (!/^\d+$/.test(raw)) { out.textContent = raw ? 'Введіть ціле невід’ємне число.' : ''; return; }
    const n = Number(raw);
    if (!Number.isSafeInteger(n)) { out.textContent = 'Число занадто велике.'; return; }
    out.textContent = n.toString(2);
  }
  function txtToBin() {
    const raw = $('#txt').value.slice(0, 40);
    const bytes = new TextEncoder().encode(raw);
    $('#txtOut').textContent = [...bytes].map(b => b.toString(2).padStart(8, '0')).join(' ');
  }
  function binToNum() {
    const raw = $('#bin').value.replace(/\s/g, '');
    const out = $('#binOut');
    if (!/^[01]+$/.test(raw)) { out.textContent = raw ? 'Використовуйте лише цифри 0 і 1.' : ''; return; }
    if (raw.length > 52) { out.textContent = 'Число занадто велике.'; return; }
    out.textContent = parseInt(raw, 2);
  }
  if ($('#bin')) { $('#bin').addEventListener('input', binToNum); binToNum(); }
  $('#num').addEventListener('input', numToBin);
  $('#txt').addEventListener('input', txtToBin);
  numToBin(); txtToBin();
}

/* Цікавинки: вікторина з прогресом */
if ($('#quiz')) {
  let correct = 0, answered = 0;
  function buildQuiz() {
    correct = 0; answered = 0;
    $('#score').innerHTML = '';
    $('#quiz').innerHTML = FACTS.map((f, i) => `
    <div class="q" data-i="${i}">
      <p><span class="qn">${i + 1}</span>${esc(f.q)}</p>
      <div class="opts">${f.o.map((o, j) => `<button class="opt" type="button" data-j="${j}">${esc(o)}</button>`).join('')}</div>
      <div class="why" aria-live="polite"></div>
    </div>`).join('');
  }
  buildQuiz();
  $('#quiz').addEventListener('click', e => {
    const b = e.target.closest('.opt'); if (!b) return;
    const q = b.closest('.q'); const f = FACTS[+q.dataset.i]; const j = +b.dataset.j;
    $$('.opt', q).forEach((o, k) => { o.disabled = true; if (k === f.a) o.classList.add('right'); });
    if (j !== f.a) b.classList.add('wrong');
    $('.why', q).textContent = (j === f.a ? 'Правильно. ' : 'Не зовсім. ') + f.w;
    answered++; if (j === f.a) correct++;
    if (answered === FACTS.length) {
      $('#score').innerHTML = `Результат: ${correct} із ${FACTS.length}${correct === FACTS.length ? ' 🎉' : ''} <button class="btn line" id="again" type="button">Ще раз</button>`;
      $('#again').addEventListener('click', buildQuiz);
    }
  });
}

/* Плавна поява блоків */
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }), { threshold: 0.08 });
  $$('.page > .block, .page > .split').forEach(el => { el.classList.add('reveal'); io.observe(el); });
}

/* Сертифікати: галерея з перемиканням */
(function certs() {
  const root = document.getElementById('certs');
  if (!root) return;
  const wrap = root.querySelector('.cslides');
  const slides = Array.from(wrap.querySelectorAll('.cslide'));
  if (slides.length < 2) return;
  root.classList.add('js');

  const stage = document.createElement('div');
  stage.className = 'cstage';
  root.insertBefore(stage, wrap);
  stage.append(wrap);

  const arrow = (cls, label, d) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'cnav ' + cls;
    b.setAttribute('aria-label', label);
    b.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + d + '"/></svg>';
    return b;
  };
  const prev = arrow('prev', 'Попередній сертифікат', 'M15 5l-7 7 7 7');
  const next = arrow('next', 'Наступний сертифікат', 'M9 5l7 7-7 7');
  stage.append(prev, next);

  const bar = document.createElement('div');
  bar.className = 'cbar';
  const dots = document.createElement('div');
  dots.className = 'cdots';
  const cnt = document.createElement('span');
  cnt.className = 'cnt';
  cnt.setAttribute('aria-hidden', 'true');
  bar.append(dots, cnt);
  const cap = document.createElement('div');
  cap.className = 'ccap';
  cap.setAttribute('aria-live', 'polite');
  root.append(bar, cap);

  let i = 0;
  slides.forEach((s, k) => {
    const d = document.createElement('button');
    d.type = 'button';
    d.className = 'dot';
    d.setAttribute('aria-label', 'Сертифікат ' + (k + 1) + ' з ' + slides.length);
    d.addEventListener('click', () => go(k));
    dots.append(d);
  });

  function go(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => { s.hidden = k !== i; });
    Array.from(dots.children).forEach((d, k) => d.setAttribute('aria-current', k === i ? 'true' : 'false'));
    cnt.textContent = (i + 1) + ' / ' + slides.length;
    cap.innerHTML = slides[i].querySelector('figcaption').innerHTML;
    if (lb.open) fillLb();
    [slides[(i + 1) % slides.length], slides[(i - 1 + slides.length) % slides.length]].forEach(s => {
      const im = s.querySelector('img');
      if (im) im.loading = 'eager';
    });
  }

  prev.addEventListener('click', () => go(i - 1));
  next.addEventListener('click', () => go(i + 1));
  root.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(i - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(i + 1); }
  });

  let x0 = null, swiped = false;
  stage.addEventListener('pointerdown', e => { x0 = e.clientX; swiped = false; });
  stage.addEventListener('pointerup', e => {
    if (x0 === null) return;
    const dx = e.clientX - x0;
    x0 = null;
    if (Math.abs(dx) > 50) { swiped = true; go(dx < 0 ? i + 1 : i - 1); }
  });
  stage.addEventListener('pointercancel', () => { x0 = null; });
  stage.addEventListener('click', e => {
    if (swiped) { e.preventDefault(); swiped = false; return; }
    if (e.target.closest('a')) { e.preventDefault(); openLb(); }
  });

  /* Збільшений перегляд на сторінці */
  const lb = document.createElement('dialog');
  lb.className = 'clb';
  lb.setAttribute('aria-label', 'Сертифікат на весь розмір');
  lb.innerHTML =
    '<div class="clb-in">' +
    '<button type="button" class="clb-x" aria-label="Закрити"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>' +
    '<button type="button" class="cnav prev" aria-label="Попередній сертифікат"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></button>' +
    '<button type="button" class="cnav next" aria-label="Наступний сертифікат"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button>' +
    '<img alt=""><p class="clb-cap"></p></div>';
  document.body.append(lb);
  const lbImg = lb.querySelector('img');
  const lbCap = lb.querySelector('.clb-cap');

  function fillLb() {
    const im = slides[i].querySelector('img');
    lbImg.src = im.currentSrc || im.src;
    lbImg.alt = im.alt;
    lbCap.textContent = slides[i].querySelector('h4').textContent;
  }
  function openLb() {
    fillLb();
    document.documentElement.style.overflow = 'hidden';
    lb.showModal();
  }
  lb.addEventListener('close', () => { document.documentElement.style.overflow = ''; });
  lb.querySelector('.clb-x').addEventListener('click', () => lb.close());
  lb.querySelector('.prev').addEventListener('click', () => go(i - 1));
  lb.querySelector('.next').addEventListener('click', () => go(i + 1));
  lb.addEventListener('click', e => {
    if (e.target === lb || e.target.classList.contains('clb-in')) lb.close();
  });
  lb.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(i - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(i + 1); }
  });

  go(0);
})();
