import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="card" style={{ marginTop: '10vh' }}>
      <h1 className="title-main">Ekskavasi Batin</h1>
      <p className="text-body text-center" style={{ marginBottom: '2.5rem' }}>
        Sebuah instrumen tipologi mendalam untuk memetakan arah pikiran, luka, dan mekanisme pertahananmu.
      </p>

      <div className="warning-box">
        <h3 style={{ marginBottom: '0.5rem', color: '#d18a8a' }}>Catatan Etis & Peringatan</h3>
        <p className="warning-text">
          Instrumen ini dirancang untuk menembus lapisan permukaan. Beberapa pertanyaan akan menempatkanmu 
          dalam situasi yang mungkin menyentuh dinamika keluarga, luka lama, rasa bersalah, rasa malu, serta 
          cara batinmu bertahan saat terdesak. Ini bukan diagnosis medis atau psikologis mutlak, melainkan 
          sebuah cermin untuk mengurai benang kusut dalam cara kerjamu.
        </p>
      </div>

      <div className="text-body" style={{ fontSize: '0.95rem' }}>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Petunjuk Pengisian:</strong>
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Jawablah berdasarkan kebiasaan yang paling sering terjadi, bukan berdasarkan sikap yang ingin kau miliki.</li>
          <li style={{ marginBottom: '0.5rem' }}>Jika ragu, pilih jawaban yang paling mirip dengan reaksi pertamamu saat lelah, terdesak, malu, atau tidak sempat berpura-pura.</li>
          <li style={{ marginBottom: '0.5rem' }}>Tinggalkan bayangan tentang dirimu yang ideal. Jawablah sebagai manusia yang tidak luput dari cacat.</li>
          <li>Jika ada pertanyaan yang terlalu menggores hal yang belum siap kau sentuh, kau berhak menekannya pergi dengan tombol "Lewati".</li>
        </ul>
      </div>

      <button className="btn btn-primary" onClick={onStart} style={{ fontSize: '1.1rem', padding: '1rem' }}>
        Mulai Menyelam
      </button>
    </div>
  );
};

export default StartScreen;

