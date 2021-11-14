import axios from "axios";

export async function getComments(url: string) {
  const endpoint: string =
    "https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.commentThreads.list?part=snippet,replies&videoId=wtLJPvx7-ys";
  console.log(process.env);
  const res = await axios({
    method: "get",
    url: endpoint,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
  });

  console.log(res);
}
