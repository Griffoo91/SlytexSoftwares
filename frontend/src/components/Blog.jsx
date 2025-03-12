import React, { useState, useEffect } from 'react';
import { SearchIcon, Calendar, User, Clock } from "lucide-react";

const Blog = () => {
  // State for blog posts and categories
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Simulated data - replace with actual API calls
  useEffect(() => {
    // Mock data for demonstration - replace with your API fetch logic
    const fetchData = async () => {
      // Simulate API response delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const mockPosts = [
        {
          id: 1,
          title: 'Getting Started with React',
          excerpt: 'Learn the basics of React and how to create your first component.',
          category: 'React',
          date: 'February 25, 2025',
          author: 'Geoffrey Ochieng',
          image: '/api/placeholder/800/500',
          readTime: '5 min read'
        },
        {
          id: 2,
          title: 'Advanced CSS Techniques',
          excerpt: 'Explore modern CSS techniques to create responsive layouts.',
          category: 'CSS',
          date: 'February 20, 2025',
          author: 'John Okello',
          image: '/api/placeholder/800/500',
          readTime: '8 min read'
        },
        {
          id: 3,
          title: 'JavaScript Best Practices',
          excerpt: 'Learn how to write clean, maintainable JavaScript code.',
          category: 'JavaScript',
          date: 'February 15, 2025',
          author: 'Alex Otieno',
          image: '/api/placeholder/800/500',
          readTime: '6 min read'
        },
        {
          id: 4,
          title: 'Building RESTful APIs',
          excerpt: 'A comprehensive guide to building RESTful APIs with Node.js.',
          category: 'Backend',
          date: 'February 10, 2025',
          author: 'Sarah Nyaboke',
          image: '/api/placeholder/800/500',
          readTime: '10 min read'
        },
        {
          id: 5,
          title: 'Introduction to Next.js',
          excerpt: 'Discover why Next.js is becoming the go-to framework for React applications.',
          category: 'React',
          date: 'February 5, 2025',
          author: 'Mike Ali',
          image: '/api/placeholder/800/500',
          readTime: '7 min read'
        },
        {
          id: 6,
          title: 'Mastering Redux',
          excerpt: 'Take your state management skills to the next level with Redux.',
          category: 'React',
          date: 'January 30, 2025',
          author: 'Elizabeth Nyabura',
          image: '/api/placeholder/800/500',
          readTime: '9 min read'
        },
        {
          id: 7,
          title: 'TypeScript Fundamentals',
          excerpt: 'Learn how TypeScript can improve your JavaScript development experience.',
          category: 'JavaScript',
          date: 'January 25, 2025',
          author: 'Tom Kamau',
          image: '/api/placeholder/800/500',
          readTime: '8 min read'
        },
        {
          id: 8,
          title: 'Responsive Web Design Principles',
          excerpt: 'Essential principles for creating websites that work on any device.',
          category: 'CSS',
          date: 'January 20, 2025',
          author: 'Emmaculate Njambi',
          image: '/api/placeholder/800/500',
          readTime: '6 min read'
        }
      ];
      
      setPosts(mockPosts);
      
      // Extract unique categories
      const uniqueCategories = [...new Set(mockPosts.map(post => post.category))];
      setCategories(uniqueCategories);
    };
    
    fetchData();
  }, []);

  // Filter posts based on category and search term
  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Blur & Dark Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-fixed brightness-50 backdrop-blur-lg"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="bg-neutral-900 text-blue-500 rounded-full h-6 text-sm font-medium px-3 py-1 uppercase tracking-wide">
            Our Blog
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 tracking-wide text-white">
            Insights on 
            <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
              {" "}web development & design
            </span>
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto mt-6">
            Explore our latest articles, tutorials, and insights on development, design, and emerging technologies.
          </p>
        </div>

        {/* Filters Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="w-full md:w-auto">
            <div className="flex flex-wrap gap-3">
              <button 
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 border ${
                  selectedCategory === 'all' 
                    ? 'bg-blue-600 text-white border-blue-800' 
                    : 'bg-white bg-opacity-10 backdrop-blur-sm text-white border-neutral-700 hover:bg-opacity-20'
                }`}
                onClick={() => setSelectedCategory('all')}
              >
                All Topics
              </button>
              {categories.map(category => (
                <button 
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 border ${
                    selectedCategory === category 
                      ? 'bg-blue-600 text-white border-blue-800' 
                      : 'bg-white bg-opacity-10 backdrop-blur-sm text-white border-neutral-700 hover:bg-opacity-20'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full md:w-64 relative">
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full px-4 py-2 pl-10 bg-white bg-opacity-10 backdrop-blur-sm border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon className="absolute left-3 top-2.5 h-4 w-4 text-neutral-400" />
          </div>
        </div>

        {/* Blog Posts Grid */}
        {currentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map(post => (
              <div key={post.id} className="bg-white bg-opacity-10 backdrop-blur-lg border border-neutral-700 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-105">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-blue-900 bg-opacity-50 border border-neutral-700 text-blue-400 text-xs font-medium px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-neutral-400 text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white hover:text-blue-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-neutral-300 mb-4 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-neutral-700">
                    <div className="flex items-center text-neutral-400 text-xs">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-neutral-400 text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white bg-opacity-5 backdrop-blur-lg border border-neutral-700 rounded-2xl">
            <p className="text-xl text-neutral-300">No posts found. Try a different search or category.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                  currentPage === 1 
                    ? 'bg-white bg-opacity-5 text-neutral-500 cursor-not-allowed' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                <button
                  key={number}
                  className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                    currentPage === number 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white bg-opacity-10 backdrop-blur-sm text-white hover:bg-opacity-20'
                  }`}
                  onClick={() => handlePageChange(number)}
                >
                  {number}
                </button>
              ))}
              
              <button
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                  currentPage === totalPages 
                    ? 'bg-white bg-opacity-5 text-neutral-500 cursor-not-allowed' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;