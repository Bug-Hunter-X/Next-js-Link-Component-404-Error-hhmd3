# Next.js Link Component 404 Error

This repository demonstrates a common issue encountered when using the Next.js `Link` component:  links rendering correctly, but navigation resulting in a 404 error. The `bug.js` file shows the problematic code.  The solution, shown in `bugSolution.js`, addresses the issue.

**Problem:** The `Link` component is used, but it's not correctly handling routing.  This can manifest as a 404 error or unexpected page behavior.

**Solution:** The solution involves ensuring that the pages linked to are correctly defined in `pages` directory and that the paths used in the `href` attribute match the page file names.