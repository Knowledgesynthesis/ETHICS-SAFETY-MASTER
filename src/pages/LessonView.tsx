import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Lightbulb, AlertTriangle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { getSectionById, getModuleById } from '../data';

export default function LessonView() {
  const { moduleId, sectionId } = useParams<{ moduleId: string; sectionId: string }>();
  const navigate = useNavigate();

  const module = moduleId ? getModuleById(moduleId) : undefined;
  const section = moduleId && sectionId ? getSectionById(moduleId, sectionId) : undefined;

  if (!section || !module) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Lesson not found</p>
        <Button onClick={() => navigate('/')} className="mt-4">
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Back Button */}
      <Button variant="ghost" onClick={() => navigate(`/modules/${moduleId}`)} className="gap-2">
        <ArrowLeft className="h-4 w-4" />
        Back to {module.title}
      </Button>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>{module.icon} {module.title}</span>
        <span>/</span>
        <span>{section.title}</span>
      </div>

      {/* Section Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{section.title}</h1>
      </div>

      {/* Content */}
      <Card>
        <CardContent className="pt-6">
          <div className="prose prose-sm max-w-none dark:prose-invert">
            {section.content.split('\n\n').map((paragraph, idx) => {
              // Handle headings
              if (paragraph.startsWith('**') && paragraph.endsWith('**:')) {
                const heading = paragraph.replace(/\*\*/g, '').replace(':', '');
                return (
                  <h3 key={idx} className="text-lg font-semibold mt-6 mb-3">
                    {heading}
                  </h3>
                );
              }

              // Handle bold lists
              if (paragraph.startsWith('**') && paragraph.includes('**:')) {
                const parts = paragraph.split('\n');
                return (
                  <div key={idx} className="my-4">
                    {parts.map((part, pidx) => {
                      if (part.startsWith('**')) {
                        const [bold, rest] = part.split('**:');
                        const boldText = bold.replace(/\*\*/g, '');
                        return (
                          <p key={pidx} className="mb-2">
                            <strong>{boldText}:</strong>{rest}
                          </p>
                        );
                      }
                      if (part.trim().startsWith('-')) {
                        return (
                          <p key={pidx} className="ml-4 mb-1">
                            {part}
                          </p>
                        );
                      }
                      return <p key={pidx} className="mb-2">{part}</p>;
                    })}
                  </div>
                );
              }

              // Regular paragraphs
              return (
                <p key={idx} className="mb-4 leading-relaxed">
                  {paragraph.split('**').map((part, i) =>
                    i % 2 === 0 ? part : <strong key={i}>{part}</strong>
                  )}
                </p>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Pearls */}
      {section.pearls && section.pearls.length > 0 && (
        <Card className="border-success/30 bg-success/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-success" />
              Exam Pearls
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {section.pearls.map((pearl, index) => (
                <li key={index} className="flex gap-2 text-sm">
                  <span className="text-success">✓</span>
                  <span>{pearl}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Pitfalls */}
      {section.pitfalls && section.pitfalls.length > 0 && (
        <Card className="border-destructive/30 bg-destructive/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Common Pitfalls
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {section.pitfalls.map((pitfall, index) => (
                <li key={index} className="flex gap-2 text-sm">
                  <span className="text-destructive">⚠</span>
                  <span>{pitfall}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Navigation */}
      <div className="flex justify-between pt-4">
        <Button
          variant="outline"
          onClick={() => {
            const currentIndex = module.sections.findIndex(s => s.id === sectionId);
            if (currentIndex > 0) {
              navigate(`/modules/${moduleId}/lesson/${module.sections[currentIndex - 1].id}`);
            }
          }}
          disabled={module.sections.findIndex(s => s.id === sectionId) === 0}
        >
          Previous Section
        </Button>
        <Button
          onClick={() => {
            const currentIndex = module.sections.findIndex(s => s.id === sectionId);
            if (currentIndex < module.sections.length - 1) {
              navigate(`/modules/${moduleId}/lesson/${module.sections[currentIndex + 1].id}`);
            } else {
              navigate(`/modules/${moduleId}`);
            }
          }}
        >
          {module.sections.findIndex(s => s.id === sectionId) === module.sections.length - 1
            ? 'Back to Module'
            : 'Next Section'}
        </Button>
      </div>
    </div>
  );
}
