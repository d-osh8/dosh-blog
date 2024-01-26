+++
title = 'How to delete the contributor and its history from Github'
date = 2024-01-22T00:07:48+09:00
draft = false
Tags = ["git", "github"]
+++

### Change the author of your local repository 
`git rebase` or when you wish to make changes to only the last commit
{{< codeblock >}}git commit --amend --author="New Author Name <new.email@example.com>"
{{< /codeblock >}}

### Push to a remote repository
{{< codeblock >}}git push origin main --force
{{< /codeblock >}}


### Rename the default branch on Github
Visit your GitHub repository.
Change the default branch name from "main" to "main2".
After making the change, revert the default branch name back to "main".