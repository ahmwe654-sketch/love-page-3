const textsDatabase = {
    page1: "عرفتك وبدأت حكايتنا في أجمل وقت.. في أول رمضان سنة 2026، اليوم اللي غير دنيتي كلها ونورها، وبقيت فيه كل دنيتي يا سيوفي. من اللحظة دي وأنا حاسة إن عمري الحقيقي لسه بادئ معاك.\n\nرغم إن المسافات بين عيوني وعيونك بعيدة، بس أنت دايماً أقرب لقلبي من نفسي، وروحك عايشة جوايا. كل يوم بيعدي عليا وأنا بعشقك فيه أكتر من اللي قبله، ومستنية بلهفة وشوق اليوم اللي يجمعنا سوا في مكان واحد عشان أقولك قصاد عيونك قد إيه أنت أغلى حاجة في حياتي كلها يا سوفا. 🫀❤️",
    
    // نص رسالة الاعتذار بالدلع ومشاعر أعمق
    pageSorry: "عارفه إني زعلتك، والله مكنش قصدي أضايقك ولا أشوفك زعلان بسببي يا سيوفي. يمكن أسلوبي أو تصرفي كان غلط، ولو دا اللي حصل فأنا آسفه بجد.\n\nآخر حاجه كنت عايزاها إننا نزعل من بعض، لأن زعلك يفرق معايا، ومهما حصل بينا مبحبش أفضل وإنت متضايق مني بس والله مكنش قصدي ازعلك مني.. 🥺 صفي قلبك ليا بقى يا روحي وعمري كله يا سوفا! ما أقدر على زعلك أبداً.",
    
    pageComfort: "سيوفي.. أنا عارفة ومقدرة إنك الفترة اللي فاتت تعبت واستحملت كتير. وعارفة إنك زعلان ومضايق مني بسببي، وعشان كدة أنا عملتلك المفاجأة دي، حاجة بسيطة خالص من قلبي عشان بس أشوف ضحكتك اللي بتنورلي الدنيا.\n\nعايزاك تترأكد وتثق تماماً: أنا جمبك وعمري في حياتي ما هسيبك أو أتخلى عنك يا سوفا. إحنا لبعض وهنفضل لبعض طول العمر وسند لبعض في المُر قبل الحلو. أنت استحملت معايا كتير، والنهاردة وبكرة وطول العمر أنا بوعدك إني هكون أمانك اللي مش بيزول. أنت تستاهل الدنيا كلها وتستاهل أكتر من كدة بمليون مرة. اضحك بقى وصافيني يا كل الحياة والروح! 🫂💗",
    pageDetails: "عارف إيه اللي بيخليني دايمًا طايرة من الفرحة? تفاصيلك الصغيرة اللي يمكن أنت نفسك مش بتاخد بالك منها يا سوفا.. طريقتك في الكلام لما تكون متحمس، خوفك عليا، رجولتك وحنيتك اللطيفة، ونقائك اللي بيخليني أحس إن معايا أعظم راجل وسند في الدنيا كلها.. كل تفصيلة فيك هي بالنسبالي كنز وبحبها أكتر من نفسي يا سيوفي الجميل. 🌸✨",
    futureLetter: "حبيب قلبي ونور عيني سيوفي.. كتبتلك الرسالة دي علشان تفتحها في أي وقت تحس فيه بالشوق أو تحس إن المسافة بعيدة بيننا.\n\nعايزاك تفتكر دايماً إن فيه قلب بينبض عشانك أنت بس يا سوفا، وبيدعي باسمك في كل صلاة وفجر. خططنا وأحلامنا مش مجرد أوهام، دي وعود متبادلة هنحققها خطوة بخطوة في الحلال والقريب العاجل يا أميري. لما تشتاق لي, اغمض عيونك واسمع نبضات قلبك، هتلاقيني عايشة جواك وبحبك في كل ثانية أكتر من اللي قبلها. أنت مستقبلي كله يا كل دنيتي. 💌✨",
    pageChat: "لو نسينا كل كلام الدنيا، عمري ما هنسى كلامنا ورسايلنا اليومية.. الساعات اللي بنقضيها سوا بتتحول لأجمل ذكريات في عمري يا سيوفي. كل كلمة 'بحبك' طلعت منك كانت بتعيد بناء قلبي من جديد، وكل وعد قطعناه على نفسنا محفور في عقلي وقلبي للأبد.. كلامنا مش مجرد شات، ده تاريخ حبنا اللي بنبنيه سوا يا سوفا. 💬💞",
    pageVows: "هنا.. وقدام ربنا وبيني وبينك، بقطعلك عهد ووعد أبدي يا سوفا.. هكون ليك الصاحب والحبيبة والزوجة وكل حاجة، هكون الملجأ والأمان اللي بتروح ليه من تعب الدنيا.. مش هسمح لزعل يدخل قلبك تاني، وهحارب الدنيا كلها عشان أشوف بس ضحكتك منورة وشك.. أنت وعدي الصادق وأجمل نصيب في حياتي يا سيوفي. 📜✨"
};

