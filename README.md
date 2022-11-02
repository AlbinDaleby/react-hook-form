## Forked so we could add custom functionality needed for Design System.

The things that are different from this repo to the original one:

- Added minDate and maxDate for validation,
- Set mode to 'all' and shouldUnregister to 'true' by default
- Added new prop resetCount to formState that increments by one each time reset() is run

---

To update this repo and install it in DS:

**In uxui-snow-designsystem repo**

- You might need to remove react-hook-form from node_modules so new code is installed properly.
- npm update AlbinDalebySnow/react-hook-form

**Update this repo when new version of react-hook-form is released**
([How to update a forked repo with git rebase](https://medium.com/@topspinj/how-to-git-rebase-into-a-forked-repo-c9f05e821c8a))

I made a new branch then merged the latest version into it e.g `git merge v7.39.1`, fixed the conflicts then pushed, then merged into my own master, then created a release according to above
1. git checkout -b update-to-v7.39.1
2. git fetch upstream
3. git merge v7.39.1
4. fix conflicts
5. Make your changes to the code
6. npm run build:modern
7. Commit and push.
8. git tag -a v7.39.1+snow.XXX -m "release 7.39.1+snow.XXX"
9. git push origin v7.39.1+snow.XXX

#### Link to original repo: [react-hook-form](https://github.com/react-hook-form/react-hook-form)
