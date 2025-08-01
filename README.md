# Personal Portfolio Website

A modern, responsive personal portfolio website built with Node.js and Express.js. Features a beautiful gradient design, interactive animations, and a working contact form.

## 🚀 Features

- **Modern Design**: Beautiful gradient background with smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Portfolio**: Showcase of projects with live demo and GitHub links
- **Contact Form**: Working contact form with validation and API backend
- **Skills Section**: Visual representation of technical skills
- **Social Links**: Integration with social media profiles
- **REST API**: Backend API endpoints for portfolio data and contact form

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Icons**: Font Awesome
- **Styling**: CSS Grid, Flexbox, CSS Animations

## 📁 Project Structure

```
portfolio-website/
├── app.js              # Main Express.js server
├── package.json        # Project dependencies and scripts
├── public/            # Static files directory
│   └── index.html     # Portfolio frontend
├── .gitignore         # Git ignore file
└── README.md          # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## 📚 API Endpoints

- `GET /` - Serves the main portfolio page
- `GET /api/hello` - Returns a hello message with timestamp
- `GET /api/status` - Returns server status information
- `GET /api/portfolio` - Returns portfolio data (skills, projects)
- `POST /api/contact` - Handles contact form submissions

## 🎨 Customization

To customize this portfolio for your own use:

1. **Personal Information**: Update the name, title, and bio in `public/index.html`
2. **Skills**: Modify the skills section with your own technologies
3. **Projects**: Replace the project examples with your own work
4. **Social Links**: Update the social media links in the header
5. **Contact Form**: The contact form logs to console - integrate with email service
6. **Styling**: Customize colors and styling in the CSS section

## 🚀 Deployment

This portfolio can be easily deployed to:
- **Heroku**: `git push heroku main`
- **Vercel**: Connect your GitHub repository
- **Netlify**: Deploy from GitHub
- **AWS/DigitalOcean**: Deploy on any VPS

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Feel free to reach out if you have any questions or suggestions!

The server will start on port 3000 by default, or use the PORT environment variable if set.

## Technologies Used

- Node.js
- Express.js
- HTML5
- CSS3
- JavaScript (ES6+)