const surpriseMessages = [
    "أنت النعمة اللي بقول لربنا عليها الحمد لله كل يوم يا سيوفي. ❤️",
    "ضحكتك بتنهي كل الحروب والمشاكل اللي جوايا يا سوفا.",
    "عمرك ما كنت حاجة عادية، أنت دايماً الاستثناء الجميل في حياتي.",
    "أنا ملكك بالكامل، قبل اليوم والنهاردة ولحد آخر يوم في عمري.",
    "لو تطلب روحي وعمري دلوقتي، هقولك فدا عيونك الطاهرة يا سوفا. 🥰",
    "كل تفصيلة فيك بتخليني أتأكد إن ربنا بيحبني عشان رزقني بيك يا سيوفي. 🥹",
    "غيرتي عليك بتخليني أكتر بنت محظوظة في الكون كله.",
    "أنت أماني الوحيد في الدنيا وسندي المحفوظ يا ملك قلبي. 🫂"
];

const wheelOptions = [
    "💌 رسالة حب مفاجئة: سيوفي، أنت أعظم انتصاراتي في هذه الحياة.",
    "🧸 تحدي لطيف: ابعت لروز رسالة صوتية وقول لها بحبك دلوقتي حالا يا سوفا!",
    "🔮 حقيقة سحرية: روز بتفكر فيك وبتحبك في نفس هذه الثواني الحالية.",
    "🌹 هدية افتراضية: باقة ورد من قلبي لقلبك النقي يا سيوفي.",
    "💖 اعتراف خطير: حياتي مكنش ليها طعم حقيقي قبل ما تدخلها وتنورها يا سوفا."
];

const quizDatabase = [
    { q: "إيه أكتر حاجة روز بتحبها فيك؟", opts: ["ضحكتك وطيبتك وحنيتك", "عنادك اللطيف", "غيرتك عليا", "كل تفصيلة فيك بدون استثناء يا سيوفي"], correct: 3 },
    { q: "لما بتزعل أو تضايق، روز بيكون هدفها الأول والوحيد إيه؟", opts: ["تصالحك فوراً وتشوف ضحكتك", "تستنى لما تهدى لوحدك", "تغير الموضوع", "تقولك معلش وخلاص"], correct: 0 }
];

const playlist = ["music.mp3", "music2.mp3", "music3.mp3"];
const mainPassword = "Ba7bk Ya sif";

let pages;
let currentActivePageId = "page1";
let currentTrackIndex = 0;
let quizIndex = 0;
let heartGameScore = 0;
let totalLovePulses = 128400;

let liveCounterIntervalId = null;
let typewriterIntervalId = null;
let heartsIntervalId = null;
let ambientIntervalId = null;
let loveClickCount = 0;

