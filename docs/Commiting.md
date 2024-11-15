# Commiting
If you wish to commit, please follow the next steps:
1. [Get access](./Access.md) to the repo.
2. Once you gained access to the repo, read the [Project Structure file](./Project%20Structure.md).
3. Once you familiarized with the project's structure, create a branch on GitHub (ON the code page of the repo, click on main and make a new branch. If you can't, contact a repo mantainer).
4. Develop locally in your branch by cloning (`git clone https://github.com/artecsutepdev/Page.git`) and setting your remote origin to `git remote add origin https://github.com/artecsutepdev/Page.git`. If it gives you issues, try to see if it's set with `git remote -v`. In that case, it should show the URL of the repo, if not, contact a maintainer.
5. Push your changes with `git push origin <branchname>`. If any conflicts arise, push with `git pull origin <branchname>  --rebase`.
6. Create a pull request on GitHub with the appropriate flags