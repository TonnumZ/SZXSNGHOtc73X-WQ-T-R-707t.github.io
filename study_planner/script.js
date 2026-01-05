/**
 * Smart Study Planner - Engineering Portfolio Project
 * 
 * CORE ALGORITHM: Greedy Interval Scheduling
 * --------------------------------------------
 * Problem: Select maximum number of mutually compatible study sessions.
 * Approach: 
 * 1. Sort all requested subjects by Earliest Finish Time.
 * 2. Iterate through sorted list.
 * 3. Select subject if it acts compatible with last selected subject.
 * 
 * Time Complexity: O(N log N) - Dominated by the sort operation.
 * Space Complexity: O(N) - Storing the list of subjects.
 */

const translations = {
    en: {
        appTitle: 'Smart Study Planner <span class="badge">ALGORITHM: GREEDY/INTERVAL</span>',
        subtitle: 'Computer Engineering Portfolio // Automated Conflict Resolution',
        panelInput: '// INPUT_STREAM',
        labelSubject: 'Subject Name',
        labelDay: 'Day',
        labelStart: 'Start Time',
        labelEnd: 'End Time',
        btnAdd: 'ADD TO QUEUE',
        panelQueue: '// RAW_QUEUE',
        emptyQueue: 'No subjects in queue',
        btnRun: 'RUN EXECUTION (GREEDY)',
        btnClear: 'FLUSH MEMORY',
        panelLog: '// SYSTEM_LOG & ALGORITHM EXPLANATION',
        logInit: 'System ready. Waiting for input...',
        panelOutput: '// OPTIMIZED_SCHEDULE_OUTPUT',
        dayMon: 'Monday', dayTue: 'Tuesday', dayWed: 'Wednesday', dayThu: 'Thursday', dayFri: 'Friday', daySat: 'Saturday', daySun: 'Sunday',
        dayMonShort: 'MON', dayTueShort: 'TUE', dayWedShort: 'WED', dayThuShort: 'THU', dayFriShort: 'FRI', daySatShort: 'SAT', daySunShort: 'SUN',
        logAdded: 'Added [{name}] to queue.',
        logExecStart: 'EXECUTION STARTED: Greedy Schedule',
        logAccepted: '[ACCEPTED] {day}: {name} ({start}-{end})',
        logRejected: '[REJECTED] {day}: {name} (Conflict)',
        logComplete: 'EXECUTION COMPLETE. Scheduled: {sch} | Rejected: {rej}',
        logDeleted: 'Deleted Item ID: {id}',
        logFlushed: 'MEMORY FLUSHED.',
        alertInvalid: 'Invalid Time: Start time must be before end time.',
        confirmFlush: 'Flush all memory? This cannot be undone.',
        itemsCount: '{count} items'
    },
    th: {
        appTitle: 'ตารางเรียนอัจฉริยะ <span class="badge">อัลกอริทึม: GREEDY</span>',
        subtitle: 'พอร์ตโฟลิโอวิศวกรรมคอมพิวเตอร์ // การจัดตารางอัตโนมัติ',
        panelInput: '// ข้อมูลนำเข้า',
        labelSubject: 'ชื่อวิชา',
        labelDay: 'วัน',
        labelStart: 'เวลาเริ่ม',
        labelEnd: 'เวลาจบ',
        btnAdd: 'เพิ่มในคิว',
        panelQueue: '// คิวรายวิชา',
        emptyQueue: 'ไม่มีวิชาในคิว',
        btnRun: 'ประมวลผล (GREEDY)',
        btnClear: 'ล้างข้อมูล',
        panelLog: '// บันทึกระบบ & คำอธิบาย',
        logInit: 'ระบบพร้อม. รอข้อมูล...',
        panelOutput: '// ตารางเรียนที่จัดแล้ว',
        dayMon: 'วันจันทร์', dayTue: 'วันอังคาร', dayWed: 'วันพุธ', dayThu: 'วันพฤหัสบดี', dayFri: 'วันศุกร์', daySat: 'วันเสาร์', daySun: 'วันอาทิตย์',
        dayMonShort: 'จ.', dayTueShort: 'อ.', dayWedShort: 'พ.', dayThuShort: 'พฤ.', dayFriShort: 'ศ.', daySatShort: 'ส.', daySunShort: 'อา.',
        logAdded: 'เพิ่ม [{name}] ลงในคิว',
        logExecStart: 'เริ่มการประมวลผล: Greedy Schedule',
        logAccepted: '[ยอมรับ] {day}: {name} ({start}-{end})',
        logRejected: '[ปฏิเสธ] {day}: {name} (ชนกัน)',
        logComplete: 'เสร็จสิ้น. จัดได้: {sch} | ปฏิเสธ: {rej}',
        logDeleted: 'ลบรายการ ID: {id}',
        logFlushed: 'ล้างหน่วยความจำแล้ว',
        alertInvalid: 'เวลาไม่ถูกต้อง: เวลาเริ่มต้องมาก่อนเวลาจบ',
        confirmFlush: 'ล้างข้อมูลทั้งหมด? ไม่สามารถกู้คืนได้',
        itemsCount: '{count} รายการ'
    },
    es: {
        appTitle: 'Planificador Inteligente <span class="badge">ALGORITMO: VORAZ/INTERVALO</span>',
        subtitle: 'Portafolio de Ingeniería // Resolución Automática de Conflictos',
        panelInput: '// FLUJO_DE_ENTRADA',
        labelSubject: 'Nombre de Asignatura',
        labelDay: 'Día',
        labelStart: 'Inicio',
        labelEnd: 'Fin',
        btnAdd: 'AÑADIR A COLA',
        panelQueue: '// COLA_BRUTA',
        emptyQueue: 'Sin asignaturas en cola',
        btnRun: 'EJECUTAR (VORAZ)',
        btnClear: 'BORRAR MEMORIA',
        panelLog: '// LOG_SISTEMA & EXPLICACIÓN',
        logInit: 'Sistema listo. Esperando entrada...',
        panelOutput: '// HORARIO_OPTIMIZADO',
        dayMon: 'Lunes', dayTue: 'Martes', dayWed: 'Miércoles', dayThu: 'Jueves', dayFri: 'Viernes', daySat: 'Sábado', daySun: 'Domingo',
        dayMonShort: 'LUN', dayTueShort: 'MAR', dayWedShort: 'MIE', dayThuShort: 'JUE', dayFriShort: 'VIE', daySatShort: 'SAB', daySunShort: 'DOM',
        logAdded: 'Añadido [{name}] a la cola.',
        logExecStart: 'EJECUCIÓN INICIADA: Planificador Voraz',
        logAccepted: '[ACEPTADO] {day}: {name} ({start}-{end})',
        logRejected: '[RECHAZADO] {day}: {name} (Conflicto)',
        logComplete: 'EJECUCIÓN COMPLETA. Programados: {sch} | Rechazados: {rej}',
        logDeleted: 'Item Eliminado ID: {id}',
        logFlushed: 'MEMORIA BORRADA.',
        alertInvalid: 'Tiempo Inválido: Inicio debe ser antes del fin.',
        confirmFlush: '¿Borrar toda la memoria? No se puede deshacer.',
        itemsCount: '{count} items'
    },
    fr: {
        appTitle: 'Planificateur Intelligent <span class="badge">ALGO: GLOUTON/INTERVALLE</span>',
        subtitle: 'Portfolio Ingénierie // Résolution de Conflits',
        panelInput: '// FLUX_ENTREE',
        labelSubject: 'Matière',
        labelDay: 'Jour',
        labelStart: 'Début',
        labelEnd: 'Fin',
        btnAdd: 'AJOUTER FILE',
        panelQueue: '// FILE_BRUTE',
        emptyQueue: 'Aucun sujet',
        btnRun: 'EXECUTER (GLOUTON)',
        btnClear: 'VIDER MEMOIRE',
        panelLog: '// JOURNAL_SYSTEME',
        logInit: 'Système prêt. Attente...',
        panelOutput: '// EMPLOI_DU_TEMPS_OPTIMISE',
        dayMon: 'Lundi', dayTue: 'Mardi', dayWed: 'Mercredi', dayThu: 'Jeudi', dayFri: 'Vendredi', daySat: 'Samedi', daySun: 'Dimanche',
        dayMonShort: 'LUN', dayTueShort: 'MAR', dayWedShort: 'MER', dayThuShort: 'JEU', dayFriShort: 'VEN', daySatShort: 'SAM', daySunShort: 'DIM',
        logAdded: 'Ajouté [{name}] à la file.',
        logExecStart: 'EXECUTION: Planification Gloutonne',
        logAccepted: '[ACCEPTE] {day}: {name} ({start}-{end})',
        logRejected: '[REJETE] {day}: {name} (Conflit)',
        logComplete: 'TERMINE. Prévu: {sch} | Rejeté: {rej}',
        logDeleted: 'Supprimé ID: {id}',
        logFlushed: 'MEMOIRE VIDE.',
        alertInvalid: 'Invalide: Début doit être avant Fin.',
        confirmFlush: 'Vider la mémoire? Irréversible.',
        itemsCount: '{count} éléments'
    },
    de: {
        appTitle: 'Smarter Studienplaner <span class="badge">ALGO: GREEDY/INTERVALL</span>',
        subtitle: 'Ingenieur-Portfolio // Auto-Konfliktlösung',
        panelInput: '// EINGABE_STREAM',
        labelSubject: 'Fach',
        labelDay: 'Tag',
        labelStart: 'Start',
        labelEnd: 'Ende',
        btnAdd: 'IN WARTESCHLANGE',
        panelQueue: '// ROH_WARTESCHLANGE',
        emptyQueue: 'Keine Fächer',
        btnRun: 'AUSFÜHREN (GREEDY)',
        btnClear: 'SPEICHER LEEREN',
        panelLog: '// SYSTEM_LOG',
        logInit: 'System bereit. Warte...',
        panelOutput: '// OPTIMIERTER_PLAN',
        dayMon: 'Montag', dayTue: 'Dienstag', dayWed: 'Mittwoch', dayThu: 'Donnerstag', dayFri: 'Freitag', daySat: 'Samstag', daySun: 'Sonntag',
        dayMonShort: 'MO', dayTueShort: 'DI', dayWedShort: 'MI', dayThuShort: 'DO', dayFriShort: 'FR', daySatShort: 'SA', daySunShort: 'SO',
        logAdded: '[{name}] zur Warteschlange hinzugefügt.',
        logExecStart: 'AUSFÜHRUNG GESTARTET: Greedy',
        logAccepted: '[AKZEPTIERT] {day}: {name} ({start}-{end})',
        logRejected: '[ABGELEHNT] {day}: {name} (Konflikt)',
        logComplete: 'FERTIG. Geplant: {sch} | Abgelehnt: {rej}',
        logDeleted: 'Gelöscht ID: {id}',
        logFlushed: 'SPEICHER GELEERT.',
        alertInvalid: 'Ungültig: Start muss vor Ende sein.',
        confirmFlush: 'Alles löschen? Kann nicht rückgängig gemacht werden.',
        itemsCount: '{count} Elemente'
    }
};