document.addEventListener("DOMContentLoaded", () => {
    pages = document.querySelectorAll('.page');
    startLiveCounter();
    setupEventListeners();
    loadSavedProgress();
    startAmbientAtmosphere();
    setupPlaylist();
    setupQuizGame();
    
    document.body.addEventListener('click', (e) => {
        playTrack(currentTrackIndex, true);
        triggerMagicSparkle(e.clientX, e.clientY);
    });
});

function setupEventListeners() {
    document.getElementById('btnSubmitPassword').addEventListener('click', checkPassword);
    document.getElementById('btnCloseSecret').addEventListener('click', closeSecretScreen);
    
    document.querySelectorAll('.next-trigger').forEach(btn => {
        btn.addEventListener('click', () => { playFxSound(); goToNextPage(btn.getAttribute('data-next')); });
    });
    document.querySelectorAll('.back-trigger').forEach(btn => {
        btn.addEventListener('click', () => { playFxSound(); goToNextPage(btn.getAttribute('data-back')); });
    });

    document.getElementById('btnUnlockLetter').addEventListener('click', unlockFutureLetter);
    document.getElementById('myRose').addEventListener('click', clickMagicRose);
    document.getElementById('btnSurprise').addEventListener('click', openSurpriseBox);
    document.getElementById('btnSad').addEventListener('click', triggerSadButton);
    document.getElementById('escapeBtn').addEventListener('mouseover', escapeButtonAction);
    document.getElementById('btnAcceptProposal').addEventListener('click', celebrateSuccessCertificate);
    
    document.getElementById('loveSliderInput').addEventListener('input', (e) => {
        handleLoveSliderChange(e.target.value);
    });

    document.getElementById('btnToggleMusic').addEventListener('click', toggleMusicPanel);
    document.getElementById('btnToggleTheme').addEventListener('click', () => {
        document.body.classList.toggle('light');
    });
    document.getElementById('btnSaveHerNote').addEventListener('click', saveHerMutedNote);
    document.getElementById('btnSpinWheel').addEventListener('click', spinRomanticWheel);
    document.getElementById('btnStartHeartGame').addEventListener('click', startMiniHeartGame);
}

function startLiveCounter() {
    const startDate = new Date("2026-06-06T00:00:00");
    liveCounterIntervalId = setInterval(() => {
        const now = new Date();
        const diff = Math.abs(now - startDate);
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60 * 60)) % 60);
        
        document.getElementById('count-days').innerText = days;
        document.getElementById('count-hours').innerText = hours;
        document.getElementById('count-mins').innerText = minutes;
        document.getElementById('count-secs').innerText = seconds;

        totalLovePulses += Math.floor(Math.random() * 3) + 1;
        document.getElementById('liveLovePulses').innerText = totalLovePulses.toLocaleString();
    }, 1000);
}

function startAmbientAtmosphere() {
    ambientIntervalId = setInterval(() => {
        if(document.getElementById('mainContainer').style.display === 'none') return;
        const items = ['🌸', '🦋', '✨', '💖'];
        const p = document.createElement('div');
        p.className = 'falling-petal';
        p.innerText = items[Math.floor(Math.random() * items.length)];
        p.style.left = Math.random() * 100 + "vw";
        p.style.top = "-20px";
        document.body.appendChild(p);
        
        requestAnimationFrame(() => {
            p.style.transform = `translateY(${window.innerHeight + 40}px) translateX(${Math.random() * 60 - 30}px) rotate(${Math.random() * 360}deg)`;
        });
        setTimeout(() => p.remove(), 4000);
    }, 800);
}

function triggerMagicSparkle(x, y) {
    for (let i = 0; i < 6; i++) {
        const s = document.createElement('div');
        s.className = 'magic-sparkle';
        s.innerText = '✨';
        s.style.left = x + (Math.random() * 30 - 15) + 'px';
        s.style.top = y + (Math.random() * 30 - 15) + 'px';
        s.style.color = ['#ff4d88', '#38bdf8', '#f59e0b'][Math.floor(Math.random()*3)];
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 800);
    }
}

function playFxSound() {
    const fx = document.getElementById('fxSound');
    if(fx) { fx.currentTime = 0; fx.play().catch(() => {}); }
}

