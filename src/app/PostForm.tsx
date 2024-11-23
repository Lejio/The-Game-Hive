import { useState } from "react";

export default function PostForm() {
  const [formData, setFormData] = useState({
    user: "",
    postTitle: "",
    postDate: "",
    tags: "",
    postContent: "",
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Format tags into an array
    const formattedTags = formData.tags.split(",").map(tag => tag.trim());

    // Send data to API
    const response = await fetch("/api/create-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        tags: formattedTags,
        postDate: new Date(formData.postDate), // Convert to Date object
      }),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Post created successfully!");
    } else {
      console.error(data);
      alert("Failed to create post.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>User:</label>
        <input
          type="text"
          name="user"
          value={formData.user}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Post Title:</label>
        <input
          type="text"
          name="postTitle"
          value={formData.postTitle}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Post Date:</label>
        <input
          type="date"
          name="postDate"
          value={formData.postDate}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Tags (comma-separated):</label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Post Content:</label>
        <textarea
          name="postContent"
          value={formData.postContent}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
}