class StudyPlanner {
    constructor() {
        // State
        this.rawSubjects = JSON.parse(localStorage.getItem('rawSubjects')) || [];
        this.currentLang = localStorage.getItem('lang') || 'en';
        this.currentTheme = localStorage.getItem('theme') || 'default';

        // DOM Elements
        this.form = document.getElementById('add-subject-form');
        this.rawListEl = document.getElementById('raw-list');
        this.logEl = document.getElementById('system-log');
        this.timetableEl = document.getElementById('weekly-timetable');
        this.queueCountEl = document.getElementById('queue-count');
        this.langSelector = document.getElementById('lang-selector');
        this.themeSelector = document.getElementById('theme-selector');

        // Binds
        this.addSubject = this.addSubject.bind(this);
        this.runScheduler = this.runScheduler.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.changeLanguage = this.changeLanguage.bind(this);
        this.changeTheme = this.changeTheme.bind(this);

        this.init();
    }

    init() {
        this.form.addEventListener('submit', this.addSubject);
        document.getElementById('btn-schedule').addEventListener('click', this.runScheduler);
        document.getElementById('btn-clear').addEventListener('click', this.clearAll);
        this.langSelector.addEventListener('change', (e) => this.changeLanguage(e.target.value));
        this.themeSelector.addEventListener('change', (e) => this.changeTheme(e.target.value));

        // Set initial state
        this.langSelector.value = this.currentLang;
        this.themeSelector.value = this.currentTheme;

        this.applyLanguage(this.currentLang);
        this.applyTheme(this.currentTheme);

        this.renderRawList();
        this.log(this.t('logInit'), 'system-msg');
    }