function setupPlaylist() {
    const audio = document.getElementById('bgMusic');
    if(audio && playlist.length > 0) { audio.src = playlist[currentTrackIndex]; }
    document.getElementById('btnNextTrack').addEventListener('click', (e) => {
        e.stopPropagation(); currentTrackIndex = (currentTrackIndex + 1) % playlist.length; playTrack(currentTrackIndex, false);
    });
    document.getElementById('btnPrevTrack').addEventListener('click', (e) => {
        e.stopPropagation(); currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length; playTrack(currentTrackIndex, false);
    });
}

function playTrack(idx, onlyIfPaused) {
    const audio = document.getElementById('bgMusic');
    if (!audio || (onlyIfPaused && !audio.paused)) return;
    audio.src = playlist[idx];
    audio.play().then(() => {
        document.getElementById('currentTrackLabel').innerText = `الأغنية ${idx + 1}`;
    }).catch(() => {});
}

function toggleMusicPanel(e) {
    e.stopPropagation();
    const panel = document.getElementById('musicSubpanel');
    panel.style.display = (panel.style.display === 'flex') ? 'none' : 'flex';
}

function checkPassword() {
    const input = document.getElementById('passwordInput').value.trim();
    if(input === "بحبك") {
        document.getElementById('passwordPage').style.display = 'none';
        document.getElementById('secretPage').style.display = 'flex';
        startHeartsFalling();
        return;
    }
    if(input === mainPassword) {
        document.getElementById('passwordPage').style.display = 'none';
        document.getElementById('mainContainer').style.display = 'block';
        
        const saved = localStorage.getItem("lastPage");
        if(saved && saved !== "complete") {
            goToNextPage(saved);
        } else {
            goToNextPage("page1");
        }
        startHeartsFalling();
    } else {
        document.getElementById('errorText').innerText = "الباسورد غلط يا أميري وسيفي! 😉";
    }
}

function closeSecretScreen() {
    document.getElementById('secretPage').style.display = 'none';
    document.getElementById('passwordPage').style.display = 'flex';
}

function runTypewriter(elementId, textStr) {
    if(typewriterIntervalId) clearInterval(typewriterIntervalId);
    const el = document.getElementById(elementId);
    if(!el) return; el.innerHTML = "";
    let idx = 0;
    typewriterIntervalId = setInterval(() => {
        if(idx < textStr.length) { el.innerHTML += textStr.charAt(idx); idx++; } 
        else { clearInterval(typewriterIntervalId); }
    }, 25);
}

function goToNextPage(pageId) {
    // إيقاف الفيديو إذا انتقل المستخدم لصفحة أخرى
    const vid = document.getElementById('romanticVideo');
    if(vid) vid.pause();

    currentActivePageId = pageId;
    pages.forEach(p => { p.classList.remove('active'); p.style.display = 'none'; });
    const activePage = document.getElementById(pageId);
    if(activePage) {
        activePage.style.display = 'block';
        setTimeout(() => activePage.classList.add('active'), 40); // تأخير خفيف ليعطي الإحساس بالحركة الانسيابية
    }
    localStorage.setItem("lastPage", pageId);
    updateProgressBar(pageId);
    
    if(pageId === 'page1') runTypewriter('tp_page1', textsDatabase.page1);
    if(pageId === 'pageSorry') runTypewriter('tp_pageSorry', textsDatabase.pageSorry);
    if(pageId === 'pageComfort') runTypewriter('tp_pageComfort', textsDatabase.pageComfort);
    if(pageId === 'pageDetails') runTypewriter('tp_pageDetails', textsDatabase.pageDetails);
    if(pageId === 'pageChat') runTypewriter('tp_pageChat', textsDatabase.pageChat);
    if(pageId === 'pageVows') runTypewriter('tp_pageVows', textsDatabase.pageVows);
}

