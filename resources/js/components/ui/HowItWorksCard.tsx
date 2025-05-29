import * as React from "react";
import { Card, CardContent, CardTitle, CardDescription } from "./card";

interface HowItWorksCardProps {
  title: string;
  description: string;
}

export function HowItWorksCard({ title, description }: HowItWorksCardProps) {
  return (
    <Card className="rounded-lg shadow-sm">
      <CardContent>
        <CardTitle className="text-center text-gray-900 dark:text-white">{title}</CardTitle>
        <CardDescription className="text-center text-sm text-gray-700 dark:text-gray-300">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
