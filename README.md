## Forked so we could add custom functionality needed for Design System.

The things that are different from this repo to the original one:

- Added minDate and maxDate for validation,
- Set mode to 'all' and shouldUnregister to 'true' by default
- Added new prop resetCount to formState that increments by one each time reset() is run

---

To update this repo and install it in DS:

**In this repo**

- Make your changes to the code
- npm run build:modern
- Commit and push.
- git tag -a v7.14.0+snow.XXX -m "release 7.14.0+snow.XXX"
- git push origin 7.14.0-snow.XXX

**In uxui-snow-designsystem repo**

- You might need to remove react-hook-form from node_modules so new code is installed properly.
- npm update AlbinDalebySnow/react-hook-form

**Update this repo when new version of react-hook-form is released**
([How to update a forked repo with git rebase](https://medium.com/@topspinj/how-to-git-rebase-into-a-forked-repo-c9f05e821c8a))

Step 1: Add the remote (original repo that you forked) and call it “upstream”
`git remote add upstream https://github.com/react-hook-form/react-hook-form`

Step 2: Fetch all branches of remote upstream
`git fetch upstream`

Step 3: Rewrite your master with upstream’s master using git rebase.
`git rebase upstream/master`

Step 4: Push your updates to master. You may need to force the push with “--force”.
`git push origin master --force`

#### Link to original repo: [react-hook-form](https://github.com/react-hook-form/react-hook-form)