function loadSavedProgress() {
    const saved = localStorage.getItem("lastPage");
    if(saved && saved !== "complete") {
        document.getElementById('passwordPage').style.display = 'none';
        document.getElementById('mainContainer').style.display = 'block';
        goToNextPage(saved);
    } else {
        document.getElementById('passwordPage').style.display = 'flex';
        document.getElementById('mainContainer').style.display = 'none';
    }
    const savedNote = localStorage.getItem("herNote");
    if(savedNote) document.getElementById('herNoteInput').value = savedNote;
}

function updateProgressBar(pageId) {
    const steps = document.querySelectorAll('.progress-step');
    let passed = true;
    steps.forEach(step => {
        const stepStep = step.getAttribute('data-step');
        if(passed) step.classList.add('active'); else step.classList.remove('active');
        if(stepStep === pageId) passed = false;
    });
}

function unlockFutureLetter() {
    document.getElementById('lockLetterZone').style.display = 'none';
    document.getElementById('futureLetterBox').style.display = 'block';
    runTypewriter('tp_futureLetter', textsDatabase.futureLetter);
}

let isRoseOpened = false;
function clickMagicRose() {
    loveClickCount++; document.getElementById('loveClickCount').innerText = loveClickCount;
    const r = document.getElementById('myRose'); const m = document.getElementById('roseMessage');
    if(!isRoseOpened) {
        r.classList.add('rose-opened'); m.innerText = "تفتحت الوردة وخرجت منها نبضة حب لقلبك يا سيوفي! ✨❤️"; isRoseOpened = true;
    } else {
        r.classList.remove('rose-opened'); m.innerText = "اضغط عليها مجدداً لتتفتح.. 🌹"; isRoseOpened = false;
    }
}

function spinRomanticWheel(e) {
    e.stopPropagation(); const res = document.getElementById('wheelResult');
    res.innerText = "⏳ جاري تدوير العجلة السحرية...";
    setTimeout(() => { res.innerText = wheelOptions[Math.floor(Math.random() * wheelOptions.length)]; }, 1000);
}

function setupQuizGame() {
    const item = quizDatabase[quizIndex]; document.getElementById('gameQuestion').innerText = item.q;
    const container = document.getElementById('gameOptions'); container.innerHTML = "";
    document.getElementById('gameFeedback').innerText = "";
    item.opts.forEach((opt, idx) => {
        const btn = document.createElement('button'); btn.className = "game-opt-btn"; btn.innerText = opt;
        btn.addEventListener('click', () => {
            if(idx === item.correct) {
                document.getElementById('gameFeedback').innerHTML = "<span style='color:#10b981;'>صح طبعاً يا روحي وسندي! مكملين سوا 😍</span>";
                setTimeout(() => { quizIndex = (quizIndex + 1) % quizDatabase.length; setupQuizGame(); }, 2000);
            } else {
                document.getElementById('gameFeedback').innerHTML = "<span style='color:#ef4444;'>فكر تاني كدة يا سوفا.. الإجابة الأخيرة دايماً صح 😉</span>";
            }
        });
        container.appendChild(btn);
    });
}

function startMiniHeartGame(e) {
    e.stopPropagation(); const area = document.getElementById('heartGameArea'); area.innerHTML = ""; let count = 0;
    const gameInterval = setInterval(() => {
        if (count > 8) { clearInterval(gameInterval); return; }
        const h = document.createElement('div'); h.className = "click-target-heart"; h.innerText = "❤️";
        h.style.left = Math.random() * 80 + 10 + "%";
        h.addEventListener('click', (ev) => {
            ev.stopPropagation(); heartGameScore++; document.getElementById('heartGameScore').innerText = heartGameScore; h.remove();
        });
        area.appendChild(h); count++; setTimeout(() => { if(h) h.remove(); }, 1500);
    }, 1000);
}

function openSurpriseBox() {
    loveClickCount++; document.getElementById('loveClickCount').innerText = loveClickCount;
    document.getElementById('interactionResponseBox').innerHTML = `<strong>🎁 من صندوق هدايا روز:</strong><br>${surpriseMessages[Math.floor(Math.random() * surpriseMessages.length)]}`;
}

