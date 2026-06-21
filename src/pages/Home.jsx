import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto text-center py-12">
      <div className="mb-8">
        <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
          Learning + Humour
        </span>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-indigo-500 to-indigo-600 bg-clip-text text-transparent">
        MemeClassroom
      </h1>
      
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
        Where educational memes bridge the gap between textbook dry concepts and classroom laughter. 
        Collaborate with teachers, students, and subject experts.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <Link 
          to="/library" 
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg shadow-sm transition duration-200"
        >
          Browse Library
        </Link>
        {user ? (
          <Link 
            to="/lab" 
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium px-6 py-3 rounded-lg shadow-sm transition duration-200"
          >
            Go to Meme Lab
          </Link>
        ) : (
          <Link 
            to="/auth" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg shadow-sm transition duration-200"
          >
            Join Free
          </Link>
        )}
      </div>

      {/* Platform Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white dark:bg-gray-850 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm mb-12">
        <div>
          <div className="text-3xl font-bold text-purple-650">1,250+</div>
          <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Memes Created</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-purple-650">340+</div>
          <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Active Teachers</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-purple-650">85+</div>
          <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Verified Experts</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-purple-650">15+</div>
          <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Subjects Covered</div>
        </div>
      </div>

      {/* Feature Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        <div className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="text-purple-600 mb-4 text-2xl">🧪</div>
          <h3 className="font-semibold text-lg mb-2">Meme Lab</h3>
          <p className="text-sm text-gray-500">Create image, video, audio or GIF memes with text overlays.</p>
        </div>
        <div className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="text-purple-600 mb-4 text-2xl">📚</div>
          <h3 className="font-semibold text-lg mb-2">Meme Library</h3>
          <p className="text-sm text-gray-500">Explore, rate, like and comment on community-published memes.</p>
        </div>
        <div className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="text-purple-600 mb-4 text-2xl">🏫</div>
          <h3 className="font-semibold text-lg mb-2">Staffroom</h3>
          <p className="text-sm text-gray-500">Discuss classroom experiences, outcomes, and strategies.</p>
        </div>
        <div className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="text-purple-600 mb-4 text-2xl">📄</div>
          <h3 className="font-semibold text-lg mb-2">Resources</h3>
          <p className="text-sm text-gray-500">Access research, lesson plans, articles, and activities.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
