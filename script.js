// Word data parsed from CSV with better categories
const wordsData = [
    {
        id: 1,
        original: "Аванс",
        origin: "Fransuz tilidan oʻzlashgan soʻz boʻlib, 'oldindan toʻlov', 'jismoniy yoki yuridik shaxs tomonidan boshqasiga kelgusida toʻlanadigan haq hisobidan oldindan beriladigan pul miqdori' degan maʼnoni bildiradi.",
        uzbek: "Boʻnak",
        usage: "'Avans' va 'boʻnak' atamalari qonunchilik hujjatlarida, rasmiy ish yuritishda hamda jonli muloqotda barobar qoʻllanmoqda. 'Boʻnak' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi hamda atamaning yagona shaklda qoʻllanishiga olib keladi.",
        category: "moliya"
    },
    {
        id: 2,
        original: "Автопилот",
        origin: "Yunon va fransuz tillaridan oʻzlashgan soʻz birikmasi. Turli transport vositalarini inson aralashuvisiz avtomatik boshqarish tizimi maʼnosida qoʻllaniladi.",
        uzbek: "Avtoboshqaruv",
        usage: "'Avtopilot' atamasi tegishli sohalar, jonli muloqotda hamda qonunchilik hujjatlarida qoʻllanmoqda. 'Avtoboshqaruv' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi. Hozirda turli lugʻatlar, OAV, rasmiy saytlar, ijtimoiy tarmoqlarda ishlatib kelinmoqda.",
        category: "transport"
    },
    {
        id: 3,
        original: "Айсберг",
        origin: "Nemis tilidan oʻzlashgan soʻz boʻlib, okean va dengizlarda erkin suzib yuruvchi katta muz boʻlagi – 'muz togʻ' degani.",
        uzbek: "Muztogʻ",
        usage: "'Aysberg' va 'muztogʻ' atamalari darslik, qoʻllanmalarda, firma va tovar nomi sifatida qoʻllangan. Bundan tashqari, lugʻatlarda oʻzaro sinonim sifatida berilib, OAV, rasmiy saytlar, ijtimoiy tarmoqlarda foydalanilmoqda. 'Muztogʻ' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "tabiat"
    },
    {
        id: 4,
        original: "Бодикамера",
        origin: "Ingliz tilidan oʻzlashgan soʻz boʻlib, 'tana kamerasi' maʼnosida keladi.",
        uzbek: "Yonkamera",
        usage: "'Bodikamera' atamasi tegishli sohalar, jonli muloqotda hamda qonunchilik hujjatlarida qoʻllanmoqda. 'Yonkamera' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi. Hozirda turli lugʻatlar, OAV, rasmiy saytlar, ijtimoiy tarmoqlarda ishlatib kelinmoqda.",
        category: "texnologiya"
    },
    {
        id: 5,
        original: "Брызговик",
        origin: "Rus tilidan oʻzlashgan soʻz. Gʻildiraklardan otiladigan loy va suv turli tomonlarga sachrashining oldini oladigan jihoz.",
        uzbek: "Loytoʻskich",
        usage: "Ushbu atama qonunchilik hujjatlarida 'sachratmagichlar (brizgovik)' shaklida qoʻllangan. Jonli muloqotda esa 'brizgovik' tarzida ishlatib kelinmoqda. 'Loytoʻskich' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "transport"
    },
    {
        id: 6,
        original: "Внедорожник",
        origin: "Rus tilidan oʻzlashgan soʻz boʻlib, qiyin sharoitlarga chidamli avtomobil maʼnosini bildiradi.",
        uzbek: "Yoʻltanlamas",
        usage: "'Yoʻltanlamas' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi. Bundan tashqari, atamadan OAV, rasmiy saytlar, ijtimoiy tarmoqlarda foydalanib kelinmoqda.",
        category: "transport"
    },
    {
        id: 7,
        original: "Дискуссия",
        origin: "Lotincha 'discussio' soʻzidan oʻzlashgan boʻlib, muammo yuzasidan erkin muhokama, bahs, munozaraga kirishish maʼnosini bildiradi.",
        uzbek: "Bahs, munozara",
        usage: "'Diskussiya' atamasi darslik, qoʻllanmalar, ilmiy ishlarda qoʻllanmoqda. 'Bahs', 'munozara' atamalari oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi. Ular manbalarda sinonim sifatida birga qoʻllanib, OAV, rasmiy saytlar, ijtimoiy tarmoqlarda foydalanilmoqda.",
        category: "talim"
    },
    {
        id: 8,
        original: "Доставка",
        origin: "Rus tilidan oʻzlashgan soʻz boʻlib, tovarlarni belgilangan manzilga yetkazish, eltib berish maʼnolarida keladi.",
        uzbek: "Yetkazish",
        usage: "'Dostavka' soʻzi umumiy ovqatlanish shoxobchalarida, savdo, ishlab chiqarish va xizmat koʻrsatishda, tovar, narsa-buyumlarni yetkazish xizmatlari, reklamalarda, umuman, jonli soʻzlashuvda faol qoʻllanmoqda. 'Yetkazish' soʻzi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "savdo"
    },
    {
        id: 9,
        original: "Зона",
        origin: "Yunoncha 'zona' soʻzidan oʻzlashgan boʻlib, 'mintaqa', 'belbogʻ', chiziqlar bilan belgilangan chegara joylar maʼnosini bildiradi.",
        uzbek: "Hudud",
        usage: "'Zona' atamasi tegishli sohalar, jonli muloqotda hamda qonunchilik hujjatlarida qoʻllanmoqda. 'Hudud' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "hudud"
    },
    {
        id: 10,
        original: "Карвинг",
        origin: "Ingliz tilidan oʻzlashgan soʻz boʻlib, 'kesish', 'oʻyish' degani. Hozirda meva, sabzavot va narsa-buyumlarga kesib, oʻyib bezak berish sanʼati maʼnolarida qoʻllanmoqda.",
        uzbek: "Oʻymabezak",
        usage: "'Karving' atamasi tegishli sohalar hamda qonunchilik hujjatlarida qoʻllanmoqda. 'Oʻymabezak' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "sanat"
    },
    {
        id: 11,
        original: "Конфиденциал",
        origin: "Lotincha 'confidentialis' soʻzidan olingan boʻlib, 'ishonchga loyiq', 'maxfiy' degan maʼnoga toʻgʻri keladi.",
        uzbek: "Maxfiy",
        usage: "'Konfidensial' atamasi tegishli sohalar hamda qonunchilik hujjatlarida qoʻllanmoqda. 'Maxfiy' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "huquq"
    },
    {
        id: 12,
        original: "Кластер",
        origin: "Ingliz tilidan oʻzlashgan soʻz boʻlib, 'moʻy qalam', 'toʻplam', 'toʻda' degan maʼnoda keladi. Bir maqsad uchun birlashgan kichik tuzilma.",
        uzbek: "Klaster",
        usage: "'Klaster' atamasi qonunchilik hujjatlarida, rasmiy ish yuritishda hamda jonli muloqotda qoʻllanmoqda. 'Klaster' atamasi keng ommalashgan tushuncha, oʻzbek tiliga oʻzlashib, lugʻat boyligini oshirishga xizmat qiladi.",
        category: "texnologiya"
    },
    {
        id: 13,
        original: "Коворкинг",
        origin: "Ingliz tilidan oʻzlashgan soʻz boʻlib, 'hamkorlik' degani. Tadbirkorlar yoki turli ish beruvchilar uchun ishlaydigan odamlar tomonidan jihozlar, gʻoyalar va bilimlar almashishga moʻljallangan ofis yoki boshqa ish muhiti.",
        uzbek: "Ish markazi",
        usage: "'Kovorking' atamasi tegishli sohalar hamda qonunchilik hujjatlarida qoʻllanmoqda. 'Ish markazi' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "ish"
    },
    {
        id: 14,
        original: "Коловорот",
        origin: "Rus tilidan oʻzlashgan soʻz. Aksariyat hollarda yogʻochda diametri katta teshiklarni parmalash yordamida ochish uchun ishlatiladigan qoʻl asbobi.",
        uzbek: "Qoʻlparma",
        usage: "'Kolovorot' atamasi texnika, avtomobilsozlik sohalarida qoʻllanmoqda. 'Qoʻlparma' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "asbob"
    },
    {
        id: 15,
        original: "Коридор",
        origin: "Italyan tilidan oʻzlashgan soʻz boʻlib, bino ichidagi xonalarni bir-biriga bogʻlovchi yoʻlak maʼnosini beradi.",
        uzbek: "Yoʻlak",
        usage: "'Koridor' atamasi jonli muloqot, tegishli sohalar hamda qonunchilik hujjatlarida qoʻllanmoqda. 'Yoʻlak' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "bino"
    },
    {
        id: 16,
        original: "Котлован",
        origin: "Rus tilidan oʻzlashgan soʻz boʻlib, 'poydevor chuquri' degan maʼnoni bildiradi.",
        uzbek: "Xandaq",
        usage: "'Kotlovan' atamasi tegishli sohalar hamda qonunchilik hujjatlarida qoʻllanmoqda. 'Xandaq' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "qurilish"
    },
    {
        id: 17,
        original: "Лебёдка",
        origin: "Rus tilidan oʻzlashgan soʻz. Baraban yoki 'yulduzcha'ga oʻraladigan harakatlanuvchi arqon (yoki zanjir) vositasida yuklarni koʻtarish va boshqa yerga koʻchirishga xizmat qiluvchi moslama.",
        uzbek: "Chigʻir",
        usage: "'Lebyodka' va 'chigʻir' atamalari tegishli sohalar hamda qonunchilik hujjatlarida barobar qoʻllanmoqda. 'Chigʻir' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "asbob"
    },
    {
        id: 18,
        original: "Лидер",
        origin: "Ingliz tilidan oʻzlashgan soʻz boʻlib, 'birinchi', 'birinchi yuruvchi', 'yetakchi' degan maʼnolarni bildiradi.",
        uzbek: "Yoʻlboshchi, yetakchi",
        usage: "'Lider' atamasi tegishli sohalar, jonli muloqotda hamda qonunchilik hujjatlarida qoʻllanmoqda. 'Yoʻlboshchi' va 'yetakchi' atamalari oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "rahbariyat"
    },
    {
        id: 19,
        original: "Линк",
        origin: "Ingliz tilidan oʻzlashgan soʻz boʻlib, 'bogʻlam', 'aloqa', 'ikki narsa yoki vaziyat oʻrtasidagi munosabat, bogʻlanish' maʼnolarida qoʻllaniladi.",
        uzbek: "Havola",
        usage: "'Link' atamasi ilmiy tadqiqot ishlarida, oʻquv jarayonida, umuman, jonli soʻzlashuvda faol qoʻllanmoqda. 'Havola' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "texnologiya"
    },
    {
        id: 20,
        original: "Маркировка",
        origin: "Nemis tilidan oʻzlashgan soʻz boʻlib, 'tamgʻalash', 'belgilash' degan maʼnoni bildiradi.",
        uzbek: "Tamgʻalash",
        usage: "'Markirovka' va 'tamgʻalash' atamalari tegishli sohalar hamda qonunchilik hujjatlarida barobar qoʻllanmoqda. 'Tamgʻalash' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "savdo"
    },
    {
        id: 21,
        original: "Маршрут",
        origin: "Fransuz tilidan oʻzlashgan soʻz boʻlib, 'yurish', 'yoʻl', 'yoʻnalishli yoʻl' maʼnolarini bildiradi.",
        uzbek: "Yoʻnalish",
        usage: "'Marshrut' atamasi tegishli sohalar, jonli muloqotda hamda qonunchilik hujjatlarida qoʻllanmoqda. 'Yoʻnalish' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "transport"
    },
    {
        id: 22,
        original: "Мастер класс",
        origin: "Ingliz tilidan oʻzlashgan soʻz boʻlib, 'mahorat darsi', 'mahorat ustaxonasi' degan maʼnoni ifodalaydi.",
        uzbek: "Mahorat darsi",
        usage: "'Masterklas' atamasi tegishli sohalar, jonli muloqotda hamda qonunchilik hujjatlarida qoʻllanmoqda. 'Mahorat darsi' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "talim"
    },
    {
        id: 23,
        original: "Мотивация",
        origin: "Lotincha 'movere' soʻzidan olingan boʻlib, 'harakat', 'harakat qilishga undash' maʼnosida kelgan.",
        uzbek: "Ruhlantirish, ragʻbat",
        usage: "'Motivatsiya' atamasi tegishli sohalar, jonli muloqotda hamda qonunchilik hujjatlarida qoʻllanmoqda. 'Ruhlantirish' va 'ragʻbat' atamalari oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "psixologiya"
    },
    {
        id: 24,
        original: "Навигатор",
        origin: "Lotincha 'navigator' soʻzidan oʻzlashgan boʻlib, 'kemani yoʻlga boshlash/yoʻllash' maʼnosini bildirgan.",
        uzbek: "Yoʻllagich",
        usage: "'Navigator' atamasi tegishli sohalar, jonli muloqotda hamda qonunchilik hujjatlarida qoʻllanmoqda. 'Yoʻllagich' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "texnologiya"
    },
    {
        id: 25,
        original: "Наждак",
        origin: "Rus tili orqali oʻzlashgan soʻz. Najdak minerali bilan qoplangan qogʻoz, qurilish sohasida hamda metallarni silliqlashda foydalaniladi.",
        uzbek: "Qumqogʻoz",
        usage: "'Najdak' atamasi jonli muloqotda, qonunchilik hujjatlarida qoʻllanmoqda. 'Qumqogʻoz' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "asbob"
    },
    {
        id: 26,
        original: "Оправа",
        origin: "Rus tilidan oʻzlashgan soʻz boʻlib, biron narsani joylash mumkin boʻlgan asos, gardish, tegra maʼnolarida keladi.",
        uzbek: "Gardish",
        usage: "'Oprava' atamasi tegishli sohalar, jonli muloqotda hamda qonunchilik hujjatlarida qoʻllanmoqda. 'Gardish' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "buyum"
    },
    {
        id: 27,
        original: "Отвёртка",
        origin: "Rus tilidan oʻzlashgan soʻz boʻlib, 'burash', 'aylantirish' maʼnosida keladi, burama mixlarni qotirish va yechib olishda ishlatiladigan asbob nomi.",
        uzbek: "Buragich",
        usage: "'Otvyortka' atamasi tegishli sohalar, jonli muloqotda hamda qonunchilik hujjatlarida qoʻllanmoqda. 'Buragich' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "asbob"
    },
    {
        id: 28,
        original: "Парол",
        origin: "Fransuz tilidan oʻzlashgan soʻz boʻlib, 'maxfiy shartli soʻz' degan maʼnoda keladi.",
        uzbek: "Oʻron",
        usage: "'Parol' atamasi tegishli sohalar, jonli muloqotda hamda qonunchilik hujjatlarida qoʻllanmoqda. 'Oʻron' atamasi qadimgi yozma manbalarimizda aynan 'parol' tushunchasining maʼnosida ishlatib kelingan. Atama oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi va lugʻat boyligini oshirishga xizmat qiladi.",
        category: "texnologiya"
    },
    {
        id: 29,
        original: "Переплёт",
        origin: "Rus tilidan oʻzlashgan soʻz boʻlib, 'kitobni muqovalash' degan maʼnoni bildiradi.",
        uzbek: "Muqovalash",
        usage: "'Pereplyot' atamasi qonunchilik hujjatlarida qoʻllanmoqda. Nashriyot, bosmaxona ishlarida, tashqi reklamalarda, umuman, soʻzlashuvda faol soʻz hisoblanadi. 'Muqovalash' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "nashriyot"
    },
    {
        id: 30,
        original: "Полик",
        origin: "Rus tilidan oʻzlashgan soʻz boʻlib, 'kiyim qiyqimi', 'gilamcha', 'toʻshama', 'avtomobil gilamchasi' maʼnolarini bildirgan.",
        uzbek: "Toʻshama",
        usage: "'Polik' atamasi narsa-buyum nomi sifatida faol qoʻllanadigan soʻzlardan biri hisoblanadi. 'Toʻshama' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "buyum"
    },
    {
        id: 31,
        original: "Портфолио",
        origin: "Lotin va italyan tillaridan oʻzlashgan soʻz birikmasi boʻlib, 'muhim hujjatlar papkasi', 'yutuqlar jamlanmasi' degan maʼnolarni bildiradi.",
        uzbek: "Yigʻmajild",
        usage: "'Portfolio' atamasi tegishli sohalar hamda qonunchilik hujjatlarida qoʻllanmoqda. 'Yigʻmajild' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "talim"
    },
    {
        id: 32,
        original: "Прогрессив",
        origin: "Lotincha 'progressus' soʻzidan oʻzlashgan boʻlib, 'ilgʻor', 'muvaffaqiyat', 'ilgari yurish' maʼnolarida kelgan.",
        uzbek: "Ilgʻor",
        usage: "'Progressiv' atamasi tegishli sohalar hamda qonunchilik hujjatlarida qoʻllanmoqda. 'Ilgʻor' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "siyosat"
    },
    {
        id: 33,
        original: "Растушевка",
        origin: "Rus tilidan oʻzlashgan soʻz boʻlib, 'soya berish', 'bir rangdan ikkinchisiga tush yordamida silliq oʻtish' degan maʼnolarda keladi.",
        uzbek: "Qoshpardoz",
        usage: "'Rastushevka' atamasi xizmat koʻrsatish sohasida qoʻllaniladi. 'Qoshpardoz' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "gozellik"
    },
    {
        id: 34,
        original: "Светофор",
        origin: "Rus va yunon tillaridagi soʻzlar birikmasi boʻlib, 'nur taratuvchi', avtomobillar harakatini tartibga soluvchi chiroq maʼnosini bildirgan.",
        uzbek: "Yoʻlchiroq",
        usage: "'Svetofor' atamasi tegishli sohalar, jonli muloqotda hamda qonunchilik hujjatlarida qoʻllanmoqda. Harakatni tartibga soluvchi qurilma sifatida soʻzlashuvda faol soʻzlardan biri hisoblanadi. 'Yoʻlchiroq' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "transport"
    },
    {
        id: 35,
        original: "Силлабус",
        origin: "Lotincha 'syllabus' soʻzidan olingan boʻlib, 'ishlar roʻyxati', 'katalog', 'ilova' degan maʼnoda qoʻllanilgan.",
        uzbek: "Ishchi dastur",
        usage: "'Sillabus' atamasi tegishli sohalar hamda qonunchilik hujjatlarida qoʻllanmoqda. 'Ishchi dastur' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "talim"
    },
    {
        id: 36,
        original: "Смарт",
        origin: "Ingliz tilidan oʻzlashgan soʻz boʻlib, 'aqlli', 'ustomon', 'epchil' maʼnolarida qoʻllanilgan. Murakkab texnik vazifalarni tez va xatosiz bajaradigan qurilma.",
        uzbek: "Aqlli",
        usage: "'Smart' va 'aqlli' atamalari tegishli sohalar hamda qonunchilik hujjatlarida barobar qoʻllanmoqda. 'Aqlli' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "texnologiya"
    },
    {
        id: 37,
        original: "Челленж",
        origin: "Ingliz tilidan oʻzlashgan soʻz boʻlib, 'chaqiriq', 'bellashuv', 'chorlov' maʼnolarida keladi.",
        uzbek: "Chorlov",
        usage: "'Chellenj' atamasi tegishli sohalar, jonli muloqotda hamda qonunchilik hujjatlarida qoʻllanmoqda. 'Chorlov' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi. Hozirda OAV, rasmiy saytlar, ijtimoiy tarmoqlarda ishlatilib kelinmoqda.",
        category: "sport"
    },
    {
        id: 38,
        original: "Шуруп",
        origin: "Nemis tilidan oʻzlashgan soʻz. Metall, yogʻoch va plastik jismlarni bir-biriga ulash, bogʻlash uchun qoʻllaniladigan burama mix turi maʼnolarini bildiradi.",
        uzbek: "Buramamix",
        usage: "'Shurup' atamasi tegishli sohalar, jonli muloqotda hamda qonunchilik hujjatlarida qoʻllanmoqda. 'Buramamix' atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "qurilish"
    },
    {
        id: 39,
        original: "IT парк",
        origin: "Ingliz tilidan oʻzlashgan soʻz birikmasi boʻlib, axborot texnologiyalari parki maʼnosini bildiradi.",
        uzbek: "AT parki (Axborot texnologiyalari parki)",
        usage: "'IT parki' atamasi qonunchilik hujjatlarida faol qoʻllanmoqda. Bundan tashqari, koʻplab eʼlon, reklama, tashqi yozuvlarda ham shu shaklda yozilmoqda. Tushunchaning bu shaklda berilishi oʻzbek tili qoidalariga mos emas. 'AT parki' (Axborot texnologiyalari parki) atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "texnologiya"
    },
    {
        id: 40,
        original: "IT технологиялари",
        origin: "Ingliz tilidan oʻzlashgan soʻz birikmasi boʻlib, axborot texnologiyalari maʼnosini bildiradi.",
        uzbek: "Axborot texnologiyalari (AT)",
        usage: "'IT texnologiyalari' atamasi qonunchilik hujjatlarida faol qoʻllanmoqda. Bundan tashqari, koʻplab eʼlonlar, reklamalar, tashqi yozuvlarda ham shu shaklda ishlatilmoqda. 'Axborot texnologiyalari' (AT) atamasi oʻzbekcha muqobil sifatida tushunchaning maʼnosini ifodalaydi.",
        category: "texnologiya"
    }
];

