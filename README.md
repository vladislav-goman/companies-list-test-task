#Task:
Create a simple React application that shows a list of construction companies, each with the
following information:

- Company name
- Logo (you may use a placeholder image)
- Specialties (e.g. Excavation, Plumbing, Electrical)
- City
  The following should be possible:
- Search for a company by typing into a search field. The search term gets matched only
  against the company name and the list of companies is filtered based on the search term
  in real time as the user is typing.
- Filter the list using a set of checkboxes to include only those companies which offer a
  particular specialty (e.g. only Plumbing).
  Create a simple API based on Node.js that returns the list of companies to the frontend. The
  API can read the data from a simple JSON source, no database setup is required.

#Dev notes:
Next js was used as a bootstrapping tool.
SSG or SSR features were not used in order not to alter the given task.
Also Next js optimizes images by default.

##Application improvement ideas:

- Implement infinite scroll (if the amount of companies fits in the user's ability to scroll);
- Implement pagination (filtering logic might be moved to the server side);
- Display applied filters in the URL and preserve them after page refresh;
- Add "Select all" / "Deselect all" filters button;
- Add "Show more" for filter options if there are more than N items;
- Add search input validation (try entering "[[[" c:)
- Show amount of companies for each specialty filter and sort by this amount;
- Implement picked filters with ability to easily untick an item;
- Improve UI (loading indicators, accessibility, error messages, ... and surely general styling);
- Apply responsiveness (the app only looks good on desktop);
- Move global state to React context (current need for that is questionable, but if the component tree would get more complicated this option becomes desired);
- The code seems to be already pretty extension friendly (friendly to add new types of filtering - e.g. by city), but the way state for filtering data gets created might be refactored to make this process reusable for new filters.
