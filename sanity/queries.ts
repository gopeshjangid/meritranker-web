// Initial query to fetch the first batch of posts
export const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
] | order(_createdAt desc) [0...9] {
  _id, 
  title, 
  slug, 
  _createdAt, 
  image, 
  excerpt,
  tags,
  category[]->{
    _id,
    title
  }
}`;

// Query to fetch paginated posts after a specific ID and creation time
export const PAGINATED_POSTS_QUERY = `*[
  _type == "post" && defined(slug.current) && 
  (_createdAt < $lastCreatedAt || (_createdAt == $lastCreatedAt && _id > $lastId))
] | order(_createdAt desc) [0...6] {
  _id, 
  title, 
  slug, 
  _createdAt, 
  image, 
  excerpt,
  tags,
  category[]->{
    _id,
    title
  }
}`;

// Query to fetch a single post by slug
export const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  _createdAt,
  image,
  excerpt,
  tags,
  body,
  category[]->{
    _id,
    title
  },
  'relatedPosts': *[
    _type == "post" && references(^.category[0]._ref) && slug.current != ^.slug.current
  ][0...3] {
    _id,
    title,
    slug,
    image,
    excerpt,
    _createdAt,
  category[]->{
    _id,
    title
  }
  }
}`;

// Query to fetch all categories
export const CATEGORIES_QUERY = `*[_type == "category"] {
  _id,
  title,
  slug
}`;

//latest 2 posts
export const LATEST_POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(_createdAt desc) [0...3] {
  _id, 
  title, 
  slug,
  image
}`;

// Query to fetch posts by category slug
export const CATEGORY_POSTS_QUERY = `*[
  _type == "post" && references(*[_type == "category" && slug.current == $slug]._id)
] | order(_createdAt desc) [0...9] {
  _id, 
  title, 
  slug, 
  _createdAt, 
  image, 
  excerpt,
  tags,
  category[]->{
    _id,
    title
  }
}`;

//Query to fetch all posts for sitemap slug, createdAt, and updatedAt
export const POSTS_FOR_SITEMAP_QUERY = `*[_type == "post" && defined(slug.current)] {
  slug, 
  _createdAt, 
  _updatedAt
}`;