// Category display names
const categoryNames = {
    all: 'Barchasi',
    texnologiya: 'Texnologiya',
    transport: 'Transport',
    asbob: 'Asboblar',
    talim: "Ta'lim",
    qurilish: 'Qurilish',
    savdo: 'Savdo',
    buyum: 'Buyumlar',
    ish: 'Ish',
    bino: 'Bino',
    moliya: 'Moliya',
    tabiat: 'Tabiat',
    sanat: "San'at",
    huquq: 'Huquq',
    hudud: 'Hudud',
    rahbariyat: 'Rahbariyat',
    psixologiya: 'Psixologiya',
    nashriyot: 'Nashriyot',
    siyosat: 'Siyosat',
    gozellik: "Go'zallik",
    sport: 'Sport'
};

// DOM elements
const searchInput = document.getElementById('searchInput');
const wordsGrid = document.getElementById('wordsGrid');
const noResults = document.getElementById('noResults');
const totalWords = document.getElementById('totalWords');
const filterButtons = document.querySelectorAll('.tab-btn');

// State
let currentFilter = 'all';
let filteredWords = [...wordsData];

// Initialize the application
function init() {
    setupFilterButtons();
    renderWords(wordsData);
    setupEventListeners();
    updateWordCount(wordsData.length);
}

