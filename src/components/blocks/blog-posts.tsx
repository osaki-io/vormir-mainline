import { useMemo, useState } from "react";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

const categories = ["All", "Engineering", "Strategy", "Case Study", "Product", "Operations"];

const BlogPosts = ({ posts }: { posts: any[] }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.data.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        post.data.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.data.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [posts, activeCategory, searchQuery]);

  return (
    <>
      {/* Header */}
      <section>
        <div className="container max-w-5xl">
          <h1 className="text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Blog
          </h1>
          <p className="text-muted-foreground mt-4 max-w-md leading-snug font-medium">
            Thoughts on engineering, strategy, and building products that last.
          </p>
        </div>
      </section>

      {/* Search + Filters */}
      <section className="container mt-10 max-w-5xl md:mt-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:max-w-xs">
            <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="container mt-10 max-w-5xl md:mt-14">
        {filteredPosts.length === 0 ? (
          <p className="text-muted-foreground py-20 text-center">
            No articles found.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <a
                key={post.id}
                href={`/blog/${post.id}/`}
                className="group"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                  <img
                    src={post.data.image || "/about/1.webp"}
                    alt={post.data.title}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  {post.data.category && (
                    <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                      {post.data.category}
                    </span>
                  )}
                  <h2 className="text-lg font-semibold leading-tight group-hover:opacity-75 transition-opacity">
                    {post.data.title}
                  </h2>
                  <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
                    {post.data.description}
                  </p>
                  <div className="flex items-center gap-2 pt-1 text-sm">
                    <span className="text-muted-foreground">
                      {post.data.authorName}
                    </span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground">
                      {new Date(post.data.pubDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export { BlogPosts };
