import Head from 'next/head'
import SpacexPosts from '../components/spacexPosts'
import { useQuery } from '@apollo/client'
import { GET_LAUNCHES } from '../graphql/queries'

export default function Home() {
  const {loading,error,data} = useQuery(GET_LAUNCHES);
  if (loading) {
    return "loading";
  }
  if (error) {
    return "error";
  }
  const launches = data.launchesPast.filter(
    (launch) => launch.links.flickr_images.length > 0 && launch.details
  );
  return (
    <>
      <Head>
        <title>SpaceX | Posts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className='text-center p-5 font-weight-bold'>SpaceX Posts</h2>
      <div className="posts-wrapper text-center">
        <SpacexPosts launches={launches}/>
      </div>

    </>
    
  )
}
