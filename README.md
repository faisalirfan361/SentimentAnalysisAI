# Sentiment Analysis AI
Sentiment Analysis using node JS, natural, apos-to-lex-form, stopword, spelling-corrector

## How to run:

simply run following commands:

`yarn`

`yarn dev`

then you should be able to hit to following apis:

**"localhost:4000/v1/health" (GET)**

this should return 200 (OK)

** "localhost:4000/v1/sentiment" (POST) **

`
{
    "data": "this is very nice"
}
`

should return following:

`{
    "sentiment": 1
}`
