import { useState } from 'react';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import { Option } from './types';

type ScreenState = 'start' | 'quiz' | 'result';

function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('start');
  const [userAnswers, setUserAnswers] = useState<Option[]>([]);

  const handleStart = () => {
    setCurrentScreen('quiz');
    setUserAnswers([]);
  };

  const handleFinishQuiz = (answers: Option[]) => {
    setUserAnswers(answers);
    setCurrentScreen('result');
  };

  const handleRestart = () => {
    setCurrentScreen('start');
    setUserAnswers([]);
  };

  return (
    <div className="container">
      {currentScreen === 'start' && <StartScreen onStart={handleStart} />}
      {currentScreen === 'quiz' && <QuizScreen onFinish={handleFinishQuiz} />}
      {currentScreen === 'result' && <ResultScreen answers={userAnswers} onRestart={handleRestart} />}
    </div>
  );
}

export default App;

