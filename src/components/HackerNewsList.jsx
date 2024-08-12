import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import HackerNewsItem from './HackerNewsItem';
import HackerNewsItemSkeleton from './HackerNewsItemSkeleton';

const fetchHackerNewsStories = async (searchTerm = '') => {
  const response = await fetch(`https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=100&query=${searchTerm}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const HackerNewsList = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['hackerNewsStories', searchTerm],
    queryFn: () => fetchHackerNewsStories(searchTerm),
  });

  const handleSearch = (e) => {
    e.preventDefault();
    refetch();
  };

  if (error) {
    return <div className="text-center text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Hacker News Top Stories</h1>
      <form onSubmit={handleSearch} className="mb-8 flex gap-2">
        <Input
          type="text"
          placeholder="Search stories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </form>
      <div className="space-y-4">
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <HackerNewsItemSkeleton key={index} />
            ))
          : data?.hits.map((story) => (
              <HackerNewsItem key={story.objectID} story={story} />
            ))}
      </div>
    </div>
  );
};

export default HackerNewsList;