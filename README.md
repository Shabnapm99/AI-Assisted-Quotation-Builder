#  AI-Assisted Quotation Builder

## 🔗 Live Demo

- https://ai-assisted-quotation-builder.vercel.app/

- Backend : https://ai-assisted-quotation-builder.onrender.com/


## Test user : 

- "email":"admin@example.com",
- "password":"password123"

### AI prompt Used - server/prompts/quotation-draft.md


## 📖 Description

AI Quotation Builder is a full-stack web application designed to help sales teams and freelancers create client quotations faster and more accurately using AI assistance.
Instead of manually drafting every line item from scratch, users can paste a short client request into the app and instantly receive an AI-generated draft — complete with suggested services, estimated hours, and clarifying questions to ask the client. The user reviews and edits everything before saving, keeping full control over the final quote.
The app covers the complete quotation lifecycle: from managing client records, creating and editing quotations with line items, tracking quote status (Draft → Sent → Approved / Rejected), all the way to automated notifications when a quote is approved — powered by an n8n webhook integration.

## ✨ Features

- 🧾 Create and manage quotations easily
- 👤 Client management (add, edit, delete clients)
- 📦 Add multiple items per quotation
- 🤖 AI-assisted suggestions for quote generation (pricing, descriptions, etc.)
- 💰 Automatic total calculation for quotes
- 📊 Real-time quote updates
- 🔍 Search and filter quotes
- 📁 Export quotes
- 🔐 Authentication & secure access
- 📱 Responsive UI for all devices


## 🛠️ Technologies Used

- **Frontend:** React.js
- **Backend / Database:** Node.js, Express.js, MongoDB
- **Authentication & Security:** JWT (JSON Web Tokens), bcrypt (password hashing)
- **AI Tool:** Gemini API
- **Styling:** CSS3 & Tailwind CSS
- **Libraries:** react-Router-Dom, react-icons,react-toastify,react-to-print,React-Redux
- **Version Control:** Git & GitHub
- **Deployment:** Vercel (FrontEnd), Render(Backend)

## Folder structure

client/
 └── src/
      ├── components/
      ├── pages/
      ├── features/
      ├── store/
      ├── routes/
      └── utility/


server/
 ├── src/
 │    ├── config/
 │    ├── controllers/
 │    ├── middlewares/
 │    ├── models/
 │    ├── routes/
 │    └── utils/
 ├── prompts/
 ├── index.js
 ├── .env

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps
1. Clone the repository
- git clone https://github.com/Shabnapm99/AI-Assisted-Quotation-Builder.git
- Navigate to project directory 
- Backend - cd server
- FrontEnd - cd client

2. Install dependencies 
- npm install - on both client and server directory
3. Configure Environment Variables

- Create a .env file inside the server folder and add:

MONGODB_URI =your_mongodb_connection_string
JWT_TOKEN=your_secret_key
PORT=4000
JWT_EXPIRESIN = "expiry-time"
GEMINI_API_KEY=gemini-api-key
FRONTEND_URL='http://localhost:5173'

- Create a .env file inside the client folder and add:

VITE_BASE_URL="http://localhost:4000/"

4. Start development server 
- npm start - Backend
- npm run dev - FrontEnd

5. Open http://localhost:5173/ &in your browser


## 📱 Responsive Design
This application is fully responsive and tested on:
- Mobile devices (375px and up)
- Tablets (768px and up)
- Desktop (1024px and up)

## 📸 Screenshots

| Dashboard | Create Quote | Details |
|----------|-------------|---------|
| ![1](assets/screenshots/addQuote.png) | ![2](assets/screenshots/clientsList.png) | ![3](assets/screenshots/Quote.png) |

## 🔮 Future Enhancements
- n8n integration
- Search and filter options on clients and quotations
- Basic tests for total calculation or AI validation. 
- Bilingual quotation support (English/Arabic). 
- Improve UI/UX
- PDF export with branding
- Email quotation directly to clients
- Advanced analytics dashboard
- Multi-user role support (Admin / Sales / Manager)
- AI-based pricing optimization


## 👤 Author
### Shabna PM
- GitHub: https://github.com/Shabnapm99
- LinkedIn: https://www.linkedin.com/in/shabnapm/

