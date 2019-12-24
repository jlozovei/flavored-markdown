# Flavored Markdown

Markdown in-browser editor with flavors :icecream:  
See it in action at [jlozovei.github.io/flavored-markdown](https://jlozovei.github.io/flavored-markdown).


## :scroll: About
A live markdown editor to create nice looking `.md` files.

The project was created with [vue-cli](https://cli.vuejs.org/). Written in [Vue](https://vuejs.org/), it uses [vuex](https://vuex.vuejs.org/) as state manager. To parse/render the markdown, using [marked](https://github.com/markedjs/marked) with [emoji-js](https://github.com/iamcal/js-emoji).

Using [yarn](https://yarnpkg.com/) as the package manager.

You can switch the rendered HTML's style between:
- Azure Markdown Style: [Guide](https://docs.microsoft.com/en-us/azure/devops/project/wiki/markdown-guidance)
- Bitbucket Markdown Style: [Guide](https://confluence.atlassian.com/bitbucketserver/markdown-syntax-guide-776639995.html)
- GitHub Markdown Style: [Guide](https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax) | [Style](https://primer.style/css/components/markdown)
- GitLab Markdown Style: [Guide](https://about.gitlab.com/handbook/product/technical-writing/markdown-guide/) | [User Docs](https://docs.gitlab.com/ee/user/markdown.html)


### :sparkles: Related
Here are other cool live markdown editors:

- [jbt/markdown-editor](https://github.com/jbt/markdown-editor)
- [liyasthomas/marcdown](https://github.com/liyasthomas/marcdown)
- [benweet/stackedit](https://github.com/benweet/stackedit)

And some nice markdown editors:

- [marktext](https://github.com/marktext/marktext) (open-source)
- [Bear](https://bear.app/) (MacOS only)


## :pencil: Contributing
You can contribute to this project following the steps below:

- Fork the repo
- Create a new branch
- Do the work
- Fill a PR, assign it to you and, if possible, write a cool description
- Wait for the review


## :computer: Developing
After forking and cloning the project in your local environment, run the following commands:

```bash
# install dependencies
yarn
# or npm i

# run the project at localhost:8000
yarn start
# or npm start
```


## :clipboard: Todo
- [ ] Test cases (?)
- [ ] Contributing.md
- [ ] Add CI


## :closed_lock_with_key: License

Licensed under the [MIT License](https://github.com/jlozovei/flavored-markdown/blob/master/LICENSE).
