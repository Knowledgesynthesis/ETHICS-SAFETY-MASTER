import { Sun, Moon, Monitor } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useThemeStore } from '../store/themeStore';
import type { Theme } from '../types';

export default function Settings() {
  const { theme, setTheme } = useThemeStore();

  const themeOptions: { value: Theme; label: string; icon: typeof Sun }[] = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Customize your experience
        </p>
      </div>

      {/* Theme Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>
            Choose between light, dark, or system theme
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-3">
            {themeOptions.map(({ value, label, icon: Icon }) => (
              <Button
                key={value}
                variant={theme === value ? 'primary' : 'outline'}
                className="flex flex-col gap-2 h-auto py-4"
                onClick={() => setTheme(value)}
              >
                <Icon className="h-6 w-6" />
                <span>{label}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* About */}
      <Card>
        <CardHeader>
          <CardTitle>About the App</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold">Ethics & Safety Master</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A comprehensive educational resource for mastering bioethics, medical ethics, and patient safety
              concepts tested on USMLE Step 3 and encountered in clinical practice.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Purpose</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This app provides interactive, case-based learning to help medical students and residents develop
              ethical reasoning skills and understand patient safety principles. All content is designed for
              USMLE Step 3 preparation and clinical decision-making.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Features</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• 9 comprehensive modules covering all major ethics and safety topics</li>
              <li>• Interactive case vignettes with immediate feedback</li>
              <li>• Quick reference tables for rapid review</li>
              <li>• Mobile-first design for learning on the go</li>
              <li>• Offline capability (no internet required after initial load)</li>
              <li>• No tracking or data collection</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimers */}
      <Card className="border-destructive/30">
        <CardHeader>
          <CardTitle className="text-destructive">Important Disclaimers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Educational Purposes Only</h4>
            <p className="text-muted-foreground leading-relaxed">
              This app is designed solely for educational purposes and USMLE Step 3 exam preparation.
              It does not provide medical advice, legal advice, or substitute for clinical judgment in
              actual patient care situations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Not a Substitute for Professional Guidance</h4>
            <p className="text-muted-foreground leading-relaxed">
              The content presented is conceptual and based on general principles tested on USMLE Step 3.
              Specific legal requirements, institutional policies, and state laws vary. Always consult
              appropriate resources, ethics committees, and legal counsel for real-world decisions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">No Jurisdiction-Specific Legal Advice</h4>
            <p className="text-muted-foreground leading-relaxed">
              Laws regarding consent, confidentiality, reporting, and other topics vary by jurisdiction.
              The app presents concepts in a U.S. context as commonly tested on USMLE Step 3, but does not
              provide jurisdiction-specific legal guidance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Privacy and Data</h4>
            <p className="text-muted-foreground leading-relaxed">
              This app does not collect, store, or transmit any personal data. There are no user accounts,
              no progress tracking, and no analytics. Your learning activity is completely private. Only your
              theme preference may be saved locally in your browser.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Content Accuracy</h4>
            <p className="text-muted-foreground leading-relaxed">
              While every effort has been made to ensure accuracy, medical ethics and safety practices evolve.
              Users should verify information with current guidelines and authoritative sources. The app creators
              are not liable for any decisions made based on the content.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Synthetic Cases</h4>
            <p className="text-muted-foreground leading-relaxed">
              All clinical vignettes are entirely fictional and synthetic. Any resemblance to actual patients,
              institutions, or events is coincidental. No real patient data or identifiable information is used.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Version Info */}
      <div className="text-center text-xs text-muted-foreground pt-4">
        <p>Ethics & Safety Master v0.1.0</p>
        <p className="mt-1">Built for USMLE Step 3 preparation</p>
      </div>
    </div>
  );
}
