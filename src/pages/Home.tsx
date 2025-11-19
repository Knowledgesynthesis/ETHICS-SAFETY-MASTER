import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { allModules } from '../data';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Ethics & Safety Master
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Master bioethics, medical ethics, and patient safety for USMLE Step 3 and clinical practice
        </p>
        <p className="text-sm text-muted-foreground">
          Interactive, case-based learning with immediate feedback
        </p>
      </div>

      {/* Module Grid */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Learning Modules</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {allModules.map((module) => (
            <Link key={module.id} to={`/modules/${module.id}`} className="block">
              <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{module.icon}</span>
                    <div className="flex-1 space-y-1">
                      <CardTitle className="text-lg">{module.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {module.summary}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    {module.sections.length} sections
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid gap-4 md:grid-cols-2">
        <Link to="/cases">
          <Card className="transition-all hover:shadow-md hover:border-primary/50">
            <CardHeader>
              <CardTitle className="text-lg">Practice Cases</CardTitle>
              <CardDescription>
                Work through clinical vignettes with immediate feedback
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link to="/reference">
          <Card className="transition-all hover:shadow-md hover:border-primary/50">
            <CardHeader>
              <CardTitle className="text-lg">Quick Reference</CardTitle>
              <CardDescription>
                Cheat sheets and tables for rapid review
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>

      {/* Disclaimer */}
      <div className="text-center text-xs text-muted-foreground max-w-3xl mx-auto p-4 border border-border rounded-lg">
        <p>
          <strong>Educational purposes only.</strong> This app does not provide medical or legal advice.
          Content is designed for USMLE Step 3 preparation and is not a substitute for clinical judgment.
          No personal data is collected or stored.
        </p>
      </div>
    </div>
  );
}