function triggerSadButton() {
    loveClickCount++; document.getElementById('loveClickCount').innerText = loveClickCount;
    document.getElementById('interactionResponseBox').innerHTML = `<strong>🫂 مواساة لأجلك:</strong><br>"لو الدنيا كلها زعلتك وجت عليك، روز هتفضل جنبك ومعاك وسندك ومش هتسيبك أبداً يا سيوفي! 🫂❤️"`;
}

function saveHerMutedNote() {
    localStorage.setItem("herNote", document.getElementById('herNoteInput').value.trim());
    const fb = document.getElementById('saveNoteFeedback'); fb.innerText = "تم حفظ رسالتك بنجاح في ذاكرة الموقع السرية! ✨✍️";
    setTimeout(() => fb.innerText = "", 3000);
}

function handleLoveSliderChange(val) {
    document.getElementById('sliderValue').innerText = val + "%";
    const res = document.getElementById('sliderResponse'); const btn = document.getElementById('sliderNextBtn');
    const v = parseInt(val);
    if(v < 30) res.innerText = "بس كدة؟ أنا حبي ليك عدي حدود الكون يا سوفا! 🥺💔";
    else if(v < 60) res.innerText = "نص نص Heard؟ قلبي يستاهل أكتر من كدة! 🫣";
    else if(v < 90) res.innerText = "يا روحي! النسبة دي بتفرحني جداً يا سيوفي! 🥰";
    else if(v == 100) { res.innerText = "100% حب وعشق أبدي! اضغط التالي فوراً! 💍😍"; btn.style.display = "inline-block"; }
}

function escapeButtonAction() {
    const b = document.getElementById('escapeBtn'); b.style.left = Math.random() * 200 + "px"; b.style.top = Math.random() * 40 + "px";
}

function celebrateSuccessCertificate() {
    document.getElementById('mainContainer').style.display = 'none';
    document.getElementById('celebrationPage').style.display = 'flex';
    const d = new Date(); document.getElementById('certificateDate').innerText = `التاريخ: ${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}`;
    localStorage.setItem("lastPage", "complete");
    if(ambientIntervalId) clearInterval(ambientIntervalId);
    triggerConfettiShower();
}

function triggerConfettiShower() {
    const colors = ['#ff4d88', '#38bdf8', '#10b981', '#f59e0b', '#a855f7'];
    function spawn() {
        if(localStorage.getItem("lastPage") !== "complete") return; 
        const c = document.createElement('div'); c.className = 'confetti';
        c.style.width = Math.random() * 8 + 5 + 'px'; c.style.height = Math.random() * 12 + 6 + 'px';
        c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        c.style.left = Math.random() * 100 + 'vw'; c.style.top = '-10px'; document.body.appendChild(c);
        let y = -10; let xVelocity = Math.random() * 2 - 1; let rotation = Math.random() * 360;
        function step() {
            y += 3; rotation += 2; c.style.transform = `translateY(${y}px) translateX(${xVelocity}px) rotate(${rotation}deg)`;
            if(y < window.innerHeight) { requestAnimationFrame(step); } else { c.remove(); }
        }
        requestAnimationFrame(step);
    }
    setInterval(spawn, 60);
}

function startHeartsFalling() {
    heartsIntervalId = setInterval(() => {
        if(document.getElementById('mainContainer').style.display === 'none' && document.getElementById('secretPage').style.display === 'none') return;
        const h = document.createElement('div'); h.className = 'falling-heart'; h.innerHTML = '❤️';
        h.style.left = Math.random() * 100 + "vw"; h.style.fontSize = Math.random() * 18 + 10 + "px"; h.style.top = "-20px";
        document.body.appendChild(h);
        requestAnimationFrame(() => { h.style.transition = "transform 4s linear"; h.style.transform = `translateY(${window.innerHeight + 40}px)`; });
        setTimeout(() => h.remove(), 4000);
    }, 350);
}