const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files from public directory
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/hello', (req, res) => {
    res.json({ 
        message: 'Hello from Node.js!', 
        timestamp: new Date().toISOString() 
    });
});

app.get('/api/status', (req, res) => {
    res.json({ 
        status: 'Server is running',
        port: PORT,
        environment: process.env.NODE_ENV || 'development'
    });
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
        return res.status(400).json({ 
            error: 'All fields are required',
            message: 'Please fill in all fields: name, email, and message'
        });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ 
            error: 'Invalid email format',
            message: 'Please enter a valid email address'
        });
    }
    
    // In a real application, you would save this to a database or send an email
    console.log('Contact form submission:', { name, email, message, timestamp: new Date().toISOString() });
    
    res.json({ 
        success: true,
        message: 'Thank you for your message! I\'ll get back to you soon.',
        data: { name, email, submitted: new Date().toISOString() }
    });
});

// Portfolio data endpoint
app.get('/api/portfolio', (req, res) => {
    res.json({
        name: 'John Doe',
        title: 'Full Stack Developer',
        skills: [
            'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 
            'HTML5', 'CSS3', 'Git', 'Docker', 'AWS'
        ],
        projects: [
            {
                id: 1,
                name: 'E-Commerce Platform',
                description: 'Full-stack e-commerce solution with React and Node.js',
                technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
                github: 'https://github.com/johndoe/ecommerce',
                demo: 'https://ecommerce-demo.com'
            },
            {
                id: 2,
                name: 'Analytics Dashboard',
                description: 'Real-time analytics dashboard with interactive charts',
                technologies: ['React', 'D3.js', 'Express', 'WebSocket'],
                github: 'https://github.com/johndoe/analytics',
                demo: 'https://analytics-demo.com'
            },
            {
                id: 3,
                name: 'Mobile Task App',
                description: 'Cross-platform mobile app for task management',
                technologies: ['React Native', 'Firebase', 'Redux'],
                github: 'https://github.com/johndoe/taskapp',
                demo: 'https://taskapp-demo.com'
            }
        ]
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`API endpoints:`);
    console.log(`- GET /api/hello`);
    console.log(`- GET /api/status`);
});
