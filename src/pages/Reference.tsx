import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { referenceData } from '../data';

export default function Reference() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(referenceData.map(r => r.category)))];
  const filteredData = selectedCategory === 'all'
    ? referenceData
    : referenceData.filter(r => r.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Quick Reference</h1>
        <p className="text-muted-foreground">
          Cheat sheets and tables for rapid review
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(category)}
          >
            {category === 'all' ? 'All' : category}
          </Button>
        ))}
      </div>

      {/* Reference Tables */}
      <div className="space-y-6">
        {filteredData.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <div className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-primary mt-1" />
                <div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{item.content}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {item.rows && item.rows.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="border-b">
                      <tr>
                        <th className="text-left p-3 font-semibold">Concept</th>
                        <th className="text-left p-3 font-semibold">Definition</th>
                        {item.rows.some(r => r.examPattern) && (
                          <th className="text-left p-3 font-semibold">Exam Pattern</th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {item.rows.map((row, idx) => (
                        <tr key={idx} className="border-b last:border-0 hover:bg-accent/50">
                          <td className="p-3 font-medium align-top">{row.term}</td>
                          <td className="p-3 align-top">{row.definition}</td>
                          {row.examPattern && (
                            <td className="p-3 text-muted-foreground align-top">{row.examPattern}</td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-muted-foreground">No data available</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No reference items found in this category</p>
        </div>
      )}
    </div>
  );
}
