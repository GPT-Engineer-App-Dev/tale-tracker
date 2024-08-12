import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HackerNewsItem = ({ story }) => {
  return (
    <Card className="border-hnblue-200 shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-2 text-hnblue-800">{story.title}</h2>
        <p className="text-sm text-hnblue-600">
          By {story.author} | {story.points} points | {story.num_comments} comments
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="border-hnblue-500 text-hnblue-700 hover:bg-hnblue-50">
          <a href={story.url} target="_blank" rel="noopener noreferrer">
            Read More <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HackerNewsItem;