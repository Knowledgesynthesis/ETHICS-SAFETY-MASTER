import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Brain } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { getModuleById } from '../data';

export default function ModuleOverview() {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const module = moduleId ? getModuleById(moduleId) : undefined;

  if (!module) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Module not found</p>
        <Button onClick={() => navigate('/')} className="mt-4">
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Back Button */}
      <Button variant="ghost" onClick={() => navigate('/')} className="gap-2">
        <ArrowLeft className="h-4 w-4" />
        Back to Modules
      </Button>

      {/* Module Header */}
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <span className="text-5xl">{module.icon}</span>
          <div className="flex-1">
            <h1 className="text-3xl font-bold tracking-tight">{module.title}</h1>
            <p className="text-lg text-muted-foreground mt-2">{module.summary}</p>
          </div>
        </div>
      </div>

      {/* Key Points */}
      {module.keyPoints && module.keyPoints.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Key Takeaways</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {module.keyPoints.map((point, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span className="text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Sections */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Sections</h2>
        <div className="space-y-3">
          {module.sections.map((section) => (
            <Link
              key={section.id}
              to={`/modules/${moduleId}/lesson/${section.id}`}
            >
              <Card className="transition-all hover:shadow-md hover:border-primary/50">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                    <div className="flex-1">
                      <CardTitle className="text-base">{section.title}</CardTitle>
                      {section.content && (
                        <CardDescription className="text-sm mt-1 line-clamp-2">
                          {section.content.substring(0, 150)}...
                        </CardDescription>
                      )}
                      <div className="flex gap-2 mt-2">
                        {section.pearls && section.pearls.length > 0 && (
                          <Badge variant="success" className="text-xs">
                            {section.pearls.length} Pearls
                          </Badge>
                        )}
                        {section.pitfalls && section.pitfalls.length > 0 && (
                          <Badge variant="destructive" className="text-xs">
                            {section.pitfalls.length} Pitfalls
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Quiz Button */}
      <Card className="bg-primary/5">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">Test Your Knowledge</CardTitle>
              <CardDescription>
                Take a quick quiz on this module (session-only, not tracked)
              </CardDescription>
            </div>
            <Link to={`/modules/${moduleId}/quiz`}>
              <Button className="gap-2">
                <Brain className="h-4 w-4" />
                Start Quiz
              </Button>
            </Link>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
