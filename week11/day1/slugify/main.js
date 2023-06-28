const slugify = require('slugify');

const title = 'My Awesome Blog Post';
const slug = slugify(title, { lower: true });

console.log(slug); // Output: my-awesome-blog-post

