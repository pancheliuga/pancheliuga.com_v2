/** Returns all blog posts as a collection. */
const getAllPosts = collection => {
  const projects = collection.getFilteredByGlob('./src/posts/*.md');
  return projects.reverse();
};

/** Returns all projects as a collection. */
const getProjects = collection => {
  const projects = collection.getFilteredByGlob('./src/projects/*.md');
  return projects.reverse();
};

module.exports = {
  getAllPosts,
  getProjects
};