// Setup filter buttons with top categories
function setupFilterButtons() {
    const filterContainer = document.querySelector('.filter-tabs');
    
    // Get top categories by count
    const categoryCounts = {};
    wordsData.forEach(word => {
        categoryCounts[word.category] = (categoryCounts[word.category] || 0) + 1;
    });
    
    const topCategories = Object.entries(categoryCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 4)
        .map(([category]) => category);
    
    // Create buttons
    filterContainer.innerHTML = `
        <button class="tab-btn active" data-filter="all">Barchasi</button>
        ${topCategories.map(category => 
            `<button class="tab-btn" data-filter="${category}">${categoryNames[category]} (${categoryCounts[category]})</button>`
        ).join('')}
        <select class="category-select" id="categorySelect">
            <option value="all">Boshqa kategoriyalar...</option>
            ${Object.entries(categoryCounts)
                .filter(([category]) => !topCategories.includes(category))
                .sort((a, b) => a[0].localeCompare(b[0]))
                .map(([category, count]) => 
                    `<option value="${category}">${categoryNames[category]} (${count})</option>`
                ).join('')}
        </select>
    `;
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    searchInput.addEventListener('keydown', handleKeyDown);
    
    // Filter buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab-btn')) {
            handleFilter(e);
        }
    });
    
    // Category select
    document.getElementById('categorySelect').addEventListener('change', handleCategorySelect);
    
    // Focus search input on load
    searchInput.focus();
}