    t(key, params = {}) {
        let text = translations[this.currentLang][key] || key;
        for (const [k, v] of Object.entries(params)) {
            text = text.replace(`{${k}}`, v);
        }
        return text;
    }

    changeLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('lang', lang);
        this.applyLanguage(lang);
        this.renderRawList();
    }

    changeTheme(theme) {
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
        this.applyTheme(theme);
    }

    applyTheme(theme) {
        if (theme === 'default') {
            document.body.removeAttribute('data-theme');
        } else {
            document.body.setAttribute('data-theme', theme);
        }
    }

    applyLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
                // Using innerHTML to support span badges
            }
        });

        // Update placeholders
        document.getElementById('subject').placeholder = lang === 'es' ? 'ej. Estructuras de Datos' : 'e.g. Data Structures';
    }

    addSubject(e) {
        e.preventDefault();

        const name = document.getElementById('subject').value;
        const day = document.getElementById('day').value;
        const start = document.getElementById('start-time').value;
        const end = document.getElementById('end-time').value;

        if (start >= end) {
            alert(this.t('alertInvalid'));
            return;
        }

        const newSubject = {
            id: Date.now(),
            name,
            day,
            start,
            end
        };

        this.rawSubjects.push(newSubject);
        this.save();
        this.renderRawList();
        this.form.reset();
        this.log(this.t('logAdded', { name }), 'info-msg');
    }

    runScheduler() {
        this.log('--------------------------------');
        this.log(this.t('logExecStart'), 'info-msg');

        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const schedule = {};
        const rejected = [];

        days.forEach(day => {
            const daySubjects = this.rawSubjects.filter(s => s.day === day);
            daySubjects.sort((a, b) => this.timeToMin(a.end) - this.timeToMin(b.end));

            const selectedForDay = [];
            let lastEndTime = -1;

            daySubjects.forEach(sub => {
                const startMin = this.timeToMin(sub.start);
                const endMin = this.timeToMin(sub.end);

                // Translate day for log
                // "dayMon" etc mapping
                const dayKey = 'day' + sub.day.substring(0, 3);
                const dayTrans = this.t(dayKey);

                if (startMin >= lastEndTime) {
                    selectedForDay.push(sub);
                    lastEndTime = endMin;
                    this.log(this.t('logAccepted', { day: dayTrans, name: sub.name, start: sub.start, end: sub.end }), 'success');
                } else {
                    rejected.push(sub);
                    this.log(this.t('logRejected', { day: dayTrans, name: sub.name }), 'error');
                }
            });

            schedule[day] = selectedForDay;
        });

        this.log(this.t('logComplete', { sch: this.rawSubjects.length - rejected.length, rej: rejected.length }), 'system-msg');
        this.renderTimetable(schedule);
    }

    renderTimetable(schedule) {
        document.querySelectorAll('.slots').forEach(el => el.innerHTML = '');

        for (const [day, subjects] of Object.entries(schedule)) {
            const dayCol = document.querySelector(`.day-col[data-day="${day}"] .slots`);
            if (!dayCol) continue;

            subjects.forEach(sub => {
                const el = document.createElement('div');
                el.className = 'slot-card';
                el.innerHTML = `
                    <strong>${sub.name}</strong>
                    <span>${sub.start} - ${sub.end}</span>
                `;
                dayCol.appendChild(el);
            });
        }
    }

    renderRawList() {
        this.rawListEl.innerHTML = '';
        this.queueCountEl.textContent = this.t('itemsCount', { count: this.rawSubjects.length });

        if (this.rawSubjects.length === 0) {
            this.rawListEl.innerHTML = `<div class="empty-state">${this.t('emptyQueue')}</div>`;
            return;
        }

        this.rawSubjects.forEach(sub => {
            // Translate day name for display
            const dayKey = 'day' + sub.day.substring(0, 3);
            const dayName = this.t(dayKey);

            const div = document.createElement('div');
            div.className = 'list-item';
            div.innerHTML = `
                <div class="list-item-details">
                    <strong>${sub.name}</strong>
                    <span class="item-time">${dayName} | ${sub.start} - ${sub.end}</span>
                </div>
                <button class="btn-danger" style="padding: 0.2rem 0.5rem; font-size: 0.7rem;" onclick="app.deleteSubject(${sub.id})">DEL</button>
            `;
            this.rawListEl.appendChild(div);
        });
    }

    deleteSubject(id) {
        this.rawSubjects = this.rawSubjects.filter(s => s.id !== id);
        this.save();
        this.renderRawList();
        this.log(this.t('logDeleted', { id }), 'error');
    }

    clearAll() {
        if (confirm(this.t('confirmFlush'))) {
            this.rawSubjects = [];
            this.save();
            this.renderRawList();
            document.querySelectorAll('.slots').forEach(el => el.innerHTML = '');
            this.log(this.t('logFlushed'), 'error');
        }
    }

    save() {
        localStorage.setItem('rawSubjects', JSON.stringify(this.rawSubjects));
    }

    log(msg, type = '') {
        const entry = document.createElement('div');
        entry.className = `log-entry ${type}`;
        const time = new Date().toLocaleTimeString('en-US', { hour12: false });
        entry.innerHTML = `<span class="timestamp">[${time}]</span> <span class="msg">${msg}</span>`;
        this.logEl.prepend(entry);
    }

    timeToMin(timeStr) {
        const [h, m] = timeStr.split(':').map(Number);
        return h * 60 + m;
    }
}

