// https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Uriel_Hedz
import React, { useEffect, useState } from 'react'
import MediumPost from './mediumPost'
import Posts from './posts'

export default () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const data = sessionStorage.getItem("posts")
    if (data) {
      setPosts(JSON.parse(data))
    }
    let myPosts

    async function getMediumPosts() {
      const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Uriel_Hedz")
      myPosts = await response.json()
      sessionStorage.setItem("posts", JSON.stringify(myPosts.items))

      setPosts(myPosts.items)
    }
    getMediumPosts()
  }, [])

  return (
    <section>
      <div className="p-12">
        <h2 className="text-3xl font-bold text-center text-orange-400">Mis publicaciones en Medium</h2>
        <div className="max-w-4xl mx-auto overflow-x-scrollTTT">
          <Posts
            data={posts}
            card={MediumPost}
            titleToggle={false}
          />
        </div>
      </div>
    </section>
  )
}