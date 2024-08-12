import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HackerNewsItem = ({ story }) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
        <p className="text-sm text-gray-500">
          By {story.author} | {story.points} points | {story.num_comments} comments
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline">
          <a href={story.url} target="_blank" rel="noopener noreferrer">
            Read More <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HackerNewsItem;