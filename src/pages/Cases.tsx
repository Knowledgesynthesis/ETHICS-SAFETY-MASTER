import { useState } from 'react';
import { CheckCircle2, XCircle, RefreshCw } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { vignettes } from '../data';
import { allModules } from '../data';

export default function Cases() {
  const [currentVignetteIndex, setCurrentVignetteIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentVignette = vignettes[currentVignetteIndex];
  const currentModule = allModules.find(m => m.id === currentVignette.moduleId);

  const handleSubmit = () => {
    if (selectedOption) {
      setShowFeedback(true);
    }
  };

  const handleNext = () => {
    const nextIndex = (currentVignetteIndex + 1) % vignettes.length;
    setCurrentVignetteIndex(nextIndex);
    setSelectedOption(null);
    setShowFeedback(false);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setShowFeedback(false);
  };

  const isCorrect = selectedOption === currentVignette.correctOptionId;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Practice Cases</h1>
        <p className="text-muted-foreground">
          Work through USMLE Step 3-style vignettes with immediate feedback
        </p>
        <div className="flex items-center gap-2">
          <Badge variant="outline">
            Case {currentVignetteIndex + 1} of {vignettes.length}
          </Badge>
          {currentModule && (
            <Badge variant="secondary">
              {currentModule.icon} {currentModule.title}
            </Badge>
          )}
        </div>
      </div>

      {/* Vignette */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-normal leading-relaxed">
            {currentVignette.stem}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {currentVignette.options.map((option) => {
            const isSelected = selectedOption === option.id;
            const isCorrectOption = option.id === currentVignette.correctOptionId;

            let variant: 'outline' | 'primary' = 'outline';
            let className = 'justify-start h-auto py-3 px-4 text-left';

            if (showFeedback && isCorrectOption) {
              className += ' border-success bg-success/10 text-success';
            } else if (showFeedback && isSelected && !isCorrect) {
              className += ' border-destructive bg-destructive/10 text-destructive';
            } else if (isSelected) {
              variant = 'primary';
            }

            return (
              <Button
                key={option.id}
                variant={variant}
                className={className}
                onClick={() => !showFeedback && setSelectedOption(option.id)}
                disabled={showFeedback}
              >
                <span className="font-semibold mr-3">{option.id}.</span>
                <span className="flex-1">{option.text}</span>
                {showFeedback && isCorrectOption && (
                  <CheckCircle2 className="h-5 w-5 ml-2" />
                )}
                {showFeedback && isSelected && !isCorrect && (
                  <XCircle className="h-5 w-5 ml-2" />
                )}
              </Button>
            );
          })}
        </CardContent>
      </Card>

      {/* Feedback */}
      {showFeedback && (
        <Card className={isCorrect ? 'border-success bg-success/5' : 'border-destructive bg-destructive/5'}>
          <CardHeader>
            <CardTitle className={`text-lg flex items-center gap-2 ${isCorrect ? 'text-success' : 'text-destructive'}`}>
              {isCorrect ? (
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
            <p className="leading-relaxed">{currentVignette.rationale}</p>
          </CardContent>
        </Card>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        {!showFeedback ? (
          <Button
            onClick={handleSubmit}
            disabled={!selectedOption}
            className="flex-1"
          >
            Check Answer
          </Button>
        ) : (
          <>
            <Button onClick={handleReset} variant="outline" className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Try Again
            </Button>
            <Button onClick={handleNext} className="flex-1">
              Next Case
            </Button>
          </>
        )}
      </div>

      {/* Note */}
      <Card className="border-primary/30 bg-primary/5">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> Your answers are not tracked or stored. This is purely for learning and practice.
            Refresh the page to start over with a random case.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