// Initialize App
// Initialize App
const app = new StudyPlanner();
// ChatBot Class
class ChatBot {
    constructor(plannerApp) {
        this.app = plannerApp;
        this.isOpen = false;

        // State for API
        this.apiUrl = localStorage.getItem('chat_apiUrl') || 'https://openrouter.ai/api/v1/chat/completions';
        this.apiKey = localStorage.getItem('chat_apiKey') || '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';
        this.apiModel = localStorage.getItem('chat_apiModel') || 'deepseek/deepseek-r1-0528:free';

        // DOM
        this.widget = document.getElementById('chat-widget');
        this.toggleBtn = document.getElementById('chat-toggle-btn');
        this.window = document.getElementById('chat-window');
        this.closeBtn = document.getElementById('chat-close-btn');
        this.messagesEl = document.getElementById('chat-messages');
        this.form = document.getElementById('chat-form');
        this.input = document.getElementById('chat-input');

        // Settings DOM
        this.settingsBtn = document.getElementById('chat-settings-btn');
        this.settingsPanel = document.getElementById('chat-settings-panel');
        this.saveSettingsBtn = document.getElementById('save-settings-btn');
        this.cancelSettingsBtn = document.getElementById('cancel-settings-btn');
        this.inputUrl = document.getElementById('api-url');
        this.inputKey = document.getElementById('api-key');
        this.inputModel = document.getElementById('api-model');

        this.init();
    }

