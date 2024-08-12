import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const HackerNewsItemSkeleton = () => {
  return (
    <Card className="border-hnblue-200 shadow-md">
      <CardContent className="pt-6">
        <Skeleton className="h-6 w-3/4 mb-2 bg-hnblue-200" />
        <Skeleton className="h-4 w-1/2 bg-hnblue-100" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-10 w-28 bg-hnblue-200" />
      </CardFooter>
    </Card>
  );
};

export default HackerNewsItemSkeleton;