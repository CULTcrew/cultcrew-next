import React from 'react';
import { client } from './lib/client';
import Hero from './hero/Hero';
import CookiesPopup from '../app/components/cookies/CookiesPopup';

export const revalidate = 60;

export default async function Home() {
  const homeData = await getHomeData();


  if (!homeData) {
    return <div>Error: No data available</div>;
  }

  return (
    <main>
      <CookiesPopup />
      <Hero data={homeData} />
    </main>
  );
}

// Function to fetch data from Sanity
async function getHomeData() {
  const query = `*[ _type == "home" ]{
    _id,
    title,
    subtitle,
    button,
    Image{
      asset->{
        _id,
        url
      }
    },
    services{
      _id,
      title,
      subtitle,
      cards[]->{
        _id,
        title,
        subtitle,
        Image{
          asset->{
            _id,
            url
          }
        },
        slug
      }
    },
    about{
      text,
      Image{
        asset->{
          _id,
          url
        }
      },
      button
    },
    feedback{
      title,
      subtitle,
      fbCards[]{
        _id,
        name,
        company,
        text,
      }
    },
    news{
      title,
      subtitle,
      posts[]->{
        _id,
        title,
        subtitle,
        image{
          asset->{
            _id,
            url
          }
        },
        slug,
        body,
      }
    },
    callToAction[]{
      _id,
      title,
      subtitle,
      button,
      link
    }
    
  }`;

  try {
    const data = await client.fetch(query);
    return data[0] || null; 
  } catch (err) {
    console.error("Error fetching data:", err);
    return null;
  }
}