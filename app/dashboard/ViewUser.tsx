import type { User } from "../types/user";

export default function ViewUser({
  user,
}: {
  user: User;
}) {
  return (
    <div
  className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800"
  style={{ minHeight: "400px" }}
>
  <div className="flex flex-col md:flex-row sm:items-start justify-between pb-3 mb-4 border-b border-gray-200 dark:border-gray-700">
    <div className="flex items-center gap-4 mb-2 sm:mb-0">
      <img
        src={user.avatar_url}
        alt={`${user.name || user.login}'s avatar`}
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
          {user.name || user.login}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">@{user.login}</p>
      </div>
    </div>

    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 dark:text-gray-400 mt-1">
      <div className="flex items-center gap-1">
        <span className="font-semibold text-gray-700 dark:text-gray-300">Joined:</span>
        {new Date(user.created_at).toLocaleDateString()}
      </div>

      <div className="flex items-center gap-1">
        <span className="font-semibold text-gray-700 dark:text-gray-300">Updated:</span>
        {new Date(user.updated_at).toLocaleDateString()}
      </div>
    </div>
  </div>

  <p className="text-base text-gray-700 dark:text-gray-300 mb-6">
    {user.bio || "No bio provided."}
  </p>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
    
    <div className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition duration-300 hover:shadow-lg">
      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Public Repos</span>
      <span className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 mt-1">
        {user.public_repos}
      </span>
    </div>

    <div className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition duration-300 hover:shadow-lg">
      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Followers</span>
      <span className="text-3xl font-extrabold text-yellow-600 dark:text-yellow-400 mt-1">
        {user.followers}
      </span>
    </div>

    <div className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition duration-300 hover:shadow-lg">
      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Following</span>
      <span className="text-3xl font-extrabold text-green-600 dark:text-green-400 mt-1">
        {user.following}
      </span>
    </div>

    <div className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition duration-300 hover:shadow-lg">
      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Public Gists</span>
      <span className="text-3xl font-extrabold text-pink-600 dark:text-pink-400 mt-1">
        {user.public_gists}
      </span>
    </div>

    {user.location && (
      <div className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition duration-300 hover:shadow-lg">
        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Location</span>
        <span className="text-xl font-bold text-teal-600 dark:text-teal-400 mt-1 text-center">
          {user.location}
        </span>
      </div>
    )}

    {user.company && (
      <div className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition duration-300 hover:shadow-lg">
        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Company</span>
        <span className="text-xl font-bold text-purple-600 dark:text-purple-400 mt-1 text-center">
          {user.company}
        </span>
      </div>
    )}

  </div>

  <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-gray-200 dark:border-gray-700">
    {user.blog && (
      <a
        href={user.blog}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1"
      >
        Website
      </a>
    )}

    <a
      href={user.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1"
    >
      View Profile
    </a>
  </div>
</div>
  );
}