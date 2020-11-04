// 获取文章信息
// 以下通过少数派提供的链接做验证

let rssData = `
<rss>
  <channel>
    <title>少数派</title>
    <link>https://sspai.com</link>
    <description>少数派的简介</description>
    <language>zh_CN</language>
    <managingEditor>contact@sspai.com (少数派)</managingEditor>
    <pubDate>Wed, 04 Nov 2020 14:01:32 +0800</pubDate>
    <item>
      <title>手表</title>
      <link>https://sspai.com/post/63433</link>
      <description>手表的简介</description>
      <author>M00Nface</author>
      <pubData>Mon, 28 Sep 2020 12:11:58 GMT</pubData>
    </item>
    <item>
      <title>手表</title>
      <link>https://sspai.com/post/63433</link>
      <description>手表的简介</description>
      <author>M00Nface</author>
      <pubData>Mon, 28 Sep 2020 12:11:58 GMT</pubData>
    </item>
  </channel>
</rss>`

let address = 'https://sspai.com/feed'

function getArticle(address: string):String {
  // 获取地址中的数据
  // fetch(address).then(res=>{
  //   console.log(res)
  // })

  return rssData
}

getArticle(address)

function parseData(){
  let res = '{'
  
}