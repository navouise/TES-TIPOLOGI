import { Question } from './types';

// Pertanyaan dirancang dengan nuansa sastra, formal, menghindari stereotip,
// dan menempatkan peserta pada situasi nyata untuk memancing fungsi kognitif dan ketakutan bawaan.
// Array ini akan memuat 90 pertanyaan secara bertahap.

export const questions: Question[] = [
  {
    id: "q001",
    text: "Di grup pesan, dua orang yang biasanya ramah tiba-tiba menjawab singkat. Tidak ada pertengkaran yang tampak, tetapi jeda di antara pesan mereka terasa ganjil. Ingat kejadian serupa yang pernah kau alami. Apa yang biasanya terjadi dalam dirimu lebih dahulu?",
    reminder: "Pilih yang paling sering terjadi, bukan yang paling indah.",
    options: [
      {
        text: "Aku mulai merasa ada sesuatu yang akan pecah, meski belum ada bukti yang dapat kutunjukkan.",
        scores: {
          functions: { Ni: 3, Fe: 1 },
          positions: { dominantNi: 2, auxiliaryFe: 1 },
          enneagram: { "4": 1, "6": 2, "9": 1 },
          instincts: { sx: 1, so: 1 },
          bigFive: { neuroticism: 2, openness: 1 },
          temperament: { melancholic: 1 }
        }
      },
      {
        text: "Aku membayangkan beberapa sebab: mereka lelah, tersinggung, sibuk, atau sedang menyembunyikan sesuatu.",
        scores: {
          functions: { Ne: 3, Ti: 1 },
          positions: { dominantNe: 2, auxiliaryTi: 1 },
          enneagram: { "5": 1, "6": 2, "7": 1 },
          bigFive: { openness: 2, neuroticism: 1 },
          temperament: { sanguine: 1, melancholic: 1 }
        }
      },
      {
        text: "Aku membaca ulang percakapan sebelumnya untuk mencari bagian mana yang secara logis mungkin membuat keadaan berubah.",
        scores: {
          functions: { Si: 2, Ti: 2 },
          positions: { dominantSi: 2, auxiliaryTi: 1 },
          enneagram: { "1": 1, "5": 2, "6": 1 },
          bigFive: { conscientiousness: 2 },
          temperament: { melancholic: 1, phlegmatic: 1 }
        }
      },
      {
        text: "Aku menunggu tanda yang lebih jelas sebelum memikirkan terlalu jauh. Mungkin memang tidak ada apa-apa.",
        scores: {
          functions: { Se: 2, Te: 1 },
          positions: { dominantSe: 2 },
          enneagram: { "8": 1, "9": 2 },
          instincts: { sp: 2 },
          bigFive: { neuroticism: -2 },
          temperament: { phlegmatic: 2 }
        }
      },
      {
        text: "Aku mengirim pesan ringan atau mengalihkan pembicaraan agar suasana tidak makin dingin.",
        scores: {
          functions: { Fe: 3, Ne: 1 },
          positions: { dominantFe: 2, auxiliaryFe: 2 },
          enneagram: { "2": 2, "7": 1, "9": 2 },
          instincts: { so: 2 },
          bigFive: { agreeableness: 2, extraversion: 1 },
          temperament: { sanguine: 2 }
        }
      }
    ]
  },
  {
    id: "q002",
    text: "Di meja makan keluarga, seseorang menyindir pilihan hidupmu dengan nada seolah ia sedang bercanda. Semua orang pura-pura tidak mendengar. Ingat saat kau pernah berada di posisi itu. Reaksi mana yang paling sering keluar sebelum kau sempat menyusun jawaban yang indah?",
    reminder: "Pilih yang paling sering terjadi, bukan yang paling indah.",
    options: [
      {
        text: "Aku menjawab tenang, cukup jelas untuk membela diri, tetapi memastikan kata-kataku terukur agar perdebatan tidak meluas.",
        scores: {
          functions: { Te: 2, Ni: 1 },
          positions: { dominantTe: 2, auxiliaryNi: 1 },
          enneagram: { "1": 2, "3": 1, "8": 1 },
          instincts: { sp: 1, so: 1 },
          bigFive: { conscientiousness: 1 },
          moral: { lawfulNeutral: 1 }
        }
      },
      {
        text: "Aku menahan diri, lalu memperhatikan diam-diam siapa yang gelisah, siapa yang menikmati sindiran itu, dan menyimpannya sebagai catatan.",
        scores: {
          functions: { Ni: 2, Fi: 2, Ti: 1 },
          positions: { dominantNi: 1, dominantFi: 1 },
          enneagram: { "4": 1, "5": 2, "9": 1 },
          instincts: { sp: 2 },
          bigFive: { introversion: 2 },
          temperament: { melancholic: 2 }
        }
      },
      {
        text: "Aku merasa kalimat itu bukan hanya tentang hari itu, melainkan memanggil kembali luka lama yang kuingat belum selesai.",
        scores: {
          functions: { Si: 3, Fi: 2 },
          positions: { dominantSi: 2, tertiaryFi: 1 },
          enneagram: { "4": 2, "6": 1 },
          bigFive: { neuroticism: 2 },
          temperament: { melancholic: 2 }
        }
      },
      {
        text: "Aku merasa panas dan ingin langsung membongkar letak kesalahan ucapannya saat itu juga, agar ia tahu aku tidak bisa diinjak.",
        scores: {
          functions: { Se: 2, Te: 2 },
          positions: { dominantSe: 1, tertiaryTe: 1 },
          enneagram: { "8": 3, "cp6": 2 },
          instincts: { sx: 2 },
          bigFive: { agreeableness: -2 },
          temperament: { choleric: 3 }
        }
      },
      {
        text: "Aku tertawa kecil atau merespons pendek, lalu setelahnya menjauh agar tidak kehilangan kendali atas perasaanku sendiri.",
        scores: {
          functions: { Fi: 2, Fe: 1, Si: 1 },
          positions: { dominantFi: 2, inferiorTe: 1 },
          enneagram: { "9": 3, "2": 1, "4": 1 },
          instincts: { sp: 2 },
          bigFive: { agreeableness: 1, neuroticism: 1 },
          temperament: { phlegmatic: 2 }
        }
      }
    ]
  },
  {
    id: "q003",
    text: "Tugas kelompok berjalan lambat. Semua orang punya pendapat, tetapi tidak ada yang mulai bekerja. Waktu tinggal sedikit dan keadaan mulai kacau. Apa yang biasanya kau lakukan lebih dahulu?",
    options: [
      {
        text: "Aku mengambil alih, membuat daftar tugas, membaginya dengan cepat, lalu menetapkan batas waktu agar pekerjaan ini selesai.",
        scores: {
          functions: { Te: 3, Si: 1 },
          positions: { dominantTe: 3, auxiliaryTe: 2 },
          enneagram: { "1": 1, "3": 2, "8": 2 },
          bigFive: { conscientiousness: 3, extraversion: 1 },
          temperament: { choleric: 2 }
        }
      },
      {
        text: "Aku mencari akar kebingungan mereka, menyusun ulang kerangka berpikirnya, agar langkah berikutnya masuk akal dan tidak salah arah.",
        scores: {
          functions: { Ti: 3, Ni: 1 },
          positions: { dominantTi: 3, auxiliaryTi: 2 },
          enneagram: { "5": 3, "1": 1, "6": 1 },
          bigFive: { conscientiousness: 1, openness: 1 },
          temperament: { melancholic: 1, phlegmatic: 1 }
        }
      },
      {
        text: "Aku bertanya pada tiap orang bagian mana yang sanggup mereka kerjakan tanpa merasa terbebani, menjaga agar suasana tetap kooperatif.",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "2": 2, "9": 2 },
          instincts: { so: 2 },
          bigFive: { agreeableness: 3 },
          temperament: { phlegmatic: 1, sanguine: 1 }
        }
      },
      {
        text: "Aku mengingat cara tugas dengan format seperti ini pernah berhasil sebelumnya, lalu menyarankan pola yang sudah terbukti aman.",
        scores: {
          functions: { Si: 3, Te: 1 },
          positions: { dominantSi: 3, auxiliarySi: 2 },
          enneagram: { "6": 2, "1": 1 },
          instincts: { sp: 1 },
          bigFive: { conscientiousness: 2, openness: -1 },
          temperament: { melancholic: 1 }
        }
      },
      {
        text: "Aku langsung mengerjakan bagian yang paling nyata di depan mata, agar kelompok punya sesuatu sebagai pijakan awal untuk memulai.",
        scores: {
          functions: { Se: 2, Te: 1 },
          positions: { dominantSe: 2, auxiliarySe: 1 },
          enneagram: { "3": 1, "7": 1, "8": 1 },
          bigFive: { extraversion: 1 },
          temperament: { choleric: 1, sanguine: 1 }
        }
      }
    ]
  },
  {
    id: "q004",
    text: "Seseorang yang seharusnya melindungimu dahulu, datang kembali dengan sikap tenang, seolah tidak ada yang pernah terjadi. Ia berkata santai, “Kau terlalu memikirkan masa lalu.” Kalimat mana yang paling dekat dengan reaksi batinmu?",
    options: [
      {
        text: "Aku merasa dingin. Aku tahu dengan pasti bahwa memaafkan tidak sama dengan membiarkan polanya terulang kembali. Batasku sudah kututup.",
        scores: {
          functions: { Ni: 2, Te: 2, Fi: 1 },
          positions: { dominantNi: 1, auxiliaryTe: 1 },
          enneagram: { "5": 1, "8": 2 },
          instincts: { sp: 2 },
          moral: { trueNeutral: 1 }
        }
      },
      {
        text: "Timbul gelombang amarah yang diam, karena ia meremehkan rasa sakit yang selama ini susah payah kubawa dan kusembunyikan.",
        scores: {
          functions: { Fi: 3, Si: 1 },
          positions: { dominantFi: 3, tertiarySi: 1 },
          enneagram: { "4": 3, "1": 1 },
          instincts: { sx: 1 },
          bigFive: { neuroticism: 2 },
          temperament: { melancholic: 2 }
        }
      },
      {
        text: "Aku menahan lidahku. Aku ingin menjaga harmoni di luar, meski di dalam batin aku merasa sangat lelah harus terus mengalah pada ketidakpekaannya.",
        scores: {
          functions: { Fe: 2, Si: 2 },
          positions: { dominantFe: 1, auxiliaryFe: 1, auxiliarySi: 1 },
          enneagram: { "9": 3, "2": 1 },
          instincts: { so: 1, sp: 1 },
          bigFive: { agreeableness: 2 },
          temperament: { phlegmatic: 2 }
        }
      },
      {
        text: "Pikiranku langsung membedah ketidakkonsistenan ucapannya. Aku menyusun argumen logis di kepala tentang mengapa tindakannya dulu salah, meski mungkin tidak kuucapkan.",
        scores: {
          functions: { Ti: 3, Ne: 1 },
          positions: { dominantTi: 3, auxiliaryTi: 1 },
          enneagram: { "5": 2, "1": 1 },
          bigFive: { agreeableness: -1 },
          temperament: { melancholic: 1 }
        }
      },
      {
        text: "Aku menatapnya dan merespons dengan ketus atau sarkastis, membiarkan percikan konflik terjadi saat itu juga karena ia memancingnya.",
        scores: {
          functions: { Se: 2, Te: 1, Ne: 1 },
          positions: { dominantSe: 1, tertiaryTe: 1, dominantNe: 1 },
          enneagram: { "8": 2, "cp6": 2, "7": 1 },
          instincts: { sx: 2 },
          bigFive: { agreeableness: -2 },
          temperament: { choleric: 2 }
        }
      }
    ]
  },
  {
    id: "q005",
    text: "Kau terbiasa menjadi sosok yang tidak merepotkan siapa pun, menelan bebanmu sendiri. Suatu hari, keadaan membuatmu benar-benar hancur, dan seseorang menyadarinya lalu berkata, “Kau boleh bersandar, kau boleh meminta bantuan.” Apa yang biasanya terjadi dalam dirimu lebih dahulu?",
    options: [
      {
        text: "Aku merasa canggung dan hampir menolak. Aku tidak tahu bagaimana caranya bergantung pada orang lain tanpa merasa menjadi beban yang lemah.",
        scores: {
          functions: { Fi: 2, Ti: 1 },
          positions: { dominantFi: 1, inferiorFe: 1 },
          enneagram: { "5": 2, "4": 1, "9": 1 },
          instincts: { sp: 2 },
          bigFive: { neuroticism: 1, extraversion: -1 }
        }
      },
      {
        text: "Aku merasa tersentuh, tetapi secara naluriah aku tetap hanya memberikan sedikit celah. Aku menceritakan hal yang paling aman saja, bukan keseluruhan lukaku.",
        scores: {
          functions: { Ni: 1, Si: 1 },
          positions: { dominantNi: 1, tertiaryFi: 1 },
          enneagram: { "6": 2, "3": 1 },
          instincts: { sp: 1, so: 1 },
          temperament: { melancholic: 1 }
        }
      },
      {
        text: "Ada rasa lega yang sangat besar hingga pertahananku runtuh. Aku mengizinkan diriku menerima bantuan itu, meski setelahnya aku merasa malu.",
        scores: {
          functions: { Fe: 2, Fi: 1 },
          positions: { auxiliaryFe: 1, dominantFi: 1 },
          enneagram: { "2": 2, "9": 1 },
          instincts: { sx: 1 },
          bigFive: { agreeableness: 2 }
        }
      },
      {
        text: "Aku tersenyum berterima kasih, tetapi pikiranku langsung mencari cara logis bagaimana aku bisa membalas budi ini nanti agar aku tidak berutang apa pun.",
        scores: {
          functions: { Te: 2, Ti: 1 },
          positions: { dominantTe: 2, auxiliaryTe: 1 },
          enneagram: { "8": 2, "1": 1, "3": 1 },
          bigFive: { agreeableness: -1 },
          moral: { lawfulNeutral: 1 }
        }
      },
      {
        text: "Aku mencoba mengalihkan suasana menjadi bercanda. Aku menghargai niatnya, tetapi terlalu banyak keintiman emosional membuatku merasa tercekik.",
        scores: {
          functions: { Ne: 2, Se: 2 },
          positions: { dominantNe: 2, dominantSe: 1 },
          enneagram: { "7": 3, "9": 1 },
          instincts: { so: 1 },
          temperament: { sanguine: 2 }
        }
      }
    ]
  },
  {
    id: "q006",
    text: "Kau menyadari kau baru saja melakukan sesuatu yang diam-diam kau tahu salah atau melukai orang lain. Tidak ada yang menegur, tidak ada hukuman dari luar, dan kau bisa saja mengabaikannya. Apa yang terjadi dalam dirimu di saat-saat sunyi setelahnya?",
    options: [
      {
        text: "Batin saya terus mengadili diri sendiri. Rasa bersalah itu menetap lama, membuatku merasa kotor secara moral, dan aku diam-diam mencari cara untuk menebusnya.",
        scores: {
          functions: { Fi: 3, Si: 1 },
          positions: { dominantFi: 3, auxiliaryFi: 2 },
          enneagram: { "1": 3, "4": 2 },
          instincts: { sp: 1 },
          bigFive: { neuroticism: 2 },
          moral: { lawfulGood: 1, neutralGood: 1 }
        }
      },
      {
        text: "Aku memikirkan dampaknya pada orang itu. Aku merasa gelisah membayangkan ketidaknyamanan yang kusebabkan, dan aku akan mencari celah untuk meminta maaf atau memperbaikinya.",
        scores: {
          functions: { Fe: 3 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "2": 2, "9": 2 },
          instincts: { so: 1 },
          bigFive: { agreeableness: 2 }
        }
      },
      {
        text: "Aku memutar ulang kejadiannya dalam kepalaku, menganalisis mengapa aku mengambil keputusan itu, mencoba mencari pembenaran logis agar perasaanku lebih tenang.",
        scores: {
          functions: { Ti: 3, Ne: 1 },
          positions: { dominantTi: 3, auxiliaryTi: 1 },
          enneagram: { "5": 2, "6": 1 },
          bigFive: { neuroticism: 1 }
        }
      },
      {
        text: "Aku merasa tidak nyaman sebentar, tetapi aku sadar waktu tidak bisa diputar mundur. Aku menjadikannya pelajaran agar tidak mengulang kesalahan yang sama, lalu melangkah maju.",
        scores: {
          functions: { Te: 2, Ni: 1, Se: 1 },
          positions: { dominantTe: 2, dominantNi: 1 },
          enneagram: { "3": 2, "8": 1 },
          bigFive: { neuroticism: -1, conscientiousness: 1 },
          temperament: { choleric: 1 }
        }
      },
      {
        text: "Aku mencoba mengalihkan pikiranku ke hal lain yang lebih menyenangkan, menghindar dari perasaan berat itu karena rasanya terlalu melelahkan untuk dihadapi.",
        scores: {
          functions: { Se: 2, Ne: 2 },
          positions: { dominantSe: 1, dominantNe: 1, inferiorFi: 1 },
          enneagram: { "7": 3, "9": 1 },
          instincts: { sp: 1 },
          temperament: { sanguine: 2 }
        }
      }
    ]
  },
  {
    id: "q007",
    text: "Di tengah percakapan panjang dengan seseorang, ia mulai bercerita tentang rencana hidupnya. Ia menyebutkan detail yang sangat banyak. Apa yang secara alami paling sibuk dilakukan oleh pikiranmu saat mendengarkannya?",
    options: [
      {
        text: "Aku menangkap pola di balik semua ceritanya. Tanpa sadar, aku sudah menyimpulkan ke arah mana hidupnya akan bermuara jika ia terus memilih jalan ini.",
        scores: {
          functions: { Ni: 3 },
          positions: { dominantNi: 3, auxiliaryNi: 2 },
          enneagram: { "5": 1 },
          bigFive: { openness: 2 },
          temperament: { melancholic: 1 }
        }
      },
      {
        text: "Pikiranku meloncat ke berbagai kemungkinan lain yang bisa ia lakukan. Aku sering menyela dengan antusias, 'Bagaimana kalau kau mencoba ini juga?'",
        scores: {
          functions: { Ne: 3 },
          positions: { dominantNe: 3, auxiliaryNe: 2 },
          enneagram: { "7": 2 },
          bigFive: { openness: 3, extraversion: 1 },
          temperament: { sanguine: 2 }
        }
      },
      {
        text: "Aku menghubungkan ceritanya dengan pengalamanku sendiri atau hal-hal yang pernah kubaca di masa lalu yang mirip dengan situasinya saat ini.",
        scores: {
          functions: { Si: 3 },
          positions: { dominantSi: 3, auxiliarySi: 2 },
          enneagram: { "6": 1, "9": 1 },
          bigFive: { conscientiousness: 1 }
        }
      },
      {
        text: "Aku memperhatikan nada suaranya, perubahan raut wajahnya, dan emosi yang ia pancarkan, berusaha memberi respons yang membuatnya merasa divalidasi.",
        scores: {
          functions: { Fe: 2, Se: 1 },
          positions: { dominantFe: 2, auxiliaryFe: 1 },
          enneagram: { "2": 2, "9": 1 },
          bigFive: { agreeableness: 2 }
        }
      },
      {
        text: "Aku mendengarkan fakta-fakta yang ia berikan, lalu di kepalaku aku mulai menyortir mana rencananya yang realistis dan mana yang hanya buang-buang waktu.",
        scores: {
          functions: { Te: 3, Ti: 1 },
          positions: { dominantTe: 3, auxiliaryTe: 2 },
          enneagram: { "1": 1, "3": 1, "8": 1 },
          bigFive: { agreeableness: -1 }
        }
      }
    ]
  },
  {
    id: "q008",
    text: "Ketika kau benar-benar merasa lelah hingga tidak sanggup lagi memakai topeng sosialmu, di mana kau biasa menemukan tempat bersembunyi, dan apa yang kau lakukan di sana?",
    options: [
      {
        text: "Aku menarik diri sepenuhnya ke dalam kamar. Aku butuh kegelapan, keheningan, membiarkan pikiranku melayang mencerna setiap hal tanpa perlu menjelaskan apa pun pada siapa pun.",
        scores: {
          functions: { Ni: 2, Ti: 1, Fi: 1 },
          positions: { dominantNi: 1, dominantFi: 1, dominantTi: 1 },
          enneagram: { "5": 3, "4": 2, "9": 1 },
          instincts: { sp: 3 },
          bigFive: { extraversion: -3 }
        }
      },
      {
        text: "Aku mencari sesuatu yang bisa kunikmati secara fisik untuk mematikan isi kepala. Makan makanan favorit, menonton film berjam-jam, atau tidur panjang sampai dunia terasa lebih ringan.",
        scores: {
          functions: { Se: 2, Si: 2 },
          positions: { tertiarySe: 1, inferiorSe: 2, dominantSi: 1 },
          enneagram: { "9": 2, "7": 1 },
          instincts: { sp: 2 },
          bigFive: { conscientiousness: -1 }
        }
      },
      {
        text: "Aku akan menghubungi satu atau dua orang yang paling kupercaya. Aku tidak selalu minta solusi, aku hanya butuh tempat untuk menuangkan rasa gundah yang tertahan di dada.",
        scores: {
          functions: { Fe: 2, Ne: 1 },
          positions: { dominantFe: 1, auxiliaryFe: 1 },
          enneagram: { "2": 1, "6": 2 },
          instincts: { sx: 2, so: 1 },
          bigFive: { extraversion: 1, agreeableness: 1 }
        }
      },
      {
        text: "Aku merapikan ruangan, menyortir file, atau mengerjakan tugas remeh yang repetitif. Keteraturan di luar membantuku merapikan kekacauan di dalam kepalaku.",
        scores: {
          functions: { Te: 2, Si: 2 },
          positions: { dominantTe: 1, inferiorTe: 2, dominantSi: 1 },
          enneagram: { "1": 3, "3": 1 },
          bigFive: { conscientiousness: 2 }
        }
      },
      {
        text: "Aku pergi ke luar, berjalan tanpa arah yang jelas, melihat keramaian dari jauh, atau membiarkan badanku bergerak agar energi yang menyesakkan ini bisa keluar.",
        scores: {
          functions: { Se: 3, Ne: 1 },
          positions: { dominantSe: 2, auxiliarySe: 1 },
          enneagram: { "7": 2, "8": 1 },
          instincts: { sx: 1 },
          temperament: { sanguine: 1, choleric: 1 }
        }
      }
    ]
  },
  {
    id: "q009",
    text: "Seseorang mengambil pujian atas hasil kerjamu di depan orang banyak. Ia menyampaikannya dengan halus, seolah itu adalah kerja kerasnya. Apa reaksi spontanmu sebelum kau meredamnya?",
    options: [
      {
        text: "Aku akan segera memotong ucapannya dengan kalimat yang objektif dan dingin, membeberkan fakta kronologis tentang siapa yang sebenarnya mengerjakan bagian tersebut.",
        scores: {
          functions: { Te: 3, Ti: 1 },
          positions: { dominantTe: 3, auxiliaryTe: 1 },
          enneagram: { "8": 3, "3": 1, "1": 1 },
          bigFive: { agreeableness: -2 },
          moral: { lawfulNeutral: 1 }
        }
      },
      {
        text: "Darahku mendidih karena ketidakadilannya, tetapi aku menahan diri di depan umum. Aku akan mendatangi orang itu secara pribadi setelahnya dan memberinya peringatan keras.",
        scores: {
          functions: { Fi: 2, Ni: 1 },
          positions: { dominantFi: 1, tertiaryNi: 1 },
          enneagram: { "1": 2, "4": 1, "6": 1 },
          instincts: { sx: 1 },
          bigFive: { neuroticism: 1 }
        }
      },
      {
        text: "Aku merasa marah sekaligus bingung. Aku diam saja karena aku benci menciptakan suasana canggung atau keributan di depan banyak orang. Biarlah, aku tahu kebenarannya.",
        scores: {
          functions: { Fe: 2, Si: 1, Fi: 1 },
          positions: { dominantFe: 1, auxiliaryFe: 1 },
          enneagram: { "9": 3, "2": 1 },
          instincts: { sp: 1 },
          bigFive: { agreeableness: 2, extraversion: -1 }
        }
      },
      {
        text: "Aku merespons dengan candaan sarkastis di tempat itu juga, memutar balik kata-katanya agar orang lain sadar ada yang ganjil, tanpa membuatnya terlihat seperti serangan langsung.",
        scores: {
          functions: { Ne: 3, Ti: 2 },
          positions: { dominantNe: 2, auxiliaryTi: 1 },
          enneagram: { "7": 1, "5": 1, "3": 1 },
          bigFive: { extraversion: 1, openness: 1 }
        }
      },
      {
        text: "Aku menganalisis motifnya. Mengapa ia merasa perlu melakukan ini? Apa ia merasa terancam? Pikiranku sibuk membedah psikologinya daripada marah pada tindakannya.",
        scores: {
          functions: { Ni: 3, Ti: 2 },
          positions: { dominantNi: 2, dominantTi: 1 },
          enneagram: { "5": 3 },
          bigFive: { agreeableness: 1, neuroticism: -1 }
        }
      }
    ]
  },
  {
    id: "q010",
    text: "Ada sebuah rahasia yang kau simpan rapat-rapat. Hal yang jika orang tahu, mungkin akan mengubah cara mereka memandangmu. Bagaimana cara pikiranmu memperlakukan rahasia ini di saat sunyi?",
    options: [
      {
        text: "Aku menguncinya jauh di dasar pikiran. Kadang ia muncul sebagai rasa takut bahwa suatu hari aku akan ketahuan dan ditinggalkan, membuatku waspada pada siapa aku berdekatan.",
        scores: {
          functions: { Si: 1, Fi: 1 },
          positions: { tertiarySi: 1, inferiorNe: 1 },
          enneagram: { "6": 3, "3": 1 },
          instincts: { sp: 2 },
          bigFive: { neuroticism: 2 }
        }
      },
      {
        text: "Aku menerimanya sebagai bagian dari bayanganku. Kadang aku justru merasa rahasia ini membuatku unik, sebuah kedalaman melankolis yang membedakanku dari orang lain.",
        scores: {
          functions: { Fi: 3, Ni: 1 },
          positions: { dominantFi: 2, auxiliaryNi: 1 },
          enneagram: { "4": 3 },
          instincts: { sx: 1 },
          bigFive: { openness: 1, neuroticism: 1 },
          temperament: { melancholic: 2 }
        }
      },
      {
        text: "Aku merasionalisasinya. Aku menyusun alasan-alasan kuat mengapa hal itu harus terjadi, meyakinkan diriku bahwa dalam konteks tertentu, itu bukanlah suatu keburukan.",
        scores: {
          functions: { Ti: 3 },
          positions: { dominantTi: 2, auxiliaryTi: 2 },
          enneagram: { "5": 1, "1": 1 },
          bigFive: { neuroticism: -1 }
        }
      },
      {
        text: "Aku jarang memikirkannya. Bagiku, masa lalu adalah masa lalu. Selama hal itu tidak mengganggu rencanaku di masa depan dan duniaku sekarang, ia tidak memiliki kekuatan atas diriku.",
        scores: {
          functions: { Se: 2, Te: 2 },
          positions: { dominantSe: 1, dominantTe: 1 },
          enneagram: { "8": 2, "7": 2 },
          bigFive: { neuroticism: -2, conscientiousness: -1 },
          temperament: { choleric: 1, sanguine: 1 }
        }
      },
      {
        text: "Rahasia itu terkadang muncul sebagai rasa bersalah yang berat. Aku memiliki dorongan kuat untuk diampuni, dan diam-diam aku berusaha menebusnya dengan berbuat baik pada orang lain.",
        scores: {
          functions: { Fe: 2, Fi: 2 },
          positions: { dominantFe: 1, dominantFi: 1 },
          enneagram: { "1": 2, "2": 2 },
          instincts: { so: 1 },
          bigFive: { agreeableness: 1, neuroticism: 1 }
        }
      }
    ]
  },
  {
    id: "q011",
    text: "Dalam tiga kejadian terakhir saat kau merasa marah karena ketidakadilan, bagaimana amarah itu bermanifestasi di dalam dirimu?",
    options: [
      {
        text: "Menjadi energi dingin dan terstruktur. Aku menyusun rencana untuk menjatuhkan argumen atau sistem yang salah itu tanpa terlihat emosional.",
        scores: {
          functions: { Te: 3, Ni: 1 },
          positions: { dominantTe: 2, auxiliaryNi: 1 },
          enneagram: { "1": 2, "8": 2, "5": 1 },
          bigFive: { agreeableness: -1 },
          moral: { lawfulEvil: 1, lawfulNeutral: 1 }
        }
      },
      {
        text: "Menjadi letupan tajam. Aku tidak tahan untuk tidak mengatakannya saat itu juga, sering kali dengan nada yang lebih keras dari yang kurencanakan.",
        scores: {
          functions: { Se: 2, Fi: 2 },
          positions: { dominantSe: 1, tertiaryTe: 1 },
          enneagram: { "8": 3, "cp6": 2, "4": 1 },
          instincts: { sx: 3 },
          temperament: { choleric: 3 }
        }
      },
      {
        text: "Menjadi kebisuan yang kaku. Aku menarik diri, memproses rasa kecewa itu sendirian, karena aku takut jika aku bicara, aku akan menghancurkan segalanya.",
        scores: {
          functions: { Fi: 3, Si: 1 },
          positions: { dominantFi: 2, inferiorTe: 2 },
          enneagram: { "9": 3, "4": 1, "5": 1 },
          instincts: { sp: 2 },
          temperament: { melancholic: 2 }
        }
      },
      {
        text: "Menjadi ironi dan sindiran. Aku menertawakan kebodohan situasi tersebut, merangkai argumen sarkastis untuk menunjukkan betapa absurdnya hal itu.",
        scores: {
          functions: { Ne: 3, Ti: 2 },
          positions: { dominantNe: 2, dominantTi: 1 },
          enneagram: { "7": 2, "5": 1, "3": 1 },
          bigFive: { openness: 1, agreeableness: -1 }
        }
      },
      {
        text: "Menjadi dorongan untuk menggalang dukungan. Aku mencari orang-orang yang merasakan hal sama untuk memastikan perasaanku valid dan menyatukan kekuatan.",
        scores: {
          functions: { Fe: 3 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "6": 2, "2": 1, "9": 1 },
          instincts: { so: 3 },
          bigFive: { extraversion: 2 }
        }
      }
    ]
  },
  {
    id: "q012",
    text: "Saat kau telanjur terluka oleh seseorang yang sangat kau sayangi, apa bentuk pelindung pertama yang secara naluriah kau bangun?",
    options: [
      {
        text: "Aku mencari alasan logis atas tindakannya. Jika aku bisa memahami cacat dalam cara berpikirnya, rasa sakitku menjadi lebih bisa dikendalikan.",
        scores: {
          functions: { Ti: 3, Ne: 1 },
          positions: { dominantTi: 2, auxiliaryTi: 1 },
          enneagram: { "5": 3, "6": 1 },
          instincts: { sp: 1 },
          temperament: { phlegmatic: 1 }
        }
      },
      {
        text: "Aku menutup akses emosional. Aku mungkin masih berbicara padanya, tetapi kehangatanku kucabut seutuhnya. Ia menjadi orang asing bagiku.",
        scores: {
          functions: { Ni: 2, Fi: 2 },
          positions: { dominantNi: 1, dominantFi: 1 },
          enneagram: { "5": 1, "8": 1, "4": 1 },
          instincts: { sp: 2 },
          moral: { trueNeutral: 1 }
        }
      },
      {
        text: "Aku mencoba melupakannya dengan mencari sensasi atau kesibukan baru. Aku tidak ingin berlama-lama di dalam perasaan yang membuatku lumpuh.",
        scores: {
          functions: { Se: 3, Ne: 2 },
          positions: { dominantSe: 2, dominantNe: 1 },
          enneagram: { "7": 3, "3": 1 },
          instincts: { sx: 1 },
          bigFive: { neuroticism: -1 }
        }
      },
      {
        text: "Aku menelan luka itu dan menyalahkan diriku sendiri. Aku mencari-cari di mana letak kekuranganku yang membuatnya tega melakukan itu.",
        scores: {
          functions: { Si: 2, Fi: 2 },
          positions: { dominantSi: 1, auxiliaryFi: 1 },
          enneagram: { "4": 2, "1": 1, "9": 2 },
          bigFive: { neuroticism: 3 },
          temperament: { melancholic: 3 }
        }
      },
      {
        text: "Aku mengonfrontasinya. Aku memaksanya melihat luka yang ia buat, agar ia memikul rasa bersalah yang setimpal dengan apa yang kurasakan.",
        scores: {
          functions: { Fe: 2, Te: 2 },
          positions: { dominantFe: 1, dominantTe: 1 },
          enneagram: { "8": 2, "2": 2 },
          instincts: { sx: 2 },
          bigFive: { agreeableness: -2 }
        }
      }
    ]
  },
  {
    id: "q013",
    text: "Ketika kau dituntut memimpin suatu keadaan darurat tanpa persiapan sama sekali, apa yang biasanya otomatis kau lakukan?",
    options: [
      {
        text: "Aku langsung melihat hal-hal fisik yang bisa dikendalikan di sekitarku, memberi instruksi singkat dan bergerak cepat menyesuaikan diri dengan kekacauan.",
        scores: {
          functions: { Se: 3, Te: 1 },
          positions: { dominantSe: 3, auxiliaryTe: 1 },
          enneagram: { "8": 2, "3": 1 },
          instincts: { sp: 1 },
          bigFive: { extraversion: 2 },
          temperament: { choleric: 2 }
        }
      },
      {
        text: "Aku menarik napas sebentar, melihat benang merah dari masalah tersebut, lalu menetapkan satu arah utama yang harus dituju agar semua orang tidak panik.",
        scores: {
          functions: { Ni: 3, Te: 2 },
          positions: { dominantNi: 2, auxiliaryTe: 2 },
          enneagram: { "1": 2, "5": 1 },
          bigFive: { conscientiousness: 2 }
        }
      },
      {
        text: "Aku segera memastikan keselamatan dan kenyamanan orang-orang terlebih dahulu, menenangkan mereka sebelum memikirkan solusi teknisnya.",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "2": 3, "9": 1 },
          instincts: { so: 2 },
          bigFive: { agreeableness: 3 }
        }
      },
      {
        text: "Aku mengingat-ingat prosedur atau aturan yang ada untuk situasi serupa, mencari pedoman pasti agar langkah yang kuambil tidak salah.",
        scores: {
          functions: { Si: 3, Te: 2 },
          positions: { dominantSi: 3, auxiliaryTe: 1 },
          enneagram: { "6": 3, "1": 1 },
          bigFive: { conscientiousness: 2 }
        }
      },
      {
        text: "Aku melemparkan ide-ide cepat secara spontan kepada kelompok, mencari cara keluar yang tidak biasa dari jalan buntu yang ada di depan mata.",
        scores: {
          functions: { Ne: 3, Ti: 1 },
          positions: { dominantNe: 3, auxiliaryTi: 1 },
          enneagram: { "7": 2, "3": 1 },
          temperament: { sanguine: 2 }
        }
      }
    ]
  },
  {
    id: "q014",
    text: "Malam hari sebelum tidur, saat tidak ada yang perlu dikerjakan, ke mana pikiranmu paling sering mengembara?",
    options: [
      {
        text: "Meninjau kembali percakapan dan kejadian hari ini, memikirkan apa yang salah kuucapkan dan bagaimana aku seharusnya bersikap lebih baik.",
        scores: {
          functions: { Si: 2, Fe: 2, Fi: 1 },
          positions: { dominantSi: 1, tertiaryFe: 1 },
          enneagram: { "6": 2, "1": 2, "4": 1 },
          bigFive: { neuroticism: 2 },
          temperament: { melancholic: 2 }
        }
      },
      {
        text: "Membayangkan skenario masa depan yang mungkin terjadi, dari yang paling ideal hingga yang paling abstrak, membiarkan ide bercabang ke mana-mana.",
        scores: {
          functions: { Ne: 3, Ni: 1 },
          positions: { dominantNe: 3, auxiliaryNe: 2 },
          enneagram: { "7": 2, "5": 1 },
          bigFive: { openness: 3 },
          temperament: { sanguine: 1 }
        }
      },
      {
        text: "Mengurai sebuah konsep, sistem, atau masalah yang belum selesai kupahami. Membangun struktur logika yang utuh di dalam kepalaku.",
        scores: {
          functions: { Ti: 3, Ni: 1 },
          positions: { dominantTi: 3, auxiliaryTi: 2 },
          enneagram: { "5": 3 },
          bigFive: { openness: 1, conscientiousness: 1 }
        }
      },
      {
        text: "Memikirkan satu tujuan atau visi jangka panjangku. Aku merenungkan apakah tindakanku saat ini sudah membawaku lebih dekat ke sana.",
        scores: {
          functions: { Ni: 3, Te: 1 },
          positions: { dominantNi: 3, auxiliaryNi: 2 },
          enneagram: { "3": 2, "1": 1 },
          bigFive: { conscientiousness: 2 }
        }
      },
      {
        text: "Aku jarang berpikir terlalu rumit. Aku lebih suka merasakan kenyamanan kasur, mendengarkan musik, atau langsung tertidur tanpa banyak beban.",
        scores: {
          functions: { Se: 3, Si: 1 },
          positions: { dominantSe: 2, auxiliarySe: 1 },
          enneagram: { "9": 3, "8": 1 },
          instincts: { sp: 2 },
          bigFive: { neuroticism: -2 }
        }
      }
    ]
  },
  {
    id: "q015",
    text: "Seseorang yang kau kenal memiliki potensi besar namun terus-menerus membuat pilihan hidup yang merusak dirinya sendiri. Apa yang paling mungkin kau rasakan dan lakukan?",
    options: [
      {
        text: "Aku merasa frustrasi pada ketidakefisienannya. Aku mungkin akan memberinya rencana perbaikan yang tegas, dan jika ia tidak mau berubah, aku akan meninggalkannya.",
        scores: {
          functions: { Te: 3, Ni: 1 },
          positions: { dominantTe: 2, auxiliaryTe: 2 },
          enneagram: { "1": 2, "8": 2, "3": 1 },
          bigFive: { agreeableness: -1 }
        }
      },
      {
        text: "Aku merasa sedih mendalam untuknya. Aku akan terus mendampinginya, mendengarkan keluhannya, dan berharap kasih sayangku cukup untuk menyelamatkannya.",
        scores: {
          functions: { Fe: 3, Fi: 1 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "2": 3, "9": 2 },
          instincts: { so: 1, sx: 1 },
          bigFive: { agreeableness: 3 }
        }
      },
      {
        text: "Aku menganalisis pola psikologis di balik tindakannya. Aku mungkin memberinya pandangan objektif tentang mengapa ia terjebak, tapi aku tidak memaksa.",
        scores: {
          functions: { Ti: 2, Ni: 2 },
          positions: { dominantTi: 1, auxiliaryTi: 1 },
          enneagram: { "5": 2 },
          bigFive: { agreeableness: 1 }
        }
      },
      {
        text: "Aku diam-diam menghakimi pilihannya karena aku tahu batas benarku sendiri. Aku menjaga jarak agar tidak ikut terseret ke dalam kekacauannya.",
        scores: {
          functions: { Fi: 2, Si: 2 },
          positions: { dominantFi: 2, tertiarySi: 1 },
          enneagram: { "1": 2, "4": 1 },
          instincts: { sp: 2 },
          moral: { lawfulNeutral: 1 }
        }
      },
      {
        text: "Aku merasa geregetan dan mungkin akan memberinya kejutan atau mengajaknya ke lingkungan baru agar sudut pandangnya terbuka dan ia bisa melihat kemungkinan lain.",
        scores: {
          functions: { Ne: 2, Se: 2 },
          positions: { dominantNe: 1, dominantSe: 1 },
          enneagram: { "7": 2, "2": 1 },
          bigFive: { extraversion: 2 }
        }
      }
    ]
  },
  {
    id: "q016",
    text: "Ingatlah saat kau harus mengambil keputusan yang berlawanan dengan apa yang diharapkan oleh keluarga atau orang tuamu. Apa rintangan batin terberatmu?",
    options: [
      {
        text: "Perasaan bahwa aku berkhianat. Ada ketakutan bahwa keputusanku akan merusak harmoni dan mengecewakan mereka yang sudah berkorban untukku.",
        scores: {
          functions: { Fe: 3, Si: 2 },
          positions: { dominantFe: 2, auxiliarySi: 1 },
          enneagram: { "9": 2, "2": 2, "6": 1 },
          instincts: { so: 2 },
          bigFive: { agreeableness: 2 }
        }
      },
      {
        text: "Keraguan pada diriku sendiri. Apakah keputusanku ini benar-benar yang terbaik, atau apakah pengalaman dan petuah mereka masa lalu sebenarnya lebih aman?",
        scores: {
          functions: { Si: 3, Ne: 1 },
          positions: { dominantSi: 2, inferiorNe: 2 },
          enneagram: { "6": 3, "1": 1 },
          instincts: { sp: 1 },
          bigFive: { neuroticism: 2 }
        }
      },
      {
        text: "Aku tidak terlalu merasa terbebani. Jika argumenku masuk akal dan tujuanku jelas, aku akan jalan terus. Kehidupanku adalah milikku.",
        scores: {
          functions: { Te: 3, Ti: 1 },
          positions: { dominantTe: 3, dominantTi: 1 },
          enneagram: { "8": 3, "3": 2, "5": 1 },
          instincts: { sp: 2 },
          bigFive: { agreeableness: -2 }
        }
      },
      {
        text: "Rasa bersalah rahasia karena memilih diriku sendiri. Aku tahu aku harus setia pada nilai batinku, tapi rasanya sangat sepi harus berdiri sendirian menentang mereka.",
        scores: {
          functions: { Fi: 3 },
          positions: { dominantFi: 3, auxiliaryFi: 2 },
          enneagram: { "4": 3, "1": 1 },
          instincts: { sx: 1 },
          bigFive: { neuroticism: 2 },
          temperament: { melancholic: 2 }
        }
      },
      {
        text: "Ketakutan bahwa rencanaku akan gagal, dan pada akhirnya aku harus mengakui bahwa peringatan mereka benar. Aku benci terlihat bodoh atau gagal membuktikan diri.",
        scores: {
          functions: { Ni: 2, Te: 1 },
          positions: { dominantNi: 1, tertiaryTe: 1 },
          enneagram: { "3": 3, "1": 1, "5": 1 },
          bigFive: { neuroticism: 1 }
        }
      }
    ]
  },
  {
    id: "q017",
    text: "Saat berhadapan dengan orang yang memanipulasi fakta demi keuntungannya sendiri, namun semua orang tampaknya percaya padanya, apa reaksimu?",
    options: [
      {
        text: "Aku merasa jijik secara moral. Aku mungkin tidak selalu melabraknya secara terbuka, tetapi aku menolak untuk ikut campur dan diam-diam menjaga nilai kebenaranku sendiri.",
        scores: {
          functions: { Fi: 3, Si: 1 },
          positions: { dominantFi: 3, auxiliaryFi: 1 },
          enneagram: { "1": 2, "4": 1 },
          moral: { lawfulGood: 1, neutralGood: 1 }
        }
      },
      {
        text: "Aku langsung mengumpulkan bukti, menyusun argumen yang tak terbantahkan, lalu membongkar logikanya yang cacat di depan orang-orang agar ia kehilangan kredibilitas.",
        scores: {
          functions: { Ti: 3, Te: 2 },
          positions: { dominantTi: 2, dominantTe: 2 },
          enneagram: { "8": 2, "5": 2 },
          moral: { lawfulNeutral: 1 }
        }
      },
      {
        text: "Aku membaca motifnya sejak awal. Aku membiarkan dia merasa menang, sementara secara perlahan aku menyiapkan strategi lain untuk memastikan ia tidak bisa menyentuh wilayahku.",
        scores: {
          functions: { Ni: 3, Te: 1 },
          positions: { dominantNi: 3, auxiliaryNi: 2 },
          enneagram: { "5": 2, "3": 1, "8": 1 },
          moral: { trueNeutral: 1 }
        }
      },
      {
        text: "Aku mencoba mengingatkan orang lain secara halus. Aku menyisipkan keraguan pada mereka tanpa memicu konflik besar yang akan merusak keharmonisan kelompok.",
        scores: {
          functions: { Fe: 3, Ni: 1 },
          positions: { dominantFe: 2, auxiliaryFe: 2 },
          enneagram: { "9": 2, "2": 1, "6": 1 },
          instincts: { so: 2 }
        }
      },
      {
        text: "Aku merespons secara langsung dan fisik. Jika aku bisa menghentikannya saat itu juga, aku akan maju menghadapinya tanpa basa-basi.",
        scores: {
          functions: { Se: 3, Te: 1 },
          positions: { dominantSe: 3 },
          enneagram: { "8": 3, "cp6": 1 },
          instincts: { sx: 2 },
          temperament: { choleric: 3 }
        }
      }
    ]
  },
  {
    id: "q018",
    text: "Dalam lingkungan kerja atau sekolah yang menuntut rutinitas ketat setiap hari, apa keluhan utamamu yang biasanya muncul?",
    options: [
      {
        text: "Pikiranku terasa mati. Aku benci ketika tidak ada ruang untuk berimajinasi, mengeksplorasi cara baru, atau sekadar mempertanyakan 'bagaimana jika?'.",
        scores: {
          functions: { Ne: 3 },
          positions: { dominantNe: 3, auxiliaryNe: 2 },
          enneagram: { "7": 3, "4": 1 },
          bigFive: { openness: 3 },
          temperament: { sanguine: 2 }
        }
      },
      {
        text: "Bukan rutinitasnya yang bermasalah, tetapi ketidakefisienannya. Aku benci jika rutinitas itu penuh dengan aturan usang yang sebenarnya bisa dipersingkat.",
        scores: {
          functions: { Te: 3, Ti: 1 },
          positions: { dominantTe: 2, dominantTi: 1 },
          enneagram: { "1": 2, "3": 1, "8": 1 },
          bigFive: { conscientiousness: 2 }
        }
      },
      {
        text: "Aku baik-baik saja dengan rutinitas. Itu memberiku rasa aman dan prediktabilitas. Aku justru lelah jika keadaan berubah mendadak tanpa pemberitahuan.",
        scores: {
          functions: { Si: 3 },
          positions: { dominantSi: 3, auxiliarySi: 2 },
          enneagram: { "6": 3, "9": 1 },
          instincts: { sp: 3 },
          bigFive: { openness: -2, conscientiousness: 2 }
        }
      },
      {
        text: "Aku merasa terjebak secara batin. Aku butuh ruang untuk menjadi diriku sendiri dan mengekspresikan perasaanku, bukan sekadar menjadi mesin yang bekerja.",
        scores: {
          functions: { Fi: 3 },
          positions: { dominantFi: 3, auxiliaryFi: 2 },
          enneagram: { "4": 3, "9": 1 },
          instincts: { sx: 1 },
          temperament: { melancholic: 2 }
        }
      },
      {
        text: "Aku cepat bosan secara fisik. Aku butuh bergerak, bertindak, bereaksi pada sesuatu yang nyata dan tidak terduga, bukan sekadar duduk menatap hal yang sama setiap hari.",
        scores: {
          functions: { Se: 3 },
          positions: { dominantSe: 3, auxiliarySe: 2 },
          enneagram: { "7": 2, "8": 1 },
          bigFive: { extraversion: 2 }
        }
      }
    ]
  },
  {
    id: "q019",
    text: "Ketika kau jatuh cinta atau sangat tertarik pada seseorang, bagaimana caramu memproses perasaan itu saat tidak bersamanya?",
    options: [
      {
        text: "Aku membangun skenario masa depan bersamanya di kepalaku. Aku melihat tanda-tanda kecil darinya dan menyatukannya menjadi keyakinan apakah ia orang yang tepat.",
        scores: {
          functions: { Ni: 3, Fi: 1 },
          positions: { dominantNi: 2, tertiaryFi: 1 },
          enneagram: { "5": 1, "4": 1 },
          instincts: { sx: 2 },
          bigFive: { openness: 2 }
        }
      },
      {
        text: "Aku sering memikirkan kembali memori interaksi kami. Aku mengingat detail ucapannya, bau parfumnya, dan suasana saat kami bersama untuk merasakan kembali kehangatannya.",
        scores: {
          functions: { Si: 3, Fi: 1 },
          positions: { dominantSi: 2, tertiaryFi: 1 },
          enneagram: { "9": 1, "6": 1 },
          bigFive: { conscientiousness: 1 }
        }
      },
      {
        text: "Aku merasakan gelombang emosi yang sangat dalam dan pribadi. Aku mungkin menuliskannya, mendengarkan musik yang cocok, namun jarang menunjukkannya langsung padanya.",
        scores: {
          functions: { Fi: 3, Ne: 1 },
          positions: { dominantFi: 3, auxiliaryFi: 2 },
          enneagram: { "4": 3 },
          instincts: { sx: 2 },
          temperament: { melancholic: 2 }
        }
      },
      {
        text: "Aku ingin segera bertemu lagi dan melakukan hal-hal nyata. Aku tidak suka hanya memikirkannya; aku ingin melihatnya, menyentuhnya, dan menghabiskan waktu bersama secara fisik.",
        scores: {
          functions: { Se: 3, Fe: 1 },
          positions: { dominantSe: 3, auxiliarySe: 2 },
          enneagram: { "7": 2, "8": 1, "2": 1 },
          instincts: { sx: 3 },
          bigFive: { extraversion: 3 }
        }
      },
      {text: "Aku membedah kecocokan kami secara logis. Apakah visi kami sejalan? Apakah kami saling melengkapi? Aku tidak ingin emosi membutakanku dari realitas kecocokan itu.",
        scores: {
          functions: { Ti: 2, Te: 2 },
          positions: { dominantTi: 1, dominantTe: 1 },
          enneagram: { "5": 2, "1": 1, "3": 1 },
          bigFive: { agreeableness: -1 }
        }
      }
    ]
  },
  {
    id: "q020",
    text: "Saat kau menghadapi penolakan yang cukup menyakitkan—entah dalam pekerjaan, cinta, atau pertemanan—apa narasi yang pertama kali diputar oleh batinmu?",
    options: [
      {
        text: "“Mungkin ada yang salah pada esensi diriku. Apakah aku kurang? Apakah aku tidak akan pernah benar-benar dipahami dan diinginkan?”",
        scores: {
          functions: { Fi: 3, Ni: 1 },
          positions: { dominantFi: 2, inferiorTe: 1 },
          enneagram: { "4": 3, "2": 1 },
          instincts: { sx: 1 },
          bigFive: { neuroticism: 3 }
        }
      },
      {
        text: "“Ini tidak efisien dan merusak rencanaku. Aku harus segera mencari alternatif lain, memperbaiki kelemahanku, dan membuktikan bahwa mereka salah menolakku.”",
        scores: {
          functions: { Te: 3, Ni: 1 },
          positions: { dominantTe: 3, auxiliaryTe: 2 },
          enneagram: { "3": 3, "8": 2, "1": 1 },
          bigFive: { conscientiousness: 2, neuroticism: -1 }
        }
      },
      {
        text: "“Apakah aku melakukan kesalahan langkah? Biarku analisis kembali situasinya agar aku tahu persis di mana letak ketidaksesuaiannya secara logis.”",
        scores: {
          functions: { Ti: 3, Si: 1 },
          positions: { dominantTi: 3, auxiliaryTi: 2 },
          enneagram: { "5": 3, "6": 1 },
          temperament: { melancholic: 1 }
        }
      },
      {
        text: "“Ternyata prediksiku benar. Semuanya selalu mengarah pada kegagalan ini, aku hanya menunggu waktunya saja.”",
        scores: {
          functions: { Ni: 2, Fi: 1 },
          positions: { dominantNi: 1, tertiaryFi: 1 },
          enneagram: { "5": 1, "4": 1 },
          bigFive: { neuroticism: 2 }
        }
      },
      {
        text: "“Masih banyak kesempatan lain. Dunia terlalu luas untuk meratapi satu pintu yang tertutup. Aku akan mencari keseruan baru untuk melupakannya.”",
        scores: {
          functions: { Ne: 2, Se: 2 },
          positions: { dominantNe: 2, dominantSe: 2 },
          enneagram: { "7": 3 },
          bigFive: { openness: 2, neuroticism: -2 },
          temperament: { sanguine: 3 }
        }
      }
    ]
  },
  {
    id: "q021",
    text: "Seseorang melempar kalimat yang terdengar seperti pujian, namun kau menangkap duri yang samar di baliknya. Tidak ada yang menyadari sindiran itu selain kau. Apa reaksi alamimu?",
    options: [
      {
        text: "Pikiranku langsung membongkar motifnya. Aku mengaitkan kalimat itu dengan interaksi kami sebelumnya untuk memahami mengapa ia merasa terancam atau perlu menjatuhkanku.",
        scores: {
          functions: { Ni: 3, Ti: 2 },
          positions: { dominantNi: 2, auxiliaryTi: 1 },
          enneagram: { "5": 2, "6": 1 },
          bigFive: { agreeableness: -1 }
        }
      },
      {
        text: "Aku merespons dengan senyum tipis, lalu membalasnya dengan kalimat yang sama halusnya, namun cukup tajam untuk memberitahunya bahwa aku menyadari permainannya.",
        scores: {
          functions: { Ne: 2, Fe: 2 },
          positions: { dominantNe: 1, tertiaryFe: 1 },
          enneagram: { "3": 2, "8": 1 },
          bigFive: { extraversion: 1 },
          moral: { chaoticNeutral: 1 }
        }
      },
      {
        text: "Aku merasa sakit hati dan memikirkan kalimat itu berulang kali setelahnya. Aku tidak membalas di tempat karena aku benci konfrontasi, namun kepercayaanku padanya hancur.",
        scores: {
          functions: { Fi: 3, Si: 2 },
          positions: { dominantFi: 3, tertiarySi: 1 },
          enneagram: { "4": 2, "9": 2 },
          instincts: { sp: 1 },
          bigFive: { neuroticism: 2 },
          temperament: { melancholic: 2 }
        }
      },
      {
        text: "Aku mengabaikan duri itu sepenuhnya. Menanggapi sindiran kecil hanya akan menguras energiku dan merusak suasana. Aku memilih untuk tidak peduli.",
        scores: {
          functions: { Te: 2, Se: 2 },
          positions: { dominantTe: 1, dominantSe: 1 },
          enneagram: { "9": 2, "8": 1 },
          bigFive: { neuroticism: -2 },
          temperament: { phlegmatic: 2 }
        }
      },
      {
        text: "Aku mencatatnya sebagai bahaya potensial. Kewaspadaanku meningkat, dan diam-diam aku mulai membangun tembok agar ia tidak bisa lagi menyentuh area pribadiku.",
        scores: {
          functions: { Si: 3, Te: 1 },
          positions: { dominantSi: 2, auxiliaryTe: 1 },
          enneagram: { "6": 3, "1": 1 },
          instincts: { sp: 2 },
          moral: { trueNeutral: 1 }
        }
      }
    ]
  },
  {
    id: "q022",
    text: "Di sebuah tempat umum yang cukup ramai, kau melihat seseorang duduk sendirian dan tampak berusaha keras menahan tangis. Apa dorongan pertama yang muncul di batinmu?",
    options: [
      {
        text: "Aku merasa dadaku ikut sesak. Aku ingin menghampirinya, menawarkan tisu atau sekadar duduk di dekatnya agar ia tahu ia tidak sendirian.",
        scores: {
          functions: { Fe: 3, Fi: 1 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "2": 3, "9": 1 },
          instincts: { so: 2 },
          bigFive: { agreeableness: 3, extraversion: 1 }
        }
      },
      {
        text: "Aku memperhatikannya dari jauh. Ada empati yang mengalir, tetapi aku berasumsi bahwa ia mungkin menginginkan privasi, jadi aku memilih untuk tidak ikut campur.",
        scores: {
          functions: { Fi: 2, Ni: 2 },
          positions: { dominantFi: 2, dominantNi: 1 },
          enneagram: { "9": 2, "5": 1, "4": 1 },
          instincts: { sp: 2 },
          bigFive: { introversion: 2 }
        }
      },
      {
        text: "Aku merasa sedikit canggung. Situasi emosional yang tumpah di ruang publik membuatku tidak tahu harus berbuat apa, jadi aku mengalihkan pandangan.",
        scores: {
          functions: { Ti: 2, Te: 2 },
          positions: { inferiorFe: 2, inferiorFi: 1 },
          enneagram: { "5": 2, "3": 1 },
          bigFive: { agreeableness: -1 },
          temperament: { phlegmatic: 1 }
        }
      },
      {
        text: "Pikiranku secara otomatis mencoba menebak apa yang baru saja terjadi padanya berdasarkan petunjuk visual—pakaiannya, barang bawaannya, atau layar ponselnya.",
        scores: {
          functions: { Se: 2, Ti: 2, Ne: 1 },
          positions: { dominantSe: 1, dominantNe: 1, auxiliaryTi: 1 },
          enneagram: { "7": 1, "5": 1 },
          bigFive: { openness: 1 }
        }
      },
      {
        text: "Aku merasa terganggu jika tangisannya mulai menarik perhatian banyak orang atau membuat suasana menjadi tidak nyaman, meski aku menyimpannya dalam hati.",
        scores: {
          functions: { Si: 2, Te: 2 },
          positions: { dominantSi: 1, dominantTe: 1 },
          enneagram: { "1": 2, "8": 1 },
          bigFive: { agreeableness: -2 },
          temperament: { choleric: 1 }
        }
      }
    ]
  },
  {
    id: "q023",
    text: "Seseorang yang perlahan mulai dekat denganmu tiba-tiba menunjukkan sifat yang sangat bergantung (clingy). Ia terus meminta waktu dan validasimu. Apa yang terjadi dalam dirimu?",
    options: [
      {
        text: "Aku merasa tercekik. Ruang gerakku terasa dirampas. Aku akan secara bertahap menghindar, membalas pesan lebih lama, dan menciptakan jarak emosional.",
        scores: {
          functions: { Ti: 2, Se: 2, Fi: 1 },
          positions: { dominantTi: 1, dominantSe: 1, inferiorFe: 1 },
          enneagram: { "5": 3, "7": 2, "8": 1 },
          instincts: { sp: 3 },
          bigFive: { agreeableness: -1, extraversion: -1 }
        }
      },
      {
        text: "Awalnya aku merasa berharga karena dibutuhkan, tetapi lama-kelamaan aku kelelahan. Aku sulit berkata 'tidak' secara langsung karena takut menyakitinya.",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 2, auxiliaryFe: 2 },
          enneagram: { "2": 3, "9": 2 },
          instincts: { so: 2 },
          bigFive: { agreeableness: 2, neuroticism: 1 }
        }
      },
      {
        text: "Aku akan menetapkan batasan yang jelas dan tegas. Aku memberitahunya bahwa aku menghargainya, tetapi aku memiliki duniaku sendiri yang tidak bisa terus-menerus diganggu.",
        scores: {
          functions: { Te: 3, Ni: 1 },
          positions: { dominantTe: 3, auxiliaryTe: 1 },
          enneagram: { "8": 2, "1": 2, "3": 1 },
          instincts: { sp: 1 },
          bigFive: { conscientiousness: 2, agreeableness: -1 }
        }
      },
      {
        text: "Aku merasa simpati pada akar rasa tidak amannya. Aku mencoba mengarahkan percakapan agar ia bisa menyadari nilainya sendiri tanpa harus bergantung padaku.",
        scores: {
          functions: { Ni: 3, Fe: 2 },
          positions: { dominantNi: 2, auxiliaryFe: 2 },
          enneagram: { "4": 1, "2": 1, "9": 1 },
          bigFive: { openness: 1 }
        }
      },
      {
        text: "Aku merasa terbebani, lalu mulai merasa kesal secara batin karena ia tidak bisa berdiri sendiri. Namun, aku mungkin tetap menemaninya semampuku karena rasa kewajiban moral.",
        scores: {
          functions: { Fi: 2, Si: 2 },
          positions: { dominantFi: 1, dominantSi: 1 },
          enneagram: { "1": 2, "6": 2 },
          moral: { lawfulGood: 1, lawfulNeutral: 1 }
        }
      }
    ]
  },
  {
    id: "q024",
    text: "Hobimu yang biasanya menjadi tempat pelarian, tiba-tiba terasa hambar. Tidak ada percikan kegembiraan saat melakukannya. Apa yang kau asumsikan sedang terjadi pada dirimu?",
    options: [
      {
        text: "Aku merasa aku sedang mandek dan butuh rangsangan baru. Pikiranku mulai mencari-cari aktivitas lain yang belum pernah kucoba untuk memancing antusiasme lagi.",
        scores: {
          functions: { Ne: 3, Se: 1 },
          positions: { dominantNe: 3, auxiliaryNe: 1 },
          enneagram: { "7": 3, "3": 1 },
          bigFive: { openness: 3 },
          temperament: { sanguine: 2 }
        }
      },
      {
        text: "Aku menyadari ini adalah tanda kelelahan mental. Aku merenungkan apakah ada hal mendasar dalam hidupku akhir-akhir ini yang sedang menguras energiku tanpa kusadari.",
        scores: {
          functions: { Ni: 3, Fi: 2 },
          positions: { dominantNi: 2, auxiliaryFi: 1 },
          enneagram: { "5": 2, "4": 1, "9": 1 },
          bigFive: { neuroticism: 1 }
        }
      },
      {
        text: "Aku merasa bersalah karena membuang-buang waktu merasa kosong. Aku mungkin memaksakan diri menyelesaikannya atau segera beralih ke hal yang lebih produktif.",
        scores: {
          functions: { Te: 3, Si: 1 },
          positions: { dominantTe: 2, auxiliaryTe: 1 },
          enneagram: { "1": 2, "3": 2 },
          bigFive: { conscientiousness: 2 },
          temperament: { choleric: 1 }
        }
      },
      {
        text: "Aku berdiam diri dan membiarkan perasaan hambar itu mengalir. Aku percaya ini adalah fase melankolis alamiah yang tidak perlu terlalu cepat diusir.",
        scores: {
          functions: { Fi: 3, Ni: 1 },
          positions: { dominantFi: 3, tertiaryNi: 1 },
          enneagram: { "4": 3, "9": 2 },
          instincts: { sp: 1 },
          temperament: { melancholic: 3 }
        }
      },
      {
        text: "Aku mencari cara untuk membedah hobiku ini secara berbeda. Mungkin mengubah alatnya, mempelajari teorinya lebih dalam, atau mencari sudut pandang teknis yang baru.",
        scores: {
          functions: { Ti: 3, Ne: 1 },
          positions: { dominantTi: 3, auxiliaryTi: 1 },
          enneagram: { "5": 2 },
          bigFive: { openness: 1, conscientiousness: 1 }
        }
      }
    ]
  },
  {
    id: "q025",
    text: "Rencana besarmu yang sudah disusun rapi tiba-tiba hancur karena keputusan mendadak dari pihak lain. Kau hanya punya waktu singkat untuk merespons. Bagaimana keadaan batin dan tindakan pertamamu?",
    options: [
      {
        text: "Sistem sarafku seolah terbakar sesaat. Aku benci saat visiku dihancurkan. Namun, aku segera menekan emosi itu dan memikirkan strategi alternatif paling efisien untuk meminimalkan kerugian.",
        scores: {
          functions: { Ni: 2, Te: 3 },
          positions: { dominantNi: 1, dominantTe: 2 },
          enneagram: { "1": 1, "8": 2, "3": 1 },
          bigFive: { neuroticism: 1, conscientiousness: 2 }
        }
      },
      {
        text: "Aku merasa sangat cemas dan kehilangan pijakan. Otakku membeku sejenak karena aku terbiasa bersandar pada persiapan, sebelum akhirnya mencari tahu siapa yang bisa kumintai petunjuk.",
        scores: {
          functions: { Si: 3, Fe: 1 },
          positions: { dominantSi: 3, inferiorNe: 2 },
          enneagram: { "6": 3, "9": 1 },
          instincts: { sp: 2 },
          bigFive: { neuroticism: 3 }
        }
      },
      {
        text: "Ada adrenalin yang justru terpacu. Aku membuang rencana lama dan langsung berimprovisasi dengan apa pun yang ada di depan mata. Kepanikan ini justru membuatku tajam.",
        scores: {
          functions: { Se: 3, Ne: 2 },
          positions: { dominantSe: 3, dominantNe: 2 },
          enneagram: { "7": 2, "8": 1 },
          bigFive: { extraversion: 2, openness: 2 },
          temperament: { sanguine: 2, choleric: 1 }
        }
      },
      {
        text: "Aku menghela napas panjang menahan rasa frustrasi. Aku kemudian mencoba menenangkan orang lain yang ikut terkena dampak, mengesampingkan kepanikanku sendiri demi harmoni.",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "2": 2, "9": 3 },
          instincts: { so: 2 },
          bigFive: { agreeableness: 2 }
        }
      },
      {
        text: "Aku mundur selangkah. Aku memisahkan diriku dari kekacauan untuk membangun kerangka logika yang baru. Aku tidak akan bergerak sebelum arah baru ini masuk akal bagiku.",
        scores: {
          functions: { Ti: 3, Ni: 1 },
          positions: { dominantTi: 3, auxiliaryTi: 1 },
          enneagram: { "5": 3 },
          bigFive: { conscientiousness: 1 }
        }
      }
    ]
  },
  {
    id: "q026",
    text: "Seseorang yang kau kenal memintamu untuk jujur tentang karyanya atau keputusannya yang menurutmu secara objektif buruk. Saat kau melihat wajahnya yang penuh harap, apa yang kau katakan?",
    options: [
      {
        text: "Aku membedah kesalahannya dengan objektif dan langsung. Kebenaran lebih penting daripada kenyamanan sementara. Jika ia ingin berkembang, ia harus tahu letak cacatnya.",
        scores: {
          functions: { Te: 3, Ti: 2 },
          positions: { dominantTe: 2, dominantTi: 1 },
          enneagram: { "8": 2, "1": 2, "5": 1 },
          bigFive: { agreeableness: -3 },
          moral: { lawfulNeutral: 1 }
        }
      },
      {
        text: "Aku membungkus kritiknya dengan sangat hati-hati. Aku mencari satu hal baik untuk dipuji, lalu dengan nada pelan menyarankan 'perbaikan' tanpa menggunakan kata yang menjatuhkan.",
        scores: {
          functions: { Fe: 3, Ni: 1 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "2": 2, "9": 3 },
          bigFive: { agreeableness: 3 }
        }
      },
      {
        text: "Aku bertanya balik padanya, 'Apa pendapatmu sendiri tentang bagian ini?' Aku memancingnya untuk menyadari kesalahannya sendiri agar aku tidak perlu menjadi tokoh jahat yang menghakiminya.",
        scores: {
          functions: { Ni: 2, Fe: 1 },
          positions: { auxiliaryNi: 1, tertiaryFe: 1 },
          enneagram: { "5": 1, "9": 1 },
          bigFive: { agreeableness: 1 }
        }
      },
      {
        text: "Aku mengatakan kebenarannya dari sudut pandangku, karena berbohong berarti mengkhianati nuraniku. Namun, aku menyampaikannya dari sisi perasaanku agar ia tidak merasa diserang.",
        scores: {
          functions: { Fi: 3 },
          positions: { dominantFi: 3, auxiliaryFi: 2 },
          enneagram: { "4": 2, "1": 1 },
          moral: { neutralGood: 1 }
        }
      },
      {
        text: "Aku memutar otak memberikan banyak alternatif ide. 'Bagaimana kalau kau mencoba arah yang ini, atau menggabungkannya dengan itu?' Aku mengalihkan fokusnya dari karyanya yang buruk ke ide baru.",
        scores: {
          functions: { Ne: 3 },
          positions: { dominantNe: 3, auxiliaryNe: 2 },
          enneagram: { "7": 2 },
          bigFive: { openness: 2 },
          temperament: { sanguine: 1 }
        }
      }
    ]
  },
  {
    id: "q027",
    text: "Ketika dihadapkan pada pilihan moral yang berada di wilayah abu-abu—misalnya berbohong demi menyelamatkan reputasi seseorang yang kau hormati—apa kompas utama yang membimbingmu?",
    options: [
      {
        text: "Apakah tindakan ini secara logis akan menyebabkan kerusakan sistem yang lebih besar di masa depan? Aku mengkalkulasi konsekuensi jangka panjangnya melebihi empati sesaat.",
        scores: {
          functions: { Te: 2, Ni: 2 },
          positions: { dominantTe: 1, auxiliaryNi: 1 },
          enneagram: { "1": 2, "5": 1 },
          moral: { lawfulNeutral: 2 }
        }
      },
      {
        text: "Apa yang paling menjaga kedamaian dan tidak melukai orang banyak? Jika kebohongan kecil bisa menahan badai besar yang menghancurkan harmoni, aku mungkin akan melakukannya.",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 2, auxiliaryFe: 1 },
          enneagram: { "9": 3, "2": 1 },
          moral: { neutralGood: 1, trueNeutral: 1 }
        }
      },
      {
        text: "Apa yang terasa 'benar' di dalam batinku. Aku tidak peduli pada ekspektasi luar; jika hatiku merasa berbohong itu menodai nilai intiku, aku akan menolak melakukannya meski sulit.",
        scores: {
          functions: { Fi: 3 },
          positions: { dominantFi: 3, auxiliaryFi: 2 },
          enneagram: { "4": 2, "1": 3 },
          moral: { chaoticGood: 1, lawfulGood: 1 }
        }
      },
      {
        text: "Prinsip dan aturan mana yang dilanggar? Kebenaran adalah kebenaran. Mengaburkannya demi seseorang hanya akan menciptakan ketidakadilan bagi orang lain.",
        scores: {
          functions: { Ti: 2, Si: 2 },
          positions: { dominantTi: 1, dominantSi: 1 },
          enneagram: { "1": 2, "6": 2 },
          moral: { lawfulNeutral: 2 }
        }
      },
      {
        text: "Aku melihat situasinya secara kontekstual. Aku bisa menyesuaikan diriku; tidak ada kebenaran absolut. Jika itu hal yang pragmatis untuk dilakukan saat itu, aku akan berbohong.",
        scores: {
          functions: { Se: 2, Ne: 2 },
          positions: { dominantSe: 1, tertiaryTe: 1 },
          enneagram: { "3": 2, "7": 1, "8": 1 },
          moral: { trueNeutral: 2, chaoticNeutral: 1 }
        }
      }
    ]
  },
  {
    id: "q028",
    text: "Kau berada di ruang tunggu sendirian. Baterai ponselmu habis, dan tidak ada bahan bacaan di sekitarmu. Apa yang terjadi pada pikiranmu setelah lima belas menit berlalu?",
    options: [
      {
        text: "Aku mulai tenggelam dalam ingatan lama. Sebuah wangi, lagu, atau objek di ruangan itu memicu rentetan nostalgia yang membawaku jauh ke masa lalu.",
        scores: {
          functions: { Si: 3, Fi: 1 },
          positions: { dominantSi: 3, auxiliarySi: 2 },
          enneagram: { "9": 1, "4": 1 },
          bigFive: { openness: -1 }
        }
      },
      {
        text: "Pikiranku dengan cepat membangun cerita tentang orang-orang yang lewat atau berandai-andai tentang ide-ide liar yang tidak ada hubungannya dengan tempat itu.",
        scores: {
          functions: { Ne: 3 },
          positions: { dominantNe: 3, auxiliaryNe: 2 },
          enneagram: { "7": 2 },
          bigFive: { openness: 3 },
          temperament: { sanguine: 2 }
        }
      },
      {
        text: "Aku merasa gelisah secara fisik. Duduk diam tanpa melakukan atau merespons apa pun membuatku merasa seperti membuang-buang waktu dan energi.",
        scores: {
          functions: { Se: 3, Te: 1 },
          positions: { dominantSe: 3, auxiliarySe: 2 },
          enneagram: { "8": 1, "3": 2, "7": 1 },
          bigFive: { extraversion: 2, conscientiousness: 1 }
        }
      },
      {
        text: "Aku memejamkan mata dan menikmati keheningan itu. Ini adalah momen langka di mana aku bisa memutar balik lensa ke dalam diriku, menyatukan kepingan intuisi yang selama ini berserakan.",
        scores: {
          functions: { Ni: 3, Ti: 1 },
          positions: { dominantNi: 3, auxiliaryNi: 2 },
          enneagram: { "5": 2, "9": 1 },
          instincts: { sp: 2 },
          bigFive: { introversion: 2 }
        }
      },
      {
        text: "Aku memanfaatkan waktu diam itu untuk menyusun daftar tugas di kepalaku, merencanakan langkah selanjutnya hari ini agar setelah dari sini aku bisa bergerak efisien.",
        scores: {
          functions: { Te: 3, Si: 1 },
          positions: { dominantTe: 3, auxiliaryTe: 1 },
          enneagram: { "1": 2, "3": 1 },
          bigFive: { conscientiousness: 3 }
        }
      }
    ]
  },
  {
    id: "q029",
    text: "Ketika kau sadar bahwa kau baru saja menyakiti seseorang yang kau hargai melalui kecerobohan ucapanmu, bagaimana cara batinmu menghukummu?",
    options: [
      {
        text: "Menyiksa diriku dengan rasa bersalah yang kelam. Aku merasa aku pada dasarnya memang orang yang buruk dan racun bagi orang lain.",
        scores: {
          functions: { Fi: 3 },
          positions: { dominantFi: 2, tertiarySi: 1 },
          enneagram: { "4": 3, "1": 1 },
          instincts: { sx: 1 },
          bigFive: { neuroticism: 3 },
          temperament: { melancholic: 3 }
        }
      },
      {
        text: "Membuatku gelisah membayangkan persepsi mereka terhadapku berubah. Aku takut mereka akan pergi, dan aku segera memikirkan tindakan untuk memperbaiki citraku di mata mereka.",
        scores: {
          functions: { Fe: 3 },
          positions: { dominantFe: 2, auxiliaryFe: 2 },
          enneagram: { "2": 2, "3": 1, "6": 1 },
          instincts: { so: 2 },
          bigFive: { agreeableness: 1 }
        }
      },
      {
        text: "Menuntutku untuk menganalisis mengapa kalimat itu bisa lolos. Aku membedah konteksnya secara rasional untuk memastikan hal itu adalah kelemahan sistematis yang tidak boleh kuulang.",
        scores: {
          functions: { Ti: 3, Si: 1 },
          positions: { dominantTi: 2, auxiliaryTi: 1 },
          enneagram: { "5": 2, "1": 2 },
          bigFive: { neuroticism: 1 }
        }
      },
      {
        text: "Menimbulkan perasaan malu yang singkat, lalu dengan cepat aku mencari pembenaran bahwa orang itu mungkin terlalu sensitif, agar aku terhindar dari rasa bersalah yang berat.",
        scores: {
          functions: { Se: 1, Te: 2, Ne: 1 },
          positions: { inferiorFi: 2 },
          enneagram: { "7": 2, "8": 1, "3": 1 },
          bigFive: { agreeableness: -2 },
          moral: { neutralEvil: 1 }
        }
      },
      {
        text: "Membuatku memutar ulang kejadian tersebut berulang-ulang di kepalaku, menakut-nakuti diriku dengan skenario terburuk tentang bagaimana hal ini akan merusak seluruh hubungan kami.",
        scores: {
          functions: { Si: 2, Ne: 2 },
          positions: { inferiorNe: 2, tertiarySi: 1 },
          enneagram: { "6": 3 },
          instincts: { sp: 1 },
          bigFive: { neuroticism: 3 }
        }
      }
    ]
  },
  {
    id: "q030",
    text: "Saat masa kecil, memori mana yang paling sering kau ingat secara diam-diam, yang membentuk caramu melihat dunia saat ini?",
    options: [
      {
        text: "Momen di mana aku merasa berbeda atau terasing dari anak-anak lain. Ada rasa bahwa aku memiliki kedalaman atau kesedihan yang tidak mereka pahami.",
        scores: {
          functions: { Fi: 3, Ni: 1 },
          positions: { dominantFi: 2, dominantNi: 1 },
          enneagram: { "4": 3 },
          instincts: { sx: 1 },
          bigFive: { openness: 1, neuroticism: 2 }
        }
      },
      {
        text: "Momen ketika aku tidak dilindungi atau ketika aturan berubah tanpa alasan. Itu membuatku belajar untuk terus waspada dan mengandalkan struktur yang kubuat sendiri.",
        scores: {
          functions: { Si: 3, Te: 1 },
          positions: { dominantSi: 2, auxiliaryTe: 1 },
          enneagram: { "6": 3, "1": 1 },
          instincts: { sp: 2 },
          bigFive: { neuroticism: 2 }
        }
      },
      {
        text: "Momen saat aku berhasil melakukan sesuatu sendiri, menang, atau mengambil kendali. Aku belajar bahwa dunia hanya menghargai mereka yang kuat dan tidak bergantung.",
        scores: {
          functions: { Te: 3, Se: 1 },
          positions: { dominantTe: 2, dominantSe: 1 },
          enneagram: { "8": 3, "3": 2 },
          instincts: { sp: 1 },
          bigFive: { agreeableness: -2 }
        }
      },
      {
        text: "Momen saat aku menarik diri ke dalam duniaku sendiri untuk menghindari konflik. Kesendirian mengajariku cara mengamati tanpa perlu repot-repot terlibat.",
        scores: {
          functions: { Ti: 2, Ni: 2 },
          positions: { dominantTi: 1, dominantNi: 1 },
          enneagram: { "5": 3, "9": 2 },
          instincts: { sp: 2 },
          bigFive: { extraversion: -2 }
        }
      },
      {
        text: "Momen di mana aku dipuji karena menjadi anak yang baik, membantu, atau menyenangkan orang tua. Aku belajar bahwa cintaku diukur dari seberapa berguna aku bagi orang lain.",
        scores: {
          functions: { Fe: 3 },
          positions: { dominantFe: 2, auxiliaryFe: 1 },
          enneagram: { "2": 3, "3": 1 },
          instincts: { so: 2 },
          bigFive: { agreeableness: 2 }
        }
      }
    ]
  },
  {
    id: "q031",
    text: "Dalam menghadapi sosok figur otoritas (bos, guru, atau orang tua) yang salah namun memaksa benar, apa strategi bertahannya alam bawah sadarmu?",
    options: [
      {
        text: "Pemberontakan diam. Aku mungkin mengangguk di depan mereka, tetapi aku akan tetap melakukan apa yang kuanggap benar di belakang mereka dengan caraku sendiri.",
        scores: {
          functions: { Ni: 2, Ti: 2, Fi: 1 },
          positions: { dominantNi: 1, dominantTi: 1 },
          enneagram: { "5": 2, "9": 1, "4": 1 },
          moral: { chaoticGood: 1, chaoticNeutral: 1 }
        }
      },
      {
        text: "Tantangan terbuka. Jika logika dan fakta membuktikan mereka salah, aku tidak takut mengoreksi mereka secara langsung, terlepas dari posisinya.",
        scores: {
          functions: { Te: 3, Ti: 1 },
          positions: { dominantTe: 2, auxiliaryTe: 1 },
          enneagram: { "8": 3, "1": 1 },
          bigFive: { agreeableness: -2 },
          moral: { chaoticGood: 1, lawfulNeutral: 1 }
        }
      },
      {
        text: "Mencari celah aturan. Aku akan membaca sistem yang ia gunakan untuk menjatuhkanku, lalu memakai sistem yang sama untuk membalikkan keadaannya nanti.",
        scores: {
          functions: { Si: 2, Te: 2 },
          positions: { auxiliaryTe: 2, auxiliarySi: 1 },
          enneagram: { "6": 2, "3": 1 },
          moral: { lawfulNeutral: 2 }
        }
      },
      {
        text: "Menyesuaikan diri demi kedamaian. Aku menelan hargadiriku. Melawan otoritas sering kali tidak sepadan dengan energi yang terbuang dan kekacauan yang ditimbulkannya.",
        scores: {
          functions: { Fe: 2, Si: 2 },
          positions: { dominantFe: 1, dominantSi: 1 },
          enneagram: { "9": 3, "2": 1 },
          instincts: { sp: 2 },
          bigFive: { agreeableness: 2 }
        }
      },
      {
        text: "Melemparkan lelucon atau mengganti topik untuk meredakan ketegangan, berusaha tidak menganggap serius kesalahannya agar aku tidak perlu merasa tertekan.",
        scores: {
          functions: { Ne: 3, Se: 1 },
          positions: { dominantNe: 2, auxiliaryNe: 1 },
          enneagram: { "7": 3 },
          bigFive: { agreeableness: 1, neuroticism: -1 }
        }
      }
    ]
  },
  {
    id: "q032",
    text: "Ketika kau baru saja mencapai sesuatu yang kau inginkan setelah sekian lama, apa pikiran yang paling sering langsung menyusul kegembiraan itu?",
    options: [
      {
        text: "“Apa selanjutnya?” Kegembiraan ini cepat memudar. Aku langsung melihat ke arah gunung berikutnya yang harus didaki agar tidak kehilangan momentum.",
        scores: {
          functions: { Te: 2, Ni: 2 },
          positions: { dominantTe: 2, dominantNi: 1 },
          enneagram: { "3": 3, "8": 1 },
          bigFive: { conscientiousness: 2 }
        }
      },
      {
        text: "“Apakah ini benar-benar yang aku inginkan?” Ada perasaan hampa yang aneh. Aku mulai mengevaluasi ulang apakah pencapaian ini sejalan dengan makna hidupku.",
        scores: {
          functions: { Fi: 3, Ni: 1 },
          positions: { dominantFi: 2, tertiaryNi: 1 },
          enneagram: { "4": 3, "5": 1 },
          bigFive: { neuroticism: 1 },
          temperament: { melancholic: 2 }
        }
      },
      {
        text: "“Siapa yang bisa kuajak merayakannya?” Kebahagiaanku terasa belum nyata jika belum kubagikan atau diakui oleh orang-orang yang kusayangi.",
        scores: {
          functions: { Fe: 3, Se: 1 },
          positions: { dominantFe: 2, dominantSe: 1 },
          enneagram: { "2": 2, "3": 1, "7": 1 },
          instincts: { so: 2 },
          bigFive: { extraversion: 2 }
        }
      },
      {
        text: "“Syukurlah, akhirnya aku bisa istirahat.” Aku merasa lega karena tekanan telah hilang. Aku ingin menikmati ketenangan tanpa memikirkan apa pun untuk sementara waktu.",
        scores: {
          functions: { Si: 2, Se: 1 },
          positions: { dominantSi: 1, inferiorTe: 1 },
          enneagram: { "9": 3, "6": 1 },
          instincts: { sp: 2 },
          bigFive: { neuroticism: -1 }
        }
      },
      {
        text: "Pikiranku memproses seluruh perjalanan yang kulalui, menganalisis metode apa yang berhasil dan apa yang gagal, untuk kusimpan sebagai kerangka pengetahuan di masa depan.",
        scores: {
          functions: { Ti: 3, Si: 1 },
          positions: { dominantTi: 2, auxiliaryTi: 1 },
          enneagram: { "5": 2, "1": 1 },
          bigFive: { conscientiousness: 1 }
        }
      }
    ]
  },
  {
    id: "q033",
    text: "Seseorang meminta saran padamu mengenai masalah yang jelas-jelas tercipta karena kebodohan atau kelalaiannya sendiri. Bagaimana kau merespons?",
    options: [
      {
        text: "Aku menunjukkan letak kesalahannya secara logis tanpa basa-basi. Jika ia butuh saran, ia harus mau mendengar kenyataan pahit tentang mengapa ia gagal.",
        scores: {
          functions: { Ti: 2, Te: 3 },
          positions: { dominantTe: 2, dominantTi: 1 },
          enneagram: { "8": 2, "1": 2 },
          bigFive: { agreeableness: -2 },
          moral: { lawfulNeutral: 1 }
        }
      },
      {
        text: "Aku merasa gemas, membedah kesalahannya dari berbagai sudut pandang, lalu melemparkan beberapa kemungkinan solusi yang mungkin tidak terpikirkan olehnya.",
        scores: {
          functions: { Ne: 3, Ti: 1 },
          positions: { dominantNe: 2, auxiliaryTi: 1 },
          enneagram: { "7": 1, "5": 1 },
          bigFive: { openness: 2 }
        }
      },
      {
        text: "Aku mendengarkan perasaannya dulu, memvalidasi keluhannya, lalu dengan sangat pelan mengarahkannya ke solusi tanpa membuatnya merasa lebih bodoh.",
        scores: {
          functions: { Fe: 3 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "2": 2, "9": 2 },
          bigFive: { agreeableness: 2 }
        }
      },
      {
        text: "Aku membandingkan masalahnya dengan apa yang biasanya terjadi. Aku memberinya instruksi bertahap yang paling aman agar ia tidak memperburuk keadaan.",
        scores: {
          functions: { Si: 3, Te: 1 },
          positions: { dominantSi: 2, auxiliaryTe: 1 },
          enneagram: { "6": 2, "1": 1 },
          bigFive: { conscientiousness: 2 }
        }
      },
      {
        text: "Aku mungkin hanya mendengarkan dalam diam. Bagiku, masalahnya terasa dangkal, dan aku enggan menghabiskan energiku untuk menyelesaikan kekacauan yang dibuatnya sendiri.",
        scores: {
          functions: { Ni: 2, Fi: 2 },
          positions: { dominantNi: 1, dominantFi: 1 },
          enneagram: { "5": 2, "4": 1 },
          instincts: { sp: 1 },
          bigFive: { introversion: 2 }
        }
      }
    ]
  },
  {
    id: "q034",
    text: "Ketika kau akhirnya dibiarkan sendirian di penghujung hari yang sangat buruk, di mana segala hal berjalan salah, apa yang kau rasakan di sekujur tubuh dan batinmu?",
    options: [
      {
        text: "Kekosongan yang berat. Aku merenungkan apakah semua kesialan ini adalah pertanda bahwa aku berada di jalur yang salah, mempertanyakan makna dari segala usahaku.",
        scores: {
          functions: { Ni: 2, Fi: 2 },
          positions: { dominantNi: 1, dominantFi: 1 },
          enneagram: { "4": 2, "9": 1 },
          bigFive: { neuroticism: 2 },
          temperament: { melancholic: 2 }
        }
      },
      {
        text: "Kelelahan yang menuntut kompensasi. Aku akan memanjakan diriku dengan tidur yang lama, makanan enak, atau membeli sesuatu agar aku merasa hidup ini tidak terlalu menyiksa.",
        scores: {
          functions: { Se: 2, Si: 2 },
          positions: { inferiorSe: 2, dominantSi: 1 },
          enneagram: { "9": 2, "7": 2 },
          instincts: { sp: 3 },
          bigFive: { conscientiousness: -1 }
        }
      },
      {
        text: "Amarah yang membara karena ketidakefisienan hariku. Aku memutar ulang apa yang salah, mencari siapa atau sistem mana yang patut disalahkan, berjanji ini tidak akan terulang.",
        scores: {
          functions: { Te: 3, Si: 1 },
          positions: { dominantTe: 2, auxiliaryTe: 1 },
          enneagram: { "1": 2, "8": 2 },
          bigFive: { agreeableness: -1, neuroticism: 1 }
        }
      },
      {
        text: "Otakku berputar cepat tanpa ampun. Aku terus-menerus memikirkan semua cabang kemungkinan dari masalah hari ini, membuatku cemas dan sulit memejamkan mata.",
        scores: {
          functions: { Ne: 2, Ti: 1 },
          positions: { inferiorSi: 2, dominantNe: 1 },
          enneagram: { "6": 3, "5": 1 },
          bigFive: { neuroticism: 2, openness: 1 }
        }
      },
      {
        text: "Rasa bersalah jika hari yang buruk itu membuatku bersikap dingin pada orang lain. Pikiranku tertuju pada siapa yang mungkin tersakiti oleh suasana hatiku hari ini.",
        scores: {
          functions: { Fe: 3, Fi: 1 },
          positions: { dominantFe: 2, auxiliaryFe: 1 },
          enneagram: { "2": 2, "1": 1 },
          instincts: { so: 1 },
          bigFive: { agreeableness: 2 }
        }
      }
    ]
  },
  {
    id: "q035",
    text: "Kau berada dalam perdebatan filosofis atau etis. Lawan bicaramu menggunakan argumen yang sangat emosional dan menyentuh hati, namun secara logika sangat cacat. Apa reaksimu?",
    options: [
      {
        text: "Aku tidak peduli seberapa sedih ceritanya. Kebenaran tidak bisa dibengkokkan oleh air mata. Aku akan tetap membongkar kecacatan logikanya hingga fondasinya runtuh.",
        scores: {
          functions: { Ti: 3, Te: 2 },
          positions: { dominantTi: 2, dominantTe: 1 },
          enneagram: { "5": 2, "8": 1, "1": 1 },
          bigFive: { agreeableness: -3 },
          moral: { lawfulNeutral: 1 }
        }
      },
      {
        text: "Aku merasa terbelah. Secara rasional aku tahu dia salah, tetapi aku memahami perasaannya. Aku mungkin mundur dari perdebatan agar tidak melukai harga dirinya.",
        scores: {
          functions: { Fe: 2, Ti: 2 },
          positions: { auxiliaryFe: 1, tertiaryTi: 1 },
          enneagram: { "9": 3, "2": 1 },
          bigFive: { agreeableness: 2 }
        }
      },
      {
        text: "Aku mencoba menjembataninya. Aku merangkai ulang argumen logisku agar terdengar lebih manusiawi, berharap ia bisa menerima logika tanpa merasa diserang secara moral.",
        scores: {
          functions: { Ni: 2, Fe: 2 },
          positions: { dominantNi: 1, auxiliaryFe: 1 },
          enneagram: { "1": 1, "3": 1 },
          bigFive: { openness: 1 }
        }
      },
      {
        text: "Aku bisa melihat mengapa ia merasa demikian dari sudut pandang nilai pribadinya, namun aku menolak menyetujuinya. Aku menghargai prinsipnya tanpa mengorbankan prinsipku.",
        scores: {
          functions: { Fi: 3 },
          positions: { dominantFi: 2, auxiliaryFi: 1 },
          enneagram: { "4": 1, "6": 1 },
          moral: { neutralGood: 1 }
        }
      },
      {
        text: "Aku menganggapnya menarik. Argumennya mungkin cacat, tapi membuka sudut pandang baru yang aneh. Aku mulai bertanya-tanya hal gila apa lagi yang bisa disimpulkan dari pemikirannya.",
        scores: {
          functions: { Ne: 3 },
          positions: { dominantNe: 2, auxiliaryNe: 1 },
          enneagram: { "7": 2, "5": 1 },
          bigFive: { openness: 2 }
        }
      }
    ]
  },
  {
    id: "q036",
    text: "Seseorang menatapmu dengan tajam dan berkata, “Aku tahu siapa kau sebenarnya,” seolah ia baru saja memecahkan teka-teki tentang dirimu. Apa reaksi pertama yang bergejolak di dalam batinmu?",
    options: [
      {
        text: "Ada rasa geli sekaligus meremehkan. Aku tahu persis seberapa rumit diriku, dan klaimnya bahwa ia bisa memahamiku seutuhnya terasa seperti kelancangan yang dangkal.",
        scores: {
          functions: { Fi: 3, Ni: 1 },
          positions: { dominantFi: 2, auxiliaryNi: 1 },
          enneagram: { "4": 3, "5": 2 },
          instincts: { sp: 1 },
          bigFive: { openness: 1, agreeableness: -1 },
          temperament: { melancholic: 2 }
        }
      },
      {
        text: "Kewaspadaanku meningkat tajam. Pikiranku langsung memutar balik semua interaksi kami untuk mencari tahu bagian mana dari diriku yang bocor atau tidak sengaja kuperlihatkan.",
        scores: {
          functions: { Ni: 3, Ti: 1 },
          positions: { dominantNi: 2, auxiliaryTi: 1 },
          enneagram: { "6": 2, "5": 2, "8": 1 },
          instincts: { sp: 2 },
          bigFive: { neuroticism: 2 }
        }
      },
      {
        text: "Aku tertawa ringan dan membelokkan arah pembicaraan. Aku tidak suka saat seseorang mencoba menelanjangiku secara psikologis; itu membuat kendaliku atas suasana menghilang.",
        scores: {
          functions: { Fe: 2, Ne: 2 },
          positions: { dominantFe: 1, auxiliaryNe: 1 },
          enneagram: { "3": 2, "7": 2 },
          instincts: { so: 2 },
          bigFive: { extraversion: 2 }
        }
      },
      {
        text: "Aku menantangnya secara logis. “Oh ya? Buktikan. Dari data dan tindakan yang mana kau menyimpulkan hal itu?” Aku ingin melihat seberapa kokoh argumennya.",
        scores: {
          functions: { Ti: 3, Te: 2 },
          positions: { dominantTi: 2, dominantTe: 1 },
          enneagram: { "8": 1, "5": 1 },
          bigFive: { agreeableness: -2 },
          temperament: { choleric: 1 }
        }
      },
      {
        text: "Aku tidak terlalu memikirkannya. Orang bebas berasumsi apa saja. Selama pendapatnya tidak menghalangi langkahku atau merugikanku, biarkan saja ia merasa pintar.",
        scores: {
          functions: { Te: 2, Se: 2 },
          positions: { dominantTe: 1, dominantSe: 1 },
          enneagram: { "9": 2, "8": 1 },
          bigFive: { neuroticism: -2 },
          temperament: { phlegmatic: 2 }
        }
      }
    ]
  },
  {
    id: "q037",
    text: "Keluarga atau lingkunganmu menimpakan sebuah tanggung jawab besar yang tidak pernah kau minta, dengan dalih “Hanya kau yang bisa diandalkan”. Apa yang terjadi di balik diammu?",
    options: [
      {
        text: "Aku menelannya, meski dadaku terasa berat oleh kebencian yang samar. Aku mengambilnya karena kewajiban moral atau ketakutan bahwa menolak akan menghancurkan mereka.",
        scores: {
          functions: { Si: 3, Fe: 2 },
          positions: { dominantSi: 2, auxiliaryFe: 1 },
          enneagram: { "6": 2, "9": 3, "2": 1 },
          instincts: { so: 1, sp: 1 },
          bigFive: { agreeableness: 2, neuroticism: 2 }
        }
      },
      {
        text: "Pemberontakan keras di dalam kepala. Aku menolak secara tegas, atau mencari cara logis untuk membuktikan bahwa aku bukanlah orang yang efisien untuk tugas bodoh ini.",
        scores: {
          functions: { Te: 3, Ti: 2 },
          positions: { dominantTe: 2, dominantTi: 1 },
          enneagram: { "8": 2, "5": 1, "1": 1 },
          bigFive: { agreeableness: -2, conscientiousness: 1 },
          moral: { chaoticNeutral: 1 }
        }
      },
      {
        text: "Aku merasa terjebak dan kehilangan napas. Ruang bebasku direnggut. Aku mungkin mengiyakan di awal, namun perlahan mencari celah untuk melarikan diri tanpa disadari.",
        scores: {
          functions: { Ne: 2, Fi: 2 },
          positions: { dominantNe: 1, dominantFi: 1 },
          enneagram: { "7": 3, "4": 1 },
          instincts: { sp: 2 },
          temperament: { sanguine: 1, melancholic: 1 }
        }
      },
      {
        text: "Aku mengambilnya, lalu dengan dingin menyusun ulang aturan mainnya. Jika aku yang memegang kendali, maka mereka harus tunduk pada caraku menyelesaikannya.",
        scores: {
          functions: { Te: 3, Ni: 2 },
          positions: { dominantTe: 3, auxiliaryNi: 1 },
          enneagram: { "8": 3, "1": 2, "3": 1 },
          instincts: { sp: 1 },
          temperament: { choleric: 2 },
          moral: { lawfulEvil: 1, lawfulNeutral: 1 }
        }
      },
      {
        text: "Aku menerima tugas itu dengan lapang dada. Ada sedikit rasa bangga bahwa di antara semuanya, kemampuanku diakui. Aku bertekad membuktikan bahwa kepercayaannya tidak salah.",
        scores: {
          functions: { Fe: 2, Si: 1 },
          positions: { dominantFe: 2, auxiliarySi: 1 },
          enneagram: { "3": 2, "2": 2, "1": 1 },
          bigFive: { conscientiousness: 2 }
        }
      }
    ]
  },
  {
    id: "q038",
    text: "Kau berada di sebuah acara yang sangat bising, ramai, dengan lampu yang berkedip cepat dan musik yang menembus dada. Apa yang dialami tubuh dan pikiranmu?",
    options: [
      {
        text: "Aku menyerap energinya. Aku membiarkan tubuhku larut dalam ritme, merespons keadaan sekitar dengan spontan, dan merasa lebih hidup dari biasanya.",
        scores: {
          functions: { Se: 3 },
          positions: { dominantSe: 3, auxiliarySe: 2 },
          enneagram: { "7": 2, "8": 1 },
          instincts: { sx: 2 },
          bigFive: { extraversion: 3 },
          temperament: { sanguine: 2 }
        }
      },
      {
        text: "Kelebihan sensorik membuatku ingin muntah atau marah. Cahaya dan suara itu menusuk otakku, membuatku sulit berpikir logis. Aku mencari sudut yang paling gelap dan sepi.",
        scores: {
          functions: { Ni: 2, Ti: 2, Si: 1 },
          positions: { inferiorSe: 3 },
          enneagram: { "5": 3, "4": 1 },
          instincts: { sp: 3 },
          bigFive: { introversion: 3, neuroticism: 2 }
        }
      },
      {
        text: "Aku tidak terlalu fokus pada suasananya, melainkan pada orang-orang di sekitarku. Aku mengamati bagaimana teman-temanku bereaksi dan memastikan kelompok kami tetap aman.",
        scores: {
          functions: { Fe: 2, Si: 1 },
          positions: { dominantFe: 1, auxiliaryFe: 1 },
          enneagram: { "2": 1, "6": 2 },
          instincts: { so: 2 },
          bigFive: { agreeableness: 1 }
        }
      },
      {
        text: "Pikiranku melayang ke tempat lain. Aku secara fisik ada di sana, tapi mataku menatap kosong sementara kepalaku memikirkan konsep, cerita, atau ide-ide yang sama sekali tidak relevan.",
        scores: {
          functions: { Ne: 3, Ni: 2 },
          positions: { dominantNe: 2, dominantNi: 1 },
          enneagram: { "9": 2, "5": 1 },
          bigFive: { openness: 2 }
        }
      },
      {
        text: "Aku membandingkan tempat ini dengan kenangan lamaku. Aku mungkin mengeluh dalam hati bahwa suaranya terlalu keras dan minumannya tidak seenak tempat yang biasa kudatangi.",
        scores: {
          functions: { Si: 3 },
          positions: { dominantSi: 3, auxiliarySi: 2 },
          enneagram: { "1": 1, "6": 1 },
          bigFive: { openness: -1, neuroticism: 1 }
        }
      }
    ]
  },
  {
    id: "q039",
    text: "Seseorang mempercayakan rahasia besar padamu. Rahasia ini, jika dibongkar, akan menghancurkan hidup orang lain, tetapi jika kau menyimpannya, kau merasa ikut berdosa. Apa yang menuntun keputusanmu?",
    options: [
      {
        text: "Kesetiaan pada ikatan. Jika ia mempercayaiku, aku mengunci mulutku. Aku bisa menanggung rasa bersalahku sendiri demi melindungi orang yang berada di pihakku.",
        scores: {
          functions: { Fi: 2, Si: 2 },
          positions: { dominantFi: 1, dominantSi: 1 },
          enneagram: { "6": 3, "4": 1 },
          instincts: { sx: 1, sp: 1 },
          moral: { trueNeutral: 1, neutralGood: 1 }
        }
      },
      {
        text: "Keadilan yang objektif. Aku menganalisis siapa yang dirugikan. Jika rahasia itu menyembunyikan kejahatan yang merusak sistem, aku akan mencari cara logis untuk membongkarnya.",
        scores: {
          functions: { Te: 3, Ti: 2 },
          positions: { dominantTe: 2, dominantTi: 1 },
          enneagram: { "1": 3, "8": 1 },
          moral: { lawfulGood: 2, lawfulNeutral: 1 }
        }
      },
      {
        text: "Beban moral batin. Aku tidak sanggup hidup dengan kepalsuan. Aku mungkin akan menekan orang itu agar mengakui rahasianya sendiri, karena aku benci menjadi kaki tangan kebohongan.",
        scores: {
          functions: { Fi: 3 },
          positions: { dominantFi: 3, auxiliaryFi: 1 },
          enneagram: { "1": 2, "4": 2 },
          bigFive: { neuroticism: 1 },
          temperament: { melancholic: 1 }
        }
      },
      {
        text: "Kalkulasi dampak sosial. Apa yang akan terjadi jika ini terungkap? Apakah kerusakannya lebih besar dari kebohongannya? Aku menimbang kedamaian orang banyak.",
        scores: {
          functions: { Fe: 3, Ni: 1 },
          positions: { dominantFe: 2, auxiliaryNi: 1 },
          enneagram: { "9": 2, "2": 1 },
          instincts: { so: 2 },
          moral: { neutralGood: 1 }
        }
      },
      {
        text: "Aku menjauhkan diriku dari masalah itu. Aku marah karena diseret ke dalam drama ini, dan aku mungkin akan mengabaikannya seolah-olah aku tidak pernah mendengarnya.",
        scores: {
          functions: { Se: 2, Ti: 1 },
          positions: { inferiorFe: 1 },
          enneagram: { "9": 2, "5": 2 },
          instincts: { sp: 2 },
          bigFive: { agreeableness: -1 }
        }
      }
    ]
  },
  {
    id: "q040",
    text: "Ketika kau benar-benar sendirian dan yakin tidak ada satupun mata yang melihat, kebiasaan apa yang paling sering terlepas tanpa bisa kau cegah?",
    options: [
      {
        text: "Aku berbicara pada diriku sendiri, berdebat, atau mempraktikkan pidato dan percakapan masa depan, menata rapi ide-ideku dengan menyuarakannya.",
        scores: {
          functions: { Ne: 2, Ni: 2, Te: 1 },
          positions: { dominantNe: 1, dominantNi: 1 },
          enneagram: { "3": 1, "5": 1 },
          bigFive: { extraversion: 1 }
        }
      },
      {
        text: "Aku tenggelam dalam penelusuran informasi yang sangat spesifik dan aneh di internet, melompat dari satu tab ke tab lain sampai melupakan waktu tidur.",
        scores: {
          functions: { Ti: 3, Ne: 2 },
          positions: { dominantTi: 2, auxiliaryNe: 1 },
          enneagram: { "5": 3, "7": 1 },
          bigFive: { openness: 2, conscientiousness: -1 }
        }
      },
      {
        text: "Aku mengamati benda-benda fisik di sekitarku atau melakukan hal impulsif yang memanjakan tubuh: makan hal manis, mandi lama, atau memberantakkan barang tanpa peduli.",
        scores: {
          functions: { Se: 3, Si: 1 },
          positions: { dominantSe: 2, inferiorNi: 1 },
          enneagram: { "9": 2, "7": 2 },
          instincts: { sp: 3 },
          temperament: { sanguine: 1 }
        }
      },
      {
        text: "Aku merapikan sesuatu. Menyelaraskan barang di meja, menyortir file, atau membersihkan debu. Keteraturan di luar membuat kecemasanku di dalam mereda.",
        scores: {
          functions: { Si: 3, Te: 2 },
          positions: { dominantSi: 2, auxiliaryTe: 1 },
          enneagram: { "1": 3, "6": 1 },
          bigFive: { conscientiousness: 3 }
        }
      },
      {
        text: "Aku membayangkan skenario patah hati atau tragedi, memancing perasaanku sendiri dengan musik sedih, untuk merasakan kedalaman emosiku dengan aman.",
        scores: {
          functions: { Fi: 3, Ni: 1 },
          positions: { dominantFi: 3, auxiliaryFi: 1 },
          enneagram: { "4": 3 },
          instincts: { sx: 2 },
          bigFive: { neuroticism: 2 },
          temperament: { melancholic: 3 }
        }
      }
    ]
  },
  {
    id: "q041",
    text: "Teman-teman seangkatanmu mulai mencapai kesuksesan yang tampak bersinar—jabatan, kekayaan, pernikahan. Saat kau melihat kabarnya, bisikan apa yang menggemakan rasa takut terdalammu?",
    options: [
      {
        text: "“Apakah aku sudah menyia-nyiakan potensiku? Apakah caraku merangkai masa depan selama ini salah arah dan aku akan selamanya tertinggal?”",
        scores: {
          functions: { Ni: 3, Te: 1 },
          positions: { dominantNi: 2, inferiorSe: 1 },
          enneagram: { "3": 2, "5": 2 },
          bigFive: { neuroticism: 2 }
        }
      },
      {
        text: "“Apakah aku punya nilai jika aku tidak berhasil seperti mereka? Orang hanya akan melihat hasil, dan aku tidak memiliki apa pun untuk dipamerkan.”",
        scores: {
          functions: { Te: 2, Se: 1 },
          positions: { dominantTe: 2, inferiorFi: 1 },
          enneagram: { "3": 3, "8": 1 },
          instincts: { so: 2 },
          bigFive: { conscientiousness: 1 }
        }
      },
      {
        text: "“Apakah aku terlalu pengecut? Aku selalu mencari aman di rutinitas ini, sementara mereka berani melompat, dan kini aku menanggung akibat dari rasa takutku sendiri.”",
        scores: {
          functions: { Si: 3, Ne: 1 },
          positions: { dominantSi: 2, inferiorNe: 2 },
          enneagram: { "6": 3, "9": 1 },
          instincts: { sp: 2 },
          bigFive: { neuroticism: 2 }
        }
      },
      {
        text: "“Aku mungkin tidak sesukses mereka, tetapi setidaknya aku setia pada diriku sendiri.” (Meski jauh di lubuk hati, ada rasa iri karena hidup mereka tampak lebih mudah).",
        scores: {
          functions: { Fi: 3 },
          positions: { dominantFi: 3, auxiliaryFi: 1 },
          enneagram: { "4": 3, "1": 1 },
          bigFive: { neuroticism: 1 },
          moral: { chaoticGood: 1 }
        }
      },
      {
        text: "Aku sibuk membedah sistem di baliknya. Aku merasionalkan bahwa kesuksesan mereka ditopang oleh hak istimewa, keberuntungan, atau pengorbanan yang tidak ingin kulakukan.",
        scores: {
          functions: { Ti: 3, Ne: 1 },
          positions: { dominantTi: 2, auxiliaryTi: 1 },
          enneagram: { "5": 2 },
          bigFive: { agreeableness: -1 }
        }
      }
    ]
  },
  {
    id: "q042",
    text: "Seseorang yang memiliki sejarah manipulatif denganmu tiba-tiba memberimu hadiah mewah tanpa alasan yang jelas. Bagaimana kau merespons bingkisan tersebut?",
    options: [
      {
        text: "Aku menerimanya dengan senyum formal, namun pikiranku langsung bekerja membedah: hutang budi macam apa yang sedang ia rencanakan untuk ditagih dariku nanti?",
        scores: {
          functions: { Ni: 3, Ti: 2 },
          positions: { dominantNi: 2, auxiliaryTi: 1 },
          enneagram: { "5": 2, "6": 2 },
          instincts: { sp: 2 },
          moral: { trueNeutral: 1 }
        }
      },
      {
        text: "Aku menolaknya mentah-mentah. Menjaga batas adalah mutlak. Aku tidak akan membiarkan barangnya memasuki wilayahku dan memberinya celah kendali sekecil apa pun.",
        scores: {
          functions: { Te: 3, Fi: 2 },
          positions: { dominantTe: 2, dominantFi: 1 },
          enneagram: { "8": 3, "1": 1 },
          instincts: { sp: 1 },
          bigFive: { agreeableness: -2 },
          temperament: { choleric: 2 }
        }
      },
      {
        text: "Aku merasa sangat canggung dan gelisah. Aku mungkin menerimanya karena tidak enak hati menolak di depan mata, tapi barang itu akan kusimpan di laci terdalam bagai racun.",
        scores: {
          functions: { Fe: 2, Si: 2 },
          positions: { dominantFe: 1, dominantSi: 1 },
          enneagram: { "9": 3, "2": 1 },
          instincts: { so: 1 },
          bigFive: { agreeableness: 2, neuroticism: 2 }
        }
      },
      {
        text: "Aku tertawa sinis dalam hati. Aku menerima barangnya untuk kunikmati atau kujual, namun aku tetap menjaga jarak. Jika dia pikir ini bisa membeliku, dia bodoh.",
        scores: {
          functions: { Se: 2, Ne: 2, Ti: 1 },
          positions: { dominantSe: 1, tertiaryTi: 1 },
          enneagram: { "7": 2, "8": 1, "3": 1 },
          moral: { chaoticNeutral: 2 }
        }
      },
      {
        text: "Aku merenung, bertanya-tanya apakah ia benar-benar berniat baik dan sudah berubah. Sebagian kecil diriku selalu ingin mempercayai bahwa orang bisa menebus kesalahannya.",
        scores: {
          functions: { Fi: 2, Ne: 1 },
          positions: { auxiliaryFi: 1, dominantNe: 1 },
          enneagram: { "4": 1, "9": 2, "2": 1 },
          bigFive: { agreeableness: 1, openness: 1 }
        }
      }
    ]
  },
  {
    id: "q043",
    text: "Ketika kau tanpa sengaja melakukan kesalahan memalukan di depan umum, mekanisme pertahanan apa yang seketika mengambil alih tubuhmu sebelum kau sempat berpikir?",
    options: [
      {
        text: "Aku memasang wajah sedingin batu, pura-pura tidak ada yang terjadi. Aku memisahkan diriku dari rasa malu itu secara logika dan berjalan pergi seolah semuanya baik-baik saja.",
        scores: {
          functions: { Te: 2, Ti: 2 },
          positions: { dominantTe: 1, dominantTi: 1, inferiorFi: 1 },
          enneagram: { "3": 2, "5": 2 },
          bigFive: { neuroticism: -1 }
        }
      },
      {
        text: "Aku tertawa keras dan menjadikan diriku sendiri lelucon sebelum orang lain melakukannya. Aku lebih suka mengendalikan narasi tertawaan itu daripada terlihat rapuh.",
        scores: {
          functions: { Ne: 2, Fe: 2 },
          positions: { dominantNe: 2, tertiaryFe: 1 },
          enneagram: { "7": 3, "3": 1 },
          instincts: { so: 2 },
          temperament: { sanguine: 2 }
        }
      },
      {
        text: "Tubuhku membeku. Wajahku memanas, dan aku merasa ingin lenyap. Aku menunduk, meminta maaf dengan cepat, dan melarikan diri untuk menyembunyikan wajahku yang hancur.",
        scores: {
          functions: { Fi: 3, Si: 2 },
          positions: { dominantFi: 2, inferiorTe: 2 },
          enneagram: { "4": 2, "9": 2 },
          instincts: { sp: 2 },
          bigFive: { neuroticism: 3 },
          temperament: { melancholic: 2 }
        }
      },
      {
        text: "Aku segera mencari kambing hitam atau alasan di sekitar benda tersebut. 'Lantainya licin,' atau 'Kursi ini rusak.' Aku benci terlihat tidak kompeten, bahkan untuk hal remeh.",
        scores: {
          functions: { Te: 2, Se: 1 },
          positions: { tertiarySe: 1, dominantTe: 1 },
          enneagram: { "8": 2, "1": 1 },
          bigFive: { agreeableness: -1 }
        }
      },
      {
        text: "Aku melihat sekeliling untuk memastikan apakah ada yang benar-benar peduli. Jika tidak ada tatapan menghakimi yang berarti, aku menenangkannya dengan cepat dan mengabaikannya.",
        scores: {
          functions: { Se: 2, Ti: 1 },
          positions: { dominantSe: 1, auxiliaryTi: 1 },
          enneagram: { "9": 1, "7": 1 },
          bigFive: { neuroticism: -2 }
        }
      }
    ]
  },
  {
    id: "q044",
    text: "Sebuah kebenaran atau fakta baru tiba-tiba membuktikan bahwa prinsip yang kau yakini dan pertahankan selama bertahun-tahun ternyata salah total. Apa reaksi pertamamu?",
    options: [
      {
        text: "Hancur lebur secara moral. Aku merasa kehilangan arah karena aku sangat terikat pada kebenaran itu. Butuh waktu lama untuk meratapi matinya keyakinan lamaku.",
        scores: {
          functions: { Fi: 3, Si: 2 },
          positions: { dominantFi: 3, tertiarySi: 1 },
          enneagram: { "4": 3, "1": 1 },
          bigFive: { neuroticism: 3 },
          temperament: { melancholic: 3 }
        }
      },
      {
        text: "Ada penolakan keras di awal, aku mencari cacat dalam bukti baru itu. Jika akhirnya tidak terbantahkan, aku merasa rentan, seolah fondasi rumahku runtuh.",
        scores: {
          functions: { Si: 3, Ti: 1 },
          positions: { dominantSi: 3, inferiorNe: 2 },
          enneagram: { "6": 3, "1": 1 },
          instincts: { sp: 2 },
          bigFive: { openness: -2 }
        }
      },
      {
        text: "Keingintahuan intelektual yang membara. Aku tidak merasa bersalah, aku justru antusias membuang teori lama dan menyusun ulang seluruh pemahamanku dengan data baru yang lebih akurat.",
        scores: {
          functions: { Ti: 3, Ne: 2 },
          positions: { dominantTi: 3, auxiliaryNe: 1 },
          enneagram: { "5": 3, "7": 1 },
          bigFive: { openness: 3, neuroticism: -1 }
        }
      },
      {
        text: "Rasa malu yang menyengat karena aku pernah berdebat membelanya. Aku segera mengganti strategiku, beradaptasi dengan kebenaran baru agar aku tidak tampak bodoh lagi di masa depan.",
        scores: {
          functions: { Te: 3, Ni: 1 },
          positions: { dominantTe: 2, auxiliaryNi: 1 },
          enneagram: { "3": 3, "8": 1 },
          bigFive: { conscientiousness: 1 }
        }
      },
      {
        text: "Rasa takjub, melihat betapa realitas bisa berubah hanya dengan satu keping informasi. Aku segera memikirkan 'bagaimana jika' lainnya: apa lagi yang salah dalam duniaku ini?",
        scores: {
          functions: { Ne: 3, Ni: 1 },
          positions: { dominantNe: 3, dominantNi: 1 },
          enneagram: { "7": 2, "5": 1 },
          bigFive: { openness: 3 }
        }
      }
    ]
  },
  {
    id: "q045",
    text: "Dalam sebuah kelompok kerja, ketua yang ditunjuk sangat lamban, berputar-putar, dan tidak efisien, meski ia orang yang sangat ramah. Waktu terus berjalan. Apa yang kau lakukan?",
    options: [
      {
        text: "Kesabaranku habis. Aku memotong kata-katanya, mengambil alih kendali, dan mulai membagi tugas saat itu juga. Urusan perasaan bisa diselesaikan nanti setelah pekerjaan selesai.",
        scores: {
          functions: { Te: 3, Se: 1 },
          positions: { dominantTe: 3, auxiliarySe: 1 },
          enneagram: { "8": 3, "1": 1, "3": 1 },
          bigFive: { agreeableness: -3, extraversion: 2 },
          temperament: { choleric: 3 }
        }
      },
      {
        text: "Aku membimbingnya dari belakang. Aku melemparkan pertanyaan tajam yang menggiringnya agar secara logis ia mengambil keputusan yang benar tanpa menyadari bahwa akulah yang menyetirnya.",
        scores: {
          functions: { Ni: 3, Ti: 2 },
          positions: { dominantNi: 2, auxiliaryTi: 1 },
          enneagram: { "5": 2, "3": 1 },
          moral: { trueNeutral: 2 }
        }
      },
      {
        text: "Aku frustrasi tetapi memilih diam dan mengerjakan bagianku sendiri dengan sempurna. Aku benci konflik, jadi aku membiarkan kapalnya tenggelam asalkan sekociku aman.",
        scores: {
          functions: { Si: 2, Ti: 2 },
          positions: { dominantSi: 1, dominantTi: 1 },
          enneagram: { "9": 2, "5": 1 },
          instincts: { sp: 2 },
          bigFive: { agreeableness: -1 }
        }
      },
      {
        text: "Aku merasa kasihan melihatnya kebingungan. Aku mendekatinya secara pribadi, membantunya menyusun rencana tanpa harus mempermalukannya di depan anggota kelompok yang lain.",
        scores: {
          functions: { Fe: 3, Ni: 1 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "2": 3, "9": 1 },
          instincts: { so: 2 },
          bigFive: { agreeableness: 3 }
        }
      },
      {
        text: "Aku melontarkan sindiran ringan atau lelucon sarkastis tentang betapa lamanya proses ini, mencoba memancingnya untuk bertindak cepat tanpa harus berkonfrontasi langsung.",
        scores: {
          functions: { Ne: 2, Ti: 1 },
          positions: { dominantNe: 1, auxiliaryTi: 1 },
          enneagram: { "7": 2, "6": 1 },
          bigFive: { extraversion: 1 }
        }
      }
    ]
  },
  {
    id: "q046",
    text: "Ketika kau harus memaksakan diri tersenyum dan setuju dengan mayoritas pada suatu hal yang diam-diam kau benci, apa yang dirasakan oleh tubuhmu?",
    options: [
      {
        text: "Rasa mual dan kotor di dada. Ada bagian dari nuraniku yang berteriak bahwa aku sedang melacurkan prinsipku demi keamanan sosial. Kebencianku pada diri sendiri memuncak.",
        scores: {
          functions: { Fi: 3 },
          positions: { dominantFi: 3, auxiliaryFi: 2 },
          enneagram: { "4": 3, "1": 2 },
          instincts: { sx: 1 },
          bigFive: { neuroticism: 3 },
          temperament: { melancholic: 3 }
        }
      },
      {
        text: "Aku merasa mati rasa. Aku melihatnya semata-mata sebagai strategi bertahan hidup atau pelumas sosial yang efisien. Tidak ada yang tergores di batinku karena topeng ini kubuka di rumah.",
        scores: {
          functions: { Te: 2, Fe: 1 },
          positions: { dominantTe: 1, tertiaryFe: 1 },
          enneagram: { "3": 3, "8": 1, "9": 1 },
          moral: { trueNeutral: 2 }
        }
      },
      {
        text: "Sakit kepala ringan atau kelelahan instan. Otakku sibuk membongkar kecacatan argumen mereka secara rahasia, menahan diri agar lidahku tidak melontarkan fakta yang menghancurkan suasana.",
        scores: {
          functions: { Ti: 3, Ni: 1 },
          positions: { dominantTi: 3, auxiliaryTi: 1 },
          enneagram: { "5": 2 },
          bigFive: { introversion: 1 }
        }
      },
      {
        text: "Tubuhku rileks dengan sendirinya. Meskipun aku membencinya, dorongan normalku adalah mencari keselarasan. Mengalah terasa lebih mudah daripada menahan ketegangan konflik.",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "9": 3, "2": 1 },
          instincts: { so: 1 },
          bigFive: { agreeableness: 3 }
        }
      },
      {
        text: "Ada dorongan untuk menyeletuk kalimat kontroversial. Aku merasa tergelitik untuk menyisipkan keanehan atau memutarbalikkan setujuanku agar tidak terasa terlalu membosankan.",
        scores: {
          functions: { Ne: 3, Ti: 1 },
          positions: { dominantNe: 3, auxiliaryTi: 1 },
          enneagram: { "7": 2, "cp6": 1 },
          bigFive: { openness: 2, agreeableness: -1 }
        }
      }
    ]
  },
  {
    id: "q047",
    text: "Kau kembali mengunjungi tempat yang sering kau singgahi bertahun-tahun lalu, dan banyak hal telah berubah. Apa bentuk memori yang lebih dulu menyerang batinmu?",
    options: [
      {
        text: "Bayangan konkret masa lalu menumpuk pada realitas saat ini. Mataku melihat cat yang baru, tetapi pikiranku mencari letak meja lama yang sudah tidak ada. Aku merindukan keadaannya yang dulu.",
        scores: {
          functions: { Si: 3, Fi: 1 },
          positions: { dominantSi: 3, auxiliarySi: 2 },
          enneagram: { "6": 1, "9": 1 },
          bigFive: { openness: -2 },
          temperament: { melancholic: 1 }
        }
      },
      {
        text: "Sebuah perasaan abstrak, getaran melankolis tentang berjalannya waktu. Aku tidak mengingat detail pasti bentuk ruangannya, melainkan hantu dari emosi atau aura dari masa mudaku.",
        scores: {
          functions: { Ni: 3, Fi: 2 },
          positions: { dominantNi: 2, tertiaryFi: 1 },
          enneagram: { "4": 2, "5": 1 },
          bigFive: { openness: 2 }
        }
      },
      {
        text: "Aku tidak terlalu terjebak nostagia. Aku justru melihat-lihat peluang baru yang ditawarkan tempat itu sekarang. Perubahan adalah tanda kehidupan berjalan maju.",
        scores: {
          functions: { Se: 3, Te: 1 },
          positions: { dominantSe: 3, auxiliaryTe: 1 },
          enneagram: { "7": 2, "8": 1 },
          bigFive: { openness: 1, neuroticism: -1 }
        }
      },
      {
        text: "Ingatan tentang wajah-wajah dan percakapan. Aku tiba-tiba membayangkan apa yang sedang dilakukan orang-orang yang dulu biasa kutemui di sini, dan apakah mereka masih mengingatku.",
        scores: {
          functions: { Fe: 2, Si: 2 },
          positions: { dominantFe: 1, tertiarySi: 1 },
          enneagram: { "2": 2, "6": 1 },
          instincts: { so: 2 }
        }
      },
      {
        text: "Pikiranku menghubungkan sejarah tempat ini. Mengapa desainnya diubah seperti ini? Apa motif logis di baliknya? Aku menganalisis transisi tempat itu dari dulu ke sekarang.",
        scores: {
          functions: { Ti: 2, Ne: 1 },
          positions: { dominantTi: 1, auxiliaryNe: 1 },
          enneagram: { "5": 1 },
          bigFive: { conscientiousness: 1 }
        }
      }
    ]
  },
  {
    id: "q048",
    text: "Seseorang mengatakan padamu, “Kau sama persis seperti orang kebanyakan.” Kalimat itu diucapkan dengan niat baik, tetapi apa yang diam-diam berdarah di dalam dirimu?",
    options: [
      {
        text: "Jiwaku terasa tertusuk. Menjadi biasa dan tidak memiliki kedalaman atau identitas yang otentik adalah salah satu ketakutan terbesarku. Aku merasa kehilangan makna diriku.",
        scores: {
          functions: { Fi: 3, Ni: 1 },
          positions: { dominantFi: 3, auxiliaryFi: 1 },
          enneagram: { "4": 3 },
          instincts: { sx: 2 },
          bigFive: { neuroticism: 2 },
          temperament: { melancholic: 3 }
        }
      },
      {
        text: "Harga diriku terluka karena aku telah berjuang sangat keras untuk mengumpulkan kompetensi dan menempatkan diriku di atas rata-rata. Aku benci jika pencapaianku tidak dilihat.",
        scores: {
          functions: { Te: 3, Ni: 1 },
          positions: { dominantTe: 2, auxiliaryNi: 1 },
          enneagram: { "3": 3, "8": 1 },
          instincts: { so: 1 },
          bigFive: { conscientiousness: 2 }
        }
      },
      {
        text: "Otakku menolaknya. Aku merasa pemahamanku, konsep pikiranku, atau teori yang kubangun di kepalaku terlalu rumit untuk disamakan dengan pikiran orang awam.",
        scores: {
          functions: { Ti: 3, Ni: 2 },
          positions: { dominantTi: 2, dominantNi: 1 },
          enneagram: { "5": 3 },
          bigFive: { agreeableness: -1 }
        }
      },
      {
        text: "Aku tidak marah sama sekali. Justru ada sedikit rasa lega. Menjadi seperti orang lain berarti aku memiliki tempat di dunia ini, bagian dari komunitas yang stabil dan dapat diterima.",
        scores: {
          functions: { Si: 2, Fe: 2 },
          positions: { dominantSi: 1, dominantFe: 1 },
          enneagram: { "9": 3, "6": 2 },
          instincts: { so: 2, sp: 1 },
          bigFive: { neuroticism: -1 }
        }
      },
      {
        text: "Aku merasa bosan mendengar pandangannya yang sempit. Jika ia hanya bisa melihat permukaanku dan menyamakanku dengan yang lain, berarti pikirannya yang dangkal, bukan aku.",
        scores: {
          functions: { Ne: 2, Ti: 1 },
          positions: { dominantNe: 2, auxiliaryTi: 1 },
          enneagram: { "7": 1, "8": 1 },
          bigFive: { openness: 1 }
        }
      }
    ]
  },
  {
    id: "q049",
    text: "Pasangan atau kawan dekatmu mendesak, “Katakan saja apa yang sebenarnya kau rasakan. Aku ingin kau menangis, marah, atau meledak. Jangan sembunyi.” Apa refleks bawah sadarmu menghadapi permintaan ini?",
    options: [
      {
        text: "Tubuhku menolak dan pikiranku menjadi kosong. Emosi bagiku adalah bahasa asing yang butuh waktu lama untuk kuterjemahkan secara logis. Dipaksa mengeluarkannya membuatku mundur.",
        scores: {
          functions: { Ti: 3, Si: 1 },
          positions: { inferiorFe: 3, dominantTi: 2 },
          enneagram: { "5": 3, "9": 1 },
          instincts: { sp: 2 },
          bigFive: { agreeableness: -1 }
        }
      },
      {
        text: "Ketakutan akan kehilangan kendali. Aku takut jika bendungan itu terbuka, amarah atau kesedihan yang selama ini kutahan di bawah rasionalitas akan menghancurkan segalanya di sekitarku.",
        scores: {
          functions: { Te: 2, Ni: 2 },
          positions: { dominantTe: 1, inferiorFi: 2 },
          enneagram: { "8": 2, "1": 2 },
          bigFive: { neuroticism: 1 },
          temperament: { choleric: 1 }
        }
      },
      {
        text: "Air mataku mungkin jatuh, tetapi bukan kelegaan yang kurasa. Ada rasa malu yang teramat sangat karena memperlihatkan bagian diriku yang berantakan dan menuntut belas kasihan.",
        scores: {
          functions: { Fi: 3 },
          positions: { dominantFi: 2, auxiliaryFi: 1 },
          enneagram: { "4": 2, "2": 1 },
          instincts: { sx: 1 },
          bigFive: { neuroticism: 3 }
        }
      },
      {
        text: "Aku merasa terjebak, lalu mengalihkan situasi menjadi lelucon, senyuman, atau tindakan fisik. “Aku tidak apa-apa sungguh, mari makan saja di luar,” untuk menghindari keintiman yang berat.",
        scores: {
          functions: { Se: 2, Ne: 2 },
          positions: { dominantSe: 1, dominantNe: 1 },
          enneagram: { "7": 3, "9": 1 },
          instincts: { sp: 1 },
          bigFive: { agreeableness: 1 }
        }
      },
      {
        text: "Aku merasa bersalah karena tidak bisa memberinya reaksi yang ia inginkan. Aku lalu mencari-cari perasaan yang tepat, mungkin melebih-lebihkan sedikit, demi memenuhi ekspektasi emosionalnya.",
        scores: {
          functions: { Fe: 3 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "9": 2, "6": 1, "2": 1 },
          instincts: { so: 2 },
          bigFive: { agreeableness: 2 }
        }
      }
    ]
  },
  {
    id: "q050",
    text: "Malam tahun baru, saat semua orang merayakan momen, kau berdiam diri dan tanpa sadar menimbang hidupmu selama setahun terakhir. Metrik rahasia apa yang paling kejam kau pakai untuk menghakimi dirimu?",
    options: [
      {
        text: "“Apakah aku telah bertindak sesuai dengan nilai-nilaiku, atau apakah aku telah menjadi palsu, berkompromi dengan dunia, dan kehilangan jiwaku yang sebenarnya?”",
        scores: {
          functions: { Fi: 3, Ni: 1 },
          positions: { dominantFi: 3, auxiliaryFi: 2 },
          enneagram: { "4": 2, "1": 2 },
          bigFive: { neuroticism: 2 },
          moral: { chaoticGood: 1, lawfulGood: 1 }
        }
      },
      {
        text: "“Berapa banyak kotak yang berhasil kucentang? Berapa jauh jarakku dari target awalku? Apakah aku hanya jalan di tempat dalam hal kompetensi dan status?”",
        scores: {
          functions: { Te: 3, Si: 1 },
          positions: { dominantTe: 3, auxiliaryTe: 2 },
          enneagram: { "3": 3, "8": 1 },
          bigFive: { conscientiousness: 3 }
        }
      },
      {
        text: "“Apakah pemahamanku tentang semesta dan diriku sendiri telah semakin tajam? Atau apakah aku membiarkan otakku tumpul oleh masalah-masalah dangkal duniawi?”",
        scores: {
          functions: { Ti: 3, Ni: 2 },
          positions: { dominantTi: 3, dominantNi: 1 },
          enneagram: { "5": 3 },
          bigFive: { openness: 1 }
        }
      },
      {
        text: "“Berapa banyak orang yang sungguh-sungguh kubantu? Apakah aku telah menjadi tempat yang aman bagi mereka, atau apakah aku membuat seseorang merasa ditinggalkan?”",
        scores: {
          functions: { Fe: 3 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "2": 3, "9": 1 },
          instincts: { so: 2 },
          bigFive: { agreeableness: 2 }
        }
      },
      {
        text: "“Apakah aku benar-benar menjalani hidup ini? Atau aku hanya melewatkan hari tanpa petualangan, tanpa gairah, terikat pada ketakutan yang menahanku mencoba hal baru?”",
        scores: {
          functions: { Se: 2, Ne: 2 },
          positions: { dominantSe: 1, dominantNe: 1 },
          enneagram: { "7": 3 },
          bigFive: { openness: 2, extraversion: 1 }
        }
      }
    ]
  },
  {
    id: "q051",
    text: "Dalam suatu diskusi, seseorang menyela argumenmu dengan data yang sangat teknis yang tidak kau kuasai sepenuhnya. Bagaimana batinmu bereaksi terhadap rasa tidak kompeten itu?",
    options: [
      {
        text: "Aku merasa terancam secara ego. Aku segera mencari kelemahan dalam data tersebut atau menyanggahnya dengan argumen yang lebih besar, tidak mau terlihat kalah.",
        scores: {
          functions: { Te: 3, Se: 1 },
          positions: { dominantTe: 2, tertiarySe: 1 },
          enneagram: { "3": 2, "8": 2, "1": 1 },
          bigFive: { agreeableness: -2 },
          temperament: { choleric: 2 }
        }
      },
      {
        text: "Aku menjadi penasaran. Aku memintanya menjelaskan lebih lanjut agar aku bisa membedah datanya. Bagiku, kesempatan belajar lebih penting daripada harga diri.",
        scores: {
          functions: { Ti: 3, Ne: 1 },
          positions: { dominantTi: 3, auxiliaryTi: 2 },
          enneagram: { "5": 3, "7": 1 },
          bigFive: { openness: 2 }
        }
      },
      {
        text: "Aku menarik diri dan membiarkannya bicara. Aku merasa tidak nyaman dan merasa tidak punya tempat di diskusi yang se-teknis ini, memilih untuk diam sampai keadaan normal kembali.",
        scores: {
          functions: { Si: 2, Fi: 1 },
          positions: { inferiorNe: 2 },
          enneagram: { "6": 2, "9": 2 },
          bigFive: { introversion: 1 }
        }
      },
      {
        text: "Aku mengakui ketidaktahuanku dengan tenang dan mengalihkan pembicaraan pada dampak praktis atau dampaknya bagi orang-orang, membelokkan fokus dari data teknis ke aspek kemanusiaan.",
        scores: {
          functions: { Fe: 3, Ni: 1 },
          positions: { dominantFe: 2, auxiliaryFe: 1 },
          enneagram: { "2": 2, "9": 2 },
          instincts: { so: 1 }
        }
      },
      {
        text: "Aku merasa tertekan dan malu karena tidak siap. Aku menutupi kegugupanku dengan lelucon atau sikap santai, berharap orang tidak sadar bahwa aku sedang tidak paham apa pun.",
        scores: {
          functions: { Ne: 2, Se: 2 },
          positions: { dominantNe: 1, dominantSe: 1 },
          enneagram: { "7": 2, "6": 1 },
          bigFive: { neuroticism: 1 }
        }
      }
    ]
  },
  {
    id: "q052",
    text: "Ketika sebuah rencana besar gagal total, seseorang yang kau hormati berkata dengan tenang, 'Ya sudah, memang belum waktunya.' Bagaimana batinmu menerima kalimat itu?",
    options: [
      {
        text: "Aku marah besar. Tidak ada yang namanya 'belum waktunya'. Kegagalan ini karena perhitungan yang salah atau eksekusi yang lemah. Kalimat itu terasa sangat meremehkan usahaku.",
        scores: {
          functions: { Te: 3, Ti: 2 },
          positions: { dominantTe: 3, auxiliaryTe: 2 },
          enneagram: { "8": 3, "1": 1 },
          bigFive: { agreeableness: -2 },
          temperament: { choleric: 2 }
        }
      },
      {
        text: "Ada rasa damai sekaligus getir. Mungkin ia benar. Aku membiarkannya meresap, meski bagian dalam diriku masih merasa sesak karena keinginan untuk mencapai hal tersebut.",
        scores: {
          functions: { Ni: 3, Fi: 2 },
          positions: { dominantNi: 2, dominantFi: 1 },
          enneagram: { "4": 2, "9": 2, "5": 1 },
          temperament: { melancholic: 2 }
        }
      },
      {
        text: "Aku mencurigainya. Apakah dia menyembunyikan sesuatu? Mengapa dia begitu tenang? Aku menganalisis apakah kalimat itu hanyalah basa-basi untuk menyembunyikan ketidakmampuannya sendiri.",
        scores: {
          functions: { Ti: 3, Ni: 1 },
          positions: { dominantTi: 3, auxiliaryTi: 2 },
          enneagram: { "5": 2, "6": 2 },
          bigFive: { neuroticism: 1 }
        }
      },
      {
        text: "Aku merasa lega. Kalimat itu adalah ijin bagiku untuk berhenti dari beban yang sebenarnya tidak sanggup kupikul lagi. Aku merasa seolah beban di bahuku terangkat.",
        scores: {
          functions: { Si: 2, Fe: 2 },
          positions: { dominantSi: 1, dominantFe: 1 },
          enneagram: { "9": 3, "2": 1 },
          bigFive: { conscientiousness: -1 }
        }
      },
      {
        text: "Aku langsung mencari pintu keluar lain. Kalimat itu kutelan sebagai fakta, lalu pikiranku segera melompat ke ide berikutnya yang lebih seru dan mungkin lebih sukses.",
        scores: {
          functions: { Ne: 3, Se: 1 },
          positions: { dominantNe: 3, auxiliaryNe: 1 },
          enneagram: { "7": 3, "3": 1 },
          bigFive: { openness: 2 }
        }
      }
    ]
  },
  {
    id: "q053",
    text: "Di tengah sebuah pesta atau acara sosial yang ramai, seseorang tiba-tiba menanyakan pertanyaan sangat pribadi di depan banyak orang. Bagaimana caramu menangani 'serangan' ini?",
    options: [
      {
        text: "Aku menatap matanya dengan dingin dan berkata, 'Mari kita bahas itu di tempat yang lebih pribadi.' Aku menjaga kendaliku dan membuat dia merasa canggung karena pertanyaannya.",
        scores: {
          functions: { Te: 3, Ni: 1 },
          positions: { dominantTe: 2, dominantNi: 1 },
          enneagram: { "8": 2, "1": 1 },
          bigFive: { agreeableness: -1 },
          moral: { lawfulNeutral: 1 }
        }
      },
      {
        text: "Aku melontarkan lelucon tajam atau sarkasme tentang betapa tidak sopannya pertanyaan itu, mengalihkan perhatian orang banyak ke arahnya dan menertawakan kecanggungannya.",
        scores: {
          functions: { Ne: 3, Ti: 1 },
          positions: { dominantNe: 2, auxiliaryTi: 1 },
          enneagram: { "7": 2, "5": 1 },
          bigFive: { extraversion: 1 }
        }
      },
      {
        text: "Aku merasa hancur dan tersudut. Aku menjawab dengan jawaban singkat dan tidak jujur, lalu secepat mungkin melarikan diri ke kamar mandi atau pintu keluar untuk menyembunyikan wajahku.",
        scores: {
          functions: { Fi: 3, Si: 2 },
          positions: { dominantFi: 3, inferiorTe: 2 },
          enneagram: { "4": 2, "6": 2, "9": 1 },
          bigFive: { neuroticism: 3 },
          temperament: { melancholic: 3 }
        }
      },
      {
        text: "Aku menjawabnya dengan tenang, memberikan jawaban setengah jujur yang membuat orang lain puas tanpa harus mengungkap bagian diriku yang paling dalam. Aku menjaga suasana tetap harmonis.",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 2, auxiliaryFe: 2 },
          enneagram: { "2": 2, "9": 2 },
          instincts: { so: 2 },
          bigFive: { agreeableness: 3 }
        }
      },
      {
        text: "Aku menjawabnya dengan jujur dan santai, seolah hal itu bukan masalah besar. Keaslian adalah kekuatanku; jika dia ingin bertanya hal pribadi, dia akan mendapatkan kejujuran yang tidak terduga.",
        scores: {
          functions: { Fi: 2, Se: 2 },
          positions: { dominantFi: 1, dominantSe: 1 },
          enneagram: { "8": 1, "4": 1 },
          instincts: { sx: 2 }
        }
      }
    ]
  },
  {
    id: "q054",
    text: "Seseorang yang kau sayangi melakukan kesalahan fatal yang tidak bisa dimaafkan oleh banyak orang. Apa hal pertama yang muncul di batinmu saat melihat ia harus menanggung akibatnya sendirian?",
    options: [
      {
        text: "Aku merasa marah karena dia begitu bodoh. Namun, naluriku adalah memastikan dia tidak hancur sepenuhnya. Aku akan membantunya menanggung akibatnya meski itu merugikanku.",
        scores: {
          functions: { Fe: 3, Ni: 1 },
          positions: { dominantFe: 2, auxiliaryFe: 2 },
          enneagram: { "2": 3, "6": 1 },
          instincts: { so: 2, sx: 1 },
          bigFive: { agreeableness: 2 }
        }
      },
      {
        text: "Aku merasa dingin. Aku mencintainya, tapi tindakannya tidak bisa dibenarkan. Aku akan menemaninya tapi aku tidak akan melindunginya dari konsekuensi logis tindakannya.",
        scores: {
          functions: { Te: 3, Fi: 2 },
          positions: { dominantTe: 2, dominantFi: 1 },
          enneagram: { "1": 3, "5": 1 },
          bigFive: { conscientiousness: 2 },
          moral: { lawfulNeutral: 1 }
        }
      },
      {
        text: "Aku hancur bersama dia. Rasa sakitnya terasa seperti rasa sakitku sendiri. Aku tidak peduli apakah dia benar atau salah, aku hanya tidak bisa melihatnya menderita sendirian.",
        scores: {
          functions: { Fi: 3, Si: 2 },
          positions: { dominantFi: 3, auxiliaryFi: 2 },
          enneagram: { "4": 3, "9": 2 },
          instincts: { sx: 2 },
          bigFive: { neuroticism: 3 }
        }
      },
      {
        text: "Aku mencoba memahami motifnya. Jika motifnya masuk akal bagiku, aku akan membela dan membelokkan narasi orang-orang agar dia tidak tampak seburuk itu.",
        scores: {
          functions: { Ni: 2, Ti: 2 },
          positions: { dominantNi: 1, dominantTi: 1 },
          enneagram: { "5": 2, "3": 1 },
          bigFive: { agreeableness: 1 }
        }
      },
      {
        text: "Aku menjauh. Aku tidak sanggup melihat keruntuhannya, dan aku takut reputasiku juga akan ikut terseret jika aku terlibat dalam pembelaan.",
        scores: {
          functions: { Se: 2, Si: 2 },
          positions: { dominantSe: 1, dominantSi: 1 },
          enneagram: { "9": 2, "6": 2 },
          instincts: { sp: 2 },
          bigFive: { neuroticism: 1 }
        }
      }
    ]
  },
  {
    id: "q055",
    text: "Ketika kau berada di puncak kelelahan hidup, hal remeh apa yang jika terjadi, bisa membuatmu tiba-tiba ingin menangis atau menyerah?",
    options: [
      {
        text: "Meja yang berantakan atau pekerjaan yang menumpuk. Keteraturan yang hilang saat aku sendiri sudah kehilangan kendali membuat segalanya terasa mustahil diselesaikan.",
        scores: {
          functions: { Si: 3, Te: 2 },
          positions: { dominantSi: 2, auxiliarySi: 1 },
          enneagram: { "1": 3, "6": 1 },
          bigFive: { conscientiousness: 2, neuroticism: 2 }
        }
      },
      {
        text: "Seseorang yang bertanya 'Apa rencanamu besok?' atau menuntut tanggung jawab tambahan. Aku merasa aku sudah tidak punya ruang untuk bernapas dan masa depan terasa mencekik.",
        scores: {
          functions: { Ni: 3, Fi: 1 },
          positions: { dominantNi: 2, inferiorSe: 2 },
          enneagram: { "5": 2, "4": 2 },
          bigFive: { neuroticism: 2 }
        }
      },
      {
        text: "Mendengar kata-kata kasar atau melihat ketidakpedulian dari orang yang kusayangi. Saat aku sudah sangat rapuh, satu saja sikap dingin bisa merobohkan seluruh dinding pertahananku.",
        scores: {
          functions: { Fe: 2, Fi: 2 },
          positions: { dominantFe: 1, dominantFi: 1 },
          enneagram: { "2": 3, "9": 2 },
          instincts: { so: 2 },
          bigFive: { agreeableness: 2 }
        }
      },
      {
        text: "Saat tidak ada apa-apa, saat aku hanya duduk sendirian dalam sunyi. Keheningan yang memaksa, saat aku tidak punya alasan untuk sibuk lagi, membuat semua rasa lelah itu mengejarku.",
        scores: {
          functions: { Se: 2, Ti: 2 },
          positions: { dominantSe: 1, tertiaryNi: 1 },
          enneagram: { "7": 2, "8": 1 },
          bigFive: { extraversion: -1 }
        }
      },
      {
        text: "Saat rencanaku sedikit saja meleset karena hal bodoh di luar kendali. Ketidakpastian dan kekacauan di luar diriku membuatku merasa bahwa segalanya memang tidak pernah bisa diperbaiki.",
        scores: {
          functions: { Ne: 2, Te: 2 },
          positions: { dominantNe: 1, inferiorSi: 2 },
          enneagram: { "6": 3, "3": 1 },
          bigFive: { neuroticism: 2 }
        }
      }
    ]
  },
  {
    id: "q056",
    text: "Saat kau melihat seseorang yang kau anggap bodoh atau dangkal justru mendapatkan pujian besar karena pencapaian keberuntungan, apa yang kau lakukan?",
    options: [
      {
        text: "Aku membongkar faktanya di depan orang-orang (atau setidaknya di depan teman dekat). Keberuntungan tidak bisa menutupi ketidakmampuan, dan dunia harus tahu itu.",
        scores: {
          functions: { Te: 3, Ti: 2 },
          positions: { dominantTe: 2, dominantTi: 1 },
          enneagram: { "8": 3, "1": 1 },
          bigFive: { agreeableness: -2 },
          temperament: { choleric: 2 }
        }
      },
      {
        text: "Aku menertawakannya dalam hati. Dunia memang absurd dan tidak adil. Aku mungkin membuat sindiran sinis tentang 'nasib baik' yang tidak dibarengi 'otak'.",
        scores: {
          functions: { Ne: 2, Ti: 2 },
          positions: { dominantNe: 1, auxiliaryTi: 1 },
          enneagram: { "5": 2, "7": 1 },
          bigFive: { openness: 1 }
        }
      },
      {
        text: "Aku diam saja. Dunia memang seperti itu. Tidak ada gunanya aku ikut campur atau menunjukkan kemarahan, itu hanya membuatku terlihat iri dan picik.",
        scores: {
          functions: { Si: 2, Fe: 1 },
          positions: { dominantSi: 1, dominantFe: 1 },
          enneagram: { "9": 3, "6": 1 },
          bigFive: { neuroticism: -1 }
        }
      },
      {
        text: "Aku merasa tidak nyaman, bukan karena iri, tapi karena standarku merasa terhina. Aku menarik diri dari kelompok itu, memilih untuk tidak bergaul dengan orang yang tidak menghargai kualitas nyata.",
        scores: {
          functions: { Fi: 3 },
          positions: { dominantFi: 3, auxiliaryFi: 1 },
          enneagram: { "4": 2, "1": 2 },
          bigFive: { agreeableness: 0 }
        }
      },
      {
        text: "Aku mencoba memahami mengapa orang-orang memberikan pujian itu. Mungkin ada nilai yang mereka lihat yang aku lewatkan karena aku terlalu fokus pada kriteria teknis.",
        scores: {
          functions: { Ni: 2, Fe: 2 },
          positions: { dominantNi: 1, auxiliaryFe: 1 },
          enneagram: { "2": 1, "5": 1 },
          bigFive: { openness: 2 }
        }
      }
    ]
  },
  {
    id: "q057",
    text: "Ketika kau mendapati dirimu terus-menerus mengulang kesalahan yang sama meski kau tahu itu salah, apa kesimpulan kejam yang kau buat tentang dirimu sendiri?",
    options: [
      {
        text: "“Aku memang tidak memiliki disiplin. Aku hanya bicara besar, tetapi saat harus bertindak, aku lemah dan mudah menyerah pada dorongan sesaat.”",
        scores: {
          functions: { Te: 2, Si: 2 },
          positions: { inferiorTe: 2, dominantSi: 1 },
          enneagram: { "1": 3, "6": 1 },
          bigFive: { conscientiousness: -1, neuroticism: 1 }
        }
      },
      {
        text: "“Aku adalah diriku yang rusak. Selalu ada luka yang belum selesai, dan aku hanya sedang mencoba bertahan dengan cara yang salah.”",
        scores: {
          functions: { Fi: 3, Ni: 1 },
          positions: { dominantFi: 3, auxiliaryFi: 2 },
          enneagram: { "4": 3, "9": 1 },
          instincts: { sx: 1 },
          bigFive: { neuroticism: 3 }
        }
      },
      {
        text: "“Pola hidupku memang tidak beres. Aku harus membedah akar penyebabnya sampai ke akarnya, karena tindakan bodoh ini hanya hasil dari sistem yang salah di kepalaku.”",
        scores: {
          functions: { Ti: 3, Ne: 1 },
          positions: { dominantTi: 3, auxiliaryTi: 1 },
          enneagram: { "5": 3, "1": 1 },
          bigFive: { conscientiousness: 1 }
        }
      },
      {
        text: "“Dunia ini memang tidak bisa diprediksi. Aku hanya manusia yang mencoba mengikuti arus. Mungkin aku terlalu keras pada diriku sendiri.”",
        scores: {
          functions: { Se: 2, Ne: 2 },
          positions: { dominantSe: 1, dominantNe: 1 },
          enneagram: { "7": 3, "9": 2 },
          bigFive: { neuroticism: -1 }
        }
      },
      {
        text: "“Aku gagal menjadi apa yang orang lain butuhkan. Aku terus-menerus mengecewakan diri sendiri dan orang yang mengandalkanku karena aku tidak cukup kuat.”",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "2": 2, "6": 2 },
          bigFive: { neuroticism: 2 }
        }
      }
    ]
  },
  {
    id: "q058",
    text: "Ada sebuah proyek kreatif atau ide yang sangat ingin kau wujudkan, tetapi kau tahu banyak orang akan mencemooh atau menganggapnya bodoh. Apa tindakanmu?",
    options: [
      {
        text: "Aku melakukannya secara diam-diam. Tidak ada orang yang perlu tahu sampai ide itu terbukti sukses dan layak. Aku bekerja di bawah radar.",
        scores: {
          functions: { Ni: 3, Te: 1 },
          positions: { dominantNi: 2, auxiliaryTe: 1 },
          enneagram: { "5": 3, "3": 1 },
          moral: { trueNeutral: 1 }
        }
      },
      {
        text: "Aku melakukannya dengan lantang. Semakin mereka mencemooh, semakin aku bersemangat untuk membuktikan betapa dangkal pemikiran mereka.",
        scores: {
          functions: { Se: 2, Te: 2 },
          positions: { dominantSe: 1, tertiaryTe: 1 },
          enneagram: { "8": 3, "7": 1 },
          bigFive: { agreeableness: -2 },
          temperament: { choleric: 2 }
        }
      },
      {
        text: "Aku mencari dukungan dari orang-orang yang berpikiran sama sebelum meluncurkannya. Aku butuh validasi bahwa aku tidak gila dan ide ini memang berharga.",
        scores: {
          functions: { Fe: 2, Ne: 2 },
          positions: { dominantFe: 1, auxiliaryFe: 1 },
          enneagram: { "6": 3, "2": 1 },
          instincts: { so: 2 }
        }
      },
      {
        text: "Aku membatalkannya. Jika ide ini tidak mendapatkan persetujuan atau dukungan, mungkin memang ide ini tidak sepenting itu untuk dilakukan. Aku tidak mau menanggung risiko malu.",
        scores: {
          functions: { Si: 3, Fe: 1 },
          positions: { dominantSi: 2, inferiorNe: 2 },
          enneagram: { "9": 3, "6": 2 },
          bigFive: { neuroticism: 1 }
        }
      },
      {
        text: "Aku menyesuaikannya. Aku mencari jalan tengah agar ide ini bisa diterima tanpa kehilangan esensinya. Aku pintar beradaptasi agar ideku tetap hidup.",
        scores: {
          functions: { Ne: 3, Ti: 1 },
          positions: { dominantNe: 2, auxiliaryTi: 1 },
          enneagram: { "3": 2, "7": 2 },
          bigFive: { openness: 2 }
        }
      }
    ]
  },
  {
    id: "q059",
    text: "Seseorang yang kau sayangi sedang dalam masa depresi berat dan mulai memutus kontak dengan dunia. Bagaimana caramu mendekatinya?",
    options: [
      {
        text: "Aku datang tanpa diundang, mendobrak temboknya, memaksanya keluar, dan melakukan aktivitas fisik yang menyenangkan. Dia butuh dipaksa untuk sadar bahwa hidup masih ada.",
        scores: {
          functions: { Se: 3, Te: 1 },
          positions: { dominantSe: 2, tertiaryTe: 1 },
          enneagram: { "8": 2, "7": 2 },
          temperament: { choleric: 1 }
        }
      },
      {
        text: "Aku meninggalkan pesan singkat bahwa aku ada di sini, lalu aku menunggu. Aku menghormati ruangnya dan tidak akan mengganggunya sampai dia siap bicara.",
        scores: {
          functions: { Ni: 2, Fi: 2 },
          positions: { dominantNi: 1, dominantFi: 1 },
          enneagram: { "5": 2, "4": 2, "9": 1 },
          bigFive: { introversion: 2 }
        }
      },
      {
        text: "Aku mencoba mencari akar masalahnya. Aku menanyakan hal-hal spesifik, mencari tahu apa yang sebenarnya terjadi agar aku bisa memberinya solusi logis yang terstruktur.",
        scores: {
          functions: { Ti: 3, Te: 1 },
          positions: { dominantTi: 3, auxiliaryTi: 1 },
          enneagram: { "5": 3, "1": 1 },
          bigFive: { agreeableness: -1 }
        }
      },
      {
        text: "Aku setiap hari mengirim pesan kasih sayang, makanan, atau hal-hal kecil. Aku ingin dia tahu bahwa meski dia membenci dirinya sendiri, aku tetap mencintainya.",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "2": 3, "9": 1 },
          instincts: { so: 2 },
          bigFive: { agreeableness: 3 }
        }
      },
      {
        text: "Aku mengajaknya membicarakan masa lalu. Aku mengingatkannya akan memori indah saat dia merasa kuat, mencoba menyalakan kembali api yang meredup melalui nostalgia.",
        scores: {
          functions: { Si: 3, Fi: 1 },
          positions: { dominantSi: 2, tertiaryFi: 1 },
          enneagram: { "6": 2, "4": 1 },
          bigFive: { conscientiousness: 1 }
        }
      }
    ]
  },
  {
    id: "q060",
    text: "Saat kau dihadapkan pada situasi yang mengharuskanmu untuk menjadi kejam secara moral demi keselamatan jangka panjang orang yang kau lindungi, apa yang memandu tindakanmu?",
    options: [
      {
        text: "Aku akan menjadi monster itu jika memang harus. Aku akan menanggung dosa itu sendirian, asalkan mereka aman. Tidak ada yang lebih penting daripada itu.",
        scores: {
          functions: { Fi: 3, Ni: 1 },
          positions: { dominantFi: 2, auxiliaryFi: 1 },
          enneagram: { "8": 3, "2": 2, "1": 1 },
          moral: { chaoticGood: 1, lawfulEvil: 1 }
        }
      },
      {
        text: "Aku menyusun rencana yang efisien agar tidak ada orang yang tahu aku melakukan kejahatan itu. Keberhasilan misi adalah segalanya; etika adalah variabel yang bisa dikelola.",
        scores: {
          functions: { Te: 3, Ti: 2 },
          positions: { dominantTe: 3, dominantTi: 2 },
          enneagram: { "3": 3, "5": 1 },
          moral: { neutralEvil: 1, lawfulEvil: 1 }
        }
      },
      {
        text: "Aku tidak sanggup. Jika harga keselamatan adalah menjadi orang jahat, maka aku tidak bisa melakukannya. Aku lebih memilih mencari jalan lain meski harus menanggung risiko kegagalan.",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 2, auxiliaryFe: 1 },
          enneagram: { "1": 3, "6": 2 },
          moral: { lawfulGood: 2 }
        }
      },
      {
        text: "Aku membedah kemungkinan hasil akhirnya secara dingin. Jika secara statistik menjadi kejam adalah satu-satunya jalan keluar, aku akan melakukannya tanpa emosi.",
        scores: {
          functions: { Ti: 3, Ni: 1 },
          positions: { dominantTi: 3, dominantNi: 1 },
          enneagram: { "5": 3, "8": 1 },
          moral: { trueNeutral: 2 }
        }
      },
      {
        text: "Aku mencari celah ketiga. Selalu ada cara lain jika kau cukup kreatif. Menjadi kejam adalah tanda kemalasan berpikir.",
        scores: {
          functions: { Ne: 3, Ti: 1 },
          positions: { dominantNe: 3, auxiliaryTi: 1 },
          enneagram: { "7": 2, "5": 1 },
          moral: { chaoticGood: 1 }
        }
      }
    ]
  },
  {
    id: "q061",
    text: "Ketika seseorang yang kau benci ternyata mengalami kemalangan yang sangat berat, apa respons yang jujur muncul di batinmu?",
    options: [
      {
        text: "Kepuasan rahasia yang singkat. Dunia akhirnya memberikan keadilan yang setimpal atas perbuatannya.",
        scores: {
          functions: { Te: 2, Fi: 2 },
          positions: { dominantFi: 1, tertiaryTe: 1 },
          enneagram: { "8": 3, "4": 1 },
          moral: { neutralEvil: 1 }
        }
      },
      {
        text: "Rasa kasihan yang tidak diinginkan. Aku membencinya, tapi aku tetap manusia, dan melihat penderitaan sebesar itu terasa tidak perlu.",
        scores: {
          functions: { Fe: 3, Fi: 1 },
          positions: { dominantFe: 2, auxiliaryFe: 1 },
          enneagram: { "2": 2, "9": 2 },
          moral: { neutralGood: 1 }
        }
      },
      {
        text: "Ketidakpedulian mutlak. Hidupnya bukan lagi bagian dari urusanku. Kesialannya adalah urusan pribadinya sendiri.",
        scores: {
          functions: { Ti: 3, Si: 1 },
          positions: { dominantTi: 2, dominantSi: 1 },
          enneagram: { "5": 2, "9": 1 },
          moral: { trueNeutral: 2 }
        }
      },
      {
        text: "Rasa bersalah karena merasa puas. Aku benci diriku sendiri karena membiarkan diriku memiliki sisi gelap yang bisa menikmati penderitaan orang lain.",
        scores: {
          functions: { Fi: 3, Si: 1 },
          positions: { dominantFi: 3, auxiliaryFi: 1 },
          enneagram: { "1": 3, "4": 1 },
          moral: { lawfulGood: 1 }
        }
      },
      {
        text: "Analisis kausalitas. Apa saja langkah salah yang dia ambil hingga sampai di titik ini? Aku mempelajarinya sebagai studi kasus agar aku tidak melakukan hal yang sama.",
        scores: {
          functions: { Ni: 2, Ti: 2 },
          positions: { dominantNi: 1, auxiliaryTi: 1 },
          enneagram: { "5": 2, "1": 1 },
          bigFive: { conscientiousness: 1 }
        }
      }
    ]
  },
  {
    id: "q062",
    text: "Ada tugas yang harus selesai dalam satu malam, namun kau sudah berada di batas kemampuan fisikmu. Apa yang kau lakukan?",
    options: [
      {
        text: "Aku memaksanya sampai selesai. Aku benci ketidakteraturan, dan aku lebih baik menderita semalam daripada merasa cemas besok karena tugas itu belum beres.",
        scores: {
          functions: { Te: 3, Si: 2 },
          positions: { dominantTe: 3, dominantSi: 2 },
          enneagram: { "1": 3, "3": 2, "8": 1 },
          bigFive: { conscientiousness: 3 }
        }
      },
      {
        text: "Aku mencari cara curang yang efektif. Bagaimana cara menyelesaikan ini dengan usaha paling minim namun hasil yang tetap bisa diterima?",
        scores: {
          functions: { Ti: 3, Ne: 2 },
          positions: { dominantTi: 2, dominantNe: 1 },
          enneagram: { "7": 2, "3": 2 },
          moral: { chaoticNeutral: 1 }
        }
      },
      {
        text: "Aku menyerah. Jika tubuhku sudah menolak, maka segalanya tidak ada gunanya. Aku akan tidur dan menghadapi konsekuensinya besok pagi.",
        scores: {
          functions: { Se: 2, Fi: 1 },
          positions: { inferiorTe: 2, dominantSe: 1 },
          enneagram: { "9": 3, "4": 1 },
          bigFive: { conscientiousness: -1 }
        }
      },
      {
        text: "Aku memohon bantuan. Aku jujur pada orang lain tentang kondisiku, dan berharap ada orang baik yang mau menanggung beban ini bersamaku.",
        scores: {
          functions: { Fe: 3 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "2": 3, "6": 1 },
          bigFive: { agreeableness: 2 }
        }
      },
      {
        text: "Aku membedah tugas tersebut, membuang bagian yang tidak krusial, dan mengerjakan bagian utamanya saja dengan sisa energi yang ada.",
        scores: {
          functions: { Ni: 2, Ti: 1 },
          positions: { dominantNi: 2, dominantTi: 1 },
          enneagram: { "5": 2, "8": 1 },
          bigFive: { conscientiousness: 1 }
        }
      }
    ]
  },
  {
    id: "q063",
    text: "Apa yang biasanya membuatmu merasa sangat tidak berharga setelah berinteraksi dengan seseorang?",
    options: [
      {
        text: "Saat aku merasa aku telah mengkhianati nilai batinku demi menyenangkan orang itu, dan sekarang aku merasa diriku palsu.",
        scores: {
          functions: { Fi: 3, Ni: 1 },
          positions: { dominantFi: 3, auxiliaryFi: 1 },
          enneagram: { "4": 3, "1": 2 },
          bigFive: { neuroticism: 2 }
        }
      },
      {
        text: "Saat mereka mengabaikan kontribusiku atau tidak menghargai kecerdasanku, membuatku merasa seolah-olah aku tidak terlihat.",
        scores: {
          functions: { Te: 3, Ti: 1 },
          positions: { dominantTe: 2, auxiliaryTe: 1 },
          enneagram: { "3": 3, "8": 1 },
          bigFive: { extraversion: 1 }
        }
      },
      {
        text: "Saat aku tidak mampu mengikuti alur percakapan atau tidak bisa mengimbangi pemikiran mereka yang sangat cepat, membuatku merasa bodoh.",
        scores: {
          functions: { Ti: 3, Si: 1 },
          positions: { dominantTi: 2, inferiorNe: 2 },
          enneagram: { "6": 3, "5": 1 },
          bigFive: { neuroticism: 2 }
        }
      },
      {
        text: "Saat aku merasa orang itu tidak menyukaiku, dan aku menghabiskan waktu memikirkan kesalahan apa yang kuperbuat sehingga mereka berubah dingin.",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 2, auxiliarySi: 1 },
          enneagram: { "2": 3, "9": 2 },
          instincts: { so: 2 }
        }
      },
      {
        text: "Saat percakapan itu terasa membosankan dan aku tidak mendapatkan input baru sama sekali. Aku merasa waktu hidupku telah terbuang percuma.",
        scores: {
          functions: { Ne: 3, Se: 1 },
          positions: { dominantNe: 2, dominantSe: 1 },
          enneagram: { "7": 3, "5": 1 },
          bigFive: { openness: 2 }
        }
      }
    ]
  },
  {
    id: "q064",
    text: "Ada seseorang yang terus-menerus mengkritikmu dengan nada merendahkan. Apa cara balasan yang paling mungkin muncul darimu?",
    options: [
      {
        text: "Aku tidak membalas. Aku akan menunjukkan melalui tindakan nyata dan pencapaian yang jauh lebih besar bahwa kritikannya hanyalah suara sampah.",
        scores: {
          functions: { Te: 3, Ni: 1 },
          positions: { dominantTe: 2, dominantNi: 1 },
          enneagram: { "3": 3, "8": 1 },
          bigFive: { conscientiousness: 2 }
        }
      },
      {
        text: "Aku akan mempermalukannya kembali dengan logika yang lebih tajam di depan orang lain. Aku akan membedah setiap cacat argumennya sampai dia tidak punya ruang untuk bicara.",
        scores: {
          functions: { Ti: 3, Te: 2 },
          positions: { dominantTi: 2, dominantTe: 1 },
          enneagram: { "8": 3, "5": 1 },
          bigFive: { agreeableness: -2 }
        }
      },
      {
        text: "Aku merasa terluka parah. Aku mungkin menarik diri atau menangis sendirian, tidak mampu menghadapi keberanian untuk melawannya di depan orang.",
        scores: {
          functions: { Fi: 3, Si: 1 },
          positions: { dominantFi: 3, inferiorTe: 2 },
          enneagram: { "4": 3, "9": 2 },
          bigFive: { neuroticism: 3 }
        }
      },
      {
        text: "Aku mencari dukungan sosial. Aku menceritakan apa yang terjadi pada orang lain agar mereka juga sadar bahwa dia orang yang kasar, membuat posisinya terisolasi secara sosial.",
        scores: {
          functions: { Fe: 3, Ni: 1 },
          positions: { dominantFe: 2, auxiliaryNi: 1 },
          enneagram: { "6": 3, "2": 2 },
          instincts: { so: 3 }
        }
      },
      {
        text: "Aku menanggapinya dengan sarkasme atau humor. Aku tidak memberinya kepuasan melihatku marah, jadi aku menertawakannya, menjadikannya lelucon yang tidak berbobot.",
        scores: {
          functions: { Ne: 3, Ti: 1 },
          positions: { dominantNe: 2, auxiliaryTi: 1 },
          enneagram: { "7": 2, "3": 1 },
          bigFive: { extraversion: 1 }
        }
      }
    ]
  },
  {
    id: "q065",
    text: "Ketika kau sadar bahwa masa depan yang kau rencanakan bertahun-tahun ternyata tidak mungkin tercapai, apa yang terjadi dalam jiwamu?",
    options: [
      {
        text: "Ketakutan yang luar biasa. Seluruh struktur hidupku yang aman kini berantakan. Aku tidak tahu bagaimana caranya hidup tanpa rencana besar itu.",
        scores: {
          functions: { Si: 3, Te: 1 },
          positions: { dominantSi: 3, inferiorNe: 2 },
          enneagram: { "6": 3, "1": 1 },
          bigFive: { neuroticism: 2 }
        }
      },
      {
        text: "Dunia terasa kosong. Seluruh perjuanganku selama ini terasa sia-sia. Aku berduka atas versi masa depanku yang tidak akan pernah ada.",
        scores: {
          functions: { Fi: 3, Ni: 2 },
          positions: { dominantFi: 2, dominantNi: 2 },
          enneagram: { "4": 3, "9": 1 },
          bigFive: { neuroticism: 2 }
        }
      },
      {
        text: "Aku tidak membuang waktu. Aku membuang rencana lama, menganalisis kesalahan logisnya, dan langsung merancang rencana baru yang lebih realistis dan efektif.",
        scores: {
          functions: { Te: 3, Ni: 1 },
          positions: { dominantTe: 3, auxiliaryTe: 2 },
          enneagram: { "3": 3, "8": 2, "5": 1 },
          bigFive: { conscientiousness: 2 }
        }
      },
      {
        text: "Aku merasa anehnya bebas. Rencana itu selalu terasa mengekang. Sekarang aku bisa mencoba sesuatu yang sama sekali berbeda dan lebih tidak terduga.",
        scores: {
          functions: { Ne: 3, Se: 1 },
          positions: { dominantNe: 3, dominantSe: 1 },
          enneagram: { "7": 3, "8": 1 },
          bigFive: { openness: 2 }
        }
      },
      {
        text: "Aku mencari makna di baliknya. Mungkin kegagalan ini adalah petunjuk bahwa aku harus menempuh jalan yang lebih spiritual atau lebih bermakna secara batin.",
        scores: {
          functions: { Ni: 3, Fi: 2 },
          positions: { dominantNi: 2, tertiaryFi: 1 },
          enneagram: { "5": 2, "4": 1 },
          instincts: { sp: 1 }
        }
      }
    ]
  },
  {
    id: "q066",
    text: "Ada seorang kenalan yang terus-menerus menceritakan pencapaiannya dengan nada merendahkanmu. Bagaimana perasaanmu sesungguhnya?",
    options: [
      {
        text: "Aku merasa kecil. Apakah aku memang tidak melakukan cukup banyak hal dengan hidupku? Aku membandingkan pencapaiannya dengan hidupku yang tampak membosankan.",
        scores: {
          functions: { Si: 3, Fi: 1 },
          positions: { inferiorNe: 2, auxiliaryFi: 1 },
          enneagram: { "6": 2, "4": 2 },
          bigFive: { neuroticism: 2 }
        }
      },
      {
        text: "Aku merasa muak dengan kesombongannya. Aku benci orang yang merasa butuh validasi dari penderitaan orang lain. Aku ingin sekali mempermalukannya dengan fakta.",
        scores: {
          functions: { Te: 3, Ti: 1 },
          positions: { dominantTe: 2, dominantTi: 1 },
          enneagram: { "8": 3, "3": 2 },
          bigFive: { agreeableness: -2 }
        }
      },
      {
        text: "Aku kasihan padanya. Mengapa dia begitu haus pengakuan? Apakah hidupnya begitu hampa sampai dia harus memamerkan hal-hal itu padaku?",
        scores: {
          functions: { Ni: 2, Fe: 2 },
          positions: { dominantNi: 1, dominantFe: 1 },
          enneagram: { "5": 2, "2": 1 },
          bigFive: { openness: 1 }
        }
      },
      {
        text: "Aku memuji-mujinya. Jika dia butuh merasa lebih baik dari orang lain untuk bertahan hidup, biarkan saja. Aku tidak merasa perlu berkompetisi dengannya.",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "9": 3, "2": 1 },
          bigFive: { agreeableness: 2 }
        }
      },
      {
        text: "Aku menjadikan setiap omongannya bahan tertawaan. Aku bisa melihat betapa konyol dan desperate-nya dia. Itu hiburan yang lumayan bagiku.",
        scores: {
          functions: { Ne: 2, Ti: 2 },
          positions: { dominantNe: 1, dominantTi: 1 },
          enneagram: { "7": 2, "3": 1 },
          bigFive: { extraversion: 1 }
        }
      }
    ]
  },
  {
    id: "q067",
    text: "Ketika kau harus memilih antara kejujuran yang menyakitkan atau kebohongan yang membahagiakan, apa yang membuatmu condong pada satu pilihan?",
    options: [
      {
        text: "Kejujuran. Membangun sesuatu di atas kebohongan adalah penghinaan bagi kecerdasanku sendiri. Aku tidak bisa menghormati orang yang lebih suka dipeluk oleh kepalsuan.",
        scores: {
          functions: { Ti: 3, Te: 2 },
          positions: { dominantTi: 2, dominantTe: 1 },
          enneagram: { "5": 3, "8": 1, "1": 1 },
          moral: { lawfulNeutral: 2 }
        }
      },
      {
        text: "Kebahagiaan. Jika kebenaran itu tidak membawa perubahan nyata selain luka, mengapa harus diucapkan? Melindungi perasaan orang lain adalah bentuk kebaikan tertinggi.",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 2, auxiliaryFe: 2 },
          enneagram: { "2": 3, "9": 3 },
          moral: { neutralGood: 2 }
        }
      },
      {
        text: "Integritas batinku. Jika aku tidak bisa jujur, aku merasa diriku tercemar. Meski menyakitkan, aku harus mengatakannya agar aku tetap bisa hidup dengan diriku sendiri.",
        scores: {
          functions: { Fi: 3 },
          positions: { dominantFi: 3, auxiliaryFi: 2 },
          enneagram: { "4": 3, "1": 2 },
          moral: { chaoticGood: 1, lawfulGood: 1 }
        }
      },
      {
        text: "Pragmatisme. Apakah kejujuran ini akan membantu atau merusak? Aku memilih mana yang memberikan hasil paling menguntungkan bagi tujuan jangka panjangku.",
        scores: {
          functions: { Te: 3, Ni: 1 },
          positions: { dominantTe: 2, dominantNi: 1 },
          enneagram: { "3": 3, "8": 1 },
          moral: { trueNeutral: 1, lawfulEvil: 1 }
        }
      },
      {
        text: "Aku mencari jalan tengah. Bagaimana mengatakannya dengan cara yang tidak menghancurkan, namun tetap menyinggung kebenaran? Aku tidak suka pilihan yang kaku.",
        scores: {
          functions: { Ne: 2, Fe: 2 },
          positions: { dominantNe: 1, tertiaryFe: 1 },
          enneagram: { "6": 2, "7": 1 },
          moral: { trueNeutral: 1 }
        }
      }
    ]
  },
  {
    id: "q068",
    text: "Jika seseorang memintamu untuk berkorban besar demi kebaikan kelompok, tetapi kau sendiri merasa tidak yakin dengan kelompok tersebut, bagaimana kau bersikap?",
    options: [
      {
        text: "Aku menolak. Aku tidak akan mengorbankan apa pun bagi kelompok yang tidak memiliki nilai yang sama dengan batinku. Integritasku bukan untuk dijual.",
        scores: {
          functions: { Fi: 3, Ni: 1 },
          positions: { dominantFi: 3, auxiliaryFi: 1 },
          enneagram: { "4": 2, "8": 2, "1": 1 },
          moral: { chaoticGood: 1 }
        }
      },
      {
        text: "Aku melakukannya, tapi dengan perasaan getir yang dalam. Aku merasa aku hanya pion yang dikorbankan untuk tujuan orang lain yang sebenarnya tidak kupedulikan.",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 2, inferiorTe: 2 },
          enneagram: { "9": 3, "6": 2 },
          bigFive: { agreeableness: 1 }
        }
      },
      {
        text: "Aku menganalisis keuntungan dan kerugiannya. Jika pengorbanan ini memberiku pengaruh atau perlindungan di masa depan, aku akan melakukannya. Investasi tetaplah investasi.",
        scores: {
          functions: { Te: 3, Ni: 2 },
          positions: { dominantTe: 2, dominantNi: 1 },
          enneagram: { "3": 3, "8": 1 },
          moral: { lawfulEvil: 1, trueNeutral: 1 }
        }
      },
      {
        text: "Aku bertanya-tanya mengapa aku masih di kelompok ini. Aku mencoba merayu atau mengubah kelompok tersebut agar mereka bisa sejalan denganku, sebelum aku membuat komitmen.",
        scores: {
          functions: { Ne: 3, Fe: 1 },
          positions: { dominantNe: 2, auxiliaryFe: 1 },
          enneagram: { "7": 2, "3": 1 },
          bigFive: { extraversion: 1 }
        }
      },
      {
        text: "Aku mengabaikan ketidakyakinanku dan melakukannya demi reputasi. Terlihat sebagai orang yang berkorban adalah citra yang bagus untuk jangka panjang.",
        scores: {
          functions: { Fe: 2, Te: 2 },
          positions: { dominantFe: 1, dominantTe: 1 },
          enneagram: { "3": 3, "6": 1 },
          bigFive: { conscientiousness: 2 }
        }
      }
    ]
  },
  {
    id: "q069",
    text: "Apa yang membuatmu merasa sangat marah ketika orang lain mencoba menasihatimu tentang cara hidup yang seharusnya?",
    options: [
      {
        text: "Bahwa mereka merasa berhak mendikte hidupku dengan standar mereka yang sangat dangkal. Mereka tidak tahu apa pun tentang kompleksitas duniaku.",
        scores: {
          functions: { Fi: 3, Ni: 1 },
          positions: { dominantFi: 2, dominantNi: 1 },
          enneagram: { "4": 2, "8": 2, "5": 1 },
          bigFive: { agreeableness: -1 }
        }
      },
      {
        text: "Bahwa nasihat mereka selalu berbasis ketakutan dan keinginan untuk aman. Aku benci saat orang lain mencoba menarikku kembali ke zona aman yang membosankan.",
        scores: {
          functions: { Ne: 3, Se: 2 },
          positions: { dominantNe: 2, dominantSe: 1 },
          enneagram: { "7": 3, "8": 1 },
          bigFive: { openness: 2 }
        }
      },
      {
        text: "Bahwa mereka berasumsi aku tidak tahu apa yang kulakukan. Aku sudah mempertimbangkan setiap konsekuensi logis; nasihat mereka hanyalah kebisingan yang tidak efisien.",
        scores: {
          functions: { Ti: 3, Te: 2 },
          positions: { dominantTi: 3, dominantTe: 1 },
          enneagram: { "5": 3, "1": 1 },
          bigFive: { conscientiousness: 1 }
        }
      },
      {
        text: "Bahwa nasihat itu terasa sangat menggurui. Aku menghargai mereka, tetapi rasa tidak diakui sebagai orang dewasa yang mampu mengambil keputusan sendiri itulah yang menyakitkan.",
        scores: {
          functions: { Fe: 2, Fi: 2 },
          positions: { dominantFe: 1, dominantFi: 1 },
          enneagram: { "2": 2, "1": 1, "6": 1 },
          bigFive: { neuroticism: 1 }
        }
      },
      {
        text: "Aku tidak marah. Aku mengangguk, tersenyum, dan setelah mereka pergi, aku membuang semua omongan mereka. Menunjukkan kemarahan hanya akan membuang energi.",
        scores: {
          functions: { Si: 3, Te: 1 },
          positions: { dominantSi: 2, auxiliaryTe: 1 },
          enneagram: { "9": 3, "6": 1 },
          bigFive: { agreeableness: 1 }
        }
      }
    ]
  },
  {
    id: "q070",
    text: "Ketika kau berada di tengah percakapan, apa yang paling sering membuatmu kehilangan minat atau keinginan untuk bicara lebih jauh?",
    options: [
      {
        text: "Saat lawan bicaraku hanya mengulang fakta-fakta basi yang sudah kuketahui dengan sangat baik tanpa ada wawasan baru.",
        scores: {
          functions: { Ne: 3, Ni: 1 },
          positions: { dominantNe: 2, dominantNi: 1 },
          enneagram: { "5": 2, "7": 2 },
          bigFive: { openness: 2 }
        }
      },
      {
        text: "Saat percakapan berubah menjadi sangat tidak logis atau penuh asumsi salah yang tidak berdasar, membuatku lelah untuk meluruskan semuanya.",
        scores: {
          functions: { Ti: 3, Te: 2 },
          positions: { dominantTi: 3, dominantTe: 1 },
          enneagram: { "5": 3, "1": 1 },
          bigFive: { conscientiousness: 1 }
        }
      },
      {
        text: "Saat percakapan menjadi terlalu emosional atau mulai menyinggung hal yang menyakitkan bagi orang lain di ruangan itu, membuat suasananya menjadi tidak harmonis.",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "9": 3, "2": 1 },
          bigFive: { agreeableness: 2 }
        }
      },
      {
        text: "Saat aku merasa orang itu tidak benar-benar mendengarkan diriku, melainkan hanya menunggu gilirannya untuk memamerkan diri.",
        scores: {
          functions: { Fi: 3, Ni: 1 },
          positions: { dominantFi: 2, tertiaryNi: 1 },
          enneagram: { "4": 2, "2": 1 },
          bigFive: { neuroticism: 1 }
        }
      },
      {
        text: "Saat percakapannya terlalu teoretis dan tidak ada hubungannya dengan kenyataan fisik atau hal yang bisa dilakukan sekarang.",
        scores: {
          functions: { Se: 3, Te: 1 },
          positions: { dominantSe: 2, dominantTe: 1 },
          enneagram: { "8": 2, "3": 1 },
          bigFive: { extraversion: 1 }
        }
      }
    ]
  },
  {
    id: "q071",
    text: "Saat kau melakukan perjalanan jauh sendirian dan tiba-tiba tersesat di tempat yang asing, apa reaksi pertama yang muncul dalam batinmu?",
    options: [
      {
        text: "Aku merasa terangsang secara mental. Ini kesempatan untuk melihat tempat-tempat yang tidak ada di peta. Aku justru menikmati ketidakpastian ini.",
        scores: {
          functions: { Ne: 3, Se: 1 },
          positions: { dominantNe: 3, dominantSe: 1 },
          enneagram: { "7": 3, "5": 1 },
          bigFive: { openness: 3 }
        }
      },
      {
        text: "Aku segera mengamati lingkungan, mencari tanda-tanda yang kukenal, lalu menyusun rute logis untuk kembali ke jalur yang benar seefisien mungkin.",
        scores: {
          functions: { Te: 3, Si: 1 },
          positions: { dominantTe: 2, dominantSi: 1 },
          enneagram: { "8": 1, "3": 1, "6": 1 },
          bigFive: { conscientiousness: 2 }
        }
      },
      {
        text: "Aku panik sejenak. Berada di tempat asing tanpa rencana membuatku merasa sangat tidak aman. Aku akan mencari orang lokal dan meminta petunjuk arah dengan sangat sopan.",
        scores: {
          functions: { Fe: 2, Si: 2 },
          positions: { dominantSi: 2, inferiorNe: 2 },
          enneagram: { "6": 3, "2": 1 },
          bigFive: { neuroticism: 2 }
        }
      },
      {
        text: "Aku merasa terasing dan sendirian. Ada rasa melankolis yang muncul saat aku menyadari bahwa aku begitu kecil di dunia yang luas dan tidak peduli pada keberadaanku ini.",
        scores: {
          functions: { Fi: 3, Ni: 1 },
          positions: { dominantFi: 3, tertiaryNi: 1 },
          enneagram: { "4": 3, "9": 1 },
          bigFive: { neuroticism: 2 }
        }
      },
      {
        text: "Aku berhenti total. Aku akan duduk sebentar, membiarkan diriku berada di sana, melihat arsitektur atau wajah orang-orang, mencoba memahami 'jiwa' tempat ini sebelum lanjut pergi.",
        scores: {
          functions: { Ni: 2, Se: 2 },
          positions: { dominantNi: 1, dominantSe: 1 },
          enneagram: { "5": 2, "9": 1 },
          bigFive: { openness: 1 }
        }
      }
    ]
  },
  {
    id: "q072",
    text: "Seseorang yang kau kagumi karena kecerdasannya tiba-tiba melakukan tindakan bodoh yang tidak masuk akal. Apa yang kau rasakan?",
    options: [
      {
        text: "Kekecewaan besar. Aku merasa dikhianati oleh standar yang kubangun sendiri untuknya. Aku akan berusaha menjelaskan kepadanya mengapa tindakannya sangat bodoh.",
        scores: {
          functions: { Te: 3, Ti: 2 },
          positions: { dominantTe: 2, dominantTi: 1 },
          enneagram: { "1": 3, "8": 1 },
          bigFive: { agreeableness: -1 }
        }
      },
      {
        text: "Aku merasa manusiawi. Ternyata dia punya sisi rentan. Rasa kagumku berubah menjadi simpati, dan aku merasa lebih dekat dengannya karena dia tidak lagi terlihat sempurna.",
        scores: {
          functions: { Fe: 3, Fi: 1 },
          positions: { dominantFe: 2, auxiliaryFe: 1 },
          enneagram: { "2": 2, "9": 2 },
          bigFive: { agreeableness: 2 }
        }
      },
      {
        text: "Keingintahuan yang tajam. Apa motif tersembunyi di balik tindakan bodoh itu? Dia pasti punya alasan yang sangat rumit atau tujuan yang tidak aku tangkap.",
        scores: {
          functions: { Ni: 3, Ne: 1 },
          positions: { dominantNi: 3, auxiliaryNi: 1 },
          enneagram: { "5": 3, "7": 1 },
          bigFive: { openness: 2 }
        }
      },
      {
        text: "Ketidaknyamanan. Aku tidak suka melihat orang cerdas melakukan hal bodoh; itu merusak gambaran stabil yang kubangun tentang orang-orang yang bisa kuandalkan.",
        scores: {
          functions: { Si: 3, Te: 1 },
          positions: { dominantSi: 2, inferiorNe: 2 },
          enneagram: { "6": 2, "1": 2 },
          bigFive: { neuroticism: 1 }
        }
      },
      {
        text: "Aku menertawakannya. Tidak ada orang yang benar-benar cerdas setiap saat. Dia hanya manusia biasa yang sedang sial atau salah langkah.",
        scores: {
          functions: { Se: 2, Ne: 2 },
          positions: { dominantSe: 1, dominantNe: 1 },
          enneagram: { "7": 2, "3": 1 },
          bigFive: { neuroticism: -1 }
        }
      }
    ]
  },
  {
    id: "q073",
    text: "Saat kau dihadapkan pada tradisi keluarga yang menurutmu tidak berguna dan membuang waktu, apa yang kau lakukan?",
    options: [
      {
        text: "Aku melakukannya dengan patuh. Menghargai harmoni keluarga jauh lebih penting daripada keinginanku untuk efisien. Aku akan memendam ketidaksukaanku demi kedamaian.",
        scores: {
          functions: { Fe: 3, Si: 2 },
          positions: { dominantFe: 2, dominantSi: 2 },
          enneagram: { "9": 3, "2": 2 },
          instincts: { so: 2 },
          bigFive: { agreeableness: 2 }
        }
      },
      {
        text: "Aku menolak secara halus atau membuat alasan untuk tidak hadir. Aku tidak mau menghabiskan hidupku untuk hal-hal yang tidak memiliki makna nyata bagiku.",
        scores: {
          functions: { Fi: 3, Ni: 1 },
          positions: { dominantFi: 3, dominantNi: 1 },
          enneagram: { "4": 2, "8": 1, "5": 1 },
          bigFive: { agreeableness: -1 }
        }
      },
      {
        text: "Aku memprotesnya secara logis kepada keluarga. 'Mengapa kita harus melakukan ini jika tidak ada fungsinya?' Aku berharap bisa mengubah cara pandang mereka.",
        scores: {
          functions: { Ti: 3, Te: 1 },
          positions: { dominantTi: 2, dominantTe: 1 },
          enneagram: { "1": 3, "5": 1 },
          bigFive: { agreeableness: -1 }
        }
      },
      {
        text: "Aku melakukan perubahannya sendiri. Aku tetap ikut tradisinya, tapi dengan cara yang jauh lebih praktis dan efisien agar waktu kami tidak terbuang percuma.",
        scores: {
          functions: { Te: 3, Ne: 1 },
          positions: { dominantTe: 3, dominantNe: 1 },
          enneagram: { "3": 2, "8": 1 },
          bigFive: { conscientiousness: 2 }
        }
      },
      {
        text: "Aku menjadikannya kesempatan untuk melakukan hal lain yang lebih seru. Aku akan berbaur, bercanda dengan kerabat yang menarik, dan mengabaikan bagian ritual yang tidak penting.",
        scores: {
          functions: { Ne: 3, Se: 1 },
          positions: { dominantNe: 3, dominantSe: 1 },
          enneagram: { "7": 3, "2": 1 },
          bigFive: { openness: 2 }
        }
      }
    ]
  },
  {
    id: "q074",
    text: "Ketika seseorang memujimu secara berlebihan untuk hal yang menurutmu biasa saja, apa yang kau rasakan di balik senyummu?",
    options: [
      {
        text: "Ketidaknyamanan. Aku merasa dia sedang merendahkanku dengan pujian dangkal atau dia memiliki niat tersembunyi yang tidak kutangkap.",
        scores: {
          functions: { Ni: 3, Ti: 1 },
          positions: { dominantNi: 2, tertiaryTi: 1 },
          enneagram: { "5": 2, "6": 2 },
          bigFive: { agreeableness: -1 }
        }
      },
      {
        text: "Rasa haus yang terpuaskan. Akhirnya, seseorang menyadari bahwa aku memang luar biasa. Aku menerima pujian itu dengan senang hati sebagai hakku.",
        scores: {
          functions: { Te: 2, Se: 1 },
          positions: { dominantTe: 1, dominantSe: 1 },
          enneagram: { "3": 3, "8": 1 },
          bigFive: { extraversion: 2 }
        }
      },
      {
        text: "Rasa malu yang dalam. Aku merasa pujian itu terlalu besar untuk diriku yang sebenarnya tahu persis bahwa aku masih banyak kekurangan dan tidak sebaik yang dia katakan.",
        scores: {
          functions: { Fi: 3, Si: 1 },
          positions: { dominantFi: 2, inferiorTe: 2 },
          enneagram: { "4": 2, "9": 2 },
          bigFive: { neuroticism: 2 }
        }
      },
      {
        text: "Rasa senang karena dia bahagia. Aku merasa telah memenuhi peranku untuk membuatnya merasa nyaman, dan pujiannya adalah indikasi keberhasilanku.",
        scores: {
          functions: { Fe: 3 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "2": 3, "9": 1 },
          instincts: { so: 2 }
        }
      },
      {
        text: "Aku menganggapnya lucu. Mungkin dia melihat sisi diriku yang sudah lupa kupoles, atau dia memang hanya orang yang mudah terkesan oleh hal-hal kecil.",
        scores: {
          functions: { Ne: 2, Ti: 1 },
          positions: { dominantNe: 2, auxiliaryTi: 1 },
          enneagram: { "7": 2, "3": 1 },
          bigFive: { openness: 1 }
        }
      }
    ]
  },
  {
    id: "q075",
    text: "Ada tugas sosial yang harus diselesaikan, namun pemimpin kelompokmu sangat tidak becus. Apa hal yang paling mungkin kau lakukan?",
    options: [
      {
        text: "Aku mengambil alih. Ketidakefisienan adalah dosa terbesar dalam pekerjaan. Aku akan mengarahkan semua orang meski dia masih ada di posisi itu.",
        scores: {
          functions: { Te: 3, Ni: 1 },
          positions: { dominantTe: 3, dominantNi: 1 },
          enneagram: { "8": 3, "1": 2, "3": 1 },
          bigFive: { agreeableness: -3 },
          moral: { lawfulNeutral: 1 }
        }
      },
      {
        text: "Aku menyusun alur kerja yang sangat rapi untuk semua orang, termasuk untuk si pemimpin, agar dia hanya perlu menjalankan instruksiku tanpa perlu membuat keputusan.",
        scores: {
          functions: { Ti: 3, Si: 1 },
          positions: { dominantTi: 3, dominantSi: 1 },
          enneagram: { "5": 2, "6": 2 },
          bigFive: { conscientiousness: 2 }
        }
      },
      {
        text: "Aku mencari cara untuk membuat suasana kelompok tetap ceria dan kooperatif. Jika hubungan antar anggota baik, pekerjaan akan selesai dengan sendirinya.",
        scores: {
          functions: { Fe: 3, Ne: 1 },
          positions: { dominantFe: 2, auxiliaryFe: 2 },
          enneagram: { "2": 2, "9": 2 },
          instincts: { so: 2 }
        }
      },
      {
        text: "Aku menarik diri dan membiarkannya gagal. Jika dia yang bertanggung jawab, biarkan dia yang menanggung akibat dari ketidakbecusannya sendiri.",
        scores: {
          functions: { Fi: 2, Si: 1 },
          positions: { dominantFi: 2, inferiorTe: 1 },
          enneagram: { "4": 2, "9": 2 },
          bigFive: { extraversion: -1 }
        }
      },
      {
        text: "Aku terus memberi saran-saran kreatif dan ide baru yang membuat pekerjaannya lebih mudah, mencoba menyelamatkannya secara halus agar proyek tidak hancur.",
        scores: {
          functions: { Ne: 3, Fe: 1 },
          positions: { dominantNe: 3, dominantFe: 1 },
          enneagram: { "7": 2, "3": 1 },
          bigFive: { openness: 2 }
        }
      }
    ]
  },
  {
    id: "q076",
    text: "Ketika seseorang memaksamu untuk mengemukakan pendapat tentang hal yang kau sama sekali tidak tertarik, apa respons alamimu?",
    options: [
      {
        text: "Aku akan jujur mengatakan aku tidak tertarik. Membuang waktu membahas hal yang tidak relevan dengan duniaku adalah hal yang tidak efisien.",
        scores: {
          functions: { Ti: 2, Te: 2 },
          positions: { dominantTi: 1, dominantTe: 1 },
          enneagram: { "5": 3, "8": 2 },
          bigFive: { agreeableness: -2 }
        }
      },
      {
        text: "Aku mengada-ada pendapat agar suasana tetap berjalan. Aku bisa membuat apa pun terdengar menarik jika aku mau, meski aku sendiri tidak peduli.",
        scores: {
          functions: { Ne: 3, Fe: 1 },
          positions: { dominantNe: 2, dominantFe: 1 },
          enneagram: { "7": 3, "3": 2 },
          bigFive: { extraversion: 2 }
        }
      },
      {
        text: "Aku mendengarkan pendapat mereka, memberikan respon yang sopan untuk membuat mereka merasa didengarkan, lalu mengalihkan pembicaraan.",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "9": 3, "2": 2 },
          bigFive: { agreeableness: 2 }
        }
      },
      {
        text: "Aku merasa terganggu. Mengapa aku harus punya pendapat tentang segalanya? Aku akan menjawab dengan jawaban singkat yang membuat mereka berhenti bertanya.",
        scores: {
          functions: { Fi: 2, Ni: 1 },
          positions: { dominantFi: 2, dominantNi: 1 },
          enneagram: { "4": 2, "5": 1 },
          bigFive: { introversion: 1 }
        }
      },
      {
        text: "Aku bertanya balik tentang pendapat mereka. Membiarkan mereka bicara panjang lebar adalah cara paling mudah untuk menghindari keharusan berpendapat.",
        scores: {
          functions: { Ni: 2, Fe: 1 },
          positions: { dominantNi: 1, dominantFe: 1 },
          enneagram: { "9": 2, "5": 1 }
        }
      }
    ]
  },
  {
    id: "q077",
    text: "Jika hidupmu adalah sebuah buku, judul apa yang paling tepat menggambarkan bab terpenting yang sedang kau jalani sekarang?",
    options: [
      {
        text: "“Pencarian Arah di Tengah Kabut.” Aku masih mencari esensi diriku yang sebenarnya di antara tuntutan dunia yang tidak henti-hentinya.",
        scores: {
          functions: { Ni: 3, Fi: 2 },
          positions: { dominantNi: 2, auxiliaryNi: 2 },
          enneagram: { "4": 3, "6": 2 },
          bigFive: { neuroticism: 1 }
        }
      },
      {
        text: "“Membangun Fondasi yang Tak Tergoyahkan.” Setiap hari adalah tentang bekerja, disiplin, dan memastikan masa depanku terkunci aman.",
        scores: {
          functions: { Si: 3, Te: 2 },
          positions: { dominantSi: 3, dominantTe: 2 },
          enneagram: { "1": 3, "3": 2 },
          bigFive: { conscientiousness: 3 }
        }
      },
      {
        text: "“Eksperimen Tanpa Batas.” Aku sedang menguji dunia dengan berbagai peran, ide, dan tempat baru, tidak ingin melewatkan satu pun kemungkinan.",
        scores: {
          functions: { Ne: 3, Se: 1 },
          positions: { dominantNe: 3, dominantSe: 1 },
          enneagram: { "7": 3, "3": 1 },
          bigFive: { openness: 3 }
        }
      },
      {
        text: "“Menjadi Benteng bagi Orang Lain.” Hidupku berputar di sekitar tanggung jawab, perlindungan, dan menjadi sandaran bagi mereka yang kucintai.",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "2": 3, "9": 2 },
          instincts: { so: 2 }
        }
      },
      {
        text: "“Strategi di Balik Layar.” Aku mengamati, mempelajari pola, dan menyiapkan langkah besar tanpa perlu menarik perhatian siapa pun saat ini.",
        scores: {
          functions: { Ti: 3, Ni: 2 },
          positions: { dominantTi: 3, dominantNi: 2 },
          enneagram: { "5": 3, "8": 1 },
          bigFive: { introversion: 2 }
        }
      }
    ]
  },
  {
    id: "q078",
    text: "Seseorang mengatakan hal yang sangat tidak masuk akal, dan semua orang di ruangan itu mengangguk setuju karena takut atau demi suasana. Apa yang kau lakukan?",
    options: [
      {
        text: "Aku tidak tahan. Aku akan mengoreksinya dengan sopan namun tegas. Membiarkan kebodohan merajalela adalah bentuk pengkhianatan terhadap kebenaran.",
        scores: {
          functions: { Ti: 3, Te: 2 },
          positions: { dominantTi: 3, dominantTe: 2 },
          enneagram: { "1": 3, "8": 2, "5": 1 },
          bigFive: { agreeableness: -3 },
          moral: { lawfulNeutral: 1 }
        }
      },
      {
        text: "Aku tetap diam. Aku tidak mau menjadi pahlawan yang tidak dibutuhkan. Mengorbankan keharmonisan untuk sesuatu yang tidak akan mengubah dunia adalah sia-sia.",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "9": 3, "6": 1 },
          bigFive: { agreeableness: 2 }
        }
      },
      {
        text: "Aku menyisipkan keraguan dengan cara bertanya. 'Benarkah demikian? Bagaimana jika kita melihatnya dari sisi ini?' Aku memancing mereka sendiri yang menemukan kesalahannya.",
        scores: {
          functions: { Ne: 3, Ni: 1 },
          positions: { dominantNe: 2, dominantNi: 1 },
          enneagram: { "7": 2, "3": 1 },
          bigFive: { openness: 1 }
        }
      },
      {
        text: "Aku pergi dari ruangan itu. Jika aku tidak bisa bicara jujur dan aku benci kebohongan kolektif, maka lebih baik aku tidak ada di sana untuk menyaksikannya.",
        scores: {
          functions: { Fi: 3 },
          positions: { dominantFi: 3, auxiliaryFi: 1 },
          enneagram: { "4": 2, "1": 2 },
          bigFive: { introversion: 1 }
        }
      },
      {
        text: "Aku mengikuti arus dengan wajah datar. Aku menyimpan catatan tentang betapa tidak masuk akalnya mereka, dan mungkin nanti aku akan menertawakannya dengan orang lain.",
        scores: {
          functions: { Te: 2, Ni: 1 },
          positions: { dominantTe: 1, tertiaryNi: 1 },
          enneagram: { "5": 2, "3": 1 },
          bigFive: { neuroticism: -1 }
        }
      }
    ]
  },
  {
    id: "q079",
    text: "Ada tugas yang kau benci karena membosankan namun sangat penting untuk keberhasilanmu. Bagaimana cara pikiranmu membujuk tubuhmu untuk menyelesaikannya?",
    options: [
      {
        text: "Aku membedahnya menjadi potongan-potongan kecil yang sangat logis dan terukur. Jika aku bisa menyelesaikannya per 15 menit, maka tugas ini bukan lagi hal besar.",
        scores: {
          functions: { Te: 3, Ti: 2 },
          positions: { dominantTe: 3, dominantTi: 2 },
          enneagram: { "1": 3, "3": 2, "5": 1 },
          bigFive: { conscientiousness: 3 }
        }
      },
      {
        text: "Aku memikirkan betapa aku akan merasa lega dan bangga setelah ini selesai. Aku memproyeksikan diriku di masa depan saat tugas ini sudah tidak ada lagi.",
        scores: {
          functions: { Ni: 3, Fi: 1 },
          positions: { dominantNi: 2, dominantFi: 1 },
          enneagram: { "3": 2, "4": 1 },
          bigFive: { conscientiousness: 2 }
        }
      },
      {
        text: "Aku melakukan dengan cara yang paling menyenangkan: sambil mendengarkan musik, makan, atau dengan gaya yang tidak kaku. Aku harus membuat suasana menyenangkan agar tidak mati bosan.",
        scores: {
          functions: { Se: 3, Ne: 2 },
          positions: { dominantSe: 2, dominantNe: 1 },
          enneagram: { "7": 3, "9": 1 },
          bigFive: { openness: 1 }
        }
      },
      {
        text: "Aku melakukan karena aku tidak mau mengecewakan orang lain yang menunggu hasilnya. Rasa tanggung jawab pada mereka jauh lebih kuat daripada rasa bosanku.",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "2": 2, "6": 2 },
          instincts: { so: 2 }
        }
      },
      {
        text: "Aku tidak membujuk. Aku memaksanya. Kadang hidup adalah tentang melakukan hal yang tidak kita sukai karena kita tidak punya pilihan lain. Itu bagian dari menjadi dewasa.",
        scores: {
          functions: { Te: 3, Si: 1 },
          positions: { dominantTe: 2, dominantSi: 1 },
          enneagram: { "8": 2, "1": 2 },
          bigFive: { conscientiousness: 2 }
        }
      }
    ]
  },
  {
    id: "q080",
    text: "Ketika kau mendengar kabar tentang kematian seseorang yang dulu sangat dekat namun hubungan kalian berakhir buruk, apa gema pertama yang kau rasakan?",
    options: [
      {
        text: "Kematian adalah titik akhir yang definitif. Ada rasa getir karena kami tidak pernah bisa memperbaiki apa yang rusak, dan kini kesempatan itu tertutup selamanya.",
        scores: {
          functions: { Ni: 3, Fi: 2 },
          positions: { dominantNi: 2, dominantFi: 2 },
          enneagram: { "4": 3, "5": 1 },
          bigFive: { neuroticism: 1 },
          temperament: { melancholic: 2 }
        }
      },
      {
        text: "Kelegaan yang dingin. Hubungan itu adalah racun yang menyiksa diriku, dan kematiannya secara tidak sadar mengakhiri ketakutan dan luka yang ia sebabkan selama ini.",
        scores: {
          functions: { Te: 3, Ti: 1 },
          positions: { dominantTe: 2, dominantTi: 1 },
          enneagram: { "8": 2, "3": 1 },
          bigFive: { agreeableness: -1 }
        }
      },
      {
        text: "Rasa bersalah. Mungkin aku bisa melakukan sesuatu lebih baik? Mungkin aku seharusnya sudah memaafkannya lebih dulu? Kesempatan itu kini hilang.",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 2, auxiliaryFe: 1 },
          enneagram: { "2": 2, "9": 3, "6": 1 },
          instincts: { so: 1 },
          bigFive: { neuroticism: 2 }
        }
      },
      {
        text: "Aku tidak merasakan apa-apa. Kematian adalah bagian dari siklus alam. Itu hanya sebuah fakta sejarah yang kini telah ditutup oleh waktu.",
        scores: {
          functions: { Ti: 3, Si: 1 },
          positions: { dominantTi: 3, dominantSi: 1 },
          enneagram: { "5": 3, "8": 1 },
          bigFive: { neuroticism: -1 }
        }
      },
      {
        text: "Kebingungan emosional. Aku memutar kembali semua memori baik dan buruk, mencoba menyatukan gambaran utuh tentang siapa sebenarnya dia bagiku.",
        scores: {
          functions: { Si: 3, Fi: 1 },
          positions: { dominantSi: 2, dominantFi: 1 },
          enneagram: { "6": 2, "4": 1 },
          bigFive: { openness: 1 }
        }
      }
    ]
  },
  {
    id: "q081",
    text: "Ada seseorang yang menawarkan jalan pintas untuk mencapai tujuanmu yang paling ambisius, namun syaratnya adalah melanggar prinsip etika yang selama ini kau junjung. Bagaimana batinmu menimbang ini?",
    options: [
      {
        text: "Aku menolak tegas. Tujuan yang dicapai melalui cara kotor akan terasa busuk di dalamnya. Aku tidak mau menghabiskan hidup dengan bayangan kesalahan itu.",
        scores: {
          functions: { Fi: 3, Si: 1 },
          positions: { dominantFi: 3, auxiliaryFi: 1 },
          enneagram: { "1": 3, "4": 2 },
          moral: { lawfulGood: 2 }
        }
      },
      {
        text: "Aku menganalisis risikonya secara matematis. Jika peluang tertangkap kecil dan manfaatnya sangat besar, bukankah ini pilihan logis? Etika adalah kesepakatan sosial, bukan kebenaran absolut.",
        scores: {
          functions: { Te: 3, Ti: 2 },
          positions: { dominantTe: 3, dominantTi: 2 },
          enneagram: { "3": 3, "5": 2 },
          moral: { neutralEvil: 1, trueNeutral: 1 }
        }
      },
      {
        text: "Aku merasa terganggu. Kenapa hidup harus selalu tentang memilih yang salah? Aku akan mencari jalan ketiga, meski harus lebih lama dan lebih sulit.",
        scores: {
          functions: { Ne: 2, Ni: 2 },
          positions: { dominantNe: 2, dominantNi: 2 },
          enneagram: { "7": 2, "4": 1 },
          moral: { chaoticGood: 1 }
        }
      },
      {
        text: "Aku bertanya pada orang-orang terdekatku tentang hal ini. Jika mereka setuju, aku mungkin akan melakukannya, karena aku tidak sanggup menanggung beban ini sendirian.",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 2, auxiliaryFe: 2 },
          enneagram: { "6": 3, "2": 1 },
          moral: { neutralGood: 1 }
        }
      },
      {
        text: "Aku menerimanya sebagai permainan yang harus dimainkan. Dunia ini tidak suci, jadi mengapa aku harus berpura-pura menjadi suci? Mari ambil kesempatannya.",
        scores: {
          functions: { Se: 3, Te: 1 },
          positions: { dominantSe: 2, dominantTe: 1 },
          enneagram: { "8": 2, "7": 2 },
          moral: { chaoticNeutral: 2 }
        }
      }
    ]
  },
  {
    id: "q082",
    text: "Ketika kau terjebak dalam percakapan dengan orang yang sangat emosional dan mulai menangis, apa bentuk respons yang paling sering kau berikan?",
    options: [
      {
        text: "Aku merasa sangat tidak berdaya. Aku mencoba menenangkannya dengan kata-kata, meski di dalam kepalaku aku berteriak karena tidak tahu harus berbuat apa.",
        scores: {
          functions: { Fe: 2, Ti: 1 },
          positions: { inferiorFe: 2, dominantTi: 1 },
          enneagram: { "5": 2, "9": 2 },
          bigFive: { neuroticism: 1 }
        }
      },
      {
        text: "Aku menjadi pendengar yang aktif. Aku memberikan ruang baginya untuk mengeluarkan semua emosinya, merasa bahwa peranku hanyalah untuk hadir bagi lukanya.",
        scores: {
          functions: { Fe: 3, Fi: 1 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "2": 3, "9": 2 },
          bigFive: { agreeableness: 3 }
        }
      },
      {
        text: "Aku memberinya nasihat praktis. 'Mari kita lihat apa yang bisa kita perbaiki dari keadaan ini.' Menangis tidak akan mengubah masalah, jadi mari fokus pada solusi.",
        scores: {
          functions: { Te: 3, Ti: 1 },
          positions: { dominantTe: 2, dominantTi: 1 },
          enneagram: { "1": 2, "8": 2 },
          bigFive: { agreeableness: -1 }
        }
      },
      {
        text: "Aku merasa sangat canggung. Aku mungkin memberikan tisu atau menepuk pundaknya, lalu berusaha mengalihkan pembicaraan ke hal yang lebih netral agar dia berhenti menangis.",
        scores: {
          functions: { Se: 2, Si: 1 },
          positions: { dominantSe: 1, dominantSi: 1 },
          enneagram: { "7": 2, "9": 2 },
          bigFive: { extraversion: 1 }
        }
      },
      {
        text: "Aku mencoba memahami dunianya. Aku mengajukan pertanyaan mendalam agar dia bisa mengekspresikan apa yang sebenarnya terjadi di balik air mata itu.",
        scores: {
          functions: { Ni: 2, Fi: 1 },
          positions: { dominantNi: 1, tertiaryFi: 1 },
          enneagram: { "4": 2, "5": 1 },
          bigFive: { openness: 1 }
        }
      }
    ]
  },
  {
    id: "q083",
    text: "Jika seseorang memberimu sebuah rahasia besar tentang kesalahan fatal orang lain, namun rahasia itu akan menghancurkan kedamaian kelompok jika diketahui, apa yang kau lakukan?",
    options: [
      {
        text: "Aku membongkarnya segera. Kebenaran harus terungkap. Kedamaian yang dibangun di atas kebohongan adalah kedamaian palsu yang hanya menunda kehancuran.",
        scores: {
          functions: { Ti: 3, Te: 2 },
          positions: { dominantTi: 2, dominantTe: 2 },
          enneagram: { "1": 3, "8": 2 },
          moral: { lawfulGood: 1, chaoticGood: 1 }
        }
      },
      {
        text: "Aku menyimpannya rapat-rapat. Jika pembongkaran itu hanya membawa kehancuran dan rasa sakit bagi banyak orang, maka kebenaran itu tidak bernilai.",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 2, auxiliaryFe: 1 },
          enneagram: { "9": 3, "2": 2 },
          moral: { neutralGood: 2 }
        }
      },
      {
        text: "Aku menggunakannya untuk menekan orang tersebut agar memperbaiki kesalahannya sendiri. Ini bukan tentang menghancurkan kelompok, tapi tentang memastikan dia yang bertanggung jawab.",
        scores: {
          functions: { Ni: 3, Te: 2 },
          positions: { dominantNi: 2, dominantTe: 1 },
          enneagram: { "3": 3, "8": 2 },
          moral: { lawfulEvil: 1, trueNeutral: 1 }
        }
      },
      {
        text: "Aku menjauh dari orang itu dan memutus hubungan. Aku tidak ingin terlibat dalam kebohongan mereka, tapi aku juga tidak ingin menjadi penghancur kedamaian.",
        scores: {
          functions: { Fi: 3 },
          positions: { dominantFi: 3, auxiliaryFi: 1 },
          enneagram: { "4": 2, "9": 1 },
          moral: { trueNeutral: 1 }
        }
      },
      {
        text: "Aku bertanya-tanya, 'Apakah ada cara agar kesalahan ini diperbaiki tanpa harus meledakkan semuanya?' Aku mencari solusi yang paling tidak merusak.",
        scores: {
          functions: { Ne: 3, Fe: 1 },
          positions: { dominantNe: 2, auxiliaryFe: 1 },
          enneagram: { "7": 2, "6": 1 },
          moral: { neutralGood: 1 }
        }
      }
    ]
  },
  {
    id: "q084",
    text: "Apa hal yang paling membuatmu merasa terkekang di dunia ini?",
    options: [
      {
        text: "Aturan-aturan yang tidak masuk akal yang menghambat efisiensi dan kemajuan.",
        scores: {
          functions: { Te: 3, Ti: 1 },
          positions: { dominantTe: 3, dominantTi: 1 },
          enneagram: { "8": 2, "1": 2, "3": 1 },
          bigFive: { conscientiousness: 2 }
        }
      },
      {
        text: "Ketidakmampuan orang lain untuk memahami kedalaman batin atau sisi emosional yang sulit kujelaskan.",
        scores: {
          functions: { Fi: 3, Ni: 1 },
          positions: { dominantFi: 3, dominantNi: 1 },
          enneagram: { "4": 3, "9": 1 },
          bigFive: { neuroticism: 2 }
        }
      },
      {
        text: "Ketiadaan kebebasan untuk berpindah, menjelajah, atau mencoba hal baru setiap saat.",
        scores: {
          functions: { Ne: 3, Se: 2 },
          positions: { dominantNe: 3, dominantSe: 1 },
          enneagram: { "7": 3, "3": 1 },
          bigFive: { openness: 3 }
        }
      },
      {
        text: "Konflik emosional yang terus-menerus dan keharusan untuk selalu menjaga perasaan orang lain.",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 3, auxiliaryFe: 1 },
          enneagram: { "9": 3, "2": 2 },
          bigFive: { agreeableness: 3 }
        }
      },
      {
        text: "Ketidakteraturan, ketidakpastian, dan orang-orang yang tidak bisa diandalkan.",
        scores: {
          functions: { Si: 3, Te: 1 },
          positions: { dominantSi: 3, auxiliaryTe: 1 },
          enneagram: { "6": 3, "1": 2 },
          bigFive: { conscientiousness: 3 }
        }
      }
    ]
  },
  {
    id: "q085",
    text: "Jika kau bisa memilih satu kekuatan untuk menghadapi dunia ini, apa yang akan kau pilih?",
    options: [
      {
        text: "Kemampuan untuk selalu melihat kebenaran objektif tanpa terdistraksi oleh emosi atau opini manusia.",
        scores: {
          functions: { Ti: 3, Te: 2 },
          positions: { dominantTi: 3, dominantTe: 2 },
          enneagram: { "5": 3, "1": 1 },
          bigFive: { agreeableness: -1 }
        }
      },
      {
        text: "Kemampuan untuk memahami dan merangkul semua orang sehingga mereka merasa dicintai dan diterima apa adanya.",
        scores: {
          functions: { Fe: 3, Fi: 1 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "2": 3, "9": 2 },
          bigFive: { agreeableness: 3 }
        }
      },
      {
        text: "Kemampuan untuk melihat setiap kemungkinan dan masa depan yang tersembunyi, sehingga aku tidak akan pernah salah melangkah.",
        scores: {
          functions: { Ni: 3, Ne: 1 },
          positions: { dominantNi: 3, auxiliaryNi: 2 },
          enneagram: { "5": 2, "3": 1 },
          bigFive: { openness: 2 }
        }
      },
      {
        text: "Kemampuan untuk mengubah keadaan fisik atau lingkungan secara instan agar menjadi tempat yang lebih baik atau lebih efisien.",
        scores: {
          functions: { Se: 3, Te: 2 },
          positions: { dominantSe: 3, auxiliaryTe: 1 },
          enneagram: { "8": 3, "3": 1 },
          bigFive: { extraversion: 2 }
        }
      },
      {
        text: "Kemampuan untuk selalu bisa beradaptasi, tertawa dalam kesulitan, dan membuat hidup menjadi petualangan yang menyenangkan.",
        scores: {
          functions: { Ne: 3, Se: 1 },
          positions: { dominantNe: 3, dominantSe: 1 },
          enneagram: { "7": 3, "9": 1 },
          bigFive: { openness: 2 }
        }
      }
    ]
  },
  {
    id: "q086",
    text: "Apa hal yang paling membuatmu merasa bersalah, meski kau tahu kau tidak punya kendali penuh atas hal itu?",
    options: [
      {
        text: "Bahwa aku tidak bisa menyelamatkan atau membahagiakan semua orang yang kucintai.",
        scores: {
          functions: { Fe: 3, Fi: 1 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "2": 3, "6": 2 },
          bigFive: { agreeableness: 3 }
        }
      },
      {
        text: "Bahwa aku pernah membuat keputusan salah yang merusak masa depanku sendiri.",
        scores: {
          functions: { Si: 3, Te: 1 },
          positions: { dominantSi: 3, inferiorNe: 2 },
          enneagram: { "6": 3, "1": 1 },
          bigFive: { neuroticism: 2 }
        }
      },
      {
        text: "Bahwa aku terlalu egois atau terlalu menarik diri saat dunia sebenarnya membutuhkan keterlibatanku.",
        scores: {
          functions: { Fi: 3, Ni: 1 },
          positions: { dominantFi: 3, auxiliaryFi: 1 },
          enneagram: { "4": 2, "9": 2, "5": 1 },
          bigFive: { neuroticism: 1 }
        }
      },
      {
        text: "Bahwa aku belum cukup berani untuk mengambil risiko yang bisa mengubah hidupku menjadi lebih luar biasa.",
        scores: {
          functions: { Ne: 3, Se: 1 },
          positions: { dominantNe: 2, dominantSe: 1 },
          enneagram: { "7": 2, "3": 2 },
          bigFive: { openness: 2 }
        }
      },
      {
        text: "Bahwa aku memiliki sisi gelap atau amarah yang kadang muncul dan menyakiti orang tanpa maksud yang benar-benar jahat.",
        scores: {
          functions: { Fi: 3, Te: 1 },
          positions: { dominantFi: 3, dominantTe: 1 },
          enneagram: { "8": 2, "1": 2, "4": 1 },
          bigFive: { neuroticism: 1 }
        }
      }
    ]
  },
  {
    id: "q087",
    text: "Di saat kau merasa sangat tertekan, apa hal yang paling sering kau inginkan namun sulit kau minta?",
    options: [
      {
        text: "Hanya ingin didengar tanpa dihakimi atau dinasihati. Aku hanya butuh seseorang yang mengerti bahwa batinku sedang kacau.",
        scores: {
          functions: { Fi: 3, Ni: 1 },
          positions: { dominantFi: 3, auxiliaryFi: 2 },
          enneagram: { "4": 3, "9": 2 },
          bigFive: { neuroticism: 2 }
        }
      },
      {
        text: "Butuh bantuan teknis atau fisik yang nyata. 'Tolong kerjakan ini untukku' atau 'Bawa aku pergi dari sini'.",
        scores: {
          functions: { Te: 3, Se: 1 },
          positions: { dominantTe: 3, auxiliaryTe: 2 },
          enneagram: { "8": 2, "3": 2, "6": 1 },
          bigFive: { conscientiousness: 2 }
        }
      },
      {
        text: "Butuh validasi bahwa aku berharga, terlepas dari kekacauan yang sedang terjadi padaku.",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 3, auxiliaryFe: 2 },
          enneagram: { "2": 3, "3": 1 },
          bigFive: { agreeableness: 2 }
        }
      },
      {
        text: "Butuh keheningan total. Aku butuh orang lain menghilang sementara agar aku bisa membangun kembali diriku.",
        scores: {
          functions: { Ti: 3, Ni: 1 },
          positions: { dominantTi: 3, dominantNi: 1 },
          enneagram: { "5": 3, "8": 1 },
          bigFive: { extraversion: -2 }
        }
      },
      {
        text: "Butuh distraksi. Seseorang yang mau mengajakku bersenang-senang, pergi ke tempat baru, atau melakukan sesuatu yang membuatku lupa sejenak.",
        scores: {
          functions: { Ne: 3, Se: 2 },
          positions: { dominantNe: 3, dominantSe: 2 },
          enneagram: { "7": 3, "3": 1 },
          bigFive: { openness: 2 }
        }
      }
    ]
  },
  {
    id: "q088",
    text: "Seseorang yang baru kau kenal menunjukkan ketertarikan yang sangat dalam padamu, namun ada sesuatu dalam dirinya yang membuatmu waspada. Apa yang paling mungkin kau lakukan?",
    options: [
      {
        text: "Aku menjaga jarak tetap sopan. Jika instingku mengatakan ada sesuatu yang salah, aku tidak akan membiarkannya masuk lebih dalam sebelum aku membuktikan kesimpulanku.",
        scores: {
          functions: { Ni: 3, Ti: 1 },
          positions: { dominantNi: 2, dominantTi: 1 },
          enneagram: { "5": 2, "6": 2 },
          moral: { trueNeutral: 1 }
        }
      },
      {
        text: "Aku mengujinya. Aku sengaja melakukan tindakan untuk melihat bagaimana ia bereaksi. Jika dia memang berniat buruk, dia akan terlihat saat aku menekannya.",
        scores: {
          functions: { Te: 2, Se: 2 },
          positions: { dominantTe: 1, dominantSe: 1 },
          enneagram: { "8": 3, "3": 1 },
          bigFive: { agreeableness: -2 }
        }
      },
      {
        text: "Aku tidak terlalu memikirkannya. Mungkin aku hanya terlalu skeptis. Aku akan tetap membukakan pintu, dan jika dia memang berbahaya, aku akan menanganinya nanti.",
        scores: {
          functions: { Ne: 2, Se: 2 },
          positions: { dominantNe: 1, dominantSe: 1 },
          enneagram: { "7": 2, "9": 1 },
          bigFive: { openness: 1 }
        }
      },
      {
        text: "Aku menghindar perlahan. Jika ada yang terasa tidak beres, aku tidak butuh kejelasan lebih lanjut. Aku lebih suka kehilangan potensi pertemanan daripada mengambil risiko.",
        scores: {
          functions: { Si: 3, Fi: 1 },
          positions: { dominantSi: 2, tertiaryFi: 1 },
          enneagram: { "6": 3, "1": 1 },
          bigFive: { neuroticism: 1 }
        }
      },
      {
        text: "Aku mencari tahu tentang dia dari orang lain. Aku butuh validasi eksternal bahwa kecurigaanku benar sebelum aku mengambil tindakan apa pun.",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 2, auxiliaryFe: 2 },
          enneagram: { "2": 1, "6": 3 },
          instincts: { so: 2 }
        }
      }
    ]
  },
  {
    id: "q089",
    text: "Seseorang berkata, “Hidup ini tidak ada artinya, jadi buatlah caramu sendiri.” Bagaimana batinmu merespons kalimat tersebut?",
    options: [
      {
        text: "Itu adalah pembebasan paling mutlak. Jika tidak ada artinya, aku bebas menjadi apa pun yang kuinginkan tanpa beban harus mengikuti takdir apa pun.",
        scores: {
          functions: { Ne: 3, Ti: 1 },
          positions: { dominantNe: 3, dominantTi: 1 },
          enneagram: { "7": 3, "3": 1 },
          bigFive: { openness: 3 }
        }
      },
      {
        text: "Itu adalah kesepian yang mengerikan. Jika tidak ada artinya, apa gunanya aku berjuang setiap hari? Aku harus mencari makna yang lebih dalam agar aku tidak kehilangan akal.",
        scores: {
          functions: { Ni: 3, Fi: 2 },
          positions: { dominantNi: 2, dominantFi: 2 },
          enneagram: { "4": 3, "5": 2 },
          bigFive: { neuroticism: 2 }
        }
      },
      {
        text: "Itu adalah kegilaan yang berbahaya. Tanpa makna atau struktur, manusia akan hancur. Kita harus membangun makna kita sendiri berdasarkan etika dan tanggung jawab.",
        scores: {
          functions: { Si: 3, Te: 1 },
          positions: { dominantSi: 2, dominantTe: 1 },
          enneagram: { "1": 3, "6": 2 },
          bigFive: { conscientiousness: 2 }
        }
      },
      {
        text: "Itu adalah kenyataan yang dingin namun jujur. Aku hanya perlu menjalankan peran yang diberikan dunia padaku—menjadi bermanfaat bagi orang lain—dan itu sudah cukup sebagai makna.",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 2, dominantSi: 1 },
          enneagram: { "2": 3, "9": 2 },
          instincts: { so: 2 }
        }
      },
      {
        text: "Aku tidak butuh makna untuk hidup. Aku butuh makanan, tempat tinggal, dan kegembiraan fisik. Hidup adalah tentang bertahan dan menikmati apa yang ada.",
        scores: {
          functions: { Se: 3, Te: 1 },
          positions: { dominantSe: 3, dominantTe: 1 },
          enneagram: { "8": 2, "7": 2, "9": 1 },
          bigFive: { extraversion: 1 }
        }
      }
    ]
  },
  {
    id: "q090",
    text: "Setelah melewati semua pertanyaan ini, apa yang paling kau harapkan dari hasil akhirnya?",
    options: [
      {
        text: "Aku hanya ingin divalidasi. Bahwa kekacauan dan keanehan di kepalaku sebenarnya memiliki pola yang bisa dipahami.",
        scores: {
          functions: { Ni: 2, Fi: 1 },
          positions: { dominantNi: 1, auxiliaryFi: 1 },
          enneagram: { "4": 2, "6": 1 },
          bigFive: { neuroticism: 1 }
        }
      },
      {
        text: "Aku ingin alat ukur yang objektif. Bahwa dengan hasil ini, aku bisa memperbaiki kelemahanku dan menjadi manusia yang lebih efisien.",
        scores: {
          functions: { Te: 3, Ti: 2 },
          positions: { dominantTe: 2, dominantTi: 2 },
          enneagram: { "1": 2, "3": 2 },
          bigFive: { conscientiousness: 2 }
        }
      },
      {
        text: "Aku ingin tahu apakah aku normal. Apakah ketakutan dan cara bersembunyiku adalah hal yang wajar dilakukan oleh orang lain?",
        scores: {
          functions: { Fe: 3, Si: 1 },
          positions: { dominantFe: 2, auxiliarySi: 1 },
          enneagram: { "6": 3, "2": 1 },
          bigFive: { neuroticism: 1 }
        }
      },
      {
        text: "Aku hanya sekadar penasaran. Aku suka memetakan diriku seolah-olah aku sedang memainkan sebuah permainan catur, dan ini hanyalah bagian dari data profilku.",
        scores: {
          functions: { Ti: 3, Ne: 1 },
          positions: { dominantTi: 2, dominantNe: 1 },
          enneagram: { "5": 3, "7": 1 },
          bigFive: { openness: 1 }
        }
      },
      {
        text: "Aku ingin kedamaian. Jika aku tahu siapa aku sebenarnya, mungkin aku bisa berhenti bertarung dengan diriku sendiri.",
        scores: {
          functions: { Fi: 3, Ni: 1 },
          positions: { dominantFi: 2, auxiliaryNi: 1 },
          enneagram: { "9": 3, "4": 1 },
          bigFive: { neuroticism: 1 }
        }
      }
    ]
  }
];
