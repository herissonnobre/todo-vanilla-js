## 📚 Repository Policies & Contribution Workflow

This repository uses a protected-branch workflow to keep the `main` branch stable and avoid unintended or accidental commits directly to it.  

### ✅ Branch Protection Rules (main)

- Direct commits or force-pushes to `main` are **not allowed**.  
- Branch deletion is **forbidden**.  
- All changes to `main` must go through a **Pull Request**.  
- Each Pull Request must have at least **one approving review** before merge.  
- After review, code must be merged via GitHub PR merge (merge / squash / rebase).  

### 🔄 Contribution / Development Workflow (for you or contributors)

1. Create a new branch for your work (e.g. `feat/xxx`, `fix/yyy`, etc.).  
2. Commit changes locally on your branch — feel free to structure commits as needed.  
3. Push your branch to the repository.  
4. Open a Pull Request (PR) targeting `main`.  
5. Wait for review and approval (if required).  
6. After approval, merge the PR using one of the allowed methods.  
7. Do **not** push directly to `main`, or rebase-force to rewrite history.  

### 📌 Rationale

- Prevent accidental breakage or regressions in the main branch.  
- Preserve clean and reviewable history.  
- Facilitate maintenance, code review and traceability.  

If you want to contribute or test fixes, follow these guidelines strictly — they help keep the project stable and maintainable.  
