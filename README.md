# wordlist2anki - Fetch meanings and export Word List to Anki

Reads a text file with list of words, fetches their meaning from the Oxford Dictionaries API and creates an Anki APKG file which can be imported in Anki app for spaced repetition of the words.

## Prerequisites

You will need two environmental variables defined before running this script

`~/.bash_profile`

```bash
export OXFORD_DICTIONARIES_APP_ID=app_id
export OXFORD_DICTIONARIES_APP_KEY=app_key
```

These keys are obtained from a developer account at [Oxford Dictionaries API](https://developer.oxforddictionaries.com/)

## Populate words

Update the `src/wordlist.txt` file with the words needed

## Running the script

On console

```bash
node src/index.js
```

As a text file

```bash
node src/make-file.js
```

As APKG file for Anki

```bash
node src/make-anki.js
```
