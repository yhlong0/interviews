# Restful API

GET, POST, UPDATE, DELETE

```
Sort: GET /companies?sort=rank_asc
Filtering: GET /companies?category=banking&location=india
Searching: GET /companies?search=Digital Mckiney
Pagination: GET /companies?page=23

```

# Rules

- Avoid using verbs in URIs
- Don't return plain text, using Content-Type: application/json
- Use plural resource nouns(articles, users and etc..)
- Return error details in the response body
```
{
  "error": "Invalid payload.",
  "detail": {
    "lastname": "This field is required."
  }
}
```
- Using Http Status code


| Status Code  | Content |
| ------------- | ------------- |
| 201 | Cresated |
| 204 | No Content |
| 3XX | Redirect |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 500 | server error |
| 503 | service unavailable |


Client Side checking http status code

```
axios.get('/foo')
  .catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  });
```


- Dont nest resources

Bad example:

```
GET: /authors/12/articles/
```

Good example:

```
GET: /articles/?author_id=12
```
How to write route in NodeJS Express
```
// GET /search?q=tobi+ferret
req.query.q
// => "tobi ferret"

// GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
req.query.order
// => "desc"

req.query.shoe.color
// => "blue"

req.query.shoe.type
// => "converse"

```

