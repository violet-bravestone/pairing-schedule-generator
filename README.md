## Pairing Schedule and Friday Group Project groups generator

This is a CLI tool which takes an array of names, and can output 2 things:
- A Mon-Thurs pair programming schedule for weeks 1-6 as a markdown file (inc Friday on week 1). The Tāmaki team uses that markdown in our cohort wiki.
- A schedule of Friday Group Project groups for weeks 2-5 and Final group project. This is used as a draft which gets tweaked where necessary. Exports to json, md and csv formats.


# To install
- To use the tool, just clone this repo. There are no NPM packages to install.
- If you're going to be doing any maintenance/features on the tool, you need to `npm i` to get linting and testing support.

# To use

## Initial setup

- Update the `students` array in the `data.js` file with your cohort's names.
- Update the `cohort` variable in the `data.js` file with the current cohort name.
- If you're using the Friday Groups functionality, you can set the minimum group size in the `minGroupSize` variable in the `data.js` also.
- If there's an uneven number of students, the app will include a placeholder called "G-g-ghost!". Feel free to update the `prepArrays` function in the `index.js` file if you'd prefer something less obnoxious.


## Generating lists

From the terminal run: `node index.js`

## Output

- Files are output to the `output` folder and include the cohort name in the file name.
- Pairing schedule outputs to an `md`
- Projects groups outputs to `md`, `json` & `csv`


# Feedback
- Hit me (Jared) up if you have any feedback or suggestions!

