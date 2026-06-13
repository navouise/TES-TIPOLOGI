import React, { useState } from 'react';
import { questions } from '../questions';
import { Option } from '../types';

interface QuizScreenProps {
  onFinish: (answers: Option[]) => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Option[]>([]);

  const handleSelectOption = (option: Option) => {
    const newAnswers = [...answers, option];
    
    if (currentIndex < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentIndex(currentIndex + 1);
    } else {
      onFinish(newAnswers);
    }
  };

  const handleSkip = () => {
    // Memberikan option kosong dengan skor 0 jika dilewati
    const skippedOption: Option = {
      text: "Dilewati",
      scores: {}
    };
    
    const newAnswers = [...answers, skippedOption];
    if (currentIndex < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentIndex(currentIndex + 1);
    } else {
      onFinish(newAnswers);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const currentQuestion = questions[currentIndex];
  const progressPercentage = ((currentIndex) / questions.length) * 100;

  return (
    <div style={{ animation: 'fadeIn 0.5s ease' }}>
      <div className="progress-container">
        <div 
          className="progress-bar" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
        <span>Pertanyaan {currentIndex + 1} dari {questions.length}</span>
        <span>{Math.round(progressPercentage)}%</span>
      </div>

      <div className="card">
        <h2 style={{ fontSize: '1.3rem', lineHeight: '1.6', marginBottom: '1.5rem', fontWeight: 500 }}>
          {currentQuestion.text}
        </h2>
        
        {(currentQuestion.reminder || currentIndex < 3) && (
          <p className="reminder-text">
            {currentQuestion.reminder || "Pilih yang paling sering terjadi, bukan yang paling indah atau ideal."}
          </p>
        )}

        <div className="options-container">
          {currentQuestion.options.map((option, idx) => (
            <button 
              key={idx} 
              className="option-btn"
              onClick={() => handleSelectOption(option)}
            >
              {option.text}
            </button>
          ))}
        </div>

        <div className="btn-group" style={{ marginTop: '3rem', justifyContent: 'space-between' }}>
          <button 
            className="btn btn-outline" 
            onClick={handleBack} 
            disabled={currentIndex === 0}
            style={{ width: 'auto', padding: '0.8rem 2rem', opacity: currentIndex === 0 ? 0.5 : 1 }}
          >
            Kembali
          </button>
          
          <button 
            className="btn btn-outline" 
            onClick={handleSkip}
            style={{ width: 'auto', padding: '0.8rem 2rem', borderColor: 'var(--accent-color)' }}
          >
            Lewati
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;

