let Feed = require('rss-in-json');

let address = 'https://sspai.com/feed'
export function parseData() {
  return Feed.convert(address)
}

// 获取标题
export async function getRssTitle(address:Array<string>) {
  let res:Array<string> = []
  for(let i = 0; i < address.length; i++) {
    let title:string = await Feed.convert(address[i]).then(res => {
      console.log(res)
      return {
        title: res.title,
        description: res.description,
        image: res.image,
        url: res.url
      }
    })
    res.push(title)
  }
  return res
} 