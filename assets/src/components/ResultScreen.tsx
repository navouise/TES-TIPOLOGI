import React, { useMemo } from 'react';
import { Option, CognitiveFunction, EnneagramType, EnneagramInstinct } from '../types';
import { calculateScores, calculateMBTI } from '../utils/scoring';

interface ResultScreenProps {
  answers: Option[];
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ answers, onRestart }) => {
  const scores = useMemo(() => calculateScores(answers), [answers]);
  const topMBTI = useMemo(() => calculateMBTI(scores.functions), [scores]);

  // Mengurutkan Fungsi Kognitif
  const sortedFunctions = Object.entries(scores.functions)
    .sort(([, a], [, b]) => (b as number) - (a as number)) as [CognitiveFunction, number][];

  // Mengurutkan Enneagram
  const sortedEnneagram = Object.entries(scores.enneagram)
    .sort(([, a], [, b]) => (b as number) - (a as number)) as [EnneagramType, number][];
  
  const mainEnneagram = sortedEnneagram[0]?.[0] || "Tidak diketahui";

  // Menentukan Wing Enneagram
  const getWing = (core: EnneagramType): string => {
    if (core === "Tidak diketahui") return "";
    const coreNum = parseInt(core);
    const wing1 = coreNum === 1 ? 9 : coreNum - 1;
    const wing2 = coreNum === 9 ? 1 : coreNum + 1;
    
    const score1 = scores.enneagram[wing1.toString() as EnneagramType] || 0;
    const score2 = scores.enneagram[wing2.toString() as EnneagramType] || 0;
    
    return score1 > score2 ? `${core}w${wing1}` : `${core}w${wing2}`;
  };

  // Menentukan Tritype secara sederhana (Head, Heart, Gut)
  const getTritype = (): string => {
    const gut = ["8", "9", "1"].map(t => ({ type: t, score: scores.enneagram[t as EnneagramType] || 0 })).sort((a,b) => b.score - a.score)[0];
    const heart = ["2", "3", "4"].map(t => ({ type: t, score: scores.enneagram[t as EnneagramType] || 0 })).sort((a,b) => b.score - a.score)[0];
    const head = ["5", "6", "7"].map(t => ({ type: t, score: scores.enneagram[t as EnneagramType] || 0 })).sort((a,b) => b.score - a.score)[0];
    
    const tritypeArr = [gut, heart, head].sort((a,b) => b.score - a.score);
    return tritypeArr.map(t => t.type).join("");
  };

  // Menentukan Instinctual Stacking
  const sortedInstincts = Object.entries(scores.instincts)
    .sort(([, a], [, b]) => (b as number) - (a as number)) as [EnneagramInstinct, number][];
  const instinctStacking = sortedInstincts.length >= 2 
    ? `${sortedInstincts[0][0]}/${sortedInstincts[1][0]}` 
    : "sp/so";

  // Evaluasi Big Five
  const getBigFiveLevel = (score: number) => {
    if (score > 5) return "Tinggi";
    if (score < -1) return "Rendah";
    return "Sedang";
  };

  // Menentukan Temperament Dominan
  const mainTemperament = Object.entries(scores.temperament)
    .sort(([, a], [, b]) => (b as number) - (a as number))[0]?.[0] || "melancholic";

  // Menentukan Moral Alignment Dominan
  const mainMoral = Object.entries(scores.moral)
    .sort(([, a], [, b]) => (b as number) - (a as number))[0]?.[0] || "trueNeutral";

  const moralTextMap: Record<string, string> = {
    lawfulGood: "Kebaikan Terstruktur (Lawful Good) - Memegang teguh prinsip kebenaran dan aturan moral.",
    neutralGood: "Kebaikan Murni (Neutral Good) - Melakukan yang benar tanpa terikat pada aturan baku.",
    chaoticGood: "Kebaikan Bebas (Chaotic Good) - Mengikuti nurani secara independen, seringkali menabrak aturan formal.",
    lawfulNeutral: "Keteraturan Objektif (Lawful Neutral) - Mengutamakan sistem, hukum, dan janji di atas segalanya.",
    trueNeutral: "Keseimbangan Murni (True Neutral) - Mengambil jarak, pragmatis, dan tidak memihak secara ekstrem.",
    chaoticNeutral: "Kebebasan Absolut (Chaotic Neutral) - Bertindak berdasarkan keinginan pribadi tanpa niat menyakiti atau tunduk pada aturan.",
    lawfulEvil: "Kontrol Terstruktur (Lawful Evil) - Menggunakan sistem dan aturan untuk kepentingan dan dominasi pribadi.",
    neutralEvil: "Pragmatisme Kepentingan Diri (Neutral Evil) - Mengutamakan kelangsungan diri tanpa peduli pada harmoni kelompok.",
    chaoticEvil: "Kemandirian Ekstrem (Chaotic Evil) - Mengabaikan segala batasan demi mendapatkan apa yang diinginkan saat terdesak."
  };

  const handleCopy = () => {
    const text = `Ekskavasi Batin Selesai\nMBTI Utama: ${topMBTI[0]?.type}\nEnneagram: ${getWing(mainEnneagram)} (${instinctStacking})\nTritype: ${getTritype()}`;
    navigator.clipboard.writeText(text);
    alert("Hasil telah disalin.");
  };

  return (
    <div style={{ animation: 'fadeIn 0.8s ease' }}>
      <h1 className="title-main" style={{ marginBottom: '0.5rem' }}>Peta Batinmu</h1>
      <p className="text-body text-center" style={{ marginBottom: '3rem' }}>
        Ini adalah hasil dari jejak yang kau tinggalkan selama menjawab. Bacalah dengan pikiran terbuka.
      </p>

      {/* 1. Hasil MBTI Utama */}
      <div className="card" style={{ borderTop: '4px solid var(--accent-light)' }}>
        <h2 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Arsitektur Kognitif Utama</h2>
        <div style={{ fontSize: '3.5rem', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1 }}>
          {topMBTI[0]?.type || "Tidak Terdefinisi"}
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <span className="badge">Dominan: {topMBTI[0]?.stack.dominant}</span>
          <span className="badge">Auksiliari: {topMBTI[0]?.stack.auxiliary}</span>
          <span className="badge">Tersier: {topMBTI[0]?.stack.tertiary}</span>
          <span className="badge">Inferior: {topMBTI[0]?.stack.inferior}</span>
        </div>
        <p className="text-body">
          Ini adalah pola utama bagaimana pikiranmu memproses dunia dan mengambil keputusan. 
          Susunan ini mencerminkan cara alamimu menyerap informasi dan merespons tekanan, bukan sekadar label mati.
        </p>
      </div>

      {/* 2. Top 3 Kemungkinan MBTI */}
      <div className="card">
        <h3 style={{ marginBottom: '1.5rem' }}>Kemungkinan Pola Lain (Top 3)</h3>
        {topMBTI.map((mbti, idx) => (
          <div key={idx} style={{ marginBottom: '1.5rem', paddingBottom: idx !== 2 ? '1.5rem' : 0, borderBottom: idx !== 2 ? '1px solid var(--border-color)' : 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <strong style={{ fontSize: '1.2rem' }}>{idx + 1}. {mbti.type}</strong>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Skor Kecocokan: {Math.round(mbti.score)}</span>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              {idx === 0 ? "Pola yang paling konsisten muncul dari pilihan spontan dan cara bertahanmu." : 
               idx === 1 ? "Pola ini sangat mungkin terjadi jika kau sedang menekan fungsi utamamu atau beradaptasi secara sosial." :
               "Lapisan ketiga yang mungkin muncul saat kau berada di lingkungan yang mengharuskanmu menggunakan cara pikir berbeda."}
            </p>
          </div>
        ))}
      </div>

      {/* 3. Ranking Fungsi Kognitif */}
      <div className="card">
        <h3 style={{ marginBottom: '1.5rem' }}>Kekuatan Fungsi Kognitif</h3>
        <p className="text-body" style={{ fontSize: '0.9rem', marginBottom: '2rem' }}>
          Grafik ini menunjukkan alat ukur seberapa sering batinmu menggunakan fungsi tertentu saat menghadapi dunia.
        </p>
        
        {sortedFunctions.map(([func, score]) => {
          // Normalisasi sederhana untuk visualisasi bar (max score diasumsikan ~30-50 dari 90 soal)
          const width = Math.min(Math.max((score / 40) * 100, 5), 100);
          return (
            <div key={func} style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', fontSize: '0.9rem' }}>
                <span style={{ fontWeight: 600 }}>{func}</span>
                <span style={{ color: 'var(--text-secondary)' }}>{Math.round(score)}</span>
              </div>
              <div style={{ width: '100%', backgroundColor: 'var(--surface-hover)', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${width}%`, backgroundColor: 'var(--accent-light)', height: '100%', borderRadius: '4px' }}></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. Pola Saat Stres */}
      <div className="card">
        <h3 style={{ marginBottom: '1.5rem' }}>Mekanisme Saat Terdesak</h3>
        <p className="text-body">
          Berdasarkan fungsi terlemahmu ({sortedFunctions[7]?.[0]} dan {sortedFunctions[6]?.[0]}), saat kau berada dalam tekanan yang panjang, 
          kau cenderung melepaskan kendali atas cara alamimu dan jatuh pada perilaku impulsif atau kekakuan yang tidak biasa kau miliki. 
          Bagian dari dirimu yang biasanya tenang akan mencari cara untuk menuntut kendali, seringkali melalui pelampiasan yang tidak rasional 
          atau menarik diri secara total hingga kau merasa aman kembali.
        </p>
      </div>

      {/* 5. Hasil Enneagram */}
      <div className="card">
        <h3 style={{ marginBottom: '1.5rem' }}>Lapisan Luka dan Pertahanan (Enneagram)</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ backgroundColor: 'var(--surface-hover)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Tipe Utama & Wing</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>{getWing(mainEnneagram)}</div>
          </div>
          <div style={{ backgroundColor: 'var(--surface-hover)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Instinctual Stacking</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>{instinctStacking}</div>
          </div>
          <div style={{ backgroundColor: 'var(--surface-hover)', padding: '1rem', borderRadius: '8px', gridColumn: 'span 2' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Tritype (Pola Keputusan Gut-Heart-Head)</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 500 }}>{getTritype()}</div>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <strong>Ketakutan Tersembunyi: </strong>
          <span style={{ color: 'var(--text-secondary)' }}>Berakar dari Enneagram {mainEnneagram}, ketakutan terdalammu berkisar pada perasaan tidak cukup, kehilangan otonomi, atau ditinggalkan oleh makna.</span>
        </div>
        <div>
          <strong>Keinginan Utama: </strong>
          <span style={{ color: 'var(--text-secondary)' }}>Kau terus mencari pembenaran atas keberadaanmu, entah melalui pencapaian, pemahaman yang dalam, atau kedamaian tanpa gangguan.</span>
        </div>
      </div>

      {/* 6. Hasil Big Five & Tipologi Lain */}
      <div className="card">
        <h3 style={{ marginBottom: '1.5rem' }}>Spektrum Karakter</h3>
        
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Model Lima Faktor (Big Five)</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem', display: 'flex', justifyContent: 'space-between' }}>
              <span>Keterbukaan pada Pengalaman (Openness)</span>
              <span style={{ color: 'var(--accent-light)' }}>{getBigFiveLevel(scores.bigFive.openness || 0)}</span>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', justifyContent: 'space-between' }}>
              <span>Keteraturan & Disiplin (Conscientiousness)</span>
              <span style={{ color: 'var(--accent-light)' }}>{getBigFiveLevel(scores.bigFive.conscientiousness || 0)}</span>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', justifyContent: 'space-between' }}>
              <span>Ekstraversi (Extraversion)</span>
              <span style={{ color: 'var(--accent-light)' }}>{getBigFiveLevel(scores.bigFive.extraversion || 0)}</span>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', justifyContent: 'space-between' }}>
              <span>Keramahtamahan (Agreeableness)</span>
              <span style={{ color: 'var(--accent-light)' }}>{getBigFiveLevel(scores.bigFive.agreeableness || 0)}</span>
            </li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', justifyContent: 'space-between' }}>
              <span>Kerentanan Emosional (Neuroticism)</span>
              <span style={{ color: 'var(--accent-light)' }}>{getBigFiveLevel(scores.bigFive.neuroticism || 0)}</span>
            </li>
          </ul>
        </div>

        <div className="section-divider"></div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Temperamen Kuno</h4>
          <p style={{ color: 'var(--text-secondary)', textTransform: 'capitalize' }}>{mainTemperament} Dominant</p>
        </div>

        <div>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Gaya Mengambil Keputusan (Moral Alignment)</h4>
          <p style={{ color: 'var(--text-secondary)' }}>{moralTextMap[mainMoral] || "Keseimbangan Murni (True Neutral)"}</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--accent-color)', marginTop: '0.5rem' }}>
            *Ini adalah ukuran strategimu dalam mengendalikan keadaan, bukan vonis kebaikan hatimu secara absolut.
          </p>
        </div>
      </div>

      {/* 8. Pola Pribadi & 9. Bias Jawaban */}
      <div className="card">
        <h3 style={{ marginBottom: '1.5rem' }}>Refleksi Batin</h3>
        <p className="text-body">
          Dalam keheningan, kau seringkali memisahkan dirimu dari sekitarmu untuk melindungi sisa-sisa energimu. 
          Kau bukan orang yang membenci dunia, kau hanya lelah jika harus terus menerjemahkan niatmu ke dalam bahasa yang dapat dipahami semua orang. 
          Luka batinmu sering kali berkisar pada perasaan tidak diakui secara utuh—bahwa orang-orang menyukai versi dirimu yang fungsional, 
          tetapi jarang mau menyelam untuk memahami bagianmu yang rumit dan berantakan.
        </p>
        <p className="text-body">
          <strong>Bias Jawaban:</strong> {scores.biasControl < 0 ? "Beberapa pilihanmu mengindikasikan kau sedang menekan sisi gelapmu dan memilih bayangan dirimu yang ideal. Hasil mungkin sedikit lebih cerah dari realitas batinmu." : "Kau menjawab dengan kejujuran yang cukup pekat, membiarkan sisi rentan dan cacatmu terlihat jelas dalam pengukuran ini."}
        </p>
      </div>

      {/* 11. Catatan Etis */}
      <div className="warning-box" style={{ backgroundColor: 'transparent', borderColor: 'var(--border-color)', borderStyle: 'dashed' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--accent-color)', textAlign: 'center', marginBottom: 0 }}>
          Ini bukan diagnosis. Ini hanya estimasi tipologi berdasarkan jawaban yang kau berikan hari ini. 
          Hasil dapat berubah seiring pertumbuhanmu, saat kau lelah, atau saat kau melihat dirimu dari sudut yang berbeda. 
          Simpan yang berguna, dan biarkan sisanya terbang.
        </p>
      </div>

      <div className="btn-group" style={{ marginTop: '2rem' }}>
        <button className="btn btn-primary" onClick={handleCopy}>Salin Hasil</button>
        <button className="btn btn-outline" onClick={onRestart}>Ulangi Ekskavasi</button>
      </div>
    </div>
  );
};

export default ResultScreen;
                       