    init() {
        this.toggleBtn.addEventListener('click', () => this.toggle());
        this.closeBtn.addEventListener('click', () => this.toggle());
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        if (this.settingsBtn) this.settingsBtn.addEventListener('click', () => this.toggleSettings(true));
        if (this.cancelSettingsBtn) this.cancelSettingsBtn.addEventListener('click', () => this.toggleSettings(false));
        if (this.saveSettingsBtn) this.saveSettingsBtn.addEventListener('click', () => this.saveSettings());
    }

    toggle() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.window.classList.remove('hidden');
            this.input.focus();
        } else {
            this.window.classList.add('hidden');
        }
    }

    toggleSettings(show) {
        if (show) {
            this.settingsPanel.classList.remove('hidden');
            this.inputUrl.value = this.apiUrl;
            this.inputKey.value = this.apiKey;
            this.inputModel.value = this.apiModel;
        } else {
            this.settingsPanel.classList.add('hidden');
        }
    }

    saveSettings() {
        this.apiUrl = this.inputUrl.value.trim();
        this.apiKey = this.inputKey.value.trim();
        this.apiModel = this.inputModel.value.trim();

        localStorage.setItem('chat_apiUrl', this.apiUrl);
        localStorage.setItem('chat_apiKey', this.apiKey);
        localStorage.setItem('chat_apiModel', this.apiModel);

        this.toggleSettings(false);
        this.addMessage("Settings saved.", "bot");
    }

    async handleSubmit(e) {
        e.preventDefault();
        const msg = this.input.value.trim();
        if (!msg) return;

        this.addMessage(msg, 'user');
        this.input.value = '';

        // Show loading state
        const loadingId = this.addMessage("Thinking...", 'bot', true);

        if (this.apiKey) {
            // Real API Call
            try {
                const response = await this.callAI(msg);
                this.updateMessage(loadingId, response);
            } catch (error) {
                this.updateMessage(loadingId, "Error: " + error.message);
            }
        } else {
            // Mock Fallback
            setTimeout(() => {
                const response = this.getMockResponse(msg);
                this.updateMessage(loadingId, response);
            }, 600);
        }
    }

    async callAI(userMsg) {
        const payload = {
            model: this.apiModel,
            messages: [
                { role: "system", content: "You are a helpful assistant for a Study Planner application. Be concise." },
                { role: "user", content: userMsg }
            ]
        };

        const res = await fetch(this.apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.apiKey}`,
                "HTTP-Referer": window.location.href, // Required by OpenRouter
                "X-Title": "Smart Study Planner"      // Required by OpenRouter
            },
            body: JSON.stringify(payload)
        });

        if (!res.ok) {
            const errText = await res.text();
            throw new Error(`API Error ${res.status}: ${errText}`);
        }

        const data = await res.json();
        return data.choices && data.choices[0] && data.choices[0].message.content
            ? data.choices[0].message.content
            : "No response from AI.";
    }

    addMessage(text, type, isLoading = false) {
        const div = document.createElement('div');
        div.className = `message ${type}-message`;

        if (isLoading) {
            div.id = `msg-${Date.now()}`;
            div.innerHTML = `
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>`;
        } else {
            div.textContent = text;
        }

        this.messagesEl.appendChild(div);
        this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
        return div.id;
    }

    updateMessage(id, newText) {
        const el = document.getElementById(id);
        if (el) {
            el.textContent = newText;
            el.style.opacity = "1";
            el.style.fontStyle = "normal";
        }
    }

    getMockResponse(input) {
        const lower = input.toLowerCase();

        if (lower.includes('hello') || lower.includes('hi')) {
            return "Greetings, Engineer. Set your API Key in settings ⚙️ to use a real AI!";
        }

        if (lower.includes('conflict') || lower.includes('reject')) {
            return "Conflicts occur when subjects overlap in time. The Greedy Algorithm prioritizes the subject that finishes earliest.";
        }

        if (lower.includes('algorithm') || lower.includes('greedy')) {
            return "I run an Interval Scheduling Greedy Algorithm (O(N log N)).";
        }

        if (lower.includes('add') || lower.includes('how to')) {
            return "Use the Input Panel on the top left. Select Name, Day, and Time.";
        }

        if (lower.includes('theme') || lower.includes('color')) {
            return "Top right theme selector. Try 'Cyber'.";
        }

        return "Mock Mode: I only know basic keywords. Add an API Key for full intelligence.";
    }
}

const bot = new ChatBot(app);
window.app = app;
window.bot = bot;
