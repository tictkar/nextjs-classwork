import Link from "next/link";

const Product = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  const resJson = await res.json();
  console.log(resJson);

  return (
    <>
      {resJson.posts.map((data) => {
        return (
          <>
            <div className="gap-10 flex flex-col border">
              <Link href={`/product/${data.id}`}>
                <div className="p-10">
                  <h1>{data.title}</h1>
                  <h2>{data.body}</h2>
                </div>
              </Link>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Product;
