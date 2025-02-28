import React, {useState,useEffect} from 'react'
import { Service } from '../appwrite/config'
import { Container, PostCard } from '../components'

function AllPost() {

    conts [posts, setPosts] = useState([])
    useEffect(()=>{

    },[])

    Service.getPosts([]).then((posts)=> {
        if(posts){
            setPosts(posts.documents)
        }
    })

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
            {posts.map((post)=>(
                <div key={post.$id} className='p-4 w-1/4'>
                    <PostCard post={post}/>
                </div>
            ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost
