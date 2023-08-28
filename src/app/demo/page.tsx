
import axios from "axios"
import stringify from "json-stringify-safe"
import { Metadata } from "next";
import { ImageResponse } from 'next/server'


export const metadata: Metadata = {
  title: 'Demo Metadata',
  description: 'Decription demo metadata',
  appleWebApp: false,
  applicationName: 'Demo',
  authors: [{ url: 'https://www.google.com', name: 'Minh Giang' }],
  keywords: 'Demo',
  themeColor: '#000000',
  openGraph: {
    title: 'Demo Metadata',
    description: 'Decription demo metadata',
    images: "@/public/anh-icon.jpg"
  }
}

export default async function Demo() {

  var data = await axios.get("https://jsonplaceholder.typicode.com/posts")

  return (
    <div >
      {/* {data.data.map((v: any) => v.title)} */}
      <pre>
        <code >

          {/* {stringify(data, null, 2)} */}
        </code>

      </pre>
    </div>
  )
}
