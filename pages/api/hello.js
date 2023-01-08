// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const url = `https://tweetpik.com/api/tweets/1611034662301995010`;

export default async function handler(req, res) {

  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAIBflAEAAAAAYTW622gMMOb3NpPkX%2BAZ0GElVV4%3DRdOhvNcTlXF995XL2Opg8OaoKFvzRXZThv1PaDDhhkrWm0qpqv");
  myHeaders.append("Cookie", "guest_id=v1%3A167318115771457098; guest_id_ads=v1%3A167318115771457098; guest_id_marketing=v1%3A167318115771457098; personalization_id=\"v1_c6lPApx6vNXlPlddzz6J4Q==\"");

  var requestOptions = {
    method: 'GET', 
    headers: myHeaders,
    redirect: 'follow'
  };

  const result = await fetch(`https://api.twitter.com/1.1/statuses/show/${req.body.id}.json`, requestOptions)
    const data = await result.json();
  res.status(200).json(data);
}
