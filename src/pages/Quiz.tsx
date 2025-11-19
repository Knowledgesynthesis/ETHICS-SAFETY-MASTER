import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle2, XCircle, ArrowLeft } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { vignettes } from '../data';
import { getModuleById } from '../data';
import type { QuizQuestion } from '../types';

export default function Quiz() {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const module = moduleId ? getModuleById(moduleId) : undefined;

  // Filter vignettes for this module and create quiz
  const quizQuestions = useMemo(() => {
    const moduleVignettes = vignettes.filter(v => v.moduleId === moduleId);
    // Take up to 5 random questions
    const shuffled = [...moduleVignettes].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(5, shuffled.length)).map(v => ({ ...v })) as QuizQuestion[];
  }, [moduleId]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState<QuizQuestion[]>(quizQuestions);
  const [quizComplete, setQuizComplete] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  if (!module || questions.length === 0) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12 space-y-4">
        <p className="text-muted-foreground">
          {questions.length === 0 ? 'No quiz questions available for this module yet.' : 'Module not found'}
        </p>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </div>
    );
  }

  const handleAnswer = (optionId: string) => {
    if (currentQuestion.userAnswer) return; // Already answered

    const isCorrect = optionId === currentQuestion.correctOptionId;
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex] = {
      ...currentQuestion,
      userAnswer: optionId,
      isCorrect,
    };
    setQuestions(updatedQuestions);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    navigate(`/modules/${moduleId}/quiz`);
    window.location.reload(); // Force remount to get new random questions
  };

  const correctCount = questions.filter(q => q.isCorrect).length;
  const answeredCount = questions.filter(q => q.userAnswer).length;

  if (quizComplete) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <Button variant="ghost" onClick={() => navigate(`/modules/${moduleId}`)} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Module
        </Button>

        <Card className="border-primary bg-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-6">
              <p className="text-4xl font-bold text-primary mb-2">
                {correctCount} / {questions.length}
              </p>
              <p className="text-muted-foreground">Correct answers this session</p>
            </div>

            {correctCount < questions.length && (
              <div className="space-y-2">
                <p className="font-semibold">Consider reviewing:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {questions
                    .filter(q => !q.isCorrect)
                    .map((_, idx) => (
                      <li key={idx}>• Review concepts related to this case</li>
                    ))}
                </ul>
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <Button onClick={handleRestart} variant="outline" className="flex-1">
                Try Again
              </Button>
              <Button onClick={() => navigate(`/modules/${moduleId}`)} className="flex-1">
                Back to Module
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center pt-4 border-t">
              This quiz is for learning only. Your score is not saved or tracked.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <Button variant="ghost" onClick={() => navigate(`/modules/${moduleId}`)} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Module
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">{module.title} Quiz</h1>
        <div className="flex items-center gap-2">
          <Badge variant="outline">
            Question {currentQuestionIndex + 1} of {questions.length}
          </Badge>
          <Badge variant="secondary">
            {correctCount} correct of {answeredCount} answered
          </Badge>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-secondary rounded-full h-2">
        <div
          className="bg-primary h-2 rounded-full transition-all"
          style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-normal leading-relaxed">
            {currentQuestion.stem}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {currentQuestion.options.map((option) => {
            const isSelected = currentQuestion.userAnswer === option.id;
            const isCorrectOption = option.id === currentQuestion.correctOptionId;
            const showFeedback = !!currentQuestion.userAnswer;

            let variant: 'outline' | 'primary' = 'outline';
            let className = 'justify-start h-auto py-3 px-4 text-left';

            if (showFeedback && isCorrectOption) {
              className += ' border-success bg-success/10 text-success';
            } else if (showFeedback && isSelected && !currentQuestion.isCorrect) {
              className += ' border-destructive bg-destructive/10 text-destructive';
            } else if (isSelected) {
              variant = 'primary';
            }

            return (
              <Button
                key={option.id}
                variant={variant}
                className={className}
                onClick={() => handleAnswer(option.id)}
                disabled={showFeedback}
              >
                <span className="font-semibold mr-3">{option.id}.</span>
                <span className="flex-1">{option.text}</span>
                {showFeedback && isCorrectOption && (
                  <CheckCircle2 className="h-5 w-5 ml-2" />
                )}
                {showFeedback && isSelected && !currentQuestion.isCorrect && (
                  <XCircle className="h-5 w-5 ml-2" />
                )}
              </Button>
            );
          })}
        </CardContent>
      </Card>

      {/* Rationale */}
      {currentQuestion.userAnswer && (
        <Card className={currentQuestion.isCorrect ? 'border-success bg-success/5' : 'border-destructive bg-destructive/5'}>
          <CardHeader>
            <CardTitle className={`text-lg flex items-center gap-2 ${currentQuestion.isCorrect ? 'text-success' : 'text-destructive'}`}>
              {currentQuestion.isCorrect ? (
                <>
                  <CheckCircle2 className="h-5 w-5" />
                  Correct!
                </>
              ) : (
                <>
                  <XCircle className="h-5 w-5" />
                  Incorrect
                </>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed">{currentQuestion.rationale}</p>
          </CardContent>
        </Card>
      )}

      {/* Navigation */}
      {currentQuestion.userAnswer && (
        <Button onClick={handleNext} className="w-full">
          {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
        </Button>
      )}
    </div>
  );
}
