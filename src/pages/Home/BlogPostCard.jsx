import arrow from "../../../public/images/blog-posts/arrow-right.png";

const BlogPostCard = ({ product }) => {
  const { id, image, name, description, postedAt } = product;
  return (
    <div className="card w-72 " key={id}>
      <img className=" m-auto" src={image} alt="Logo" />
      <div className="px-1.5 pb-4 m-auto bg-softBackground w-64 ">
        <h3 className="mb-1 text-center text-[14px] text">{name}</h3>
      </div>
    </div>
  );
};

export default BlogPostCard;