// Handle category select dropdown
function handleCategorySelect(event) {
    const category = event.target.value;
    if (category !== 'all') {
        // Update filter
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        currentFilter = category;
        
        // Apply filter
        const query = searchInput.value.toLowerCase().trim();
        let results = wordsData;
        
        if (query !== '') {
            results = wordsData.filter(word => 
                word.original.toLowerCase().includes(query) ||
                word.uzbek.toLowerCase().includes(query) ||
                word.origin.toLowerCase().includes(query) ||
                word.usage.toLowerCase().includes(query)
            );
        }
        
        filteredWords = filterByCategory(results, category);
        renderWords(filteredWords);
        updateWordCount(filteredWords.length);
        
        // Reset select
        event.target.value = 'all';
    }
}

// Debounce function for search optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle search input
function handleSearch(event) {
    const query = event.target.value.toLowerCase().trim();
    
    if (query === '') {
        filteredWords = filterByCategory(wordsData, currentFilter);
    } else {
        const searchResults = wordsData.filter(word => 
            word.original.toLowerCase().includes(query) ||
            word.uzbek.toLowerCase().includes(query) ||
            word.origin.toLowerCase().includes(query) ||
            word.usage.toLowerCase().includes(query)
        );
        filteredWords = filterByCategory(searchResults, currentFilter);
    }
    
    renderWords(filteredWords);
    updateWordCount(filteredWords.length);
}

