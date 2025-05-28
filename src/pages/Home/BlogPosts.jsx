import Container from "../../components/Container";
import data from "../../data/blog.posts.json";
import BlogPostCard from "./BlogPostCard";

const BlogPosts = () => {
  return (
    <Container classes="pt-[136px]">
      <h2 className="text-center font-bold text-[32px] uppercase text-textPrimary mb-2">
        Foydali Havolalar
      </h2>
     

      <div className="grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 md:ml-2 sm:ml-4 gap-10 mb-24">
        {data.map((product) => (
          <BlogPostCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default BlogPosts;
