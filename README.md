Profile Card Component

A small, accessible, and responsive Profile Card component built with semantic HTML, modern CSS, and vanilla JavaScript. 
This project was developed following web accessibility (A11y) standards and includes specific data-testid attributes for automated testing.


🚀 Features

Responsive Design: Mobile-first layout that adjusts from a vertical stack to a side-by-side layout on larger screens.

Semantic HTML: Uses <article>, <figure>, <nav>, and <section> tags for better SEO and screen reader navigation.

Accessibility (A11y):

WCAG AA compliant color contrast.

Fully keyboard navigable with visible focus states.

Screen reader friendly with aria-live for dynamic time updates and descriptive alt text.

Real-time Clock: Displays the current epoch time in milliseconds, updating every 100ms.


🛠️ Tech Stack

HTML5 (Markup)

CSS3 (Flexbox/Grid/Media Queries)

Vanilla JavaScript (DOM Manipulation)



📂 Project Structure
text
├── index.html    # Main structure and semantic markup

├── style.css     # Responsive layout and styling

├── script.js    # Time update logic

└── README.md     # Documentation and setup instructions


🏁 Getting Started (Local Setup)

To run this project locally, you don't need to install any heavy frameworks or dependencies. You only need a web browser.

Option 1: Direct Open

Download/Clone this repository to your machine.

Navigate to the project folder.

Double-click the index.html file to open it in your default browser.

Option 2: Live Server (Recommended for Development)

If you are using VS Code, it is recommended to use the "Live Server" extension for a better experience:

Open the project folder in VS Code.

Install the Live Server extension (by Ritwick Dey).

Right-click on index.html and select "Open with Live Server".

The site will automatically refresh whenever you make changes to the code.



🧪 Testing

This component is built for automated testing. Each required element is tagged with a data-testid attribute:

test-profile-card: The main container.

test-user-name: The user's name.

test-user-bio: Short biography.

test-user-time: Current time in milliseconds.

test-user-avatar: Profile image.

test-user-social-links: Container for social media links.

test-user-hobbies: List of hobbies.

test-user-dislikes: List of dislikes.
