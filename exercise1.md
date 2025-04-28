# Exercise 11.1 for a Python app, with Django.

To lint the code, we can use the Ruff, a Python linter, to make sure it is of good quality.
The backend will be tested using the Django testing feature, by sending requests and expecting them to return the right answers.
We can test the views returned by Django to the browser, too.
It's Python so there's nothing to build.

We could use GitLab, or CircleCI for the CI system.

If there are 6 people working on this project, it is quite big. So we can afford to purchase a small machine (we don't have to build the Python project) and run our CI system locally.