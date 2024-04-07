//@ts-ignore
import aposToLexForm from "apos-to-lex-form";
import { WordTokenizer, SentimentAnalyzer, PorterStemmer } from "natural";
//@ts-ignore 
import SpellCorrector from "spelling-corrector";
import * as stopword from "stopword";

const tokenizer = new WordTokenizer();
const spellCorrector = new SpellCorrector();
spellCorrector.loadDictionary();

const analyzer = new SentimentAnalyzer('English', PorterStemmer, "afinn");

function getSentiment(str: string): -1 | 0 | 1 {
    if (!str.trim())
        return 0;

    const lexed = aposToLexForm(str).toLowerCase().replace(/[^a-zA-Z\s]+/g, "");

    const tokenized = tokenizer.tokenize(lexed);

    let fixedSpelling = tokenized?.map((word) => spellCorrector.correct(word));
    
    if (!fixedSpelling)
        fixedSpelling = [];

    const stopWordRemoved = stopword.removeStopwords(fixedSpelling);

    const analyzed = analyzer.getSentiment(stopWordRemoved);

    return analyzed >= 1 ? 1 : (analyzed === 0 ? 0 : -1);
}

export default getSentiment;