// Handle keyboard events
function handleKeyDown(event) {
    if (event.key === 'Escape') {
        searchInput.value = '';
        handleSearch({ target: { value: '' } });
    }
}

// Handle filter buttons
function handleFilter(event) {
    const filter = event.target.dataset.filter;
    
    // Update active state
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    currentFilter = filter;
    
    // Apply search and filter
    const query = searchInput.value.toLowerCase().trim();
    let results = wordsData;
    
    if (query !== '') {
        results = wordsData.filter(word => 
            word.original.toLowerCase().includes(query) ||
            word.uzbek.toLowerCase().includes(query) ||
            word.origin.toLowerCase().includes(query) ||
            word.usage.toLowerCase().includes(query)
        );
    }
    
    filteredWords = filterByCategory(results, filter);
    renderWords(filteredWords);
    updateWordCount(filteredWords.length);
}

// Filter words by category
function filterByCategory(words, category) {
    if (category === 'all') {
        return words;
    }
    return words.filter(word => word.category === category);
}

// Render words to the grid
function renderWords(words) {
    if (words.length === 0) {
        wordsGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    wordsGrid.style.display = 'grid';
    noResults.style.display = 'none';
    
    wordsGrid.innerHTML = words.map(word => createWordCard(word)).join('');
    
    // Add stagger animation
    const cards = wordsGrid.querySelectorAll('.word-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Create word card HTML
function createWordCard(word) {
    const categoryName = categoryNames[word.category] || word.category;
    return `
        <article class="word-card" role="article" tabindex="0" aria-labelledby="word-${word.id}-title">
            <header class="word-header">
                <div>
                    <h2 class="word-original" id="word-${word.id}-title">${escapeHtml(word.original)}</h2>
                    <div class="word-uzbek">${escapeHtml(word.uzbek)}</div>
                </div>
                <div class="word-meta">
                    <span class="word-category">${escapeHtml(categoryName)}</span>
                    <span class="word-id" aria-label="So'z raqami">#${word.id}</span>
                </div>
            </header>
            
            <div class="word-origin" aria-label="Kelib chiqishi">
                ${escapeHtml(word.origin)}
            </div>
            
            <div class="word-usage" aria-label="Foydalanish holatlari">
                ${escapeHtml(word.usage)}
            </div>
        </article>
    `;
}

// Escape HTML to prevent XSS
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Update word count display
function updateWordCount(count) {
    totalWords.textContent = count;
}

// Accessibility: Handle card keyboard navigation
document.addEventListener('keydown', function(event) {
    const focusedCard = document.activeElement;
    if (!focusedCard || !focusedCard.classList.contains('word-card')) return;
    
    const cards = Array.from(document.querySelectorAll('.word-card'));
    const currentIndex = cards.indexOf(focusedCard);
    
    switch(event.key) {
        case 'ArrowDown':
            event.preventDefault();
            const nextCard = cards[currentIndex + 1];
            if (nextCard) nextCard.focus();
            break;
        case 'ArrowUp':
            event.preventDefault();
            const prevCard = cards[currentIndex - 1];
            if (prevCard) prevCard.focus();
            break;
        case 'Home':
            event.preventDefault();
            if (cards[0]) cards[0].focus();
            break;
        case 'End':
            event.preventDefault();
            if (cards[cards.length - 1]) cards[cards.length - 1].focus();
            break;
    }
});

// Scroll Effect for Header
function handleScroll() {
    const header = document.querySelector('.header');
    const scrolled = window.scrollY > 50;
    
    if (scrolled) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Initialize the application when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Add scroll listener
window.addEventListener('scroll', handleScroll);

// Debug: Log when script loads
console.log('Script loaded, words count:', wordsData.length);