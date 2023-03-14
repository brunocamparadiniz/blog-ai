import { Configuration, OpenAIApi } from "openai"

export default async function handler(req, res) {
  const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
  const openai = new OpenAIApi(config)

  const { topic, keywords } = req.body

  const response = await openai.createCompletion({
    model:"text-davinci-003",
    temperature: 0,
    max_tokens: 3600,
    prompt: `write a text about ${topic}, according to these keywords: ${keywords}.
    The content should be be formatted in SEO-friendly HTML.
    The content must also include appropriated HTML title and meta description content.
    The return format must be stringified json in the following format:
    {
      "postContent": content here
      "postTitle": title here
      "postMetaDescription": meta description here
    }`,
  })

  console.log('response:', response);

  res.status(200).json({ post: JSON.parse(response.data.choices[0]?.text.split('\n').join('')) })
}