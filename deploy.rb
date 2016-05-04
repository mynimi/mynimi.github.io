# deploy site jekyllbuild to new master branch
#-------------

# delete master
`git branch -D master`

# new master
`git checkout -b master`

# remove jekyllbuild from gitignore
`sed '1d' -i .gitignore`
`git add -A`
`git commit -m "add jekyllbuild"`

# force jekyllbuild to be root
`git filter-branch --subdirectory-filter jekyllbuild/ -f`

`git push -f origin master`

# Checkout the source branch:
# `git checkout source`

#Push all branches to origin:
# `git push --all origin`

