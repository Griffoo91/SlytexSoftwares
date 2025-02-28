import React, { useState, useEffect } from 'react';

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
          author: 'Jane Doe',
          image: '/api/placeholder/800/500',
          readTime: '5 min read'
        },
        {
          id: 2,
          title: 'Advanced CSS Techniques',
          excerpt: 'Explore modern CSS techniques to create responsive layouts.',
          category: 'CSS',
          date: 'February 20, 2025',
          author: 'John Smith',
          image: '/api/placeholder/800/500',
          readTime: '8 min read'
        },
        {
          id: 3,
          title: 'JavaScript Best Practices',
          excerpt: 'Learn how to write clean, maintainable JavaScript code.',
          category: 'JavaScript',
          date: 'February 15, 2025',
          author: 'Alex Johnson',
          image: '/api/placeholder/800/500',
          readTime: '6 min read'
        },
        {
          id: 4,
          title: 'Building RESTful APIs',
          excerpt: 'A comprehensive guide to building RESTful APIs with Node.js.',
          category: 'Backend',
          date: 'February 10, 2025',
          author: 'Sarah Williams',
          image: '/api/placeholder/800/500',
          readTime: '10 min read'
        },
        {
          id: 5,
          title: 'Introduction to Next.js',
          excerpt: 'Discover why Next.js is becoming the go-to framework for React applications.',
          category: 'React',
          date: 'February 5, 2025',
          author: 'Mike Brown',
          image: '/api/placeholder/800/500',
          readTime: '7 min read'
        },
        {
          id: 6,
          title: 'Mastering Redux',
          excerpt: 'Take your state management skills to the next level with Redux.',
          category: 'React',
          date: 'January 30, 2025',
          author: 'Lisa Chen',
          image: '/api/placeholder/800/500',
          readTime: '9 min read'
        },
        {
          id: 7,
          title: 'TypeScript Fundamentals',
          excerpt: 'Learn how TypeScript can improve your JavaScript development experience.',
          category: 'JavaScript',
          date: 'January 25, 2025',
          author: 'Tom Wilson',
          image: '/api/placeholder/800/500',
          readTime: '8 min read'
        },
        {
          id: 8,
          title: 'Responsive Web Design Principles',
          excerpt: 'Essential principles for creating websites that work on any device.',
          category: 'CSS',
          date: 'January 20, 2025',
          author: 'Emma Davis',
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
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our latest articles, tutorials, and insights on web development, design, and technology.
        </p>
      </div>

      {/* Filters Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div className="mb-4 md:mb-0">
          <ul className="flex flex-wrap gap-2">
            <li 
              className={`px-4 py-2 rounded-full cursor-pointer ${selectedCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              onClick={() => setSelectedCategory('all')}
            >
              All
            </li>
            {categories.map(category => (
              <li 
                key={category}
                className={`px-4 py-2 rounded-full cursor-pointer ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-64">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full px-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Blog Posts Grid */}
      {currentPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-blue-600 font-semibold">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-2 hover:text-blue-600">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No posts found. Try a different search or category.</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <button
              className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-blue-600 text-white'}`}
              onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
              <button
                key={number}
                className={`px-4 py-2 rounded ${currentPage === number ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                onClick={() => handlePageChange(number)}
              >
                {number}
              </button>
            ))}
            
            <button
              className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-blue-600 text-white'}`}
              onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;