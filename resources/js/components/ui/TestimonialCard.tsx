import * as React from "react";
import { Card, CardContent, CardDescription, CardFooter } from "./card";

interface TestimonialCardProps {
  testimonial: string;
  author: string;
}

export function TestimonialCard({ testimonial, author }: TestimonialCardProps) {
  return (
    <Card className="rounded-lg shadow-sm">
      <CardContent>
        <CardDescription className="mb-4 italic text-gray-700 dark:text-gray-300">
          "{testimonial}"
        </CardDescription>
        <CardFooter>
          <p className="text-sm font-medium text-gray-900 dark:text-white">- {author}</p>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
